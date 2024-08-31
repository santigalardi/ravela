import React from 'react';

export const Partership = () => {
  const partners = [
    {
      name: 'Coca Cola',
      logo: 'https://cdn.lavelada.dev/sponsors/coca-cola.svg',
      link: 'https://www.coca-cola.com.ar/',
    },
    {
      name: 'Spotify',
      logo: 'https://cdn.lavelada.dev/sponsors/spotify-3.svg',
      link: 'https://open.spotify.com/intl-es',
    },
  ];

  return (
    <div id="partnership" className="p-28 bg-gradient-to-t from-black to-primary-purple2/90 text-center">
      <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8">Patrocinadores</h3>
      <p className="text-lg mb-12">Ravelación puede llevarse a cabo gracias a la colaboración de...</p>
      <div className="flex flex-wrap justify-center gap-6 md:gap-8">
        {partners.map((partner) => (
          <a
            target="_blank"
            href={partner.link}
            key={partner.name}
            className="group transition-transform duration-200"
          >
            <div className="flex items-center justify-center w-40 h-16 sm:w-60 sm:h-20 rounded-sm bg-gradient-to-b from-[rgba(255,255,255,0.2)] to-transparent hover:from-[rgba(105,105,105,0.5)] hover:to-transparent transition duration-200">
              <img
                src={partner.logo}
                className="w-28 sm:w-40 transition-transform transform group-hover:scale-110"
                alt={partner.name}
              />
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};
