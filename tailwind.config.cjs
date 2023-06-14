const plugin = require('tailwindcss/plugin');

const {
    fontSize,
    fontFamily,
    typographyComponents,
    colors,
    borderRadius,
    base,
} = require('./tailwind')

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [],
    theme: {
        container: {
            center: true,
            width: '1440px'
        },
        colors,
        borderRadius,
        fontSize,
        fontFamily,
    },
    plugins: [
        plugin(({
                    addBase,
                    addComponents,
                }) => {
            addBase(base);
            addComponents(typographyComponents);
        })
    ],
}

