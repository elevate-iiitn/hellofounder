"use client";

import React from "react";
import { motion } from "framer-motion";
import Button from "./mbutton";
import { koulen } from "@/lib/fonts";

const Hero = () => {
  return (
    <section className="relative min-h-[55vh] md:min-h-[60vh] w-full overflow-hidden">

      <div className="relative z-10 flex h-full items-start justify-center px-4 pt-20">

        <div className="max-w-6xl text-center">
          {/* Main Headline */}
          <h1
            className={`${koulen.className} relative mb-6 text-5xl leading-none tracking-wide text-white sm:text-6xl md:text-7xl lg:text-8xl`}
          >
            The only <span className="font-light text-teal-400">B-School</span>
            <br />
            for founders,
            <br />
            not{" "}
            <span className="relative inline-block italic text-amber-200">
              managers
              <motion.svg
                viewBox="0 0 340 50"
                className="pointer-events-none absolute left-0 top-1/2 w-full -translate-y-1/2"
              >
                <motion.path
                  d="M12 26 L328 24"
                  fill="none"
                  stroke="#E25555"
                  strokeWidth="3"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{
                    delay: 1.2,
                    duration: 2,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                />
              </motion.svg>
            </span>
          </h1>

          {/* Subheading (kept commented) */}
          {/*
          <p className="mb-8 text-center font-light leading-tight text-white">
            ...
          </p>
          */}

          {/* CTA Button (kept commented) */}
          {/*
          <div className="flex justify-center">
            <Button />
          </div>
          */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
