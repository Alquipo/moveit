import SingInTemplate from 'templates/SignIn'

export default function SigIn() {
  return (
    <SingInTemplate />
    // <>
    //   {isLogged ? router.push('/dashboard') : <SingInTemplate />}
    //   {/* {userData === null ? <HomeTemplate /> : <DashboardTemplate />} */}

    //   {/* {userData === null && <HomeTemplate />} */}
    // </>
  )
}
