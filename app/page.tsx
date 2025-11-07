import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import LiveDemo from "@/components/LiveDemo";
import TechnicalArchitecture from "@/components/TechnicalArchitecture";
import ModelPerformance from "@/components/ModelPerformance";
import HowItWorks from "@/components/HowItWorks";
import TechnicalCredibility from "@/components/TechnicalCredibility";
import SocialProof from "@/components/SocialProof";
import DistrictMap from "@/components/DistrictMap";
import FinalCTA from "@/components/FinalCTA";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <section id="home">
          <HeroSection />
        </section>
        <ProblemSection />
        <LiveDemo />
        <section id="technical-architecture">
          <TechnicalArchitecture />
        </section>
        <ModelPerformance />
        <HowItWorks />
        <TechnicalCredibility />
        <SocialProof />
        <section id="calculator">
          <DistrictMap />
        </section>
        <FinalCTA />
      </main>
    </>
  );
}
