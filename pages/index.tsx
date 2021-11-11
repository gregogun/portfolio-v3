import * as React from 'react';
import { text } from 'styles/text';
import { styled } from 'stitches.config';
import { link } from '@/styles/link';
import Container from '@/components/container';
import NextLink from 'next/link';
import Socials from '@/components/socials';

const Hero = styled('div', {
  '@bp3': {
    pl: '$8',
  },
});

// COMMENTING OUT UNTIL TYPINGS ARE DONE FOR SVG ICONS

// type IconProps = {
//   children?: never;
//   color?: string;
// }

// type IconLinkProps = {
//   Icon: IconProps;
//   href: string;
//   title?: string;
// };

export default function Home() {
  return (
    <Container title="Greg Ogun">
      <Hero>
        <h1
          className={text({
            css: {
              fontFamily: '$heading',
              mb: '2.5rem',
            },
            size: 'xl',
            weight: 'bold',
          })}
        >
          currently building this space
        </h1>
        <p
          className={text({
            css: {
              mb: '2.5rem',
            },
          })}
        >
          in the meantime {" you're "}, feel free to check out my latest project{' '}
          <NextLink href="/projects" passHref>
            <a className={link()} href="https://tuskk.vercel.app/">
              {`tusk.`}
            </a>
          </NextLink>
        </p>
        <p
          className={text({
            css: {
              mb: '2.5rem',
            },
          })}
        >
          you can also connect with me on my socials below.
        </p>
        {/* <h1
          className={text({
            css: {
              fontFamily: '$heading',
              mb: '2.5rem',
            },
            size: '3xl',
            weight: 'extrabold',
          })}
        >
          {`Hey, I'm Greg Ogun`}
        </h1>
        <h2
          className={text({
            css: {
              mb: '2.5rem',
            },
            size: 'lg',
            weight: 'semibold',
          })}
        >
          {`I'm a developer, designer, writer, and big time tea drinker.`}
        </h2>
        <p
          className={text({
            css: {
              mb: '2.5rem',
            },
          })}
        >
          welcome to my internet home.
        </p>
        <p
          className={text({
            css: {
              mb: '2.5rem',
            },
          })}
        >
          whilst {" you're "} here, feel free to check out{' '}
          <NextLink href="/projects" passHref>
            <a className={link()} href="https://go-guestbook.vercel.app/">
              {`what I'm working on.`}
            </a>
          </NextLink>
        </p> */}
        <footer>
          <Socials />
        </footer>
      </Hero>
    </Container>
  );
}
