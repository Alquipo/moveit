/* eslint-disable react-hooks/exhaustive-deps */
import { createContext, ReactNode, useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import useSWR from 'swr'

import challenges from 'data/challenges.json'
import axios from 'axios'

import Modal from 'components/Modal'
import { useSession } from 'next-auth/client'

type ChallengesProviderProps = {
  children: ReactNode
  // level: number
  // currentExperience: number
  // challengesCompleted: number
}

type ChallengeProps = {
  type: 'body' | 'eye'
  description: string
  amount: number
}

type ChallengesContextData = {
  level: number
  currentExperience: number
  totalExperience: number
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

export function ChallengesProvider({ children }: ChallengesProviderProps) {
  const [session, loading] = useSession()

  const [level, setLevel] = useState(1)
  const [currentExperience, setCurrentExperience] = useState(0)
  const [totalExperience, setTotalExperience] = useState(0)

  const [challengesCompleted, setChallengesCompleted] = useState(0)

  const [activeChallenge, setActiveChallenge] = useState(null)
  const [isLevelModalOpen, setIsLevelModalOpen] = useState(false)

  const experienceToNextLevel = Math.pow((level + 1) * 4, 2)
  // const [loading, setLoading] = useState(true)

  //pedindo permissão
  // useEffect(() => {
  //   Notification.requestPermission()
  // }, [])

  // const { data, error } = useSWR('/api/user')

  useEffect(() => {
    if (loading) {
      axios
        .get(`/api/user/${session?.user.email}`)
        .then((response) => {
          setChallengesCompleted(response.data.user.challengesCompleted || 0)
          setCurrentExperience(response.data.user.currentExp || 0)
          setTotalExperience(response.data.user.totalExp || 0)
          setLevel(response.data.user.level || 1)
        })
        .catch((e) => {
          console.log('Erro ao buscar dados do user', e)
        })
    } else {
      axios.post(`/api/user`, {
        level: level || 1,
        currentExp: currentExperience,
        totalExp: totalExperience,
        email: session?.user.email,
        challengesCompleted,
        photo: session?.user.image,
        name: session?.user.name
      })
    }
  }, [level, currentExperience, challengesCompleted, loading, totalExperience])

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
      autoClose: 2000,
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
    setTotalExperience(totalExperience + amount)
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
        totalExperience,
        isLevelModalOpen,
        startNewChallenge,
        levelUp,
        resetChallenge,
        completeChallenge,
        closeLevelUpModal
      }}
    >
      {!loading && children}
      {isLevelModalOpen && <Modal />}
    </ChallengesContext.Provider>
  )
}
