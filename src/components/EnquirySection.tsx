import React, { useState } from "react";
import { ArrowRight, AlertCircle, CheckCircle, Info } from "lucide-react";

export const EnquirySection: React.FC = () => {
  const [selectedType, setSelectedType] = useState<string>("interior");
  const [formData, setFormData] = useState({
    propertyType: "Private Villa / Mansion",
    area: "",
    location: "",
    name: "",
    phone: "",
    email: "",
    message: ""
  });

  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "mock_sent">("idle");
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const projectTypes = [
    { id: "interior", label: "Interior Design" },
    { id: "construction", label: "Construction" },
    { id: "design-build", label: "Design + Construction" },
    { id: "custom", label: "Custom Project" }
  ];

  const propertyTypes = [
    "Private Villa / Mansion",
    "Independent Duplex House",
    "Rental Residential House",
    "Commercial Workspace / Office",
    "Custom Residential Complex"
  ];

  const validate = () => {
    const errs: { [key: string]: string } = {};
    if (!formData.name.trim()) errs.name = "Name is required";
    if (!formData.email.trim()) {
      errs.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errs.email = "Please enter a valid email address";
    }
    if (!formData.phone.trim()) errs.phone = "Phone number is required";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setFormStatus("submitting");
    setTimeout(() => {
      setFormStatus("mock_sent");
    }, 600);
  };

  return (
    <section id="enquiry" className="relative py-16 md:py-24 bg-[#DDD4C4] text-[#0A0908]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Headline */}
        <div className="mb-12">
          <span className="text-[11px] uppercase tracking-[0.24em] text-[#8F6B38] font-bold block mb-3">
            Initiate Collaboration
          </span>
          <h2 className="font-serif text-4xl sm:text-6xl uppercase tracking-tight text-[#0A0908] mb-4">
            START A PROJECT ENQUIRY
          </h2>
          <p className="text-sm sm:text-base text-[#38332C] max-w-2xl font-normal leading-relaxed">
            Every project is a tailored harmony of functionality, aesthetics, and lasting investment value, setting modern standards of architectural poise.
          </p>
        </div>

        {/* 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: 3D Construct Model */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative w-full max-w-md aspect-square rounded-2xl overflow-hidden flex flex-col items-center justify-center p-6 border border-[#0A0908]/15 bg-[#EBE4D8] shadow-2xl">
              <div className="w-full flex-1 flex items-center justify-center overflow-hidden rounded-xl bg-black border border-[#0A0908]/20 shadow-inner">
                <img
                  src="/assets/images/enquiry-3d-model.jpg"
                  alt="3D Construct Model Render"
                  className="w-full h-full object-cover brightness-105 contrast-105"
                />
              </div>
              <div className="pt-4 text-center">
                <span className="text-[10px] uppercase tracking-[0.22em] text-[#8F6B38] font-bold block">
                  Volumetric 3D Architectural Study
                </span>
                <span className="text-[11px] text-[#5A5247] mt-1 block">
                  Bespoke Modernist Villa Concept
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Custom Scope Buttons & Input Fields */}
          <div className="lg:col-span-7">
            {/* Project Type Filter Pills */}
            <div className="mb-8 space-y-3">
              <label className="text-[10px] uppercase tracking-[0.2em] text-[#38332C] font-bold block">
                Scope of Work
              </label>
              <div className="flex flex-wrap gap-2.5">
                {projectTypes.map((type) => {
                  const isSelected = selectedType === type.id;
                  return (
                    <button
                      type="button"
                      key={type.id}
                      onClick={() => setSelectedType(type.id)}
                      className={`px-5 py-2.5 text-xs tracking-wider transition-all duration-300 rounded-full border cursor-pointer ${
                        isSelected
                          ? "bg-[#66705D] text-white border-[#66705D] font-semibold shadow-md"
                          : "border-[#0A0908]/25 text-[#38332C] hover:border-[#0A0908]/60 hover:text-[#0A0908] bg-transparent"
                      }`}
                    >
                      {type.label}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Property Type */}
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-[0.18em] text-[#38332C] font-bold">
                    Property Type
                  </label>
                  <select
                    value={formData.propertyType}
                    onChange={(e) =>
                      setFormData({ ...formData, propertyType: e.target.value })
                    }
                    className="w-full bg-transparent border-b border-[#0A0908]/30 py-3 text-sm text-[#0A0908] focus:border-[#8F6B38] outline-none transition-colors"
                  >
                    {propertyTypes.map((opt) => (
                      <option key={opt} value={opt} className="bg-[#DDD4C4] text-[#0A0908]">
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Approximate Area */}
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-[0.18em] text-[#38332C] font-bold">
                    Approximate Area (m² or sq ft)
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. 650 m²"
                    value={formData.area}
                    onChange={(e) => setFormData({ ...formData, area: e.target.value })}
                    className="w-full bg-transparent border-b border-[#0A0908]/30 py-3 text-sm text-[#0A0908] placeholder-[#38332C]/40 focus:border-[#8F6B38] outline-none transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Location */}
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-[0.18em] text-[#38332C] font-bold">
                    Project Location / Site
                  </label>
                  <input
                    type="text"
                    placeholder="City, Region, or Country"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    className="w-full bg-transparent border-b border-[#0A0908]/30 py-3 text-sm text-[#0A0908] placeholder-[#38332C]/40 focus:border-[#8F6B38] outline-none transition-colors"
                  />
                </div>

                {/* Name */}
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-[0.18em] text-[#38332C] font-bold">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    placeholder="Full name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className={`w-full bg-transparent border-b py-3 text-sm text-[#0A0908] placeholder-[#38332C]/40 focus:border-[#8F6B38] outline-none transition-colors ${
                      errors.name ? "border-red-500" : "border-[#0A0908]/30"
                    }`}
                  />
                  {errors.name && (
                    <span className="text-[10px] text-red-600 flex items-center gap-1 font-semibold">
                      <AlertCircle className="w-3 h-3" /> {errors.name}
                    </span>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Phone */}
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-[0.18em] text-[#38332C] font-bold">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    placeholder="+91 (---) --- ----"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className={`w-full bg-transparent border-b py-3 text-sm text-[#0A0908] placeholder-[#38332C]/40 focus:border-[#8F6B38] outline-none transition-colors ${
                      errors.phone ? "border-red-500" : "border-[#0A0908]/30"
                    }`}
                  />
                  {errors.phone && (
                    <span className="text-[10px] text-red-600 flex items-center gap-1 font-semibold">
                      <AlertCircle className="w-3 h-3" /> {errors.phone}
                    </span>
                  )}
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-[0.18em] text-[#38332C] font-bold">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    placeholder="client@residence.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className={`w-full bg-transparent border-b py-3 text-sm text-[#0A0908] placeholder-[#38332C]/40 focus:border-[#8F6B38] outline-none transition-colors ${
                      errors.email ? "border-red-500" : "border-[#0A0908]/30"
                    }`}
                  />
                  {errors.email && (
                    <span className="text-[10px] text-red-600 flex items-center gap-1 font-semibold">
                      <AlertCircle className="w-3 h-3" /> {errors.email}
                    </span>
                  )}
                </div>
              </div>

              {/* Message */}
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-[0.18em] text-[#38332C] font-bold">
                  Project Vision & Timeline Notes (Optional)
                </label>
                <textarea
                  rows={3}
                  placeholder="Share details regarding architectural aspirations, timeline, or site characteristics..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-transparent border-b border-[#0A0908]/30 py-3 text-sm text-[#0A0908] placeholder-[#38332C]/40 focus:border-[#8F6B38] outline-none transition-colors resize-none"
                />
              </div>

              {/* Warm Bronze Submit Button */}
              <button
                type="submit"
                disabled={formStatus === "submitting"}
                className="w-full py-4 bg-[#8F6B38] hover:bg-[#78592E] text-white font-semibold text-xs uppercase tracking-[0.2em] transition-all duration-300 shadow-xl flex items-center justify-center gap-3 cursor-pointer rounded-lg"
              >
                <span>
                  {formStatus === "submitting"
                    ? "Validating details..."
                    : "SUBMIT PROJECT ENQUIRY"}
                </span>
                <ArrowRight className="w-4 h-4" />
              </button>

              {formStatus === "mock_sent" ? (
                <div className="p-4 bg-[#EBE4D8] border border-[#8F6B38] rounded-xl flex items-start gap-3 text-xs text-[#0A0908]">
                  <CheckCircle className="w-5 h-5 text-[#8F6B38] shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-[#8F6B38] mb-1">
                      Project Enquiry Recorded Successfully
                    </p>
                    <p className="text-[#38332C] text-xs leading-relaxed">
                      Thank you for submitting your specifications. Our lead architects will review your project requirements and initiate contact directly.
                    </p>
                  </div>
                </div>
              ) : (
                <div className="flex items-center gap-2 text-[10px] text-[#38332C]/70 font-medium">
                  <Info className="w-3.5 h-3.5 text-[#8F6B38]" />
                  <span>
                    Form input validated on client. Submission endpoint is configured for integration.
                  </span>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
