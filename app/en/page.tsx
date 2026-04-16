import { NavEN } from "@/components/en/Nav";
import { HeroEN } from "@/components/en/Hero";
import { Marquee } from "@/components/Marquee";
import { Problem } from "@/components/Problem";
import { Capabilities } from "@/components/Capabilities";
import { AICopilot } from "@/components/AICopilot";
import { HowItWorksEN } from "@/components/en/HowItWorks";
import { ComparisonEN } from "@/components/en/Comparison";
import { ForWhomEN } from "@/components/en/ForWhom";
import { CaseStudies } from "@/components/CaseStudies";
import { DashboardMock } from "@/components/DashboardMock";
import { Integrations } from "@/components/Integrations";
import { Testimonials } from "@/components/Testimonials";
import { PricingEN } from "@/components/en/Pricing";
import { FAQEN } from "@/components/en/FAQ";
import { FinalCTAEN } from "@/components/en/FinalCTA";
import { FooterEN } from "@/components/en/Footer";

export default function HomeEN() {
  return (
    <>
      <NavEN />
      <main className="flex-1">
        <HeroEN />
        <Marquee />
        <Problem />
        <Capabilities />
        <AICopilot />
        <HowItWorksEN />
        <ComparisonEN />
        <ForWhomEN />
        <CaseStudies />
        <DashboardMock />
        <Integrations />
        <Testimonials />
        <PricingEN />
        <FAQEN />
        <FinalCTAEN />
      </main>
      <FooterEN />
    </>
  );
}
