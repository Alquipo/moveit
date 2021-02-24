import { createContext, ReactNode, useState } from 'react'
import challenges from 'data/challenges.json'

type ChallengesProviderProps = {
  children: ReactNode
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
  levelUp: () => void
  startNewChallenge: () => void
  resetChallenge: () => void
}

export const ChallengesContext = createContext({} as ChallengesContextData)

export function ChallengesProvider({ children }: ChallengesProviderProps) {
  const [level, setLevel] = useState(1)
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [currentExperience, setCurrentExperience] = useState(60)
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [challengesCompleted, setChallengesCompleted] = useState(10)

  const [activeChallenge, setActiveChallenge] = useState(null)

  const experienceToNextLevel = Math.pow((level + 1) * 4, 2)

  function levelUp() {
    setLevel(level + 1)
  }

  function startNewChallenge() {
    const randomChallengeIndex = Math.floor(Math.random() * challenges.length)
    const challenge = challenges[randomChallengeIndex]

    setActiveChallenge(challenge)
  }

  function resetChallenge() {
    setActiveChallenge(null)
  }

  return (
    <ChallengesContext.Provider
      value={{
        level,
        currentExperience,
        challengesCompleted,
        activeChallenge,
        experienceToNextLevel,
        startNewChallenge,
        levelUp,
        resetChallenge
      }}
    >
      {children}
    </ChallengesContext.Provider>
  )
}
