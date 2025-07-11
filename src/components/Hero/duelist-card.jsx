import React from 'react';
import Image from 'next/image';

const Star = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-5 h-5 text-yellow-400"
  >
    <path
      fillRule="evenodd"
      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.116 3.986 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.116-3.986c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.007z"
      clipRule="evenodd"
    />
  </svg>
);

const DuelistCard = () => {
  const level = 8;

  return (
    <div className="w-full max-w-sm rounded-lg overflow-hidden bg-gradient-to-br from-orange-400 to-amber-600 p-1.5 shadow-2xl shadow-yellow-700/40 transform transition-all hover:scale-105 duration-500 hover:shadow-yellow-500/60 font-[--font-sans]">
      <div className="bg-amber-800 rounded-t-md flex items-center justify-between p-1">
        <h2 className="text-lg font-bold text-white uppercase tracking-wider pl-2 font-[--font-ui]">
          Obay Rashad
        </h2>
        <div className="w-8 h-8 rounded-full bg-red-700 flex items-center justify-center font-[--font-ui] text-white font-black text-xs border-2 border-amber-900">
          DEV
        </div>
      </div>

      <div className="flex justify-end px-2 py-1 bg-amber-700">
        <div className="flex gap-0.5">
          {Array.from({ length: level }).map((_, index) => (
            <Star key={index} />
          ))}
        </div>
      </div>

      <div className="p-1 bg-black">
        <div className="relative w-full aspect-square border-2 border-amber-900">
          <Image
            src="/avatar.png"
            alt="A portrait of the duelist"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>

      <div className="bg-amber-100 p-2 border-t-4 border-amber-800">
        <div className="border border-amber-800 p-2 text-black">
          <h3 className="font-bold text-sm font-[--font-ui]">[ DEVELOPER / CREATOR ]</h3>
          <p className="text-xs italic mt-1 h-16">
            A versatile programmer who can adapt to any tech stack. Fuses logic
            and creativity to build robust and beautiful applications.
          </p>
          <hr className="border-t border-amber-800 my-1" />
          <div className="flex justify-end text-sm font-[--font-ui] gap-4">
            <span>ATK/ 9500</span>
            <span>DEF/ 8000</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DuelistCard;