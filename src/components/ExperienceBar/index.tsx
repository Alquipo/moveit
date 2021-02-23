import * as S from './styles'

const ExperienceBar = () => (
  <S.Wrapper>
    <span>0 xp</span>
    <S.ExperienceBar>
      <S.ExperienceBarProgress style={{ width: '50%' }} />

      <S.CurrentExperience style={{ left: '50%' }}>300 xp</S.CurrentExperience>
    </S.ExperienceBar>
    <span>600xp</span>
  </S.Wrapper>
)

export default ExperienceBar
