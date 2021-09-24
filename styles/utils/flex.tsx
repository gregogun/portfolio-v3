import { css } from 'stitches.config';

export const flex = css({
  display: 'flex',

  variants: {
    flow: {
      horizontal: {
        flexDirection: 'row',
      },
      vertical: {
        flexDirection: 'column',
      },
    },
    spaced: {
      none: {
        justifyContent: 'normal',
      },
      even: {
        justifyContent: 'space-evenly',
      },
      full: {
        justifyContent: 'space-between',
      },
    },
    alignment: {
      start: {
        alignItems: 'start',
      },
      center: {
        alignItems: 'center',
      },
      end: {
        alignItems: 'end',
      },
    },
  },

  defaultVariants: {
    flow: 'horizontal',
    spaced: 'none',
    alignment: 'center',
  },
});
