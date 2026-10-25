import React, { useState, useEffect } from "react";
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
import { NotFoundPage } from "./components/NotFoundPage";

export const App: React.FC = () => {
  const [currentPath, setCurrentPath] = useState<string>(window.location.pathname);

  useEffect(() => {
    const handleLocationChange = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener("popstate", handleLocationChange);
    return () => window.removeEventListener("popstate", handleLocationChange);
  }, []);

  // Recognized routes: "/", "", or index.html
  const isHome = currentPath === "/" || currentPath === "" || currentPath === "/index.html";

  if (!isHome) {
    return (
      <NotFoundPage
        onBackToHome={() => {
          window.history.pushState({}, "", "/");
          setCurrentPath("/");
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
      />
    );
  }

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

        {/* Section 6: Selected Projects Showcase */}
        <ProjectsSection />

        {/* Section 7: Architecture Philosophy */}
        <PhilosophySection />

        {/* Section 8: Process & Methodology */}
        <ProcessSection />

        {/* Section 9: Verified Client Testimonials */}
        <TestimonialsSection />

        {/* Section 10: Project Enquiry Form with 3D model */}
        <EnquirySection />

        {/* Section 11: Frequently Asked Questions */}
        <FAQSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
