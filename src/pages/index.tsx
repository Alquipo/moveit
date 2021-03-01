import { useAuth } from 'contexts/AuthContext'
import { useRouter } from 'next/router'
import React from 'react'
import HomeTemplate from 'templates/Home'

export default function Home() {
  const { isLogged, userData } = useAuth()
  const router = useRouter()

  return (
    <>
      {userData === null && <HomeTemplate />}
      {isLogged && router.push('/dashboard')}
    </>
  )
}
