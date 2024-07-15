import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import { Poppins } from 'next/font/google';
import Footer from '@/components/Footer';

const titilium = Poppins({
  weight: '600',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Ravela',
  description: 'Los DJs del Mañana se Revelan Hoy',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`text-primary-white ${titilium.className}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
