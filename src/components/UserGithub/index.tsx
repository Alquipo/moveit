import { Container } from './styles'

interface UserGithubProps {
  user: UserProps
  position: number
}

interface UserProps {
  _id: string
  email: string
  name: string
  level: number
  currentExp: number
  totalExp: number
  challengesCompleted: number
  photo: string
}

const UserGithub = ({ user, position }: UserGithubProps) => {
  // useEffect(() => {}, [])

  return (
    <Container>
      <div className="position">
        <h1>{position + 1}</h1>
      </div>
      <div className="info">
        <div>
          <img src={user.photo} />
          <div className="profile">
            <strong>{user.name}</strong>
            <p>
              <img src="/icons/level.svg" />
              {user.level} level
            </p>
          </div>
        </div>

        <p>
          <strong>{user.challengesCompleted}</strong> completados
        </p>

        <p>
          <strong>{user.totalExp}</strong> xp
        </p>
      </div>
    </Container>
  )
}

export default UserGithub
