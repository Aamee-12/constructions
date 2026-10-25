import React, { useState } from "react";
import { ArrowLeft, ArrowRight, ArrowUpRight, MapPin, Calendar, Maximize2 } from "lucide-react";
import { SITE_CONFIG, type ProjectItem } from "../config/siteConfig";

export const ProjectsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"completed" | "upcoming">("completed");

  const completedProjects: ProjectItem[] = SITE_CONFIG.projects;

  const upcomingProjects: ProjectItem[] = [
    {
      id: "upcoming-residence-facade",
      title: "Signature Tri-Level Villa & Penthouse",
      category: "Upcoming Luxury Residences",
      description: "Under active execution: high-end vertical residence featuring decorative jali screens, cantilevered balcony pods, warm LED linear facade illumination, and private rooftop garden.",
      location: "Bengaluru North",
      year: "2026 Handover",
      area: "580 m²",
      image: "/assets/upcoming/upcoming_residence_facade.jpg",
      featured: true,
    },
    {
      id: "upcoming-structure-frame",
      title: "Grand Horizon Enclave — Phase II",
      category: "Upcoming Residential Community",
      description: "Core structural stage: reinforced earthquake-resistant concrete framing and slab work in active progress with precision on-site engineering and safety management.",
      location: "East Corridor",
      year: "Q4 2026",
      area: "8,400 m²",
      image: "/assets/upcoming/upcoming_structure_frame.jpg",
      featured: false,
    },
    {
      id: "upcoming-apartment-render",
      title: "Emmay Environs Architectural Apartments",
      category: "Upcoming Premium Housing",
      description: "Proposed modern apartment development engineered with staggered balconies, private landscaped courtyards, subterranean parking, and sustainable rainwater harvesting.",
      location: "Bengaluru Suburbs",
      year: "2026 - 2027",
      area: "12,500 m²",
      image: "/assets/upcoming/upcoming_apartment_render.jpg",
      featured: false,
    },
    {
      id: "upcoming-elevation-work",
      title: "The Heritage Citadel — Finishing Stage",
      category: "Upcoming Multi-Level Residence",
      description: "Final exterior plastering and stone facade cladding underway with ornate balcony balustrades, classical cornice details, and thermal acoustic window installations.",
      location: "Central Enclave",
      year: "Q3 2026 Handover",
      area: "720 m²",
      image: "/assets/upcoming/upcoming_elevation_work.jpg",
      featured: false,
    },
  ];

  const currentList = activeTab === "completed" ? completedProjects : upcomingProjects;
  const [carouselIndex, setCarouselIndex] = useState(0);
  const selectedProject = currentList[carouselIndex % currentList.length] || currentList[0];

  const nextProject = () => {
    setCarouselIndex((prev) => (prev + 1) % currentList.length);
  };

  const prevProject = () => {
    setCarouselIndex((prev) => (prev - 1 + currentList.length) % currentList.length);
  };

  return (
    <section id="projects" className="relative py-16 md:py-24 bg-[#DDD4C4] text-[#0A0908]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Top Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <span className="text-[11px] uppercase tracking-[0.24em] text-[#8F6B38] font-bold block mb-2">
              Portfolio & Pipelines
            </span>
            <h2 className="font-serif text-4xl sm:text-6xl uppercase tracking-tight text-[#0A0908]">
              {activeTab === "completed" ? "COMPLETED PROJECTS" : "UPCOMING PROJECTS"}
            </h2>
          </div>

          {/* Toggle between Completed and Upcoming */}
          <div className="flex items-center p-1 bg-[#D0C5B2] border border-[#0A0908]/15 rounded-full">
            <button
              onClick={() => {
                setActiveTab("completed");
                setCarouselIndex(0);
              }}
              className={`px-5 py-2 text-xs uppercase tracking-[0.14em] transition-all duration-300 rounded-full font-bold cursor-pointer ${
                activeTab === "completed"
                  ? "bg-[#141210] text-[#DDD4C4] shadow-md"
                  : "text-[#332E27] hover:text-[#0A0908]"
              }`}
            >
              Completed Projects ({completedProjects.length})
            </button>
            <button
              onClick={() => {
                setActiveTab("upcoming");
                setCarouselIndex(0);
              }}
              className={`px-5 py-2 text-xs uppercase tracking-[0.14em] transition-all duration-300 rounded-full font-bold cursor-pointer ${
                activeTab === "upcoming"
                  ? "bg-[#141210] text-[#DDD4C4] shadow-md"
                  : "text-[#332E27] hover:text-[#0A0908]"
              }`}
            >
              Upcoming Projects ({upcomingProjects.length})
            </button>
          </div>
        </div>

        {/* Featured Showcase — Hero Architecture Display */}
        <div className="relative w-full aspect-[16/10] md:aspect-[21/10] min-h-[440px] rounded-2xl overflow-hidden border border-[#0A0908]/20 shadow-2xl group mb-10 bg-black">
          <img
            src={selectedProject.compositeImage || selectedProject.image}
            alt={selectedProject.title}
            className="w-full h-full object-cover brightness-[0.92] transition-transform duration-1000 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-black/30" />

          {/* Left Floating Frosted Project Overlay Card */}
          <div className="absolute bottom-6 left-6 sm:bottom-10 sm:left-10 max-w-md p-6 sm:p-7 rounded-2xl border border-white/20 shadow-2xl backdrop-blur-xl bg-[#141210]/90 text-white">
            <div className="flex items-center gap-2 mb-2 flex-wrap">
              <span className="text-[10px] uppercase tracking-[0.24em] text-[#C5A880] font-bold block">
                «{selectedProject.title}»
              </span>
              {activeTab === "upcoming" && (
                <span className="px-2 py-0.5 text-[9px] uppercase tracking-wider bg-[#8F6B38] text-white rounded font-mono font-bold">
                  Under Construction
                </span>
              )}
              {selectedProject.compositeImage && (
                <span className="px-2 py-0.5 text-[9px] uppercase tracking-wider bg-[#8F6B38] text-white rounded font-mono">
                  Before & After
                </span>
              )}
            </div>
            <p className="text-xs sm:text-sm text-[#DDD4C4] leading-relaxed font-normal mb-5">
              {selectedProject.description}
            </p>

            <div className="flex items-center gap-5 text-[10px] uppercase tracking-[0.18em] text-[#C5A880] mb-5 font-semibold">
              {selectedProject.location && (
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-3 h-3 text-[#C5A880]" />
                  <span>{selectedProject.location}</span>
                </div>
              )}
              {selectedProject.area && (
                <div className="flex items-center gap-1.5">
                  <Maximize2 className="w-3 h-3 text-[#C5A880]" />
                  <span>{selectedProject.area}</span>
                </div>
              )}
              {selectedProject.year && (
                <div className="flex items-center gap-1.5">
                  <Calendar className="w-3 h-3 text-[#C5A880]" />
                  <span>{selectedProject.year}</span>
                </div>
              )}
            </div>

            <a
              href="#enquiry"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#8F6B38] hover:bg-[#A37B40] text-white text-xs tracking-wider transition-all duration-300 font-semibold"
            >
              <span>{activeTab === "upcoming" ? "Enquire About Scope" : "Explore Architecture"}</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Right Floating Minimal Carousel Navigation Arrow */}
          <div className="absolute top-1/2 right-4 sm:right-8 -translate-y-1/2 flex items-center gap-2.5">
            <button
              onClick={prevProject}
              className="w-11 h-11 rounded-full border border-white/30 bg-black/40 backdrop-blur-md flex items-center justify-center text-white hover:bg-[#8F6B38] hover:border-[#8F6B38] transition-all duration-300 cursor-pointer"
              aria-label="Previous project"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextProject}
              className="w-11 h-11 rounded-full border border-white/30 bg-black/40 backdrop-blur-md flex items-center justify-center text-white hover:bg-[#8F6B38] hover:border-[#8F6B38] transition-all duration-300 cursor-pointer"
              aria-label="Next project"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Curated Architecture Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {currentList.map((project, idx) => (
            <div
              key={project.id}
              onClick={() => setCarouselIndex(idx)}
              className={`cursor-pointer group border transition-all duration-300 rounded-xl overflow-hidden bg-[#EBE4D8] ${
                selectedProject.id === project.id
                  ? "border-[#8F6B38] shadow-2xl ring-2 ring-[#8F6B38]/40"
                  : "border-[#0A0908]/15 hover:border-[#8F6B38]/60 hover:shadow-xl"
              }`}
            >
              <div className="relative aspect-[16/11] overflow-hidden bg-black">
                <img
                  src={project.compositeImage || project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 contrast-105"
                  loading="lazy"
                />
                <div className="absolute top-2.5 right-2.5 px-2 py-0.5 text-[8px] uppercase tracking-wider bg-black/80 backdrop-blur-sm text-white border border-white/20 rounded font-semibold">
                  {project.category}
                </div>
                {activeTab === "upcoming" && (
                  <div className="absolute bottom-2.5 left-2.5 px-2 py-0.5 text-[8px] uppercase tracking-wider bg-[#8F6B38] text-white font-mono rounded font-bold">
                    In Progress
                  </div>
                )}
                {project.compositeImage && (
                  <div className="absolute bottom-2.5 left-2.5 px-2 py-0.5 text-[8px] uppercase tracking-wider bg-[#8F6B38] text-white font-mono rounded">
                    Before & After
                  </div>
                )}
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between mb-1.5">
                  <h3 className="font-serif text-base font-bold text-[#0A0908] group-hover:text-[#8F6B38] transition-colors line-clamp-1">
                    {project.title}
                  </h3>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#332E27] group-hover:text-[#8F6B38] transition-colors shrink-0 ml-1.5" />
                </div>
                <p className="text-xs text-[#38332C] line-clamp-2 leading-relaxed">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
