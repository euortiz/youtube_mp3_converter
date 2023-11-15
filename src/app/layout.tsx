import type { Metadata } from 'next'
import './globals.css'


export const metadata: Metadata = {
  title: 'Convertidor MP3',
  description: 'Creado por GSO',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body >{children}</body>
    </html>
  )
}
