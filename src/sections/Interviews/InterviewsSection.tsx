import InterviewCard from '@/components/Card';
import { Interview } from '@/hooks/useGetInterviews';

interface InterviewsSectionProps {
  interviews: Interview[];
}

const InterviewsSection = ({ interviews }: InterviewsSectionProps) => {
  return (
    <section className="mb-12">
      <h2 className="font-title text-4xl font-bold text-center text-shadow mb-20">Entrevistas</h2>
      <div className="flex flex-col gap-10 md:gap-32 md:flex-row flex-wrap items-center justify-center mb-32">
        {interviews.map(({ id, name, created_at, image }) => (
          <InterviewCard key={id} name={name} date={created_at} imageUrl={image} interviewId={id} />
        ))}
      </div>
    </section>
  );
};

export default InterviewsSection;
