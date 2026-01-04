import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'Wolfe Studios | Web Redesign for Small Business',
  description: 'We redesign outdated small-business websites into fast, mobile-first sites that actually bring in customers.',
  openGraph: {
    title: 'Wolfe Studios | Web Redesign for Small Business',
    description: 'We redesign outdated small-business websites into fast, mobile-first sites that actually bring in customers.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${inter.variable}`}>{children}</body>
    </html>
  )
}
