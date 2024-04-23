import './globals.css'
import { Inter } from 'next/font/google'

export const metadata = {
  metadataBase: new URL('https://postgres-starter.vercel.app'),
  title: 'Remembering Elder Moses Olusegun Bolaji',
  description:
    'Join us in celebrating the life and legacy of Elder Moses Olusegun Bolaji by sharing your memories and tributes.',
}

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.variable}>{children}</body>
    </html>
  )
}
