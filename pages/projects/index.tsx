import Container from '@/components/container';
import { text } from '@/styles/text';
import { xylo } from '@/data/projects/xylo';
import { list } from '@/styles/list';
import { link } from '@/styles/link';
import { css, styled } from 'stitches.config';
import { useRef } from 'react';
import Image from 'next/image';

const roundedImage = css({});

const ProjectCard = ({ title, src, summary, imgSrc }) => {
  const linkRef = useRef(null);
  const rounded = '$lg';

  const fireClickEvent = () => {
    linkRef.current.click();
  };

  const ListItem: any = styled('li', {});
  const content = css({});

  const cardGradient =
    'linear-gradient(10deg, rgba(0, 0, 0, 0.75) 0%, rgba(0, 0, 0, 0.686) 8.1%, rgba(0, 0, 0, 0.676) 15.5%, rgba(0, 0, 0, 0.661) 22.5%, rgba(0, 0, 0, 0.641) 29%, rgba(0, 0, 0, 0.617) 35.3%, rgba(0, 0, 0, 0.591) 41.2%, rgba(0, 0, 0, 0.564) 47.1%,rgba(0, 0, 0, 0.536) 52.9%, rgba(0, 0, 0, 0.509) 58.8%, rgba(0, 0, 0, 0.483) 64.7%, rgba(0, 0, 0, 0.428) 71%, rgba(0, 0, 0, 0.410) 77.5%, rgba(0, 0, 0, 0.368) 84.5%, rgba(0, 0, 0, 0.316) 91.9%, rgba(0, 0, 0, 0.286) 100% )';

  return (
    <ListItem
      onClick={fireClickEvent}
      className={list({
        css: {
          '@bp1': {
            width: '343px',
            height: '256px',
          },
          '@bp2': {
            width: '640px',
            height: '360px',
          },
          '@bp3': {
            width: '652px',
            height: '360px',
          },
          background: 'rgba(0, 0, 0, 0.15)',
          position: 'relative',
          margin: 'auto',
          borderRadius: rounded,
          '&::before': {
            content: `''`,
            display: 'block',
            backgroundImage: 'none',
            position: 'absolute',
            top: '-4px',
            left: '-4px',
            width: 'calc(100% + 8px)',
            height: 'calc(100% + 8px)',
            borderRadius: 'inherit',
            zIndex: -1,
          },

          '&:focus-within > div ': {
            transform: 'none',
            opacity: 1,
          },

          '&:focus-within': {
            '&::before': {
              backgroundImage: '$gradient',
            },
          },
        },
      })}
    >
      <Image
        className={roundedImage({
          css: {
            borderRadius: rounded,
            transitionDuration: '500ms',
            zIndex: -1,
          },
        })}
        layout="fill"
        src={imgSrc}
        alt={title}
        objectFit="cover"
        objectPosition="center"
        priority
      />
      <div
        className={content({
          css: {
            cursor: 'pointer',
            position: 'absolute',
            boxSizing: 'border-box',
            borderRadius: 'inherit',
            display: 'block',
            background: cardGradient,
            margin: 0,
            width: '100%',
            height: '100%',
            top: '0',
            right: '0',
            bottom: '0',
            left: '0',
            opacity: 0,
            transition: 'opacity 300ms ease-in-out',

            '&::before': {
              position: 'absolute',
              top: '0',
              right: '0',
              bottom: '0',
              left: '0',
            },

            '&:hover': {
              background: cardGradient,
              transform: 'none',
              opacity: 1,
            },

            '&:hover > h2': {
              transform: 'none',
            },

            '&:hover > p': {
              transform: 'none',
            },

            '&:focus-within > h2': {
              transform: 'none',
            },

            '&:focus-within > p': {
              transform: 'none',
            },

            '@media (hover: none)': {
              transform: 'none',
              opacity: 1,
            },
          },
        })}
      >
        <h2
          className={text({
            type: 'heading',
            size: '4xl',
            css: {
              '@bp1': {
                bottom: '6rem',
                left: '3rem',
              },
              '@bp2': {
                bottom: '5rem',
                left: '3rem',
              },
              position: 'absolute',
              color: '$white',
              transform: 'translateX(-20%)',
              transition: 'transform 300ms ease-in-out',
            },
          })}
        >
          <a
            ref={linkRef}
            className={link({
              type: 'ghost',
              css: {
                display: 'block',
                outline: 'none',
              },
            })}
            href={src}
          >
            {title}
          </a>
        </h2>
        <p
          className={text({
            size: 'lg',
            css: {
              position: 'absolute',
              bottom: '2rem',
              left: '2rem',
              color: '$white',
              transform: 'translateY(30%)',
              transition: 'transform 300ms ease-in-out',
            },
          })}
        >
          {summary}
        </p>
      </div>
    </ListItem>
  );
};

export default function Projects() {
  return (
    <Container title="Projects - Greg Ogun">
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
