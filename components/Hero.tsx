import React, { useState, useEffect, useRef } from 'react';
import './main.css';

// Declare Vanta and THREE to satisfy TypeScript since they are loaded from a script tag
declare const VANTA: any;
declare const THREE: any;

const Hero: React.FC = () => {
  const vantaRef = useRef(null);
  const [vantaEffect, setVantaEffect] = useState<any>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (!vantaEffect && vantaRef.current) {
      setVantaEffect(
        VANTA.NET({
          el: vantaRef.current,
          THREE: THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          backgroundColor: 0x2b40f9,
          color1: 0xffffff,
          color2: 0x2b40f9,
          colorMode: "lerp",
          birdSize: 1.2,
          speedLimit: 7.0,
          alignment: 24.0,
        })
      );
    }

    // Trigger animations after component mounts
    setTimeout(() => setIsLoaded(true), 100);

    // Cleanup function to destroy the Vanta effect when the component unmounts
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [vantaEffect]);

  return (
    <section id="hero" ref={vantaRef} className="h-screen w-full flex items-center justify-center text-center text-white relative overflow-hidden">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center justify-between z-10">

        {/* Tekst po lewej stronie */}
    <div className={`lg:w-1/2 mb-8 lg:mb-0 transform transition-all duration-1000 ease-out ${isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'}`}>
  <div className="bg-gradient-to-br from-cyan-500/30 via-blue-700/20 to-indigo-800/40 p-8 rounded-2xl shadow-lg backdrop-blur-md">
    <h1 className={`text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight mb-4 transform transition-all duration-1200 delay-300 ease-out ${isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'}`}>
      Z<span className="text-cyan-400">.</span>Point
    </h1>
    <p className={`text-lg md:text-xl lg:text-2xl text-slate-200 mb-8 max-w-2xl transform transition-all duration-1200 delay-500 ease-out ${isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'}`}>
      Tworzymy Innowacyjne Rozwiązania Cyfrowe Dopasowane do Twoich Potrzeb
    </p>
    <a
      href="#o-mnie"
      className={`inline-block bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 ease-in-out transform hover:scale-105 ${isLoaded ? 'translate-x-0 opacity-100 scale-100' : '-translate-x-20 opacity-0 scale-90'}`}
      style={{ transitionDelay: '700ms' }}
    >
      Dowiedz się więcej
    </a>
  </div>
</div>

        {/* Zdjęcie po prawej stronie */}
        <div className={`lg:w-1/2 flex justify-center lg:justify-end transform transition-all duration-1000 delay-200 ease-out ${isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
          }`}>
          <div className="relative">
            {/* Glowing effect behind photo */}
            <div className="absolute inset-0 bg-[rgba(34,211,238,0.2)] rounded-full blur-xl opacity-10 animate-pulse"></div>

            <div className={`transform transition-all duration-1000 delay-400 ease-out ${isLoaded ? 'scale-100 rotate-0' : 'scale-75 -rotate-12'
              }`}>
              <img
                src="/public/ja.png"
                alt="Zdjęcie profilowe"
                className="w-[36rem] h-[48rem] object-cover hover:scale-110 transition-transform duration-500 ease-in-out"
              />
            </div>

            {/* Floating elements around photo */}
            <div className={`absolute -top-4 -right-4 w-8 h-8 bg-cyan-400 rounded-full animate-bounce transform transition-all duration-1000 delay-800 ease-out ${isLoaded ? 'opacity-70 scale-100' : 'opacity-0 scale-0'
              }`}></div>
            <div className={`absolute -bottom-6 -left-6 w-6 h-6 bg-white rounded-full animate-pulse transform transition-all duration-1000 delay-1000 ease-out ${isLoaded ? 'opacity-50 scale-100' : 'opacity-0 scale-0'
              }`}></div>
            <div className={`absolute top-1/2 -left-8 w-4 h-4 bg-cyan-300 rounded-full animate-ping transform transition-all duration-1000 delay-1200 ease-out ${isLoaded ? 'opacity-60 scale-100' : 'opacity-0 scale-0'
              }`}></div>
          </div>
        </div>
      </div>



      {/* Custom CSS for slow spin animation */}
      <style jsx>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .animate-spin-slow {
          animation: spin-slow 10s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;