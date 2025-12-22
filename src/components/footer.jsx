"use client";

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative bg-[url('/images/isfbg.png')] bg-cover bg-center bg-no-repeat">
      {/* top fade from black into bg */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-8 bg-gradient-to-t from-transparent to-black" />

      {/* CONTENT */}
      <div className="relative z-10">
        {/* TOP BAR */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-6">
          <div className="flex flex-col sm:flex-row gap-6 sm:gap-0 sm:items-center sm:justify-between text-white/70 text-base sm:text-lg">
            {/* LINKS */}
            <div className="flex gap-6 sm:gap-10">
              <Link href="#curriculum" className="hover:text-white">
                Curriculum
              </Link>
              <Link href="#faqs" className="hover:text-white">
                FAQ&apos;s
              </Link>
            </div>

            {/* EMAIL */}
            <a
              href="mailto:krishna@indianschooloffounders.com"
              className="text-white font-medium text-lg sm:text-2xl lg:text-3xl break-all"
            >
              krishna@indianschooloffounders.com
            </a>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="h-px bg-white/20" />
        </div>

        {/* MAIN BAND */}
        <div className="mt-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-10 flex flex-col lg:flex-row gap-10 lg:gap-0 items-center justify-between">
            {/* LOGO */}
            <div className="relative w-[180px] h-[120px] sm:w-[220px] sm:h-[150px] lg:w-[300px] lg:h-[200px]">
              <Image
                src="/images/isflogo-nobg.png"
                alt="IFS"
                fill
                className="object-contain"
              />
            </div>

            {/* CTA */}
            <div className="flex items-center gap-4 sm:gap-6">
              <span className="text-white/60 text-sm sm:text-lg">
                Apply to cohort
              </span>

              <Link
                href="https://tally.so/r/gDayXN"
                target="_blank"
                rel="noopener noreferrer"
                className="group w-16 h-16 sm:w-20 sm:h-20 rounded-2xl
                          bg-gradient-to-br from-teal-400 to-cyan-400
                          flex items-center justify-center
                          transition-transform duration-300 hover:scale-105"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="w-8 h-8 sm:w-10 sm:h-10 transition-transform duration-700 group-hover:rotate-90"
                >
                  <path
                    d="M10 14a3.5 3.5 0 0 1 0-4.95l2-2a3.5 3.5 0 0 1 4.95 4.95l-1 1"
                    stroke="white"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />
                  <path
                    d="M14 10a3.5 3.5 0 0 1 0 4.95l-2 2a3.5 3.5 0 0 1-4.95-4.95l1-1"
                    stroke="white"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
