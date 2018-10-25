module.exports = {
  release: {
    branch: "master"
  },
  plugins: [
    [
      "@semantic-release/commit-analyzer",
      {
        preset: "angular",
        releaseRules: [
          { type: "bug", release: "patch" },
          { type: "zap", release: "patch" },
          { type: "lipstick", release: "patch" },
          { type: "ambulance", release: "patch" },
          { type: "memo", release: "patch" },
          { type: "sparkles", release: "minor" },
          { type: "recycle", release: "minor" },
          { type: "boom", release: "major" }
        ],
        parserOpts: {
          parserOpts: {
            headerPattern: /^(?::([\w-]*):)?\s*(\w*):\s*(.*)$/,
            headerCorrespondence: ["emoji", "tag", "message"]
          },
          noteKeywords: ["BREAKING CHANGE", "BREAKING CHANGES", "BREAKING"]
        }
      }
    ],
    "@semantic-release/release-notes-generator",
    "@semantic-release/npm",
    "@semantic-release/github"
  ]
}
