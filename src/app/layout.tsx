import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';

import { Barlow } from 'next/font/google';
import Footer from '@/components/Footer';

const barlow = Barlow({
  weight: '700',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Ravelación',
  description: 'Los DJs del Mañana se Revelan Hoy',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={barlow.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
