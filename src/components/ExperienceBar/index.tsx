import { ChallengesContext } from 'contexts/ChallengesContext'
import { useContext } from 'react'

import * as S from './styles'

const ExperienceBar = () => {
  const { currentExperience, experienceToNextLevel } = useContext(
    ChallengesContext
  )

  const percentToNextLevel =
    Math.round(currentExperience * 100) / experienceToNextLevel

  return (
    <S.Wrapper>
      <span>0 xp</span>
      <S.ExperienceBar>
        <S.ExperienceBarProgress style={{ width: `${percentToNextLevel}%` }} />

        <S.CurrentExperience style={{ left: `${percentToNextLevel}%` }}>
          <b>^</b>
          {currentExperience === 0 ? null : `${currentExperience} xp`}
        </S.CurrentExperience>
      </S.ExperienceBar>

      <span>{experienceToNextLevel} xp</span>
    </S.Wrapper>
  )
}

export default ExperienceBar
