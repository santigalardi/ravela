import Countdown from '@/components/Countdown';
import FAQ from '@/components/FAQ';
import MainBanner from '@/components/MainBanner';
import ContestSection from '@/components/ContestSection';

export default function Home() {
  return (
    <main>
      <div className="bg-primary-black">
        <MainBanner />
        <FAQ />
        {/* <Countdown /> */}
        <ContestSection />
      </div>
    </main>
  );
}
