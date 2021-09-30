import { css } from 'stitches.config';

export const srOnly = css({
  variants: {
    type: {
      hidden: {
        position: 'absolute',
        width: '1px',
        height: '1px',
        padding: 0,
        margin: '-1px',
        overflow: 'hidden',
        clip: 'rect(0, 0, 0, 0)',
        whiteSpace: 'nowrap' /* added line */,
        border: 0,
      },
      skipNav: {
        '&[data-reach-skip-link]': {
          '@bp1': {
            top: '$2',
            left: '$8',
          },
          '@bp3': {
            top: '$4',
            left: '$6',
          },
          '@bp4': {
            top: '$6',
            left: '$12',
          },
          position: 'absolute',
          p: '$4',
          borderRadius: '$md',
          textDecoration: 'none',
          transform: 'translateX(-500%)',
          transition: 'transform 500ms',
        },
        '&[data-reach-skip-link]:focus': {
          transform: 'translateX(0%)',
          color: '$secondary',
        },
        '&[data-reach-skip-link]:visited': {
          color: '$secondary',
        },
      },
    },
  },

  defaultVariants: {
    type: 'hidden',
  },
});

export const VisuallyHidden = ({ children }) => {
  return <span className={srOnly()}>{children}</span>;
};
