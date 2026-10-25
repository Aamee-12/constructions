import React, { useState } from "react";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { SITE_CONFIG } from "../config/siteConfig";

export const ServicesSection: React.FC = () => {
  const [activeServiceId, setActiveServiceId] = useState<string>(
    SITE_CONFIG.services[0].id
  );

  const activeService =
    SITE_CONFIG.services.find((s) => s.id === activeServiceId) ||
    SITE_CONFIG.services[0];

  return (
    <section id="services" className="relative py-28 md:py-36 bg-[#D0C5B2] text-[#0A0908]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-8 border-b border-[#0A0908]/15">
          <div>
            <span className="text-[11px] uppercase tracking-[0.24em] text-[#8F6B38] font-bold block mb-3">
              Capabilities & Practice
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl tracking-[-0.025em] text-[#0A0908] font-medium">
              Holistic Design & Build.
            </h2>
          </div>
          <p className="text-sm text-[#38332C] max-w-md font-normal leading-relaxed">
            Our multi-disciplinary practice covers the entire lifecycle of luxury residential architecture, from earliest sketches to turnkey move-in day.
          </p>
        </div>

        {/* Interactive Editorial Services Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          {/* Services Selector Column */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              {SITE_CONFIG.services.map((service) => {
                const isActive = service.id === activeServiceId;
                return (
                  <button
                    key={service.id}
                    onClick={() => setActiveServiceId(service.id)}
                    className={`w-full text-left p-6 transition-all duration-300 border rounded-xl ${
                      isActive
                        ? "bg-[#EBE4D8] border-[#8F6B38] shadow-xl ring-1 ring-[#8F6B38]/30"
                        : "bg-[#DDD4C4]/60 border-[#0A0908]/10 hover:border-[#0A0908]/30 hover:bg-[#DDD4C4]"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs tracking-[0.2em] font-mono font-bold text-[#8F6B38]">
                        {service.number}
                      </span>
                      <ArrowUpRight
                        className={`w-4 h-4 transition-transform duration-300 ${
                          isActive
                            ? "text-[#8F6B38] translate-x-1 -translate-y-1"
                            : "text-[#38332C] opacity-40"
                        }`}
                      />
                    </div>
                    <h3 className="font-serif text-2xl font-bold text-[#0A0908] mb-1">
                      {service.title}
                    </h3>
                    <p className="text-xs text-[#38332C] line-clamp-2 leading-relaxed font-normal">
                      {service.description}
                    </p>
                  </button>
                );
              })}
            </div>

            <div className="pt-4">
              <a
                href="#enquiry"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-lg bg-[#141210] hover:bg-[#2B2621] text-[#F5EFE6] text-xs uppercase tracking-[0.18em] transition-all duration-300 font-bold shadow-xl border border-[#8F6B38]/40"
              >
                <span>Request Custom Project Scope</span>
                <ArrowUpRight className="w-4 h-4 text-[#C5A880]" />
              </a>
            </div>
          </div>

          {/* Service Feature Display Panel with High Clarity Image */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="relative flex-1 min-h-[460px] rounded-xl overflow-hidden border border-[#0A0908]/20 shadow-2xl group bg-black">
              {/* Image rendered with pure clarity, no washed-out veil */}
              <img
                src={activeService.image}
                alt={activeService.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 brightness-100 contrast-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

              {/* Floating Content Box */}
              <div className="absolute bottom-0 left-0 right-0 p-8 sm:p-10 bg-[#141210]/90 backdrop-blur-md border-t border-white/15 text-white">
                <span className="text-[10px] uppercase tracking-[0.22em] text-[#C5A880] font-bold block mb-2">
                  Service Overview — {activeService.number}
                </span>
                <h4 className="font-serif text-2xl sm:text-3xl text-white font-semibold mb-3">
                  {activeService.headline}
                </h4>
                <p className="text-xs sm:text-sm text-[#D0C8BD] leading-relaxed mb-6 font-normal">
                  {activeService.description}
                </p>

                {/* Scope Points */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 border-t border-white/15">
                  {activeService.highlights.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#C5A880] shrink-0" />
                      <span className="text-xs text-[#EBE4D8] font-medium">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
