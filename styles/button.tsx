import { css } from 'stitches.config';

export const iconButton = css({
  display: 'grid',
  placeItems: 'center',
  borderRadius: '4px',
  background: 'transparent',
  width: '48px',
  height: '48px',
  border: 0,
  cursor: 'pointer',
  '&:hover': {
    background: '$accent'
  }
});
