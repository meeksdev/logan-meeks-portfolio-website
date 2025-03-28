import Header from './header/header';
import Footer from './footer/footer';
import LandingPage from './landingPage/landingPage';
import { Toaster } from '@/components/ui/toaster';

export default function Home() {
    return (
        <>
            {/* <Header /> */}
            {/* <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start"></main> */}
            <LandingPage />
            <Footer />
            <Toaster />
        </>
    );
}
