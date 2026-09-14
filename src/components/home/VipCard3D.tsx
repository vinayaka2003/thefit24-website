import React, { useState, useRef } from 'react';
import { Shield, Sparkles, QrCode, Cpu, ArrowRight } from 'lucide-react';
import { Button } from '../common/Button';

interface VipCard3DProps {
  onClaimMembership: (tierName: string) => void;
}

export const VipCard3D: React.FC<VipCard3DProps> = ({ onClaimMembership }) => {
  const [athleteName, setAthleteName] = useState('MARCUS VANCE');
  const [cardTheme, setCardTheme] = useState<'obsidian' | 'gold' | 'titanium'>('gold');
  const [rotX, setRotX] = useState(0);
  const [rotY, setRotY] = useState(0);
  const [glarePos, setGlarePos] = useState({ x: 50, y: 50 });
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rX = ((y - centerY) / centerY) * -16;
    const rY = ((x - centerX) / centerX) * 16;

    setRotX(rX);
    setRotY(rY);
    setGlarePos({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100,
    });
  };

  const handleMouseLeave = () => {
    setRotX(0);
    setRotY(0);
  };

  const themes = {
    obsidian: {
      bg: 'from-[#0e0e12] via-[#14141a] to-[#0a0a0d]',
      border: 'border-[#383844]',
      accent: 'text-[#d4af37]',
      label: 'Obsidian Black Titanium',
      chip: 'from-amber-200 to-amber-600',
    },
    gold: {
      bg: 'from-[#1c1810] via-[#2a2416] to-[#120f0a]',
      border: 'border-[#d4af37]/60 shadow-[0_0_35px_rgba(212,175,55,0.15)]',
      accent: 'text-[#f5d77f]',
      label: '24K Sovereign Gold Pass',
      chip: 'from-yellow-200 to-amber-500',
    },
    titanium: {
      bg: 'from-[#161820] via-[#20242e] to-[#0f1116]',
      border: 'border-[#8e98b0]/50 shadow-[0_0_35px_rgba(142,152,176,0.15)]',
      accent: 'text-[#d8e0f5]',
      label: 'Brushed Aerospace Steel',
      chip: 'from-slate-200 to-blue-400',
    },
  };

  const currentTheme = themes[cardTheme];

  return (
    <div className="relative rounded-2xl bg-gradient-to-b from-[#111115] via-[#0d0d10] to-[#08080a] border border-[#262630] p-6 md:p-10 overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-amber-500/[0.03] rounded-full blur-[100px] pointer-events-none" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        {/* Left Interactive 3D Card Display */}
        <div className="lg:col-span-7 flex flex-col items-center justify-center">
          <div
            style={{ perspective: '1200px', touchAction: 'pan-y' }}
            className="w-full max-w-md cursor-pointer"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            onTouchEnd={handleMouseLeave}
          >
            <div
              ref={cardRef}
              style={{
                transform: `rotateX(${rotX}deg) rotateY(${rotY}deg)`,
                transformStyle: 'preserve-3d',
                transition: 'transform 0.1s ease-out',
              }}
              className={`relative w-full aspect-[1.586/1] rounded-xl sm:rounded-2xl bg-gradient-to-br ${currentTheme.bg} border-2 ${currentTheme.border} p-4 xs:p-5 sm:p-7 shadow-2xl flex flex-col justify-between overflow-hidden select-none`}
            >
              {/* Holographic light reflection layer */}
              <div
                className="absolute inset-0 pointer-events-none opacity-40 mix-blend-overlay transition-opacity duration-200"
                style={{
                  background: `radial-gradient(500px circle at ${glarePos.x}% ${glarePos.y}%, rgba(255, 255, 255, 0.4), transparent 60%)`,
                }}
              />

              {/* Card Header */}
              <div className="flex items-center justify-between z-10">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 xs:w-8 xs:h-8 rounded bg-white text-black font-serif font-black flex items-center justify-center text-xs xs:text-sm shadow">
                    24
                  </div>
                  <div>
                    <span className="font-serif font-bold text-white text-xs xs:text-sm tracking-widest uppercase block">
                      TheFit24
                    </span>
                    <span className={`text-[8px] xs:text-[9px] font-mono tracking-wider ${currentTheme.accent} block`}>
                      SOVEREIGN ACCESS
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-1 xs:gap-1.5 px-2 py-0.5 xs:px-2.5 xs:py-1 rounded-full bg-white/5 border border-white/10 text-[8px] xs:text-[10px] font-mono text-white/80">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>24/7 RFID PASS</span>
                </div>
              </div>

              {/* Smart RFID Chip Graphic */}
              <div className="my-auto py-1 xs:py-2 z-10 flex items-center justify-between">
                <div className={`w-8 h-6 xs:w-11 xs:h-8 rounded bg-gradient-to-br ${currentTheme.chip} p-0.5 xs:p-1 shadow-inner flex flex-col justify-between border border-white/30`}>
                  <div className="h-px bg-black/30 w-full" />
                  <div className="h-px bg-black/30 w-full" />
                  <div className="h-px bg-black/30 w-full" />
                </div>
                <div className="text-right font-mono text-[9px] xs:text-[11px] text-white/60 tracking-widest">
                  SECTOR 04 // BAY 14
                </div>
              </div>

              {/* Card Footer with Athlete Name & Token Code */}
              <div className="z-10 flex items-end justify-between border-t border-white/10 pt-2 xs:pt-3">
                <div className="max-w-[70%] truncate">
                  <span className="text-[8px] xs:text-[9px] font-mono uppercase text-white/50 block tracking-widest">
                    Authorized Athlete
                  </span>
                  <span className="font-mono text-xs xs:text-sm sm:text-base font-bold text-white tracking-wider block truncate">
                    {athleteName || 'ENTER ATHLETE NAME'}
                  </span>
                  <span className="text-[8px] xs:text-[10px] font-mono text-white/40 block mt-0.5">
                    ID: 8842-TF24-9901
                  </span>
                </div>

                <div className="flex flex-col items-end">
                  <QrCode className="w-6 h-6 xs:w-8 xs:h-8 text-white/90" />
                  <span className="text-[7px] xs:text-[8px] font-mono text-white/40 mt-0.5 xs:mt-1 uppercase">
                    BIOMETRIC
                  </span>
                </div>
              </div>
            </div>
          </div>

          <span className="text-[10px] font-mono uppercase tracking-widest text-[#70707c] mt-3 sm:mt-4 flex items-center gap-1.5 text-center">
            <Sparkles className="w-3 h-3 text-amber-400 shrink-0" />
            Tilt cursor or tap card to inspect metallic hologram reflection
          </span>
        </div>

        {/* Right Customizer Panel */}
        <div className="lg:col-span-5 space-y-5">
          <div>
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-amber-400 block mb-1">
              Sanctuary Credential Customizer
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif text-white uppercase tracking-wide">
              Your Sovereign Key To The Iron
            </h3>
            <p className="text-xs sm:text-sm text-[#8a8a96] mt-2 leading-relaxed">
              Every member receives an encrypted biometric RFID smart credential granting 24/7/365 autonomous entry to all 28,000 sq.ft. of the facility.
            </p>
          </div>

          {/* Name Customization Input */}
          <div>
            <label className="block text-xs font-mono uppercase text-[#a0a0aa] mb-1.5">
              Personalize Member Name
            </label>
            <input
              type="text"
              maxLength={22}
              value={athleteName}
              onChange={(e) => setAthleteName(e.target.value.toUpperCase())}
              placeholder="YOUR NAME"
              className="w-full bg-[#15151a] border border-[#2e2e3a] rounded-lg px-4 py-2.5 text-sm font-mono text-white focus:border-amber-400 focus:outline-none tracking-wider uppercase transition-colors"
            />
          </div>

          {/* Card Finish Selector */}
          <div>
            <label className="block text-xs font-mono uppercase text-[#a0a0aa] mb-2">
              Select Finish Grade
            </label>
            <div className="grid grid-cols-3 gap-2 text-xs font-mono">
              <button
                type="button"
                onClick={() => setCardTheme('gold')}
                className={`p-2.5 rounded-lg border text-center transition-all cursor-pointer ${
                  cardTheme === 'gold'
                    ? 'border-amber-400 bg-amber-950/20 text-amber-300 font-bold'
                    : 'border-[#24242c] bg-[#121216] text-[#8e8e98] hover:border-[#383846]'
                }`}
              >
                24K Gold
              </button>
              <button
                type="button"
                onClick={() => setCardTheme('obsidian')}
                className={`p-2.5 rounded-lg border text-center transition-all cursor-pointer ${
                  cardTheme === 'obsidian'
                    ? 'border-neutral-200 bg-neutral-900 text-white font-bold'
                    : 'border-[#24242c] bg-[#121216] text-[#8e8e98] hover:border-[#383846]'
                }`}
              >
                Obsidian
              </button>
              <button
                type="button"
                onClick={() => setCardTheme('titanium')}
                className={`p-2.5 rounded-lg border text-center transition-all cursor-pointer ${
                  cardTheme === 'titanium'
                    ? 'border-blue-400 bg-blue-950/20 text-blue-200 font-bold'
                    : 'border-[#24242c] bg-[#121216] text-[#8e8e98] hover:border-[#383846]'
                }`}
              >
                Titanium
              </button>
            </div>
          </div>

          {/* Action Triggers */}
          <div className="pt-2">
            <Button
              variant="primary"
              size="md"
              className="w-full justify-center text-xs tracking-widest py-3.5 bg-gradient-to-r from-neutral-100 to-amber-100 text-black font-bold"
              onClick={() => onClaimMembership(currentTheme.label)}
            >
              Order {currentTheme.label} Pass <ArrowRight className="w-4 h-4 ml-1" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
