'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

import { Code, Layers, Wrench, Eye, Github } from 'lucide-react';

import { ContactForm } from '../contactForm/contactForm';
/* Import Toast */

import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from 'react';
import Header from '../header/header';

import Logo from '@/components/icons/logo';

export default function LandingPage() {
    const [inViewElement, setInViewElement] = useState('');
    const threshold = 1;
    const { ref: heroRef, inView: heroInView } = useInView({
        threshold: threshold, // trigger when 50% of the element is visible
    });
    const { ref: aboutRef, inView: aboutInView } = useInView({
        threshold: threshold, // trigger when 50% of the element is visible
    });
    const { ref: skillsRef, inView: skillsInView } = useInView({
        threshold: threshold, // trigger when 50% of the element is visible
    });
    const { ref: projectsRef, inView: projectsInView } = useInView({
        threshold: threshold, // trigger when 50% of the element is visible
    });
    const { ref: contactRef, inView: contactInView } = useInView({
        threshold: threshold, // trigger when 50% of the element is visible
    });

    useEffect(() => {
        if (heroInView) {
            setInViewElement('hero');
        } else if (aboutInView) {
            setInViewElement('about');
        } else if (skillsInView) {
            setInViewElement('skills');
        } else if (projectsInView) {
            setInViewElement('projects');
        } else if (contactInView) {
            setInViewElement('contact');
        }

        /* if (contactInView) {
            setInViewElement('contact');
        } else if (projectsInView) {
            setInViewElement('projects');
        } else if (skillsInView) {
            setInViewElement('skills');
        } else if (aboutInView) {
            setInViewElement('about');
        } else if (heroInView) {
            setInViewElement('hero');
        } */

        // console.log(inViewElement);
    }, [heroInView, aboutInView, skillsInView, projectsInView, contactInView]);

    return (
        <>
            <Header inViewElement={inViewElement} />
            <main>
                {/* Hero Section */}
                <section id="hero" ref={heroRef} className="relative flex bg-secondary justify-center items-center overflow-hidden border-b">
                    <div className="w-full h-full flex-[0] sm:flex-1 sm:flex justify-end items-center">
                        <div className="w-fit h-fit flex justify-center items-center">
                            <svg
                                className="absolute overflow-hidden z-0 -translate-x-36 hidden sm:block"
                                width="639"
                                height="858"
                                viewBox="0 0 639 858"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M528.876 63.5964L110 795.068M528.876 63.5964L110 795.068" stroke="hsl(200 21% 8%)" strokeWidth="250" />
                            </svg>
                            <Logo
                                variant="hero"
                                className="absolute sm:left-auto left-1/2 -translate-x-1/2 overflow-hidden z-0 size-[500] sm:size-60 sm:-translate-x-32 center"
                            />
                            {/* <Image
                                className="absolute overflow-hidden z-0 w-60 -translate-x-32"
                                src="/Symbol-Light.svg"
                                alt="Picture of Logan Meeks"
                                width={225}
                                height={225}
                            /> */}
                        </div>
                    </div>

                    <div className="w-full sm:px-16 py-40 z-10 flex-[1.5] px-0 sm:block flex flex-col items-center sm:text-left text-center">
                        <h1 className="w-fit text-5xl font-bold leading-10 md:leading-tight">
                            Hi, I'm Logan<span className="md:hidden">.</span>
                            <span className="hidden md:inline"> Meeks. </span>
                            <br /> <span className="font-normal text-3xl md:font-bold md:text-5xl">I'm a full stack developer.</span>
                        </h1>
                        <Button asChild className="w-fit mt-8 sm:mt-2">
                            <Link href="#contact">Contact Me</Link>
                        </Button>
                    </div>
                </section>

                <Image className="w-full" src="/pup-n-me.jpg" alt="Picture of Logan Meeks" width={400} height={400} />

                {/* About Me Section */}
                <section id="about" ref={aboutRef} className="sm:px-16 py-24 px-6">
                    <h2 className="text-2xl font-medium mb-12">About Me</h2>
                    <section className="flex flex-wrap gap-12 justify-between">
                        <div className="flex flex-col justify-between w-full">
                            <p>Lorem Ipsum Dolor Sit Amet...</p>
                            <div className="flex gap-4 w-72">
                                <Button variant="secondary" className="w-full">
                                    Resume
                                </Button>
                                <Button className="w-full">Contact Me</Button>
                            </div>
                        </div>
                        <Image className="w-full max-w-lg" src="/pup-n-me.jpg" alt="Picture of Logan Meeks" width={400} height={400} />
                    </section>
                </section>

                {/* Skills Section */}
                <section id="skills" ref={skillsRef} className="sm:px-16 py-24 visible:bg-red-500 px-6">
                    <h2 className="text-2xl font-medium mb-12">Skills</h2>
                    <section className="flex flex-wrap gap-12">
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
                <section id="projects" ref={projectsRef} className="sm:px-16 py-24 px-6">
                    <h2 className="text-2xl font-medium mb-12">Projects</h2>
                    <section className="flex flex-wrap gap-12">
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
                <section id="contact" ref={contactRef} className="sm:px-16 py-24 px-6">
                    <h2 className="text-2xl font-medium mb-12">Contact</h2>
                    <ContactForm />
                </section>
            </main>
        </>
    );
}
