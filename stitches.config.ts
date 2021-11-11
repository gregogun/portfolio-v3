import { createStitches, PropertyValue, ScaleValue } from '@stitches/react';

export const stitchesConfig = createStitches({
  // DEFAULT THEME

  theme: {
    colors: {
      // --- NEUTRALS ---
      black: '#161616',
      white: '#fefefe',
      neutral50: '#efefef',
      neutral100: '#e8e8e8',
      neutral200: '#c7c7c7',
      neutral300: '#8f8f8f',
      neutral400: '#555555',
      neutral500: '#2f2f2f',
      purple: '#6556d9',
      teal: '#81e6d9',
      gradient1: 'linear-gradient(70deg, #4158D0, #C850C0, #FFCC70)',
      gradient2: 'linear-gradient(to right, #85FFBD, #FFFB7D)',
      gradient3: 'linear-gradient(to right, #0093E9, #80D0C7)',

      // --- SEMANTIC TOKENS ---
      primary: '$white',
      secondary: '$black',
      tertiary: '$neutral400',
      accent: '$neutral50',
      brand: '$purple',
      gradient: '$gradient1',
    },
    fonts: {
      body: 'InterVariable, apple-system, sans-serif',
      heading: 'InterVariable, apple-system, sans-serif',
    },
    space: {
      1: '4px',
      2: '8px',
      3: '12px',
      4: '16px',
      5: '24px',
      6: '32px',
      7: '40px',
      8: '64px',
      9: '96px',
      10: '128px',
      11: '256px',
      12: '512px',
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
      lg: '24px',
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
    bp1: '(min-width: 280px)',
    bp2: '(min-width: 768px)',
    bp3: '(min-width: 1024px)',
    bp4: '(min-width: 1440px)',
  },
  utils: {
    p: (value: ScaleValue<'space'> | PropertyValue<'padding'>) => ({
      paddingTop: value,
      paddingBottom: value,
      paddingLeft: value,
      paddingRight: value,
    }),
    pt: (value: ScaleValue<'space'> | PropertyValue<'paddingTop'>) => ({
      paddingTop: value,
    }),
    pr: (value: ScaleValue<'space'> | PropertyValue<'paddingRight'>) => ({
      paddingRight: value,
    }),
    pb: (value: ScaleValue<'space'> | PropertyValue<'paddingBottom'>) => ({
      paddingBottom: value,
    }),
    pl: (value: ScaleValue<'space'> | PropertyValue<'paddingLeft'>) => ({
      paddingLeft: value,
    }),
    px: (
      value: ScaleValue<'space'> | PropertyValue<'paddingLeft' & 'paddingRight'>
    ) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    py: (
      value: ScaleValue<'space'> | PropertyValue<'paddingTop' & 'paddingBottom'>
    ) => ({
      paddingTop: value,
      paddingBottom: value,
    }),
    m: (value: ScaleValue<'space'> | PropertyValue<'margin'>) => ({
      marginTop: value,
      marginBottom: value,
      marginLeft: value,
      marginRight: value,
    }),
    mt: (value: ScaleValue<'space'> | PropertyValue<'marginTop'>) => ({
      marginTop: value,
    }),
    mr: (value: ScaleValue<'space'> | PropertyValue<'marginRight'>) => ({
      marginRight: value,
    }),
    mb: (value: ScaleValue<'space'> | PropertyValue<'marginBottom'>) => ({
      marginBottom: value,
    }),
    ml: (value: ScaleValue<'space'> | PropertyValue<'marginLeft'>) => ({
      marginLeft: value,
    }),
    mx: (
      value: ScaleValue<'space'> | PropertyValue<'marginLeft' & 'marginRight'>
    ) => ({
      marginLeft: value,
      marginRight: value,
    }),
    my: (
      value: ScaleValue<'space'> | PropertyValue<'marginTop' & 'marginBottom'>
    ) => ({
      marginTop: value,
      marginBottom: value,
    }),
    boxSize: (value: ScaleValue<'sizes'>) => ({
      width: value,
      height: value,
    }),
    bg: (value: PropertyValue<'backgroundColor'>) => ({
      backgroundColor: value,
    }),
  },
});

// --- DARK THEME ---

export const darkTheme = stitchesConfig.createTheme('dark-theme', {
  colors: {
    primary: '$black',
    secondary: '$white',
    tertiary: '$neutral300',
    accent: '$neutral500',
    brand: '$teal',
    gradient: '$gradient2',
  },
});

// --- GLOBAL STYLES ---

export const globalStyles = stitchesConfig.globalCss({
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
    outlineOffset: '2px',
  },
  svg: { display: 'inline-block', verticalAlign: 'middle' },
});

globalStyles();

export const { styled, getCssText, css, keyframes } = stitchesConfig;
