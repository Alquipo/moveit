import 'react-toastify/dist/ReactToastify.css'

import { Provider as AuthProvider } from 'next-auth/client'
import { AppProps } from 'next/app'
import { ThemesProvider } from 'contexts/ThemeContext'
import GlobalStyles from 'styles/global'
import { ToastContainer } from 'react-toastify'

function App({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider session={pageProps.session}>
      <ThemesProvider>
        <GlobalStyles />
        <ToastContainer />
        <Component {...pageProps} />
      </ThemesProvider>
    </AuthProvider>
  )
}

export default App
