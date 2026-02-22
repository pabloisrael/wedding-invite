import { Cormorant_Garamond, Montserrat } from 'next/font/google'
import './globals.css'
import { CONFIG } from '../config'

const cormorant = Cormorant_Garamond({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-heading',
})

const montserrat = Montserrat({
  weight: ['300', '400', '500', '600'],
  subsets: ['latin'],
  variable: '--font-body',
})

export const metadata = {
  title: `Boda de ${CONFIG.couple.name1} & ${CONFIG.couple.name2}`,
  description: `Invitación de boda - ${CONFIG.date.day} de ${CONFIG.date.month} de ${CONFIG.date.year}`,
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={`${cormorant.variable} ${montserrat.variable}`}>
        {children}
      </body>
    </html>
  )
}
