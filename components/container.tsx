import { styled } from 'stitches.config';
import Head from 'next/head';
import { Logo, Sun } from 'components/icons';
import { ThemeToggle } from 'components/themeToggle';
import { iconButton } from '@/styles/button';
import Link from 'next/link';

const PageContainer = styled('div', {
  width: '100%',
  maxWidth: '768px',
  margin: 'auto',
  padding: '$3',
  borderRadius: '$md'
});

const Navbar = styled('nav', {
  height: '64px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginBottom: '64px'
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
    <Link href="/">
      <a className={iconButton()}>{children}</a>
    </Link>
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
    ...customMeta
  };

  return (
    <PageContainer {...props}>
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
          <LogoButton>
            <Logo size="40px" />
          </LogoButton>
          <ThemeToggleButton />
        </Navbar>
      </header>
      <main>{children}</main>
    </PageContainer>
  );
};

export default Container;
