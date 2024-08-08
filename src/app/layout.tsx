import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import { ClerkProvider } from '@clerk/nextjs';
import { dark } from '@clerk/themes';
import Script from 'next/script';
import './globals.css';

const poppins = Poppins({
  weight: '600',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Ravela',
  description:
    'Ravela - Los DJs del Mañana se Revelan Hoy. Descubre nuevos talentos y disfruta de eventos de música electrónica en vivo.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: dark,
        layout: {
          unsafe_disableDevelopmentModeWarnings: true,
        },
      }}
      afterSignOutUrl="/"
    >
      <html lang="en" className="scroll-smooth">
        <head>
          <meta
            name="description"
            content="Ravela - Los DJs del Mañana se Revelan Hoy. Descubre nuevos talentos y disfruta de eventos de música electrónica en vivo."
          />
          <link rel="canonical" href="https://ravela.com.ar" />
        </head>
        <body className={`text-primary-white ${poppins.className}`}>
          {children}
          {/* Google Analytics Script */}
          <Script
            strategy="afterInteractive"
            src="https://www.googletagmanager.com/gtag/js?id=G-SZY2J22GZQ"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-SZY2J22GZQ');
          `}
          </Script>
        </body>
      </html>
    </ClerkProvider>
  );
}
