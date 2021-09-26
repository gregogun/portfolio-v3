import { iconButton } from '@/styles/button';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { styled } from 'stitches.config';
import { Logo, Sun } from './icons';
import NextLink from 'next/link';
import { text } from '@/styles/text';

const Nav = styled('nav', {
  height: '64px',
  display: 'flex',
  justifyContent: 'space-between',
  marginBottom: '$8',
});

const Flex = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyItems: 'center',
});

const Center = styled('div', {
  display: 'grid',
  placeItems: 'center',
});

const Menu = styled('ul', {
  display: 'flex',
  px: '$1',
});

/* theme toggle button styles */
const ThemeToggle = ({ children }) => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const toggleTheme = () => {
    theme === 'dark' ? setTheme('light') : setTheme('dark');
  };

  const mode = theme === 'dark' ? 'light' : 'dark';

  return (
    <button
      aria-label={`Activate ${mode} mode`}
      className={iconButton({
        css: {
          '@bp1': {
            display: 'none',
          },
          '@bp3': {
            display: 'block',
          },
        },
      })}
      onClick={toggleTheme}
    >
      {children}
    </button>
  );
};

const ThemeToggleButton = () => {
  return (
    <ThemeToggle>
      <Sun size="1.5rem" />
    </ThemeToggle>
  );
};

/* menu item styles */
const Link = ({ children, href }) => {
  return (
    <NextLink href={href}>
      <a
        className={text({
          css: {
            alignSelf: 'center',
            textDecoration: 'none',
            color: '$tertiary',
            transitionDuration: '800ms',
            '&:visited': {
              color: '$tertiary',
            },
            '&:hover': {
              color: '$secondary',
            },
          },
        })}
      >
        {children}
      </a>
    </NextLink>
  );
};

const MenuItem = ({ href, children, ...props }) => {
  return (
    <Center as="li" role="menuitem" css={{ mr: '16px' }} {...props}>
      <Link href={href}>{children}</Link>
    </Center>
  );
};

/* Menu button styles */
const Line = styled('span', {
  bg: '$secondary',
  position: 'absolute',
  transition: 'all 0.3s ease-out',
});

const LineBox = styled('div', {
  width: '100%',
  height: '100%',
  position: 'relative',
});

const MenuIcon = () => {
  return (
    <LineBox>
      <Line
        css={{
          width: '32px',
          height: '3px',
          top: '$4',
          left: '$2',
        }}
      />
      <Line
        css={{
          width: '16px',
          height: '3px',
          bottom: '$4',
          left: '$5',
        }}
      />
    </LineBox>
  );
};

const MenuButton = () => {
  return (
    <button className={iconButton()}>
      <MenuIcon />
    </button>
  );
};

/* Logo button styles */
const LogoButton = ({ children }) => {
  return (
    <NextLink href="/">
      <a className={iconButton()}>{children}</a>
    </NextLink>
  );
};

export default function Navbar() {
  return (
    <Nav>
      <Flex>
        <LogoButton>
          <Logo />
        </LogoButton>
        <Menu
          css={{
            '@bp1': {
              display: 'none',
            },
            '@bp3': {
              display: 'flex',
            },
          }}
          role="menu"
        >
          <MenuItem href="/projects">projects</MenuItem>
          <MenuItem href="/blog">blog</MenuItem>
        </Menu>
      </Flex>
      <MenuButton />
      <ThemeToggleButton />
    </Nav>
  );
}
