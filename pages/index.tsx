import { Logo, Sun } from 'components/icons';
import { ThemeToggle } from 'components/themeToggle';
import { text } from 'styles/text';
import { styled } from 'stitches.config';
import Head from 'next/head';
import Github from '@/components/icons/github';
import Linkedin from '@/components/icons/linkedin';
import Twitter from '@/components/icons/twitter';
import Youtube from '@/components/icons/youtube';
import Twitch from '@/components/icons/twitch';
import { github, linkedin, twitter, twitch, youtube } from 'data/socials';
import { link } from '@/styles/link';

const Container = styled('div', {
  //boxSizing: 'border-box',
  width: '100%',
  maxWidth: '768px',
  margin: 'auto',
  padding: '$2',
  borderRadius: '$md'
});

const Navbar = styled('div', {
  marginTop: '64px',
  height: '64px',
  // boxSizing: 'border-box',
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
    <a href={href} rel="noreferrer noopener" target={isExternal && '_blank'}>
      {children}
    </a>
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
        <Link href={github.href} isExternal>
          <Github width="24px" />
        </Link>
      </ListItem>
      <ListItem>
        <Link href={linkedin.href} isExternal>
          <Linkedin width="24px" />
        </Link>
      </ListItem>
      <ListItem>
        <Link href={twitter.href} isExternal>
          <Twitter width="24px" />
        </Link>
      </ListItem>
      <ListItem>
        <Link href={youtube.href} isExternal>
          <Youtube width="24px" />
        </Link>
      </ListItem>
      <ListItem>
        <Link href={twitch.href} isExternal>
          <Twitch width="24px" />
        </Link>
      </ListItem>
    </List>
  );
};

const SocialLink = ({ icon, href }) => {
  return (
    <ListItem>
      <Link href={href}>{icon}</Link>
    </ListItem>
  );
};

export default function Home() {
  return (
    <Container>
      <Seo />
      <Navbar>
        <Logo size="40px" />
        <ThemeToggleButton />
      </Navbar>
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
            // color: '$secondary'
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
      <Socials />
    </Container>
  );
}
