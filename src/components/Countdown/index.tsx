import { useState, useEffect, useContext } from 'react'

import { Close } from '@styled-icons/evaicons-solid/Close'
import { Play } from '@styled-icons/foundation/Play'
import { CheckCircle } from '@styled-icons/boxicons-solid/CheckCircle'

import * as S from './styles'
import { ChallengesContext } from 'contexts/ChallengesContext'

let countdownTimeout: NodeJS.Timeout

const Countdown = () => {
  const { startNewChallenge } = useContext(ChallengesContext)

  const [time, setTime] = useState(0.05 * 60)
  const [isActive, setIsActive] = useState(false)
  const [hasFinished, setHasFinished] = useState(false)

  const minutes = Math.floor(time / 60)
  const seconds = time % 60

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('')

  const [secondsLeft, secondsRight] = String(seconds).padStart(2, '0').split('')

  function startCountdown() {
    setIsActive(true)
  }

  function resetCountdown() {
    clearTimeout(countdownTimeout)
    setIsActive(false)
    setTime(0.05 * 60)
  }

  useEffect(() => {
    if (isActive && time > 0) {
      countdownTimeout = setTimeout(() => {
        setTime(time - 1)
      }, 1000)
    } else if (isActive && time === 0) {
      setHasFinished(true)
      setIsActive(false)
      startNewChallenge()
    }
  }, [isActive, time, startNewChallenge])

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
