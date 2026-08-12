import http from "http";
import crypto from "crypto";
import { exec } from "child_process";
import { readFileSync } from "fs";

const PORT = process.env.PORT ? Number(process.env.PORT) : 8080;
const SECRET = process.env.GITHUB_WEBHOOK_SECRET || "";
const REPO_PATH = process.env.REPO_PATH || "/usr/src/app";
const GIT_BRANCH = process.env.GIT_BRANCH || "main";
const APP_CONTAINER_NAME = process.env.APP_CONTAINER_NAME || "h3oraculo_app";

function verifySignature(body, signature) {
  if (!SECRET) return true;
  if (!signature) return false;
  const hmac = crypto.createHmac("sha256", SECRET);
  hmac.update(body);
  const expected = `sha256=${hmac.digest("hex")}`;
  return crypto.timingSafeEqual(Buffer.from(expected), Buffer.from(signature));
}

function execCommand(command) {
  return new Promise((resolve, reject) => {
    exec(command, { cwd: REPO_PATH, env: process.env }, (err, stdout, stderr) => {
      if (err) {
        reject(new Error(`${command}\n${stderr || err.message}`));
      } else {
        resolve(stdout.trim());
      }
    });
  });
}

function restartAppContainer() {
  return new Promise((resolve, reject) => {
    const options = {
      socketPath: "/var/run/docker.sock",
      path: `/containers/${encodeURIComponent(APP_CONTAINER_NAME)}/restart?t=10`,
      method: "POST",
    };

    const req = http.request(options, (res) => {
      if (res.statusCode && res.statusCode >= 200 && res.statusCode < 300) {
        resolve();
      } else {
        let body = "";
        res.on("data", (chunk) => (body += chunk.toString()));
        res.on("end", () => reject(new Error(`Docker restart failed ${res.statusCode}: ${body}`)));
      }
    });

    req.on("error", reject);
    req.end();
  });
}

async function handlePayload(payload) {
  if (payload.ref !== `refs/heads/${GIT_BRANCH}`) {
    return `Ignored branch ${payload.ref}`;
  }

  await execCommand(`git fetch origin ${GIT_BRANCH} --depth=1`);
  await execCommand(`git checkout ${GIT_BRANCH}`);
  await execCommand(`git reset --hard origin/${GIT_BRANCH}`);
  await execCommand("npm ci");
  await execCommand("npm run build");
  await restartAppContainer();
  return "Updated and restarted app.";
}

const server = http.createServer(async (req, res) => {
  if (req.method !== "POST" || req.url !== "/github-webhook") {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Not found\n");
    return;
  }

  const signature = req.headers["x-hub-signature-256"];
  const event = req.headers["x-github-event"];
  const chunks = [];

  for await (const chunk of req) {
    chunks.push(chunk);
  }

  const body = Buffer.concat(chunks);

  if (!verifySignature(body, signature)) {
    res.writeHead(401, { "Content-Type": "text/plain" });
    res.end("Invalid signature\n");
    return;
  }

  if (event !== "push") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end(`Ignored event: ${event}\n`);
    return;
  }

  let payload;
  try {
    payload = JSON.parse(body.toString());
  } catch (err) {
    res.writeHead(400, { "Content-Type": "text/plain" });
    res.end("Invalid JSON\n");
    return;
  }

  try {
    const result = await handlePayload(payload);
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end(`${result}\n`);
  } catch (error) {
    console.error(error);
    res.writeHead(500, { "Content-Type": "text/plain" });
    res.end(`Deploy failed: ${error.message}\n`);
  }
});

server.listen(PORT, () => {
  console.log(`GitHub webhook receiver listening on port ${PORT}`);
  console.log(`Watching branch ${GIT_BRANCH} in ${REPO_PATH}`);
});
