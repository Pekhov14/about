'use client'

// import Link from 'next/link';
import React from "react";
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

const Menu = () => {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const menuItems = [
        "Home",
        "Work",
        "Resume",
        "F.A.Q",
    ];

    return (
        <NextUIProvider>
            <Navbar onMenuOpenChange={setIsMenuOpen}>
                <NavbarContent>
                    <NavbarMenuToggle
                        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                        className="sm:hidden"
                    />
                    <NavbarBrand>
                        {/*<Logo/>*/}
                        <p className="font-bold text-inherit">Pekhov</p>
                    </NavbarBrand>
                </NavbarContent>

                <NavbarContent className="hidden sm:flex gap-4" justify="center">
                    <NavbarItem>
                        <Link color="foreground" href="/">
                            Home
                        </Link>
                    </NavbarItem>
                    <NavbarItem >
                        {/* TODO: Add dynamic isActive*/}
                        <Link href="work" aria-current="page">
                            Work
                        </Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Link href="cv" aria-current="page">
                            Resume
                        </Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Link color="foreground" href="faq">
                            F.A.Q
                        </Link>
                    </NavbarItem>
                </NavbarContent>
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
                    {/*{menuItems.map((item, index) => (*/}
                    {/*    <NavbarMenuItem key={`${item}-${index}`}>*/}
                    {/*        <Link*/}
                    {/*            // color={*/}
                    {/*            //     index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"*/}
                    {/*            // }*/}
                    {/*            className="w-full"*/}
                    {/*            href="#"*/}
                    {/*            size="lg"*/}
                    {/*        >*/}
                    {/*            {item}*/}
                    {/*        </Link>*/}
                    {/*    </NavbarMenuItem>*/}
                    {/*))}*/}
                    <NavbarMenuItem key='home'>
                        <Link href="/" aria-current="page">
                            Home
                        </Link>
                    </NavbarMenuItem>
                    <NavbarMenuItem key='work'>
                        <Link href="work" aria-current="page">
                            Work
                        </Link>
                    </NavbarMenuItem>
                    <NavbarMenuItem key='home'>
                        <Link href="cv" aria-current="page">
                            Resume
                        </Link>
                    </NavbarMenuItem>
                    <NavbarMenuItem key='home'>
                        <Link href="faq" aria-current="page">
                            F.A.Q
                        </Link>
                    </NavbarMenuItem>
                </NavbarMenu>
            </Navbar>
        </NextUIProvider>
    );
};

export {Menu};
