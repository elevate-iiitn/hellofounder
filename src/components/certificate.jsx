'use client';

import { motion } from "framer-motion";
import Image from "next/image";

export default function Certificate() {
  const certificatePoints = [
    "Exclusive HelloFounder Alumni Excellence Certificate",
    "Lifetime access to our elite founder network & mentorship circle",
    "Premium LinkedIn-shareable certificate format",
    "Recognized by leading founders, VCs, and accelerators",
  ];

  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">

          {/* LEFT — Certificate Preview */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <div className="rounded-xl p-1 bg-gradient-to-br from-pink-500 via-purple-600 to-orange-400 shadow-xl">
              <div className="bg-white dark:bg-slate-900 rounded-lg border border-gray-200 dark:border-gray-700 p-4 w-[420px] h-[300px] flex items-center justify-center">
                <Image
                  src="/certificate-sample.png" // Replace with your actual certificate image
                  alt="Certificate Preview"
                  width={380}
                  height={260}
                  className="object-contain"
                />
              </div>
            </div>
          </motion.div>

          {/* RIGHT — Certificate Details */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-xl md:text-2xl font-semibold text-white">
                Certificate of Excellence
              </h3>
              <p className="text-teal-300 mt-1 text-sm md:text-base">
                Distinguished Achievement Recognition
              </p>
            </div>

            {/* Bullet Points */}
            <ul className="space-y-4">
              {certificatePoints.map((point, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      className="mt-1"
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
                  </span>
                  <BlurFade text={point} />
                </li>
              ))}
            </ul>

            {/* Highlight Box */}
            <div className="mt-4 rounded-md bg-amber-50/20 border border-amber-200/30 p-4">
              <p className="text-sm md:text-base text-amber-200">
                <strong>Your Gateway to Success —</strong>  
                Joining HelloFounder means joining a community of top young founders.
                This official certificate opens doors to India’s most impactful startup circles.
              </p>
            </div>

            {/* CTA */}
            <div className="pt-4">
              <button className="px-6 py-3 rounded-lg text-white font-medium bg-gradient-to-r from-orange-500 to-purple-600 hover:from-orange-600 hover:to-purple-700 shadow-md flex items-center gap-2">
                Claim Your Certificate
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M5 12h14M12 5l7 7-7 7"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}


/* ---------------------------------------------
   Animated Text Reveal (Matches FAQ’s Animation)
---------------------------------------------- */
export const BlurFade = ({ text }) => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.015 },
    },
  };

  const letterAnim = {
    hidden: { opacity: 0, filter: "blur(8px)" },
    show: { opacity: 1, filter: "blur(0px)" },
  };

  return (
    <motion.p
      variants={container}
      initial="hidden"
      animate="show"
      className="text-sm md:text-base text-gray-300"
    >
      {text.split("").map((char, i) => (
        <motion.span
          key={i}
          variants={letterAnim}
          transition={{ duration: 0.25 }}
          className="inline-block"
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.p>
  );
};
