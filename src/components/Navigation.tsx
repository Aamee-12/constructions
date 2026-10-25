import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { SITE_CONFIG } from "../config/siteConfig";

// Gold from the HM logo palette
const GOLD = "#D4AF50";
const GOLD_HOVER = "#F0D080";

const navLinks = [
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#enquiry" },
];

export const Navigation: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* ── FLOATING GLASSMORHPIC HEADER ──────────────────────────── */}
      <header className="fixed top-0 left-0 w-full z-50 pointer-events-none px-4 sm:px-6">
        <div
          className={`
            mx-auto mt-3 sm:mt-4 max-w-5xl rounded-full px-5 sm:px-7 py-2.5 sm:py-3 pointer-events-auto
            transition-all duration-500 ease-out flex items-center justify-between
          `}
          style={{
            background: scrolled ? "rgba(14, 11, 8, 0.82)" : "rgba(14, 11, 8, 0.65)",
            backdropFilter: "blur(28px) saturate(180%)",
            WebkitBackdropFilter: "blur(28px) saturate(180%)",
            border: scrolled ? "1px solid rgba(212,175,80,0.28)" : "1px solid rgba(212,175,80,0.20)",
            boxShadow: "0 8px 32px rgba(0,0,0,0.5), inset 0 1px 0 rgba(212,175,80,0.12)",
          }}
        >
          {/* LEFT — Logo */}
          <a
            href="#hero"
            aria-label="HM Constructions and Interiors home"
            className="flex-shrink-0 group flex items-center gap-3"
          >
            <img
              src="/assets/logo.png"
              alt="HM Constructions and Interiors"
              className="h-10 sm:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </a>

          {/* CENTER — Nav links */}
          <nav className="hidden lg:flex items-center gap-8 xl:gap-10">
            {navLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="relative font-sans text-[11px] uppercase tracking-[0.28em] font-semibold py-1 group transition-colors duration-300"
                style={{ color: `${GOLD}EE` }}
                onMouseEnter={e => (e.currentTarget.style.color = GOLD_HOVER)}
                onMouseLeave={e => (e.currentTarget.style.color = `${GOLD}EE`)}
              >
                {item.label}
                <span
                  className="absolute bottom-0 left-0 w-0 h-[1px] group-hover:w-full transition-all duration-300"
                  style={{ background: GOLD_HOVER }}
                />
              </a>
            ))}
          </nav>

          {/* RIGHT — Enquire CTA Button */}
          <div className="hidden lg:flex items-center gap-3 flex-shrink-0">
            <a
              href="#enquiry"
              className="px-5 py-2 text-[10px] uppercase tracking-[0.22em] font-bold rounded-full transition-all duration-300"
              style={{
                color: GOLD,
                background: "rgba(212,175,80,0.12)",
                border: "1px solid rgba(212,175,80,0.40)",
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = "rgba(212,175,80,0.28)";
                e.currentTarget.style.color = GOLD_HOVER;
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = "rgba(212,175,80,0.12)";
                e.currentTarget.style.color = GOLD;
              }}
            >
              Enquire
            </a>
          </div>

          {/* MOBILE — Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-1.5 transition-colors focus:outline-none"
            style={{ color: GOLD }}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* ── MOBILE OVERLAY ────────────────────────────────────────── */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 flex flex-col justify-between p-8 pt-28 lg:hidden"
          style={{
            background: "rgba(10, 8, 5, 0.95)",
            backdropFilter: "blur(32px)",
            WebkitBackdropFilter: "blur(32px)",
          }}
        >
          <div className="flex flex-col gap-8">
            <span className="text-[10px] tracking-[0.3em] uppercase font-medium" style={{ color: `${GOLD}60` }}>
              Navigation
            </span>
            {navLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="font-serif text-4xl tracking-tight transition-colors duration-200"
                style={{ color: `${GOLD}99` }}
                onMouseEnter={e => (e.currentTarget.style.color = GOLD)}
                onMouseLeave={e => (e.currentTarget.style.color = `${GOLD}99`)}
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="pt-8 space-y-4" style={{ borderTop: `1px solid ${GOLD}20` }}>
            <a
              href="#enquiry"
              onClick={() => setMobileMenuOpen(false)}
              className="block w-full py-4 text-center text-[11px] uppercase tracking-[0.25em] font-bold rounded-lg transition-colors"
              style={{
                color: "#0A0805",
                background: GOLD,
              }}
            >
              Start a Project
            </a>
            <p className="text-center text-[10px] tracking-[0.18em] uppercase" style={{ color: `${GOLD}50` }}>
              {SITE_CONFIG.contact.phone}
            </p>
          </div>
        </div>
      )}
    </>
  );
};
