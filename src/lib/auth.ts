// lib/auth.ts
import { NextAuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import GoogleProvider from 'next-auth/providers/google'
import { supabaseAdmin } from '@/lib/supabase/admin'

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' }
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null
        }

        // Check if user exists in Supabase auth
        const { data: authUser, error: authError } = await supabaseAdmin.auth.signInWithPassword({
          email: credentials.email,
          password: credentials.password,
        })

        if (authError || !authUser.user) {
          return null
        }

        // Get user profile from public.users
        const { data: profile, error: profileError } = await supabaseAdmin
          .from('users')
          .select('*')
          .eq('id', authUser.user.id)
          .single()

        if (profileError) {
          // Create user profile if it doesn't exist
          const { data: newProfile } = await supabaseAdmin
            .from('users')
            .insert({
              id: authUser.user.id,
              email: authUser.user.email!,
              name: authUser.user.user_metadata?.name,
            })
            .select()
            .single()

          return {
            id: authUser.user.id,
            email: authUser.user.email!,
            name: authUser.user.user_metadata?.name,
            role: 'CUSTOMER',
          }
        }

        return {
          id: profile.id,
          email: profile.email,
          name: profile.name,
          role: profile.role,
        }
      }
    })
  ],
  session: {
    strategy: 'jwt'
  },
  callbacks: {
    async jwt({ token, user, account }) {
      if (user) {
        token.role = user.role || token.role || 'CUSTOMER'
      }
      if (!token.role) token.role = 'CUSTOMER'
      return token
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.sub!
        session.user.role = (token.role as string) || 'CUSTOMER'
      }
      return session
    },
    async signIn({ user, account, profile }) {
      if (account?.provider === 'google') {
        try {
          // Check if user exists in our users table
          const { data: existingUser } = await supabaseAdmin
            .from('users')
            .select('*')
            .eq('email', user.email!)
            .single()

          if (!existingUser) {
            // Create user in Supabase auth first
            const { data: authUser, error: authError } = await supabaseAdmin.auth.admin.createUser({
              email: user.email!,
              email_confirm: true,
              user_metadata: {
                name: user.name,
                avatar_url: user.image,
              }
            })

            if (!authError && authUser.user) {
              // Create user profile
              await supabaseAdmin
                .from('users')
                .insert({
                  id: authUser.user.id,
                  email: user.email!,
                  name: user.name,
                })
            }
          }
          return true
        } catch (error) {
          console.error('Error in signIn callback:', error)
          return false
        }
      }
      return true
    }
  },
  pages: {
    signIn: '/signin',
  }
}