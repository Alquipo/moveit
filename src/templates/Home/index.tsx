import { useTheme } from 'contexts/ThemeContext'

import { Github } from '@styled-icons/bootstrap/Github'
import * as S from './styles'
import Tooltip from 'components/Tooltip'
import Logo from 'components/Logo'
import SEO from 'components/SEO'
import { useAuth } from 'contexts/AuthContext'

const HomeTemplate = () => {
  const { ToggleTheme } = useTheme()

  const { loginWithGitHub } = useAuth()

  return (
    <S.Wrapper>
      <SEO
        title="Home"
        image="logo-full.svg"
        description="A app to make you move."
        shouldIndexPage
      />
      <section>
        <S.LeftSide>
          <img src="/img/Logo-background.svg" alt="" />
        </S.LeftSide>
        <S.RightSide>
          <Logo />
          <div>
            <strong>Bem-vindo</strong>

            <S.TitleContainer>
              <button type="button" onClick={ToggleTheme}>
                <Tooltip text="Clique aqui para mudar o tema">
                  <Github size={55} />
                </Tooltip>
              </button>

              <span>Faça login com seu Github para começar</span>
            </S.TitleContainer>

            <S.LoginContainer>
              {/* <input
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Digite seu usuário"
              /> */}

              {/* {username ? (
                <S.ButtonLogin
                  type="submit"
                  onClick={handleUsername}
                  isSubmit
                >{` -> `}</S.ButtonLogin>
              ) : (
                <S.ButtonLogin>{` -> `}</S.ButtonLogin>
              )} */}

              <button type="button" onClick={loginWithGitHub}>
                Entrar com Github <Github color="#FFF" size={32} />
              </button>
            </S.LoginContainer>
          </div>
        </S.RightSide>
      </section>
    </S.Wrapper>
  )
}

export default HomeTemplate
