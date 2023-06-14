const defaultTheme = require('tailwindcss/defaultTheme');

const fontSize = {
    xl: '40px',
    lg: '20px',
    md: '18px',
    sm: '16px',
    xs: '15px',
};

const fontFace = [
    {
        fontDisplay: 'auto',
        fontFamily: 'Montserrat',
        fontStyle: 'normal',
        fontWeight: 700,
        src: 'local("Montserrat-Bold"), '
            + 'url("~/assets/fonts/Montserrat-Bold.ttf") format("truetype")',
        'unicode-range': 'U+000-5FF',
    },
    {
        fontDisplay: 'auto',
        fontFamily: 'Montserrat',
        fontStyle: 'normal',
        fontWeight: 600,
        src: 'local("Montserrat-SemiBold"), '
            + 'url("~/assets/fonts/Montserrat-SemiBold.ttf") format("truetype")',
        'unicode-range': 'U+000-5FF',
    },
    {
        fontDisplay: 'auto',
        fontFamily: 'Montserrat',
        fontStyle: 'normal',
        fontWeight: 500,
        src: 'local("Montserrat-Medium"), '
            + 'url("~/assets/fonts/Montserrat-Medium.ttf") format("truetype")',
        'unicode-range': 'U+000-5FF',
    },
    {
        fontDisplay: 'auto',
        fontFamily: 'Montserrat',
        fontStyle: 'normal',
        fontWeight: 400,
        src: 'local("Montserrat-Regular"), '
            + 'url("~/assets/fonts/Montserrat-Regular.ttf") format("truetype")',
        'unicode-range': 'U+000-5FF',
    },
    {
        fontDisplay: 'auto',
        fontFamily: 'Inter',
        fontStyle: 'normal',
        fontWeight: 700,
        src: 'local("Inter-Bold"), '
            + 'url("~/assets/fonts/Inter-Bold.ttf") format("truetype")',
        'unicode-range': 'U+000-5FF',
    },
    {
        fontDisplay: 'auto',
        fontFamily: 'Inter',
        fontStyle: 'normal',
        fontWeight: 400,
        src: 'local("Inter-Regular"), '
            + 'url("~/assets/fonts/Inter-Regular.ttf") format("truetype")',
        'unicode-range': 'U+000-5FF',
    },
]

const fontFamily = {
    sans: ['Montserrat', 'sans-serif']
}

const typographyComponents = {
    '.text-xl-bold': {
        fontSize: fontSize.xl,
        lineHeight: '24px',
        fontWeight: defaultTheme.fontWeight.bold,
    },
    '.text-lg-bold': {
        fontSize: fontSize.lg,
        lineHeight: '24px',
        fontWeight: defaultTheme.fontWeight.bold,
    },
    '.text-lg': {
        fontSize: fontSize.lg,
        lineHeight: '24px',
        fontWeight: defaultTheme.fontWeight.normal,
    },
    '.text-md': {
        fontFamily: '"Inter"',
        fontSize: fontSize.md,
        lineHeight: '24px',
        fontWeight: defaultTheme.fontWeight.normal,
    },
    '.text-sm-bold': {
        fontSize: fontSize.sm,
        lineHeight: '24px',
        fontWeight: defaultTheme.fontWeight.bold,
    },
    '.text-sm-medium': {
        fontSize: fontSize.sm,
        lineHeight: '24px',
        fontWeight: defaultTheme.fontWeight.medium,
    },
    '.text-xs-medium': {
        fontSize: fontSize.xs,
        lineHeight: '24px',
        fontWeight: defaultTheme.fontWeight.medium,
    },
}

const headingBase = {
    h1: typographyComponents['.text-xl-bold'],
    h4: typographyComponents['.text-lg-bold'],
    'input': typographyComponents['.text-md'],
    'button': {
        ...typographyComponents['.text-lg-bold'],
        fontFamily: '"Inter"'
    }
};

module.exports = {
    fontSize,
    fontFace,
    fontFamily,
    typographyComponents,
    headingBase,
}
