
import NextAuth from 'next-auth'
import AppleProvider from 'next-auth/providers/apple'
import FacebookProvider from 'next-auth/providers/facebook'
import GoogleProvider from 'next-auth/providers/google'
import EmailProvider from 'next-auth/providers/email'
import GithubProvider from 'next-auth/providers/github'

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: "process.env.GOOGLE_ID",
      clientSecret: "process.env.GOOGLE_SECRET"
    })
  ],

  secret: "process.env.SECRET",
})