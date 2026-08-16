module.exports = {
  branches: ['main'],

  plugins: [
    [
      '@semantic-release/commit-analyzer',
      {
        preset: 'angular',
        parserOpts: {
          breakingHeaderPattern: /^(\w*)(?:\(([\w$@.\-*/ ]*)\))?!: (.*)$/,
          breakingHeaderCorrespondence: ['type', 'scope', 'subject']
        }
      }
    ],

    [
      '@semantic-release/release-notes-generator',
      {
        preset: 'angular',
        parserOpts: {
          breakingHeaderPattern: /^(\w*)(?:\(([\w$@.\-*/ ]*)\))?!: (.*)$/,
          breakingHeaderCorrespondence: ['type', 'scope', 'subject']
        }
      }
    ],

    [
      '@semantic-release/changelog',
      {
        changelogFile: 'CHANGELOG.md',
        changelogTitle: '# Changelog'
      }
    ],

    [
      '@semantic-release/npm',
      {
        npmPublish: false
      }
    ],

    [
      '@semantic-release/git',
      {
        assets: [
          'package.json',
          'package-lock.json',
          'CHANGELOG.md'
        ],
        message: 'chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}'
      }
    ],

    '@semantic-release/github'
  ]
};