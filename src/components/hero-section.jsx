import React from 'react';
import DuelistCard from './duelist-card';


const HeroSection = () => {
  return (
    <section
      id="summoning-circle"
      className="min-h-screen w-full flex items-center justify-center relative overflow-hidden p-4 font-[--font-sans]"
    >
      <div className="absolute inset-0 bg-[url('/background-pattern.svg')] opacity-10"></div>
      <div className="absolute inset-0 bg-radial-gradient(ellipse_at_center,rgba(40,20,60,0.8),#0a0a0a_70%)"></div>

      <div className="z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
        <div className="flex justify-center md:justify-end">
          <DuelistCard />
        </div>

        <div className="text-center md:text-left">
          <h1 className="text-4xl lg:text-6xl font-bold uppercase tracking-wider text-shadow-glow font-[--font-heading]">
            <span className="text-purple-300">It's My Turn</span>
            <br />
            <span className="text-yellow-300">To Build!</span>
          </h1>
          <p className="mt-6 text-lg text-gray-300 max-w-lg">
            Welcome to my portfolio. I treat every project like a duel: with
            strategy, passion, and a powerful deck of technologies.
          </p>
          <a
            href="#the-deck"
            className="mt-8 inline-block px-10 font-ui py-4 bg-gradient-to-r from-yellow-400 to-amber-500 text-black font-bold uppercase rounded-md shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-yellow-400/50 focus:outline-none focus:ring-2 focus:ring-yellow-300"
          >
            Draw Phase!
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;