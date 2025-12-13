"use client";

import Link from "next/link";

export default function ApplyCTA() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6">

        <div className="relative flex overflow-hidden rounded-[36px]">

          {/* LEFT PANEL */}
          <div className="flex-1 px-12 py-16 text-white
                          bg-gradient-to-br from-[#0b0b0c] via-[#0f2f2b] to-[#0b0b0c]">

            <p className="text-teal-400 text-sm mb-4">
              Haven’t applied yet?
            </p>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              Start Your <br />
              <span className="font-extrabold">Founder Journey</span>
            </h2>
          </div>

            {/* RIGHT PANEL */}
            <div className="relative w-full md:w-[420px] bg-white flex items-center justify-center overflow-hidden">

            {/* PERFECT CIRCULAR CUT */}
            <div
                className="absolute left-[-210px] top-1/2
                        w-[420px] aspect-square
                        bg-white rounded-full
                        -translate-y-1/2"
            />

            <div className="relative z-10 p-10 text-center">
                <p className="text-gray-700 mb-3">
                Get exclusive access to the Founding Cohort at just
                </p>

                <div className="flex items-center justify-center gap-4 mb-6">
                <span className="text-3xl font-bold text-teal-500">
                    ₹4,999
                </span>

                <span className="text-lg text-gray-400 line-through">
                    ₹7,000
                </span>
                </div>

                <Link
                href="https://your-typeform-or-googleform-link.com"
                className="inline-flex items-center justify-center
                            px-8 py-4 rounded-full
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
