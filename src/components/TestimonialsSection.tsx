import React from "react";
import { Star, Quote } from "lucide-react";

interface Testimonial {
  name: string;
  role: string;
  focus: string;
  highlight: string;
  quote: string;
  image: string;
  rating: number;
}

export const TestimonialsSection: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      name: "Rajesh K",
      role: "Software Engineer",
      focus: "The Turnkey Experience",
      highlight: "Turnkey Package",
      quote:
        "Choosing their turnkey package was the best decision; they handled everything from blueprints to the final keys. A truly stress-free experience that delivered our dream home exactly on time.",
      image: "/assets/testimonials/client_project_1.jpg",
      rating: 5,
    },
    {
      name: "Anita & Suresh M.",
      role: "Homeowners",
      focus: "Quality & Structure",
      highlight: "Attention to Detail",
      quote:
        "Their attention to detail and structural integrity is unmatched in the market. They stuck strictly to the high-quality materials promised and delivered a solid build we are proud of.",
      image: "/assets/testimonials/client_project_2.jpg",
      rating: 5,
    },
    {
      name: "Priya D.",
      role: "Codetic",
      focus: 'The "Interior & Aesthetics" (Focus On Design/Finish)',
      highlight: "Flawless Woodwork",
      quote:
        "The transition from construction to interiors was seamless, and the final woodwork is flawless. They perfectly translated our vision into reality, making our home look exactly like the 3D designs.",
      image: "/assets/testimonials/client_project_3.jpg",
      rating: 5,
    },
    {
      name: "Vikram S.",
      role: "Real Estate Investor",
      focus: "Budget & Transparency",
      highlight: "Zero Hidden Costs",
      quote:
        "Finally, a builder who sticks to the quote with absolutely zero hidden costs. Their transparency regarding pricing and material grades gave us total peace of mind throughout the project.",
      image: "/assets/testimonials/client_project_4.jpg",
      rating: 5,
    },
    {
      name: "Rahman Khan",
      role: "Advocate",
      focus: 'The "Supportive Team" (Focus On Communication)',
      highlight: "Impressive Precision",
      quote:
        "The team was incredibly professional, keeping us updated with weekly site reports and photos. They listened to every requirement and executed our plans with impressive precision.",
      image: "/assets/testimonials/client_project_5.jpg",
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="relative py-16 md:py-24 bg-[#DDD4C4] text-[#141210] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <span className="text-xs uppercase tracking-[0.26em] text-[#8F6B38] font-bold block mb-3">
            Client Stories
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#141210] font-medium tracking-tight">
            Testimonials
          </h2>
          <div className="w-16 h-0.5 bg-[#8F6B38] mx-auto mt-5 mb-4" />
          <p className="text-sm sm:text-base text-[#38332C] font-normal leading-relaxed">
            Real stories from homeowners, professionals, and investors who built their enduring spaces with us.
          </p>
        </div>

        {/* Testimonials 5-Column Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {testimonials.map((item, idx) => (
            <div
              key={idx}
              className="group relative flex flex-col justify-between p-6 bg-[#EBE4D8] border border-[#141210]/15 hover:border-[#8F6B38] hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 rounded-xl"
            >
              <div>
                {/* Client House Photo + Quote Icon Row */}
                <div className="relative mb-5 flex items-start justify-between">
                  <div className="relative w-24 h-28 overflow-hidden rounded-lg shadow-md border border-[#141210]/15 bg-[#D8CEBE]">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover object-center contrast-105 group-hover:scale-110 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-2 rounded-full bg-[#DDD4C4] border border-[#141210]/10 text-[#8F6B38]">
                    <Quote className="w-5 h-5 fill-current opacity-80" />
                  </div>
                </div>

                {/* Client Name & Role */}
                <div className="mb-2">
                  <h4 className="font-serif text-lg font-bold text-[#141210] leading-snug">
                    {item.name}
                  </h4>
                  <p className="text-xs text-[#5A5247] italic font-normal">
                    {item.role}
                  </p>
                </div>

                {/* 5 Stars Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {Array.from({ length: item.rating }).map((_, sIdx) => (
                    <Star
                      key={sIdx}
                      className="w-4 h-4 fill-[#E6A23C] text-[#E6A23C]"
                    />
                  ))}
                </div>

                {/* Topic / Focus Header */}
                <div className="mb-3">
                  <p className="text-xs font-bold text-[#141210] tracking-tight">
                    {item.focus}
                  </p>
                </div>

                {/* Detailed Testimonial Quote */}
                <p className="text-xs text-[#38332C] leading-relaxed italic">
                  “{item.quote}”
                </p>
              </div>

              {/* Bottom Subtle Indicator */}
              <div className="pt-5 mt-5 border-t border-[#141210]/10 flex items-center justify-between text-[11px] font-semibold text-[#8F6B38]">
                <span>Verified Handover</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#8F6B38]" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
