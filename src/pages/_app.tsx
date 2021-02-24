import { AppProps } from 'next/app'
import { useState } from 'react'
import { ThemeProvider, DefaultTheme } from 'styled-components'

import GlobalStyles from 'styles/global'
import { combineTheme, dark, light } from 'styles/themes'

import Header from 'components/Header'
import { ChallengesProvider } from 'contexts/ChallengesContext'

function App({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState<DefaultTheme>(combineTheme(dark))

  const toggleTheme = () => {
    setTheme(theme.name === 'Dark' ? combineTheme(light) : combineTheme(dark))
  }

  return (
    <ThemeProvider theme={theme}>
      <ChallengesProvider>
        <GlobalStyles />
        <Header toggleTheme={toggleTheme} />
        <Component {...pageProps} />
      </ChallengesProvider>
    </ThemeProvider>
  )
}

export default App
