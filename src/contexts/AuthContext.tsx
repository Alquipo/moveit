import {
  createContext,
  ReactNode,
  useContext,
  useState,
  useEffect,
  useCallback
} from 'react'

interface AuthProviderProps {
  children: ReactNode
}
interface AuthContextProps {
  isLogged: boolean
  userData: {
    name: string
    photo: string
    email: string
  }
  loginWithGitHub: () => void
  logout: () => void
}

export const AuthContext = createContext({} as AuthContextProps)

export const useAuth = () => useContext(AuthContext)

import firebase from '../services/firebase'

export function AuthProvider({ children }: AuthProviderProps) {
  const [isLogged, setIsLogged] = useState(false)
  const [userData, setUserData] = useState(undefined)

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setUserData({
          name: user.displayName,
          photo: user.photoURL,
          email: user.email
        })

        setIsLogged(true)
      } else {
        setUserData(null)
        setIsLogged(false)
      }
    })
  }, [])

  const loginWithGitHub = useCallback(async () => {
    const provider = new firebase.auth.GithubAuthProvider()

    return await firebase
      .auth()
      .signInWithRedirect(provider)
      .then(() => {
        window.location.href = '/dashboard'
      })
  }, [])

  const logout = useCallback(async () => {
    return await firebase
      .auth()
      .signOut()
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      .then(() => {
        window.location.href = '/'
      })
  }, [])

  return (
    <AuthContext.Provider
      value={{
        isLogged,
        userData,
        loginWithGitHub,
        logout
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
