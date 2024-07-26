const ClientFeedbackSection = () => {
  return (
    <section className="p-16 flex justify-center items-center bg-gradient-to-b from-black to-primary-purple2/90">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-8">
        <div className="flex-1">
          <img
            src="../images/female-dj-red.webp"
            alt="DJ en acción"
            className="w-full md:w-auto md:max-w-full shadow-md custom-red-shadow"
          />
        </div>
        <div className="flex-1 text-center md:text-left">
          <blockquote className="italic text-lg md:text-xl lg:text-2xl text-shadow text-shadow-blur-2 p-4 rounded-lg">
            "Revelación ha sido fundamental para nuestra carrera, dándonos la exposición y los recursos que
            necesitábamos para crecer."
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default ClientFeedbackSection;
