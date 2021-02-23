import CompletedChallenges from 'components/CompletedChallenges'
import ExperienceBar from 'components/ExperienceBar'
import Profile from 'components/Profile'
import * as S from './styles'

const HomeTemplate = () => (
  <S.Wrapper>
    <ExperienceBar />

    <S.Section>
      <S.LeftContainer>
        <Profile />
        <CompletedChallenges />
      </S.LeftContainer>

      <div></div>
    </S.Section>
  </S.Wrapper>
)

export default HomeTemplate
