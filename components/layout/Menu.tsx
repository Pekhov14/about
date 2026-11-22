'use client'

import React, {useEffect, useState} from "react";
import Link from "next/link";
import {usePathname} from 'next/navigation'
import { Languages, Menu as MenuIcon, Moon, Sun, X } from "lucide-react";
import {Logo} from "@/components/ui/Logo";
import {useLocale, localeNames, type Locale} from "@/lib/i18n";

const locales: Locale[] = ['en', 'ru', 'uk'];

const Menu = () => {
    const [theme, setTheme] = useState<'light' | 'dark'>('dark');
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [langOpenMobile, setLangOpenMobile] = useState(false);
    const [langOpenDesktop, setLangOpenDesktop] = useState(false);
    const pathname = usePathname()
    const { locale, setLocale, t } = useLocale();

    const menuItems = [
        {name: t.nav.about, route: '/'},
        {name: t.nav.work, route: '/work'},
        {name: t.nav.resume, route: '/cv'},
        {name: t.nav.faq, route: '/faq'},
        {name: t.nav.openSource, route: '/open-source'},
        {name: t.nav.posts, route: '/posts'},
        {name: t.nav.contacts, route: '/#contacts'},
    ];

    useEffect(() => {
        const savedTheme = window.localStorage.getItem('theme');
        const preferredTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
        const nextTheme = (savedTheme === 'light' || savedTheme === 'dark') ? savedTheme : preferredTheme;
        setTheme(nextTheme);
    }, []);

    useEffect(() => {
        document.documentElement.dataset.theme = theme;
        document.documentElement.classList.toggle('dark', theme === 'dark');
    }, [theme]);

    useEffect(() => {
        setMobileMenuOpen(false);
        setLangOpenMobile(false);
        setLangOpenDesktop(false);
    }, [pathname]);

    const toggleTheme = () => {
        const nextTheme = theme === 'dark' ? 'light' : 'dark';
        setTheme(nextTheme);
        window.localStorage.setItem('theme', nextTheme);
        document.documentElement.dataset.theme = nextTheme;
        document.documentElement.classList.toggle('dark', nextTheme === 'dark');
    };

    const isActive = (route: string) => {
        if (route === '/#contacts') return false;
        return pathname === route;
    };

    const LanguagePicker = ({ mobile = false }: { mobile?: boolean }) => (
        <div className="relative">
            <button
                type="button"
                onClick={() => mobile ? setLangOpenMobile(v => !v) : setLangOpenDesktop(v => !v)}
                className={mobile
                    ? "flex flex-col items-center justify-center gap-1 text-[var(--site-text)]"
                    : "inline-flex items-center gap-2 rounded-full border border-[var(--site-border)] bg-[var(--site-panel)] px-3 py-1.5 text-sm font-medium text-[var(--site-text)] hover:bg-[var(--site-card)] transition-colors"}
                aria-label={t.ui.language}
            >
                <Languages className={mobile ? "h-5 w-5" : "h-4 w-4"} aria-hidden="true" />
                <span className={mobile ? "text-[10px] font-medium" : ""}>{localeNames[locale]}</span>
            </button>
            {(mobile ? langOpenMobile : langOpenDesktop) && (
                <div className={mobile
                    ? "absolute bottom-14 left-1/2 -translate-x-1/2 min-w-[120px] rounded-xl border border-[var(--site-border)] bg-[var(--site-panel)] p-1 shadow-lg"
                    : "absolute right-0 top-11 min-w-[140px] rounded-xl border border-[var(--site-border)] bg-[var(--site-panel)] p-1 shadow-lg z-50"}>
                    {locales.map((l) => (
                        <button
                            key={l}
                            type="button"
                            onClick={() => { setLocale(l); setLangOpenMobile(false); setLangOpenDesktop(false); }}
                            className={`w-full rounded-lg px-3 py-2 text-left text-sm transition-colors ${locale === l ? 'bg-[var(--site-card)] text-[var(--site-text)] font-semibold' : 'text-[var(--site-muted)] hover:bg-[var(--site-card)] hover:text-[var(--site-text)]'}`}
                        >
                            {l === 'en' ? 'English' : l === 'ru' ? 'Русский' : 'Українська'}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );

    return (
        <>
            {/* Top header */}
            <header className="sticky top-0 z-40 w-full border-b border-[var(--site-border)] bg-[var(--site-bg)]/85 backdrop-blur-md">
                <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
                    <Link href="/" className="flex items-center gap-2 text-[var(--site-text)]">
                        <Logo/>
                        <div className="leading-tight">
                            <p className="font-bold text-[var(--site-text)] text-sm sm:text-base">Anthony Pekhov</p>
                            <p className="text-[var(--site-muted)] text-xs sm:text-sm">Software developer</p>
                        </div>
                    </Link>

                    <nav className="hidden lg:flex items-center gap-5">
                        {menuItems.map((item) => (
                            <Link
                                key={item.route}
                                href={item.route}
                                aria-current={isActive(item.route) ? 'page' : undefined}
                                className={isActive(item.route)
                                    ? "text-[var(--site-text)] font-semibold"
                                    : "text-[var(--site-muted)] hover:text-[var(--site-text)] transition-colors"}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </nav>

                    <div className="hidden lg:flex items-center gap-2">
                        <button
                            type="button"
                            onClick={toggleTheme}
                            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[var(--site-border)] bg-[var(--site-panel)] text-[var(--site-text)] hover:bg-[var(--site-card)] transition-colors"
                            aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
                        >
                            {theme === 'dark' ? <Sun className="h-4 w-4" aria-hidden="true" /> : <Moon className="h-4 w-4" aria-hidden="true" />}
                        </button>
                        <LanguagePicker />
                    </div>

                    <div className="lg:hidden w-9" />
                </div>
            </header>

            {/* Mobile menu overlay */}
            {mobileMenuOpen && (
                <div className="fixed inset-0 z-50 lg:hidden">
                    <div className="absolute inset-0 bg-black/40" onClick={() => setMobileMenuOpen(false)} />
                    <div className="absolute inset-x-0 bottom-0 rounded-t-3xl border-t border-[var(--site-border)] bg-[var(--site-bg)] p-5 pb-28 shadow-2xl">
                        <div className="mb-4 flex items-center justify-between">
                            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[var(--site-muted)]">{t.ui.menu}</p>
                            <button type="button" onClick={() => setMobileMenuOpen(false)} className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[var(--site-border)] text-[var(--site-text)]">
                                <X className="h-4 w-4" />
                            </button>
                        </div>
                        <nav className="grid gap-1">
                            {menuItems.map((item) => (
                                <Link
                                    key={item.route}
                                    href={item.route}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className={`rounded-xl px-4 py-3 text-base ${isActive(item.route) ? 'bg-[var(--site-card)] text-[var(--site-text)] font-semibold' : 'text-[var(--site-muted)] hover:bg-[var(--site-card)] hover:text-[var(--site-text)]'}`}
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </nav>
                    </div>
                </div>
            )}

            {/* Mobile bottom bar */}
            <div className="fixed inset-x-0 bottom-0 z-50 border-t border-[var(--site-border)] bg-[var(--site-bg)]/95 backdrop-blur-md lg:hidden">
                <div className="mx-auto grid max-w-md grid-cols-3 items-end px-6 py-2 pb-[calc(0.5rem+env(safe-area-inset-bottom))]">
                    <button
                        type="button"
                        onClick={() => { setMobileMenuOpen(v => !v); setLangOpenMobile(false); }}
                        className="flex flex-col items-center justify-center gap-1 text-[var(--site-text)]"
                    >
                        <MenuIcon className="h-5 w-5" aria-hidden="true" />
                        <span className="text-[10px] font-medium">{t.ui.menu}</span>
                    </button>
                    <button
                        type="button"
                        onClick={() => { toggleTheme(); setLangOpenMobile(false); }}
                        className="flex flex-col items-center justify-center gap-1 text-[var(--site-text)]"
                    >
                        {theme === 'dark' ? <Sun className="h-5 w-5" aria-hidden="true" /> : <Moon className="h-5 w-5" aria-hidden="true" />}
                        <span className="text-[10px] font-medium">{t.ui.theme}</span>
                    </button>
                    <div className="flex justify-center">
                        <LanguagePicker mobile />
                    </div>
                </div>
            </div>
        </>
    );
};

export {Menu};
