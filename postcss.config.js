module.exports = {
    "plugins": [
        require('tailwindcss'),
        require('autoprefixer'),
        require('stylelint')({
            "extends": 'stylelint-config-recommended',
            "rules": {
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
            }
        }),
    ]
}