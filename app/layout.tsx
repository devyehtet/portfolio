import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import localFont from 'next/font/local'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'], 
  variable: '--font-inter'
})

const funnelDisplay = localFont({
  src: '../public/fonts/FunnelDisplay-Medium.ttf',
  variable: '--font-funnel-display'
})

export const metadata: Metadata = {
  title: 'Ye Htet Aung | Digital Marketing Manager',
  description: 'Digital Marketing Manager specializing in campaign optimization and performance marketing',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`scroll-smooth ${inter.variable} ${funnelDisplay.variable}`}>
      <body className={`${inter.className} bg-emerald-950 text-white`}>
        {children}
      </body>
    </html>
  )
}