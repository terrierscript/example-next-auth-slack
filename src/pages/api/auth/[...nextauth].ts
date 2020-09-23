import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'

const options = {
  // Configure one or more authentication providers
  providers: [
    Providers.Slack({
      clientId: process.env.SLACK_CLIENT_ID,
      clientSecret: process.env.SLACK_CLIENT_SECRET
    })
  ],
  callbacks: {
    signIn: async (user, account, profile) => {
      console.log(user, account, profile)
      return Promise.resolve(true)
    },
    session: async (session, user, sessionToken) => {
      console.log(session, user, sessionToken)
      return Promise.resolve(session)
    }
  }
}

export default (req, res) => NextAuth(req, res, options)