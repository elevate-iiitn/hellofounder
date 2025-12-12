import DarkVeil from '../components/darkveil';
import { Header } from '../components/header-2';
import Hero from '../components/hero';
import FAQs from '../components/text-reveal-faqs.jsx';
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
        <br/><br/><br/><br/><br/><br/><br/>
    <h2 className="mb-5 text-center font-medium text-white text-xl tracking-tight md:text-3xl">
          <span className="text-white">Meet Our{' '}</span>
          <span className="font-semibold text-teal-400">Mentors</span>
    </h2>
        <br/><br/><br/><br/><br/><br/><br/>
    <h2 className="mb-5 text-center font-medium text-white text-xl tracking-tight md:text-3xl">
          <span className="text-white">Inside the{' '}</span>
          <span className="font-semibold text-teal-400">HelloFounder Program</span>
    </h2>
        <br/><br/><br/><br/><br/><br/><br/>
    <h2 className="mb-5 text-center font-medium text-white text-xl tracking-tight md:text-3xl">
          <span className="text-white">Curriculum Overview</span>
          <br/>
          <span className="font-semibold text-teal-400">Designed for Emerging Founders</span>
    </h2>
        <br/><br/><br/><br/><br/><br/><br/>
    <h2 className="mb-5 text-center font-medium text-white text-xl tracking-tight md:text-3xl">
          <span className="text-white">Program Certification</span>
          <br/>
          <span className="font-semibold text-teal-400">Marking Your Transition from Learner to Builder</span>
    </h2>
        <br/><br/><br/><br/><br/><br/><br/>
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