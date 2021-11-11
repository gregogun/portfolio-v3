import { css, styled } from 'stitches.config';
import Head from 'next/head';
import { flex } from '@/styles/utils/flex';
import { link } from '@/styles/link';
// import { Navbar } from '@/components/navbar';
import { SkipNavLink, SkipNavContent } from '@reach/skip-nav';
import { srOnly, VisuallyHidden } from './sr-only';
import NextLink from 'next/link';
import { iconButton } from '@/styles/button';
import { Logo, Sun } from './icons';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

const box = css({});

const Flex = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyItems: 'center',
  justifyContent: 'space-between',

  '@bp1': {
    mb: '$6',
  },
});

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

const LogoButton = ({ children, ...props }) => {
  return (
    <NextLink href="/">
      <a
        className={iconButton({
          css: { ...props.css },
        })}
      >
        {children}
        <VisuallyHidden>Home</VisuallyHidden>
      </a>
    </NextLink>
  );
};

const PageContainer = styled('div', {
  width: '100%',
  maxWidth: '768px',
  minHeight: '100vh',
  margin: 'auto',
});

interface ContainerProps {
  title: string;
  description?: string;
  image?: string;
  type?: string;
  date?: string;
  children: React.ReactNode;
}

const Container = ({ ...props }: ContainerProps) => {
  const { children, ...customMeta } = props;
  const meta = {
    title: 'Greg Ogun',
    description:
      'Self-taught developer with a focus on designing and building scalable, maintainable and accessible solutions on the web.',
    image: 'https://gregogun.com/static/images/banner.png',
    type: 'website',
    ...customMeta,
  };

  return (
    <PageContainer
      css={{
        '@bp1': {
          p: '$2',
        },
        '@bp2': {
          p: '$6',
        },
        '@bp3': {
          mt: '$4',
        },
        '@bp4': {
          mt: '$8',
        },
        pb: '$4',
      }}
      {...props}
    >
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
      <SkipNavLink className={srOnly({ type: 'skipNav' })} />
      {/* <header>
        <Navbar />
      </header> */}
      <Flex>
        <LogoButton
          css={{
            mr: '$5',
          }}
        >
          <Logo />
        </LogoButton>
        <ThemeToggleButton />
      </Flex>
      <SkipNavContent />
      <main
        className={box({
          css: {
            '@bp1': {
              p: '$2',
            },
            '@bp2': {
              p: '$6',
            },
          },
        })}
      >
        {children}
      </main>
      <footer
        role="contentinfo"
        className={flex({
          spaced: 'true',
          css: {
            '@bp3': {
              pl: meta.title === 'Greg Ogun' ? '$9' : '$6',
            },
            mt: '$8',
          },
        })}
      >
        <div>
          <p>
            Built with ♥ and{' '}
            <a href="https://nextjs.org" className={link()}>
              Next.js
            </a>{' '}
            © 2021 Greg Ogun.
          </p>
        </div>
      </footer>
    </PageContainer>
  );
};

export default Container;
