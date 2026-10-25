import React from "react";
import { ArrowRight, FileText, Users, BookmarkCheck, LayoutTemplate, LineChart, Home } from "lucide-react";

export const ProcessSection: React.FC = () => {
  const steps = [
    {
      num: "1",
      title: "Raise a Request",
      desc: "Connect with us through our quick online scope form or direct consultation line.",
      icon: <FileText className="w-5 h-5 text-[#8F6B38]" />,
    },
    {
      num: "2",
      title: "Meet our Expert",
      desc: "Detailed site appraisal and architectural discussion with our principal consultants.",
      icon: <Users className="w-5 h-5 text-[#8F6B38]" />,
    },
    {
      num: "3",
      title: "Book with Us",
      desc: "Transparent contract finalisation with milestone breakdowns and zero hidden costs.",
      icon: <BookmarkCheck className="w-5 h-5 text-[#8F6B38]" />,
    },
    {
      num: "4",
      title: "Receive Designs",
      desc: "2D space planning, structural drawings, and photorealistic 3D elevations.",
      icon: <LayoutTemplate className="w-5 h-5 text-[#8F6B38]" />,
    },
    {
      num: "5",
      title: "Track & Transact",
      desc: "Real-time project tracking, CCTV site access, and weekly verified audit reports.",
      icon: <LineChart className="w-5 h-5 text-[#8F6B38]" />,
    },
    {
      num: "6",
      title: "Settle In",
      desc: "Flawless handover with 100% quality checklist and lifelong structural warranty.",
      icon: <Home className="w-5 h-5 text-[#8F6B38]" />,
    },
  ];

  return (
    <section id="process" className="relative py-12 md:py-16 bg-[#DDD4C4] text-[#0A0908]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-12">
          <span className="text-xs uppercase tracking-[0.26em] text-[#8F6B38] font-bold block mb-2">
            How We Work
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#0A0908] font-medium tracking-tight">
            Our Process
          </h2>
          <div className="w-12 h-0.5 bg-[#8F6B38] mx-auto mt-4 mb-3" />
          <p className="text-xs sm:text-sm text-[#38332C] font-normal leading-relaxed">
            A clear, predictable, and stress-free journey from your initial spark to keys in hand.
          </p>
        </div>

        {/* 6-Step Numerical Process Flow - Clean Horizontal Stage Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="p-5 bg-[#EBE4D8] border border-[#0A0908]/15 hover:border-[#8F6B38] hover:shadow-xl transition-all duration-300 rounded-xl flex flex-col justify-between group relative"
            >
              <div>
                {/* Step Number Badge */}
                <div className="w-9 h-9 rounded-full bg-[#141210] text-[#EBE4D8] font-mono text-xs font-bold flex items-center justify-center mb-4 group-hover:bg-[#8F6B38] transition-colors shadow-md">
                  {step.num}
                </div>

                <div className="mb-2.5 text-[#8F6B38]">
                  {step.icon}
                </div>

                <h3 className="font-serif text-base font-bold text-[#0A0908] mb-1.5 leading-snug">
                  {step.title}
                </h3>

                <p className="text-xs text-[#47423B] leading-relaxed">
                  {step.desc}
                </p>
              </div>

              {/* Step indicator arrow */}
              {idx < steps.length - 1 && (
                <div className="hidden lg:block absolute -right-2.5 top-9 z-10">
                  <ArrowRight className="w-3.5 h-3.5 text-[#8F6B38]/60" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Book Free Consultation Action Box */}
        <div className="mt-10 p-6 sm:p-10 bg-[#141210] text-white rounded-2xl border border-white/10 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1.5 text-center md:text-left">
            <span className="text-[10px] uppercase tracking-[0.24em] text-[#C5A880] font-bold">
              Free Consultation
            </span>
            <h4 className="font-serif text-xl sm:text-2xl text-white font-semibold">
              Book Free Consultation
            </h4>
            <p className="text-xs sm:text-sm text-[#D0C8BD] max-w-xl font-normal">
              Start your home-building journey with a free expert consultation.
            </p>
          </div>

          <a
            href="#enquiry"
            className="px-8 py-3.5 bg-[#8F6B38] hover:bg-[#A37B40] text-white font-bold text-xs uppercase tracking-[0.2em] transition-all duration-300 shadow-xl shadow-black/40 whitespace-nowrap shrink-0 rounded-lg"
          >
            Start Your Construction
          </a>
        </div>
      </div>
    </section>
  );
};
