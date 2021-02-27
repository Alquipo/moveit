import React, { useState } from 'react'
import { useRouter } from 'next/router'
import useSound from 'use-sound'
import { FiGithub, FiMoon, FiSun } from 'react-icons/fi'
import { useTheme } from '../contexts/theme'

import turnOnSound from '../../public/sounds/turn-on.mp3'
import turnOffSound from '../../public/sounds/turn-off.mp3'

import {
  Container,
  LeftSide,
  RightSide,
  LoginContainer,
  TitleContainer
} from '../styles/pages'

const Index: React.FC = () => {
  const { push } = useRouter()
  const { theme, ToggleTheme } = useTheme()

  const [username, setUsername] = useState('')

  const [play] = useSound(theme.title === 'dark' ? turnOffSound : turnOnSound)

  function handleClick() {
    ToggleTheme()
    play()
  }

  function handleUsername(e) {
    e.preventDefault()
    push(`/${username}`)
  }

  return (
    <Container>
      <section>
        <LeftSide>
          <button type="button" onClick={handleClick}>
            {theme.title === 'light' ? (
              <FiMoon size={30} />
            ) : (
              <FiSun size={30} />
            )}
          </button>
        </LeftSide>
        <RightSide>
          <img src="white-logo-full.svg" alt="Logo" />

          <div>
            <strong>Bem-vindo</strong>

            <TitleContainer>
              <FiGithub size={55} />
              <span>Faça login com seu Github para começar</span>
            </TitleContainer>

            <LoginContainer onSubmit={handleUsername}>
              <input
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Digite seu usuário"
              />
              <button type="submit" onClick={handleUsername}>{` -> `}</button>
            </LoginContainer>
          </div>
        </RightSide>
      </section>
    </Container>
  )
}

export default Index
