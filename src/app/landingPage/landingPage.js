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
            <section id="hero" className="flex flex-col bg-secondary justify-center items-center px-16 py-40">
                {/* ICON GOES HERE */}
                <div className="w-fit">
                    <h1 className="w-fit">Hi, I'm Logan Meeks. I'm a full stack developer.</h1>
                    <Button className="w-fit">Contact Me</Button>
                </div>
            </section>

            {/* About Me Section */}
            <section id="about" className="p-16">
                <h2>About Me</h2>
                <section>
                    <p>Lorem Ipsum Dolor Sit Amet...</p>
                    {/* <Image src="/images/profile.jpg" alt="Picture of Logan Meeks" width={200} height={200} /> */}
                </section>
            </section>

            {/* Skills Section */}
            <section id="skills" className="p-16">
                <h2>Skills</h2>
                <section className="flex gap-12">
                    <Card className="max-w-sm">
                        <CardHeader>
                            <CardTitle>Languages</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p>Language 1</p>
                            <p>Language 2</p>
                        </CardContent>
                    </Card>
                    <Card className="max-w-sm">
                        <CardHeader>
                            <CardTitle>Frameworks</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p>Language 1</p>
                            <p>Language 2</p>
                        </CardContent>
                    </Card>
                    <Card className="max-w-sm">
                        <CardHeader>
                            <CardTitle>Tools</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p>Language 1</p>
                            <p>Language 2</p>
                        </CardContent>
                    </Card>
                </section>
            </section>

            {/* Projects Section */}
            <section className="p-16">
                <h2>Projects</h2>
                <section id="projects" className="flex gap-12">
                    <Card className="max-w-sm">
                        <CardHeader>
                            <CardTitle>Card Title</CardTitle>
                            <CardDescription>Card Description</CardDescription>
                        </CardHeader>
                        <CardContent>
                            {/* <Image alt="Portfolio Project"></Image> */}
                            <Badge variant="secondary">Badge1</Badge>
                            <Badge variant="secondary">Badge2</Badge>
                        </CardContent>
                        <CardFooter>
                            {/* <p>Card Footer</p> */}
                            <Button variant="secondary">Demo</Button>
                            <Button variant="secondary">Code</Button>
                        </CardFooter>
                    </Card>
                    <Card className="max-w-sm">
                        <CardHeader>
                            <CardTitle>Card Title</CardTitle>
                            <CardDescription>Card Description</CardDescription>
                        </CardHeader>
                        <CardContent>
                            {/* <Image alt="Portfolio Project"></Image> */}
                            <Badge variant="secondary">Badge1</Badge>
                            <Badge variant="secondary">Badge2</Badge>
                        </CardContent>
                        <CardFooter>
                            {/* <p>Card Footer</p> */}
                            <Button variant="secondary">Demo</Button>
                            <Button variant="secondary">Code</Button>
                        </CardFooter>
                    </Card>
                </section>
            </section>

            {/* Contact Section */}
            <section id="contact" className="p-16">
                <h2>Contact</h2>
            </section>
        </main>
    );
}
