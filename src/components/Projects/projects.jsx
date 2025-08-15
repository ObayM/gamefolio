'use client';
import React, { useState } from 'react';
import projectsData from './projects.json';
import ProjectAccordion from './project-card';
import { motion } from 'framer-motion';

const ProjectsSection = () => {
  const [expanded, setExpanded] = useState(null);

  const handleToggle = (id) => {
    setExpanded(expanded === id ? null : id);
  };

  return (
    <section id="the-deck" className="w-full py-20 md:py-32 bg-[#0a0a0a] relative">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/40 to-black opacity-80"></div>
      <div className="absolute inset-0 bg-[url('/background-pattern.svg')] opacity-5"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading text-white text-shadow-glow">
            The Deck
          </h2>
          <p className="mt-4 text-lg text-purple-200/80 max-w-2xl mx-auto">
            Each project is a carefully crafted card in my deck, showcasing my skills and creativity. Click to reveal the details!
          </p>
          <motion.div
            className="mt-4 w-24 h-1 bg-yellow-400 mx-auto rounded-full"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            viewport={{ once: true }}
            style={{ originX: 0.5 }}
          />
        </div>

        <div className="max-w-4xl mx-auto flex flex-col gap-4">
          {projectsData.map((project) => (
            <ProjectAccordion
              key={project.id}
              project={project}
              isExpanded={expanded === project.id}
              onToggle={() => handleToggle(project.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;