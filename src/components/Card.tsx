import { formatShortDate } from '@/utils/formatDate';
import Link from 'next/link';
import Image from 'next/image';

interface CardProps {
  name: string;
  date: string;
  imageUrl?: string;
  interviewId: string;
}

const InterviewCard = ({ name, date, imageUrl, interviewId }: CardProps) => {
  return (
    <Link
      className="relative w-full sm:w-[500px] h-80 flex flex-col justify-end p-4 border border-transparent hover:border-primary-purple hover:cursor-pointer transition-all duration-200"
      href={`/entrevistas/${interviewId}`}
    >
      {imageUrl && <Image src={imageUrl} alt={name} fill className="object-cover z-0" />}
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-black opacity-40"></div>
      <div className="relative z-20 flex items-center justify-between text-white text-shadow text-xl">
        <h3 className="text-lg md:text-xl font-title">{name}</h3>
        <p className="text-xs md:text-sm">{formatShortDate(date)}</p>
      </div>
    </Link>
  );
};

export default InterviewCard;
