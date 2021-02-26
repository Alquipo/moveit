import { GetServerSideProps } from 'next'

import HomeTemplate, { HomeTemplateProps } from 'templates/Home'

export default function Home(props: HomeTemplateProps) {
  return <HomeTemplate {...props} />
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
