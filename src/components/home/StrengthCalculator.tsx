import React, { useState } from 'react';
import { Button } from '../common/Button';

interface StrengthCalculatorProps {
  onApplyBlueprint: (programName: string, total: number) => void;
}

export const StrengthCalculator: React.FC<StrengthCalculatorProps> = ({ onApplyBlueprint }) => {
  const [unit, setUnit] = useState<'lbs' | 'kg'>('lbs');
  const [bodyweight, setBodyweight] = useState<number>(185);
  const [squat, setSquat] = useState<number>(365);
  const [bench, setBench] = useState<number>(275);
  const [deadlift, setDeadlift] = useState<number>(455);

  const total = squat + bench + deadlift;
  const ratio = Number((total / (bodyweight || 1)).toFixed(2));

  // Determine strength tier
  let classification = 'Novice Lifter';
  let badgeColor = 'text-blue-300 bg-blue-950/40 border-blue-800/60';
  let programRecommendation = 'Foundation Linear Progression (3x/Week)';

  if (ratio >= 6.5) {
    classification = 'Elite National Caliber';
    badgeColor = 'text-amber-300 bg-amber-950/40 border-amber-600/60';
    programRecommendation = 'Master Architect USAPL Peaking & Wave Periodization';
  } else if (ratio >= 5.0) {
    classification = 'Advanced Strength Architect';
    badgeColor = 'text-emerald-300 bg-emerald-950/40 border-emerald-700/60';
    programRecommendation = 'Heavy Conjugate Block Periodization & Velocity Bands';
  } else if (ratio >= 3.8) {
    classification = 'Dedicated Intermediate';
    badgeColor = 'text-neutral-200 bg-neutral-800/80 border-neutral-600/60';
    programRecommendation = 'Hypertrophy & Kinetic Foundation Periodization (4x/Week)';
  }

  return (
    <div className="rounded-2xl bg-[#0e0e13] border border-white/[0.08] p-6 sm:p-10 relative overflow-hidden">
      <div className="relative z-10">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/[0.08] pb-6 mb-8">
          <div>
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-neutral-400 block mb-1">
              Biomechanical Evaluation Tool
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif text-white uppercase tracking-tight">
              The Strength Architect 1RM Estimator
            </h3>
            <p className="text-xs sm:text-sm text-neutral-400 mt-1 font-sans leading-relaxed">
              Test your Big 3 Powerlifting metrics against certified standards and generate an immediate training prescription.
            </p>
          </div>

          <div className="flex items-center gap-1.5 p-1 bg-[#16161c] rounded-lg border border-white/[0.1] shrink-0 self-start sm:self-auto">
            <button
              onClick={() => setUnit('lbs')}
              className={`px-3 py-1.5 text-xs font-mono rounded cursor-pointer transition-colors ${
                unit === 'lbs' ? 'bg-white text-black font-semibold' : 'text-neutral-400 hover:text-white'
              }`}
            >
              LBS
            </button>
            <button
              onClick={() => setUnit('kg')}
              className={`px-3 py-1.5 text-xs font-mono rounded cursor-pointer transition-colors ${
                unit === 'kg' ? 'bg-white text-black font-semibold' : 'text-neutral-400 hover:text-white'
              }`}
            >
              KG
            </button>
          </div>
        </div>

        {/* Input Sliders & Fields */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-5 mb-8">
          {/* Bodyweight */}
          <div className="bg-[#121217] p-4 rounded-xl border border-white/[0.06]">
            <div className="flex justify-between items-center mb-2">
              <label className="text-xs font-mono uppercase text-neutral-400">Athlete Weight</label>
              <span className="text-sm font-mono font-semibold text-white">
                {bodyweight} {unit}
              </span>
            </div>
            <input
              type="range"
              min={100}
              max={350}
              value={bodyweight}
              onChange={(e) => setBodyweight(Number(e.target.value))}
              className="w-full accent-white cursor-pointer"
            />
          </div>

          {/* Squat */}
          <div className="bg-[#121217] p-4 rounded-xl border border-white/[0.06]">
            <div className="flex justify-between items-center mb-2">
              <label className="text-xs font-mono uppercase text-neutral-400">Back Squat</label>
              <span className="text-sm font-mono font-semibold text-white">
                {squat} {unit}
              </span>
            </div>
            <input
              type="range"
              min={95}
              max={800}
              step={5}
              value={squat}
              onChange={(e) => setSquat(Number(e.target.value))}
              className="w-full accent-white cursor-pointer"
            />
          </div>

          {/* Bench */}
          <div className="bg-[#121217] p-4 rounded-xl border border-white/[0.06]">
            <div className="flex justify-between items-center mb-2">
              <label className="text-xs font-mono uppercase text-neutral-400">Bench Press</label>
              <span className="text-sm font-mono font-semibold text-white">
                {bench} {unit}
              </span>
            </div>
            <input
              type="range"
              min={65}
              max={550}
              step={5}
              value={bench}
              onChange={(e) => setBench(Number(e.target.value))}
              className="w-full accent-white cursor-pointer"
            />
          </div>

          {/* Deadlift */}
          <div className="bg-[#121217] p-4 rounded-xl border border-white/[0.06]">
            <div className="flex justify-between items-center mb-2">
              <label className="text-xs font-mono uppercase text-neutral-400">Deadlift Pull</label>
              <span className="text-sm font-mono font-semibold text-white">
                {deadlift} {unit}
              </span>
            </div>
            <input
              type="range"
              min={135}
              max={900}
              step={5}
              value={deadlift}
              onChange={(e) => setDeadlift(Number(e.target.value))}
              className="w-full accent-white cursor-pointer"
            />
          </div>
        </div>

        {/* Results Banner */}
        <div className="bg-[#121217] border border-white/[0.08] rounded-xl p-6 grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
          <div className="md:col-span-4 space-y-1">
            <span className="text-[11px] font-mono uppercase tracking-widest text-neutral-400 block">
              Calculated Power Total
            </span>
            <div className="flex items-baseline gap-2">
              <span className="text-4xl sm:text-5xl font-number text-white font-bold tracking-tight">
                {total.toLocaleString()}
              </span>
              <span className="text-xs font-mono text-neutral-400 uppercase">{unit} Total</span>
            </div>
            <div className="text-xs font-mono text-neutral-300">
              Coefficient: <strong className="text-white">{ratio}x</strong> Bodyweight
            </div>
          </div>

          <div className="md:col-span-5 space-y-2 border-y md:border-y-0 md:border-x border-white/[0.08] py-4 md:py-0 md:px-6">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono uppercase text-neutral-400">Status:</span>
              <span className={`text-xs font-mono uppercase px-2.5 py-0.5 rounded border font-semibold ${badgeColor}`}>
                {classification}
              </span>
            </div>
            <div className="text-xs text-neutral-300 font-sans">
              <span className="text-white block font-medium">Recommended Training Block:</span>
              {programRecommendation}
            </div>
          </div>

          <div className="md:col-span-3">
            <Button
              variant="primary"
              size="md"
              className="w-full justify-center text-xs tracking-wider uppercase font-mono"
              onClick={() => onApplyBlueprint(programRecommendation, total)}
            >
              Get Custom Blueprint
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
