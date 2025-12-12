import React from 'react';
import Button from './mbutton';
const Hero = () => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      <div className="relative z-10 flex min-h-screen items-center justify-center px-4">
        <div className="max-w-6xl text-center">

          {/* Main Headline */}
          <h1 className="mb-8 text-5xl font-light leading-none tracking-wide text-white sm:text-6xl md:text-7xl lg:text-8xl">
            The only{' '}
            <span className="font-light text-teal-400">B-School</span>
            <br />
            for founders,
            <br />
            not{' '}
            <span className="font-light italic text-amber-200">managers</span>
          </h1>

          {/* Subheading */}
          <p className="mb-12 align-text-bottom leading-tight text-left 
           text-[12px] sm:text-[14px] md:text-[16px]
           font-light text-white">
            Get ready to {' '}
            <span className="text-teal-400">start building</span>
            <br />
            A 45-day program for students, early founders, <br/>creators & professionals who want more.
          </p>

          {/* CTA Button */}
          <div className="flex justify-center">
            <Button />
          </div>

        </div>
      </div>

    </div>
  );
};

export default Hero;
