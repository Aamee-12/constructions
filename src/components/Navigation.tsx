import React, { useState, useEffect } from "react";
import { Menu, X, Phone, Mail } from "lucide-react";
import { SITE_CONFIG } from "../config/siteConfig";

// Gold from the HM logo palette
const GOLD = "#D4AF50";
const GOLD_HOVER = "#F0D080";

// Desktop primary navigation links
const navLinks = [
  { label: "About", href: "#about" },
  { label: "Packages", href: "#packages" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#enquiry" },
];

// Complete mobile menu navigation links
const mobileNavLinks = [
  { label: "Home", href: "#hero" },
  { label: "About Us", href: "#about" },
  { label: "Construction Packages", href: "#packages" },
  { label: "Practice & Services", href: "#services" },
  { label: "Selected Projects", href: "#projects" },
  { label: "Process & Methodology", href: "#process" },
  { label: "Client Testimonials", href: "#testimonials" },
  { label: "FAQs", href: "#faq" },
  { label: "Start an Enquiry", href: "#enquiry" },
];

export const Navigation: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent background scroll when mobile drawer is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (mobileMenuOpen) setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleLinkClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* ── FLOATING GLASSMORHPIC HEADER ──────────────────────────── */}
      <header className="fixed top-0 left-0 w-full z-50 pointer-events-none px-3 sm:px-6">
        <div
          className={`
            mx-auto mt-3 sm:mt-4 max-w-5xl rounded-full px-4 sm:px-7 py-2.5 sm:py-3 pointer-events-auto
            transition-all duration-500 ease-out flex items-center justify-between
          `}
          style={{
            background: scrolled ? "rgba(14, 11, 8, 0.88)" : "rgba(14, 11, 8, 0.70)",
            backdropFilter: "blur(28px) saturate(180%)",
            WebkitBackdropFilter: "blur(28px) saturate(180%)",
            border: scrolled ? "1px solid rgba(212,175,80,0.30)" : "1px solid rgba(212,175,80,0.20)",
            boxShadow: "0 8px 32px rgba(0,0,0,0.5), inset 0 1px 0 rgba(212,175,80,0.12)",
          }}
        >
          {/* LEFT — Clickable Logo */}
          <a
            href="#hero"
            onClick={handleLogoClick}
            aria-label="HM Constructions and Interiors home"
            className="flex-shrink-0 group flex items-center gap-3 cursor-pointer"
          >
            <img
              src="/assets/logo.png"
              alt="HM Constructions and Interiors"
              className="h-9 sm:h-11 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </a>

          {/* CENTER — Desktop Nav links */}
          <nav className="hidden lg:flex items-center gap-7 xl:gap-9">
            {navLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="relative font-sans text-[11px] uppercase tracking-[0.26em] font-semibold py-1 group transition-colors duration-300"
                style={{ color: `${GOLD}EE` }}
                onMouseEnter={(e) => (e.currentTarget.style.color = GOLD_HOVER)}
                onMouseLeave={(e) => (e.currentTarget.style.color = `${GOLD}EE`)}
              >
                {item.label}
                <span
                  className="absolute bottom-0 left-0 w-0 h-[1px] group-hover:w-full transition-all duration-300"
                  style={{ background: GOLD_HOVER }}
                />
              </a>
            ))}
          </nav>

          {/* RIGHT — Enquire CTA Button (Desktop) */}
          <div className="hidden lg:flex items-center gap-3 flex-shrink-0">
            <a
              href="#enquiry"
              className="px-5 py-2 text-[10px] uppercase tracking-[0.22em] font-bold rounded-full transition-all duration-300 cursor-pointer"
              style={{
                color: GOLD,
                background: "rgba(212,175,80,0.12)",
                border: "1px solid rgba(212,175,80,0.40)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(212,175,80,0.28)";
                e.currentTarget.style.color = GOLD_HOVER;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(212,175,80,0.12)";
                e.currentTarget.style.color = GOLD;
              }}
            >
              Enquire
            </a>
          </div>

          {/* MOBILE — Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-full transition-colors focus:outline-none cursor-pointer flex items-center justify-center"
            style={{
              color: GOLD,
              background: "rgba(212,175,80,0.12)",
              border: "1px solid rgba(212,175,80,0.25)",
            }}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* ── EXPANDED MOBILE MENU DRAWER ────────────────────────────── */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-50 flex flex-col justify-between p-6 sm:p-8 lg:hidden animate-in fade-in duration-300"
          style={{
            background: "rgba(14, 11, 8, 0.98)",
            backdropFilter: "blur(36px)",
            WebkitBackdropFilter: "blur(36px)",
          }}
        >
          {/* Top Bar inside Drawer */}
          <div className="flex items-center justify-between pb-6 border-b border-white/10">
            <a href="#hero" onClick={handleLogoClick} className="flex items-center gap-2">
              <img
                src="/assets/logo.png"
                alt="HM Constructions"
                className="h-10 w-auto object-contain"
              />
            </a>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2.5 rounded-full text-[#D4AF50] hover:text-white transition-colors cursor-pointer border border-[#D4AF50]/30"
              aria-label="Close navigation"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Nav List with Smooth Touch Targets */}
          <div className="flex-1 overflow-y-auto py-6 space-y-4 pr-2">
            <span
              className="text-[10px] tracking-[0.3em] uppercase font-bold block mb-2"
              style={{ color: `${GOLD}70` }}
            >
              Explore Portfolio
            </span>
            {mobileNavLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(item.href);
                }}
                className="block font-serif text-2xl sm:text-3xl tracking-tight transition-colors duration-200 py-1"
                style={{ color: `${GOLD}DD` }}
                onMouseEnter={(e) => (e.currentTarget.style.color = GOLD_HOVER)}
                onMouseLeave={(e) => (e.currentTarget.style.color = `${GOLD}DD`)}
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Bottom Direct Contact & CTA Area */}
          <div className="pt-6 space-y-3.5 border-t border-white/10">
            <a
              href="#enquiry"
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick("#enquiry");
              }}
              className="block w-full py-3.5 text-center text-xs uppercase tracking-[0.24em] font-bold rounded-full transition-all duration-300 shadow-xl"
              style={{
                color: "#0A0805",
                background: GOLD,
              }}
            >
              Start a Project
            </a>

            {/* Clickable Phone Number */}
            <div className="flex items-center justify-center gap-4 text-xs">
              <a
                href={`tel:${SITE_CONFIG.contact.phone.replace(/[^0-9+]/g, "")}`}
                className="inline-flex items-center gap-2 py-2 px-3 rounded-full text-[#D4AF50] hover:text-white transition-colors border border-[#D4AF50]/30"
                title="Call Directly"
              >
                <Phone className="w-3.5 h-3.5" />
                <span className="tracking-wider">{SITE_CONFIG.contact.phone}</span>
              </a>

              {SITE_CONFIG.contact.email && (
                <a
                  href={`mailto:${SITE_CONFIG.contact.email}`}
                  className="inline-flex items-center gap-2 py-2 px-3 rounded-full text-[#D4AF50] hover:text-white transition-colors border border-[#D4AF50]/30"
                  title="Send Email"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>Email</span>
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};
