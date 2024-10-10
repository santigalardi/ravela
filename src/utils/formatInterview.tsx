import Image from 'next/image';
import SoundcloudPlayer from '@/components/SoundcloudPlayer';

const IMAGE_PLACEHOLDER_URL = '/sponsor.jpg';

export const formatInterviewText = (
  interviewText: { questions: { question: string; answer: string }[] },
  images: string[],
  soundcloudPlayer?: string
) => {
  let totalCharCount = 0;
  let imageIndex = 0;
  let soundcloudRendered = false; // Variable para rastrear si ya hemos renderizado el reproductor de SoundCloud

  return (
    <div className="flex flex-col gap-6">
      {interviewText.questions.map((q, index) => {
        totalCharCount += q.answer.length;

        const shouldShowImage = totalCharCount >= 1500 && totalCharCount % 1500 < q.answer.length;

        const renderedQuestion = (
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

            {/* Verificar si debemos mostrar el reproductor de SoundCloud o la imagen */}
            {shouldShowImage && (
              <div className="flex py-6">
                {!soundcloudRendered && soundcloudPlayer ? (
                  // Renderizar el reproductor de SoundCloud solo la primera vez
                  <SoundcloudPlayer src={soundcloudPlayer} />
                ) : (
                  // Renderizar la imagen si no hay reproductor de SoundCloud o ya se ha renderizado
                  <Image
                    src={images ? images[imageIndex] : IMAGE_PLACEHOLDER_URL}
                    alt={`Interview image ${imageIndex + 1}`}
                    width={600}
                    height={400}
                    className="object-cover"
                  />
                )}
              </div>
            )}
          </div>
        );

        // Actualizar el índice de la imagen si no hemos mostrado el reproductor de SoundCloud
        if (shouldShowImage) {
          if (!soundcloudRendered && soundcloudPlayer) {
            soundcloudRendered = true; // Marcar que el reproductor ha sido renderizado
          } else {
            imageIndex = (imageIndex + 1) % images?.length;
          }
        }

        return renderedQuestion;
      })}
    </div>
  );
};
