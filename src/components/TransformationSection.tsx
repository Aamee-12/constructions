import React, { useState } from "react";
import { Sliders, Sparkles } from "lucide-react";

export const TransformationSection: React.FC = () => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [activeStep, setActiveStep] = useState(3);

  const transformationStages = [
    {
      step: 1,
      title: "Architectural Shell",
      desc: "Bare walls, concrete floor plate, and natural perimeter light apertures."
    },
    {
      step: 2,
      title: "Hard Finishes & Flooring",
      desc: "Wide-plank smoked oak floorboards, micro-cement walls, and ceiling coves."
    },
    {
      step: 3,
      title: "Joinery & Custom Millwork",
      desc: "Bespoke fluted acoustic cabinetry and architectural pocket door integration."
    },
    {
      step: 4,
      title: "Furniture & Tactile Textiles",
      desc: "Low-profile linen modular sofa, wool bouclé rugs, and sculpted marble coffee table."
    },
    {
      step: 5,
      title: "Turnkey Styling & Atmosphere",
      desc: "Curated contemporary art, architectural ambient lighting, and organic botanicals."
    }
  ];

  return (
    <section id="transformation" className="relative py-28 md:py-36 bg-[#C8BCAB] text-[#0A0908]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <span className="text-[11px] uppercase tracking-[0.24em] text-[#66705D] font-semibold block mb-3">
              04 / Interior Metamorphosis
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl tracking-[-0.025em] text-[#0A0908]">
              From Raw Shell to Living Art.
            </h2>
          </div>
          <p className="text-sm text-[#332E27] max-w-md font-light leading-relaxed">
            Drag the interactive slider below to inspect the transformation from raw architectural shell to a refined, fully styled living suite.
          </p>
        </div>

        {/* Interactive Before & After Comparison Stage */}
        <div className="relative w-full aspect-[16/9] min-h-[420px] max-h-[680px] overflow-hidden select-none border border-[#0A0908]/20 shadow-2xl">
          {/* Furnished Image (Base) */}
          <img
            src="/assets/images/transform-furnished.jpg"
            alt="Furnished Luxury Living Interior"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute top-6 right-6 z-10 px-3 py-1.5 glass-panel text-[10px] uppercase tracking-[0.2em] text-[#9E7844]">
            Furnished Sanctuary
          </div>

          {/* Empty Shell Image (Clipped by slider position) */}
          <div
            className="absolute inset-0 overflow-hidden"
            style={{ width: `${sliderPosition}%` }}
          >
            <img
              src="/assets/images/transform-empty.jpg"
              alt="Raw Architectural Room"
              className="absolute inset-0 w-full h-full object-cover max-w-none"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
            <div className="absolute top-6 left-6 z-10 px-3 py-1.5 glass-panel text-[10px] uppercase tracking-[0.2em] text-[#0A0908]">
              Raw Architectural Shell
            </div>
          </div>

          {/* Draggable Divider Handle */}
          <div
            className="absolute top-0 bottom-0 w-[2px] bg-[#9E7844] cursor-ew-resize z-20"
            style={{ left: `${sliderPosition}%` }}
          >
            <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-[#9E7844] text-[#DDD4C4] flex items-center justify-center shadow-2xl">
              <Sliders className="w-4 h-4 rotate-90" />
            </div>
          </div>

          {/* Native Range Slider for smooth touch & mouse interaction */}
          <input
            type="range"
            min="0"
            max="100"
            value={sliderPosition}
            onChange={(e) => setSliderPosition(Number(e.target.value))}
            aria-label="Comparison slider"
            className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-30"
          />
        </div>

        {/* Transformation Sequence Stepper */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {transformationStages.map((stage) => {
            const isCurrent = stage.step === activeStep;
            return (
              <div
                key={stage.step}
                onClick={() => {
                  setActiveStep(stage.step);
                  setSliderPosition(100 - (stage.step - 1) * 25);
                }}
                className={`p-4 border cursor-pointer transition-all duration-300 ${
                  isCurrent
                    ? "bg-[#DDD4C4] border-[#9E7844]"
                    : "bg-[#DDD4C4]/40 border-[#0A0908]/10 hover:border-[#0A0908]/30"
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] tracking-[0.2em] font-mono text-[#66705D]">
                    STAGE 0{stage.step}
                  </span>
                  {isCurrent && <Sparkles className="w-3.5 h-3.5 text-[#9E7844]" />}
                </div>
                <h4 className="font-serif text-lg text-[#0A0908] mb-1">
                  {stage.title}
                </h4>
                <p className="text-[11px] text-[#332E27] leading-relaxed font-light">
                  {stage.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
