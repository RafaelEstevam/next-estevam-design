import "../styles/globals.css";
import { ThemeProvider } from "styled-components";
import type { AppProps } from "next/app";
import GlobalStyle from "../styles/global";
import { SnackbarProvider } from "notistack";
import Script from "next/script";

import theme from "../styles/theme";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-YZMSNSM2C6"
      />
      <SnackbarProvider maxSnack={3}>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Component {...pageProps} />
        </ThemeProvider>
      </SnackbarProvider>
    </>
  );
}
