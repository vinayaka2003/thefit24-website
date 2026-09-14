import React from 'react';
import { motion } from 'motion/react';
import { facilitiesData } from '../../data/facilities';
import { LazyBlurImage } from '../common/LazyBlurImage';
import { Button } from '../common/Button';

interface FacilitiesViewProps {
  onOpenConsult: () => void;
}

export const FacilitiesView: React.FC<FacilitiesViewProps> = ({ onOpenConsult }) => {
  const partners = [
    'Eleiko',
    'Rogue',
    'Texas Power Bars',
    'Woodway',
    'Concept2',
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
  };

  return (
    <div className="pt-32 pb-24 md:pt-40 md:pb-32 bg-[#050507] min-h-screen text-white font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Massive Typographic Hero */}
        <motion.div 
          className="mb-32 md:mb-48"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div variants={itemVariants} className="text-xs font-mono uppercase tracking-[0.3em] text-neutral-500 mb-8">
            THE TRAINING FLOOR
          </motion.div>
          <motion.h1 
            variants={itemVariants}
            className="whitespace-nowrap text-[9vw] sm:text-6xl md:text-8xl lg:text-[120px] font-bold tracking-tighter leading-[0.85] uppercase text-white"
          >
            WHAT WE OFFER <span style={{ color: '#FF5500' }}>.</span>
          </motion.h1>
          <motion.p 
            variants={itemVariants}
            className="mt-12 text-sm sm:text-base md:text-lg text-neutral-400 max-w-2xl font-light leading-relaxed tracking-wide"
          >
            Calibrated tolerance, competition platforms, and active contrast recovery designed for 24/7 strength execution. No gimmicks, just pure iron architecture.
          </motion.p>
        </motion.div>

        {/* Editorial Facility List */}
        <div className="space-y-32 md:space-y-48 mb-32 md:mb-48">
          {facilitiesData.map((item, idx) => (
            <div 
              key={item.id} 
              className={`flex flex-col gap-12 lg:gap-24 items-center ${
                idx % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'
              }`}
            >
              {/* Massive Grayscale Image */}
              <motion.div 
                initial={{ opacity: 0, x: idx % 2 === 1 ? 30 : -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                className="w-full lg:w-3/5 aspect-[4/3] relative rounded-sm overflow-hidden"
              >
                <div className="absolute inset-0 bg-black/20 z-10 mix-blend-overlay" />
                <LazyBlurImage
                  src={item.image}
                  alt={item.name}
                  containerClassName="w-full h-full"
                  className="w-full h-full object-cover filter grayscale contrast-125"
                />
                <div className="absolute inset-0 border border-white/10 z-20" />
                
                {/* Minimal Overlay Number */}
                <div className="absolute top-6 left-6 z-30 text-[10px] font-mono uppercase tracking-[0.3em] text-white/50">
                  Zone 0{idx + 1}
                </div>
              </motion.div>

              {/* Typographic Details */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                className="w-full lg:w-2/5 space-y-12"
              >
                <div>
                  <h2 className="text-2xl sm:text-4xl font-medium tracking-tight mb-6 uppercase">
                    {item.name}
                  </h2>
                  <p className="text-sm text-neutral-400 font-light leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest border-b border-white/[0.06] pb-4">
                    Hardware Specifications
                  </div>
                  <div className="space-y-3 pt-2">
                    {item.specs.map((spec, sIdx) => (
                      <div key={sIdx} className="text-xs font-mono text-neutral-300 uppercase tracking-wider">
                        {spec}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="text-xs text-neutral-500 italic font-serif">
                  {item.highlight}
                </div>
              </motion.div>
            </div>
          ))}
        </div>

        {/* Minimal Lineage Ticker */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mb-32 md:mb-48 py-12 border-y border-white/[0.06] text-center"
        >
          <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-neutral-500 block mb-8">
            Lineage & Standards
          </span>
          <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4 text-xs sm:text-sm font-mono text-neutral-300 uppercase tracking-widest">
            {partners.map((brand, i) => (
              <React.Fragment key={brand}>
                <span>{brand}</span>
                {i < partners.length - 1 && <span className="text-neutral-700">/</span>}
              </React.Fragment>
            ))}
          </div>
        </motion.div>

        {/* Stark CTA */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center text-center pb-12"
        >
          <h3 className="text-2xl sm:text-4xl font-medium tracking-tight mb-8">
            INSPECT THE FACILITY
          </h3>
          <Button
            variant="primary"
            size="lg"
            onClick={onOpenConsult}
            className="w-full sm:w-auto text-xs font-mono uppercase tracking-widest bg-white text-black hover:bg-neutral-200"
          >
            Book A Free Session
          </Button>
        </motion.div>

      </div>
    </div>
  );
};
