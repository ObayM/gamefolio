'use client';
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { HiChevronDown } from 'react-icons/hi2';

const ProjectAccordion = ({ project, isExpanded, onToggle }) => {
  return (
    <motion.div
      layout
      className="rounded-lg overflow-hidden border border-purple-700/50 bg-purple-950/20 backdrop-blur-sm"
    >
      <motion.header
        initial={false}
        onClick={onToggle}
        className="p-4 flex justify-between items-center cursor-pointer hover:bg-purple-900/40 transition-colors duration-300"
      >
        <div>
          <h3 className="text-xl font-ui text-yellow-300 tracking-wider">
            {project.title}
          </h3>
          <p className="text-sm text-purple-200/80">{project.type}</p>
        </div>
        <motion.div
          animate={{ rotate: isExpanded ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <HiChevronDown className="w-6 h-6 text-yellow-400" />
        </motion.div>
      </motion.header>

      <AnimatePresence initial={false}>
        {isExpanded && (
          <motion.section
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: 'auto' },
              collapsed: { opacity: 0, height: 0 },
            }}
            transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
            className="overflow-hidden"
          >
            <div className="p-5 border-t border-purple-700/50 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="holo-card group relative aspect-video rounded-md overflow-hidden border-2 border-purple-800">
                <div className="holo-effect">
                  <img
                    src={project.image}
                    alt={`${project.title} screenshot`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </div>

              <div className="flex flex-col">
                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-purple-900/50 text-purple-200 text-xs font-semibold px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-4 mt-auto">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-yellow-300 hover:text-white transition-colors duration-300"
                    >
                      <FaExternalLinkAlt /> Live Demo
                    </a>
                  )}
                  {project.repoUrl && (
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-yellow-300 hover:text-white transition-colors duration-300"
                    >
                      <FaGithub /> View Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          </motion.section>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default ProjectAccordion;