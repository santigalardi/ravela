import Image from 'next/image';

const MainBanner = () => (
  <section className="min-h-screen flex justify-center items-center bg-cover bg-center mb-20">
    <video autoPlay loop muted playsInline className="absolute top-0 left-0 w-full h-full object-cover z-0">
      <source src="/videos/textura-background.mp4" type="video/mp4" />
    </video>
    <div className="p-6 md:p-0 md:pb-16 z-10">
      <Image src="/logo-completo-slogan-naranja.png" width={800} height={800} alt="Ravela Logo" priority />
    </div>
  </section>
);

export default MainBanner;
