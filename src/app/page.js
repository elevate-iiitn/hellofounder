import DarkVeil from '../components/darkveil';
import { Header } from '../components/header-2';
import Hero from '../components/hero';
import Curriculum from "../components/curriculum";
import Certificate from "../components/certificate";
import ApplyCTA from "../components/apply-cta";
import FAQs from '../components/text-reveal-faqs.jsx';
import Footer from '../components/footer.jsx';
import Skill from '../components/skills'
import MentorsSection from "@/components/MentorsSection";
import PixelCard from '../components/Cohort';
import { Calendar, Users, Rocket, Pi } from "lucide-react";
import InsideHelloFounder from '@/components/InsideHelloFounder';
import PricingCard from "../components/PricingCard";


export default function Home() {
  return (
  <>
    <div className="absolute inset-0 z-0 pointer-events-none">
            <DarkVeil />
    </div>
    <Header />
    <section id="hero"><Hero /></section>
    <PixelCard />
        <br/><br/><br/>

    <h2 className="mb-5 text-center font-medium text-white text-xl tracking-tight md:text-3xl">
          <span className="text-white">Learn all the relevant skills to be </span>
          <br/>
          <span className="font-semibold text-teal-400">Investment Ready</span>
    </h2>
    <br></br>
    <Skill/>
  
    <InsideHelloFounder />

    <h2 className="mb-5 text-center font-medium text-white text-xl tracking-tight md:text-3xl">
          <span className="text-white">Meet Our {' '} </span>
          <span className="font-semibold text-teal-400">Mentors</span>
    </h2>
        {/* <br/><br/><br/><br/><br/><br/><br/> */}
              <MentorsSection />


    <h2 id="curriculum" className="scroll-mt-24 mb-5 text-center font-medium text-white text-xl tracking-tight md:text-3xl">
          <span className="text-white">Curriculum Overview</span>
          <br/>
          <span className="font-semibold text-teal-400">Designed for Emerging Founders</span>
    </h2>
    <Curriculum />
        {/* <br/><br/><br/><br/><br/><br/><br/> */}
    <div className="flex justify-center items-center w-full py-12
                lg:hidden">
  <PricingCard />
</div>

    <ApplyCTA />
    <h2 className="mb-5 text-center font-medium text-white text-xl tracking-tight md:text-3xl">
          <span className="text-white">Program Certification</span>
          <br/>
          <span className="font-semibold text-teal-400">Marking Your Transition from Learner to Builder</span>
    </h2>
    <Certificate />
        {/* <br/><br/><br/><br/><br/><br/><br/> */}
    <h2 id="faqs" className="scroll-mt-24 mb-5 text-center font-medium text-white text-xl tracking-tight md:text-3xl">
          <span className="text-white">Frequently Asked{' '}</span>
          <span className="font-semibold text-teal-400">Questions</span>
    </h2>
    <FAQs />
        {/* <br/><br/><br/><br/><br/><br/><br/> */}
    {/* <h2 className="mb-5 text-center font-medium text-white text-xl tracking-tight md:text-3xl">
          <span className="text-white">Footer{' '}</span>
          <span className="font-semibold text-teal-400">Section</span>
    </h2> */}
    <Footer />
  </>
  );}