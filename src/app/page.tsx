import Countdown from '@/components/Countdown';
import FAQ from '@/components/FAQ';
import MainBanner from '@/components/MainBanner';
import ContestSection from '@/components/ContestSection';
import LastSetSection from '@/components/LastSetSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-w-[320px]">
      <MainBanner />
      <LastSetSection />
      <FAQ />
      {/* <Countdown /> */}
      <ContestSection />
      <Footer />
    </main>
  );
}
