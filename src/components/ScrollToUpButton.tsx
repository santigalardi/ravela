'use client';

import { useEffect, useState } from 'react';
import RightArrow from '@/assets/icons/right-arrow.svg';

const ScrollToUpButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      id="scroll-to-top"
      aria-label="Volver al inicio de la página"
      className={`fixed z-30 group bottom-2 right-4 flex size-12 items-center justify-center rounded-lg border-2 border-primary-white bg-black/40 text-primary backdrop-blur hover:border-primary-purple2 hover:scale-105 hover:border-accent motion-safe:transition ${
        isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
      onClick={scrollToTop}
    >
      <RightArrow className="-rotate-45 group-hover:-rotate-90 group-hover:text-primary-purple2 transition" />
    </button>
  );
};

export default ScrollToUpButton;
