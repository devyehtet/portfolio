import localFont from 'next/font/local'
import { Inter } from 'next/font/google'

export const inter = Inter({ subsets: ['latin'] })

export const funnelDisplay = localFont({
  src: '../public/fonts/FunnelDisplay.woff2',
  variable: '--font-funnel-display',
  display: 'swap',
})