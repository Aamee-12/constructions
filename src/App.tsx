import React from "react";
import { Navigation } from "./components/Navigation";
import { HeroSection } from "./components/HeroSection";
import { StatsClientsSection } from "./components/StatsClientsSection";
import { IntroSection } from "./components/IntroSection";
import { PricingPackagesSection } from "./components/PricingPackagesSection";
import { ServicesSection } from "./components/ServicesSection";
import { ProjectsSection } from "./components/ProjectsSection";
import { PhilosophySection } from "./components/PhilosophySection";
import { ProcessSection } from "./components/ProcessSection";
import { TestimonialsSection } from "./components/TestimonialsSection";
import { EnquirySection } from "./components/EnquirySection";
import { FAQSection } from "./components/FAQSection";
import { Footer } from "./components/Footer";

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#DDD4C4] text-[#0A0908] flex flex-col font-sans selection:bg-[#9E7844]/30 selection:text-[#0A0908]">
      {/* Fixed Header */}
      <Navigation />

      {/* Main Page Flow */}
      <main className="flex-1">
        {/* Section 1: Hero with cinematic video */}
        <HeroSection />

        {/* Section 2: Architectural Metrics & Trusted Institutional Partners */}
        <StatsClientsSection />

        {/* Section 3: Our Story, What We Offer & Industry-Leading Service */}
        <IntroSection />

        {/* Section 4: Turnkey Construction Packages (Elegance, Premium, Elite) */}
        <PricingPackagesSection />

        {/* Section 5: Practice & Services */}
        <ServicesSection />

        {/* Section 6: Selected Projects Showcase inspired by reference UI */}
        <ProjectsSection />

        {/* Section 7: Architecture Philosophy */}
        <PhilosophySection />

        {/* Section 8: Process & Methodology */}
        <ProcessSection />

        {/* Section 10: Verified Client Testimonials */}
        <TestimonialsSection />

        {/* Section 11: Project Enquiry Form with 3D model & reference styling */}
        <EnquirySection />

        {/* Section 12: Frequently Asked Questions */}
        <FAQSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
