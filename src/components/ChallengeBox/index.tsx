import * as S from './styles'

const ChallengeBox = () => {
  const hasActiveChallenge = true

  return (
    <S.Wrapper>
      {hasActiveChallenge ? (
        <S.ChallengeActive>
          <header>Ganhe 400 xp</header>

          <main>
            <img src="icons/body.svg" alt="challenge Image" />
            <strong>Novo desafio</strong>
            <p>Levante e faça uma caminhada de 3 minutos</p>
          </main>

          <footer>
            <S.ChallengeButton failed type="button">
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
