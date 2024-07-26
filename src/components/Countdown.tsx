'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import LocationLogo from '@/assets/images/fulano-wordmark.png';
import Link from 'next/link';

const Countdown: React.FC = () => {
  const targetDate = new Date('2024-07-27T17:00:00').getTime();
  const now = new Date().getTime();
  const difference = targetDate - now;

  const formattedDate = new Date(targetDate).toLocaleDateString('es-ES', {
    day: 'numeric',
    month: 'long',
  });

  const formattedTime = new Date(targetDate).toLocaleTimeString('es-ES', {
    hour: 'numeric',
    minute: 'numeric',
  });

  const calculateTimeLeft = () => {
    let timeLeft = {
      days: '00',
      hours: '00',
      minutes: '00',
      seconds: '00',
    };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24))
          .toString()
          .padStart(2, '0'),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24)
          .toString()
          .padStart(2, '0'),
        minutes: Math.floor((difference / 1000 / 60) % 60)
          .toString()
          .padStart(2, '0'),
        seconds: Math.floor((difference / 1000) % 60)
          .toString()
          .padStart(2, '0'),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="pt-20 pb-40 md:pb-30  flex flex-col gap-y-10 justify-center items-center">
      <p className="text-center text-xl md:text-2xl p-4">
        Próximo evento de Ravela {formattedDate} a las {formattedTime} en...
      </p>

      <Link href="https://www.instagram.com/fulanocafe/?hl=es" target="_blank">
        <Image src={LocationLogo} alt="Ravela Logo" width={900} className="p-4"></Image>
      </Link>

      <div className="flex flex-row gap-x-1 text-primary-white uppercase font-semibold">
        {difference <= 0 ? (
          <div>
            <h3 className="text-xl">¡El evento ha comenzado!🎉</h3>
          </div>
        ) : (
          <>
            <div className="flex flex-col justify-center items-center gap-y-2 w-16">
              <span className="text-4xl tabular-nums">{timeLeft.days}</span>
              <span className="text-xs text-center">Días</span>
            </div>

            <span aria-hidden="true" className="mt-1 text-xl">
              :
            </span>

            <div className="flex flex-col justify-center items-center gap-y-2 w-16">
              <span className="text-4xl tabular-nums">{timeLeft.hours}</span>
              <span className="text-xs text-center">Horas</span>
            </div>

            <span aria-hidden="true" className="mt-1 text-xl">
              :
            </span>

            <div className="flex flex-col justify-center items-center gap-y-2 w-16">
              <span className="text-4xl tabular-nums">{timeLeft.minutes}</span>
              <span className="text-xs text-center">Minutos</span>
            </div>

            <span aria-hidden="true" className="mt-1 text-xl">
              :
            </span>

            <div className="flex flex-col justify-center items-center gap-y-2 w-16">
              <span className="text-4xl tabular-nums">{timeLeft.seconds}</span>
              <span className="text-xs text-center">Segundos</span>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default Countdown;
