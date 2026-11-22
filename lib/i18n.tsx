'use client'

import React, {createContext, useContext, useEffect, useMemo, useState} from 'react'

export type Locale = 'en' | 'ru' | 'uk'

type Dictionary = {
  nav: {
    about: string
    work: string
    resume: string
    faq: string
    openSource: string
    posts: string
    contacts: string
  }
  ui: {
    menu: string
    theme: string
    language: string
    light: string
    dark: string
  }
}

const dictionaries: Record<Locale, Dictionary> = {
  en: {
    nav: {
      about: 'About',
      work: 'Work',
      resume: 'Resume',
      faq: 'F.A.Q',
      openSource: 'Open source',
      posts: 'Posts',
      contacts: 'Contacts',
    },
    ui: {
      menu: 'Menu',
      theme: 'Theme',
      language: 'Language',
      light: 'Light',
      dark: 'Dark',
    },
  },
  ru: {
    nav: {
      about: 'Обо мне',
      work: 'Опыт',
      resume: 'Резюме',
      faq: 'F.A.Q',
      openSource: 'Open source',
      posts: 'Посты',
      contacts: 'Контакты',
    },
    ui: {
      menu: 'Меню',
      theme: 'Тема',
      language: 'Язык',
      light: 'Светлая',
      dark: 'Тёмная',
    },
  },
  uk: {
    nav: {
      about: 'Про мене',
      work: 'Досвід',
      resume: 'Резюме',
      faq: 'F.A.Q',
      openSource: 'Open source',
      posts: 'Пости',
      contacts: 'Контакти',
    },
    ui: {
      menu: 'Меню',
      theme: 'Тема',
      language: 'Мова',
      light: 'Світла',
      dark: 'Темна',
    },
  },
}

type LocaleContextValue = {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: Dictionary
}

const LocaleContext = createContext<LocaleContextValue | null>(null)

export function LocaleProvider({children}: {children: React.ReactNode}) {
  const [locale, setLocaleState] = useState<Locale>('en')

  useEffect(() => {
    const saved = window.localStorage.getItem('locale')
    if (saved === 'en' || saved === 'ru' || saved === 'uk') {
      setLocaleState(saved)
      document.documentElement.lang = saved
    } else {
      document.documentElement.lang = 'en'
    }
  }, [])

  const setLocale = (next: Locale) => {
    setLocaleState(next)
    window.localStorage.setItem('locale', next)
    document.documentElement.lang = next
  }

  const value = useMemo(() => ({ locale, setLocale, t: dictionaries[locale] }), [locale])

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
}

export function useLocale() {
  const ctx = useContext(LocaleContext)
  if (!ctx) {
    throw new Error('useLocale must be used within LocaleProvider')
  }
  return ctx
}

export const localeNames: Record<Locale, string> = {
  en: 'EN',
  ru: 'RU',
  uk: 'UK',
}