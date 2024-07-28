import Countdown from '@/components/Countdown';
import FAQ from '@/components/FAQ';
import MainBanner from '@/components/MainBanner';
import ContestSection from '@/components/ContestSection';

export default function Home() {
  return (
    <main>
      <MainBanner />
      <FAQ />
      {/* <Countdown /> */}
      <ContestSection />
    </main>
  );
}
