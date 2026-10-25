import React from "react";
import { ArrowUpRight } from "lucide-react";
import { SITE_CONFIG } from "../config/siteConfig";

export const IntroSection: React.FC = () => {
  const pillars = [
    {
      number: "01",
      title: "Free Consultation",
      desc: "Turn your vision into a blueprint. Get started with a free, no-obligation consultation.",
    },
    {
      number: "02",
      title: "Quality Construction",
      desc: "Built with precision, designed for permanence. Our quality construction sets the benchmark.",
    },
    {
      number: "03",
      title: "Exquisite Designs",
      desc: "Review our exquisite portfolio—where every option is a work of art—and pinpoint your favorite design.",
    },
    {
      number: "04",
      title: "Project Tracking",
      desc: "Achieve total peace of mind with our real-time project tracking and unwavering transparency.",
    },
    {
      number: "05",
      title: "On-Time Delivery",
      desc: "Time is our commitment. We ensure every project milestone and final handover is met on schedule.",
    },
  ];

  const offerings = [
    {
      num: "01",
      title: "We Understand Requirements",
      desc: "Every project starts with a vision, but it succeeds through listening. We know that your requirements go beyond just blueprints and materials; they are about functionality, lifestyle, and your future goals.",
      image: "/assets/images/offer-requirements.jpg",
      actionText: "Learn More",
      href: "#services",
    },
    {
      num: "02",
      title: "We Work Precisely",
      desc: "Once the plan is set, our team executes it with exacting attention to detail. We adhere strictly to timelines and specifications, ensuring that no corner is cut. From the first measurement to the final fitting, we maintain rigorous quality control to ensure the structure is safe, solid, and built to last.",
      image: "/assets/images/offer-precision.jpg",
      actionText: "Learn More",
      href: "#process",
    },
    {
      num: "03",
      title: "We Deliver Best Output",
      desc: "Our job isn’t finished until you are 100% satisfied. We take pride in handing over projects that are clean, compliant, and ready for immediate use. From the structural integrity to the final coat of paint, we ensure the finished product matches your vision perfectly and stands the test of time.",
      image: "/assets/images/offer-output.jpg",
      actionText: "Learn More",
      href: "#projects",
    },
  ];

  return (
    <section id="about" className="relative w-full bg-[#141312] text-[#EBE6DE] py-16 md:py-24 border-y border-[#2B2824] overflow-hidden">
      {/* Subtle architectural ambient highlight in the corner */}
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-[#8F6B38]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Subtle decorative divider */}
        <div className="flex items-center gap-4 mb-10">
          <div className="w-2.5 h-2.5 bg-[#C5A880] rotate-45" />
          <div className="h-[1px] flex-1 bg-white/10" />
        </div>

        {/* Part 1: Construct Your Dream Home */}
        <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center pb-14 border-b border-white/10">
          {/* Left Narrative Column */}
          <div className="lg:col-span-6 space-y-5">
            <span className="text-xs uppercase tracking-[0.26em] text-[#C5A880] font-bold block">
              About {SITE_CONFIG.brand.legalName}
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl leading-[1.06] tracking-[-0.025em] text-white font-medium">
              Construct your dream home.
            </h2>

            <p className="text-sm sm:text-base text-[#D0C8BD] leading-relaxed font-normal">
              From concept to key handover, we make your home-building journey effortless, transparent, and personalized. Whether it’s an independent home, villa, rental house, PG, or commercial space, we turn your vision into a beautifully crafted reality.
            </p>

            <p className="text-xs sm:text-sm text-[#A89F91] leading-relaxed font-normal">
              We believe your home is more than a structure — it’s a reflection of your lifestyle, dreams, and future. Our expert team transforms your vision into a beautifully designed, perfectly executed home that stands the test of time. With cutting-edge engineering, transparent processes, and a legacy of trust, we ensure your home-building journey is seamless and stress-free.
            </p>

            <div className="p-4 rounded-xl bg-[#1C1A17] border border-white/10 space-y-1.5">
              <span className="text-[11px] font-mono font-bold text-[#C5A880] uppercase tracking-wider block">
                Legacy of Excellence
              </span>
              <p className="text-xs text-[#B5ABA0] leading-relaxed font-normal">
                With a legacy of building over 220 million sq. ft. and partnering with renowned developers like Prestige, Embassy, and Mahindra, <strong className="text-white font-semibold">{SITE_CONFIG.brand.name}</strong> carries this benchmark forward — delivering high-quality, luxurious homes tailored specifically to your vision.
              </p>
            </div>

            {/* 5 Distinct Pillars (Clean architectural typography, no generic icons) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-1">
              {pillars.slice(0, 4).map((pillar, idx) => (
                <div
                  key={idx}
                  className="p-4 border border-white/10 bg-[#1D1B18] hover:border-[#C5A880]/60 hover:bg-[#23201C] transition-all duration-300 group rounded-lg"
                >
                  <span className="font-mono text-xs font-bold text-[#C5A880] tracking-wider block mb-1">
                    {pillar.number}
                  </span>
                  <h4 className="font-serif text-base text-white font-semibold mb-1 group-hover:text-[#C5A880] transition-colors">
                    {pillar.title}
                  </h4>
                  <p className="text-xs text-[#A89F91] leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              ))}

              {/* 5th Pillar spanned full width */}
              <div className="sm:col-span-2 p-4 border border-white/10 bg-[#1D1B18] hover:border-[#C5A880]/60 hover:bg-[#23201C] transition-all duration-300 group rounded-lg flex items-start gap-3">
                <span className="font-mono text-xs font-bold text-[#C5A880] tracking-wider shrink-0 mt-0.5">
                  {pillars[4].number}
                </span>
                <div>
                  <h4 className="font-serif text-base text-white font-semibold mb-1 group-hover:text-[#C5A880] transition-colors">
                    {pillars[4].title}
                  </h4>
                  <p className="text-xs text-[#A89F91] leading-relaxed">
                    {pillars[4].desc}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Architectural Cinematic Video Frame */}
          <div className="lg:col-span-6">
            <div className="relative group overflow-hidden border border-white/15 rounded-xl shadow-2xl bg-black">
              <video
                src="/assets/video/story-architecture.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full aspect-[4/5] object-cover transition-transform duration-700 group-hover:scale-105 contrast-105 brightness-100"
              />
              <div className="absolute bottom-5 left-5 right-5 p-4 bg-[#171513]/90 backdrop-blur-md border border-white/15 rounded-lg shadow-2xl">
                <span className="text-[10px] uppercase tracking-[0.24em] text-[#C5A880] font-bold block mb-1">
                  Architectural Precision
                </span>
                <p className="text-xs text-[#E5DFD5] font-normal leading-relaxed">
                  Every structural angle, panoramic window aperture, and raw stone joint orchestrated in complete harmony.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Part 2: What We Offer */}
        <div className="relative pt-12 md:pt-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <div>
              <span className="text-xs uppercase tracking-[0.26em] text-[#C5A880] font-bold block mb-2">
                What We Offer
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-white font-medium tracking-tight">
                Refined execution from concept to key handover.
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-[#A89F91] max-w-md font-normal leading-relaxed">
              We focus on the tenets that matter: active listening, disciplined engineering, and handover excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {offerings.map((item, idx) => (
              <div
                key={idx}
                className="border border-white/10 bg-[#1D1B18] hover:border-[#C5A880]/60 hover:bg-[#23201C] transition-all duration-300 flex flex-col justify-between group overflow-hidden rounded-xl"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 contrast-105"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 px-2.5 py-0.5 font-mono text-xs font-bold text-white bg-black/80 backdrop-blur-md border border-white/20 rounded">
                    {item.num}
                  </div>
                </div>

                <div className="p-6 space-y-3.5 flex-1 flex flex-col justify-between">
                  <div className="space-y-2.5">
                    <h4 className="font-serif text-xl text-white font-semibold group-hover:text-[#C5A880] transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-xs text-[#B5ABA0] leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-white/10">
                    <a
                      href={item.href}
                      className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-semibold text-[#C5A880] hover:text-white transition-colors"
                    >
                      <span>{item.actionText}</span>
                      <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Industry Best Service Banner */}
          <div className="mt-12 p-6 sm:p-10 border border-[#8F6B38]/40 bg-[#1A1815] rounded-xl flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
            <div className="space-y-1.5 text-center md:text-left">
              <span className="text-[10px] uppercase tracking-[0.24em] text-[#C5A880] font-bold">
                Industry-Leading Service
              </span>
              <h4 className="font-serif text-xl sm:text-2xl text-white font-semibold">
                We Provide the Best Service in the Industry.
              </h4>
              <p className="text-xs sm:text-sm text-[#B5ABA0] max-w-xl font-normal">
                Ready to bring your architectural vision to life? Connect directly with our lead architects and project partners today with just one tap.
              </p>
            </div>

            <a
              href="#enquiry"
              className="px-8 py-3.5 bg-[#8F6B38] hover:bg-[#A37B40] text-white font-semibold text-xs uppercase tracking-[0.2em] transition-all duration-300 shadow-xl shadow-black/40 whitespace-nowrap shrink-0 rounded-lg"
            >
              Contact Us Today
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
