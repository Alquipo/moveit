import { useContext } from 'react'
import { ChallengesContext } from 'contexts/ChallengesContext'

import * as S from './styles'

const ChallengeBox = () => {
  const { activeChallenge, resetChallenge } = useContext(ChallengesContext)

  return (
    <S.Wrapper>
      {activeChallenge ? (
        <S.ChallengeActive>
          <header>Ganhe {activeChallenge.amount} xp</header>

          <main>
            <img
              src={`icons/${activeChallenge.type}.svg`}
              alt="challenge Image"
            />
            <strong>Novo desafio</strong>
            <p>{activeChallenge.description}</p>
          </main>

          <footer>
            <S.ChallengeButton failed type="button" onClick={resetChallenge}>
              Falhei
            </S.ChallengeButton>
            <S.ChallengeButton succeeded type="button">
              Completei
            </S.ChallengeButton>
          </footer>
        </S.ChallengeActive>
      ) : (
        <S.ChallengeNotActive>
          <strong>Finalize um ciclo para receber um desafio</strong>
          <p>
            <img src="icons/level-up.svg" alt="Level Up" />
            Avance de level completando os desafios.
          </p>
        </S.ChallengeNotActive>
      )}
    </S.Wrapper>
  )
}

export default ChallengeBox
