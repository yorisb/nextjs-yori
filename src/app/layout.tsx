import type { Metadata } from 'next'
import { Poppins, Space_Grotesk } from 'next/font/google'
import './globals.css'
import 'remixicon/fonts/remixicon.css'

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-space-grotesk',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Yori Saepul Barki | IT Technician & Developer',
  description: 'Portfolio website of Yori Saepul Barki, showcasing skills, experience, projects, and certifications.',
  keywords: 'Yori Saepul Barki, Portfolio, IT Technician, Programming, Projects, Skills',
  authors: [{ name: 'Yori Saepul Barki' }],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${poppins.variable} ${spaceGrotesk.variable} scroll-smooth`} suppressHydrationWarning>
      <head>
        <link rel="icon" href="/assets/img/logo.png" type="image/x-icon" />
      </head>
      <body className="font-poppins antialiased">
        {children}
      </body>
    </html>
  )
}