import type { Metadata } from 'next'
import './globals.css'
import Footer from './components/Footer'

export const metadata: Metadata = {
  title: 'Not Only Tea - Hong Kong | Handmade Tea Pots by Master Artisans',
  description: 'Discover the artistry of our handmade tea pots, crafted by master artisans. Experience authentic Chinese tea culture with premium teaware from Hong Kong.',
  keywords: ['tea', 'teapot', 'Hong Kong', 'handmade', 'artisan', 'Chinese tea', 'teaware'],
  authors: [{ name: 'Not Only Tea' }],
  openGraph: {
    title: 'Not Only Tea - Hong Kong',
    description: 'Discover the artistry of our handmade tea pots, crafted by master artisans.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Not Only Tea - Hong Kong',
    description: 'Discover the artistry of our handmade tea pots, crafted by master artisans.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#000000" />
        <script 
          type="module" 
          src="https://unpkg.com/@splinetool/viewer@1.0.0/build/spline-viewer.js"
        />
      </head>
      <body>
        {children}
        <Footer />
      </body>
    </html>
  )
}

