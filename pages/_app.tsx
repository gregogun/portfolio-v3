import { darkTheme } from '../stitches.config';
import { ThemeProvider } from 'next-themes';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider
      disableTransitionOnChange
      attribute="class"
      defaultTheme="dark"
      value={{ dark: darkTheme.toString(), light: 'light' }}
    >
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
