import { ChallengesProvider } from 'contexts/ChallengesContext'
import { CountdownProvider } from 'contexts/CountdownContext'

import SEO from 'components/SEO'
import CompletedChallenges from 'components/CompletedChallenges'
import Countdown from 'components/Countdown'
import ExperienceBar from 'components/ExperienceBar'
import Profile, { ProfileProps } from 'components/Profile'
import SideBar from 'components/SideBar'

import * as S from './styles'
import ChallengeBox from 'components/ChallengeBox'

export type DashboardTemplateProps = {
  level: number
  currentExperience: number
  challengesCompleted: number
  user: ProfileProps
}

const DashboardTemplate = ({
  challengesCompleted,
  currentExperience,
  level,
  user
}: DashboardTemplateProps) => (
  <ChallengesProvider
    challengesCompleted={challengesCompleted}
    currentExperience={currentExperience}
    level={level}
  >
    <S.Wrapper>
      <SEO
        title="Dashboard"
        image="logo-full.svg"
        description="A app to make you move."
        shouldIndexPage
      />
      <SideBar />

      <ExperienceBar />

      <CountdownProvider>
        <S.Section>
          <S.LeftContainer>
            <Profile {...user} />
            <CompletedChallenges />
            <Countdown />
          </S.LeftContainer>

          <S.RightContainer>
            <ChallengeBox />
          </S.RightContainer>
        </S.Section>
      </CountdownProvider>
    </S.Wrapper>
  </ChallengesProvider>
)

export default DashboardTemplate
