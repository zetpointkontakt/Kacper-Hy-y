
import React from 'react';
import { GitHubIcon, LinkedInIcon, TwitterIcon } from './icons';

const Contact: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Tutaj logika wysyłania formularza
    alert('Dziękujemy za wiadomość! (To jest demonstracja)');
  };

  return (
    <section id="kontakt" className="py-20 md:py-32 bg-slate-800/50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
          Kontakt
          <span className="block w-20 h-1 bg-cyan-400 mx-auto mt-2"></span>
        </h2>
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-12">
          {/* Contact Form */}
          <div className="flex-1">
            <h3 className="text-2xl font-semibold text-white mb-6">Napisz do mnie</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
                  Imię
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  className="w-full bg-slate-700 border border-slate-600 rounded-md py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  className="w-full bg-slate-700 border border-slate-600 rounded-md py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
                  Wiadomość
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows={5}
                  required
                  className="w-full bg-slate-700 border border-slate-600 rounded-md py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-3 px-6 rounded-md transition-colors duration-300"
              >
                Wyślij wiadomość
              </button>
            </form>
          </div>

          {/* Socials */}
          <div className="flex-1 md:pl-10">
            <h3 className="text-2xl font-semibold text-white mb-6">Znajdź mnie na</h3>
            <p className="text-slate-400 mb-6">
              Zapraszam do połączenia się na platformach społecznościowych. Chętnie odpowiem na pytania i porozmawiam o potencjalnej współpracy.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors">
                <TwitterIcon className="w-8 h-8" />
              </a>
              <a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors">
                <GitHubIcon className="w-8 h-8" />
              </a>
              <a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors">
                <LinkedInIcon className="w-8 h-8" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
