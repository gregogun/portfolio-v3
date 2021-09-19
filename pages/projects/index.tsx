import Container from '@/components/container';
import { text } from '@/styles/text';
import { xylo } from '@/data/projects/xylo';
import { list } from '@/styles/list';
import { link } from '@/styles/link';
import { styled } from 'stitches.config';
import { ImageRounded } from '@/components/image';
import { useRef } from 'react';
import useToggle from '@/utils/hooks/useToggle';

const ImgWrap: any = styled('div', {});

const ProjectCard = ({ title, src, summary, imgSrc }) => {
  const [hover, toggleHover] = useToggle();
  const linkRef = useRef(null);
  const rounded = '$lg';

  const fireClickEvent = () => {
    linkRef.current.click();
  };

  return (
    <li
      className={list({
        css: {
          position: 'relative',
          width: '704px',
          height: '400px',
          borderRadius: rounded,
          backgroundColor: 'transparent',
          '&:hover': {
            boxShadow: '0 0 0 0.25rem #7B61FF',
          },
          '&:focus-within': {
            boxShadow: '0 0 0 0.25rem #7B61FF',
          },
        },
      })}
    >
      <ImgWrap
        onMouseEnter={toggleHover}
        onMouseLeave={toggleHover}
        css={{
          height: 'inherit',
          width: 'inherit',
          borderRadius: rounded,
          cursor: 'pointer',
          transitionDuration: '300ms',
          filter: 'brightness(95%)',
          '&:hover': {
            filter: 'brightness(65%)',
          },
        }}
        onClick={fireClickEvent}
      >
        <ImageRounded
          rounded={rounded}
          layout="fill"
          src={imgSrc}
          alt={title}
          objectFit="cover"
          objectPosition="center"
          priority
        />
      </ImgWrap>
      <h1
        className={text({
          type: 'heading',
          size: '4xl',
          css: {
            pointerEvents: 'none',
            position: 'absolute',
            bottom: '6rem',
            left: '2rem',
            color: '$white',
            transitionDuration: '500ms',
            transform: hover ? 'translateX(0)' : 'translateX(-20%)',
            opacity: hover ? 1 : 0,
          },
        })}
      >
        <a
          ref={linkRef}
          className={link({
            type: 'ghost',
            css: {
              zIndex: 1,
              display: 'block',
              '&::after': {
                position: 'absolute',
                left: 0,
                top: 0,
                right: 0,
                bottom: 0,
                content: '',
              },
            },
          })}
          href={src}
        >
          {title}
        </a>
      </h1>
      <p
        className={text({
          size: 'lg',
          css: {
            pointerEvents: 'none',
            position: 'absolute',
            bottom: '2rem',
            left: '2rem',
            color: '$white',
            transitionDuration: '500ms',
            transform: hover ? 'translateY(0)' : 'translateY(50%)',
            opacity: hover ? 1 : 0,
          },
        })}
      >
        {summary}
      </p>
    </li>
  );
};

export default function Projects() {
  return (
    <Container>
      <h1
        className={text({
          css: {
            '@bp3': {
              size: '4xl',
            },
            fontFamily: '$heading',
            marginBottom: '1rem',
          },
          size: '3xl',
          weight: 'semibold',
        })}
      >
        Projects
      </h1>
      <p
        className={text({
          css: {
            marginBottom: '2.5rem',
          },
          size: 'lg',
        })}
      >
        {`A list of things I'm currently working on.`}
      </p>
      <ul className={list()}>
        <ProjectCard {...xylo} />
      </ul>
    </Container>
  );
}
