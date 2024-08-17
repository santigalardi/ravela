'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ClerkLoaded, ClerkLoading, UserButton } from '@clerk/nextjs';
import { usePathname } from 'next/navigation';
import { Loader2 } from 'lucide-react';

const NavBar = () => {
  const pathname = usePathname();

  return (
    <header className="absolute top-0 left-0 w-full flex items-center justify-between p-6 px-12 bg-transparent z-20">
      <div>
        <div className={`md:pl-10 ${pathname === '/' && 'opacity-0'}`}>
          <Link href="/">
            <Image src="/ravela-logo.svg" alt="Ravelación Logo" width={80} height={60} />
          </Link>
        </div>
      </div>
      <nav>
        <ul className="flex justify-center items-center space-x-6">
          <li className="transition-transform hover:scale-105">
            <Link href="/#faqs" className="text-lg text-shadow">
              FAQs
            </Link>
          </li>
          <li className="transition-transform hover:scale-105">
            <Link href="/#contest" className="text-lg text-shadow">
              Concurso
            </Link>
          </li>
          <li>
            <ClerkLoaded>
              <UserButton />
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
