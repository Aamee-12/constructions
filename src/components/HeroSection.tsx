import React from "react";

export const HeroSection: React.FC = () => (
  <section
    id="hero"
    className="relative min-h-[100svh] flex items-end overflow-hidden bg-transparent"
  >
    <img src="/assets/images/hero-construction-home.png" alt="" aria-hidden="true" fetchPriority="high" className="absolute inset-0 z-0 h-full w-full object-cover object-center" />
    <div className="relative z-10 max-w-7xl mx-auto w-full px-6 md:px-12 pt-36 pb-16 md:pb-24">
      <div className="max-w-3xl space-y-6">
        <div className="inline-flex items-center gap-3">
          <span className="w-8 h-[2px] bg-[#C59A5A]" />
          <span className="text-[11px] md:text-xs uppercase tracking-[0.28em] text-white font-semibold">INTERIORS · CONSTRUCTION</span>
        </div>
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-[0.98] tracking-[-0.03em] text-white max-w-3xl drop-shadow-lg">
          Architecture that feels like home.
        </h1>
        <p className="text-[#F5F2EC] text-base md:text-xl leading-relaxed max-w-xl drop-shadow-md">
          Thoughtfully designed homes, built with care from the first sketch to the final handover.
        </p>
        <div className="flex flex-wrap items-center gap-4 pt-2">
          <a href="#projects" className="px-8 py-4 bg-[#C59A5A] hover:bg-[#b08544] text-[#141210] font-semibold text-xs uppercase tracking-[0.2em] transition-colors">Explore Projects</a>
          <a href="#enquiry" className="px-8 py-4 border border-white/60 hover:border-white text-white font-medium text-xs uppercase tracking-[0.2em] transition-colors bg-black/30 backdrop-blur">Start a Project</a>
        </div>
      </div>
      <img
        src="/assets/images/hero-construction-home.png"
        alt="A home under construction beside a completed modern residence"
        className="mt-10 md:mt-14 w-full rounded-xl object-cover shadow-2xl aspect-[16/8]"
        loading="eager"
      />
    </div>
  </section>
);
