'use client';
import React from 'react';
import { motion } from 'framer-motion';

const StatCard = ({ icon, value, label, description }) => {
  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty('--mouse-x', `${x}px`);
    card.style.setProperty('--mouse-y', `${y}px`);
  };

  return (
    <motion.div
      className="glow-card bg-purple-900/30 backdrop-blur-sm border border-purple-700/50 rounded-lg p-6 text-center transform transition-all duration-300 hover:bg-purple-900/50 hover:-translate-y-2"
      onMouseMove={handleMouseMove}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, amount: 0.5 }}
    >
      <div className="text-purple-300 mb-3 flex justify-center">{icon}</div>
      <p className="text-4xl md:text-5xl font-ui font-bold text-yellow-300 text-shadow-glow">
        {value}
      </p>
      <h4 className="mt-2 text-lg font-ui uppercase tracking-wider text-white">
        {label}
      </h4>
      <p className="mt-1 text-sm text-purple-200/80">{description}</p>
    </motion.div>
  );
};

export default StatCard;