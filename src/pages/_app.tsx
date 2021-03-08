import 'react-toastify/dist/ReactToastify.css'

import { AppProps } from 'next/app'
// import { AuthProvider } from 'contexts/AuthContext'
import { ThemesProvider } from 'contexts/ThemeContext'
import GlobalStyles from 'styles/global'
import { ToastContainer } from 'react-toastify'

import { Provider } from 'next-auth/client'

function App({ Component, pageProps }: AppProps) {
  return (
    <Provider session={pageProps.session}>
      {/* <AuthProvider> */}
      <ThemesProvider>
        <GlobalStyles />
        <ToastContainer />

        <Component {...pageProps} />
      </ThemesProvider>
      {/* </AuthProvider> */}
    </Provider>
  )
}

export default App
