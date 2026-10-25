import React from "react";
import { SITE_CONFIG } from "../config/siteConfig";

export const PhilosophySection: React.FC = () => {
  return (
    <section id="philosophy" className="relative py-16 md:py-20 bg-[#DDD4C4] text-[#0A0908]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Left Visual Column - 100% Crisp Definition */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative border border-[#0A0908]/20 group overflow-hidden shadow-2xl rounded-2xl bg-black">
              <img
                src="/assets/images/philosophy-exterior.jpg"
                alt="Architectural permanence and clean minimalist lines"
                className="w-full aspect-[4/5] object-cover transition-transform duration-700 group-hover:scale-105 brightness-100 contrast-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-[#141210]/90 backdrop-blur-md border border-white/15 text-white">
                <span className="text-[10px] uppercase tracking-[0.22em] text-[#C5A880] font-bold block mb-1">
                  Design Tenet
                </span>
                <p className="text-xs text-[#EBE4D8] font-normal leading-relaxed">
                  Structures engineered to age gracefully, gathering patina with time rather than decay.
                </p>
              </div>
            </div>
          </div>

          {/* Right Philosophy Narrative Column */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
            <div>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl leading-[1.08] tracking-[-0.025em] text-[#0A0908] font-medium">
                {SITE_CONFIG.brand.philosophyTitle}
              </h2>
            </div>

            <p className="text-base text-[#332E27] leading-relaxed font-normal">
              We reject transient architectural fads in favor of proportions rooted in natural harmony, honest material expression, and the daily rituals of the people who reside within.
            </p>

            {/* Core Tenets Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-4 border-t border-[#0A0908]/15">
              {SITE_CONFIG.brand.philosophyPoints.map((point, index) => (
                <div key={index} className="space-y-1.5 p-4 rounded-xl bg-[#EBE4D8] border border-[#0A0908]/10">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-[#8F6B38] rotate-45" />
                    <h3 className="font-serif text-lg text-[#0A0908] font-bold">
                      {point.title}
                    </h3>
                  </div>
                  <p className="text-xs text-[#47423B] leading-relaxed font-normal pl-3.5">
                    {point.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
