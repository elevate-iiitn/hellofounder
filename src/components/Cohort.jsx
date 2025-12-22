"use client";

import SpotlightCard from "@/components/SpotlightCard";
import { SparklesText } from "@/components/ui/sparkles-text";
import { Calendar, Users, Rocket } from "lucide-react";
import { poppins } from "@/lib/fonts";

export default function CohortSpotlight() {
  return (
    <section className="px-4 md:px-20 my-20">
      <SpotlightCard
        className={`
          ${poppins.className}
          w-full
          rounded-3xl
          bg-[#0b0b0c]
          border border-white/10
          p-6 md:p-10
        `}
        spotlightColor="rgba(0, 231, 255, 0.18)"
      >
        {/* MAIN GRID */}
        <div className="flex flex-col lg:flex-row gap-12 items-start lg:items-end">
          
          {/* LEFT CONTENT */}
          <div className="flex-1 space-y-10">
            
            {/* HEADING — POPPINS + SPARKLES */}
            <SparklesText
              text="Founding cohort starts February 15, 2026"
              className="
                text-3xl
                md:text-5xl
                lg:text-6xl
                font-semibold
                text-white
                leading-tight
                tracking-wide
              "
            />

            {/* DETAILS */}
            <div className="space-y-4 text-gray-300 text-base md:text-lg">
              <div className="flex items-center gap-3">
                <Calendar size={18} className="text-teal-400" />
                <span>45 Days Online Cohort</span>
              </div>

              <div className="flex items-center gap-3">
                <Users size={18} className="text-orange-400" />
                <span>Limited to 25 founders</span>
              </div>

              <div className="flex items-center gap-3">
                <Rocket size={18} className="text-teal-400" />
                <span>Access to Pitch Day</span>
              </div>
            </div>
          </div>

          {/* RIGHT / CTA */}
          <div className="w-full lg:w-auto flex justify-start lg:justify-end">
            <button
              className="
                relative inline-flex items-center justify-center
                rounded-xl
                px-10 py-4
                font-semibold
                text-black
                overflow-hidden

                bg-gradient-to-r
                from-teal-400
                via-cyan-400
                to-emerald-400

                shadow-lg
                shadow-teal-500/30
                hover:shadow-teal-400/50

                transition-all
                duration-300
                hover:scale-[1.05]
                active:scale-[0.96]
              "
            >
              JOIN NOW
            </button>
          </div>
        </div>
      </SpotlightCard>
    </section>
  );
}
