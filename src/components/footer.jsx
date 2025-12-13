"use client";

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#060606] to-[#0f2f2b]">

      {/* TOP BAR */}
      <div className="max-w-7xl mx-auto px-24 pt-8 py-8">
        <div className="flex items-center justify-between text-[20px] text-white/70">
          <div className="flex gap-10">
            <Link href="#curriculum" className="hover:text-white">
              Curriculum
            </Link>
            <Link href="#faqs" className="hover:text-white">
              FAQ's
            </Link>
          </div>

          <a
            href="mailto:hellofounder@gmail.com"
            className="text-white text-[36px] font-sm"
          >
            hellofounder@gmail.com
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-20">
        <div className="h-px bg-white/20" />
      </div>  

      {/* MAIN LARGE BAND */}
      <div className="mt-8 ">
        <div className="max-w-7xl mx-auto px-12 py-10 flex items-center justify-between">

          {/* LEFT: BIG HELLOFOUNDER LOGO */}
          <div className="flex items-center">
            <div className="relative w-[300px] h-[200px]">
              <Image
                src="/images/logo-no-bg.png"
                alt="HelloFounder"
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* CENTER: INTENTIONALLY EMPTY (MATCHES REFERENCE) */}
          <div className="flex-1" />

          {/* RIGHT: APPLY CTA */}
          <div className="flex items-center gap-6 mr-4">
            <span className="text-base text-white/60 text-[18px]">
              Apply to cohort
            </span>

            <Link
              href="https://your-typeform-or-googleform-link.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group w-30 h-30 rounded-[28px]
                        bg-gradient-to-br from-teal-400 to-cyan-400
                        flex items-center justify-center
                        transition-transform duration-300 hover:scale-105"
            >
              <svg
                width="100"
                height="100"
                viewBox="0 0 24 24"
                fill="none"
                className="transition-transform duration-800 ease-in-out group-hover:rotate-90"
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

      {/* BOTTOM SPACE (LIKE REFERENCE FADE OUT) */}
      {/* <div className="h-16 bg-[#060606]" /> */}
    </footer>
  );
}
