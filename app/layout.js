import { Abhaya_Libre } from 'next/font/google'
import './globals.css'
import { CONFIG } from '../config'

const abhayaLibre = Abhaya_Libre({
  weight: ['400', '500', '600', '700', '800'],
  subsets: ['latin'],
  variable: '--font-abhaya-libre',
})

export const metadata = {
  title: `Boda de ${CONFIG.couple.name1} & ${CONFIG.couple.name2}`,
  description: `Invitación de boda - ${CONFIG.date.day} de ${CONFIG.date.month} de ${CONFIG.date.year}`,
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={abhayaLibre.variable}>
        {children}
      </body>
    </html>
  )
}
