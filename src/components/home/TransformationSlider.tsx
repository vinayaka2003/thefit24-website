import React, { useState, useRef } from 'react';
import { ArrowLeftRight, Trophy, CheckCircle2 } from 'lucide-react';

export const TransformationSlider: React.FC = () => {
  const [sliderPos, setSliderPos] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const clamped = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPos(clamped);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (e.buttons === 1) {
      handleMove(e.clientX);
    }
  };

  return (
    <div className="relative rounded-2xl bg-[#0e0e12] border border-[#22222a] p-6 sm:p-10 overflow-hidden">
      <div className="max-w-4xl mx-auto text-center mb-8">
        <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#888896] block mb-1">
          Interactive Case Study
        </span>
        <h3 className="text-2xl sm:text-4xl font-serif text-white uppercase tracking-wide">
          Witness Real Kinetic Transformation
        </h3>
        <p className="text-xs sm:text-sm text-[#8c8c96] mt-2 max-w-xl mx-auto">
          Drag the center handle horizontally to compare Julian Vance’s physical and neuromuscular adaptation after 18 months of calibrated programming.
        </p>
      </div>

      {/* Interactive Drag Comparison Window */}
      <div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onTouchMove={handleTouchMove}
        className="relative w-full aspect-[4/5] sm:aspect-[16/9] max-h-[70vh] sm:max-h-[600px] max-w-4xl mx-auto rounded-xl overflow-hidden cursor-ew-resize select-none border border-[#2c2c36] shadow-2xl"
      >
        {/* AFTER IMAGE (Background / Full Width) */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1600&q=85"
            alt="Julian Vance after 18 months"
            className="w-full h-full object-cover filter contrast-[115%]"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent" />
          <div className="absolute top-4 right-4 bg-emerald-950/80 backdrop-blur border border-emerald-500/40 text-emerald-400 font-mono text-[11px] px-3 py-1 rounded font-bold uppercase">
            18 MONTHS FORGED (615 LB SQUAT)
          </div>
        </div>

        {/* BEFORE IMAGE (Clipped via clip-path) */}
        <div
          style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
          className="absolute inset-0 z-10 pointer-events-none"
        >
          <img
            src="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=1600&q=85"
            alt="Julian Vance baseline day 1"
            className="w-full h-full object-cover filter grayscale contrast-125 brightness-90"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent" />
          <div className="absolute top-4 left-4 bg-black/80 backdrop-blur border border-white/20 text-[#a0a0ab] font-mono text-[10px] sm:text-[11px] px-3 py-1 rounded uppercase">
            Day 1 Baseline
          </div>
        </div>

        {/* Drag Line & Handle */}
        <div
          className="absolute inset-y-0 z-20 pointer-events-none flex items-center justify-center w-0.5 bg-white shadow-[0_0_20px_rgba(255,255,255,0.8)]"
          style={{ left: `${sliderPos}%`, transform: 'translateX(-50%)' }}
        ><div className="w-9 h-9 rounded-full bg-white text-black flex items-center justify-center shadow-2xl border-2 border-neutral-900 pointer-events-auto cursor-ew-resize hover:scale-110 transition-transform">
            <ArrowLeftRight className="w-4 h-4" />
          </div>
        </div>

        {/* Bottom Stats Footer inside frame */}
        <div className="absolute bottom-4 left-4 right-4 z-20 flex items-center justify-between pointer-events-none font-mono text-xs">
          <div className="bg-black/80 backdrop-blur px-3.5 py-1.5 rounded border border-white/10 text-[#d0d0d8]">
            Bench: 225 lb → <strong className="text-white">385 lb</strong>
          </div>
          <div className="bg-black/80 backdrop-blur px-3.5 py-1.5 rounded border border-white/10 text-[#d0d0d8]">
            Deadlift: 365 lb → <strong className="text-emerald-400">625 lb (+260 lb)</strong>
          </div>
        </div>
      </div>
    </div>
  );
};
