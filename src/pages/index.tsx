import { useSession } from 'next-auth/client'
import { useRouter } from 'next/router'
import React from 'react'
import HomeTemplate from 'templates/Home'
import SingInTemplate from 'templates/SignIn'

export default function Home() {
  const [session, loading] = useSession()
  const router = useRouter()

  if (loading) return null

  if (!loading && !session) return <SingInTemplate />

  return (
    <HomeTemplate />
    // <>
    //   {userData === null && <HomeTemplate />}
    //   {isLogged && <DashboardTemplate />}
    // </>
  )
}

// export const getServerSideProps: GetServerSideProps = async ({
//   req,
//   params
// }) => {
//   console.log(req)
//   // console.log(params)
//   return {
//     props: {}
//   }
// }

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
