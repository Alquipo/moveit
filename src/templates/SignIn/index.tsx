import { useTheme } from 'contexts/ThemeContext'

import { Github } from '@styled-icons/bootstrap/Github'
import * as S from './styles'
import Tooltip from 'components/Tooltip'
import Logo from 'components/Logo'
import SEO from 'components/SEO'
import { signIn } from 'next-auth/client'

const SingInTemplate = () => {
  const { ToggleTheme } = useTheme()

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

              <span>Faça login com o Github para começar</span>
            </S.TitleContainer>

            <S.LoginContainer>
              <S.ButtonLogin type="button" onClick={() => signIn('auth0')}>
                <Github color="#FFF" size={32} /> Sign in with Github
              </S.ButtonLogin>
            </S.LoginContainer>
          </div>
        </S.RightSide>
      </section>
    </S.Wrapper>
  )
}

export default SingInTemplate
