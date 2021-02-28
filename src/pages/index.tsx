import { useAuth } from 'contexts/AuthContext'
import { GetStaticProps } from 'next'
import React from 'react'
import DashboardTemplate, { DashboardTemplateProps } from 'templates/Dashboard'
import HomeTemplate from 'templates/Home'

export default function Home(props: DashboardTemplateProps) {
  const { isLogged, userData } = useAuth()

  return (
    <>
      {userData === null && <HomeTemplate />}
      {isLogged && <DashboardTemplate {...props} />}
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {}
  }
}
