import { css } from 'stitches.config';

export const iconButton = css({
  width: '$4xl',
  height: '$4xl',
  p: '$2',
  display: 'grid',
  placeItems: 'center',
  borderRadius: '$md',
  background: 'transparent',
  border: 0,
  cursor: 'pointer',
  transitionDuration: '300ms',
  '&:hover': {
    background: '$accent',
  },
});
