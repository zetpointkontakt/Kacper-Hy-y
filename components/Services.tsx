
import React from 'react';

const services = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
    ),
    title: 'Projektowanie Stron WWW',
    description: 'Tworzymy responsywne i nowoczesne strony internetowe, które świetnie wyglądają na każdym urządzeniu.',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
    ),
    title: 'Aplikacje Webowe',
    description: 'Budujemy zaawansowane aplikacje webowe w oparciu o React i Next.js, dostosowane do indywidualnych potrzeb biznesowych.',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>
    ),
    title: 'UI/UX Design',
    description: 'Projektujemy intuicyjne i estetyczne interfejsy użytkownika, które zapewniają najlepsze doświadczenia.',
  },
];

const ServiceCard: React.FC<typeof services[0]> = ({ icon, title, description }) => (
  <div className="bg-slate-800 p-8 rounded-lg shadow-lg text-center transform transition-all duration-300 hover:-translate-y-2 hover:shadow-cyan-500/20">
    <div className="inline-block text-cyan-400 bg-slate-700 p-4 rounded-full mb-6">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
    <p className="text-slate-400">{description}</p>
  </div>
);

const Services: React.FC = () => {
  return (
    <section id="uslugi" className="py-20 md:py-32 bg-slate-900">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
          Usługi
          <span className="block w-20 h-1 bg-cyan-400 mx-auto mt-2"></span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
