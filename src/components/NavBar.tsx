'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ClerkLoaded, ClerkLoading, UserButton, useUser } from '@clerk/nextjs';
import { usePathname } from 'next/navigation';
import { Loader2 } from 'lucide-react';

const NavBar = () => {
  const { isSignedIn } = useUser();
  const pathname = usePathname();

  return (
    <header className="absolute top-0 left-0 h-24 w-full flex items-center justify-between px-8 z-20 transition-all duration-300">
      <div>
        <div className={`md:pl-10 ${pathname === '/' && 'hidden'}`}>
          <Link href="/">
            <div className="relative w-[80px] h-[60px]">
              <Image
                src="/ravela-logo.svg"
                alt="Ravelación Logo"
                width={80}
                height={60}
                className="absolute inset-0 transition-opacity duration-300 hover:opacity-0"
              />
              <Image
                src="/ravela-logo-violet.svg"
                alt="Ravelación Logo Violet"
                width={80}
                height={60}
                className="absolute inset-0 transition-opacity duration-300 opacity-0 hover:opacity-100"
              />
            </div>
          </Link>
        </div>
      </div>
      <nav>
        <ul className="flex justify-center items-center space-x-6">
          <li className="transition hover:text-primary-gray">
            <Link href="/#faqs" className="text-md text-shadow">
              FAQs
            </Link>
          </li>
          <li className="transition hover:text-primary-gray">
            <Link href="/concurso" className="text-md text-shadow">
              CONCURSO
            </Link>
          </li>
          <li className="transition hover:text-primary-gray">
            <ClerkLoaded>
              {isSignedIn ? (
                <UserButton />
              ) : (
                <Link href="/sign-in" className="text-shadow text-md">
                  LOGIN OR SIGN UP
                </Link>
              )}
            </ClerkLoaded>
            <ClerkLoading>
              <Loader2 className="size-8 animate-spin text-slate-400" />
            </ClerkLoading>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
