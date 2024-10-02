'use client';

import Link from 'next/link';
import InstagramLogo from '../assets/icons/Instagram.svg';
import FacebookLogo from '../assets/icons/Facebook.svg';
import SoundcloudLogo from '../assets/icons/Soundcloud.svg';
import TikTokLogo from '../assets/icons/TikTok.svg';
import YoutubeLogo from '../assets/icons/Youtube.svg';
import { usePathname } from 'next/navigation';
// import TwitterLogo from '../assets/icons/Twitter.svg';

const socialLinks = [
  {
    href: 'https://www.instagram.com/ravelaok',
    label: 'Instagram',
    icon: (
      <InstagramLogo className="w-9 text-primary transition-colors duration-300 hover:text-primary-purple motion-reduce:duration-0" />
    ),
  },
  {
    href: 'https://www.facebook.com/ravelaoficial/',
    label: 'Facebook',
    icon: (
      <FacebookLogo className="w-7 text-primary transition-colors duration-300 hover:text-primary-purple motion-reduce:duration-0" />
    ),
  },
  {
    href: 'https://soundcloud.com/ravelaok',
    label: 'Soundcloud',
    icon: (
      <SoundcloudLogo className="w-8 text-primary transition-colors duration-300 hover:text-primary-purple motion-reduce:duration-0" />
    ),
  },
  {
    href: 'https://www.youtube.com/@ravelaok',
    label: 'YouTube',
    icon: (
      <YoutubeLogo className="w-8 text-primary transition-colors duration-300 hover:text-primary-purple motion-reduce:duration-0" />
    ),
  },
  {
    href: 'https://www.tiktok.com/@ravelaok',
    label: 'TikTok',
    icon: (
      <TikTokLogo className="w-8 text-primary transition-colors duration-300 hover:text-primary-purple motion-reduce:duration-0" />
    ),
  },
];

const Footer = () => {
  const pathname = usePathname();
  const isInterviewPage = /^\/entrevistas\/\w+/.test(pathname);

  return (
    <footer
      className={`relative flex mx-auto flex-col max-w-7xl py-2 md:py-8 ${isInterviewPage && 'bg-primary-black'}`}
    >
      {!isInterviewPage && (
        <hr className="absolute top-0 h-[2px] w-full min-w-[18rem] border-t-0 bg-transparent bg-gradient-to-r from-transparent via-white to-transparent bg-center my-22" />
      )}
      <div className="flex flex-col md:flex-row justify-around items-center">
        <div className="flex flex-col w-full md:w-2/3 p-6">
          <span className="text-sm sm:text-lg text-center md:text-start">
            © 2024 Ravela. Todos los derechos reservados.
          </span>
        </div>
        <div className="flex items-center">
          <ul className="flex gap-8">
            {socialLinks.map(({ href, label, icon }) => (
              <li key={label}>
                <Link
                  target="_blank"
                  href={href}
                  aria-label={label}
                  className="inline-block hover:scale-110 motion-safe:transition motion-reduce:hover:scale-100"
                >
                  {icon}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
