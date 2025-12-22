"use client";

import React from "react";
import { motion } from "framer-motion";
import Button from "./mbutton";
import { koulen } from "@/lib/fonts";

const Hero = () => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      <div className="relative z-10 flex min-h-screen items-center justify-center px-4">
        <div className="max-w-6xl text-center">
          {/* Main Headline */}
          <h1
            className={`${koulen.className} relative mb-8 text-5xl leading-none tracking-wide text-white sm:text-6xl md:text-7xl lg:text-8xl`}
          >
            The only <span className="font-light text-teal-400">B-School</span>
            <br />
            for founders,
            <br />
            not{" "}
            <span className="relative inline-block italic text-amber-200">
              managers
              {/* Pen-driven strike-through */}
              <motion.svg
                viewBox="0 0 340 50"
                className="pointer-events-none absolute left-0 top-1/2 w-full -translate-y-1/2"
              >
                {/* Strike line */}
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

                {/* Pen */}
                {/* <motion.g
                  initial={{ x: 0, opacity: 0 }}
                  animate={{
                    x: 316,
                    opacity: [1, 1, 0],
                    y: [0, -2, -6], // pen lifts
                  }}
                  transition={{
                    delay: 2,
                    duration: 0.6,
                    ease: [0.22, 1, 0.36, 1],
                    times: [0, 0.85, 1],
                  }}
                  transform="rotate(-6 0 26)" // subtle pen tilt
                > */}
                {/* pen body */}
                {/* <rect
                    x="0"
                    y="22"
                    width="28"
                    height="6"
                    rx="3"
                    fill="#111827"
                  /> */}
                {/* pen grip */}
                {/* <rect
                    x="16"
                    y="22.8"
                    width="8"
                    height="4.4"
                    rx="2"
                    fill="#1f2937"
                  /> */}
                {/* pen tip */}
                {/* <polygon points="28,23 34,25 28,27" fill="#E25555" /> */}
                {/* </motion.g> */}
              </motion.svg>
            </span>
          </h1>

          {/* Subheading */}
          <p
            className="mb-12 text-center font-light leading-tight text-white
            text-[12px] sm:text-[14px] md:text-[16px]"
          >
            Get ready to <span className="text-teal-400">start building</span>
            <br />
            A 45-day program for students, early founders,
            <br />
            creators & professionals who want more.
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
