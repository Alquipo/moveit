import { NextApiRequest, NextApiResponse } from 'next'
import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'
import { GenericObject } from 'next-auth/_utils'

const options = {
  // pages: {
  //   signIn: '/'
  // },
  providers: [
    // Providers.GitHub({
    //   clientId: process.env.GITHUB_CLIENT_ID,
    //   clientSecret: process.env.GITHUB_CLIENT_SECRET
    // }),
    Providers.Auth0({
      clientId: process.env.AUTH0_CLIENT_ID,
      clientSecret: process.env.AUTH0_CLIENT_SECRET,
      domain: process.env.AUTH0_DOMAIN
    })
  ],

  callbacks: {
    session: async (session: GenericObject, user: GenericObject) => {
      session.userId = user.id
      return Promise.resolve(session)
    }
  }

  // database: `${process.env.DATABASE_URL}/moveit`
}

const Auth = (req: NextApiRequest, res: NextApiResponse) =>
  NextAuth(req, res, options)

export default Auth
