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
                        <NavigationMenuLink href="#projects" className={`p-2  hover:text-accent rounded-md ${inViewElement === 'projects' ? 'bg-border' : ''}`}>
                            Projects
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuLink href="#contact" className={`p-2  hover:text-accent rounded-md ${inViewElement === 'contact' ? 'bg-border' : ''}`}>
                            Contact
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
        </header>
    );
}
