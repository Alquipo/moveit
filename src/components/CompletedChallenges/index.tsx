import { useContext } from 'react'
import { ChallengesContext } from 'contexts/ChallengesContext'
import * as S from './styles'

const CompletedChallenges = () => {
  const { challengesCompleted } = useContext(ChallengesContext)

  return (
    <S.Wrapper>
      <span>Desafios completos</span>
      <span>{challengesCompleted}</span>
    </S.Wrapper>
  )
}

export default CompletedChallenges
