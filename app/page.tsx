import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Capabilities } from "@/components/Capabilities";
import { AICopilot } from "@/components/AICopilot";
import { HowItWorks } from "@/components/HowItWorks";
import { Comparison } from "@/components/Comparison";
import { Testimonials } from "@/components/Testimonials";
import { Pricing } from "@/components/Pricing";
import { FAQ } from "@/components/FAQ";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";
import { ROICalculator } from "@/components/ROICalculator";
import { FloatingParticles } from "@/components/FloatingParticles";

export default function Home() {
  return (
    <>
      <FloatingParticles />
      <Nav />
      <main className="flex-1">
        <Hero />
        <ROICalculator />
        <Capabilities />
        <AICopilot />
        <HowItWorks />
        <Comparison />
        <Testimonials />
        <Pricing />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
