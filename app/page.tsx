import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { Problem } from "@/components/Problem";
import { Capabilities } from "@/components/Capabilities";
import { AICopilot } from "@/components/AICopilot";
import { HowItWorks } from "@/components/HowItWorks";
import { Comparison } from "@/components/Comparison";
import { ForWhom } from "@/components/ForWhom";
import { CaseStudies } from "@/components/CaseStudies";
import { DashboardMock } from "@/components/DashboardMock";
import { Integrations } from "@/components/Integrations";
import { Testimonials } from "@/components/Testimonials";
import { Pricing } from "@/components/Pricing";
import { FAQ } from "@/components/FAQ";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <Hero />
        <Marquee />
        <Problem />
        <Capabilities />
        <AICopilot />
        <HowItWorks />
        <Comparison />
        <ForWhom />
        <CaseStudies />
        <DashboardMock />
        <Integrations />
        <Testimonials />
        <Pricing />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
