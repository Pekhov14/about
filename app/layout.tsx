import './globals.css'
import 'devicon/devicon.min.css';
import {Menu} from '@/components/layout/Menu';
import {Providers} from '@/components/Providers';
import { Metadata } from 'next';
import { Analytics } from "@vercel/analytics/next"

const title = 'Anthony Pekhov - Software Developer';
const description = 'Hello, it\'s Anthony. 👋 I\'m a software developer with a focus on backend development. I usually use PHP (OpenCart, Symfony) and do a bit of frontend work in JS (React).';
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
            <html lang="en" data-lt-installed="true" suppressHydrationWarning>
            <body className="min-h-screen bg-[var(--site-bg)] text-[var(--site-text)] antialiased">
            <script
              dangerouslySetInnerHTML={{
                __html: `(function(){try{var t=localStorage.getItem('theme');var d=(t==='light'||t==='dark')?t:(window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light');document.documentElement.dataset.theme=d;if(d==='dark'){document.documentElement.classList.add('dark')}else{document.documentElement.classList.remove('dark')}var l=localStorage.getItem('locale');if(l==='en'||l==='ru'||l==='uk'){document.documentElement.lang=l}}catch(e){}})();`,
              }}
            />
            <Providers>
              <Menu />
              <div className="pb-20 lg:pb-0">
                {children}
              </div>
            </Providers>
            <Analytics />
            <link rel="apple-touch-icon" href="/assets/img/og-card.png"/>
            <link rel="shortcut" href="/assets/img/og-card.png"/>
            <link rel="msapplication-TileImage" href="/assets/img/og-card.png"/>
            </body>
            </html>
  )
}
