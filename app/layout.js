import './globals.css'
import { Inter } from 'next/font/google'
import {Menu} from "@/components/layout/Menu";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'About Anthony Pekhov',
  description: 'Symfony software developer',
  keywords: 'backend, developer, symfony, opencart, php'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Menu />
      {children}
      </body>
    </html>
  )
}
