'use client';

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
      <div
        className="min-h-screen flex flex-col justify-center p-4 sm:p-6 md:p-12 lg:p-16 xl:p-24 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/background-1.webp')" }}
      >
        <div className="px-4 mb-4">
          <h1 className="text-dark-text tracking-tighter text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl text-shadow text-shadow-blur-9">
            Ravelación
          </h1>
        </div>
        <div className="px-4">
          <h2 className="text-white sm:text-3xl md:text-4xl lg:text-4xl text-shadow">
            Los DJs del Mañana se Revelan Hoy
          </h2>
        </div>
      </div>

      {/* About Screen 2 Vision */}

      <div
        id="about-vision"
        className="max-h-screen p-4 sm:p-6 md:p-12 lg:p-16 xl:p-24 text-white bg-gradient-to-t from-black to-slate-900"
      >
        <div className="max-w-4xl mx-auto">
          <p className="italic text-lg sm:text-xl md:text-2xl lg:text-3xl my-16 text-shadow text-center">
            Impulsamos la escena electrónica emergente de LATAM, proporcionando visibilidad y herramientas a nuevos
            talentos para que puedan alcanzar su potencial y conectarse con su audiencia. En un ambiente seguro y
            profesional, convertimos sueños en realidades musicales.
          </p>
        </div>
      </div>

      {/* Screen 3 Call to Action Form */}
      <div
        id="contest"
        className="min-h-screen flex justify-center items-center p-6 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/concert-3.webp')" }}
      >
        <div className="max-w-5xl flex flex-col md:flex-row items-center gap-16">
          <div className="flex-1 text-center md:text-left">
            <h3 className="text-4xl font-bold text-red-700 text-shadow text-shadow-blur-8 mb-4">¿Sos DJ o Raver?</h3>
            <p className="text-xl text-white text-shadow">Ayúdanos con una breve encuesta para conocerte mejor.</p>
          </div>
          <div className="flex-1 flex justify-center">
            <button
              className="px-8 py-4 bg-red-700 text-white font-bold rounded-sm shadow-lg hover:bg-red-600 transition-colors duration-200"
              onClick={handleParticipate}
            >
              Participar
            </button>
          </div>
        </div>
      </div>

      {/* Partnership */}

      <div
        id="partnership"
        className="p-10 sm:p-12 md:p-16 lg:p-24 bg-gradient-to-t from-black to-slate-900 text-center"
      >
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
              <div className="flex items-center justify-center w-40 h-16 sm:w-60 sm:h-20 rounded-sm bg-gradient-to-b from-[rgba(255,255,255,0.2)] to-transparent hover:from-[rgba(192,28,28,0.5)] hover:to-transparent transition duration-200">
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

      {/* About Screen feedback */}
      {/* <div className="min-h-screen flex justify-center items-center bg-gray-950 p-6">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-8">
          <div className="flex-1">
            <img
              src="../images/female-dj-red.webp"
              alt="DJ en acción"
              className="w-full md:w-auto md:max-w-full shadow-md custom-red-shadow"
            />
          </div>
          <div className="flex-1 text-center md:text-left">
            <blockquote className="italic text-lg md:text-xl lg:text-2xl text-white text-shadow text-shadow-blur-2 p-4 rounded-lg">
              "Revelación ha sido fundamental para nuestra carrera, dándonos la exposición y los recursos que
              necesitábamos para crecer."
            </blockquote>
          </div>
        </div>
      </div> */}
    </main>
  );
}
