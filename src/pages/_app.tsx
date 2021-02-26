import { AppProps } from 'next/app'
import React, { useState } from 'react'
import { ThemeProvider, DefaultTheme } from 'styled-components'

import GlobalStyles from 'styles/global'
import { combineTheme, dark, light } from 'styles/themes'

import Header from 'components/Header'

function App({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState<DefaultTheme>(combineTheme(dark))

  const toggleTheme = () => {
    setTheme(theme.name === 'Dark' ? combineTheme(light) : combineTheme(dark))
  }

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header toggleTheme={toggleTheme} />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default App
