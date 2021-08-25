import { css } from '../stitches.config';

export const text = css({
  boxSizing: 'border-box',
  lineHeight: 'inherit',
  margin: 0,

  variants: {
    type: {
      body: {
        fontFamily: '$body'
      },
      heading: {
        fontFamily: '$heading'
      }
    },
    size: {
      xs: {
        fontSize: '14px',
        lineHeight: '21px'
      },
      sm: {
        fontSize: '16px',
        lineHeight: '22px'
      },
      md: {
        fontSize: '18px',
        lineHeight: '24px'
      },
      lg: {
        fontSize: '20px',
        lineHeight: '30px'
      },
      xl: {
        fontSize: '24px',
        lineHeight: '36px'
      },
      '2xl': {
        fontSize: '32px',
        lineHeight: '48px'
      },
      '3xl': {
        fontSize: '40px',
        lineHeight: '48px'
      },
      '4xl': {
        fontSize: '48px',
        lineHeight: '48px'
      },
      title: {
        fontSize: '64px',
        lineHeight: '72px'
      }
    },
    weight: {
      bold: {
        fontStyle: 'normal',
        fontWeight: '600'
      },
      semibold: {
        fontStyle: 'normal',
        fontWeight: '500'
      },
      regular: {
        fontStyle: 'normal',
        fontWeight: '400'
      }
    }
  },

  defaultVariants: {
    size: 'md',
    weight: 'regular',
    type: 'body'
  }
});
