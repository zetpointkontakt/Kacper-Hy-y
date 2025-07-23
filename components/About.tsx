
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="o-mnie" className="py-20 md:py-32 bg-slate-900">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
          O mnie
          <span className="block w-20 h-1 bg-cyan-400 mx-auto mt-2"></span>
        </h2>
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
          <div className="md:w-1/3 flex-shrink-0">
            <img
              src="https://picsum.photos/seed/zpoint/500/500"
              alt="Zdjęcie profilowe"
              className="rounded-full border-4 border-cyan-400 shadow-lg mx-auto w-64 h-64 md:w-80 md:h-80 object-cover"
            />
          </div>
          <div className="md:w-2/3 text-center md:text-left">
            <h3 className="text-2xl font-semibold text-white mb-4">Pasjonat Technologii i Kreatywnego Projektowania</h3>
            <p className="text-lg text-slate-400 mb-4">
              Witaj! Jestem full-stack developerem z pasją do tworzenia eleganckich i funkcjonalnych rozwiązań internetowych. Specjalizuję się w technologiach React i Node.js, łącząc estetykę front-endu z solidnością back-endu.
            </p>
            <p className="text-lg text-slate-400">
              Moim celem jest przekształcanie złożonych problemów w intuicyjne, wydajne i piękne aplikacje. Chętnie podejmuję nowe wyzwania i nieustannie poszerzam swoje horyzonty technologiczne.
            </p>

            
          </div>

        
          
          
        </div>
      </div>
    </section>
  );
};

export default About;
