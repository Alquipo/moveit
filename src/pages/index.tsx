import HomeTemplate from 'templates/Home'

export default function Home() {
  return <HomeTemplate />
}

export const getServerSideProps = async () => {
  return {
    props: {}
  }
}
