const createRgbStringWithAlphaValueForVariable = (variable) => (
    `rgb(var(${variable}) / <alpha-value>)`
);

const createRgbStringForVariable = (variable) => (
    `rgb(var(${variable}))`
);

const colors = {
    blue: {
        600: createRgbStringWithAlphaValueForVariable('--blue-600'),
        400: createRgbStringWithAlphaValueForVariable('--blue-400'),
        200: createRgbStringWithAlphaValueForVariable('--blue-200'),
    },

    grey: {
        800: createRgbStringWithAlphaValueForVariable('--grey-800'),
        400: createRgbStringWithAlphaValueForVariable('--grey-400'),
    },

    white: createRgbStringWithAlphaValueForVariable('--white'),
    'white-additional': createRgbStringWithAlphaValueForVariable('--white-additional'),
    transparent: 'transparent',
    current: 'currentColor',
}

module.exports = { colors, createRgbStringForVariable, createRgbStringWithAlphaValueForVariable }
