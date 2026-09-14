import React from 'react';
import { motion } from 'motion/react';

export const ManifestoSection: React.FC = () => {
  return (
    <section className="relative bg-[#09090b] py-16 sm:py-24 md:py-32 px-4 sm:px-6 lg:px-8 border-b border-white/[0.06] text-center overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 max-w-4xl mx-auto flex flex-col items-center"
      >
        {/* Subtle Eyebrow */}
        <span className="text-xs font-mono tracking-[0.25em] text-neutral-400 uppercase mb-4 block">
          The Manifesto
        </span>

        {/* Large Serif Headline */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-white font-normal tracking-tight leading-[1.12] uppercase max-w-3xl">
          Forge Your Foundation.
          <br />
          Maximize Your Potential.
        </h2>

        {/* Editorial Body Text */}
        <p className="mt-6 text-base sm:text-lg text-neutral-300 font-sans font-normal leading-relaxed max-w-2xl">
          Engineered for relentless human strength, uncompromising biomechanics, and 24/7 execution.
          Whether pulling calibrated iron at midnight or testing maximal velocity on competition platforms,
          TheFit24 provides the unadulterated blueprint to turn physical ambition into enduring power.
        </p>

        {/* Architectural Minimalist Accent */}
        <div className="mt-10 flex items-center justify-center gap-3">
          <div className="h-px w-12 bg-white/10" />
          <div className="w-1.5 h-1.5 rotate-45 bg-neutral-400" />
          <div className="h-px w-12 bg-white/10" />
        </div>
      </motion.div>
    </section>
  );
};
