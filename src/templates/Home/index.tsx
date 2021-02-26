import { CountdownProvider } from 'contexts/CountdownContext'

import SEO from 'components/SEO'
import CompletedChallenges from 'components/CompletedChallenges'
import Countdown from 'components/Countdown'
import ExperienceBar from 'components/ExperienceBar'
import Profile from 'components/Profile'

import * as S from './styles'
import ChallengeBox from 'components/ChallengeBox'

const HomeTemplate = () => (
  <S.Wrapper>
    <SEO
      title="Inicio"
      image="logo-full.svg"
      description="A app to make you move."
      shouldIndexPage
    />

    <ExperienceBar />

    <CountdownProvider>
      <S.Section>
        <S.LeftContainer>
          <Profile />
          <CompletedChallenges />
          <Countdown />
        </S.LeftContainer>

        <S.RightContainer>
          <ChallengeBox />
        </S.RightContainer>
      </S.Section>
    </CountdownProvider>
  </S.Wrapper>
)

export default HomeTemplate
