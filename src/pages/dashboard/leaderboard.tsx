import { useAuth } from 'contexts/AuthContext'
import React from 'react'
import api from 'services/api'
import HomeTemplate from 'templates/Home'

import LeaderboardTemplate, {
  LeaderboardTemplateProps
} from 'templates/Leaderboard'

export default function Leaderboard(props: LeaderboardTemplateProps) {
  const { isLogged, userData } = useAuth()

  return (
    <>
      {userData === null && <HomeTemplate />}
      {isLogged && <LeaderboardTemplate {...props} />}
    </>
  )
}

export async function getStaticProps() {
  const { data } = await api.get('/api/user')

  return {
    props: {
      revalidate: 60,
      users: data.users
    }
  }
}
