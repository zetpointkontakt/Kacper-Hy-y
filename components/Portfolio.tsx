
import React from 'react';

const portfolioItems = [
  {
    title: 'Aplikacja E-commerce',
    description: 'Nowoczesna platforma sprzedażowa z panelem administracyjnym i integracją płatności.',
    tags: ['React', 'Node.js', 'PostgreSQL'],
    imageUrl: 'https://picsum.photos/seed/project1/600/400',
  },
  {
    title: 'System Rezerwacji Online',
    description: 'Aplikacja do rezerwacji wizyt i zarządzania kalendarzem dla firm usługowych.',
    tags: ['Next.js', 'TypeScript', 'Firebase'],
    imageUrl: 'https://picsum.photos/seed/project2/600/400',
  },
  {
    title: 'Blog Technologiczny',
    description: 'Dynamiczna strona blogowa z systemem CMS do łatwego zarządzania treścią.',
    tags: ['Gatsby', 'GraphQL', 'TailwindCSS'],
    imageUrl: 'https://picsum.photos/seed/project3/600/400',
  },
  {
    title: 'Dashboard Analityczny',
    description: 'Panel do wizualizacji i analizy danych w czasie rzeczywistym.',
    tags: ['React', 'D3.js', 'WebSocket'],
    imageUrl: 'https://picsum.photos/seed/project4/600/400',
  },
];

const PortfolioCard: React.FC<typeof portfolioItems[0]> = ({ title, description, tags, imageUrl }) => (
  <div className="group relative overflow-hidden rounded-lg shadow-lg bg-slate-800 transform transition-transform duration-500 hover:scale-105">
    <img src={imageUrl} alt={title} className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110" />
    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
    <div className="absolute bottom-0 left-0 p-6 text-white">
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-sm text-slate-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300 max-h-0 group-hover:max-h-40 overflow-hidden">{description}</p>
      <div className="flex flex-wrap gap-2 mt-4">
        {tags.map((tag) => (
          <span key={tag} className="bg-cyan-500/20 text-cyan-300 text-xs font-semibold px-2 py-1 rounded-full">
            {tag}
          </span>
        ))}
      </div>
    </div>
  </div>
);

const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="py-20 md:py-32 bg-slate-800/50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
          Portfolio
          <span className="block w-20 h-1 bg-cyan-400 mx-auto mt-2"></span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {portfolioItems.map((item) => (
            <PortfolioCard key={item.title} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
