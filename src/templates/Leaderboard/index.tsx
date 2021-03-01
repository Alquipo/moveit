import SEO from 'components/SEO'
import SideBar from 'components/SideBar'
import LeaderboardUser, { UserProps } from 'components/LeaderboardUser'

import * as S from './styles'

export type LeaderboardTemplateProps = {
  users: UserProps[]
}
const LeaderboardTemplate = ({ users }: LeaderboardTemplateProps) => {
  return (
    <S.Wrapper>
      <SEO
        title="Leaderboard"
        image="logo-full.svg"
        description="A app to make you move."
        shouldIndexPage
      />
      <SideBar />
      <S.Content>
        <h1>Leaderboard</h1>

        <S.Ranking>
          <S.RankingTitle>
            <div>
              <strong>Posição</strong>
              <strong>Usuário</strong>
            </div>
            <div>
              <strong>Desafios</strong>
              <strong>Experiência</strong>
            </div>
          </S.RankingTitle>
          <div className="ranking-list">
            {users.map((user, i) => (
              <LeaderboardUser key={user._id} position={i} user={user} />
            ))}
          </div>
        </S.Ranking>
      </S.Content>
    </S.Wrapper>
  )
}

export default LeaderboardTemplate
