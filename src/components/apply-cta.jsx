"use client";

import Link from "next/link";
import { SparklesText } from "../components/ui/sparkles-text"


export default function ApplyCTA() {
  return (
    <section id="pricing" className="scroll-mt-24 py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        <div className="relative flex flex-col md:flex-row overflow-hidden rounded-[28px] sm:rounded-[36px]">

          {/* LEFT PANEL */}
          <div className="flex-1 px-6 sm:px-10 lg:px-12 py-12 sm:py-16 text-white
                          bg-gradient-to-br from-[#0b0b0c] via-[#0f2f2b] to-[#0b0b0c]">

            <p className="text-teal-400 text-xs sm:text-sm mb-3 sm:mb-4">
              Haven’t applied yet?
            </p>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
              Start Your <br />
              <SparklesText text="Founder Journey" colors={{ first: "#00E5FF", second: "#7CFFB2" }} sparklesCount={7} className="text-4xl md:text-5xl"/>
            </h2>
          </div>

          {/* RIGHT PANEL */}
          <div className="relative w-full md:w-[380px] lg:w-[420px]
                          bg-white flex items-center justify-center overflow-hidden">

            {/* RESPONSIVE CIRCULAR CUT */}
            <div
              className="absolute hidden md:block
                         left-[-190px] lg:left-[-210px]
                         top-1/2
                         w-[380px] lg:w-[420px]
                         aspect-square
                         bg-white rounded-full
                         -translate-y-1/2"
            />

            <div className="relative z-10 p-8 sm:p-10 text-center">
              <p className="text-gray-700 text-sm sm:text-base mb-3">
                Get exclusive access to the Founding Cohort at just
              </p>

              <div className="flex items-center justify-center gap-3 sm:gap-4 mb-6">
                <span className="text-2xl sm:text-3xl font-bold text-teal-500">
                  ₹4,999
                </span>

                <span className="text-base sm:text-lg text-gray-400 line-through">
                  ₹7,000
                </span>
              </div>

              <Link
                href="https://your-typeform-or-googleform-link.com"
                className="inline-flex items-center justify-center
                           px-7 sm:px-8 py-3.5 sm:py-4 rounded-full
                           font-semibold text-black
                           bg-gradient-to-r from-teal-400 to-cyan-400
                           hover:scale-105 transition
                           shadow-[0_0_25px_rgba(45,212,191,0.35)]"
              >
                Apply Now
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}