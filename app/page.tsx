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
import SectionDivider from "@/components/SectionDivider";

export default function Home() {
  return (
    <main className="min-h-screen">
      <section id="home">
        <HeroSection />
      </section>
      <SectionDivider />
      <ProblemSection />
      <SectionDivider />
      <LiveDemo />
      <SectionDivider />
      <section id="technical-architecture">
        <TechnicalArchitecture />
      </section>
      <SectionDivider />
      <ModelPerformance />
      <SectionDivider />
      <HowItWorks />
      <SectionDivider />
      <TechnicalCredibility />
      <SectionDivider />
      <SocialProof />
      <SectionDivider />
      <section id="calculator">
        <DistrictMap />
      </section>
      <SectionDivider />
      <FinalCTA />
    </main>
  );
}
