import React from "react";

export const StatsClientsSection: React.FC = () => {
  const stats = [
    { label: "Clients", value: "255+" },
    { label: "Projects", value: "222+" },
    { label: "Repairing", value: "755+" },
    { label: "Awards", value: "15" },
  ];

  // The complete suite of official builder marks (darkened & enhanced contrast)
  const developerLogos = [
    {
      name: "Shriram Properties",
      src: "/assets/logos/dark/shriram_hd.png",
      heightClass: "h-11 sm:h-12",
    },
    {
      name: "Mahindra Lifespaces",
      src: "/assets/logos/dark/mahindra_hd.png",
      heightClass: "h-8 sm:h-9",
    },
    {
      name: "Sobha",
      src: "/assets/logos/dark/sobha_hd.png",
      heightClass: "h-12 sm:h-14",
    },
    {
      name: "Casagrand",
      src: "/assets/logos/dark/casagrand_hd.png",
      heightClass: "h-7 sm:h-8",
    },
    {
      name: "Sumadhura",
      src: "/assets/logos/dark/sumadhura_badge.png",
      heightClass: "h-10 sm:h-11 rounded-md overflow-hidden",
    },
    {
      name: "Brigade Group",
      src: "/assets/logos/dark/brigade.png",
      heightClass: "h-10 sm:h-12",
    },
    {
      name: "Godrej Properties",
      src: "/assets/logos/dark/godrej.png",
      heightClass: "h-9 sm:h-10",
    },
    {
      name: "Prestige Group",
      src: "/assets/logos/dark/prestige.png",
      heightClass: "h-10 sm:h-12",
    },
    {
      name: "L&T Realty",
      src: "/assets/logos/dark/lt_realty.png",
      heightClass: "h-8 sm:h-9",
    },
    {
      name: "Embassy Group",
      src: "/assets/logos/dark/embassy.png",
      heightClass: "h-10 sm:h-11",
    },
  ];

  return (
    <section className="relative z-20 bg-[#D0C5B2] text-[#0A0908] overflow-hidden py-10 md:py-14">
      {/* Top Header Metrics: Centered across all screen sizes */}
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Metric Counter Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10 pb-10 border-b border-[#0A0908]/15 text-center">
          {stats.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center space-y-1 group transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#0A0908] font-medium tracking-tight group-hover:text-[#7D5A2B] transition-colors duration-300">
                {item.value}
              </div>
              <span className="text-xs uppercase tracking-[0.22em] text-[#3D3830] font-semibold">
                {item.label}
              </span>
            </div>
          ))}
        </div>

        {/* Minimal Subtle Header for Partners Ticker */}
        <div className="pt-8 pb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div className="flex items-center gap-2.5">
            <span className="w-2 h-2 bg-[#7D5A2B] rotate-45" />
            <span className="text-[11px] uppercase tracking-[0.24em] text-[#7D5A2B] font-bold">
              TRUSTED BY LEADING DEVELOPERS & ENTERPRISES
            </span>
          </div>
          <span className="text-[10px] uppercase tracking-[0.18em] text-[#3D3830] font-semibold">
            Institutional Partners
          </span>
        </div>
      </div>

      {/* Edge-to-Edge Seamless Architectural Marquee Banner with Clearer High-Contrast Logos */}
      <div className="w-full relative mt-2 overflow-hidden py-5 border-y border-[#0A0908]/15 bg-[#C9BEAA]">
        {/* Soft edge fade masks */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 sm:w-36 bg-gradient-to-r from-[#C9BEAA] to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 sm:w-36 bg-gradient-to-l from-[#C9BEAA] to-transparent z-10" />

        <div className="flex w-max gap-12 sm:gap-20 animate-marquee items-center select-none">
          {/* First loop */}
          {developerLogos.map((logo, idx) => (
            <div
              key={`logo-1-${idx}`}
              className="flex items-center gap-12 sm:gap-20 group transition-all duration-300"
              title={logo.name}
            >
              <div className="flex items-center justify-center h-12">
                <img
                  src={logo.src}
                  alt={logo.name}
                  className={`${logo.heightClass} w-auto max-w-[190px] object-contain transition-all duration-300 filter brightness-90 contrast-150 opacity-100 hover:scale-105`}
                />
              </div>
              <span className="w-1.5 h-1.5 rounded-full bg-[#141210]/40" />
            </div>
          ))}

          {/* Second loop for seamless continuous movement */}
          {developerLogos.map((logo, idx) => (
            <div
              key={`logo-2-${idx}`}
              className="flex items-center gap-12 sm:gap-20 group transition-all duration-300"
              title={logo.name}
            >
              <div className="flex items-center justify-center h-12">
                <img
                  src={logo.src}
                  alt={logo.name}
                  className={`${logo.heightClass} w-auto max-w-[190px] object-contain transition-all duration-300 filter brightness-90 contrast-150 opacity-100 hover:scale-105`}
                />
              </div>
              <span className="w-1.5 h-1.5 rounded-full bg-[#141210]/40" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
