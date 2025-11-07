import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import HowItWorks from "@/components/HowItWorks";
import SocialProof from "@/components/SocialProof";
import TechnicalCredibility from "@/components/TechnicalCredibility";
import DistrictMap from "@/components/DistrictMap";
import FinalCTA from "@/components/FinalCTA";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <ProblemSection />
      <HowItWorks />
      <SocialProof />
      <TechnicalCredibility />
      <DistrictMap />
      <FinalCTA />
    </main>
  );
}
