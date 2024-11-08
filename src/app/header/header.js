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

export default function Header() {
    return (
        <header className="flex items-center justify-center p-8">
            <NavigationMenu>
                <NavigationMenuList className="flex gap-6 flex-wrap items-center justify-center">
                    <NavigationMenuItem>
                        <NavigationMenuLink href="#" className="p-2 bg-secondary border-border border hover:text-accent">
                            Home
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuLink href="#about" className="p-2 hover:text-accent">
                            About
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuLink href="#skills" className="p-2 hover:text-accent">
                            Skills
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuLink href="#projects" className="p-2 hover:text-accent">
                            Projects
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuLink href="#contact" className="p-2 hover:text-accent">
                            Contact
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
        </header>
    );
}
