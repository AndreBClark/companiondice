module.exports = {
    "plugins": [
        require('stylelint')('./stylelint.config.js'),
        require('tailwindcss'),
        require('autoprefixer'),
    ]
}