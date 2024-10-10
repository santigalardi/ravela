'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ClerkLoaded, ClerkLoading, UserButton, useUser } from '@clerk/nextjs';
import { usePathname } from 'next/navigation';
import { Loader2, ArrowLeft, ArrowRight } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const NavBar = () => {
  const { isSignedIn } = useUser();
  const pathname = usePathname();
  const isInterviewPage = /^\/entrevistas\/\w+/.test(pathname);
  const isContestPage = /^\/concurso/.test(pathname);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(false);

  const navRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (navRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = navRef.current;
      setShowLeftArrow(scrollLeft > 0);
      const isFullyScrolled = scrollLeft + clientWidth >= scrollWidth - 1;
      setShowRightArrow(!isFullyScrolled);
    }
  };

  useEffect(() => {
    if (navRef.current) {
      navRef.current.addEventListener('scroll', handleScroll);
    }
    return () => {
      if (navRef.current) {
        navRef.current.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  useEffect(() => {
    handleScroll();
  }, [isSignedIn]);

  return (
    <header
      className={`absolute min-w-[320px] top-0 left-0 w-full z-20 transition-all duration-300 ${isInterviewPage && 'bg-primary-black'}`}
    >
      <div className="relative w-full max-w-7xl mx-auto flex items-center h-24 md:p-8">
        {showLeftArrow && (
          <div
            className={`absolute left-0 top-0 h-full w-8 bg-gradient-to-r 
  ${
    pathname === '/'
      ? 'from-[#360A3F]/70'
      : isInterviewPage
        ? 'from-primary-black/70'
        : isContestPage
          ? 'from-[#D0C7B8]/70'
          : 'from-black/70'
  } 
  to-transparent flex items-center justify-start z-20`}
          >
            <ArrowLeft size={20} className="text-primary-white" />
          </div>
        )}
        <div
          ref={navRef}
          className={`w-full flex items-center ${pathname === '/' ? 'justify-center md:justify-between' : 'justify-between'} h-24 p-2 overflow-x-auto scrollbar-hidden`}
        >
          <div>
            <div className={`md:pl-10 ${pathname === '/' && 'hidden'}`}>
              <Link href="/">
                <div className="relative w-[80px] h-[60px] group">
                  <Image
                    src="/ravela-logo.svg"
                    alt="Ravelación Logo"
                    width={60}
                    height={30}
                    priority
                    className="absolute inset-0 transition-opacity duration-200 group-hover:opacity-0"
                  />
                  <Image
                    src="/ravela-logo-violet.svg"
                    alt="Ravelación Logo Violet"
                    width={60}
                    height={30}
                    className="absolute inset-0 transition-opacity duration-200 opacity-0 group-hover:opacity-100"
                  />
                </div>
              </Link>
            </div>
          </div>

          <nav>
            <ul className="flex justify-center items-center space-x-6">
              <li className="transition hover:text-primary-gray">
                <Link href="/entrevistas" className="text-md text-shadow">
                  ENTREVISTAS
                </Link>
              </li>
              <li className="transition hover:text-primary-gray">
                <Link href="/concurso" className="text-md text-shadow">
                  CONCURSO
                </Link>
              </li>
              <li className="transition hover:text-primary-gray">
                <Link href="/#faqs" className="text-md text-shadow">
                  FAQs
                </Link>
              </li>
              <li className="transition w-12 hover:text-primary-gray">
                <ClerkLoaded>
                  {isSignedIn ? (
                    <UserButton />
                  ) : (
                    <Link href="/sign-in" className="text-shadow text-md">
                      LOGIN
                    </Link>
                  )}
                </ClerkLoaded>
                <ClerkLoading>
                  <Loader2 className="size-8 animate-spin text-slate-400" />
                </ClerkLoading>
              </li>
            </ul>
          </nav>
        </div>
        {showRightArrow && (
          <div
            className={`absolute right-0 top-0 h-full w-12 bg-gradient-to-l ${
              pathname === '/'
                ? 'from-[#360A3F]/70'
                : isInterviewPage
                  ? 'from-primary-black/70'
                  : isContestPage
                    ? 'from-[#D0C7B8]/70'
                    : 'from-black/70'
            } 
  to-transparent flex items-center justify-end z-10`}
          >
            <ArrowRight size={20} className="text-primary-white" />
          </div>
        )}
      </div>
    </header>
  );
};

export default NavBar;
