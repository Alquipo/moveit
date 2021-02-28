import { createContext, ReactNode, useEffect, useState } from 'react'
import { toast } from 'react-toastify'

import Cookies from 'js-cookie'
import challenges from 'data/challenges.json'
import Modal from 'components/Modal'

type ChallengesProviderProps = {
  children: ReactNode
  level: number
  currentExperience: number
  challengesCompleted: number
}

type ChallengeProps = {
  type: 'body' | 'eye'
  description: string
  amount: number
}

type ChallengesContextData = {
  level: number
  currentExperience: number
  challengesCompleted: number
  activeChallenge: ChallengeProps
  experienceToNextLevel: number
  isLevelModalOpen: boolean
  levelUp: () => void
  startNewChallenge: () => void
  resetChallenge: () => void
  completeChallenge: () => void
  closeLevelUpModal: () => void
}

export const ChallengesContext = createContext({} as ChallengesContextData)

export function ChallengesProvider({
  children,
  ...rest
}: ChallengesProviderProps) {
  const [level, setLevel] = useState(rest.level ?? 1)
  const [currentExperience, setCurrentExperience] = useState(
    rest.currentExperience ?? 0
  )
  const [challengesCompleted, setChallengesCompleted] = useState(
    rest.challengesCompleted ?? 0
  )

  const [activeChallenge, setActiveChallenge] = useState(null)
  const [isLevelModalOpen, setIsLevelModalOpen] = useState(false)

  const experienceToNextLevel = Math.pow((level + 1) * 4, 2)

  //pedindo permissão
  // useEffect(() => {
  //   Notification.requestPermission()
  // }, [])

  //salvando Cookies
  useEffect(() => {
    Cookies.set('level', String(level))
    Cookies.set('currentExperience', String(currentExperience))
    Cookies.set('challengesCompleted', String(challengesCompleted))
  }, [level, currentExperience, challengesCompleted])

  function levelUp() {
    setLevel(level + 1)
    setIsLevelModalOpen(true)
  }

  function closeLevelUpModal() {
    setIsLevelModalOpen(false)
  }

  function startNewChallenge() {
    const randomChallengeIndex = Math.floor(Math.random() * challenges.length)
    const challenge = challenges[randomChallengeIndex]

    setActiveChallenge(challenge)

    new Audio('/notification.mp3').play()

    toast.info('Você tem um novo desafio 🎉', {
      position: 'top-right',
      autoClose: 3000,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true
    })
    // if (Notification.permission === 'granted') {
    //   new Notification('Novo desafio 🎉', {
    //     body: `Valendo ${challenge.amount} xp`,
    //     silent: true
    //   })
    // }
  }

  function resetChallenge() {
    setActiveChallenge(null)
    toast.warning('Poxa 😥 na próxima você consegue!', {
      position: 'top-right',
      autoClose: 4000,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true
    })
  }

  function completeChallenge() {
    if (!activeChallenge) {
      return
    }

    const { amount } = activeChallenge

    let finalExperience = currentExperience + amount

    if (finalExperience >= experienceToNextLevel) {
      finalExperience = finalExperience - experienceToNextLevel
      toast.success('Incrível você subiu de level 😍', {
        position: 'top-right',
        autoClose: 3000,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true
      })
      levelUp()
    } else {
      toast.success('Mandou bem! 😎', {
        position: 'top-right',
        autoClose: 3000,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true
      })
    }

    setCurrentExperience(finalExperience)
    setActiveChallenge(null)
    setChallengesCompleted(challengesCompleted + 1)
  }
  return (
    <ChallengesContext.Provider
      value={{
        level,
        currentExperience,
        challengesCompleted,
        activeChallenge,
        experienceToNextLevel,
        isLevelModalOpen,
        startNewChallenge,
        levelUp,
        resetChallenge,
        completeChallenge,
        closeLevelUpModal
      }}
    >
      {children}
      {isLevelModalOpen && <Modal />}
    </ChallengesContext.Provider>
  )
}
