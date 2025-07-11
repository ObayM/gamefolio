import React from 'react';

const StatCard = ({
  value,
  label,
  description,
}) => {
  return (
    <div className="bg-purple-900/30 backdrop-blur-sm border border-purple-700/50 rounded-lg p-6 text-center transform transition-all duration-300 hover:bg-purple-900/50 hover:-translate-y-2">
      <p className="text-4xl md:text-5xl font-ui font-bold text-yellow-300 text-shadow-glow">
        {value}
      </p>
      <h4 className="mt-2 text-lg font-ui uppercase tracking-wider text-white">
        {label}
      </h4>
      <p className="mt-1 text-sm text-purple-200/80">{description}</p>
    </div>
  );
};

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
          <div className="mt-2 w-24 h-1 bg-purple-500 mx-auto rounded-full"></div>
        </div>

        <div className="max-w-3xl mx-auto text-center text-lg md:text-xl text-gray-300 leading-relaxed">
          <p>
            I'm a software engineer specializing in AI and full-stack
            development. My quest is to forge intelligent, scalable applications
            by mastering modern tools and technologies treating every line of
            code as a card in a strategic deck.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          <StatCard
            value="16"
            label="Current Level"
            description="16 years of experience in life!"
          />
          <StatCard
            value="40+"
            label="Code Grimoires"
            description="Public repositories on GitHub."
          />
          <StatCard
            value="15+"
            label="Duels Won"
            description="Successfully completed projects."
          />
          <StatCard
            value="1x"
            label="Tournament Champion"
            description="Winner of a competitive hackathon."
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;