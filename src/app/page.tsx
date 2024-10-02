'use client';

import Countdown from '@/components/Countdown';
import FAQ from '@/sections/FAQ';
import MainBanner from '@/sections/MainBanner';
import ContestSection from '@/sections/ContestSection';
import LastSetSection from '@/sections/LastSetSection';
import Partnership from '@/sections/Partnership';
import Footer from '@/components/Footer';
import NavBar from '@/components/NavBar';
import InterviewsSection from '@/sections/Interviews/InterviewsSection';
import useGetInterviews from '@/hooks/useGetInterviews';
import InterviewsSkeleton from '@/sections/Interviews/InterviewsSkeleton';

export default function Home() {
  const { interviews, loading, error } = useGetInterviews();

  return (
    <main className="min-w-[320px]">
      <NavBar />
      <MainBanner />
      <LastSetSection />
      {loading ? (
        <InterviewsSkeleton />
      ) : error ? (
        <div className="text-center py-10">Error: {error}</div>
      ) : (
        <InterviewsSection interviews={interviews} />
      )}
      <FAQ />
      <Footer />
    </main>
  );
}
