// import DarkVeil from "../components/darkveil";
import { Header } from "../components/header-2";
import Hero from "../components/hero";
import Curriculum from "../components/curriculum";
import Certificate from "../components/certificate";
import ApplyCTA from "../components/apply-cta";
import FAQs from "../components/text-reveal-faqs.jsx";
import Footer from "../components/footer.jsx";
import Skill from "../components/skills";
import MentorsSectionLR from "@/components/MentorsSectionLR";
import PixelCard from "../components/Cohort";
import InsideHelloFounder from "@/components/InsideHelloFounder";
import PricingCard from "../components/PricingCard";
import BackgroundSection from "../components/BackgroundSection";
import MentorsSectionRL from "@/components/MentorsSectionRL";
import { koulen } from "@/lib/fonts";

export default function Home() {
  return (
    <>
      <Header />

      <BackgroundSection className="relative">
        <section id="hero">
          <Hero />
        </section>
      </BackgroundSection>

      {/* MENTORS */}
      <h2 className={`${koulen.className} mt-1 mb-2 text-center font-medium text-white text-3xl`}>
        Meet Our Mentors
      </h2>

      <MentorsSectionLR />
      <MentorsSectionRL />

      <InsideHelloFounder />

      {/* SKILLS */}
      <h2
        className={`${koulen.className} mb-5 text-center text-xl md:text-3xl text-white tracking-wide`}
      >
        Learn all the relevant skills to be
        <br />
        <span>Investment Ready</span>
      </h2>

      <Skill />

      <PixelCard />

      {/* CURRICULUM */}
      <h2
        id="curriculum"
        className={`${koulen.className} scroll-mt-24 mb-5 text-center text-xl md:text-3xl text-white tracking-wide`}
      >
        Curriculum Overview
        <br />
        <span>Designed for Emerging Founders</span>
      </h2>

      <Curriculum />

      {/* PRICING */}
      <section
        id="pricing"
        className="scroll-mt-24 md:scroll-mt-32 lg:scroll-mt-40"
      >
        <div className="flex justify-center items-center w-full py-12 lg:hidden">
          <PricingCard />
        </div>

        <div className="hidden lg:block">
          <ApplyCTA />
        </div>
      </section>

      {/* CERTIFICATE */}
      <h2
        className={`${koulen.className} mb-5 text-center text-xl md:text-3xl text-white tracking-wide`}
      >
        Program Certification
        <br />
        <span className="opacity-80">
          Marking Your Transition from Learner to Builder
        </span>
      </h2>

      <Certificate />

      {/* FAQS */}
      <h2
        id="faqs"
        className={`${koulen.className} scroll-mt-24 mb-5 text-center text-xl md:text-3xl text-white tracking-wide`}
      >
        Frequently Asked Questions
      </h2>

      <FAQs />

      <Footer />
    </>
  );
}
