import './globals.css'
import type { Metadata } from 'next'
import { Fredoka } from 'next/font/google'

const fredoka = Fredoka({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'The Academic Vault - The Ultimate Bank for College',
  description: 'Find scholarships, competitions, and extracurriculars for college preparation',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={fredoka.className}>{children}</body>
    </html>
  )
}

