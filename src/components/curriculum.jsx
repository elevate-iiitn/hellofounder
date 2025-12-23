'use client';

import { motion } from "framer-motion";
import Image from "next/image";

/**
 * Curriculum overview component
 *
 * - Responsive grid of session cards
 * - Small "Week / Track / Session" pill, title, short description
 * - Uses framer-motion reveal similar to your FAQs and certificate components
 * - Replace images/icons or text as needed or pass data via props if you want dynamic content
 */

const defaultCurriculum = [
  {
    week: "Week 1",
    track: "Discovery",
    session: "Session 1",
    title: "Startup Reality, Standards & What We’re Building",
    desc:
      "Get a clear picture of the startup ecosystem, expectations, and execution standards that define real founders and real startups.",
    icon: "/icons/flag.svg",
  },
  {
    week: "Week 1",
    track: "Discovery",
    session: "Session 2",
    title: "Build in Public & LinkedIn as a Founder Tool",
    desc:
      "Learn how founders use LinkedIn to build credibility, attract opportunities, and grow influence by sharing their journey.",
    icon: "/icons/linkedin.svg",
  },
  {
    week: "Week 1",
    track: "Discovery",
    session: "Session 3",
    title: "Idea Selection & Problem Framing",
    desc:
      "Identify meaningful problems, validate their importance, and frame startup ideas with long-term potential.",
    icon: "/icons/lightbulb.svg",
  },

  {
    week: "Week 2",
    track: "Validation",
    session: "Session 4",
    title: "Customer Discovery & Market Research",
    desc:
      "Learn how to talk to users, uncover real pain points, and validate demand before building solutions.",
    icon: "/icons/users.svg",
  },
  {
    week: "Week 2",
    track: "Validation",
    session: "Session 5",
    title: "ICP, Value Proposition & Market Size (Practical)",
    desc:
      "Define your ideal customer, sharpen your value proposition, and assess the real size of your opportunity.",
    icon: "/icons/target.svg",
  },

  {
    week: "Week 3",
    track: "Building",
    session: "Session 6",
    title: "Business Models & Pricing",
    desc:
      "Explore startup business models and learn how to price products based on value, not assumptions.",
    icon: "/icons/chart.svg",
  },
  {
    week: "Week 3",
    track: "Building",
    session: "Session 7",
    title: "MVP Thinking (No-Code / Pre-Tech)",
    desc:
      "Understand how to build and test MVPs quickly without over-engineering or unnecessary tech.",
    icon: "/icons/rocket.svg",
  },

  {
    week: "Week 4",
    track: "Growth",
    session: "Session 8",
    title: "Distribution & GTM (India-First)",
    desc:
      "Learn go-to-market strategies designed for Indian users, constraints, and early traction.",
    icon: "/icons/megaphone.svg",
  },
  {
    week: "Week 4",
    track: "Growth",
    session: "Session 9",
    title: "Your First 100 Users — Community as a Growth Engine",
    desc:
      "Acquire your first users by leveraging communities, content, and trust-based distribution.",
    icon: "/icons/community.svg",
  },
  {
    week: "Week 4",
    track: "Growth",
    session: "Session 10",
    title: "Sales Basics & Closing Your First Users",
    desc:
      "Learn how founders sell, handle objections, and convert early users into paying customers.",
    icon: "/icons/sales.svg",
  },

  {
    week: "Week 5",
    track: "Brand",
    session: "Session 11",
    title: "Branding, Narrative & Storytelling",
    desc:
      "Craft a strong founder story and brand narrative that resonates with users and investors.",
    icon: "/icons/pen.svg",
  },
  {
    week: "Week 5",
    track: "Legal",
    session: "Session 12",
    title: "Legal Basics for Early-Stage Founders (Bonus)",
    desc:
      "Understand essential legal foundations to avoid costly mistakes in the early stages.",
    icon: "/icons/legal.svg",
  },

  {
    week: "Week 6",
    track: "Pitch",
    session: "Session 13",
    title: "Brief for Pitch Day",
    desc:
      "Structure your pitch, clarify your story, and prepare for presenting your startup confidently.",
    icon: "/icons/presentation.svg",
  },
  {
    week: "Week 6",
    track: "Pitch",
    session: "Session 14",
    title: "Pitch Day Practice",
    desc:
      "Present your startup, receive feedback, and learn from peer and mentor insights.",
    icon: "/icons/feedback.svg",
  },
  {
    week: "Week 6",
    track: "Pitch",
    session: "Session 15",
    title: "Pitch Day",
    desc:
      "Final pitch presentations marking your journey from idea to execution.",
    icon: "/icons/trophy.svg",
  },
];

export default function Curriculum({ data = defaultCurriculum }) {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        {/* <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-extrabold text-white">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              Immersive
            </span>{" "}
            Program Structure
          </h2>
          <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
            Our 6-week intensive program is carefully designed with 18 sessions to guide you through building a successful startup, with clear deliverables and expert guidance.
          </p>
        </div> */}

        <div className="grid gap-6 sm:grid-cols-2">
          {data.map((item, idx) => (
            <SessionCard key={idx} item={item} index={idx} />
          ))}
        </div>

        <div className="mt-8 text-center text-sm text-muted-foreground">
          <em>Full curriculum will be shared with enrolled participants. Schedule subject to minor updates.</em>
        </div>
      </div>
    </section>
  );
}

/* ---------------------------
   Single Session Card
   --------------------------- */
function SessionCard({ item, index }) {
  const { week, track, session, title, desc, icon } = item;

  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.04 }}
      viewport={{ once: true }}
      className="bg-white/5 dark:bg-slate-800 border border-gray-800/40 rounded-xl p-5 shadow-sm hover:shadow-lg transition-shadow"
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="flex flex-col">
            <span className="text-xs inline-flex items-center gap-2 px-2 py-1 rounded-full bg-slate-700/30 text-slate-200/90 font-medium">
              <strong className="text-[11px]">{week}</strong>
              <span className="text-[11px] text-slate-300">• {track}</span>
            </span>

            <span className="text-[11px] mt-2 inline-flex items-center gap-2 px-2 py-1 rounded-md bg-slate-700/10 text-muted-foreground">
              {session}
            </span>
          </div>
        </div>

        <div className="shrink-0">
          {/* icon placeholder - replace paths with your SVGs in /public/icons */}
          {icon ? (
            <Image src={icon} alt="" width={36} height={36} className="object-contain" />
          ) : (
            <div className="w-9 h-9 rounded-md bg-slate-700/30 flex items-center justify-center text-sm">S</div>
          )}
        </div>
      </div>

      <h3 className="mt-4 text-sm md:text-base font-semibold text-white">{title}</h3>

      <div className="mt-3 text-sm text-muted-foreground">
        <RevealText text={desc} />
      </div>
    </motion.article>
  );
}

/* ---------------------------------------------
   Reveal animation for card descriptions
   (Matches the letter reveal in FAQ / Certificate)
---------------------------------------------- */
const RevealText = ({ text = "" }) => {
  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.008 } },
  };
  const letterAnim = {
    hidden: { opacity: 0, filter: "blur(6px)" },
    show: { opacity: 1, filter: "blur(0px)" },
  };

  return (
    <motion.p variants={container} initial="hidden" whileInView="show" viewport={{ once: true }} className="leading-relaxed">
      {text.split("").map((ch, i) => (
        <motion.span key={i} variants={letterAnim} transition={{ duration: 0.18 }} className="inline-block">
          {ch === " " ? "\u00A0" : ch}
        </motion.span>
      ))}
    </motion.p>
  );
};
