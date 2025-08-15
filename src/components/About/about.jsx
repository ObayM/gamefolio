'use client';
import React from 'react';
import StatCard from './stat-card';
import { motion } from 'framer-motion';

import { FaUserGraduate, FaGithub, FaTrophy, FaAward } from 'react-icons/fa6';

const AboutSection = () => {
  return (
    <section
      id="about"
      className="w-full py-20 md:py-32 bg-neutral-950 relative min-h-screen"
    >
      <div className="absolute inset-0 bg-gradient-to-t from-black via-purple-950/50 to-black opacity-70"></div>
      <div className="absolute inset-0 bg-[url('/background-pattern.svg')] opacity-10 rotate-180"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-heading text-white">
            Duelist Profile
          </h2>

          <motion.div
            className="mt-2 w-24 h-1 bg-purple-500 mx-auto rounded-full"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            viewport={{ once: true }}
            style={{ originX: 0.5 }}
          />
        </div>

        <div className="max-w-3xl mx-auto text-center text-lg md:text-xl text-gray-300 leading-relaxed">
          <p>
            {"an ordinary or specail kid who call himself a software developer, he is just building shit and have some cool skills, that might be a use in the future before AI replaces us :))"}
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          <StatCard
            icon={<FaUserGraduate size={24} />}
            value="16"
            label="Current Level"
            description="16 years of experience in this life!"
          />
          <StatCard
            icon={<FaGithub size={24} />}
            value="40+"
            label="Code experiments"
            description="Public repositories on GitHub."
          />
          <StatCard
            icon={<FaTrophy size={24} />}
            value="15+"
            label="Duels won"
            description="Successfully completed projects."
          />
          <StatCard
            icon={<FaAward size={24} />}
            value="1x"
            label="Hackathon wins"
            description="Winner of a competitive hackathon (NASA Space Apps)."
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;