import React from 'react';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa6';
import { HiOutlineMail } from 'react-icons/hi';

const socialLinks = [
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/obay-dev',
    icon: FaLinkedin,
  },
  {
    name: 'GitHub',
    url: 'https://github.com/ObayM',
    icon: FaGithub,
  },
];

const ContactSection = () => {
  return (
    <section id="contact" className="w-full py-20 md:py-32 bg-black relative">
      <div className="absolute inset-0 bg-gradient-to-t from-black via-purple-950/60 to-black"></div>
      <div className="absolute inset-0 bg-[url('/background-pattern.svg')] opacity-10 rotate-180"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-heading text-white text-shadow-glow">
            End Phase
          </h2>
          <p className="mt-4 text-lg text-purple-200/80 max-w-2xl mx-auto">
            Ready to collaborate or discuss something? Let's connect.
          </p>
        </div>

        <div className="max-w-2xl mx-auto bg-purple-950/20 backdrop-blur-md border border-purple-700/50 rounded-lg p-8 text-center shadow-2xl shadow-purple-900/20">
          <h3 className="text-2xl font-ui text-yellow-300 tracking-wider mb-4">
            Get in Touch
          </h3>
          <p className="text-gray-300 mb-8">
            The most reliable way and the fastest to reach me is through email. I'll respond as soon as I can, don't histate to reach out!
          </p>
          
          <a
            href="mailto:obay.rashad@gmail.com" 
            className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-yellow-400 to-amber-500 text-black font-bold uppercase rounded-md shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-yellow-400/50 focus:outline-none focus:ring-2 focus:ring-yellow-300 font-ui"
          >
            <HiOutlineMail className="w-6 h-6 transition-transform duration-300 group-hover:rotate-[-15deg] group-hover:scale-110" />
            Obay.rashad@gmail.com
          </a>

          <hr className="border-t-2 border-purple-800/60 my-10" />

          <h3 className="text-xl font-ui text-purple-200 tracking-wider mb-6">
            Or find me here
          </h3>
          <div className="flex items-center justify-center gap-8">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                className="text-purple-300 hover:text-yellow-300 transform transition-all duration-300 hover:scale-125"
              >
                <social.icon size={32} />
              </a>
            ))}

          </div>
          <p className="text-gray-300 text-sm mt-6">
              I am not active on Twitter, instagram, or Facebook, I don't advise you to reach me there as I don't check them often.
            </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;