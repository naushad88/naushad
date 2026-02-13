import type { Metadata } from 'next'
import { Inter, Nunito } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })
const nunito = Nunito({ 
  subsets: ['latin'],
  weight: ['700', '800', '900'],
  variable: '--font-nunito',
})

export const metadata: Metadata = {
  title: 'Naushad Ahamad | Engineering Manager & Platform Delivery Leader',
  description: 'AI-Enabled Secure SaaS & Platform Delivery Leader | PMP | Cybersecurity Architect | 12+ Years Experience',
  keywords: 'Engineering Manager, Platform Delivery, SaaS Delivery, Technical Program Management, Secure Architecture',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} ${nunito.variable}`}>{children}</body>
    </html>
  )
}
