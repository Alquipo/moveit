import { Container } from './styles'

import * as S from './styles'

interface LeaderboardUserProps {
  user: UserProps
  position: number
}

export type UserProps = {
  _id: string
  name: string
  level: number
  currentExp: number
  totalExp: number
  challengesCompleted: number
  photo: string
}

const LeaderboardUser = ({ user, position }: LeaderboardUserProps) => {
  return (
    <Container>
      <S.PositionWrapper>
        <h1>{position + 1}</h1>
      </S.PositionWrapper>
      <S.InfoWrapper>
        <S.ProfileWrapper>
          <img src={user.photo} />
          <div>
            <strong>{user.name}</strong>
            <p>
              <img src="/icons/level.svg" />
              {user.level} level
            </p>
          </div>
        </S.ProfileWrapper>

        <S.ExpWrapper>
          <p>
            <strong>{user.challengesCompleted}</strong> completados
          </p>

          <p>
            <strong>{user.totalExp}</strong> xp
          </p>
        </S.ExpWrapper>
      </S.InfoWrapper>
    </Container>
  )
}

export default LeaderboardUser
