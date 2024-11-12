import Header from './header/header';
import Footer from './footer/footer';
import LandingPage from './landingPage/landingPage';

export default function Home() {
    return (
        <div>
            {/* <Header /> */}
            {/* <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start"></main> */}
            <LandingPage />
            <Footer />
        </div>
    );
}
