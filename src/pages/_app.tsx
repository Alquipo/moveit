import { AppProps } from 'next/app'
import { ThemesProvider } from 'contexts/ThemeContext'
import GlobalStyles from 'styles/global'

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemesProvider>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemesProvider>
  )
}

export default App
