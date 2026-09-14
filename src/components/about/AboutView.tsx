import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Button } from '../common/Button';
import { ChevronDown } from 'lucide-react';

interface AboutViewProps {
  onOpenConsult: () => void;
  onNavigate: (page: string) => void;
}

export const AboutView: React.FC<AboutViewProps> = ({ onOpenConsult, onNavigate }) => {
  const [activePillar, setActivePillar] = useState<number | null>(0);

  const pillars = [
    {
      num: '01',
      title: 'MODERN ARSENAL',
      desc: 'Spread across two massive floors, our facility is equipped with a vast range of brand-new, top-tier machinery—from VYSATI functional trainers to dedicated CrossFit zones and custom Captain America free weights.',
    },
    {
      num: '02',
      title: 'IMMACULATE HYGIENE',
      desc: 'We believe a great workout requires a fresh environment. Every corner of our gym, including the washrooms, is maintained to the highest standards of cleanliness, ensuring a comfortable, sweat-smell-free experience.',
    },
    {
      num: '03',
      title: 'EXPERT GUIDANCE',
      desc: 'Our trainers aren\'t just staff; they are mentors and National Champions. We prioritize proper technique, injury prevention, and providing a highly motivating, ego-free atmosphere for beginners and pros alike.',
    },
    {
      num: '04',
      title: 'HOLISTIC WELLNESS',
      desc: 'Fitness goes beyond the weights. We offer diverse programs including Zumba and Yoga, a dedicated steam room for post-workout recovery, and an in-house cafe serving healthy, nutritious food.',
    },
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
            THE FIT24 STORY
          </motion.div>
          <motion.h1 
            variants={itemVariants}
            className="whitespace-nowrap text-[9vw] sm:text-6xl md:text-8xl lg:text-[120px] font-bold tracking-tighter leading-[0.85] uppercase text-white"
          >
            WHO WE ARE <span style={{ color: '#FF5500' }}>.</span>
          </motion.h1>
          <motion.p 
            variants={itemVariants}
            className="mt-12 text-sm sm:text-base md:text-lg text-neutral-400 max-w-2xl font-light leading-relaxed tracking-wide"
          >
            We set out to build the premier fitness destination in Yelahanka. By combining massive, thoughtfully designed infrastructure with an ego-free, highly motivating community, we created an environment where both beginners and seasoned athletes can truly thrive.
          </motion.p>
        </motion.div>

        {/* Story & Image Split */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center mb-32 md:mb-48">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="relative aspect-[4/5] w-full overflow-hidden rounded-sm"
          >
            <div className="absolute inset-0 bg-black/20 z-10 mix-blend-overlay" />
            <img
              src="/about/about.webp"
              alt="Gym Interior"
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
            />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col space-y-8"
          >
            <h2 className="text-2xl sm:text-3xl font-medium tracking-tight leading-snug">
              AN ELITE TRAINING ENVIRONMENT.
            </h2>
            <p className="text-neutral-400 font-light leading-relaxed">
              TheFit24 was forged to be more than just a place to sweat. Spread across two massive, impeccably maintained floors, we believe in providing the absolute best—from pristine hygiene and top-notch equipment to guidance from National Champion trainers.
            </p>
          </motion.div>
        </div>

        {/* Pillars / Principles */}
        <motion.div 
          className="mb-32"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="text-xs font-mono uppercase tracking-[0.3em] text-neutral-500 mb-12">
            CORE PRINCIPLES
          </div>
          
          <div className="border-t border-white/[0.06]">
            {pillars.map((pillar, idx) => (
              <div key={idx} className="border-b border-white/[0.06]">
                <button
                  onClick={() => setActivePillar(activePillar === idx ? null : idx)}
                  className="w-full py-8 flex items-center justify-between text-left group"
                >
                  <div className="flex items-center gap-6 sm:gap-12">
                    <span className="text-xs sm:text-sm font-mono text-neutral-500 w-6">
                      {pillar.num}
                    </span>
                    <span className="text-lg sm:text-2xl font-medium tracking-wide group-hover:text-[#FF5500] transition-colors">
                      {pillar.title}
                    </span>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 sm:w-6 sm:h-6 text-neutral-500 transition-transform duration-300 ${
                      activePillar === idx ? 'rotate-180 text-white' : ''
                    }`}
                  />
                </button>
                
                <AnimatePresence>
                  {activePillar === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="pb-8 pl-14 sm:pl-24 text-sm text-neutral-400 font-light max-w-2xl leading-relaxed">
                        {pillar.desc}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Stark CTA */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center text-center py-24 border-t border-white/[0.06]"
        >
          <h3 className="text-2xl sm:text-4xl font-medium tracking-tight mb-8">
            EXPERIENCE THE STANDARD
          </h3>
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Button
              variant="primary"
              size="lg"
              onClick={onOpenConsult}
              className="w-full sm:w-auto text-xs font-mono uppercase tracking-widest bg-white text-black hover:bg-neutral-200"
            >
              Book A Free Session
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => onNavigate('facilities')}
              className="w-full sm:w-auto text-xs font-mono uppercase tracking-widest"
            >
              Explore Facilities
            </Button>
          </div>
        </motion.div>

      </div>
    </div>
  );
};
