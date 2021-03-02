import 'react-toastify/dist/ReactToastify.css'

import { AppProps } from 'next/app'
import { AuthProvider } from 'contexts/AuthContext'
import { ThemesProvider } from 'contexts/ThemeContext'
import GlobalStyles from 'styles/global'
import { ToastContainer } from 'react-toastify'

function App({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <ThemesProvider>
        <GlobalStyles />
        <ToastContainer />

        <Component {...pageProps} />
      </ThemesProvider>
    </AuthProvider>
  )
}

export default App
