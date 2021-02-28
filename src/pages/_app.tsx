import 'react-toastify/dist/ReactToastify.css'

import { AppProps } from 'next/app'
import { ThemesProvider } from 'contexts/ThemeContext'
import GlobalStyles from 'styles/global'
import { ToastContainer } from 'react-toastify'

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemesProvider>
      <GlobalStyles />
      <ToastContainer />
      <Component {...pageProps} />
    </ThemesProvider>
  )
}

export default App
