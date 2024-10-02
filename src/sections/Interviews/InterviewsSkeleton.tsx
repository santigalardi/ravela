import SkeletonCard from '@/components/SkeletonCard';

const InterviewsSkeleton = () => {
  return (
    <section className="mb-12">
      <h2 className="font-title text-4xl font-bold text-center text-shadow mb-20">Entrevistas</h2>
      <div className="flex flex-col gap-20 md:gap-32 md:flex-row items-center justify-center mb-32">
        {[1, 2].map((_, index) => (
          <SkeletonCard key={index} />
        ))}
      </div>
    </section>
  );
};

export default InterviewsSkeleton;
