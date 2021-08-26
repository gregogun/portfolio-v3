import { createCss } from '@stitches/react';

export const stitchesConfig = createCss({
  // DEFAULT THEME

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
      accent: '$neutral100'
    },
    fonts: {
      body: 'Inter, apple-system, Verdana, sans-serif',
      heading: 'Poppins, apple-system, Verdana, sans-serif'
    },
    space: {
      1: '4px',
      2: '8px',
      3: '16px',
      4: '32px',
      5: '64px',
      6: '128px',
      7: '256px',
      8: '512px'
    },
    radii: {
      xs: '2px',
      sm: '4px',
      md: '8px',
      lg: '16px',
      full: '9999px'
    },
    media: {
      dark: '(prefers-color-scheme: dark)',
      bp1: '(min-width: 375px)',
      bp2: '(min-width: 768px)',
      bp3: '(min-width: 1024px)',
      bp4: '(min-width: 1440px)'
    }
  }
});

// DARK THEME

export const darkTheme = stitchesConfig.theme('dark-theme', {
  colors: {
    primary: '$black',
    secondary: '$white',
    tertiary: '$neutral300',
    accent: '$neutral500'
  }
});

// GLOBAL STYLES

export const globalStyles = stitchesConfig.global({
  // Makes every element inherit box-sizing from the body
  '*, *::before, *::after': {
    boxSizing: 'inherit'
  },
  html: {
    minWidth: '360px',
    scrollBehavior: 'smooth',
    overflowX: 'hidden'
  },
  body: {
    boxSizing: 'border-box',
    //backgroundColor: '$primary',
    color: '$secondary',
    fontFamily: '$body',
    margin: 0,
    // dotted background
    backgroundColor: '$primary',
    backgroundImage: 'radial-gradient($accent 0.5px, transparent 1px)',
    backgroundSize: '100px 100px'
  },
  '::selection': {
    backgroundColor: '$secondary',
    color: '$primary'
  },
  '*:focus': {
    outline: '1px dashed $secondary',
    outlineOffset: '1px'
  },
  svg: { display: 'inline-block', verticalAlign: 'middle' },

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
  '@font-face': [
    {
      fontFamily: 'Inter',
      // fontStyle: 'normal',
      fontWeight: '400 600 ',
      fontDisplay: 'optional',
      src: 'local("Inter") url(/static/fonts/inter-var-latin.woff2) format("woff2")',
      unicodeRange: `U+000-5FF`
    },
    {
      fontFamily: 'Poppins',
      fontStyle: 'normal',
      fontWeight: 600,
      fontDisplay: 'optional',
      src: 'local("Poppins") url(/static/fonts/poppins-v15-latin-600.woff) format("woff") url(/fonts/poppins-v15-latin-600.woff2) format("woff2")',
      unicodeRange: `U+000-5FF`
    }
  ]
});

globalStyles();

export const { styled, getCssString, css, keyframes } = stitchesConfig;
