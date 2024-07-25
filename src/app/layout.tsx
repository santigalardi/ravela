import type { Metadata } from 'next';
import './globals.css';
import { Poppins } from 'next/font/google';
import Footer from '@/components/Footer';
import Script from 'next/script';

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
      <Script strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=G-SZY2J22GZQ" />
      <Script>
        {`  window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-SZY2J22GZQ')`}
      </Script>
      <body className={`text-primary-white ${poppins.className}`}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
