'use client';

import Footer from '@/components/Footer';
import NavBar from '@/components/NavBar';
import InterviewsSection from '@/sections/Interviews/InterviewsSection';
import useGetInterviews from '@/hooks/useGetInterviews';
import Loader from '@/components/Loader';

const InterviewsPage = () => {
  const { interviews, loading, error } = useGetInterviews();

  return (
    <main className="min-w-[320px]">
      <NavBar />
      <section className="pt-28 flex flex-col">
        {loading ? (
          <div className="min-h-[400px] flex justify-center items-center">
            <Loader />
          </div>
        ) : error ? (
          <div className="text-center py-10">Error: {error}</div>
        ) : (
          <InterviewsSection interviews={interviews} />
        )}
      </section>
      <Footer />
    </main>
  );
};

export default InterviewsPage;
