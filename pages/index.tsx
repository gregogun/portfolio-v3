import { Logo, Sun } from 'components/icons';
import { ThemeToggle } from 'components/themeToggle';
import { text } from 'styles/text';
import { css, styled } from 'stitches.config';
import Github from '@/components/icons/github';
import Linkedin from '@/components/icons/linkedin';
import Twitter from '@/components/icons/twitter';
import Youtube from '@/components/icons/youtube';
import Twitch from '@/components/icons/twitch';
import { github, linkedin, twitter, twitch, youtube } from 'data/socials';

const Container = styled('div', {
  boxSizing: 'border-box',
  width: '100%',
  maxWidth: '768px',
  margin: 'auto'
});

const Navbar = styled('div', {
  marginTop: '64px',
  height: '64px',
  boxSizing: 'border-box',
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
        whilst you're here, feel free to sign my digital guestbook.
      </p>
      <Socials />
    </Container>
  );
}
