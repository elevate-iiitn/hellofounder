"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-[#070707]">
      
      {/* TOP BAR */}
      <div className="max-w-7xl mx-auto px-6 pt-6">
        <div className="flex items-center justify-between text-sm text-white/70">
          <div className="flex gap-6">
            <Link href="#curriculum" className="hover:text-white">Curriculum</Link>
            <Link href="#faqs" className="hover:text-white">FAQ's</Link>
          </div>

          {/* EMAIL ON RIGHT */}
          <a
            href="mailto:hellofounder@gmail.com"
            className="text-white font-medium hover:underline"
          >
            hellofounder@gmail.com
          </a>
        </div>
      </div>

      {/* MAIN BAND */}
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mt-6 bg-gradient-to-b from-[#0b0b0c] to-[#261028] py-10"
      >
        <div className="max-w-7xl mx-auto px-0 flex items-center justify-between">

          {/* LEFT: HelloFounder Logo */}
          <div className="flex items-center h-full">
            <div className="flex items-center h-[64px]">
              <Image
                src="/images/logo-no-bg.png"
                alt="HelloFounder"
                width={200}
                height={50}
                className="object-contain"
              />
            </div>
          </div>

          {/* CENTER: POWERED BY */}
          {/* <div className="flex items-center gap-3 text-white/80">
            <span className="text-sm">Powered by</span>
            <Image
              src="/images/metvy.jpeg"
              alt="Metvy"
              width={50}
              height={50}
              className="object-contain"
            />
            <span className="text-white font-medium">Metvy</span>
          </div> */}

          {/* RIGHT: APPLY TEXT + BUTTON */}
          <div className="flex items-center gap-4">
            <span className="text-sm text-white/60">Apply to cohort</span>

            <Link
              href="https://your-typeform-or-googleform-link.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#a855f7] to-[#ec4899] flex items-center justify-center hover:scale-105 transition"
            >
              {/* chain icon */}
              <svg width="50" height="50" viewBox="0 0 24 24" fill="none">
                <path
                  d="M10 14a3.5 3.5 0 0 1 0-4.95l2-2a3.5 3.5 0 0 1 4.95 4.95l-1 1"
                  stroke="white"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                />
                <path
                  d="M14 10a3.5 3.5 0 0 1 0 4.95l-2 2a3.5 3.5 0 0 1-4.95-4.95l1-1"
                  stroke="white"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                />
              </svg>
            </Link>
          </div>

        </div>
      </motion.div>

      {/* DIVIDER */}
      <div className="border-t border-white/10 max-w-7xl mx-auto mt-6" />

      {/* BOTTOM BAR */}
      {/* <div className="max-w-7xl mx-auto px-6 py-8 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Image
            src="/images/hello-founder-logo.png"
            alt="HelloFounder"
            width={56}
            height={56}
            className="object-contain"
          />
          <span className="text-white font-semibold">HelloFounder</span>
        </div>

        <div className="text-sm text-white/60">
          Powered by <span className="text-white font-medium">HelloFounder Team</span>
        </div>
      </div> */}

    </footer>
  );
}
