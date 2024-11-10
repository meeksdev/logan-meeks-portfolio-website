import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

import { Code, Layers, Wrench, Eye, Github } from 'lucide-react';

import { ContactForm } from '../contactForm/contactForm';
/* Import Toast */

export default function LandingPage() {
    return (
        <main>
            {/* Hero Section */}
            <section id="hero" className="relative flex bg-secondary justify-center items-center overflow-hidden">
                <div className="w-full h-full flex-1 flex justify-end items-center">
                    <div className="w-fit h-fit flex justify-center items-center">
                        <svg
                            className="absolute overflow-hidden z-0 -translate-x-36"
                            width="639"
                            height="858"
                            viewBox="0 0 639 858"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M528.876 63.5964L110 795.068M528.876 63.5964L110 795.068" stroke="hsl(200 21% 8%)" strokeWidth="250" />
                        </svg>
                        <Image
                            className="absolute overflow-hidden z-0 w-60 -translate-x-32"
                            src="/Symbol-Light.svg"
                            alt="Picture of Logan Meeks"
                            width={225}
                            height={225}
                        />
                    </div>
                </div>

                <div className="w-full px-16 py-40 z-10 flex-[1.5]">
                    <h1 className="w-fit text-5xl">
                        Hi, I'm Logan Meeks. <br /> I'm a full stack developer.
                    </h1>
                    <Button asChild className="w-fit">
                        <Link href="#contact">Contact Me</Link>
                    </Button>
                </div>
            </section>

            {/* About Me Section */}
            <section id="about" className="p-16">
                <h2 className="text-2xl mb-12">About Me</h2>
                <section className="flex gap-12 justify-between">
                    <div className="flex flex-col justify-between w-full">
                        <p>Lorem Ipsum Dolor Sit Amet...</p>
                        <div className="flex gap-4">
                            <Button variant="secondary">Resume</Button>
                            <Button>Contact Me</Button>
                        </div>
                    </div>
                    <Image className="w-full max-w-lg" src="/pup-n-me.jpg" alt="Picture of Logan Meeks" width={400} height={400} />
                </section>
            </section>

            {/* Skills Section */}
            <section id="skills" className="p-16">
                <h2 className="text-2xl mb-12">Skills</h2>
                <section className="flex gap-12">
                    <Card className="w-full flex gap-6 p-6">
                        <CardHeader className="p-0">
                            <Code size={32} className="mr-2 text-primary" />
                        </CardHeader>
                        <CardContent className="p-0">
                            <CardTitle className="text-2xl mb-2 font-normal">Languages</CardTitle>
                            <p className="opacity-70">Language 1</p>
                            <p className="opacity-70">Language 2</p>
                        </CardContent>
                    </Card>
                    <Card className="w-full flex gap-6 p-6">
                        <CardHeader className="p-0">
                            <Layers size={32} className="mr-2 text-primary" />
                        </CardHeader>
                        <CardContent className="p-0">
                            <CardTitle className="text-2xl mb-2 font-normal">Frameworks</CardTitle>
                            <p className="opacity-70">Language 1</p>
                            <p className="opacity-70">Language 2</p>
                        </CardContent>
                    </Card>
                    <Card className="w-full flex gap-6 p-6">
                        <CardHeader className="p-0">
                            <Wrench size={32} className="mr-2 text-primary" />
                        </CardHeader>
                        <CardContent className="p-0">
                            <CardTitle className="text-2xl mb-2 font-normal">Tools</CardTitle>
                            <p className="opacity-70">Language 1</p>
                            <p className="opacity-70">Language 2</p>
                        </CardContent>
                    </Card>
                </section>
            </section>

            {/* Projects Section */}
            <section className="p-16">
                <h2 className="text-2xl mb-12">Projects</h2>
                <section id="projects" className="flex gap-12">
                    <Card className="flex flex-col w-full">
                        <CardHeader className="h-full flex flex-col justify-center">
                            <Image
                                className="w-full aspect-video object-cover overflow-hidden"
                                src="/pup-n-me.jpg"
                                alt="Portfolio Project"
                                width={400}
                                height={400}
                            />
                            <div className="flex justify-center gap-1">
                                <Badge variant="default">Badge1</Badge>
                                <Badge variant="default">Badge2</Badge>
                            </div>
                        </CardHeader>
                        <CardContent className="flex-col text-center">
                            <CardTitle>Card Title</CardTitle>
                            <CardDescription>Card Description</CardDescription>
                        </CardContent>
                        <CardFooter className="justify-center gap-4">
                            {/* <p>Card Footer</p> */}
                            <Button variant="secondary" className="w-full">
                                <Eye />
                                Demo
                            </Button>
                            <Button variant="secondary" className="w-full">
                                <Github />
                                Code
                            </Button>
                        </CardFooter>
                    </Card>
                    <Card className="flex flex-col w-full">
                        <CardHeader className="h-full flex flex-col justify-center">
                            <Image
                                className="w-full aspect-video object-cover overflow-hidden"
                                src="/pup-n-me.jpg"
                                alt="Portfolio Project"
                                width={400}
                                height={400}
                            />
                            <div className="flex justify-center gap-1">
                                <Badge variant="outline" className="font-normal text-muted-foreground">
                                    Badge1
                                </Badge>
                                <Badge variant="outline" className="font-normal text-muted-foreground">
                                    Badge2
                                </Badge>
                            </div>
                        </CardHeader>
                        <CardContent className="flex-col text-center">
                            <CardTitle>Card Title</CardTitle>
                            <CardDescription>Card Description</CardDescription>
                        </CardContent>
                        <CardFooter className="justify-center gap-4">
                            {/* <p>Card Footer</p> */}
                            <Button variant="secondary" className="w-full">
                                <Eye />
                                Demo
                            </Button>
                            <Button variant="secondary" className="w-full">
                                <Github />
                                Code
                            </Button>
                        </CardFooter>
                    </Card>
                </section>
            </section>

            {/* Contact Section */}
            <section id="contact" className="p-16">
                <h2 className="text-2xl mb-12">Contact</h2>
                <ContactForm />
            </section>
        </main>
    );
}
