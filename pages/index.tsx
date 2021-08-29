import * as React from 'react';
import { text } from 'styles/text';
import { styled } from 'stitches.config';
import { github, linkedin, twitter, twitch, youtube } from 'data/socials';
import { link } from '@/styles/link';
import { icon } from '@/styles/icon';
import Container from '@/components/container';

const ListItem = styled('li', {
  listStyle: 'none'
});

const List = styled('ul', {
  textIndent: '0',
  listStyleType: 'none',
  padding: '0',
  margin: '0',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '248px'
});

const VisuallyHidden = styled('span', {
  position: 'absolute',
  width: '1px',
  height: '1px',
  padding: 0,
  margin: '-1px',
  overflow: 'hidden',
  clip: 'rect(0, 0, 0, 0)',
  whiteSpace: 'nowrap' /* added line */,
  border: 0
});

const Link = ({ children, href, isExternal = false }) => {
  return (
    <a
      href={href}
      rel="noreferrer noopener"
      target={isExternal ? '_blank' : undefined}
    >
      {children}
    </a>
  );
};

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

const IconLink = ({ Icon, href, title = null, color = null, ...props }) => {
  return (
    <Link href={href} isExternal {...props}>
      <Icon
        className={icon({
          css: {
            '&:hover': { fill: color, transform: 'translateY(-2px)' }
          }
        })}
        aria-hidden="true"
        focusable="false"
      />
      <VisuallyHidden>{title}</VisuallyHidden>
    </Link>
  );
};

const Socials = () => {
  return (
    <List>
      <ListItem>
        <IconLink
          Icon={github.icon}
          href={github.href}
          title={github.name}
          color={github.color}
        />
      </ListItem>
      <ListItem>
        <IconLink
          Icon={linkedin.icon}
          href={linkedin.href}
          title={linkedin.name}
          color={linkedin.color}
        />
      </ListItem>
      <ListItem>
        <IconLink
          Icon={twitter.icon}
          href={twitter.href}
          title={twitter.name}
          color={twitter.color}
        />
      </ListItem>
      <ListItem>
        <IconLink
          Icon={youtube.icon}
          href={youtube.href}
          title={youtube.name}
          color={youtube.color}
        />
      </ListItem>
      <ListItem>
        <IconLink
          Icon={twitch.icon}
          href={twitch.href}
          title={twitch.name}
          color={twitch.color}
        />
      </ListItem>
    </List>
  );
};

export default function Home() {
  return (
    <Container
      css={{
        '@bp2': {
          p: '$4'
        },
        '@bp3': {
          mt: '64px'
        }
      }}
    >
      <h1
        className={text({
          css: {
            '@bp3': {
              size: '4xl'
            },
            fontFamily: '$heading',
            marginBottom: '64px'
          },
          size: '3xl',
          weight: 'semibold'
        })}
      >
        Greg Ogun
      </h1>

      <p
        className={text({
          css: {
            marginBottom: '32px'
          },
          weight: 'semibold',
          size: 'lg'
        })}
      >
        developer, designer, writer, and big time tea drinker.
      </p>
      <p
        className={text({
          css: {
            marginBottom: '32px'
          }
        })}
      >
        welcome to my internet home.
      </p>
      <p
        className={text({
          css: {
            marginBottom: '64px'
          }
        })}
      >
        whilst {" you're "} here, feel free to{' '}
        <a className={link()} href={github.href}>
          sign my digital guestbook.
        </a>
      </p>
      <footer>
        <Socials />
      </footer>
    </Container>
  );
}
