import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

const backgroundStyle = {
  background: `White`,

};

export const metadata: Metadata = {
  title: 'Ashion',
  description: "Welcome to Ashion, your premier online shopping destination where convenience meets choice. At Ashion, we've curated a seamless and inspiring online marketplace for all your shopping needs. Whether you're on the hunt for fashion, electronics, home decor, or anything in between, we've got you covered.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body style={backgroundStyle} className={inter.className}>{children}</body>
    </html>
  )
}
