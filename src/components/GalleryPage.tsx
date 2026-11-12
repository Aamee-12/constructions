import React from "react";
import { SITE_CONFIG } from "../config/siteConfig";

const galleryProjects = SITE_CONFIG.projects.filter((project) => project.category === "Completed Luxury Residences");

export const GalleryPage: React.FC = () => (
  <main className="min-h-screen bg-[#141210] text-[#EBE4D8]">
    <header className="flex items-center justify-between px-6 md:px-12 py-6 border-b border-white/10">
      <a href="/" aria-label="HM Constructions and Interiors home"><img src="/assets/logo.png" alt="HM Constructions and Interiors" className="h-10 w-auto" /></a>
      <a href="/" className="text-xs uppercase tracking-[0.2em] text-[#D4AF50] hover:text-white">Home</a>
    </header>
    <section className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24">
      <span className="text-xs uppercase tracking-[0.26em] text-[#C5A880] font-bold">HM Constructions & Interiors</span>
      <h1 className="font-serif text-5xl md:text-7xl mt-3 mb-5">Property Gallery</h1>
      <p className="max-w-2xl text-sm md:text-base leading-relaxed text-[#B5ABA0] mb-12">A collection of residential projects. New property photographs can be added to the gallery project list as they are ready.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {galleryProjects.map((project) => (
          <article key={project.id} className="group overflow-hidden rounded-xl border border-white/10 bg-[#1D1B18]">
            <img src={project.image} alt={project.title} className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="p-5">
              <h2 className="font-serif text-xl text-white">{project.title}</h2>
              <p className="text-xs text-[#A89F91] mt-2">{[project.location, project.year].filter(Boolean).join(" · ")}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  </main>
);
