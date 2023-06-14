const { createRgbStringForVariable } = require('./colors.cjs');
const { fontFace, headingBase } = require('./typography')

module.exports.base = {
    html: {
        height: '100%',
    },

    body: {
        overflowX: 'hidden',
        backgroundColor: createRgbStringForVariable('--white'),
    },

    button: {
        cursor: 'pointer',
    },

    '*, *::before, *::after': {
        '-webkit-tap-highlight-color': 'transparent',
    },

    '@font-face': fontFace,

    ...headingBase,
};
