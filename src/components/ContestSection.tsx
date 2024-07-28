'use client';

const ContestSection = () => {
  const handleParticipate = () => {
    window.open('https://forms.gle/CcLD5iS5fauhb6TK6', '_blank');
  };

  return (
    <section
      id="contest"
      className="min-h-screen flex justify-center items-center p-6 bg-cover bg-center"
      style={{ backgroundImage: "url('/images/concert-1.webp')" }}
    >
      <div className="max-w-5xl flex flex-col md:flex-row items-center gap-16">
        <div className="flex-1 text-center md:text-left">
          <h3 className="mb-4 text-4xl font-bold text-primary-purple2 text-shadow text-shadow-x-[-1px] text-shadow-blur-4">
            ¿Sos DJ o Raver?
          </h3>
          <p className="text-xl text-shadow text-shadow-x-[-1px] text-shadow-blur-4">
            Ayúdanos con una breve encuesta para conocerte mejor.
          </p>
        </div>
        <div className="flex-1 flex justify-center">
          <button
            className="px-8 py-4 bg-primary-purple2 font-bold rounded-sm shadow-lg hover:bg-primary-purple transition-colors duration-200"
            onClick={() => handleParticipate()}
          >
            Participar
          </button>
        </div>
      </div>
    </section>
  );
};

export default ContestSection;
