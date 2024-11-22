'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Code, Layers, Wrench, Eye, Github, Star } from 'lucide-react';

import Logo from '@/components/icons/logo';
import Header from '../header/header';
import { ContactForm } from '../contactForm/contactForm';

const testimonials = [
    {
        name: 'Joshua Gore',
        position: 'Sr. Product Designer',
        company: 'Wraithworks',
        companyURL: 'https://wraithworks.com',
        rating: 5,
        testimonial:
            "I was extremely happy with Logan's work, communication, and results. Logan is a self starter who can execute with minimal information to a maximal result. I will be happy to work with him again.",
    },
];

const projects = [
    {
        title: 'Veterinary Chrome Extension',
        description:
            'A Chrome extension for veterinary practices that gathers information from client form submissions and automates various administrative tasks.',
        badges: ['Javascript', 'HTML', 'CSS', 'Third-Party APIs'],
        // demoURL: 'https://www.google.com',
        codeURL: 'https://github.com/meeksdev/autofill-extension',
        imageURL: '/projects/veterinary-chrome-extension.gif',
        imageAlt: 'Veterinary Chrome Extension',
    },
    {
        title: 'Embedded Firearm System',
        description:
            'A high-performance embedded system and circuitry for firearms using embedded C/C++ and ARM microcontrollers, achieving sub-second response times.',
        badges: ['C++', 'Arduino'],
        imageURL: '/projects/wraithworks.jpg',
        imageAlt: 'Embedded Firearm System',
    },
    /* {
        title: 'Portfolio Website',
        description: 'My portfolio website using React, Next.js, TailwindCSS, and Shadcn components.',
        badges: ['React', 'Next.js', 'Tailwind CSS', 'Shadcn/ui'],
        codeURL: 'https://github.com/meeksdev/logan-meeks-portfolio-website',
        imageURL: '/projects/portfolio-site.jpg',
        imageAlt: 'Portfolio Website',
    }, */
];

function Projects() {
    return (
        <section className="flex flex-wrap justify-center gap-6 sm:gap-12">
            {projects.map((project, projectIndex) => (
                <Card key={projectIndex} className="flex flex-col min-w-96 max-w-2xl flex-1">
                    <CardHeader className="flex flex-col justify-start">
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
                    <CardContent className="flex flex-col h-full gap-2 text-center">
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

    function ReviewStars({ rating }) {
        const validRating = Math.min(Math.max(rating, 1), 5); // Ensure the rating is between 1 and 5

        return Array.from({ length: validRating }, (_, index) => <Star key={index} className="size-6" />);
    }

    return (
        <>
            <Header inViewElement={inViewElement} />
            <main>
                {/* Hero Section */}
                <section id="hero" ref={heroRef} className="bg-secondary border-b overflow-hidden">
                    <div className="relative flex justify-center items-center max-w-screen-xl mx-auto">
                        <div className="w-full h-full flex-[0] lg:flex-1 lg:flex justify-end items-center">
                            <div className="w-fit h-fit flex justify-center items-center">
                                <svg
                                    className="absolute overflow-hidden z-0 -translate-x-36 hidden lg:block"
                                    width="639"
                                    height="858"
                                    viewBox="0 0 639 858"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M528.876 63.5964L110 795.068M528.876 63.5964L110 795.068" stroke="hsl(200 21% 8%)" strokeWidth="250" />
                                </svg>
                                <Logo
                                    variant="businessHero"
                                    className="absolute lg:left-auto left-1/2 -translate-x-1/2 overflow-hidden z-0 size-full lg:size-60 lg:-translate-x-32 center"
                                />
                            </div>
                        </div>

                        <div className="w-full sm:px-16 py-40 z-10 flex-[1.5] px-0 flex flex-col gap-4 items-center lg:items-start lg:text-left text-center">
                            <h1 className="w-fit text-3xl font-bold">Affordable Web Solutions Delivering Big Results for Small Businesses</h1>
                            <p className="font-normal text-lg">
                                Unlock the potential of your online business with stunning website designs and custom applications tailored to your vision &
                                goals.
                            </p>
                            <Button asChild className="w-fit mt-4">
                                <Link href="#contact">Contact Us</Link>
                            </Button>
                        </div>
                    </div>
                </section>

                {/* <Image className="w-full md:hidden" src="/pup-n-me.jpg" alt="Picture of Logan Meeks" width={400} height={400} /> */}

                {/* About Us Section */}
                <section id="about" ref={aboutRef} className="sm:px-16 py-24 px-6 max-w-screen-xl mx-auto">
                    <h2 className="text-2xl font-medium mb-12">About Us</h2>
                    <section className="flex gap-12 justify-between">
                        <div className="flex flex-col w-full">
                            <div>
                                <p className="pb-4 text-muted-foreground">
                                    Welcome to Logan Meeks Web Development - where innovation meets creativity to craft exceptional digital experiences.
                                    We&apos;re passionate about leveraging cutting-edge technology to bring your vision to life. With a keen eye for design and
                                    a relentless pursuit of perfection, we specialize in creating bespoke websites that not only captivate audiences but also
                                    drive results.
                                </p>
                                <p className="pb-4 text-muted-foreground">
                                    We thrive on challenges and are dedicated to pushing the boundaries of web development to deliver solutions that exceed
                                    expectations.{' '}
                                </p>
                                <p className="pb-4 text-muted-foreground">
                                    What truly sets us apart is our unwavering dedication to our clients. We believe that collaboration is key to success, which
                                    is why we work closely with you every step of the way to ensure that your project is a true reflection of your vision and
                                    goals.{' '}
                                </p>
                                <p className="pb-4 text-muted-foreground">
                                    Whether you&apos;re a small business looking to establish your online presence or a large corporation seeking to redefine
                                    it, we&apos;re here to help. Let&apos;s embark on this journey together and transform your digital aspirations into reality.
                                </p>
                                <p className="pb-4 text-muted-foreground">Get in touch with us today and let&apos;s create something extraordinary.</p>
                            </div>
                            <div className="flex gap-4 w-full sm:w-36">
                                {/* <Button variant="secondary" disabled className="w-full border-none">
                                    Resume
                                </Button> */}
                                <Button asChild className="w-full">
                                    <Link href="#contact">Contact Us</Link>
                                </Button>
                            </div>
                        </div>
                        {/* <div className="w-full min-w-72 max-w-lg md:block hidden relative aspect-square">
                            <Image src="/pup-n-me.jpg" alt="Picture of Logan Meeks" layout="fill" objectFit="cover" />
                        </div> */}
                    </section>
                </section>

                {/* Services */}
                <section id="skills" ref={skillsRef} className="sm:px-16 py-24 visible:bg-red-500 px-6  max-w-screen-xl mx-auto">
                    <h2 className="text-2xl font-medium mb-12">Services</h2>
                    <Tabs orientation="vertical" defaultValue="design" className="flex flex-col gap-1 sm:flex-row">
                        <TabsList className="min-w-[232px] text-center sm:text-left justify-start flex flex-col border">
                            <TabsTrigger
                                value="design"
                                className="border-e-4 border-e-transparent px-4 py-2  hover:cursor-pointer hover:text-accent selected:border-e-4 selected:outline-none"
                            >
                                Custom Website Design
                            </TabsTrigger>
                            <TabsTrigger
                                value="development"
                                className="border-e-4 border-e-transparent px-4 py-2 hover:cursor-pointer hover:text-accent selected:border-e-4 selected:outline-none"
                            >
                                Responsive Development
                            </TabsTrigger>
                            <TabsTrigger
                                value="ecommerce"
                                className="border-e-4 border-e-transparent px-4 py-2 hover:cursor-pointer hover:text-accent selected:border-e-4 selected:outline-none"
                            >
                                E-Commerce Solutions
                            </TabsTrigger>
                            <TabsTrigger
                                value="seo"
                                className="border-e-4 border-e-transparent px-4 py-2 hover:cursor-pointer hover:text-accent selected:border-e-4 selected:outline-none"
                            >
                                SEO Optimization
                            </TabsTrigger>
                            <TabsTrigger
                                value="database"
                                className="border-e-4 border-e-transparent px-4 py-2 hover:cursor-pointer hover:text-accent selected:border-e-4 selected:outline-none"
                            >
                                Database Integration
                            </TabsTrigger>
                        </TabsList>
                        <TabsContent value="design" className="w-full border">
                            <p className="text-center border-b py-1">Tailored websites that captivate your audience and elevate your brand.</p>
                            <div className="h-full aspect-square max-h-[550px] p-2 mx-auto relative">
                                <Image
                                    src="/business/design.svg"
                                    alt="Illustration of laptop displaying generic website outline."
                                    layout="fill"
                                    objectFit="contain"
                                />
                            </div>
                        </TabsContent>
                        <TabsContent value="development" className="w-full border">
                            <p className="text-center border-b py-1">Engage users on all devices with seamless, responsive website experiences.</p>
                            <div className="h-full aspect-square max-h-[550px] p-2 mx-auto relative">
                                <Image
                                    src="/business/responsive.svg"
                                    alt="Illustration of desktop monitor, laptop, tablet, and smart phone."
                                    layout="fill"
                                    objectFit="contain"
                                />
                            </div>
                        </TabsContent>
                        <TabsContent value="ecommerce" className="w-full border">
                            <p className="text-center border-b py-1">Powerful online stores optimized for maximum sales and conversions.</p>
                            <div className="h-full aspect-square max-h-[550px] p-2 mx-auto relative">
                                <Image
                                    src="/business/ecommerce.svg"
                                    alt="Illustration of smart phone with marketplace awning overtop and a buy button centered on the screen."
                                    layout="fill"
                                    objectFit="contain"
                                />
                            </div>
                        </TabsContent>
                        <TabsContent value="seo" className="w-full border">
                            <p className="text-center border-b py-1">Dominate search engine rankings and attract more organic traffic.</p>
                            <div className="h-full aspect-square max-h-[550px] p-2 mx-auto relative">
                                <Image
                                    src="/business/seo.svg"
                                    alt="Illustration of bar graph and an arrow indicating an upward trend."
                                    layout="fill"
                                    objectFit="contain"
                                />
                            </div>
                        </TabsContent>
                        <TabsContent value="database" className="w-full border">
                            <p className="text-center border-b py-1">
                                Streamline your business operations by connecting your website with powerful backend systems.
                            </p>
                            <div className="h-full aspect-square max-h-[550px] p-2 mx-auto relative">
                                <Image src="/business/database.svg" alt="Illustration of database schema." layout="fill" objectFit="contain" />
                            </div>
                        </TabsContent>
                    </Tabs>
                </section>

                {/* Skills Section */}
                {/* <section id="skills" ref={skillsRef} className="sm:px-16 py-24 visible:bg-red-500 px-6  max-w-screen-xl mx-auto">
                    <h2 className="text-2xl font-medium mb-12">Skills</h2>
                    <section className="flex flex-wrap justify-center gap-6 sm:gap-12">
                        <Card className="flex flex-1 min-w-64 max-w-md gap-6 p-6">
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
                        <Card className="flex flex-1 min-w-64 max-w-md gap-6 p-6">
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
                        <Card className="flex flex-1 min-w-64 max-w-md gap-6 p-6">
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
                </section> */}

                {/* Projects Section */}
                <section id="projects" ref={projectsRef} className="sm:px-16 py-24 px-6  max-w-screen-xl mx-auto">
                    <h2 className="text-2xl font-medium mb-12">Recent Projects</h2>
                    <Projects />
                </section>

                {/* Client Testimonials */}
                <section className="sm:px-16 py-24 px-6  max-w-screen-xl mx-auto">
                    <h2 className="text-2xl font-medium mb-12">Client Testimonials</h2>
                    <div className="flex flex-wrap justify-left gap-2">
                        {testimonials.map(({ name, position, company, companyURL, rating, testimonial }, index) => {
                            return (
                                <section key={index} className="flex min-w-64 max-w-96 flex-1 flex-col justify-between rounded-lg border p-2">
                                    <div>
                                        <span className="text-2xl font-bold text-primary">“</span>
                                        <p className="pb-4 text-justify">{testimonial}</p>
                                    </div>
                                    <div>
                                        <div className="flex justify-center py-3 text-primary">
                                            <ReviewStars rating={rating} />
                                        </div>
                                        <h2 className="text-center font-bold">{name}</h2>
                                        <h3 className="text-center text-muted-foreground">
                                            {position},{' '}
                                            <Link href={companyURL} className="underline text-primary hover:text-accent">
                                                {company}
                                            </Link>
                                        </h3>
                                    </div>
                                </section>
                            );
                        })}
                    </div>
                </section>

                {/* Contact Section */}
                <section id="contact" ref={contactRef} className="sm:px-16 py-24 px-6  max-w-screen-xl mx-auto">
                    <h2 className="text-2xl font-medium mb-12">Contact</h2>
                    <ContactForm />
                </section>
            </main>
        </>
    );
}
