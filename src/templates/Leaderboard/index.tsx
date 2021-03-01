import SEO from 'components/SEO'
import SideBar from 'components/SideBar'
import RankingUser, { UserProps } from 'components/RankingUser'

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
        <h1>Ranking geral</h1>

        <div className="ranking">
          <div className="ranking-title">
            <div>
              <strong>Posição</strong>
              <strong>Usuário</strong>
            </div>
            <div>
              <strong>Desafios</strong>
              <strong>Experiencia</strong>
            </div>
          </div>
          <div className="ranking-list">
            {users.map((user, i) => (
              <RankingUser key={user._id} position={i} user={user} />
            ))}
          </div>
        </div>
      </S.Content>
    </S.Wrapper>
  )
}

export default LeaderboardTemplate
