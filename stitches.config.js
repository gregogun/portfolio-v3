import { createCss } from '@stitches/react';

export const stitchesConfig = createCss({
  theme: {
    colors: {
      primary: '#fef',
      secondary: '#010',
      tertiary: '#a1a1a1'
    },
    fonts: {
      sans: 'Inter, apple-system, sans-serif'
    },
    media: {
      dark: '(prefers-color-scheme: dark)'
    }
  }
});

export const darkTheme = stitchesConfig.theme({
  colors: {
    primary: '#010',
    secondary: '#fef',
    tertiary: '#898989'
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
  }
});

globalStyles();

export const { styled, getCssString, css, keyframes } = stitchesConfig;
