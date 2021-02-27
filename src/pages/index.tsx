import { GetStaticProps } from 'next'
import HomeTemplate from 'templates/Home'

export default function Home() {
  return <HomeTemplate />
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {}
  }
}
