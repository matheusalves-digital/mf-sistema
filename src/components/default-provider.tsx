'use client'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Session } from 'next-auth'
import { SessionProvider } from 'next-auth/react'
import { ReactNode } from 'react'

interface DefaultProviderProps {
  children: ReactNode
  session?: Session | null;
}

export function DefaultProvider({ children, session }: DefaultProviderProps) {
  const client = new QueryClient()
  return (
    <SessionProvider session={session}>
      <QueryClientProvider client={client}>
          {children}
      </QueryClientProvider>
    </SessionProvider>

  )
}
