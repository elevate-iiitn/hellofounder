import DarkVeil from '../components/darkveil';
import { Header } from '../components/header-2';
import Hero from '../components/hero';
import Curriculum from "../components/curriculum";
import Certificate from "../components/certificate";
import FAQs from '../components/text-reveal-faqs.jsx';

import Skill from '../components/skills'
import SpotlightCard from '../components/SpotlightCard';

export default function Home() {
  return (
  <>
    <div className="absolute inset-0 z-0 pointer-events-none">
            <DarkVeil />
    </div>
    <Header />
    <Hero />

    <h2 className="mb-5 text-center font-medium text-white text-xl tracking-tight md:text-3xl">
          <span className="text-white">Founding Cohort starts{' '}</span>
          <span className="font-semibold text-teal-400">February 15, 2026</span>
    </h2>
        <br/><br/><br/><br/><br/><br/><br/>

    <h2 className="mb-5 text-center font-medium text-white text-xl tracking-tight md:text-3xl">
          <span className="text-white">Learn all the relevant skills to be </span>
          <br/>
          <span className="font-semibold text-teal-400">Investment Ready</span>
    </h2>
    <br></br>
    <Skill/>
        {/* <br/><br/><br/><br/><br/><br/><br/> */}
   <div className="min-h-screen bg-black px-8 py-12 relative overflow-hidden">
      <div className="ambient-left-blob pointer-events-none" />
      <div className="ambient-right-blob pointer-events-none" />

      <div className="max-w-6xl mx-auto pt-2.5 flex flex-col md:flex-row gap-10 items-start md:items-stretch relative z-10">
        {/* LEFT SIDE */}
        <div className="md:w-1/2 text-white">
          <div className="inside-heading">
            <span className="top">Inside</span>
            <span className="middle shimmer">HelloFounder</span>
            <span className="bottom">Program</span>
          </div>
          <p className="inside-description mt-8 max-w-xl">
            The HelloFounder Program is designed for ambitious builders and emerging founders 
            who want to accelerate their journey into startups. Whether you're exploring ideas, 
            validating early concepts, or preparing to operate inside a high-pace founder’s office — 
            this program gives you the skills, mindset, and structure to level up fast.
            </p>

  <p className="inside-description mt-4 max-w-xl">
    Guided by operators, early-stage founders, and product leaders, HelloFounder blends 
    zero-to-one execution, founder-side problem solving, and high-context learning so you can 
    build with clarity and confidence.
  </p>
        </div>
            
        {/* RIGHT SIDE card */}
        <div className="md:w-1/2 w-full">
          <SpotlightCard>
            <h3 className="inside-title">Who's this for?</h3>

            <p className="inside-subtext">
              For professionals and startup enthusiasts who want to work directly with founders…
            </p>

            <div className="card-divider" />

            <div className="inside-list">
              <p className="inline-row">
                <span className="icon" aria-hidden="true">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                    <path d="M12 2c0 0-6 3-8 5s-2 8-2 8 6-1 8-3 5-8 5-8-1-2-3-2z" fill="#00e7ff" opacity="0.9"/>
                    <circle cx="17.5" cy="6.5" r="1.5" fill="#00dfb8"/>
                  </svg>
                </span>
                <span><span className="accent">Students</span> who want to build before graduating</span>
              </p>

              <p className="inline-row">
                <span className="icon" aria-hidden="true">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 17l6-6 4 4 8-8" stroke="#00e7ff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <span><span className="accent">Early founders</span> with half-baked ideas</span>
              </p>

              <p className="inline-row">
                <span className="icon" aria-hidden="true">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2v6M5 9l7 7 7-7" stroke="#00dfb8" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
                <span><span className="accent">Professionals</span> transitioning into entrepreneurship</span>
              </p>
            </div>

            <div className="card-divider thin" />

            <div className="card-footer mt-6 flex items-center justify-between gap-4">
              <div className="small-meta text-xs text-gray-400">1st Cohort February 15, 2026 • 45 Days</div>
              <div className="small-actions flex gap-3">
                <button className="pill">Apply</button>
                {/* Syllabus button removed as requested */}
              </div>
            </div>
          </SpotlightCard>
        </div>
      </div>
    </div>

    <h2 className="mb-5 text-center font-medium text-white text-xl tracking-tight md:text-3xl">
          <span className="text-white">Curriculum Overview</span>
          <br/>
          <span className="font-semibold text-teal-400">Designed for Emerging Founders</span>
    </h2>
    <Curriculum />
        {/* <br/><br/><br/><br/><br/><br/><br/> */}
    <h2 className="mb-5 text-center font-medium text-white text-xl tracking-tight md:text-3xl">
          <span className="text-white">Program Certification</span>
          <br/>
          <span className="font-semibold text-teal-400">Marking Your Transition from Learner to Builder</span>
    </h2>
    <Certificate />
        {/* <br/><br/><br/><br/><br/><br/><br/> */}
    <h2 className="mb-5 text-center font-medium text-white text-xl tracking-tight md:text-3xl">
          <span className="text-white">Frequently Asked{' '}</span>
          <span className="font-semibold text-teal-400">Questions</span>
    </h2>
    <FAQs />
        {/* <br/><br/><br/><br/><br/><br/><br/> */}
    <h2 className="mb-5 text-center font-medium text-white text-xl tracking-tight md:text-3xl">
          <span className="text-white">Footer{' '}</span>
          <span className="font-semibold text-teal-400">Section</span>
    </h2>
  </>
  );}