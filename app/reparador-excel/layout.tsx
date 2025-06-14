import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Reparador de Excel',
  description: 'Reparar Excel',
  generator: '@MerzDev',
  icons : {
    icon: "/ICONO-BLUELINK.png", 
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
