import { createCss } from '@stitches/react';

export const stitchesConfig = createCss({
  // DEFAULT THEME

  theme: {
    colors: {
      // --- NEUTRALS ---
      black: '#161616',
      white: '#fefefe',
      neutral50: '#fcfcfc',
      neutral100: '#e8e8e8',
      neutral200: '#c7c7c7',
      neutral300: '#8f8f8f',
      neutral400: '#555555',
      neutral500: '#2f2f2f',
      gradient1: 'linear-gradient(70deg, #4158D0, #C850C0, #FFCC70)',
      gradient2: 'linear-gradient(to right, #85FFBD, #FFFB7D)',
      gradient3: 'linear-gradient(to right, #0093E9, #80D0C7)',

      // --- SEMANTIC TOKENS ---
      primary: '$white',
      secondary: '$black',
      tertiary: '$neutral400',
      accent: '$neutral100',
      gradientLight: 'gradient1',
    },
    fonts: {
      body: 'InterVariable, apple-system, sans-serif',
      heading: 'InterVariable, apple-system, sans-serif',
    },
    space: {
      1: '4px',
      2: '8px',
      3: '16px',
      4: '32px',
      5: '64px',
      6: '128px',
      7: '256px',
      8: '512px',
    },
    sizes: {
      max: 'max-content',
      min: 'min-content',
      full: '100%',
      xs: '0.125rem',
      sm: '0.5rem',
      md: '1rem',
      lg: '1.5rem',
      xl: '2rem',
      '2xl': '2.5rem',
      '3xl': '3rem',
      '4xl': '4rem',
      '5xl': '5rem',
      '6xl': '6rem',
      '7xl': '8rem',
      '8xl': '16rem',
    },
    radii: {
      xs: '2px',
      sm: '4px',
      md: '8px',
      lg: '16px',
      full: '9999px',
    },
    zIndices: {
      hide: -1,
      auto: 'auto',
      base: 0,
      docked: 10,
      dropdown: 1000,
      sticky: 1100,
      banner: 1200,
      overlay: 1300,
      modal: 1400,
      popover: 1500,
      skipLink: 1600,
      toast: 1700,
      tooltip: 1800,
    },
  },
  media: {
    dark: '(prefers-color-scheme: dark)',
    bp1: '(min-width: 375px)',
    bp2: '(min-width: 768px)',
    bp3: '(min-width: 1024px)',
    bp4: '(min-width: 1440px)',
  },
  utils: {
    p:
      (config) =>
      (value: keyof typeof config.theme['space'] | number | (string & {})) => ({
        paddingTop: value,
        paddingBottom: value,
        paddingLeft: value,
        paddingRight: value,
      }),
    pt:
      (config) =>
      (value: keyof typeof config.theme['space'] | number | (string & {})) => ({
        paddingTop: value,
      }),
    pr:
      (config) =>
      (value: keyof typeof config.theme['space'] | number | (string & {})) => ({
        paddingRight: value,
      }),
    pb:
      (config) =>
      (value: keyof typeof config.theme['space'] | number | (string & {})) => ({
        paddingBottom: value,
      }),
    pl:
      (config) =>
      (value: keyof typeof config.theme['space'] | number | (string & {})) => ({
        paddingLeft: value,
      }),
    px:
      (config) =>
      (value: keyof typeof config.theme['space'] | number | (string & {})) => ({
        paddingLeft: value,
        paddingRight: value,
      }),
    py:
      (config) =>
      (value: keyof typeof config.theme['space'] | number | (string & {})) => ({
        paddingTop: value,
        paddingBottom: value,
      }),
    m:
      (config) =>
      (value: keyof typeof config.theme['space'] | number | (string & {})) => ({
        marginTop: value,
        marginBottom: value,
        marginLeft: value,
        marginRight: value,
      }),
    mt:
      (config) =>
      (value: keyof typeof config.theme['space'] | number | (string & {})) => ({
        marginTop: value,
      }),
    mr:
      (config) =>
      (value: keyof typeof config.theme['space'] | number | (string & {})) => ({
        marginRight: value,
      }),
    mb:
      (config) =>
      (value: keyof typeof config.theme['space'] | number | (string & {})) => ({
        marginBottom: value,
      }),
    ml:
      (config) =>
      (value: keyof typeof config.theme['space'] | number | (string & {})) => ({
        marginLeft: value,
      }),
    mx:
      (config) =>
      (value: keyof typeof config.theme['space'] | number | (string & {})) => ({
        marginLeft: value,
        marginRight: value,
      }),
    my:
      (config) =>
      (value: keyof typeof config.theme['space'] | number | (string & {})) => ({
        marginTop: value,
        marginBottom: value,
      }),
    boxSize:
      (config) =>
      (value: keyof typeof config.theme['sizes'] | number | (string & {})) => ({
        width: value,
        height: value,
      }),
    bc:
      (config) =>
      (value: keyof typeof config.theme['colors'] | (string & {})) => ({
        backgroundColor: value,
      }),
  },
});

// --- DARK THEME ---

export const darkTheme = stitchesConfig.theme('dark-theme', {
  colors: {
    primary: '$black',
    secondary: '$white',
    tertiary: '$neutral300',
    accent: '$neutral500',
  },
});

// --- GLOBAL STYLES ---

export const globalStyles = stitchesConfig.global({
  // Makes every element inherit box-sizing from the body
  '*, *::before, *::after': {
    boxSizing: 'inherit',
  },
  html: {
    minWidth: '360px',
    scrollBehavior: 'smooth',
    overflowX: 'hidden',
  },
  body: {
    boxSizing: 'border-box',
    backgroundColor: '$primary',
    color: '$secondary',
    fontFamily: '$body',
    margin: 0,
  },
  '::selection': {
    backgroundColor: '$secondary',
    color: '$primary',
  },
  '*:focus': {
    outline: '1px dashed $secondary',
    outlineOffset: '1px',
  },
  svg: { display: 'inline-block', verticalAlign: 'middle' },

  // COMMENTING OUT TILL CHECKS IN PROD

  // '@dark': {
  //   // notice the `media` definition on the stitches.config.ts file
  //   ':root:not(.light)': {
  //     ...Object.keys(darkTheme.colors).reduce((varSet, currentColorKey) => {
  //       const currentColor = darkTheme.colors[currentColorKey];
  //       const currentColorValue =
  //         currentColor.value.substring(0, 1) === '$'
  //           ? `$colors${currentColor.value}`
  //           : currentColor.value;

  //       return {
  //         [currentColor.variable]: currentColorValue,
  //         ...varSet
  //       };
  //     }, {})
  //   }
  // },
  // '@font-face': [
  //   {
  //     fontFamily: 'Inter',
  //     fontStyle: 'normal',
  //     fontWeight: '400 600',
  //     fontDisplay: 'optional',
  //     src: 'local("Inter") url(/static/fonts/inter-var-latin.woff2) format("woff2")',
  //     unicodeRange: `U+000-5FF`,
  //   },
  //   {
  //     fontFamily: 'Poppins',
  //     fontStyle: 'normal',
  //     fontWeight: 600,
  //     fontDisplay: 'optional',
  //     src: 'local("Poppins") url(/static/fonts/poppins-v15-latin-600.woff) format("woff") url(/fonts/poppins-v15-latin-600.woff2) format("woff2")',
  //     unicodeRange: `U+000-5FF`,
  //   },
  // ],
});

globalStyles();

export const { styled, getCssString, css, keyframes } = stitchesConfig;
