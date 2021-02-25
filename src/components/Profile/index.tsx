import Tooltip from 'components/Tooltip'
import * as S from './styles'

const Profile = () => (
  <S.Wrapper>
    <Tooltip text={'Click aqui para alterar o tema'}>
      <S.ProfileImage src="https://github.com/alquipo.png" alt="Alquipo Neto" />
    </Tooltip>

    <div>
      <strong>Alquipo Neto</strong>
      <p>
        <img src="icons/level.svg" alt="Level" />
        Level 1
      </p>
    </div>
  </S.Wrapper>
)

export default Profile
