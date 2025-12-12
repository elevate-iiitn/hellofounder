import DarkVeil from '../components/darkveil';
import { Header } from '../components/header-2';
import Hero from '../components/hero';
export default function Home() {
  return (
  <>
    <div className="absolute inset-0 z-0 pointer-events-none">
            <DarkVeil />
    </div>
    <Header />
    <Hero />
  </>
  );}