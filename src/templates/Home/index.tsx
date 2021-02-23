import ExperienceBar from 'components/ExperienceBar'
import Profile from 'components/Profile'
import * as S from './styles'

const HomeTemplate = () => (
  <S.Wrapper>
    <ExperienceBar />

    <S.Section>
      <S.LeftContainer>
        <Profile />
      </S.LeftContainer>

      <div></div>
    </S.Section>
  </S.Wrapper>
)

export default HomeTemplate
