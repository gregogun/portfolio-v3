import { css } from '../stitches.config';

export const text = css({
  boxSizing: 'border-box',
  lineHeight: 'inherit',
  margin: 0,

  variants: {
    type: {
      body: {
        fontFamily: '$body',
      },
      heading: {
        fontFamily: '$heading',
      },
    },
    size: {
      xs: {
        '@bp1': {
          fontSize: '12px',
          lineHeight: '18px',
        },
        '@bp2': {
          fontSize: '14px',
          lineHeight: '21px',
        },
      },
      sm: {
        '@bp1': {
          fontSize: '14px',
          lineHeight: '21px',
        },
        '@bp2': {
          fontSize: '16px',
          lineHeight: '22px',
        },
      },
      md: {
        '@bp1': {
          fontSize: '16px',
          lineHeight: '22px',
        },
        '@bp2': {
          fontSize: '18px',
          lineHeight: '24px',
        },
      },
      lg: {
        '@bp1': {
          fontSize: '18px',
          lineHeight: '24px',
        },
        '@bp2': {
          fontSize: '20px',
          lineHeight: '28px',
        },
      },
      xl: {
        '@bp1': {
          fontSize: '22px',
          lineHeight: '32px',
        },
        '@bp3': {
          fontSize: '24px',
          lineHeight: '36px',
        },
      },
      '2xl': {
        '@bp1': {
          fontSize: '28px',
          lineHeight: '40px',
        },
        '@bp3': {
          fontSize: '32px',
          lineHeight: '48px',
        },
      },
      '3xl': {
        '@bp1': {
          fontSize: '32px',
          lineHeight: '48px',
        },
        '@bp3': {
          fontSize: '40px',
          lineHeight: '48px',
        },
      },
      '4xl': {
        '@bp1': {
          fontSize: '40px',
          lineHeight: '48px',
        },
        '@bp3': {
          fontSize: '48px',
          lineHeight: '48px',
        },
      },
      title: {
        '@bp1': {
          fontSize: '48px',
          lineHeight: '56px',
        },
        '@bp3': {
          fontSize: '64px',
          lineHeight: '72px',
        },
      },
    },
    weight: {
      black: {
        fontStyle: 'normal',
        fontWeight: 900,
      },
      extrabold: {
        fontStyle: 'normal',
        fontWeight: 800,
      },
      bold: {
        fontStyle: 'normal',
        fontWeight: 700,
      },
      semibold: {
        fontStyle: 'normal',
        fontWeight: 600,
      },
      regular: {
        fontStyle: 'normal',
        fontWeight: 400,
      },
      light: {
        fontStyle: 'normal',
        fontWeight: 300,
      },
    },
  },

  defaultVariants: {
    size: 'md',
    weight: 'regular',
    type: 'body',
  },
});
