import { useContext } from 'react'
import { CountdownContext } from 'contexts/CountdownContext'

import { Close } from '@styled-icons/evaicons-solid/Close'
import { Play } from '@styled-icons/foundation/Play'
import { CheckCircle } from '@styled-icons/boxicons-solid/CheckCircle'

import * as S from './styles'

const Countdown = () => {
  const {
    minutes,
    seconds,
    hasFinished,
    isActive,
    resetCountdown,
    startCountdown
  } = useContext(CountdownContext)

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('')

  const [secondsLeft, secondsRight] = String(seconds).padStart(2, '0').split('')

  return (
    <>
      <S.WrapperCountdown>
        <div>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </div>
        <span>:</span>
        <div>
          <span>{secondsLeft}</span>
          <span>{secondsRight}</span>
        </div>
      </S.WrapperCountdown>

      {hasFinished ? (
        <S.CountdownButton disabled>
          Ciclo Encerrado <CheckCircle />
        </S.CountdownButton>
      ) : (
        <>
          {isActive ? (
            <S.CountdownButton isActive type="button" onClick={resetCountdown}>
              Abandonar um ciclo <Close />
            </S.CountdownButton>
          ) : (
            <S.CountdownButton type="button" onClick={startCountdown}>
              Iniciar um ciclo <Play />
            </S.CountdownButton>
          )}
        </>
      )}
    </>
  )
}

export default Countdown
