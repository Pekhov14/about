'use client'

// import Link from 'next/link';
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
import {Logo} from "@/components/ui/Logo";
import {NextUIProvider} from "@nextui-org/react";
import {usePathname} from 'next/navigation'

const Menu = () => {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const [activePage, setActivePage] = React.useState('');
    const pathname = usePathname()

    useEffect(() => {
        if (pathname !== activePage) {
            setActivePage(pathname);
        }
    }, [activePage, pathname]);


    const menuItems = [
        {name: 'Home', route: '/'},
        {name: 'Work', route: '/work'},
        {name: 'Resume', route: '/cv'},
        {name: 'F.A.Q', route: '/faq'},
        {name: 'Posts', route: '/posts'},
        // {name: 'Chat', route: '/chat'},
    ];

    return (
        <NextUIProvider>
            <Navbar onMenuOpenChange={setIsMenuOpen}>
                <NavbarContent>
                    <NavbarMenuToggle
                        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                        className="sm:hidden"
                    />
                    <Link href={`/`}>
                        <NavbarBrand>
                            <Logo/>
                            <div>
                                <p className="font-bold text-inherit">Anthony Pekhov</p>
                                <p className="text-gray-500">Software developer</p>
                            </div>
                        </NavbarBrand>
                    </Link>
                </NavbarContent>

                <NavbarContent className="hidden sm:flex gap-4" justify="center">
                    {menuItems.map((item) => (
                        <NavbarMenuItem key={item.route}>
                            <Link href={item.route}
                                  aria-current={activePage === item.route ? 'page' : undefined}
                                  color={activePage === item.route ? 'danger' : 'primary'}
                            >
                                {item.name}
                            </Link>
                        </NavbarMenuItem>
                    ))}
                </NavbarContent>

                {/* TODO: Admin */}
                {/*<NavbarContent justify="end">*/}
                {/*    <NavbarItem className="hidden lg:flex">*/}
                {/*        <Link href="#">Login</Link>*/}
                {/*    </NavbarItem>*/}
                {/*    <NavbarItem>*/}
                {/*        <Button as={Link} color="primary" href="#" variant="flat">*/}
                {/*            Sign Up*/}
                {/*        </Button>*/}
                {/*    </NavbarItem>*/}
                {/*</NavbarContent>*/}

                <NavbarMenu>
                    {menuItems.map((item) => (
                        <NavbarMenuItem
                            key={item.route}
                        >
                            <Link href={item.route}
                                  className="text-7xl"
                                  aria-current={activePage === item.route ? 'page' : undefined}
                                  color={activePage === item.route ? 'danger' : 'primary'}
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
