import { darkTheme } from '../stitches.config';
import { ThemeProvider } from 'next-themes';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider
      disableTransitionOnChange
      attribute="class"
      defaultTheme="system"
      value={{ light: 'light-theme', dark: darkTheme.toString() }}
    >
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
