import React, { useState } from "react";
import { ArrowRight, CheckCircle, AlertCircle, Phone, MapPin, Clock, RefreshCw } from "lucide-react";
import { SITE_CONFIG } from "../config/siteConfig";

export const EnquirySection: React.FC = () => {
  const [selectedType, setSelectedType] = useState("construction");
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    propertyType: "Private Villa / Mansion",
    area: "",
    location: "",
    message: ""
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [generalError, setGeneralError] = useState("");

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
    if (!formData.name.trim()) {
      errs.name = "Full name is required";
    }
    if (!formData.phone.trim()) {
      errs.phone = "Phone number is required";
    } else if (formData.phone.replace(/[^0-9]/g, "").length < 9) {
      errs.phone = "Please enter a valid phone number (at least 9 digits)";
    }
    if (!formData.email.trim()) {
      errs.email = "Email address is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errs.email = "Please enter a valid email address (e.g. name@domain.com)";
    }
    if (!formData.location.trim()) {
      errs.location = "Project location is required";
    }

    setErrors(errs);
    if (Object.keys(errs).length > 0) {
      setGeneralError("Please complete all required fields highlighted in red below.");
      return false;
    }
    setGeneralError("");
    return true;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) {
      setFormStatus("error");
      return;
    }

    setFormStatus("submitting");
    // Simulate high-reliability API submission
    setTimeout(() => {
      setFormStatus("success");
    }, 700);
  };

  const handleReset = () => {
    setFormData({
      name: "",
      phone: "",
      email: "",
      propertyType: "Private Villa / Mansion",
      area: "",
      location: "",
      message: ""
    });
    setErrors({});
    setGeneralError("");
    setFormStatus("idle");
  };

  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    SITE_CONFIG.contact.address
  )}`;

  return (
    <section id="enquiry" className="relative py-16 md:py-24 bg-[#DDD4C4] text-[#0A0908] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Headline */}
        <div className="mb-12">
          <span className="text-[11px] uppercase tracking-[0.24em] text-[#8F6B38] font-bold block mb-3">
            Initiate Collaboration
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl uppercase tracking-tight text-[#0A0908] mb-4">
            START A PROJECT ENQUIRY
          </h2>
          <p className="text-sm sm:text-base text-[#38332C] max-w-2xl font-normal leading-relaxed">
            Every project is a tailored harmony of functionality, aesthetics, and lasting investment value, setting modern standards of architectural poise.
          </p>
        </div>

        {/* 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: 3D Construct Model & Direct Contact Card */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="relative w-full rounded-2xl overflow-hidden flex flex-col items-center justify-center p-6 border border-[#0A0908]/15 bg-[#EBE4D8] shadow-2xl">
              <div className="w-full aspect-[4/3] flex items-center justify-center overflow-hidden rounded-xl bg-black border border-[#0A0908]/20 shadow-inner">
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
                <span className="text-xs text-[#5A5247] mt-1 block">
                  Bespoke Modernist Residential Concept
                </span>
              </div>
            </div>

            {/* Direct Quick Contact Card */}
            <div className="p-6 rounded-2xl bg-[#EBE4D8] border border-[#0A0908]/15 space-y-4 shadow-md">
              <span className="text-[10px] uppercase tracking-[0.24em] text-[#8F6B38] font-bold block">
                Direct Consultation Office
              </span>
              <div className="space-y-3 text-xs text-[#38332C]">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#8F6B38] shrink-0 mt-0.5" />
                  <a
                    href={mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#8F6B38] transition-colors leading-relaxed"
                  >
                    {SITE_CONFIG.contact.address}
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-[#8F6B38] shrink-0" />
                  <a
                    href={`tel:${SITE_CONFIG.contact.phone.replace(/[^0-9+]/g, "")}`}
                    className="font-bold text-[#0A0908] hover:text-[#8F6B38] transition-colors tracking-wide"
                  >
                    {SITE_CONFIG.contact.phone}
                  </a>
                </div>
                <div className="flex items-center gap-3 text-[11px] text-[#5A5247]">
                  <Clock className="w-4 h-4 text-[#8F6B38] shrink-0" />
                  <span>{SITE_CONFIG.contact.hours}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Custom Scope Buttons & Interactive Form */}
          <div className="lg:col-span-7 bg-[#EBE4D8]/60 backdrop-blur-sm p-6 sm:p-8 rounded-2xl border border-[#0A0908]/15 shadow-xl">
            {formStatus === "success" ? (
              /* Success Confirmation Banner */
              <div className="py-8 px-6 text-center space-y-6 animate-in fade-in zoom-in-95 duration-400">
                <div className="w-16 h-16 mx-auto rounded-full bg-[#66705D]/20 border border-[#66705D] text-[#66705D] flex items-center justify-center">
                  <CheckCircle className="w-9 h-9" />
                </div>
                <div>
                  <span className="text-[11px] uppercase tracking-[0.26em] text-[#8F6B38] font-bold block mb-2">
                    Enquiry Recorded
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#0A0908] mb-3">
                    Thank You, {formData.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#38332C] max-w-md mx-auto leading-relaxed">
                    Your project details for a{" "}
                    <span className="font-semibold text-[#0A0908]">{formData.propertyType}</span> in{" "}
                    <span className="font-semibold text-[#0A0908]">{formData.location}</span> have been registered.
                    Our principal architect will review your scope and contact you directly at{" "}
                    <span className="font-semibold text-[#0A0908]">{formData.phone}</span> within 24 hours.
                  </p>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <button
                    type="button"
                    onClick={handleReset}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#8F6B38] hover:bg-[#78592E] text-white text-xs uppercase tracking-[0.18em] font-semibold transition-all cursor-pointer shadow-md"
                  >
                    <RefreshCw className="w-3.5 h-3.5" />
                    <span>Submit Another Enquiry</span>
                  </button>
                  <a
                    href={`tel:${SITE_CONFIG.contact.phone.replace(/[^0-9+]/g, "")}`}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-[#8F6B38] text-[#8F6B38] hover:bg-[#8F6B38]/10 text-xs uppercase tracking-[0.18em] font-semibold transition-all cursor-pointer"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>Call Us Now</span>
                  </a>
                </div>
              </div>
            ) : (
              <>
                {/* Global Error Banner */}
                {generalError && (
                  <div className="mb-6 p-4 rounded-xl bg-red-100 border border-red-300 text-red-800 text-xs flex items-center gap-3 animate-in fade-in duration-200">
                    <AlertCircle className="w-5 h-5 text-red-600 shrink-0" />
                    <span>{generalError}</span>
                  </div>
                )}

                {/* Scope of Work Pills */}
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
                          className={`px-4 sm:px-5 py-2 sm:py-2.5 text-xs tracking-wider transition-all duration-300 rounded-full border cursor-pointer ${
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
                <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Property Type */}
                    <div className="space-y-1.5">
                      <label className="text-[10px] uppercase tracking-[0.18em] text-[#38332C] font-bold block">
                        Property Type
                      </label>
                      <select
                        value={formData.propertyType}
                        onChange={(e) =>
                          setFormData({ ...formData, propertyType: e.target.value })
                        }
                        className="w-full bg-transparent border-b border-[#0A0908]/30 py-2.5 text-sm text-[#0A0908] focus:border-[#8F6B38] outline-none transition-colors cursor-pointer"
                      >
                        {propertyTypes.map((opt) => (
                          <option key={opt} value={opt} className="bg-[#DDD4C4] text-[#0A0908]">
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Approximate Area */}
                    <div className="space-y-1.5">
                      <label className="text-[10px] uppercase tracking-[0.18em] text-[#38332C] font-bold block">
                        Approximate Area (Sq.Ft / m²)
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. 2,400 sq.ft or 350 m²"
                        value={formData.area}
                        onChange={(e) => setFormData({ ...formData, area: e.target.value })}
                        className="w-full bg-transparent border-b border-[#0A0908]/30 py-2.5 text-sm text-[#0A0908] placeholder-[#38332C]/40 focus:border-[#8F6B38] outline-none transition-colors"
                      >
                      </input>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Location */}
                    <div className="space-y-1.5">
                      <label className="text-[10px] uppercase tracking-[0.18em] text-[#38332C] font-bold block">
                        Project Location / City *
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. HBR Layout, Bengaluru"
                        value={formData.location}
                        onChange={(e) => {
                          setFormData({ ...formData, location: e.target.value });
                          if (errors.location) setErrors({ ...errors, location: "" });
                        }}
                        className={`w-full bg-transparent border-b py-2.5 text-sm text-[#0A0908] placeholder-[#38332C]/40 focus:border-[#8F6B38] outline-none transition-colors ${
                          errors.location ? "border-red-500" : "border-[#0A0908]/30"
                        }`}
                      />
                      {errors.location && (
                        <span className="text-[10px] text-red-600 flex items-center gap-1 font-semibold mt-1">
                          <AlertCircle className="w-3 h-3 shrink-0" /> {errors.location}
                        </span>
                      )}
                    </div>

                    {/* Name */}
                    <div className="space-y-1.5">
                      <label className="text-[10px] uppercase tracking-[0.18em] text-[#38332C] font-bold block">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Ananya Sharma"
                        value={formData.name}
                        onChange={(e) => {
                          setFormData({ ...formData, name: e.target.value });
                          if (errors.name) setErrors({ ...errors, name: "" });
                        }}
                        className={`w-full bg-transparent border-b py-2.5 text-sm text-[#0A0908] placeholder-[#38332C]/40 focus:border-[#8F6B38] outline-none transition-colors ${
                          errors.name ? "border-red-500" : "border-[#0A0908]/30"
                        }`}
                      />
                      {errors.name && (
                        <span className="text-[10px] text-red-600 flex items-center gap-1 font-semibold mt-1">
                          <AlertCircle className="w-3 h-3 shrink-0" /> {errors.name}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Phone */}
                    <div className="space-y-1.5">
                      <label className="text-[10px] uppercase tracking-[0.18em] text-[#38332C] font-bold block">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        placeholder="+91 98868 69147"
                        value={formData.phone}
                        onChange={(e) => {
                          setFormData({ ...formData, phone: e.target.value });
                          if (errors.phone) setErrors({ ...errors, phone: "" });
                        }}
                        className={`w-full bg-transparent border-b py-2.5 text-sm text-[#0A0908] placeholder-[#38332C]/40 focus:border-[#8F6B38] outline-none transition-colors ${
                          errors.phone ? "border-red-500" : "border-[#0A0908]/30"
                        }`}
                      />
                      {errors.phone && (
                        <span className="text-[10px] text-red-600 flex items-center gap-1 font-semibold mt-1">
                          <AlertCircle className="w-3 h-3 shrink-0" /> {errors.phone}
                        </span>
                      )}
                    </div>

                    {/* Email */}
                    <div className="space-y-1.5">
                      <label className="text-[10px] uppercase tracking-[0.18em] text-[#38332C] font-bold block">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        placeholder="ananya@example.com"
                        value={formData.email}
                        onChange={(e) => {
                          setFormData({ ...formData, email: e.target.value });
                          if (errors.email) setErrors({ ...errors, email: "" });
                        }}
                        className={`w-full bg-transparent border-b py-2.5 text-sm text-[#0A0908] placeholder-[#38332C]/40 focus:border-[#8F6B38] outline-none transition-colors ${
                          errors.email ? "border-red-500" : "border-[#0A0908]/30"
                        }`}
                      />
                      {errors.email && (
                        <span className="text-[10px] text-red-600 flex items-center gap-1 font-semibold mt-1">
                          <AlertCircle className="w-3 h-3 shrink-0" /> {errors.email}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Message */}
                  <div className="space-y-1.5">
                    <label className="text-[10px] uppercase tracking-[0.18em] text-[#38332C] font-bold block">
                      Project Vision & Specific Requirements (Optional)
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Share details regarding architectural aspirations, floor preferences, timeline expectations, or site characteristics..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-transparent border-b border-[#0A0908]/30 py-2.5 text-sm text-[#0A0908] placeholder-[#38332C]/40 focus:border-[#8F6B38] outline-none transition-colors resize-none"
                    />
                  </div>

                  {/* Bronze Submit Button */}
                  <button
                    type="submit"
                    disabled={formStatus === "submitting"}
                    className="w-full py-4 bg-[#8F6B38] hover:bg-[#78592E] text-white font-semibold text-xs uppercase tracking-[0.2em] transition-all duration-300 shadow-xl flex items-center justify-center gap-3 cursor-pointer rounded-xl active:scale-[0.99]"
                  >
                    <span>
                      {formStatus === "submitting"
                        ? "Validating & Submitting..."
                        : "SUBMIT PROJECT ENQUIRY"}
                    </span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <p className="text-center text-[10px] text-[#38332C]/70">
                    Your privacy is respected. All consultations and project details are held in strict confidence.
                  </p>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
