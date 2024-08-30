import Image from 'next/image';
import NavBar from './NavBar';

const MainBanner = () => (
  <section id="main-banner" className="min-h-screen flex justify-center items-center overflow-hidden m-0">
    <h1 className="sr-only">Ravela</h1>
    <h2 className="sr-only">Ravela - Próximos Eventos de Música Electrónica</h2>
    <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover">
      <source src="/videos/textura-background.mp4" type="video/mp4" />
    </video>
    <div className="relative px-6 md:p-0 md:pb-16">
      <Image src="/wordmark-white.png" width={800} height={800} alt="Ravela Logo" priority />
    </div>
  </section>
);

export default MainBanner;
