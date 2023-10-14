'use client'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactNode } from 'react'

interface DefaultProviderProps {
  children: ReactNode
}

export function DefaultProvider({ children }: DefaultProviderProps) {
  const client = new QueryClient()
  return (
    <QueryClientProvider client={client}>
        {children}
    </QueryClientProvider>
  )
}
