/**
 * Web Audio API Sound Utility for Game Timer Alerts
 * Synthesizes clean, atmospheric sounds directly in the browser.
 */

let audioCtx: AudioContext | null = null;

function getAudioContext(): AudioContext {
  if (!audioCtx) {
    audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)();
  }
  if (audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
  return audioCtx;
}

/**
 * Plays a clean, retro woodblock/blip tick sound
 * Designed to be short, pleasant, and highly audible for second-by-second countdowns.
 */
export function playTickSound() {
  try {
    const ctx = getAudioContext();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.connect(gain);
    gain.connect(ctx.destination);

    // Warm triangle/sine blend
    osc.type = 'triangle';
    // Frequency of 1000Hz (B5) for high clarity
    osc.frequency.setValueAtTime(1000, ctx.currentTime);

    // Start slightly louder and quickly decay to zero
    gain.gain.setValueAtTime(0.12, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.1);

    osc.start(ctx.currentTime);
    osc.stop(ctx.currentTime + 0.12);
  } catch (err) {
    console.warn('Failed to play tick sound (User interaction might be required first):', err);
  }
}

/**
 * Plays a distinct, satisfying retro alarm / bell sound
 * Alerting players that their turn has officially ended.
 */
export function playTimeOutSound() {
  try {
    const ctx = getAudioContext();
    
    // Create two oscillators for a richer harmonic blend (bell/buzzer style)
    const osc1 = ctx.createOscillator();
    const osc2 = ctx.createOscillator();
    const gain = ctx.createGain();

    osc1.connect(gain);
    osc2.connect(gain);
    gain.connect(ctx.destination);

    // Fundamental and a slightly detuned fifth to create a vibrant alarm ring
    osc1.type = 'sine';
    osc1.frequency.setValueAtTime(440, ctx.currentTime); // A4
    
    osc2.type = 'triangle';
    osc2.frequency.setValueAtTime(660, ctx.currentTime); // E5

    gain.gain.setValueAtTime(0.18, ctx.currentTime);
    // Smooth decay over half a second
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.6);

    osc1.start(ctx.currentTime);
    osc2.start(ctx.currentTime);
    
    osc1.stop(ctx.currentTime + 0.6);
    osc2.stop(ctx.currentTime + 0.6);
  } catch (err) {
    console.warn('Failed to play timeout sound (User interaction might be required first):', err);
  }
}
