"use client";

import Link from "next/link";
import { SparklesText } from "../components/ui/sparkles-text";

export default function ApplyCTA() {
  return (
    <section className="hidden lg:block scroll-mt-24 py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div
          className="
            relative mx-auto max-w-5xl
            rounded-[32px] overflow-hidden
            bg-gradient-to-br from-[#0b0b0c] via-[#0f2f2b] to-[#0b0b0c]
          "
        >
          {/* ambient glow */}
          <div
            className="absolute inset-0
                       bg-[radial-gradient(circle_at_top,rgba(0,229,255,0.22),transparent_60%)]"
          />

          <div className="relative z-10 px-10 py-16 text-center text-white">
            {/* eyebrow */}
            <p className="text-teal-400 text-xs tracking-widest uppercase mb-4">
              Haven’t applied yet?
            </p>

            {/* headline */}
            <h2 className="text-4xl lg:text-5xl font-bold leading-tight mb-6">
              Start your <br />
              <SparklesText
                text="Founder Journey"
                colors={{ first: "#00E5FF", second: "#7CFFB2" }}
                sparklesCount={6}
                className="text-4xl md:text-5xl"
              />
            </h2>

            {/* pricing */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10 mb-10">
              {/* Early Bird */}
              <div className="text-center">
                <p className="text-teal-300 text-xs uppercase tracking-widest mb-2">
                  Early Bird{" "}
                  <span className="opacity-70">(Before 1 Jan 2026)</span>
                </p>
                <p className="text-4xl font-bold text-teal-300">₹4,999</p>
              </div>

              {/* Divider */}
              <div className="hidden sm:block h-12 w-px bg-white/20" />

              {/* Regular */}
              <div className="text-center opacity-80">
                <p className="text-gray-400 text-xs uppercase tracking-widest mb-2">
                  Regular Price
                </p>
                <p className="text-3xl font-semibold text-gray-400 line-through">
                  ₹7,999
                </p>
              </div>
            </div>

            {/* CTA */}
            <Link
              href="https://tally.so/r/gDayXN"
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex items-center justify-center
                px-10 py-4 rounded-full
                font-semibold text-black
                bg-teal-400
                transition-all duration-300
                shadow-[0_8px_30px_rgba(0,229,255,0.35)]
                hover:bg-teal-500
                hover:shadow-[0_12px_45px_rgba(0,229,255,0.5)]
                active:scale-[0.98]
              "
            >
              Apply to Cohort →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
