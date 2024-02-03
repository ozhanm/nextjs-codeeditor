import { Poppins as siteFont } from 'next/font/google';
import ThemeProvider from './context';

import "@/styles/reset.css";
import "@/styles/style.scss";

const fontFamily = siteFont({
    display: 'swap',
    subsets: ['latin'],
    style: ['normal', 'italic'],
    weight: ['300', '400', '500', '600', '700', '800', '900']
});

export const metadata = {
    title: 'Code Editor',
    description: 'Code editor app',
}

export default async function RootLayout({ children }) {

    return (
        <html lang="en">
            <body>
                <ThemeProvider>
                    <main className={fontFamily.className}>
                        {children}
                    </main>
                </ThemeProvider>
            </body>
        </html>
    )
}