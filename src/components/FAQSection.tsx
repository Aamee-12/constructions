import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FAQItem[] = [
    {
      question: "What factors affect house construction costs in Bangalore?",
      answer:
        "House construction costs depend on factors like plot size, design complexity, materials used, labor charges, and permits. We provide transparent pricing and a detailed cost breakdown to help you plan your budget effectively.",
    },
    {
      question: "How do I choose the right construction company in Bangalore?",
      answer:
        "Look for a company with proven experience, quality assurance, transparent pricing, and customer testimonials. We bring decades of proven engineering expertise, ensuring high-quality construction, Vastu compliance, and a 10-year structural warranty.",
    },
    {
      question: "What services do home construction contractors provide?",
      answer:
        "We provide end-to-end construction services, including design consultation, project planning, material sourcing, construction execution, quality checks, and final handover. We ensure a stress-free experience from start to finish.",
    },
    {
      question: "Can I customize my home design?",
      answer:
        "Yes! As custom home builders, we tailor every aspect of your home, from floor plans to interior finishes, ensuring it reflects your vision, lifestyle, and Vastu preferences.",
    },
    {
      question: "How can I get a quotation for house construction in Bangalore?",
      answer:
        "Simply contact us with your requirements. We’ll assess your project, offer a free consultation, and provide a detailed cost estimate tailored to your needs.",
    },
    {
      question: "Do you handle commercial construction projects?",
      answer:
        "Yes, we specialize in residential and commercial construction in Bangalore. Whether you're building a house or a commercial space, we deliver quality and efficiency.",
    },
    {
      question: "What makes your team the trusted choice in Bangalore?",
      answer:
        "With a legacy of engineering excellence, cutting-edge technology, premium materials, and a dedicated team, we are one of the most trusted residential construction partners in Bangalore. We offer a 10-year structural warranty, 100% Vastu-compliant designs, and a commitment to on-time delivery.",
    },
    {
      question: "How do I start the process of building my home?",
      answer:
        "Getting started is simple! Contact us for a free consultation, and our experts will guide you through the design, permits, cost estimation, and construction process. We ensure a stress-free journey to your dream home.",
    },
    {
      question: "How much does it cost to build a house in Bangalore?",
      answer:
        "The cost to build a house depends on factors like plot size, design preferences, material selection, and labor costs. We offer transparent pricing and a detailed cost breakdown, helping you plan your budget effectively.",
    },
    {
      question: "Do you offer luxury home construction services?",
      answer:
        "Yes! As luxury home builders, we specialize in custom, high-end homes with premium finishes, smart home integrations, and contemporary designs. Our team ensures every home is built with precision and elegance.",
    },
    {
      question: "Can I customize my home design with Construct Your Dream Home?",
      answer:
        "Absolutely! As leading custom home builders in Bangalore, we offer fully customizable designs to match your vision. From layout planning to material selection, our team ensures your home reflects your unique style and functional needs.",
    },
    {
      question: "What’s included in a house construction quotation?",
      answer:
        "Our construction quotation covers everything from start to finish - foundation, structure, plumbing, electrical, flooring, doors, windows, painting, and labor. No hidden costs - just clear, detailed pricing so you know exactly what you're paying for. Want a detailed quotation for house construction in Bangalore? Schedule a call with our expert.",
    },
    {
      question: "How can I find trusted builders near me?",
      answer:
        "If you're looking for trusted builders in Bangalore, we offer an ideal solution. With decades of industry expertise, we provide end-to-end home construction services - from design to handover - ensuring quality, transparency, and peace of mind.",
    },
    {
      question: "How does our turnkey construction process work?",
      answer:
        "Our Advanced Turnkey House Construction in Bengaluru enables us to provide end-to-end solutions with transparency, quality, and affordability. As experts in residential construction, we go beyond being just contractors—we are your partners in bringing dream homes to life. From innovative design to seamless execution, we integrate design, engineering, and site supervision with eco-friendly methods and craftsmanship.",
    },
    {
      question: "Are taxes included in the construction quotation?",
      answer:
        "Yes, our package price to build a home includes GST taxes. The prices quoted are all-inclusive, ensuring transparency and no hidden charges for clients.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faqs" className="relative py-14 md:py-20 bg-[#D0C5B2] text-[#0A0908] border-t border-[#0A0908]/15">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 md:mb-14">
          <span className="text-xs uppercase tracking-[0.26em] text-[#7D5A2B] font-bold block mb-2">
            Got Questions?
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#0A0908] font-medium tracking-tight">
            Frequently Asked Questions
          </h2>
          <div className="w-12 h-0.5 bg-[#7D5A2B] mx-auto mt-4 mb-3" />
          <p className="text-xs sm:text-sm text-[#38332C] font-normal leading-relaxed">
            Everything you need to know about house construction, costs, timelines, and turnkey delivery in Bangalore.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="border border-[#0A0908]/15 bg-[#EBE4D8] rounded-xl overflow-hidden transition-all duration-300"
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(idx)}
                  className="w-full text-left p-5 md:p-6 flex items-center justify-between gap-4 cursor-pointer hover:bg-[#F2ECE2] transition-colors"
                >
                  <span className="font-serif text-base sm:text-lg font-bold text-[#0A0908] leading-snug">
                    <span className="text-[#8F6B38] font-mono mr-2 text-sm">
                      {idx + 1 < 10 ? `0${idx + 1}` : idx + 1}.
                    </span>
                    {faq.question}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-[#D0C5B2] flex items-center justify-center shrink-0 text-[#141210]">
                    {isOpen ? (
                      <Minus className="w-4 h-4 text-[#8F6B38]" />
                    ) : (
                      <Plus className="w-4 h-4 text-[#8F6B38]" />
                    )}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 md:px-6 pb-6 pt-1 text-xs sm:text-sm text-[#38332C] leading-relaxed border-t border-[#0A0908]/10 bg-[#E5DDD0]">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
