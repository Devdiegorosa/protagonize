import type { Metadata } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Protagonize Mentoria | Liderança, Alta Performance e Desenvolvimento Humano',
    template: '%s | Protagonize Mentoria',
  },
  description:
    'Mentorias transformadoras para profissionais, líderes e empreendedores que desejam crescer com propósito, confiança e alta performance. Fundada por Camilla Santos e Luciana Venâncio.',
  keywords: [
    'mentoria de liderança',
    'liderança feminina',
    'desenvolvimento de líderes',
    'inteligência emocional',
    'alta performance',
    'gestão de pessoas',
    'mentoria profissional',
    'desenvolvimento pessoal',
    'mentoria para gestores',
    'liderança consciente',
    'protagonismo',
    'Camilla Santos',
    'Luciana Venâncio',
  ],
  authors: [{ name: 'Protagonize Mentoria' }],
  creator: 'Protagonize Mentoria',
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://protagonize.com.br',
    siteName: 'Protagonize Mentoria',
    title: 'Protagonize Mentoria | Liderança e Desenvolvimento Humano',
    description:
      'Assuma o protagonismo da sua vida, carreira e liderança. Mentorias premium com Camilla Santos e Luciana Venâncio.',
    // images: [{ url: '/og-image.jpg', width: 1200, height: 630 }], // Adicione quando tiver a imagem
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Protagonize Mentoria',
    description: 'Assuma o protagonismo da sua vida, carreira e liderança.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${playfair.variable} ${inter.variable}`}>
      <body>
        <Navbar />
        <main style={{ paddingTop: '76px' }}>{children}</main>
      </body>
    </html>
  )
}
