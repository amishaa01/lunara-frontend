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
    <main className="min-h-screen">
      <HeroSection />
      <ProblemSection />
      <LiveDemo />
      <TechnicalArchitecture />
      <ModelPerformance />
      <HowItWorks />
      <TechnicalCredibility />
      <SocialProof />
      <DistrictMap />
      <FinalCTA />
    </main>
  );
}
