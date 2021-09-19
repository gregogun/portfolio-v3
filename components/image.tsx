import Image from 'next/image';
import { css } from 'stitches.config';

export const rounded = css({});

export const ImageRounded = (props) => {
  return (
    <Image
      src={props.src}
      alt={props.alt}
      {...props}
      className={rounded({
        css: props.rounded ? { borderRadius: props.rounded } : null,
        ...props.css,
      })}
    />
  );
};
