import './globals.css'
import type { Metadata } from 'next'
import { 
  Inter,
  Bai_Jamjuree as BaiJamjuree,
 } from 'next/font/google'
import { DefaultProvider } from '@/components/default-provider'
import { Session } from 'next-auth'

const inter = Inter({ 
  subsets: ['latin'],
  weight: '800',
  variable: '--font-inter' })
const baiJamjuree = BaiJamjuree({
  subsets: ['latin'],
  weight: '700',
  variable: '--font-bai-jam-juree',
})

export const metadata: Metadata = {
  title: 'Apollo I',
  description: 'Software jurídico',
}

interface propsApp {
  children?: React.ReactNode,
  session?: Session | null;
}

export default function RootLayout({children, session}: propsApp) {
  return (
    <html lang="en">
      <body 
        className={`${inter.variable} ${baiJamjuree}`}
      >
        
          <DefaultProvider>
            {children}  
          </DefaultProvider>
        
      </body>
    </html>
  )
}
