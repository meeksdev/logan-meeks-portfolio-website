import localFont from 'next/font/local';
import { Inter } from 'next/font/google';
import './globals.css';

/* const geistSans = localFont({
    src: './fonts/GeistVF.woff',
    variable: '--font-geist-sans',
    weight: '100 900',
});
const geistMono = localFont({
    src: './fonts/GeistMonoVF.woff',
    variable: '--font-geist-mono',
    weight: '100 900',
}); */
const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
});

export const metadata = {
    charSet: 'UTF-8',
    title: 'Logan Meeks - Professional Web Design & Development',
    description: 'A certified full-stack web developer delivering high-performance software and hardware solutions through Logan Meeks LLC.',
    keywords: ['Logan Meeks', 'web design', 'web development', 'custom websites', 'web development company'],
    author: 'Logan Meeks',
    icons: {
        icon: [
            {
                rel: 'icon',
                media: '(prefers-color-scheme: light)',
                type: 'image/x-icon',
                url: '/favicon-dark.ico',
            },
            {
                rel: 'icon',
                media: '(prefers-color-scheme: dark)',
                type: 'image/x-icon',
                url: '/favicon-light.ico',
            },
        ],
    },
    metadataBase: new URL('https://meeksdev.com'),
    openGraph: {
        title: 'Logan Meeks - Professional Web Design & Development',
        description: 'A certified full-stack web developer delivering high-performance software and hardware solutions through Logan Meeks LLC.',
        url: 'https://meeksdev.com',
        siteName: 'Logan Meeks Web Development',
        // images: [
        //   {
        //     url: 'https://meeksdev.com/og-image.jpg',
        //     width: 1200,
        //     height: 630,
        //     alt: 'Logan Meeks Web Development'
        //   }
        // ],
        locale: 'en-US',
        type: 'website',
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" className="dark">
            <body className={`${inter.variable} antialiased`}>{children}</body>
        </html>
    );
}
