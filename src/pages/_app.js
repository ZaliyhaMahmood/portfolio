import { ThemeProvider } from "styled-components";
import "../styles/globals.js";
import GlobalStyles from "../styles/globals.js";
import { theme } from "../theme";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
