import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Gang Run Printing - Wholesale Print Pricing',
  description: 'Gang run printing combines multiple orders for maximum savings. Professional quality at wholesale prices.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: 'system-ui, -apple-system, sans-serif' }}>
        {children}
      </body>
    </html>
  )
}
