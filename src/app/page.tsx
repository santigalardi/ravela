import Countdown from '@/components/Countdown';
import FAQ from '@/sections/FAQ';
import MainBanner from '@/sections/MainBanner';
import ContestSection from '@/sections/ContestSection';
import LastSetSection from '@/sections/LastSetSection';
import Footer from '@/components/Footer';
import NavBar from '@/components/NavBar';

export default function Home() {
  return (
    <main className="min-w-[320px]">
      <NavBar />
      <MainBanner />
      <LastSetSection />
      <FAQ />
      {/* <Countdown /> */}
      <ContestSection />
      <Footer />
    </main>
  );
}
