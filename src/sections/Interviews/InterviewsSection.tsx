'use client';

import InterviewCard from '@/components/Card';
import { Interview } from '@/hooks/useGetInterviews';
import { usePathname } from 'next/navigation';

interface InterviewsSectionProps {
  interviews: Interview[];
}

const InterviewsSection = ({ interviews }: InterviewsSectionProps) => {
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  return (
    <section className="pt-10 mb-12 relative overflow-hidden">
      <h2 className="font-title text-4xl font-bold text-center text-shadow mb-20 relative z-10">
        Entrevistas
      </h2>
      {isHomePage && (
        <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover z-0">
          <source src="/videos/textura-2.mp4" type="video/mp4" />
        </video>
      )}

      <div className="relative z-10 flex flex-col gap-10 md:gap-32 md:flex-row flex-wrap items-center justify-center mb-32">
        {interviews.map(({ id, name, created_at, image }) => (
          <InterviewCard key={id} name={name} date={created_at} imageUrl={image} interviewId={id} />
        ))}
      </div>
    </section>
  );
};

export default InterviewsSection;
