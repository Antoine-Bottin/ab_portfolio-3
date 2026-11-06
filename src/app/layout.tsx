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
    title: 'Antoine Bottin · Product Builder No-code & Développeur React / Next.js',
    description:
        'Product Builder No-code et développeur React / Next.js : cadrage, modélisation de données, automatisations, agents IA et sites web en production.',
    keywords: [
        'Antoine Bottin',
        'Product Builder',
        'No-code',
        'Notion',
        'Airtable',
        'Make',
        'n8n',
        'développeur React',
        'Next.js',
        'TypeScript',
        'Normandie',
    ],
    metadataBase: new URL('https://www.portfolio.abottin.dev'),
    openGraph: {
        title: 'Antoine Bottin · Product Builder No-code & Développeur React / Next.js',
        description: 'Je conçois des produits de bout en bout, du recueil du besoin au prototype.',
        type: 'website',
        url: 'https://www.portfolio.abottin.dev',
        locale: 'fr_FR',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Antoine Bottin · Product Builder No-code & Développeur React / Next.js',
        description: 'Je conçois des produits de bout en bout, du recueil du besoin au prototype.',
    },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className={`${openSans.variable} ${lilitaOne.variable}`}>
      <body>                
        <Analytics />
        {children}
      </body>
    </html>
  )
}
