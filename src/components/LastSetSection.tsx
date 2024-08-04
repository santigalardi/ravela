'use client';

import { useState, useEffect } from 'react';
import ReactPlayer from 'react-player';

const LastSetSection = () => {
  const [isClient, setIsClient] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 768);

  useEffect(() => {
    setIsClient(true);

    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className={`flex h-[80vh] md:min-h-screen justify-center items-center`}>
      {isClient && (
        <ReactPlayer
          url="https://www.youtube.com/watch?v=Z4fWrm3Fvvk"
          playing={true}
          controls
          muted={true}
          width={isLargeScreen ? '90%' : '640px'}
          height={isLargeScreen ? '90%' : '360px'}
        />
      )}
    </div>
  );
};

export default LastSetSection;
