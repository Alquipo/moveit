import { useAuth } from 'contexts/AuthContext'
import React from 'react'
import DashboardTemplate from 'templates/Dashboard'
import HomeTemplate from 'templates/Home'

export default function Home() {
  const { isLogged, userData } = useAuth()

  return (
    <>
      {userData === null && <HomeTemplate />}
      {isLogged && <DashboardTemplate />}
    </>
  )
}
