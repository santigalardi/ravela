// utils/formatInterview.ts
export const formatInterviewText = (interviewText: { questions: { question: string; answer: string }[] }) => {
  return (
    <div className="flex flex-col gap-6">
      {interviewText.questions.map((q, index) => (
        <div key={index} className="mb-4 text-primary-black">
          <p className="font-bold mb-8">{q.question}</p>
          <p className="whitespace-pre-line">
            {q.answer.split('\n').map((line, lineIndex) => (
              <span key={lineIndex}>
                {line}
                <br />
              </span>
            ))}
          </p>
        </div>
      ))}
    </div>
  );
};
