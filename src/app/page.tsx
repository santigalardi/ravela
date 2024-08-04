import Countdown from '@/components/Countdown';
import FAQ from '@/components/FAQ';
import MainBanner from '@/components/MainBanner';
import ContestSection from '@/components/ContestSection';
import LastSetSection from '@/components/LastSetSection';

export default function Home() {
  return (
    <main>
      <MainBanner />
      <LastSetSection />
      {/* <Countdown /> */}
      <FAQ />
      <ContestSection />
    </main>
  );
}
