import { Abhaya_Libre } from 'next/font/google'
import './globals.css'
import { CONFIG } from '../config'

const abhayaLibre = Abhaya_Libre({
  weight: ['400', '500', '600', '700', '800'],
  subsets: ['latin'],
  variable: '--font-abhaya-libre',
})

export const metadata = {
  title: `${CONFIG.couple.name1} & ${CONFIG.couple.name2}`,
  description: `Invitación de boda - ${CONFIG.date.day} de ${CONFIG.date.month} de ${CONFIG.date.year}`,
  openGraph: {
    title: `${CONFIG.couple.name1} & ${CONFIG.couple.name2}`,
    description: `Invitación de boda - ${CONFIG.date.day} de ${CONFIG.date.month} de ${CONFIG.date.year}`,
    url: 'https://el11a.com',
    images: [
      {
        url: 'https://el11a.com/images/gallery/thumbnail.jpeg',
        width: 1200,
        height: 630,
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    images: ['https://el11a.com/images/gallery/thumbnail.jpeg'],
  },
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
