'use client';

import { motion } from "motion/react";
import Image from "next/image";

export default function Certificate() {
  const certificatePoints = [
    "Exclusive HelloFounder Alumni Excellence Certificate",
    "Lifetime access to our elite founder network & mentorship circle",
    "Premium LinkedIn-shareable certificate format",
    "Recognized by leading founders, VCs, and accelerators",
  ];

  return (
    <section className="py-14 sm:py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">

          {/* LEFT — Certificate Preview */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <div className="rounded-xl p-[2px] bg-gradient-to-br from-teal-300 via-teal-400 to-teal-500 shadow-xl w-full max-w-md">
              <div className="bg-white dark:bg-slate-900 rounded-lg border border-gray-200 dark:border-gray-700 p-4 aspect-[4/3] flex items-center justify-center">
                <Image
                  src="/certificate-sample.png"
                  alt="Certificate Preview"
                  fill
                  className="object-contain p-2"
                />
              </div>
            </div>
          </motion.div>

          {/* RIGHT — Certificate Details */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.08 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-white">
                Certificate of Excellence
              </h3>
              <p className="text-teal-300 mt-1 text-sm sm:text-base">
                Distinguished Achievement Recognition
              </p>
            </div>

            {/* Bullet Points */}
            <ul className="space-y-3 sm:space-y-4">
              {certificatePoints.map((point, index) => (
                <li key={index} className="flex items-start gap-3">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="mt-1 shrink-0"
                  >
                    <circle cx="12" cy="12" r="9" stroke="#34d399" strokeWidth="1.5" />
                    <path
                      d="M8.5 12.5l2 2 4-5"
                      stroke="#10b981"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>

                  <BlurFade text={point} />
                </li>
              ))}
            </ul>

            {/* Highlight Box */}
            <div className="rounded-md bg-amber-50/20 border border-amber-200/30 p-4">
              <p className="text-sm sm:text-base text-amber-200 leading-relaxed">
                <strong>Your Gateway to Success —</strong>{" "}
                Joining HelloFounder means joining a community of top young founders.
                This official certificate opens doors to India’s most impactful startup circles.
              </p>
            </div>

            {/* CTA */}
            <div className="pt-2">
              <button className="w-full sm:w-auto px-6 py-3 rounded-lg text-white font-medium
                                 bg-gradient-to-r from-teal-600 to-teal-600
                                 hover:from-teal-500 hover:to-teal-400
                                 shadow-md flex items-center justify-center gap-2">
                Claim Your Certificate
                {/* <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M5 12h14M12 5l7 7-7 7"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg> */}
              </button>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

/* ---------------------------------------------
   Optimized Animated Text Reveal
---------------------------------------------- */
export const BlurFade = ({ text }) => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.012 },
    },
  };

  const letterAnim = {
    hidden: { opacity: 0, filter: "blur(6px)" },
    show: { opacity: 1, filter: "blur(0px)" },
  };

  return (
    <motion.p
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="text-sm sm:text-base text-gray-300 leading-relaxed"
    >
      {text.split("").map((char, i) => (
        <motion.span
          key={i}
          variants={letterAnim}
          transition={{ duration: 0.22 }}
          className="inline-block"
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.p>
  );
};