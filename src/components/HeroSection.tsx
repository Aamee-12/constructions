import React from "react";
import heroBackground from "../../From Foundation to Modern Villa.png";

export const HeroSection: React.FC = () => (
  <section
    id="hero"
    className="relative w-full overflow-hidden flex items-end bg-transparent"
    style={{ height: "100vh", minHeight: "520px" }}
  >
    <img
      src={heroBackground}
      alt=""
      aria-hidden="true"
      fetchPriority="high"
      style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }}
    />
    <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 pt-36 pb-16 md:pb-24">
      <div className="w-fit max-w-full space-y-6">
        <div className="inline-flex items-center gap-3">
          <span className="w-8 h-[2px] bg-[#C59A5A]" />
          <span className="text-[11px] md:text-xs uppercase tracking-[0.28em] text-white font-semibold">INTERIORS · CONSTRUCTION</span>
        </div>
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-[0.98] tracking-[-0.03em] text-white max-w-3xl">
          Architecture that feels like home.
        </h1>
        <p className="text-[#F5F2EC] text-base md:text-xl leading-relaxed max-w-xl">
          Thoughtfully designed homes, built with care from the first sketch to the final handover.
        </p>
        <div className="flex flex-wrap items-center gap-4 pt-2">
          <a href="#projects" className="px-8 py-4 bg-[#C59A5A] hover:bg-[#b08544] text-[#141210] font-semibold text-xs uppercase tracking-[0.2em] transition-colors">Explore Projects</a>
          <a href="#enquiry" className="px-8 py-4 text-white font-medium text-xs uppercase tracking-[0.2em] transition-colors hover:text-[#C59A5A]">Start a Project</a>
        </div>
      </div>
    </div>
  </section>
);
