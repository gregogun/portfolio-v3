import { styled } from 'stitches.config';
import Head from 'next/head';
import { flex } from '@/styles/utils/flex';
import { link } from '@/styles/link';
import Navbar from '@/components/navbar';

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
  children: JSX.Element | JSX.Element[];
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
          p: '$4',
        },
        '@bp2': {
          p: '$8',
        },
        '@bp3': {
          mt: '$4',
          p: '$6',
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
      <header>
        <Navbar />
      </header>
      <main>
        {children}
        <footer
          role="contentinfo"
          className={flex({
            spaced: 'true',
            css: {
              '@bp3': {
                pl: meta.title === 'Greg Ogun' ? '$8' : 0,
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
      </main>
    </PageContainer>
  );
};

export default Container;
