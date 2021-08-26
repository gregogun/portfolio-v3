import { css } from '../stitches.config';

export const link = css({
  WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
  color: 'inherit',
  boxShadow: '0px 1px 0px 0px $colors$tertiary',
  transition: 'all 200ms linear 0ms',
  fontWeight: 'bold',
  textDecoration: 'none',

  '&:hover': {
    color: '$tertiary',
    transition: 'all 200ms linear 0ms'
  }
});
