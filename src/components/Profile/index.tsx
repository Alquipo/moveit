import { ChallengesContext } from 'contexts/ChallengesContext'
import { useContext } from 'react'
import Link from 'next/link'
import { LogOut } from '@styled-icons/ionicons-outline/LogOut'
import * as S from './styles'
import { signOut, useSession } from 'next-auth/client'

const Profile = () => {
  const { level } = useContext(ChallengesContext)
  const [session, loading] = useSession()

  return (
    <S.Wrapper>
      <S.ProfileImage src={session?.user.image} alt={session?.user.name} />

      <div>
        <strong>{session?.user.name}</strong>
        <p>
          <img src="icons/level.svg" alt="Level" />
          Level {level}
        </p>
      </div>

      <Link href="/">
        <LogOut size={40} role="button" onClick={() => signOut()} />
      </Link>
    </S.Wrapper>
  )
}

export default Profile
