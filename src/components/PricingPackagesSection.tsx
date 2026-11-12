import React, { useState } from "react";
import { Plus, Minus, Check } from "lucide-react";

interface SpecCategory {
  title: string;
  items: string[];
}

interface PackageTier {
  id: string;
  name: string;
  tag: string;
  price: string;
  unit: string;
  isPopular?: boolean;
  categories: SpecCategory[];
}

export const PricingPackagesSection: React.FC = () => {
  const [openAccordions, setOpenAccordions] = useState<{ [key: string]: boolean }>({});

  const toggleAccordion = (packageId: string, catIndex: number) => {
    const key = `${packageId}-${catIndex}`;
    setOpenAccordions((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const packages: PackageTier[] = [
    {
      id: "elegance",
      name: "ELEGANCE",
      tag: "Essential Standard",
      price: "Rs 1,999",
      unit: "/ Sq.Ft.",
      categories: [
        {
          title: "Design & Drawings",
          items: [
            "2D Floor Plan: Included",
            "3D Elevation: Basic View",
            "Structural Drawings: Included",
            "MEP Drawings: Included",
          ],
        },
        {
          title: "Structure",
          items: [
            "Steel: Suguna / Gopala, etc.",
            "Cement: Priya / Maharaja",
            "Blocks: Solid Concrete (6\" / 4\")",
          ],
        },
        {
          title: "Kitchen",
          items: [
            "Granite: Up to ₹70/sqft",
            "Wall Tiles: Up to ₹50/sqft",
          ],
        },
        {
          title: "Bathroom",
          items: [
            "Wall Tiles: Up to ₹50/sqft (7ft height)",
            "Sanitary & CP Fittings: ₹20,000/bath",
          ],
        },
        {
          title: "Flooring & Painting",
          items: [
            "Living Area: Vitrified (₹50/sqft)",
            "Bedrooms: Tiles (₹50/sqft)",
          ],
        },
        {
          title: "Doors & Windows",
          items: [
            "Windows: Aluminium 2.5+ Track",
          ],
        },
      ],
    },
    {
      id: "premium",
      name: "PREMIUM",
      tag: "Most Chosen",
      price: "Rs 2,199",
      unit: "/ Sq.Ft.",
      isPopular: true,
      categories: [
        {
          title: "Design & Drawings",
          items: [
            "2D & 3D Floor Plans: Included",
            "Structural & MEP Drawings: Included",
            "Furniture Layout Planning: Included",
          ],
        },
        {
          title: "Structure",
          items: [
            "Steel: Meenakshi / Prime Gold, etc.",
            "Cement: Birla Super / Maharaja",
            "Blocks: Solid Concrete (6\")",
          ],
        },
        {
          title: "Kitchen",
          items: [
            "Granite: Up to ₹120–150/sqft",
            "Wall Tiles: Up to ₹70/sqft",
          ],
        },
        {
          title: "Bathroom",
          items: [
            "Wall Tiles: Up to ₹70/sqft (7ft height)",
            "Sanitary & CP Fittings: ₹30,000/bath",
          ],
        },
        {
          title: "Flooring & Painting",
          items: [
            "Living Area: Vitrified (₹50/sqft)",
            "Bedrooms: Tiles (₹50/sqft)",
          ],
        },
        {
          title: "Doors & Windows",
          items: [
            "Windows: Aluminium 2.5+ Track",
          ],
        },
      ],
    },
    {
      id: "elite",
      name: "ELITE",
      tag: "Best Value",
      price: "Rs 2,499",
      unit: "/ Sq.Ft.",
      categories: [
        {
          title: "Design & Drawings",
          items: [
            "Complete 2D & 3D Concept: Included",
            "Interior Design Views: Included",
            "Walkthrough Video: Included",
          ],
        },
        {
          title: "Structure",
          items: [
            "Steel: Indus, etc.",
            "Cement: Birla Super",
            "Blocks: Solid Concrete (6\")",
          ],
        },
        {
          title: "Kitchen",
          items: [
            "Wall Tiles: Up to ₹100/sqft",
          ],
        },
        {
          title: "Bathroom",
          items: [
            "Wall Tiles: Up to ₹100/sqft (7ft height)",
            "Sanitary & CP Fittings: ₹60,000/bath (Jaguar)",
          ],
        },
        {
          title: "Flooring & Painting",
          items: [
            "Living Area: Vitrified (₹50/sqft)",
            "Bedrooms: Tiles (₹50/sqft)",
          ],
        },
        {
          title: "Doors & Windows",
          items: [
            "Windows: Aluminium 3-Track",
          ],
        },
      ],
    },
  ];

  return (
    <section id="packages" className="relative py-16 md:py-24 bg-[#DDD4C4] text-[#141210]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs uppercase tracking-[0.28em] text-[#8F6B38] font-bold block">
            Transparent Investment Pricing
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#141210] font-medium tracking-tight">
            Turnkey Construction Packages
          </h2>
          <p className="text-xs sm:text-sm text-[#47423B] leading-relaxed max-w-xl mx-auto font-normal">
            Choose the package that aligns with your architectural aspirations. Complete end-to-end execution with full transparent specifications and master supervision.
          </p>
        </div>

        {/* 3-Column Package Cards matching the Reference Image */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className={`bg-[#FFFFFF] border transition-all duration-300 shadow-xl overflow-hidden flex flex-col justify-between ${
                pkg.isPopular
                  ? "border-[#A45A3E] ring-2 ring-[#A45A3E]/30"
                  : "border-[#141210]/15 hover:border-[#A45A3E]/50"
              }`}
            >
              <div>
                {/* Terracotta / Rust Header Banner (Matches Reference Image) */}
                <div className="bg-[#A45A3E] text-white p-7 text-center relative">
                  {pkg.isPopular && (
                    <div className="absolute top-2 right-3 px-2 py-0.5 bg-black/40 text-[9px] uppercase tracking-widest font-bold text-amber-200">
                      Popular
                    </div>
                  )}
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold tracking-wider uppercase mb-1">
                    {pkg.name}
                  </h3>
                  <p className="text-xs text-white/90 italic font-light mb-4">
                    ({pkg.tag})
                  </p>
                  <div className="pt-2 border-t border-white/20">
                    <span className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                      {pkg.price}
                    </span>
                    <span className="text-xs text-white/90 ml-1 font-medium">
                      {pkg.unit}
                    </span>
                  </div>
                </div>

                {/* Collapsible Category Accordion List */}
                <div className="divide-y divide-[#141210]/10">
                  {pkg.categories.map((cat, idx) => {
                    const isOpen = !!openAccordions[`${pkg.id}-${idx}`];
                    return (
                      <div key={idx} className="transition-colors">
                        <button
                          type="button"
                          onClick={() => toggleAccordion(pkg.id, idx)}
                          className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-[#F9F7F2] transition-colors focus:outline-none"
                        >
                          <span className="text-xs sm:text-sm font-semibold text-[#141210]">
                            {cat.title}
                          </span>
                          <span className="text-[#A45A3E]">
                            {isOpen ? (
                              <Minus className="w-4 h-4" />
                            ) : (
                              <Plus className="w-4 h-4" />
                            )}
                          </span>
                        </button>

                        {/* Collapsed Items Details */}
                        {isOpen && (
                          <div className="px-6 pb-4 pt-1 bg-[#F9F7F2] space-y-2 animate-in fade-in duration-200">
                            {cat.items.map((item, i) => (
                              <div
                                key={i}
                                className="flex items-start gap-2.5 text-xs text-[#47423B]"
                              >
                                <Check className="w-3.5 h-3.5 text-[#8F6B38] shrink-0 mt-0.5" />
                                <span>{item}</span>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Bottom Enquire Now CTA Button */}
              <div className="p-6 bg-[#FFFFFF] border-t border-[#141210]/10">
                <a
                  href="#enquiry"
                  className="w-full py-3.5 bg-[#A45A3E] hover:bg-[#8B4830] text-white text-xs uppercase tracking-[0.2em] font-bold text-center block transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  ENQUIRE NOW
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
