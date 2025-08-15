import { Cinzel_Decorative, Bebas_Neue, Lato } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Layout/navbar';
import Footer from '@/components/Layout/footer';

export const cinzel = Cinzel_Decorative({
  subsets: ['latin'],
  weight: ['700'],
  variable: '--font-cinzel',
  display: 'swap',
});

export const bebas_neue = Bebas_Neue({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-bebas-neue',
  display: 'swap',
});

export const lato = Lato({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-lato',
  display: 'swap',
});


export const metadata = {
  title: "Obay Rashad",
  description: "A Software Engineer and Full-Stack Developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
      className={`${cinzel.variable} ${bebas_neue.variable} ${lato.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
