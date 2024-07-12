import React, { useState } from 'react';

const Accordion = ({ title, answer }: { title: string; answer: string }) => {
  const [accordionOpen, setAccordionOpen] = useState(false);

  const formattedAnswer = answer.split('\n').map((line, index) => (
    <React.Fragment key={index}>
      {line}
      <br />
    </React.Fragment>
  ));

  return (
    <div className="py-6 border border-transparent border-t-primary-gray mb-4">
      <button onClick={() => setAccordionOpen(!accordionOpen)} className="flex justify-between w-full ">
        <span className="font-bold text-primary-purple2">{title}</span>
        {/* {accordionOpen ? <span>-</span> : <span>+</span>} */}
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
        className={`grid mt-6 pr-8 overflow-hidden transition-all duration-300 ease-in-out text-primary-white text-sm ${
          accordionOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="overflow-hidden">{formattedAnswer}</div>
      </div>
    </div>
  );
};

export default Accordion;
