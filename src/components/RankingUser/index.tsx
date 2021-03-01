import { Container } from './styles'

import * as S from './styles'

interface RankingUserProps {
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

const RankingUser = ({ user, position }: RankingUserProps) => {
  return (
    <Container>
      <S.PositionWrapper>
        <h1>{position + 1}</h1>
      </S.PositionWrapper>
      <S.InfoWrapper>
        <div>
          <img src={user.photo} />
          <S.ProfileWrapper>
            <strong>{user.name}</strong>
            <p>
              <img src="/icons/level.svg" />
              {user.level} level
            </p>
          </S.ProfileWrapper>
        </div>

        <p>
          <strong>{user.challengesCompleted}</strong> completados
        </p>

        <p>
          <strong>{user.totalExp}</strong> xp
        </p>
      </S.InfoWrapper>
    </Container>
  )
}

export default RankingUser
