import { useAuth } from 'contexts/AuthContext'
import React from 'react'
import DashboardTemplate from 'templates/Dashboard'
import HomeTemplate from 'templates/Home'

export default function Dashboard() {
  const { isLogged, userData } = useAuth()

  return (
    <>
      {userData === null && <HomeTemplate />}
      {isLogged && <DashboardTemplate />}
    </>
  )
}

// export const getServerSideProps: GetServerSideProps = async ({
//   req
//   // params
// }) => {
//   const { level, currentExperience, challengesCompleted } = req.cookies
//   // const { username } = params
//   // const response = await fetch(`https://api.github.com/users/${username}`)
//   // const user = await response.json()

//   return {
//     // props: {
//     //   level: Number(level),
//     //   currentExperience: Number(currentExperience),
//     //   challengesCompleted: Number(challengesCompleted)
//     //   // user: {
//     //   //   name: user.name,
//     //   //   avatarUrl: user.avatar_url
//     //   // }
//     // }
//   }
// }
