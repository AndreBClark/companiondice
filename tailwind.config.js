const tint = require('polished/lib/color/tint');
const darken = require('polished/lib/color/darken');
module.exports = {
    theme: {
        extend: {
            colors: {
                deeppurple: {
                    900: darken(.25, "#44337a"),
                    800: darken(.225, "#44337a"),
                    700: darken(.2, "#44337a"),
                    600: darken(.175, "#44337a"),
                    500: darken(.15, "#44337a"),
                    400: darken(.125, "#44337a"),
                    300: darken(.1, "#44337a"),
                    200: darken(.05, "#44337a"),
                    100: darken(.025, "#44337a"),
                }
            }
        }
    },
    variants: {},
    plugins: []
}