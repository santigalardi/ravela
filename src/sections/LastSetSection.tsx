'use client';

import { useState, useEffect } from 'react';
import ReactPlayer from 'react-player';

const LastSetSection = () => {
  const [isClient, setIsClient] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    setIsClient(true);

    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section className="flex h-[80vh] md:min-h-screen justify-center items-center">
      {isClient && (
        <ReactPlayer
          url="https://www.youtube.com/watch?v=A90gZ-dCYS4"
          playing={true}
          controls
          muted={true}
          width={isLargeScreen ? '90%' : '640px'}
          height={isLargeScreen ? '90%' : '360px'}
        />
      )}
    </section>
  );
};

export default LastSetSection;
