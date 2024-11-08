import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

/* Import Form */
/* Import Toast */

export default function LandingPage() {
    return (
        <main>
            {/* Hero Section */}
            <section id="hero" className="flex">
                {/* ICON GOES HERE */}
                <h1>Hi, I'm Logan Meeks. I'm a full stack developer.</h1>
                <Button /* variant="outline" */>Contact Me</Button>
            </section>

            {/* About Me Section */}
            <section id="about">
                <h2>About Me</h2>
                <p>Lorem Ipsum Dolor Sit Amet...</p>
                {/* <Image src="/images/profile.jpg" alt="Picture of Logan Meeks" width={200} height={200} /> */}
            </section>

            {/* Skills Section */}
            <section id="skills">
                <Card>
                    <CardHeader>
                        <CardTitle>Languages</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p>Language 1</p>
                        <p>Language 2</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>Frameworks</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p>Language 1</p>
                        <p>Language 2</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>Tools</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p>Language 1</p>
                        <p>Language 2</p>
                    </CardContent>
                </Card>
            </section>

            {/* Projects Section */}
            <section id="projects">
                <Card className="max-w-sm">
                    <CardHeader>
                        <CardTitle>Card Title</CardTitle>
                        <CardDescription>Card Description</CardDescription>
                    </CardHeader>
                    <CardContent>
                        {/* <Image alt="Portfolio Project"></Image> */}
                        <Badge>Badge1</Badge>
                        <Badge>Badge2</Badge>
                    </CardContent>
                    <CardFooter>
                        <p>Card Footer</p>
                    </CardFooter>
                </Card>
            </section>

            {/* Contact Section */}
            <section id="contact"></section>
        </main>
    );
}
