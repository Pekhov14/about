import './globals.css'
import { Inter } from 'next/font/google'
import {Menu} from '@/components/layout/Menu';
import { Metadata } from 'next';

const inter = Inter({ subsets: ['latin'] })

const title = 'Anthony Pekhov - Software Developer';
const description = 'Hello, it\'s Anthony. 👋 I\'m a software developer specializing in backend. I usually use PHP (OpenCart, Symfony, Laravel) and do a bit of frontend work in JS (React, Next).';
const siteUrl = 'https://anton-pekhov.vercel.app/';
const imgAlt = 'Preview image for Anthony Pekhov'

export const metadata: Metadata = {
    title: title,
    description: description,
    keywords: 'backend, developer, symfony, opencart, php, js',
    openGraph: {
        title: title,
        description: description,
        url: siteUrl,
        siteName: "About Anthony Pekhov",
        type: 'website',
        images: [
            {
                url: `${siteUrl}assets/img/og-card.png`,
                secureUrl: `${siteUrl}assets/img/og-card.png`,
                width: 690,
                height: 326,
                alt: imgAlt,
            }
        ]
    },
    twitter: {
        card: 'summary_large_image',
        site: '@anthony_pekhov',
        title: title,
        description: description,
        creator: '@anthony_pekhov',
        images: {
            url: `${siteUrl}assets/img/og-card.png`,
            alt: imgAlt,
        }
    },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <body className={inter.className}>
    <Menu/>
    {children}
    <link rel="apple-touch-icon" href="/assets/img/og-card.png"/>
    <link rel="shortcut" href="/assets/img/og-card.png"/>
    <link rel="msapplication-TileImage" href="/assets/img/og-card.png"/>
    </body>
    </html>
  )
}
