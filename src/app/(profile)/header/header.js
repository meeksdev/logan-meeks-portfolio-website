'use client';

import Image from 'next/image';
import { useState } from 'react';
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
} from '@/components/ui/navigation-menu';
import { Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from '@/components/ui/drawer';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

function MyNavigationMenuList({ handleClick, inViewElement, className = '' }) {
    return (
        <NavigationMenuList className={cn('flex', className)}>
            <NavigationMenuItem>
                <NavigationMenuLink
                    onClick={handleClick}
                    href="#"
                    className={`p-2  hover:text-accent rounded-md ${inViewElement === 'hero' ? 'bg-border' : ''}`}
                >
                    Home
                </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
                <NavigationMenuLink
                    onClick={handleClick}
                    href="#about"
                    className={`p-2  hover:text-accent rounded-md ${inViewElement === 'about' ? 'bg-border' : ''}`}
                >
                    About
                </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
                <NavigationMenuLink
                    onClick={handleClick}
                    href="#skills"
                    className={`p-2  hover:text-accent rounded-md ${inViewElement === 'skills' ? 'bg-border' : ''}`}
                >
                    Skills
                </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
                <NavigationMenuLink
                    onClick={handleClick}
                    href="#projects"
                    className={`p-2  hover:text-accent rounded-md ${inViewElement === 'projects' ? 'bg-border' : ''}`}
                >
                    Projects
                </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
                <NavigationMenuLink
                    onClick={handleClick}
                    href="#contact"
                    className={`p-2  hover:text-accent rounded-md ${inViewElement === 'contact' ? 'bg-border' : ''}`}
                >
                    Contact
                </NavigationMenuLink>
            </NavigationMenuItem>
        </NavigationMenuList>
    );
}

export default function Header({ inViewElement }) {
    const [showDrawer, setShowDrawer] = useState(false);

    const handleClick = () => {
        console.log('clicked!');
        setShowDrawer(false);
    };

    return (
        <>
            <header className="sticky top-0 z-50 flex items-center justify-between sm:justify-center bg-background border-b px-6 py-4 sm:py-6">
                <Image className="overflow-hidden z-0 w-12 sm:hidden" src="/Symbol-Light.svg" alt="Picture of Logan Meeks" width={48} height={48} />
                <NavigationMenu>
                    <MyNavigationMenuList inViewElement={inViewElement} className="sm:gap-6 gap-0 flex-wrap items-center justify-center sm:flex hidden" />
                    <Drawer open={showDrawer} onOpenChange={setShowDrawer} direction="top">
                        <DrawerTrigger className="sm:hidden">
                            <Menu size={36} />
                        </DrawerTrigger>
                        <DrawerContent>
                            <DrawerTitle className="pt-8 text-center">
                                Navigation Menu
                                <DrawerClose>
                                    <X className="absolute right-8 top-7" />
                                </DrawerClose>
                            </DrawerTitle>
                            <MyNavigationMenuList handleClick={handleClick} inViewElement={inViewElement} className="flex-col gap-6 py-8" />
                        </DrawerContent>
                    </Drawer>
                </NavigationMenu>
            </header>
        </>
    );
}
