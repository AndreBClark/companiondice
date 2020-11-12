module.exports = {
    root: true,
    plugins: ["stylelint-prettier"],
    extends: [
        'stylelint-config-recommended',
        'stylelint-config-css-modules'
    ],
    rules: {
        "at-rule-no-unknown": [true, {
            ignoreAtRules: [
                "screen",
                "extends",
                "responsive",
                "tailwind",
                "apply"
            ]
        }],
        "block-no-empty": null,
    },
    fix: true
}