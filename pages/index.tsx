import { Logo, Sun } from 'components/icons';
import { ThemeToggle } from 'components/themeToggle';
import { text } from 'styles/text';
import { css, styled } from 'stitches.config';
import Github from '@/components/icons/github';
import Linkedin from '@/components/icons/linkedin';
import Twitter from '@/components/icons/twitter';
import Youtube from '@/components/icons/youtube';
import Twitch from '@/components/icons/twitch';

const ThemeToggleButton = () => {
  return (
    <ThemeToggle>
      <Sun size="24px" />
    </ThemeToggle>
  );
};

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

const SocialIcons = () => {
  return (
    <List>
      <ListItem>
        <Github width="24px" />
      </ListItem>
      <ListItem>
        <Linkedin width="24px" />
      </ListItem>
      <ListItem>
        <Twitter width="24px" />
      </ListItem>
      <ListItem>
        <Youtube width="24px" />
      </ListItem>
      <ListItem>
        <Twitch width="24px" />
      </ListItem>
    </List>
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
            fontFamily: 'Poppins, apple-system, Verdana, sans-serif',
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
            color: '#888888',
            fontStyle: 'italic'
          }
        })}
      >
        noun
      </p>
      <p
        className={text({
          css: {
            marginBottom: '32px',
            color: '$secondary',
            fontSize: '24px'
          },
          weight: 'semibold'
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
      <SocialIcons />
    </Container>
  );
}
