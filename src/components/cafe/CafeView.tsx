import React from 'react';
import { motion } from 'motion/react';
import { CafeCarousel } from './CafeCarousel';

export const CafeView: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.22, 1, 0.36, 1] as any } }
  };

  return (
    <div className="pt-32 pb-24 md:pt-40 md:pb-32 bg-[#050507] min-h-screen text-white font-sans overflow-hidden selection:bg-[#FF5500] selection:text-white">
      
      <div className="max-w-[100rem] mx-auto px-4 sm:px-6 lg:px-12 relative">
        
        {/* Massive Editorial Hero */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="relative z-20 mb-12 md:mb-16 mix-blend-difference"
        >
          <motion.div variants={itemVariants} className="eyebrow text-xs text-neutral-500 mb-8 pl-1">
            NUTRITION & FUEL
          </motion.div>
          <motion.h1 
            variants={itemVariants}
            className="whitespace-nowrap text-[9vw] sm:text-6xl md:text-8xl lg:text-[120px] font-black tracking-tighter leading-[0.85] uppercase text-white"
          >
            THE FIT24 CAFE <span style={{ color: '#FF5500' }}>.</span>
          </motion.h1>
        </motion.div>

        {/* 3D Carousel Hero */}
        <div className="relative w-full mb-20">
          <CafeCarousel />
        </div>

        {/* 01 - Menu Architecture */}
        <div className="flex justify-center w-full mb-24 lg:mb-40 mt-12">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as any }}
            className="w-full max-w-5xl"
          >
            <div className="flex items-center gap-6 mb-16 border-b border-white/10 pb-6">
              <span className="text-6xl sm:text-8xl font-black text-white/5 leading-none">01</span>
              <h2 className="eyebrow text-sm text-[#FF5500]">Menu Architecture</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-24 gap-y-12">
              {[
                { name: "Performance Shakes", desc: "Whey isolate, almond milk, raw cacao" },
                { name: "Custom Chicken Bowls", desc: "Tailored macros for lean muscle gain" },
                { name: "Cold-Pressed Juices", desc: "Beetroot, ginger, green apple detox" },
                { name: "Organic Salad Bar", desc: "Locally sourced greens & lean proteins" }
              ].map((item, idx) => (
                <div key={idx} className="group cursor-default">
                  <div className="flex justify-between items-baseline mb-2">
                    <h3 className="text-xl md:text-2xl font-bold tracking-wide text-white group-hover:text-[#FF5500] transition-colors duration-300">{item.name}</h3>
                  </div>
                  <p className="text-sm text-neutral-500 font-normal tracking-wide">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* 02 & 03 - Operations and Location */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          
          <div className="lg:col-span-6 space-y-24">
            {/* 02 - Operations */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as any }}
            >
              <div className="flex items-center gap-6 mb-8 border-b border-white/10 pb-6">
                <span className="text-6xl sm:text-8xl font-black text-white/5 leading-none">02</span>
                <h2 className="eyebrow text-sm text-[#FF5500]">Operations</h2>
              </div>
              
              <div className="grid grid-cols-2 gap-8 mb-12">
                <div>
                  <div className="eyebrow text-[10px] text-neutral-500 mb-2">MON-SAT</div>
                  <div className="text-lg sm:text-xl font-normal text-white">8AM — 10PM</div>
                </div>
                <div>
                  <div className="eyebrow text-[10px] text-neutral-500 mb-2">SUNDAY</div>
                  <div className="text-lg sm:text-xl font-normal text-[#FF5500]">CLOSED</div>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-6 space-y-24">
            {/* 03 - Location */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as any }}
            >
              <div className="flex items-center gap-6 mb-8 border-b border-white/10 pb-6">
                <span className="text-6xl sm:text-8xl font-black text-white/5 leading-none">03</span>
                <h2 className="eyebrow text-sm text-[#FF5500]">Location</h2>
              </div>
              
              <div>
                <p className="text-sm sm:text-base text-neutral-400 font-normal leading-relaxed mb-4">
                  3rd floor, directly above TheFit24 Gym.
                </p>
                <p className="text-sm sm:text-base text-neutral-400 font-normal leading-relaxed mb-4">
                  BSF Circle intersection.
                </p>
                <p className="text-sm sm:text-base text-neutral-400 font-normal leading-relaxed">
                  Bagalur Main Road, near REVA University.
                </p>
              </div>
            </motion.div>
          </div>

        </div>

      </div>
    </div>
  );
};
