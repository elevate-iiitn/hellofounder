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
    title: "The Entrepreneurial Foundation: Cultivating the Founder's Mindset",
    desc:
      "Understand the characteristics, resilience, and vision required for an entrepreneurial journey. Develop self-awareness regarding personal strengths and weaknesses as a founder.",
    icon: "/icons/flag.svg",
  },
  {
    week: "Week 1",
    track: "Discovery",
    session: "Session 2",
    title: "Idea Validation & Market Discovery: From Concept to Opportunity",
    desc:
      "Learn systematic approaches to generating and evaluating startup ideas. Master techniques for thorough market research to identify unmet needs and significant opportunities.",
    icon: "/icons/search.svg",
  },
  {
    week: "Week 1",
    track: "Discovery",
    session: "Session 3",
    title: "Deep Dive into Your Ideal Customer: Building Customer Profiles",
    desc:
      "Define detailed customer personas to understand your target audience's demographics, psychographics, behaviors, and motivations. Learn to empathize with your future users.",
    icon: "/icons/user-group.svg",
  },
  {
    week: "Week 1",
    track: "Discovery",
    session: "Session 4",
    title: "From Concept to Tangible Asset: Crafting Your Minimum Viable Product (MVP)",
    desc:
      "Understand MVP principles and their role in validating assumptions quickly and cost-effectively. Learn practical steps to transform an idea into a functional prototype.",
    icon: "/icons/box-open.svg",
  },
  {
    week: "Week 2",
    track: "Building",
    session: "Session 5",
    title: "Establishing Your Legal Foundation: Business Registration & Compliance",
    desc:
      "Navigate essential legal structures for startups in India. Understand business registration, necessary licenses, and initial compliance requirements.",
    icon: "/icons/document.svg",
  },
  {
    week: "Week 2",
    track: "Building",
    session: "Session 6",
    title: "Assembling Your Dream Team: Building a Cohesive & High-Performing Unit",
    desc:
      "Learn strategies for identifying, attracting, and retaining top talent. Understand complementary skill sets, shared vision, and effective team dynamics.",
    icon: "/icons/team.svg",
  },
  {
    week: "Week 2",
    track: "Building",
    session: "Session 7",
    title: "Strategizing for Scale & Profit: Business Model, Canvas & Monetization",
    desc:
      "Master the Business Model Canvas as a strategic tool. Explore business models, unit economics, and scalability drivers to build a sustainable venture.",
    icon: "/icons/chart.svg",
  },
  {
    week: "Week 2",
    track: "Building",
    session: "Session 8",
    title: "Measuring Success: Defining & Tracking Key Metrics & KPIs",
    desc:
      "Understand the importance of data-driven decision making. Learn to define, track, and interpret key performance indicators relevant to your business stage.",
    icon: "/icons/analytics.svg",
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

        <div className="flex-shrink-0">
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
