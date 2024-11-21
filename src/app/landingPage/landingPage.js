'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Code, Layers, Wrench, Eye, Github } from 'lucide-react';

import Logo from '@/components/icons/logo';
import Header from '../header/header';
import { ContactForm } from '../contactForm/contactForm';

function Projects() {
    const projects = [
        {
            title: 'Veterinary Chrome Extension',
            description:
                'A Chrome extension for veterinary practices that gathers information from client form submissions and automates various administrative tasks.',
            badges: ['Javascript', 'HTML', 'CSS', 'Third-Party APIs'],
            // demoURL: 'https://www.google.com',
            codeURL: 'https://github.com/meeksdev/autofill-extension',
            imageURL: '/veterinary-chrome-extension.gif',
            imageAlt: 'Portfolio Project',
        },
        {
            title: 'Embedded Firearm System',
            description:
                'A high-performance embedded system and circuitry for firearms using embedded C/C++ and ARM microcontrollers, achieving sub-second response times.',
            badges: ['C++', 'Arduino'],
            imageURL: '/wraithworks.jpg',
            imageAlt: 'Portfolio Project',
        },
    ];

    return (
        <section className="flex flex-wrap gap-6 sm:gap-12">
            {projects.map((project, projectIndex) => (
                <Card key={projectIndex} className="flex flex-col flex-[1] sm:min-w-96">
                    <CardHeader className="h-full flex flex-col justify-center">
                        <div className="relative w-full aspect-video">
                            <Image src={project.imageURL} alt={project.imageAlt} layout="fill" objectFit="cover" />
                        </div>
                        <div className="flex flex-wrap justify-center gap-1">
                            {project.badges.map((badge, badgeIndex) => (
                                <Badge key={badgeIndex} variant="secondary" className="font-light">
                                    {badge}
                                </Badge>
                            ))}
                        </div>
                    </CardHeader>
                    <CardContent className="flex flex-col gap-2 text-center">
                        <CardTitle>{project.title}</CardTitle>
                        <CardDescription>{project.description}</CardDescription>
                    </CardContent>
                    <CardFooter className="justify-center gap-4">
                        <Button
                            disabled={!project.demoURL}
                            variant="secondary"
                            className={`w-full ${!project.demoURL && 'border-none hover:bg-secondary pointer-events-none'}`}
                            asChild={!!project.demoURL}
                        >
                            {project.demoURL ? (
                                <Link href={project.demoURL}>
                                    <Eye />
                                    Demo
                                </Link>
                            ) : (
                                <>
                                    <Eye />
                                    Demo
                                </>
                            )}
                        </Button>
                        <Button
                            disabled={!project.codeURL}
                            variant="secondary"
                            className={`w-full ${!project.codeURL && 'border-none hover:bg-secondary pointer-events-none'}`}
                            asChild={!!project.codeURL}
                        >
                            {project.codeURL ? (
                                <Link href={project.codeURL}>
                                    <Github />
                                    Code
                                </Link>
                            ) : (
                                <>
                                    <Github />
                                    Code
                                </>
                            )}
                        </Button>
                    </CardFooter>
                </Card>
            ))}
        </section>
    );
}

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
                        </div>
                    </div>

                    <div className="w-full sm:px-16 py-40 z-10 flex-[1.5] px-0 sm:block flex flex-col items-center sm:text-left text-center">
                        <h1 className="w-fit text-5xl font-bold leading-10 md:leading-tight">
                            Hi, I&apos;m Logan<span className="md:hidden">.</span>
                            <span className="hidden md:inline"> Meeks. </span>
                            <br /> <span className="font-normal text-3xl md:font-bold md:text-5xl">I&apos;m a full stack developer.</span>
                        </h1>
                        <Button asChild className="w-fit mt-8 sm:mt-2">
                            <Link href="#contact">Contact Me</Link>
                        </Button>
                    </div>
                </section>

                <Image className="w-full sm:hidden" src="/pup-n-me.jpg" alt="Picture of Logan Meeks" width={400} height={400} />

                {/* About Me Section */}
                <section id="about" ref={aboutRef} className="sm:px-16 py-24 px-6">
                    <h2 className="text-2xl font-medium mb-12">About Me</h2>
                    <section className="flex gap-12 justify-between">
                        <div className="flex flex-col w-full">
                            <div>
                                <p className="pb-4 text-muted-foreground">
                                    After earning a degree in Mechanical Engineering and working in the field for four years, I made a bold career shift into
                                    software development. In 2024, I completed Codecademy&apos;s full-stack engineering program, accelerating my growth and
                                    opening doors to independent contracting opportunities.
                                </p>
                                <p className="pb-4  text-muted-foreground">
                                    When I&apos;m not coding, I enjoy hitting the gym, playing golf, taking my dog to the park, or experimenting with new
                                    recipes in the kitchen.
                                </p>
                            </div>
                            <div className="flex gap-4 w-full sm:w-72">
                                <Button variant="secondary" disabled className="w-full border-none" /* className="w-full" */>
                                    Resume
                                </Button>
                                <Button asChild className="w-full">
                                    <Link href="#contact">Contact Me</Link>
                                </Button>
                            </div>
                        </div>
                        <div className="w-full max-w-lg sm:block hidden relative aspect-square">
                            <Image
                                /* className="w-full max-w-lg sm:block hidden" */ src="/pup-n-me.jpg"
                                alt="Picture of Logan Meeks"
                                layout="fill"
                                objectFit="cover"
                            />
                        </div>
                    </section>
                </section>

                {/* Skills Section */}
                <section id="skills" ref={skillsRef} className="sm:px-16 py-24 visible:bg-red-500 px-6">
                    <h2 className="text-2xl font-medium mb-12">Skills</h2>
                    <section className="flex flex-wrap gap-6 sm:gap-12">
                        <Card className="flex flex-[1] min-w-64 gap-6 p-6">
                            <CardHeader className="p-0">
                                <Code size={32} className="mr-2 text-primary" />
                            </CardHeader>
                            <CardContent className="p-0">
                                <CardTitle className="text-2xl mb-2 font-normal">Languages</CardTitle>
                                <p className="opacity-70">Javascript</p>
                                <p className="opacity-70">C++</p>
                                <p className="opacity-70">HTML</p>
                                <p className="opacity-70">CSS</p>
                                <p className="opacity-70">Python</p>
                            </CardContent>
                        </Card>
                        <Card className="flex flex-[1] min-w-64 gap-6 p-6">
                            <CardHeader className="p-0">
                                <Layers size={32} className="mr-2 text-primary" />
                            </CardHeader>
                            <CardContent className="p-0">
                                <CardTitle className="text-2xl mb-2 font-normal">Frameworks</CardTitle>
                                <p className="opacity-70">React</p>
                                <p className="opacity-70">Next.js</p>
                                <p className="opacity-70">Tailwind CSS</p>
                                <p className="opacity-70">Shadcn/ui</p>
                                <p className="opacity-70">Node.js</p>
                                <p className="opacity-70">Express</p>
                                <p className="opacity-70">PostgreSQL</p>
                            </CardContent>
                        </Card>
                        <Card className="flex flex-[1] min-w-64 gap-6 p-6">
                            <CardHeader className="p-0">
                                <Wrench size={32} className="mr-2 text-primary" />
                            </CardHeader>
                            <CardContent className="p-0">
                                <CardTitle className="text-2xl mb-2 font-normal">Tools</CardTitle>
                                <p className="opacity-70">Git</p>
                                <p className="opacity-70">Github</p>
                                <p className="opacity-70">Arduino</p>
                            </CardContent>
                        </Card>
                    </section>
                </section>

                {/* Projects Section */}
                <section id="projects" ref={projectsRef} className="sm:px-16 py-24 px-6">
                    <h2 className="text-2xl font-medium mb-12">Projects</h2>
                    <Projects />
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
