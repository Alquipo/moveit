import { ChallengesContext } from 'contexts/ChallengesContext'
import { useContext } from 'react'
import Link from 'next/link'
import { LogOut } from '@styled-icons/ionicons-outline/LogOut'
import * as S from './styles'

export type ProfileProps = {
  name: string
  avatarUrl: string
}
const Profile = ({ avatarUrl, name }: ProfileProps) => {
  const { level } = useContext(ChallengesContext)

  return (
    <S.Wrapper>
      <S.ProfileImage src={avatarUrl} alt={name} />

      <div>
        <strong>{name}</strong>
        <p>
          <img src="icons/level.svg" alt="Level" />
          Level {level}
        </p>
      </div>

      <Link href="/">
        <LogOut size={40} />
      </Link>
    </S.Wrapper>
  )
}

export default Profile
