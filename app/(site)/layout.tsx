import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import localFont from 'next/font/local'
import '@globals'
import Footer from '@/components/Footer'


const inter = Inter({ subsets: ['latin'] })

const alliance = localFont({ 
  src: '../../styles/fonts/AllianceNo2-Light.woff2', 
  variable: '--font-alliance',
})

export const metadata: Metadata = {
  title: 'Miebi',
  description: 'Web designer and developer based in France',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={alliance.variable}>
        {children}
        <Footer />
      </body>
    </html>
  )
}
