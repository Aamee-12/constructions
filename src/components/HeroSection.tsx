import React, { useRef, useEffect } from "react";

const TOTAL_FRAMES = 100;

export const HeroSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const imagesRef = useRef<HTMLImageElement[]>([]);

  // Preload frame sequence for fluid canvas scrub
  useEffect(() => {
    const images: HTMLImageElement[] = [];

    for (let i = 0; i < TOTAL_FRAMES; i++) {
      const img = new Image();
      const num = String(i).padStart(3, "0");
      img.src = `/assets/frames/frame_${num}.jpg`;
      images.push(img);
    }
    imagesRef.current = images;
  }, []);

  // Canvas render & scroll + cursor motion logic
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let targetProgress = 0;
    let currentProgress = 0;
    let targetMouseX = 0;
    let targetMouseY = 0;
    let mouseX = 0;
    let mouseY = 0;

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    const handleMouseMove = (e: MouseEvent) => {
      targetMouseX = (e.clientX / window.innerWidth) * 2 - 1;
      targetMouseY = (e.clientY / window.innerHeight) * 2 - 1;
    };
    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const scrollableDist = containerRef.current.offsetHeight - window.innerHeight;
      if (scrollableDist <= 0) return;
      // Scroll progress from 0 to 1 across the 220vh section
      const p = Math.min(1, Math.max(0, -rect.top / scrollableDist));
      targetProgress = p;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });

    const render = () => {
      // Lerp for cinematic organic inertia
      currentProgress += (targetProgress - currentProgress) * 0.12;
      mouseX += (targetMouseX - mouseX) * 0.08;
      mouseY += (targetMouseY - mouseY) * 0.08;

      // Dedicate the scroll directly to scrubbing the frames 0 -> 99 smoothly
      const frameIndex = Math.min(
        TOTAL_FRAMES - 1,
        Math.max(0, Math.floor(currentProgress * (TOTAL_FRAMES - 1)))
      );
      const img = imagesRef.current[frameIndex];

      if (img && img.complete) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Aspect fill math
        const hRatio = canvas.width / img.width;
        const vRatio = canvas.height / img.height;
        const ratio = Math.max(hRatio, vRatio);

        // Crisp 100% video without distortion or dulling
        const scale = ratio * (1.02 + currentProgress * 0.04);
        const drawW = img.width * scale;
        const drawH = img.height * scale;

        // Perspective parallax center
        const offsetX = (canvas.width - drawW) / 2 + mouseX * -18;
        const offsetY = (canvas.height - drawH) / 2 + mouseY * -14;

        ctx.drawImage(img, offsetX, offsetY, drawW, drawH);
      }

      // Text emerges and becomes prominently visible as user scrolls through the build
      if (contentRef.current) {
        const revealFactor = Math.max(0, Math.min(1, (currentProgress - 0.25) / 0.35));
        const textTranslateY = (1 - revealFactor) * 25;
        
        contentRef.current.style.opacity = revealFactor.toFixed(3);
        contentRef.current.style.pointerEvents = revealFactor > 0.3 ? "auto" : "none";
        contentRef.current.style.transform = `translate3d(${mouseX * 8}px, ${mouseY * 8 + textTranslateY}px, 0)`;
      }

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      id="hero"
      ref={containerRef}
      className="relative w-full h-[150vh] bg-black"
    >
      {/* Pinned Sticky Viewport Stage — Pure, high-contrast, zero cream tinting over the video */}
      <div className="sticky top-0 left-0 w-full h-screen overflow-hidden flex flex-col justify-between">
        {/* Interactive 3D Canvas Scrub Layer with Zero Washed-out Shading */}
        <div className="absolute inset-0 z-0">
          <canvas
            ref={canvasRef}
            className="w-full h-full block object-cover"
          />
        </div>

        {/* Bottom dark gradient scrim — ensures hero text is legible */}
        <div
          className="absolute bottom-0 left-0 w-full z-10 pointer-events-none"
          style={{
            height: "320px",
            background: "linear-gradient(to top, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.45) 55%, transparent 100%)",
          }}
        />

        {/* Top Spacer for Fixed Header */}
        <div className="h-32 w-full z-10" />

        {/* Hero Editorial Content Overlay — High Contrast Pure Text */}
        <div className="relative z-10 max-w-7xl mx-auto w-full px-6 md:px-12 pb-20 flex flex-col justify-end">
          <div ref={contentRef} className="max-w-3xl space-y-6 will-change-transform opacity-0 pointer-events-none">
            <div className="inline-flex items-center gap-3 drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)]">
              <span className="w-8 h-[2px] bg-[#C59A5A]" />
              <span className="text-[11px] md:text-xs uppercase tracking-[0.28em] text-[#FFFFFF] font-semibold">
                INTERIORS · CONSTRUCTION
              </span>
            </div>

            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-[0.98] tracking-[-0.03em] text-[#FFFFFF] max-w-3xl drop-shadow-[0_6px_24px_rgba(0,0,0,0.95)]">
              Architecture that feels like home.
            </h1>

            <p className="text-[#F5F2EC] text-base md:text-xl leading-relaxed max-w-xl font-normal drop-shadow-[0_4px_16px_rgba(0,0,0,0.95)]">
              Every line begins with proportion, site orientation, and natural connection to the landscape.
            </p>

            {/* High-Contrast CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a
                href="#projects"
                className="px-8 py-4 bg-[#C59A5A] hover:bg-[#b08544] text-[#141210] font-semibold text-xs uppercase tracking-[0.2em] transition-all duration-300 shadow-2xl shadow-black/60"
              >
                Explore Projects
              </a>
              <a
                href="#enquiry"
                className="px-8 py-4 border border-white/60 hover:border-white text-white font-medium text-xs uppercase tracking-[0.2em] transition-all duration-300 bg-black/40 backdrop-blur-md shadow-2xl"
              >
                Start a Project
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
