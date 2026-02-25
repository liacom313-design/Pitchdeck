import Script from 'next/script'
import type { Metadata, Viewport } from 'next'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Fashion Art Toronto | S/S 2026 Partnership Opportunities',
  description:
    'Join Fashion Art Toronto for Spring/Summer 2026 Fashion Week, May 25-31. 20+ years of culture-driven, globally connected fashion. Partnership opportunities from $5K-$100K.',
  generator: 'v0.app',
  openGraph: {
    title: 'Fashion Art Toronto | S/S 2026 Partnership Opportunities',
    description:
      'Canada\'s longest-running fashion week. 50M media impressions. 15K attendees. Partner with us.',
    type: 'website',
  },
  icons: {
    icon: '/icon.svg',
  },
}

export const viewport: Viewport = {
  themeColor: '#000000',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased bg-background text-foreground">
        {children}
        <Analytics />
        <Script src="/editor-bootstrap.js" strategy="afterInteractive" />
      </body>
    </html>
  )
}
