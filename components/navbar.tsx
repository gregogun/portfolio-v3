import { iconButton } from '@/styles/button';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { css, styled } from 'stitches.config';
import { Logo, Sun } from './icons';
import NextLink from 'next/link';
import { text } from '@/styles/text';
import useToggle from '@/utils/hooks/useToggle';
import FocusTrap from 'focus-trap-react';
import useMediaQuery from '@/utils/hooks/useMediaQuery';

/* styled elements */
const line = css({
  mb: '32px',
  border: 0,
  width: '60%',
  height: '2px',
  backgroundImage: 'linear-gradient(to right, $primary, $accent, $primary)',
});

const NavWrap = styled('nav', {
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

/* theme toggle button styles */
const ThemeToggle = ({ children, ...props }) => {
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
          ...props.css,
        },
      })}
      onClick={toggleTheme}
    >
      {children}
    </button>
  );
};

const ThemeToggleButton = ({ ...props }) => {
  return (
    <ThemeToggle {...props}>
      <Sun size="1.5rem" />
    </ThemeToggle>
  );
};

/* menu item styles */
const Link = ({ children, href, mobile = false }) => {
  return (
    <NextLink href={href}>
      <a
        className={text({
          size: mobile ? 'xl' : 'md',
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
    <Center as="li" css={{ mr: '16px', ...props.css }}>
      <Link mobile={props.mobile && true} href={href}>
        {children}
      </Link>
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
  transition: 'all 250ms ease-out',
});

const Menu = styled('ul', {
  display: 'flex',
  px: '$1',
});

const MenuIcon = ({ clicked }) => {
  return (
    <LineBox>
      <Line
        css={{
          width: '32px',
          height: '2px',
          top: clicked ? '23px' : '16px',
          left: '9px',
          transform: clicked ? 'rotate(45deg)' : 'none',
        }}
      />
      <Line
        css={{
          width: clicked ? '32px' : '16px',
          height: '2px',
          bottom: clicked ? '23px' : '16px',
          left: clicked ? '9px' : '$5',
          transform: clicked ? 'rotate(-45deg)' : 'none',
        }}
      />
    </LineBox>
  );
};

const MenuButton = ({ clicked, toggleClicked }) => {
  const handleClick = () => {
    toggleClicked();
  };
  return (
    <button
      onClick={handleClick}
      className={iconButton({
        css: {
          '@bp1': {
            display: 'block',
          },
          '@bp3': {
            display: 'none',
          },
        },
      })}
    >
      <MenuIcon clicked={clicked} />
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

const Overlay = styled('div', {
  zIndex: '$overlay',
  width: '100%',
  height: '100vh',
  position: 'fixed',
  bg: '$primary',
  right: 0,
});

export const MobileMenu = ({ clicked }) => {
  const isLarge = useMediaQuery('(min-width: 1024px)');
  if (clicked) {
    return (
      <Overlay
        css={{
          display: isLarge ? 'none' : 'block',
        }}
      >
        <Menu
          css={{
            flexDirection: 'column',
          }}
        >
          <MenuItem mobile css={{ mb: '$4' }} large href="/projects">
            projects
          </MenuItem>
          <hr className={line()} />
          <MenuItem mobile css={{ mb: '$4' }} large href="/blog">
            blog
          </MenuItem>
          <hr className={line()} />
          <ThemeToggleButton
            css={{
              display: 'block',
              mx: 'auto',
            }}
          />
        </Menu>
      </Overlay>
    );
  }

  return null;
};

export const Navbar = () => {
  const isLarge = useMediaQuery('(min-width: 1024px)');
  const [clicked, toggleClicked] = useToggle();
  return (
    <FocusTrap active={clicked}>
      <div>
        <NavWrap>
          <Flex>
            <LogoButton>
              <Logo />
            </LogoButton>
            <Menu
              css={{
                display: isLarge ? 'flex' : 'none',
              }}
            >
              <MenuItem href="/projects">projects</MenuItem>
              <MenuItem href="/blog">blog</MenuItem>
            </Menu>
          </Flex>
          <MenuButton clicked={clicked} toggleClicked={toggleClicked} />
          <ThemeToggleButton
            css={{
              '@bp1': {
                display: 'none',
              },
              '@bp3': {
                display: 'block',
              },
            }}
          />
        </NavWrap>
        <MobileMenu clicked={clicked} />
      </div>
    </FocusTrap>
  );
};
