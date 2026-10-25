import React from "react";
import { ArrowLeft, Home, Compass } from "lucide-react";

interface NotFoundPageProps {
  onBackToHome?: () => void;
}

export const NotFoundPage: React.FC<NotFoundPageProps> = ({ onBackToHome }) => {
  const handleHomeClick = () => {
    if (onBackToHome) {
      onBackToHome();
    } else {
      window.history.pushState({}, "", "/");
      window.dispatchEvent(new PopStateEvent("popstate"));
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-[#141210] text-[#EBE4D8] flex flex-col justify-between font-sans selection:bg-[#D4AF50]/30 selection:text-[#EBE4D8] relative overflow-hidden">
      {/* Background Decorative Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#D4AF50_1px,transparent_1px)] [background-size:32px_32px] opacity-10 pointer-events-none" />

      {/* Header Bar */}
      <header className="p-6 md:p-10 flex items-center justify-between z-10">
        <a href="/" onClick={(e) => { e.preventDefault(); handleHomeClick(); }} className="flex items-center gap-3 group">
          <img
            src="/assets/logo.png"
            alt="HM Constructions and Interiors"
            className="h-10 sm:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
          />
        </a>
        <button
          onClick={handleHomeClick}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs uppercase tracking-[0.2em] font-semibold text-[#D4AF50] border border-[#D4AF50]/30 hover:bg-[#D4AF50]/10 transition-colors cursor-pointer"
        >
          <Home className="w-3.5 h-3.5" />
          <span>Home</span>
        </button>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center px-6 py-16 z-10 text-center">
        <div className="max-w-xl mx-auto space-y-6">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#D4AF50]/10 border border-[#D4AF50]/30 text-[#D4AF50] mb-2">
            <Compass className="w-8 h-8 animate-pulse" />
          </div>

          <div>
            <span className="text-[12px] uppercase tracking-[0.3em] text-[#D4AF50] font-bold block mb-2">
              Error 404 — Blueprint Uncharted
            </span>
            <h1 className="font-serif text-5xl sm:text-7xl font-bold tracking-tight text-white mb-4">
              Space Not Found
            </h1>
            <p className="text-sm sm:text-base text-[#B5ABA0] max-w-md mx-auto leading-relaxed">
              The blueprint, elevation, or page you requested does not exist or has been reorganized within our master portfolio.
            </p>
          </div>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={handleHomeClick}
              className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#D4AF50] hover:bg-[#F0D080] text-[#0A0805] text-xs uppercase tracking-[0.22em] font-bold transition-all duration-300 shadow-xl inline-flex items-center justify-center gap-2 cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Return to Portfolio</span>
            </button>
            <a
              href="#enquiry"
              onClick={() => {
                handleHomeClick();
                setTimeout(() => {
                  window.location.hash = "#enquiry";
                }, 100);
              }}
              className="w-full sm:w-auto px-8 py-3.5 rounded-full border border-[#D4AF50]/40 hover:border-[#D4AF50] text-[#D4AF50] text-xs uppercase tracking-[0.22em] font-bold transition-all duration-300 inline-flex items-center justify-center cursor-pointer"
            >
              Contact Architects
            </a>
          </div>
        </div>
      </main>

      {/* Footer info */}
      <footer className="p-6 text-center text-xs text-[#8C8375] border-t border-white/5 z-10">
        <p>© {new Date().getFullYear()} HM Constructions and Interiors. All rights reserved.</p>
      </footer>
    </div>
  );
};
