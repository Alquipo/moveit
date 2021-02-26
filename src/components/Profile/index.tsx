import Tooltip from 'components/Tooltip'
import { ChallengesContext } from 'contexts/ChallengesContext'
import { useContext } from 'react'
import * as S from './styles'

const Profile = () => {
  const { level } = useContext(ChallengesContext)

  return (
    <S.Wrapper>
      <Tooltip text={'Click aqui para alterar o tema'}>
        <S.ProfileImage
          src="https://github.com/alquipo.png"
          alt="Alquipo Neto"
        />
      </Tooltip>

      <div>
        <strong>Alquipo Neto</strong>
        <p>
          <img src="icons/level.svg" alt="Level" />
          Level {level}
        </p>
      </div>
    </S.Wrapper>
  )
}

export default Profile
