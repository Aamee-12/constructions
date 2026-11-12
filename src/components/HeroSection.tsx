import React from "react";

export const HeroSection: React.FC = () => (
  <section id="hero" className="relative h-[calc(100svh-1px)] min-h-[480px] w-full overflow-hidden bg-transparent">
    <img
      src="/assets/images/hero-construction-home.png"
      alt="A home under construction beside a completed modern residence"
      fetchPriority="high"
      className="absolute inset-0 block h-full w-full object-cover object-center"
    />
  </section>
);
