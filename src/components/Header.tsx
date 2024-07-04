'use client';

import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  return (
    <header className="absolute top-0 left-0 w-full flex items-center justify-between p-6 bg-transparent">
      <Link href="/">
        <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} priority className="cursor-pointer" />
      </Link>
      <nav>
        <ul className="flex space-x-4">
          <li>
            <Link href="/" className="hover:text-red-500 text-shadow">
              Inicio
            </Link>
          </li>
          <li>
            <Link href="/#about-vision" className="hover:text-red-500 text-shadow">
              Nosotros
            </Link>
          </li>
          <li>
            <Link href="/#contest" className="hover:text-red-500 text-shadow">
              Encuesta
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
