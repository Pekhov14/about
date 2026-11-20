'use client'

import React, {useEffect} from "react";
import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    NavbarMenuToggle,
    NavbarMenu,
    NavbarMenuItem,
    Link,
    Button
} from "@nextui-org/react";
import { Moon, Sun } from "lucide-react";
import {Logo} from "@/components/ui/Logo";
import {NextUIProvider} from "@nextui-org/react";
import {usePathname} from 'next/navigation'

const Menu = () => {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const [activePage, setActivePage] = React.useState('');
    const [theme, setTheme] = React.useState('dark');
    const pathname = usePathname()
    const isHomePage = pathname === '/';

    useEffect(() => {
        if (pathname !== activePage) {
            setActivePage(pathname);
        }
    }, [activePage, pathname]);

    useEffect(() => {
        const savedTheme = window.localStorage.getItem('theme');
        const preferredTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
        const nextTheme = savedTheme || preferredTheme;

        setTheme(nextTheme);
    }, []);

    useEffect(() => {
        document.querySelector('.about-page')?.setAttribute('data-theme', theme);
    }, [pathname, theme]);

    const toggleTheme = () => {
        const nextTheme = theme === 'dark' ? 'light' : 'dark';

        setTheme(nextTheme);
        window.localStorage.setItem('theme', nextTheme);
        document.querySelector('.about-page')?.setAttribute('data-theme', nextTheme);
    };

    const menuItems = [
        {name: 'About', route: '/'},
        {name: 'Work', route: '/work'},
        {name: 'Resume', route: '/cv'},
        {name: 'F.A.Q', route: '/faq'},
        {name: 'Open source', route: '/open-source'},
        {name: 'Posts', route: '/posts'},
        {name: 'Contacts', route: '/#contacts'},
        // {name: 'Chat', route: '/chat'},
    ];

    const homeThemeVars = isHomePage ? {
        '--site-text': theme === 'dark' ? '#E1E0CC' : '#151515',
        '--site-muted': theme === 'dark' ? 'rgba(222, 219, 200, 0.62)' : 'rgba(21, 21, 21, 0.62)',
    } as React.CSSProperties : undefined;

    return (
        <NextUIProvider>
            <Navbar
                onMenuOpenChange={setIsMenuOpen}
                className={isHomePage ? 'bg-transparent text-[var(--site-text)]' : undefined}
                style={homeThemeVars}
            >
                <NavbarContent>
                    <NavbarMenuToggle
                        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                        className="sm:hidden"
                    />
                    <NavbarBrand>
                        <Link href={`/`} className="flex items-center">
                            <Logo/>
                            <div>
                                <p className={isHomePage ? 'font-bold text-[var(--site-text)]' : 'font-bold text-inherit'}>
                                    Anthony Pekhov
                                </p>
                                <p className={isHomePage ? 'text-[var(--site-muted)]' : 'text-gray-500'}>
                                    Software developer
                                </p>
                            </div>
                        </Link>
                    </NavbarBrand>
                </NavbarContent>

                {/* Десктопное меню - используем NavbarItem вместо NavbarMenuItem */}
                <NavbarContent className="hidden sm:flex gap-4" justify="center">
                    {menuItems.map((item) => (
                        <NavbarItem key={item.route} isActive={activePage === item.route}>
                            <Link
                                href={item.route}
                                aria-current={activePage === item.route ? 'page' : undefined}
                                color={activePage === item.route ? 'danger' : 'foreground'}
                            >
                                {item.name}
                            </Link>
                        </NavbarItem>
                    ))}
                </NavbarContent>

                {/* TODO: Admin */}
                {isHomePage && (
                    <NavbarContent justify="end">
                        <NavbarItem>
                            <Button
                                isIconOnly
                                size="sm"
                                variant="flat"
                                onPress={toggleTheme}
                                aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
                            >
                                {theme === 'dark' ? (
                                    <Sun className="h-4 w-4" aria-hidden="true" />
                                ) : (
                                    <Moon className="h-4 w-4" aria-hidden="true" />
                                )}
                            </Button>
                        </NavbarItem>
                    </NavbarContent>
                )}

                {/* Мобильное меню - здесь используем NavbarMenuItem */}
                <NavbarMenu>
                    {menuItems.map((item) => (
                        <NavbarMenuItem key={item.route}>
                            <Link
                                href={item.route}
                                className="w-full text-2xl"
                                aria-current={activePage === item.route ? 'page' : undefined}
                                color={activePage === item.route ? 'danger' : 'foreground'}
                            >
                                {item.name}
                            </Link>
                        </NavbarMenuItem>
                    ))}
                </NavbarMenu>
            </Navbar>
        </NextUIProvider>
    );
};

export {Menu};
