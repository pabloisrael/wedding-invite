import localFont from 'next/font/local'
import './globals.css'
import { CONFIG } from '../config'

const satoshi = localFont({
  src: [
    { path: './fonts/Satoshi-Light.otf', weight: '300', style: 'normal' },
    { path: './fonts/Satoshi-Regular.otf', weight: '400', style: 'normal' },
    { path: './fonts/Satoshi-Medium.otf', weight: '500', style: 'normal' },
    { path: './fonts/Satoshi-Bold.otf', weight: '700', style: 'normal' },
  ],
  variable: '--font-satoshi',
})

export const metadata = {
  title: `Boda de ${CONFIG.couple.name1} & ${CONFIG.couple.name2}`,
  description: `Invitación de boda - ${CONFIG.date.day} de ${CONFIG.date.month} de ${CONFIG.date.year}`,
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={satoshi.variable}>
        {children}
      </body>
    </html>
  )
}
