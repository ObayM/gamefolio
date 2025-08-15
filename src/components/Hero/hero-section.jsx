'use client'; // This component now uses a client-side hook for parallax
import React from 'react';
import DuelistCard from './duelist-card';
import { motion, useScroll, useTransform } from 'framer-motion';

const HeroSection = () => {
  // Simple parallax effect on scroll
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);

  return (
    <section
      id="summoning-circle"
      className="min-h-screen w-full flex items-center justify-center relative overflow-hidden p-4 font-sans bg-neutral-900"
    >
      <motion.div
        className="absolute inset-0"
        style={{ y }} 
      >
        <div className="absolute inset-0 bg-[url('/background-pattern.svg')] opacity-10"></div>
        <div className="absolute inset-0 bg-radial-gradient(ellipse_at_center,rgba(40,20,60,0.8),#0a0a0a_70%)"></div>
      </motion.div>

      <div className="z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
        <div className="flex justify-center md:justify-end">
          <DuelistCard />
        </div>

        <div className="text-center md:text-left">
          <h1 className="text-4xl lg:text-6xl font-bold uppercase tracking-wider text-shadow-glow font-heading">

            <span className="bg-gradient-to-r from-purple-400 to-purple-200 text-transparent bg-clip-text">
              It's My Turn
            </span>
            <br />
            <span className="bg-gradient-to-r from-yellow-400 to-yellow-200 text-transparent bg-clip-text">
              To Build!
            </span>
          </h1>
          <p className="mt-6 text-lg text-gray-300 max-w-lg">
            Welcome to my portfolio. this is so funny and doesn't represnt me in a professional way, but I love it, and I hope you do too!
            go here <a href='obay.site' className='text-purple-400 underline'>obay.site</a> to see my real portfolio.
          </p>
          <a
            href="#the-deck"
            className="link-underline mt-8 inline-block px-10 py-4 bg-gradient-to-r from-yellow-400 to-amber-500 text-black font-bold uppercase rounded-md shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-yellow-400/50 focus:outline-none focus:ring-2 focus:ring-yellow-300 font-ui"
          >
            Draw Phase!
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;