import Image from 'next/image';
import Link from 'next/link';
import { Github, Linkedin } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="flex gap-6 flex-wrap justify-between text-center text-muted-foreground border-t pt-8 pb-40 px-8">
            <section>
                <div className="flex sm:mx-0 items-start pb-3">
                    <Image className="overflow-hidden z-0 w-12" src="/Symbol-Light.svg" alt="Picture of Logan Meeks" width={40} height={40} />
                    <div className="float-right">
                        <h1 className="text-xl font-semibold text-foreground leading-6">Logan Meeks</h1>
                        <span className="bg-foreground text-background px-1 text-sm font-semibold">Web Development</span>
                    </div>
                </div>
                <div className="flex justify-center gap-4">
                    <Link href="https://www.linkedin.com/company/meeksdev" rel="noopener noreferrer" title="Linked In" className="hover:text-accent">
                        <Linkedin />
                    </Link>
                    <Link href="https://www.linkedin.com/company/meeksdev" rel="noopener noreferrer" title="Linked In" className="hover:text-accent">
                        <Github />
                    </Link>
                </div>

                {/* Link Github Here */}
            </section>
            <section>
                <h1 className="font-bold pb-7">Contact Information</h1>
                <Link href="mailto:loganmeeksllc@gmail.com" className="block rounded-full mb-[12px] hover:text-accent">
                    loganmeeksllc@gmail.com
                </Link>
                <Link href="tel:+1-702-521-7541" className="block rounded-full mb-[12px] hover:text-accent">
                    +1 (702) 521-7541
                </Link>
            </section>
            <section>
                <h1 className="mb-1 font-bold dark:text-shakespeare-200">Social Media</h1>
            </section>
        </footer>
    );
}
