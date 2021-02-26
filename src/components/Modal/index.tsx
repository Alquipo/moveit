import { ChallengesContext } from 'contexts/ChallengesContext'
import { useContext } from 'react'
import * as S from './styles'

const Modal = () => {
  const { level, closeLevelUpModal } = useContext(ChallengesContext)

  return (
    <S.Overlay>
      <S.Wrapper>
        <header>{level}</header>

        <strong>Parabéns</strong>
        <p>Você alcançou um novo level.</p>

        <button type="button" onClick={closeLevelUpModal}>
          <img src="/icons/close.svg" alt="Fechar Modal" />
        </button>
      </S.Wrapper>
    </S.Overlay>
  )
}

export default Modal
