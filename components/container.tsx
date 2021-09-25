import { styled } from 'stitches.config';
import Head from 'next/head';
import { Logo, Sun } from 'components/icons';
import { ThemeToggle } from 'components/themeToggle';
import { iconButton } from '@/styles/button';
import NextLink from 'next/link';
import { text } from '@/styles/text';

const PageContainer = styled('div', {
  width: '100%',
  maxWidth: '768px',
  minHeight: '100vh',
  margin: 'auto',
});

const Navbar = styled('nav', {
  maxWidth: '768px',
  height: '64px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginBottom: '64px',
});

const Flex = styled('div', {
  display: 'flex',
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

const ThemeToggleButton = () => {
  return (
    <ThemeToggle>
      <Sun size="24px" />
    </ThemeToggle>
  );
};

const LogoButton = ({ children }) => {
  return (
    <NextLink href="/">
      <a className={iconButton()}>{children}</a>
    </NextLink>
  );
};

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

const Container = ({ ...props }) => {
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
          p: '$3',
        },
        '@bp2': {
          p: '$4',
        },
        '@bp4': {
          mt: '64px',
        },
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
      <header>
        <Navbar>
          <Flex>
            <LogoButton>
              <Logo size="3.5rem" />
            </LogoButton>
            <Menu role="menu">
              <MenuItem href="/projects">projects</MenuItem>
              <MenuItem href="/blog">blog</MenuItem>
            </Menu>
          </Flex>
          <ThemeToggleButton />
        </Navbar>
      </header>
      <main>{children}</main>
    </PageContainer>
  );
};

export default Container;
