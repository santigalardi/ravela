'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ClerkLoaded, ClerkLoading, UserButton } from '@clerk/nextjs';
import { usePathname } from 'next/navigation';
import { Loader2 } from 'lucide-react';

const Header = () => {
  const pathname = usePathname();

  return (
    <header className="absolute top-0 left-0 w-full flex items-center justify-between p-6 px-12 bg-transparent z-10">
      <div>
        {pathname === '/concurso' && (
          <Link href="/">
            <Image src="/ravela-logo.svg" alt="Ravelación Logo" width={60} height={60} />
          </Link>
        )}
      </div>
      <nav>
        <ul className="flex space-x-6">
          <li>
            <Link href="/#faqs" className="text-lg text-shadow">
              FAQs
            </Link>
          </li>
          <li>
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

export default Header;
