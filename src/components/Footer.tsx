'use client';

// import FacebookLogo from '../assets/icons/Facebook.svg';
// import InstagramLogo from '../assets/icons/Instagram.svg';
// import TikTokLogo from '../assets/icons/TikTok.svg';
// // import TwitterLogo from '../assets/icons/Twitter.svg';
// import YoutubeLogo from '../assets/icons/Youtube.svg';

export default function Footer() {
  return (
    <footer className="relative flex flex-col py-8 justify-between bg-primary-black">
      {/* <hr className="absolute top-0 h-[2px] w-full min-w-[18rem] border-t-0 bg-transparent bg-gradient-to-r from-transparent via-white to-transparent bg-center md:my-9" /> */}
      <div className="flex flex-col justify-center items-center w-full p-4 sm:p-10">
        <span className="text-center text-sm sm:text-lg mb-6">
          © 2024 Ravela. Todos los derechos reservados.
        </span>
        <span className="text-center text-sm mb-4 sm:mb-0">ravelacionmedios@gmail.com</span>
        {/* <ul className="flex gap-4 sm:gap-6">
          <li>
            <a
              target="_blank"
              href="https://www.instagram.com/ravelacion/?hl=es"
              className="inline-block hover:scale-125 motion-safe:transition motion-reduce:hover:scale-100"
            >
              <InstagramLogo className="text-primary transition-colors duration-300 hover:text-primary-purple motion-reduce:duration-0" />
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://www.tiktok.com/@ravelacion"
              className="inline-block hover:scale-125 motion-safe:transition motion-reduce:hover:scale-100"
            >
              <TikTokLogo className="w-10 text-primary transition-colors duration-300 hover:text-primary-purple motion-reduce:duration-0" />
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://www.facebook.com/profile.php?id=61562014469340"
              className="inline-block hover:scale-125 motion-safe:transition motion-reduce:hover:scale-100"
            >
              <FacebookLogo className="w-9 text-primary transition-colors duration-300 hover:text-primary-purple motion-reduce:duration-0" />
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://www.youtube.com/@Ravelacion"
              className="inline-block hover:scale-125 motion-safe:transition motion-reduce:hover:scale-100"
            >
              <YoutubeLogo className="text-primary transition-colors duration-300 hover:text-primary-purple motion-reduce:duration-0" />
            </a>
          </li>
        </ul> */}
      </div>
    </footer>
  );
}
