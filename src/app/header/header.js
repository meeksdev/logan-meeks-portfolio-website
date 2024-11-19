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

export default function Header({ inViewElement }) {
    return (
        <>
            <header className="sticky top-0 z-50 flex items-center justify-end bg-background border-b p-8 sm:hidden">
                <NavigationMenu>
                    <Drawer direction="top">
                        <DrawerTrigger>
                            <Menu />
                        </DrawerTrigger>
                        <DrawerContent>
                            <DrawerTitle className="pt-8 text-center">
                                Navigation Menu
                                <DrawerClose>
                                    <X className="absolute right-8 top-7" />
                                </DrawerClose>
                            </DrawerTitle>
                            <NavigationMenuList className="flex flex-col gap-6 py-8">
                                <NavigationMenuItem>
                                    <NavigationMenuLink href="#" className={`p-2  hover:text-accent rounded-md ${inViewElement === 'hero' ? 'bg-border' : ''}`}>
                                        Home
                                    </NavigationMenuLink>
                                </NavigationMenuItem>
                                <NavigationMenuItem>
                                    <NavigationMenuLink
                                        href="#about"
                                        className={`p-2  hover:text-accent rounded-md ${inViewElement === 'about' ? 'bg-border' : ''}`}
                                    >
                                        About
                                    </NavigationMenuLink>
                                </NavigationMenuItem>
                                <NavigationMenuItem>
                                    <NavigationMenuLink
                                        href="#skills"
                                        className={`p-2  hover:text-accent rounded-md ${inViewElement === 'skills' ? 'bg-border' : ''}`}
                                    >
                                        Skills
                                    </NavigationMenuLink>
                                </NavigationMenuItem>
                                <NavigationMenuItem>
                                    <NavigationMenuLink
                                        href="#projects"
                                        className={`p-2  hover:text-accent rounded-md ${inViewElement === 'projects' ? 'bg-border' : ''}`}
                                    >
                                        Projects
                                    </NavigationMenuLink>
                                </NavigationMenuItem>
                                <NavigationMenuItem>
                                    <NavigationMenuLink
                                        href="#contact"
                                        className={`p-2  hover:text-accent rounded-md ${inViewElement === 'contact' ? 'bg-border' : ''}`}
                                    >
                                        Contact
                                    </NavigationMenuLink>
                                </NavigationMenuItem>
                            </NavigationMenuList>
                        </DrawerContent>
                    </Drawer>
                </NavigationMenu>
            </header>

            <header className="sticky top-0 z-50 sm:flex items-center justify-center bg-background border-b p-8 hidden">
                <NavigationMenu>
                    <NavigationMenuList className="flex sm:gap-6 gap-0 flex-wrap items-center justify-center">
                        <NavigationMenuItem>
                            <NavigationMenuLink href="#" className={`p-2  hover:text-accent rounded-md ${inViewElement === 'hero' ? 'bg-border' : ''}`}>
                                Home
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuLink href="#about" className={`p-2  hover:text-accent rounded-md ${inViewElement === 'about' ? 'bg-border' : ''}`}>
                                About
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuLink href="#skills" className={`p-2  hover:text-accent rounded-md ${inViewElement === 'skills' ? 'bg-border' : ''}`}>
                                Skills
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuLink
                                href="#projects"
                                className={`p-2  hover:text-accent rounded-md ${inViewElement === 'projects' ? 'bg-border' : ''}`}
                            >
                                Projects
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuLink
                                href="#contact"
                                className={`p-2  hover:text-accent rounded-md ${inViewElement === 'contact' ? 'bg-border' : ''}`}
                            >
                                Contact
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>
            </header>
        </>
    );
}
