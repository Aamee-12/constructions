import React from "react";
import { ArrowUpRight, MapPin, Phone, Mail, Clock } from "lucide-react";
import { SITE_CONFIG } from "../config/siteConfig";

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const handleScrollTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    SITE_CONFIG.contact.address
  )}`;

  return (
    <footer className="relative bg-[#141210] text-[#EBE4D8] pt-16 pb-12 border-t border-white/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-14 border-b border-white/10">
          {/* Brand Logo & Summary */}
          <div className="lg:col-span-4 space-y-4">
            <a
              href="#hero"
              onClick={handleScrollTop}
              className="inline-block group cursor-pointer"
              aria-label="HM Constructions and Interiors Home"
            >
              <img
                src="/assets/logo.png"
                alt="HM Constructions and Interiors"
                className="h-14 sm:h-16 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </a>
            <p className="text-xs sm:text-sm text-[#B5ABA0] max-w-sm leading-relaxed font-normal">
              Bespoke luxury residential architecture, interior design, and turnkey construction. Architecture that feels like home.
            </p>
            <div className="pt-2 text-[10px] text-[#D4AF50] uppercase tracking-[0.2em] font-semibold">
              {SITE_CONFIG.contact.notice}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <span className="text-[10px] uppercase tracking-[0.24em] text-[#D4AF50] font-bold block">
              Quick Links
            </span>
            <ul className="space-y-2.5 text-xs text-[#D0C8BD]">
              {SITE_CONFIG.navigation.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="hover:text-white transition-colors duration-200 block py-0.5"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#faq"
                  className="hover:text-white transition-colors duration-200 block py-0.5"
                >
                  FAQs
                </a>
              </li>
            </ul>
          </div>

          {/* Practice Areas */}
          <div className="lg:col-span-3 space-y-3">
            <span className="text-[10px] uppercase tracking-[0.24em] text-[#D4AF50] font-bold block">
              Practice Areas
            </span>
            <ul className="space-y-2.5 text-xs text-[#D0C8BD]">
              {SITE_CONFIG.services.map((item) => (
                <li key={item.id}>
                  <a
                    href="#services"
                    className="hover:text-white transition-colors duration-200 block py-0.5"
                  >
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Official Contact Details */}
          <div className="lg:col-span-3 space-y-3.5">
            <span className="text-[10px] uppercase tracking-[0.24em] text-[#D4AF50] font-bold block">
              Direct Contact
            </span>
            <div className="space-y-3.5 text-xs text-[#D0C8BD]">
              {/* Clickable Map Location */}
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#D4AF50] shrink-0 mt-0.5" />
                <a
                  href={mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="leading-relaxed text-[#EBE4D8] hover:text-[#D4AF50] transition-colors"
                  title="Open location in Google Maps"
                >
                  {SITE_CONFIG.contact.address}
                </a>
              </div>

              {/* Clickable Phone Number */}
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#D4AF50] shrink-0" />
                <a
                  href={`tel:${SITE_CONFIG.contact.phone.replace(/[^0-9+]/g, "")}`}
                  className="text-white font-semibold hover:text-[#D4AF50] transition-colors tracking-wide"
                  title="Call HM Constructions"
                >
                  {SITE_CONFIG.contact.phone}
                </a>
              </div>

              {/* Clickable Email */}
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#D4AF50] shrink-0" />
                {SITE_CONFIG.contact.email ? (
                  <a
                    href={`mailto:${SITE_CONFIG.contact.email}`}
                    className="hover:text-white transition-colors text-[#B5ABA0]"
                  >
                    {SITE_CONFIG.contact.email}
                  </a>
                ) : (
                  <a
                    href="#enquiry"
                    className="hover:text-white transition-colors text-[#B5ABA0]"
                  >
                    Send an Online Enquiry
                  </a>
                )}
              </div>

              {/* Working Hours */}
              <div className="flex items-center gap-2.5 text-[11px] text-[#A89F91]">
                <Clock className="w-3.5 h-3.5 text-[#D4AF50] shrink-0" />
                <span>{SITE_CONFIG.contact.hours}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar with Fixed Copyright Year */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#8C8375]">
          <p>© {currentYear} {SITE_CONFIG.brand.legalName}. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a
              href="#hero"
              onClick={handleScrollTop}
              className="text-[#D0C8BD] hover:text-white transition-colors flex items-center gap-1 font-semibold cursor-pointer"
            >
              <span>Back to Top</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#D4AF50]" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
