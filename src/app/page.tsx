'use client';

import Image from 'next/image';
import Countdown from '@/components/Countdown';
import FAQ from '@/components/FAQ';

export default function Home() {
  const handleParticipate = () => {
    window.open('https://forms.gle/CcLD5iS5fauhb6TK6', '_blank');
  };

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
    <main>
      <div className="bg-primary-black">
        <div
          className="min-h-screen flex justify-center items-center bg-cover bg-center mb-20"
          // style={{ backgroundImage: "url('/images/textura-bg.png')" }}
        >
          <div className="p-6 md:p-0 md:pb-16">
            <Image
              src="/logo-completo-slogan-violeta.png"
              width={800}
              height={800}
              alt="Ravela Logo"
              priority
            />
          </div>
        </div>

        <FAQ />

        <Countdown />
      </div>

      <div
        id="contest"
        className="min-h-screen flex justify-center items-center p-6 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/concert-1.webp')" }}
      >
        <div className="max-w-5xl flex flex-col md:flex-row items-center gap-16">
          <div className="flex-1 text-center md:text-left">
            <h3 className="mb-4 text-4xl font-bold text-primary-purple2 text-shadow text-shadow-x-[-1px] text-shadow-blur-4">
              ¿Sos DJ o Raver?
            </h3>
            <p className="text-xl text-shadow text-shadow-x-[-1px] text-shadow-blur-4">
              Ayúdanos con una breve encuesta para conocerte mejor.
            </p>
          </div>
          <div className="flex-1 flex justify-center">
            <button
              className="px-8 py-4 bg-primary-purple2 font-bold rounded-sm shadow-lg hover:bg-primary-purple transition-colors duration-200"
              onClick={handleParticipate}
            >
              Participar
            </button>
          </div>
        </div>
      </div>

      {/* About Screen feedback */}
      {/* <div className="p-16 flex justify-center items-center bg-gradient-to-b from-black to-primary-purple2/90">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-8">
          <div className="flex-1">
            <img
              src="../images/female-dj-red.webp"
              alt="DJ en acción"
              className="w-full md:w-auto md:max-w-full shadow-md custom-red-shadow"
            />
          </div>
          <div className="flex-1 text-center md:text-left">
            <blockquote className="italic text-lg md:text-xl lg:text-2xl text-shadow text-shadow-blur-2 p-4 rounded-lg">
              "Revelación ha sido fundamental para nuestra carrera, dándonos la exposición y los recursos que
              necesitábamos para crecer."
            </blockquote>
          </div>
        </div>
      </div> */}

      {/* Partnership */}

      {/* <div id="partnership" className="p-28 bg-gradient-to-t from-black to-primary-purple2/90 text-center">
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
      </div> */}
    </main>
  );
}
