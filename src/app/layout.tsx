import type { Metadata } from 'next';
import './globals.css';
import { Poppins } from 'next/font/google';
import Footer from '@/components/Footer';

const poppins = Poppins({
  weight: '600',
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
      <body className={`text-primary-white ${poppins.className}`}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
