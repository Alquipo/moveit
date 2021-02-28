import { ChallengesContext } from 'contexts/ChallengesContext'
import { useContext } from 'react'
import Link from 'next/link'
import { LogOut } from '@styled-icons/ionicons-outline/LogOut'
import * as S from './styles'
import { useAuth } from 'contexts/AuthContext'

const Profile = () => {
  const { level } = useContext(ChallengesContext)
  const { userData } = useAuth()

  const { logout } = useAuth()

  return (
    <S.Wrapper>
      <S.ProfileImage src={userData?.photo} alt={userData?.name} />

      <div>
        <strong>{userData?.name}</strong>
        <p>
          <img src="icons/level.svg" alt="Level" />
          Level {level}
        </p>
      </div>

      <Link href="/">
        <LogOut size={40} role="button" onClick={logout} />
      </Link>
    </S.Wrapper>
  )
}

export default Profile
