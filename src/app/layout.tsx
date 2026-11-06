import type { Metadata } from 'next'
import { Open_Sans, Lilita_One } from 'next/font/google'
import '../styles/tokens.scss'
import './globals.scss'
import { Analytics } from '@vercel/analytics/next'
import { siteTitle, siteUrl } from './site'

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
    title: siteTitle,
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
    metadataBase: new URL(siteUrl),
    alternates: { canonical: '/' },
    openGraph: {
        title: siteTitle,
        description: 'Je conçois des produits de bout en bout, du recueil du besoin au prototype.',
        type: 'website',
        url: siteUrl,
        locale: 'fr_FR',
    },
    twitter: {
        card: 'summary_large_image',
        title: siteTitle,
        description: 'Je conçois des produits de bout en bout, du recueil du besoin au prototype.',
    },
}

// Données structurées : aide Google à identifier la personne derrière le site
const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Antoine Bottin',
  url: siteUrl,
  jobTitle: 'Product Builder No-code & Développeur React / Next.js',
  address: { '@type': 'PostalAddress', addressRegion: 'Normandie', addressCountry: 'FR' },
  knowsAbout: ['No-code', 'Notion', 'Airtable', 'Make', 'n8n', 'React', 'Next.js', 'TypeScript'],
  sameAs: ['https://github.com/Antoine-Bottin', 'https://www.linkedin.com/in/antoine-bottin/'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className={`${openSans.variable} ${lilitaOne.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd).replace(/</g, '\\u003c') }}
        />
        <Analytics />
        {children}
      </body>
    </html>
  )
}
