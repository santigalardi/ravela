'use client';

import { Fragment, useState } from 'react';

const Accordion = ({ title, answer }: { title: string; answer: string }) => {
  const [accordionOpen, setAccordionOpen] = useState(false);

  const formattedAnswer = answer.split('\n').map((line, index) => (
    <Fragment key={index}>
      {line}
      <br />
    </Fragment>
  ));

  return (
    <div className="py-6 mx-4 border border-transparent border-t-primary-gray border-double">
      <button
        onClick={() => setAccordionOpen(!accordionOpen)}
        className="flex justify-between items-center w-full"
      >
        <span className="font-subtitle font-bold text-primary-purple2 text-start  text-md md:text-xl">
          {title}
        </span>
        <svg
          className="fill-primary-purple2 shrink-0 ml-8"
          width="16"
          height="16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center transition duration-200 ease-out ${accordionOpen && '!rotate-180'}`}
          />
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center rotate-90 transition duration-200 ease-out ${
              accordionOpen && '!rotate-180'
            }`}
          />
        </svg>
      </button>
      <div
        className={`grid mt-6 pr-6 overflow-hidden transition-all duration-300 ease-in-out text-primary-white text-sm md:text-lg ${
          accordionOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="overflow-hidden">{formattedAnswer}</div>
      </div>
    </div>
  );
};

export default Accordion;
