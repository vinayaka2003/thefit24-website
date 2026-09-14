import React, { useState } from 'react';
import { Layers, ShieldCheck, Check, Sparkles, ArrowRight, Eye } from 'lucide-react';
import { Button } from '../common/Button';

interface ZoneDetail {
  id: string;
  name: string;
  code: string;
  area: string;
  equipmentCount: string;
  description: string;
  image: string;
  keySpecs: string[];
  vibe: string;
}

const zones: ZoneDetail[] = [
  {
    id: 'zone-01',
    name: 'The Iron Dumbbell Vault',
    code: 'SEC-01',
    area: '4,500 Sq.Ft.',
    equipmentCount: '5 - 150 LBS Full Rack',
    description: 'Custom urethane and milled raw steel dumbbells progressing from 5 lbs to 150 lbs, flanking 8 adjustable commercial heavy-gauge benches.',
    image: '/facilities/1.webp',
    keySpecs: ['Dumbbells: 5 lbs to 150 lbs', 'Benches: 11-gauge 3x3 steel', 'Calibrated Cast Iron Plates'],
    vibe: 'High-volume hypertrophy and strict pressing mechanics.',
  },
  {
    id: 'zone-02',
    name: 'Cardio & Treadmill Deck',
    code: 'SEC-02',
    area: '6,200 Sq.Ft.',
    equipmentCount: 'SHUA Commercial Fleet',
    description: 'High-performance SHUA commercial treadmills positioned against expansive glass windows overlooking the city, equipped with advanced shock absorption.',
    image: '/facilities/2.webp',
    keySpecs: ['SHUA Commercial Treadmills', 'Advanced Shock Absorption Deck', 'Panoramic City Views'],
    vibe: 'Build cardiovascular endurance with state-of-the-art tracking.',
  },
  {
    id: 'zone-03',
    name: 'Combat & Cable Zone',
    code: 'SEC-03',
    area: '7,800 Sq.Ft.',
    equipmentCount: 'VYSATI Dual Stations',
    description: 'VYSATI dual adjustable cable crossovers paired with heavy punching bags for combat conditioning, alongside dedicated plate-loaded stations.',
    image: '/facilities/3.webp',
    keySpecs: ['VYSATI Cable Crossover Station', 'Heavy Duty Punching Bag', 'Captain America Bumper Plates'],
    vibe: 'Functional strength and striking power in one zone.',
  },
  {
    id: 'zone-04',
    name: 'Heavy Lifting & Bumper Plates',
    code: 'SEC-04',
    area: '5,000 Sq.Ft.',
    equipmentCount: 'Soulflex Competition Bumpers',
    description: 'Dedicated heavy lifting zones featuring color-coded Soulflex competition bumper plates and heavy tractor tires for flips and functional power.',
    image: '/facilities/4.webp',
    keySpecs: ['Soulflex Competition Bumper Plates', 'Heavy Tractor Tire', 'Impact-Absorbing Rubber Flooring'],
    vibe: 'Engineered for maximal load testing and Olympic lifts.',
  },
  {
    id: 'zone-05',
    name: 'Core Isolation & Hyper Bench',
    code: 'SEC-05',
    area: '4,500 Sq.Ft.',
    equipmentCount: 'VYSATI Core Stations',
    description: 'Dedicated core development area featuring the VYSATI vertical knee raise and dip station, providing a stable platform for intense abdominal work.',
    image: '/facilities/5.webp',
    keySpecs: ['VYSATI Knee Raise / Dip Station', 'Heavy-Duty Steel Construction', 'Plate Storage Pegs'],
    vibe: 'Unbreakable core stability and posterior chain development.',
  },
];

export const VirtualFloorMap: React.FC<{ onInspectFacility: () => void }> = ({ onInspectFacility }) => {
  const [activeZone, setActiveZone] = useState<ZoneDetail>(zones[0]);

  return (
    <div className="rounded-2xl bg-[#0b0b0e] border border-[#22222a] p-6 sm:p-10 overflow-hidden">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[#1f1f26] pb-6 mb-8">
        <div>
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-neutral-400 block mb-1">
            Spatial Architecture // 28,000 SQ.FT.
          </span>
          <h3 className="text-2xl sm:text-4xl font-serif text-white uppercase tracking-wide">
            Interactive Sanctuary Blueprint
          </h3>
        </div>
        <div className="flex items-center gap-2 text-xs font-mono text-[#8a8a96]">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>ALL ZONES UNLOCKED 24/7/365</span>
        </div>
      </div>

      {/* Interactive Zone Buttons */}
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5 mb-8">
        {zones.map((zone) => {
          const isActive = activeZone.id === zone.id;
          return (
            <button
              key={zone.id}
              onClick={() => setActiveZone(zone)}
              className={`p-3 rounded-lg border text-left transition-all cursor-pointer ${
                isActive
                  ? 'bg-[#181820] border-white text-white shadow-lg'
                  : 'bg-[#101014] border-[#22222a] text-[#80808c] hover:border-[#353542] hover:text-white'
              }`}
            >
              <div className="text-[10px] font-mono text-[#626270] mb-0.5">{zone.code}</div>
              <div className="text-xs font-serif uppercase truncate">{zone.name.split(' ')[1] || zone.name}</div>
              <div className="text-[10px] font-mono text-neutral-400 mt-1">{zone.area}</div>
            </button>
          );
        })}
      </div>

      {/* Active Zone Detail Showcase */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#121217] rounded-xl border border-[#22222a] p-6 sm:p-8">
        <div className="lg:col-span-6 relative rounded-lg overflow-hidden h-72 sm:h-96 border border-[#2c2c36]">
          <img
            src={activeZone.image}
            alt={activeZone.name}
            className="w-full h-full object-cover filter contrast-[110%]"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
          <div className="absolute top-3 left-3 bg-black/80 backdrop-blur px-3 py-1 rounded border border-white/10 font-mono text-xs text-white">
            {activeZone.code} • {activeZone.area}
          </div>
          <div className="absolute bottom-3 left-3 right-3 bg-[#0d0d10]/90 backdrop-blur p-3 rounded border border-white/10 font-mono text-xs text-[#a0a0b0]">
            <span className="text-white block font-semibold mb-0.5">Arsenal Capacity:</span>
            {activeZone.equipmentCount}
          </div>
        </div>

        <div className="lg:col-span-6 space-y-5">
          <div>
            <span className="text-[11px] font-mono uppercase text-[#70707c] block">
              Selected Sector: {activeZone.code}
            </span>
            <h4 className="text-2xl sm:text-3xl font-serif text-white uppercase tracking-wide mt-1">
              {activeZone.name}
            </h4>
            <p className="text-xs sm:text-sm text-[#8e8e9c] leading-relaxed mt-2">
              {activeZone.description}
            </p>
          </div>

          <div className="space-y-2 border-t border-[#202028] pt-4">
            <span className="text-[10px] font-mono uppercase text-[#60606a] block">
              Hardware Highlights:
            </span>
            {activeZone.keySpecs.map((spec, idx) => (
              <div key={idx} className="flex items-center gap-2 text-xs text-[#c4c4cf]">
                <Check className="w-3.5 h-3.5 text-neutral-400 shrink-0" />
                <span>{spec}</span>
              </div>
            ))}
          </div>

          <div className="p-3 rounded bg-[#16161c] border border-[#24242e] text-xs font-mono text-[#a0a0ab]">
            <span className="text-white block font-medium mb-0.5">Discipline Atmosphere:</span>
            {activeZone.vibe}
          </div>

          <div className="pt-2">
            <Button
              variant="primary"
              size="md"
              onClick={onInspectFacility}
              className="text-xs tracking-wider"
            >
              Inspect Full Arsenal Specs <ArrowRight className="w-4 h-4 ml-1" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
