import { useSession } from 'next-auth/client'
import { useRouter } from 'next/router'
import React from 'react'
import api from 'services/api'
import SingInTemplate from 'templates/SignIn'

import LeaderboardTemplate, {
  LeaderboardTemplateProps
} from 'templates/Leaderboard'

export default function Leaderboard(props: LeaderboardTemplateProps) {
  const [session, loading] = useSession()
  const router = useRouter()

  if (typeof window !== 'undefined' && !loading && !session) {
    return <SingInTemplate />
  }

  return <LeaderboardTemplate {...props} />
}

export async function getStaticProps() {
  const { data } = await api.get('/api/leaderboard')

  return {
    revalidate: 60,

    props: {
      users: data.users
    }
  }
}
