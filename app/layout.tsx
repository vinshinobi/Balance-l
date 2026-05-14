import type { Metadata } from 'next'
import { Playfair_Display, DM_Sans } from 'next/font/google'
import './globals.css'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
  weight: ['300', '400', '500', '600'],
})

export const metadata: Metadata = {
  title: "La Balance'l — Café, Crêperie & Brunch à Echallens",
  description:
    "Tea room, café et restaurant au cœur d'Echallens. Crêpes maison, brunch du weekend, plat du jour et spécialités orientales. Place des Balances 15A, 1040 Echallens.",
  keywords: 'crêperie, café, brunch, Echallens, restaurant, tea room, crêpes, Vaud',
  openGraph: {
    title: "La Balance'l — Café, Crêperie & Brunch",
    description: "Tea room et crêperie maison au cœur d'Echallens. Brunch le weekend, crêpes à gogo le vendredi.",
    locale: 'fr_CH',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${playfair.variable} ${dmSans.variable}`}>
      <body>{children}</body>
    </html>
  )
}
