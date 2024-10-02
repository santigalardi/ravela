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
      className="relative w-[500px] h-80 flex flex-col justify-end p-2 border border-transparent hover:border-primary-purple hover:cursor-pointer transition-all duration-200"
      href={`/entrevistas/${interviewId}`}
    >
      {imageUrl && <Image src={imageUrl} alt={name} fill className="object-cover z-0" sizes="500px" />}
      <div className="absolute inset-0 z-10"></div>
      <div className="relative z-20 flex items-center justify-between text-white text-shadow text-shadow-x-1 text-shadow-blur-6 text-xl">
        <h3 className="text-xl font-title">{name}</h3>
        <p className="text-sm">{formatShortDate(date)}</p>
      </div>
    </Link>
  );
};

export default InterviewCard;
