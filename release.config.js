module.exports = {
    branches: ['main'],
    debug: true,
	plugins: [
        [
            '@semantic-release/changelog',
            { changelogFile: 'CHANGELOG.md' }
        ],
        "@semantic-release/npm",
        [
            "@semantic-release/git",
            {
                "assets": ['CHANGELOG.md'],
                "message": "release(version): Release ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}"
            }
        ],
        "@semantic-release/github",
        [
            "@semantic-release/commit-analyzer",
            {
                releaseRules: [
                    {revert: true, release: "patch"},
                    {breaking: true, release: 'major'},
                    {type: "feat", release: "minor"},
                    {type: "fix", release: "patch"},
                    {type: "docs", release: "patch"},
                    {type: 'revert', release: 'patch'},
                    {type: "perf", release: "patch"},
                    {type: 'build', release: 'patch'},
                    {type: 'ci', release: false},
                    {type: "test", release: false},
                    {type: "chore", release: false},
                    {type: "style", release: false},
                    {type: "refactor", release: false},
                ]
            }
        ],
        [
            "@semantic-release/release-notes-generator",
            {
                parserOpts: {
                    mergePattern: "^Merge branch '(.*)' into (.*)$",
                    noteKeywords: ["BREAKING CHANGE", "BREAKING CHANGES", "BREAKING"],
                },
                writerOpts: {
                    commitsSort: ["subject", "scope"]
                },
                presetConfig: {
                    types: [
                        {type: "fix", section: "🛠 Fixes"},
                        {type: "feat", section: "🚀 Features"},
                        {type: "perf", section: "🏎️ Performance"},
                        {type: "build", hidden: true},
                        {type: "ci", hidden: true},
                        {type: "docs", hidden: true},
                        {type: "test", hidden: true},
                        {type: "chore", hidden: true},
                        {type: "style", hidden: true},
                        {type: "revert", hidden: true},
                        {type: "refactor", hidden: true},
                    ]
                }
            }
        ],
    ]
};