'use client';

import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import Image from 'next/image';
import useGetInterview from '@/hooks/useGetInterview';
import Loader from '@/components/Loader';
import { formatInterviewText } from '@/utils/formatInterview';
import { formatDate } from '@/utils/formatDate';

const InterviewPage = ({ params }: { params: { id: string } }) => {
  const { interview, loading, error } = useGetInterview(params.id);

  return (
    <main className="min-w-[320px]">
      <NavBar />
      <section className="pt-36 min-h-screen px-4 md:px-20 flex flex-col items-center bg-primary-white text-primary-black">
        {loading ? (
          <div className="min-h-[400px] flex justify-center items-center">
            <Loader variant="white" />
          </div>
        ) : error ? (
          <div className="text-center py-10">Error: {error}</div>
        ) : interview ? (
          <div className="flex flex-col mb-28 gap-8 lg:ml-32 lg:pr-80 relative">
            <h2 className="font-title text-4xl">{interview.name}</h2>
            <p className="bg-primary-gray font-mono text-md text-gray-600">
              {formatDate(interview.created_at)}
            </p>
            <div className="flex justify-between items-center gap-28">
              <p className="text-lg">{interview.intro}</p>
            </div>

            <Image src={interview.image} alt={interview.name} width={700} height={500} />

            <div className="text-lg">{formatInterviewText(JSON.parse(interview.interview_text))}</div>

            {/* <Image
              src="/sponsor.jpg"
              alt="Sponsor"
              width={150}
              height={150}
              className="lg:absolute right-11 top-12 mb-10 md:mb-0"
            /> */}
          </div>
        ) : (
          <div className="text-center py-10">Nota no encontrada</div>
        )}
      </section>
      <Footer />
    </main>
  );
};

export default InterviewPage;
