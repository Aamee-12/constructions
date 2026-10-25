import React from "react";
import { ArrowUpRight, MapPin, Phone, Mail, Clock } from "lucide-react";
import { SITE_CONFIG } from "../config/siteConfig";

export const Footer: React.FC = () => {
  return (
    <footer className="relative bg-[#141210] text-[#EBE4D8] pt-16 pb-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-14 border-b border-white/10">
          {/* Brand Logo & Summary */}
          <div className="lg:col-span-4 space-y-4">
            <a href="#hero" className="inline-block">
              <img
                src="/assets/logo.png"
                alt="HM Constructions and Interiors"
                className="h-16 w-auto object-contain"
              />
            </a>
            <p className="text-xs sm:text-sm text-[#B5ABA0] max-w-sm leading-relaxed font-normal">
              Bespoke luxury residential architecture, interior design, and turnkey construction. Architecture that feels like home.
            </p>
            <div className="pt-2 text-[10px] text-[#C5A880] uppercase tracking-[0.2em] font-semibold">
              {SITE_CONFIG.contact.notice}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <span className="text-[10px] uppercase tracking-[0.24em] text-[#C5A880] font-bold block">
              Quick Links
            </span>
            <ul className="space-y-2.5 text-xs text-[#D0C8BD]">
              {SITE_CONFIG.navigation.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="hover:text-white transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Practice Areas */}
          <div className="lg:col-span-3 space-y-3">
            <span className="text-[10px] uppercase tracking-[0.24em] text-[#C5A880] font-bold block">
              Practice Areas
            </span>
            <ul className="space-y-2.5 text-xs text-[#D0C8BD]">
              {SITE_CONFIG.services.map((item) => (
                <li key={item.id}>
                  <a
                    href="#services"
                    className="hover:text-white transition-colors"
                  >
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Official Contact Details */}
          <div className="lg:col-span-3 space-y-3.5">
            <span className="text-[10px] uppercase tracking-[0.24em] text-[#C5A880] font-bold block">
              Direct Contact
            </span>
            <div className="space-y-3 text-xs text-[#D0C8BD]">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#C5A880] shrink-0 mt-0.5" />
                <p className="leading-relaxed text-[#EBE4D8]">
                  {SITE_CONFIG.contact.address}
                </p>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#C5A880] shrink-0" />
                <a
                  href={`tel:${SITE_CONFIG.contact.phone.replace(/[^0-9+]/g, "")}`}
                  className="text-white font-semibold hover:text-[#C5A880] transition-colors"
                >
                  {SITE_CONFIG.contact.phone}
                </a>
              </div>

              {SITE_CONFIG.contact.email && (
                <div className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-[#C5A880] shrink-0" />
                  <a
                    href={`mailto:${SITE_CONFIG.contact.email}`}
                    className="hover:text-white transition-colors text-[#B5ABA0]"
                  >
                    {SITE_CONFIG.contact.email}
                  </a>
                </div>
              )}

              <div className="flex items-center gap-2.5 text-[11px] text-[#A89F91]">
                <Clock className="w-3.5 h-3.5 text-[#C5A880] shrink-0" />
                <span>{SITE_CONFIG.contact.hours}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#8C8375]">
          <p>© {new Date().getFullYear()} {SITE_CONFIG.brand.name}. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a
              href="#hero"
              className="text-[#D0C8BD] hover:text-white transition-colors flex items-center gap-1 font-semibold"
            >
              <span>Back to Top</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#C5A880]" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
