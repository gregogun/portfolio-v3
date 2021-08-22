import { darkTheme } from '../stitches.config'
import { ThemeProvider } from 'next-themes'

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class"
    defaultTheme="system" value={{ dark: darkTheme.className, light: 'light', }}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
