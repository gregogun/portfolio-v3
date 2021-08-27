import * as React from 'react';
import { Logo, Sun } from 'components/icons';
import { ThemeToggle } from 'components/themeToggle';
import { text } from 'styles/text';
import { styled } from 'stitches.config';
import Head from 'next/head';
import { github, linkedin, twitter, twitch, youtube } from 'data/socials';
import { link } from '@/styles/link';
import { icon } from '@/styles/icon';

export const Container = styled('div', {
  width: '100%',
  maxWidth: '768px',
  margin: 'auto',
  padding: '$2',
  borderRadius: '$md'
});

const Navbar = styled('nav', {
  marginTop: '64px',
  height: '64px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginBottom: '64px'
});

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

const Seo = ({ ...customMeta }) => {
  const meta = {
    title: 'Greg Ogun',
    description:
      'Self-taught developer with a focus on designing and building scalable, maintainable and accessible solutions on the web.',
    image: 'https://gregogun.com/static/images/banner.png',
    type: 'website',
    ...customMeta
  };

  return (
    <Head>
      <title>{meta.title}</title>
      <meta content={meta.description} name="description" />
      <meta property="og:type" content={meta.type} />
      <meta property="og:site_name" content="Greg Ogun" />
      <meta property="og:description" content={meta.description} />
      <meta property="og:title" content={meta.title} />
      <meta name="twitter:site" content="@gregogun" />
      <meta name="twitter:title" content={meta.title} />
      <meta name="twitter:description" content={meta.description} />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};

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

const ThemeToggleButton = () => {
  return (
    <ThemeToggle>
      <Sun size="24px" />
    </ThemeToggle>
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
    <Container>
      <Seo />
      <header>
        <Navbar>
          <Logo size="40px" />
          <ThemeToggleButton />
        </Navbar>
      </header>
      <main>
        <h1
          className={text({
            css: {
              fontFamily: '$heading',
              marginBottom: '40px'
            },
            size: '4xl',
            weight: 'semibold'
          })}
        >
          Greg Ogun
        </h1>
        <p
          className={text({
            css: {
              marginBottom: '4px',
              color: '$tertiary',
              fontStyle: 'italic'
            },
            size: 'md'
          })}
        >
          noun
        </p>
        <p
          className={text({
            css: {
              marginBottom: '32px'
            },
            weight: 'semibold',
            size: 'xl'
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
          whilst you're here, feel free to{' '}
          <a className={link()} href={github.href}>
            sign my digital guestbook.
          </a>
        </p>
        <footer>
          <Socials />
        </footer>
      </main>
    </Container>
  );
}
