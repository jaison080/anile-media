import '@styles/globals.css'
import { ThemeProvider } from 'next-themes'
function Application({ Component, pageProps }) {
  return (<ThemeProvider ThemeProvider >
    <Component {...pageProps} />
  </ThemeProvider >
  );
}

export default Application
