import React from 'react';
import { FaArrowUp } from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer className="w-full bg-black border-t border-purple-800/30 text-sm">
      <div className="container mx-auto px-4 py-6 flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="text-purple-200/60">
          © {new Date().getFullYear()} Obay Rashad. All Rights Reserved.
        </p>
        <a 
          href="#" 
          className="flex items-center gap-2 text-purple-200/80 hover:text-yellow-300 transition-colors duration-300 font-ui tracking-wider"
        >
          Return to Top <FaArrowUp />
        </a>
      </div>
    </footer>
  );
};

export default Footer; 