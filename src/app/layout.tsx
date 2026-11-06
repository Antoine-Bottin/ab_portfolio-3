import type { Metadata } from 'next'
import { Open_Sans, Lilita_One } from 'next/font/google'
import '../styles/tokens.scss'
import './globals.scss'
import { Analytics } from '@vercel/analytics/next'

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-open-sans',
  display: 'swap',
})

// Alternative libre à Lovelo (licence web à confirmer)
const lilitaOne = Lilita_One({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-lilita-one',
  display: 'swap',
})

export const metadata: Metadata = {
    title: 'Antoine Bottin - Portfolio ',
    description: 'This is my dev portfolio',
    icons: [{ rel: 'icon', url: '/favicon.ico' }],
    keywords: [
        'web',
        'developer',
        'portfolio',
        'Antoine Bottin',
        'software ingeneer',
        'reactJS',
        'NextJs',
        'NodeJs',
        'TypeScript',
        'JavaScript',
        'HTML',
    ],
    metadataBase: new URL('https://www.portfolio.abottin.dev'),
    openGraph: {
        title: 'Antoine Bottin - Portfolio ',
        description: 'This is my dev portfolio',
        images: [{ url: '/assets/pictures/Photo_CV.jpg' }],
        type: 'website',
        url: 'https://www.portfolio.abottin.dev',
    },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${openSans.variable} ${lilitaOne.variable}`}>                
        <Analytics />
        {children}
      </body>
    </html>
  )
}
