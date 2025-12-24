"use client";

import SpotlightCard from "@/components/SpotlightCard";
import { SparklesText } from "@/components/ui/sparkles-text";
import { koulen } from "@/lib/fonts";

export default function InsideHelloFounder() {
  return (
    <section className="bg-black px-8 py-12 relative overflow-hidden font-[inherit]">
      <div className="ambient-left-blob pointer-events-none" />
      <div className="ambient-right-blob pointer-events-none" />

      <div className="max-w-6xl mx-auto pt-2.5 flex flex-col md:flex-row gap-10 items-start md:items-stretch relative z-10">
        {/* LEFT SIDE */}
        <div className="md:w-1/2 text-white font-poppins">
          {/* HEADING — NOT POPPINS */}
          <div className={`inside-heading ${koulen.className}`}>
            <span className="top">Inside</span>
            <span className="middle shimmer">Indian School of Founders</span>
            <span className="bottom">Program</span>
          </div>

          {/* DESCRIPTION — POPPINS */}
          <p className="inside-description mt-8 max-w-xl">
            A hands-on program for builders who want to start, validate, and
            build real startups. Whether you’re shaping an idea, validating a
            problem, or preparing to operate like a founder, ISF gives you the
            mindset, tools, and execution framework to move fast and build
            right. Learn directly from founders and operators, not professors.
            Less theory. More doing. Clear thinking over noise. Build with
            clarity. Execute with confidence.
          </p>
        </div>

        {/* RIGHT SIDE */}
        <div className="md:w-1/2 w-full font-poppins">
          <SpotlightCard>
            <SparklesText text="Who's this for?" />

            <p className="inside-subtext">
              For professionals and startup enthusiasts who want to work
              directly with founders…
            </p>

            <div className="card-divider" />

            <div className="inside-list">
              <p className="inline-row">
                <span className="icon" aria-hidden="true">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M12 2c0 0-6 3-8 5s-2 8-2 8 6-1 8-3 5-8 5-8-1-2-3-2z"
                      fill="#00e7ff"
                      opacity="0.9"
                    />
                    <circle cx="17.5" cy="6.5" r="1.5" fill="#00dfb8" />
                  </svg>
                </span>
                <span>
                  <span className="accent">Students</span> who want to build
                  before graduating
                </span>
              </p>

              <p className="inline-row">
                <span className="icon" aria-hidden="true">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M3 17l6-6 4 4 8-8"
                      stroke="#00e7ff"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <span>
                  <span className="accent">Early founders</span> with half-baked
                  ideas
                </span>
              </p>

              <p className="inline-row">
                <span className="icon" aria-hidden="true">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M12 2v6M5 9l7 7 7-7"
                      stroke="#00dfb8"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <span>
                  <span className="accent">Professionals</span> transitioning
                  into entrepreneurship
                </span>
              </p>
            </div>

            <div className="card-divider thin" />

            <div className="card-footer flex items-center justify-between gap-4">
              <div className="small-meta text-xs text-gray-400">
                1st Cohort March 1, 2026 • 45 Days
              </div>
              <a
                href="https://tally.so/r/gDayXN"
                target="_blank"
                rel="noopener noreferrer"
                className="pill inline-flex items-center justify-center"
              >
                Apply
              </a>
            </div>
          </SpotlightCard>
        </div>
      </div>
    </section>
  );
}
