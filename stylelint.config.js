module.exports = {
    "plugins": ["stylelint-prettier"],
    "extends": 'stylelint-config-recommended',
    "rules": {
        "prettier/prettier": true,
        "at-rule-no-unknown": [true, {
            "ignoreAtRules": [
                "screen",
                "extends",
                "responsive",
                "tailwind",
                "apply"
            ]
        }],
        "block-no-empty": null,
    },
    "fix": true
}