import { GetServerSideProps } from 'next'

import Dashboard, { DashboardTemplateProps } from 'templates/Dashboard'

export default function Home(props: DashboardTemplateProps) {
  return <Dashboard {...props} />
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { level, currentExperience, challengesCompleted } = ctx.req.cookies

  return {
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted)
    }
  }
}
