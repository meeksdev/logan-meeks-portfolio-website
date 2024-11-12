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

export default function Header({ inViewElement }) {
    return (
        <header className="sticky top-0 z-50 flex items-center justify-center p-8 bg-background border-b">
            <NavigationMenu>
                <NavigationMenuList className="flex gap-6 flex-wrap items-center justify-center">
                    <NavigationMenuItem>
                        <NavigationMenuLink href="#" className={`p-2 hover:text-accent ${inViewElement === 'hero' ? 'bg-secondary border-border border' : ''}`}>
                            Home
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        {/* <NavigationMenuLink href="#about" className={`p-2 hover:text-accent ${aboutInView ? 'text-blue-500' : 'text-red-500'}`}> */}
                        <NavigationMenuLink
                            href="#about"
                            className={`p-2 hover:text-accent ${inViewElement === 'about' ? 'bg-secondary border-border border' : ''}`}
                        >
                            About
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuLink
                            href="#skills"
                            className={`p-2 hover:text-accent ${inViewElement === 'skills' ? 'bg-secondary border-border border' : ''}`}
                        >
                            Skills
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuLink
                            href="#projects"
                            className={`p-2 hover:text-accent ${inViewElement === 'projects' ? 'bg-secondary border-border border' : ''}`}
                        >
                            Projects
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuLink
                            href="#contact"
                            className={`p-2 hover:text-accent ${inViewElement === 'contact' ? 'bg-secondary border-border border' : ''}`}
                        >
                            Contact
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
        </header>
    );
}
