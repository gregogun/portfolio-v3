import { createCss } from '@stitches/react';

export const stitchesConfig = createCss({
  theme: {
    colors: {
      // color tokens

      //neutrals
      black: '#161616',
      white: '#fefefe',
      neutral50: '#fcfcfc',
      neutral100: '#e8e8e8',
      neutral200: '#c7c7c7',
      neutral300: '#8f8f8f',
      neutral400: '#555555',
      neutral500: '#2f2f2f',

      // semantic tokens
      primary: '$white',
      secondary: '$black',
      tertiary: '$neutral400',
      accent: '$neutral100',
    },
    fonts: {
      sans: 'Inter, apple-system, Verdana, sans-serif'
    },
    media: {
      dark: '(prefers-color-scheme: dark)'
    }
  }
});

export const darkTheme = stitchesConfig.theme('dark-theme', {
  colors: {
    primary: '$black',
    secondary: '$white',
    tertiary: '$neutral300',
    accent: '$neutral500',

  }
});

export const globalStyles = stitchesConfig.global({
  '@dark': {
    // notice the `media` definition on the stitches.config.ts file
    ':root:not(.light)': {
      ...Object.keys(darkTheme.colors).reduce((varSet, currentColorKey) => {
        const currentColor = darkTheme.colors[currentColorKey];
        const currentColorValue =
          currentColor.value.substring(0, 1) === '$'
            ? `$colors${currentColor.value}`
            : currentColor.value;

        return {
          [currentColor.variable]: currentColorValue,
          ...varSet
        };
      }, {})
    }
  },
  '@font-face': {
    fontFamily: 'Inter',
    // fontStyle: 'normal',
    fontWeight: 400,
    fontDisplay: 'optional',
    src: 'url(./public/fonts/inter-v3-latin-regular.woff) format("woff") url(./public/fonts/inter-v3-latin-regular.woff2) format("woff2")'
  },
  '@font-face': {
    fontFamily: 'Inter',
    // fontStyle: 'normal',
    fontWeight: 600,
    fontDisplay: 'optional',
    src: 'url(./public/fonts/inter-v3-latin-600.woff) format("woff") url(./public/fonts/inter-v3-latin-600.woff2) format("woff2")'
  },
  '@font-face': {
    fontFamily: 'Inter',
    // fontStyle: 'normal',
    fontWeight: 800,
    fontDisplay: 'optional',
    src: 'url(./public/fonts/inter-v3-latin-800.woff) format("woff") url(./public/fonts/inter-v3-latin-800.woff2) format("woff2")'
  },
  '@font-face': {
    fontFamily: 'Poppins',
    // fontStyle: 'normal',
    fontWeight: 600,
    fontDisplay: 'optional',
    src: 'url(./public/fonts/poppins-v15-latin-600.woff) format("woff") url(./public/fonts/poppins-v15-latin-600.woff2) format("woff2")'
  }
});

globalStyles();

export const { styled, getCssString, css, keyframes } = stitchesConfig;
