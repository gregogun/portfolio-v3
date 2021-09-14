import { css } from 'stitches.config';

export const iconButton = css({
  display: 'grid',
  placeItems: 'center',
  borderRadius: '4px',
  background: 'transparent',
  border: 0,
  cursor: 'pointer',
  transitionDuration: '300ms',
  '&:hover': {
    background: '$accent',
  },
});
