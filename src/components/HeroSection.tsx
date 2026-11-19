import React from "react";
import heroHome from "../../public/assets/images/hero-home-solution.webp";

export const HeroSection: React.FC = () => (
  <section
    id="hero"
    className="relative isolate w-full overflow-hidden bg-[#171511] text-white"
    style={{ minHeight: "100vh" }}
  >
    {/* Keep the floating navigation legible while letting the hero photo stay bright. */}
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-x-0 top-0 z-0 h-44 bg-gradient-to-b from-black/65 via-black/25 to-transparent"
    />
    <div className="relative z-10 mx-auto grid min-h-screen w-full max-w-7xl items-center gap-10 px-6 pb-16 pt-32 md:px-12 md:pb-20 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
      <div className="max-w-2xl space-y-6 md:space-y-7">
        <div className="inline-flex items-center gap-3">
          <span className="h-[2px] w-8 bg-[#C59A5A]" />
          <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-white md:text-xs">
            INTERIORS · CONSTRUCTION
          </span>
        </div>
        <h1 className="max-w-2xl font-serif text-5xl leading-[0.98] tracking-[-0.03em] text-white md:text-6xl lg:text-7xl">
          From Foundation to Finish — Your Complete Home Solution.
        </h1>
        <p className="max-w-xl text-base leading-relaxed text-[#F5F2EC] md:text-xl">
          One team. Every step. Your dream home.
        </p>
        <div className="flex flex-wrap items-center gap-4 pt-2">
          <a href="#projects" className="bg-[#C59A5A] px-8 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#141210] transition-colors hover:bg-[#b08544]">
            Explore Projects
          </a>
          <a href="#enquiry" className="px-8 py-4 text-xs font-medium uppercase tracking-[0.2em] text-white transition-colors hover:text-[#C59A5A]">
            Start a Project
          </a>
        </div>
      </div>

      <div className="relative mx-auto w-full max-w-3xl lg:max-w-none">
        <div aria-hidden="true" className="absolute -inset-3 rounded-[2rem] bg-[#C59A5A]/15 blur-2xl" />
        <div className="relative overflow-hidden rounded-2xl border border-white/20 bg-[#25221d] shadow-[0_28px_90px_rgba(0,0,0,0.48)]">
          <img
            src={heroHome}
            alt="A finished HM Constructions home with modern architectural details"
            fetchPriority="high"
            className="aspect-[5/4] w-full object-cover object-center"
          />
        </div>
      </div>
    </div>
  </section>
);
