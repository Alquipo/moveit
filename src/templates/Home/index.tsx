import { useTheme } from 'contexts/ThemeContext'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

import { Github } from '@styled-icons/bootstrap/Github'
import * as S from './styles'
import Tooltip from 'components/Tooltip'
import Logo from 'components/Logo'

const HomeTemplate = () => {
  const { push } = useRouter()
  const { ToggleTheme } = useTheme()

  const [username, setUsername] = useState('')
  const [button, setButton] = useState(false)

  // const [play] = useSound(theme.title === 'dark' ? turnOffSound : turnOnSound)
  useEffect(() => {
    if (username === null || username === '') {
      setButton(true)
    } else {
      setButton(false)
    }
  }, [username])

  function handleClick() {
    ToggleTheme()
    // play()
  }

  function handleUsername(e) {
    e.preventDefault()
    push(`/${username}`)
  }
  return (
    <S.Wrapper>
      <section>
        <S.LeftSide>
          <img src="/img/Logo-background.svg" alt="" />
        </S.LeftSide>
        <S.RightSide>
          <Logo />
          <div>
            <strong>Bem-vindo</strong>

            <S.TitleContainer>
              <button type="button" onClick={handleClick}>
                <Tooltip text="Clique aqui para mudar o tema">
                  <Github size={55} />
                </Tooltip>
              </button>

              <span>Faça login com seu Github para começar</span>
            </S.TitleContainer>

            <S.LoginContainer onSubmit={handleUsername}>
              <input
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Digite seu usuário"
              />

              {!button ? (
                <S.ButtonLogin
                  type="submit"
                  onClick={handleUsername}
                  isSubmit
                >{` -> `}</S.ButtonLogin>
              ) : (
                <S.ButtonLogin>{` -> `}</S.ButtonLogin>
              )}
            </S.LoginContainer>
          </div>
        </S.RightSide>
      </section>
    </S.Wrapper>
  )
}

export default HomeTemplate
