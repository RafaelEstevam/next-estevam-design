import '../styles/globals.css'
import { ThemeProvider } from 'styled-components'
import type { AppProps } from 'next/app'
import GlobalStyle from '../styles/global'
import { SnackbarProvider } from 'notistack'

import theme from '../styles/theme'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SnackbarProvider maxSnack={3}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </SnackbarProvider>
  )
}
