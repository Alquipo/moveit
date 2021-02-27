import { GetServerSideProps } from 'next'
import DashboardTemplate, { DashboardTemplateProps } from 'templates/Dashboard'

export default function Dashboard(props: DashboardTemplateProps) {
  return <DashboardTemplate {...props} />
}

export const getServerSideProps: GetServerSideProps = async ({
  req,
  params
}) => {
  const { level, currentExperience, challengesCompleted } = req.cookies
  const { username } = params
  const response = await fetch(`https://api.github.com/users/${username}`)
  const user = await response.json()
  console.log(user)

  return {
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted),
      user: {
        name: user.name,
        avatarUrl: user.avatar_url
      }
    }
  }
}
