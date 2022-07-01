import '../src/styles/globals.css'
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    allVariants: {
      fontFamily: 'Raleway',
    },
  },
});

function Application({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
    <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default Application
