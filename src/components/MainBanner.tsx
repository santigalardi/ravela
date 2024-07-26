import Image from 'next/image';

const MainBanner = () => (
  <section
    className="min-h-screen flex justify-center items-center bg-cover bg-center mb-20"
    // style={{ backgroundImage: "url('/images/textura-bg.png')" }}
  >
    <div className="p-6 md:p-0 md:pb-16">
      <Image src="/logo-completo-slogan-violeta.png" width={800} height={800} alt="Ravela Logo" priority />
    </div>
  </section>
);

export default MainBanner;
