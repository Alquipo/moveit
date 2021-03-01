import { ChallengesProvider } from 'contexts/ChallengesContext'
import { CountdownProvider } from 'contexts/CountdownContext'
import GithubCorner from 'react-github-corner'
import { useTheme } from 'contexts/ThemeContext'

import SEO from 'components/SEO'
import CompletedChallenges from 'components/CompletedChallenges'
import Countdown from 'components/Countdown'
import ExperienceBar from 'components/ExperienceBar'
import Profile from 'components/Profile'
import SideBar from 'components/SideBar'

import * as S from './styles'
import ChallengeBox from 'components/ChallengeBox'

const DashboardTemplate = () => {
  const { theme } = useTheme()

  return (
    <ChallengesProvider>
      <SEO
        title="Dashboard"
        image="logo-full.svg"
        description="A app to make you move."
        shouldIndexPage
      />

      <GithubCorner
        href="https://github.com/Alquipo/moveit"
        size={65}
        bannerColor={theme.colors.blue}
        target="_blank"
        aria-label="Open GitHub project"
      />

      <S.Wrapper>
        <SideBar />
        <S.Content>
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
        </S.Content>
      </S.Wrapper>
    </ChallengesProvider>
  )
}

export default DashboardTemplate
