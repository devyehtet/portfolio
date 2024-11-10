import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

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
    <html lang="en" className="scroll-smooth">
      <head>
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='75' font-size='75' font-family='Arial' font-weight='bold' fill='%2310b981'>Y</text></svg>"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Funnel+Display:wght@300..800&display=swap"
        />
      </head>
      <body className={`${inter.className} bg-emerald-950 text-white`}>{children}</body>
    </html>
  )
}