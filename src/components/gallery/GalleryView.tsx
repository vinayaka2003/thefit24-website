import React from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { galleryData } from '../../data/gallery';
import { LazyBlurImage } from '../common/LazyBlurImage';

export const GalleryView: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as any } }
  };

  // Asymmetrical masonry grid logic
  // We'll alternate sizes: Some take 2 columns, some take 1.
  const getColSpan = (idx: number) => {
    // A rhythmic pattern for a 12-column grid
    const pattern = [
      'lg:col-span-12 aspect-[21/9]', // Hero massive
      'lg:col-span-5 aspect-[4/5]',   // Portrait
      'lg:col-span-7 aspect-[16/9]',  // Landscape
      'lg:col-span-7 aspect-[16/9]',  // Landscape
      'lg:col-span-5 aspect-[4/5]',   // Portrait
      'lg:col-span-4 aspect-square',  // Square
      'lg:col-span-4 aspect-square',  // Square
      'lg:col-span-4 aspect-square',  // Square
      'lg:col-span-12 aspect-[21/9]'  // Hero massive
    ];
    return pattern[idx % pattern.length];
  };

  return (
    <div className="pt-32 pb-24 md:pt-40 md:pb-32 bg-[#050507] min-h-screen text-white font-sans overflow-hidden">
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* Massive Typographic Hero */}
        <motion.div 
          className="mb-20 md:mb-32"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div variants={itemVariants} className="text-xs font-mono uppercase tracking-[0.3em] text-neutral-500 mb-8">
            INSIDE THE FIT24
          </motion.div>
          <motion.h1 
            variants={itemVariants}
            className="whitespace-nowrap text-[9vw] sm:text-6xl md:text-8xl lg:text-[120px] font-bold tracking-tighter leading-[0.85] uppercase text-white"
          >
            SEE THE SPACE <span style={{ color: '#FF5500' }}>.</span>
          </motion.h1>
          <motion.p 
            variants={itemVariants}
            className="mt-12 text-sm sm:text-base md:text-lg text-neutral-400 max-w-2xl font-light leading-relaxed tracking-wide"
          >
            A high-contrast visual archive of calibrated steel, chalk dust, and raw physical exertion captured across 24-hour training cycles.
          </motion.p>
        </motion.div>

        {/* Asymmetrical Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4 sm:gap-6 lg:gap-8">
          {galleryData.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, delay: (idx % 3) * 0.1, ease: [0.22, 1, 0.36, 1] as any }}
              className={`group relative overflow-hidden bg-[#0a0a0e] rounded-sm ${getColSpan(idx)}`}
            >
              <LazyBlurImage
                src={item.imageUrl}
                alt={item.title}
                containerClassName="absolute inset-0 w-full h-full"
                className="w-full h-full object-cover filter grayscale contrast-125 brightness-90 group-hover:scale-105 group-hover:brightness-100 transition-all duration-[1.5s] ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-700 pointer-events-none" />

              {/* Minimalist Typographic Overlay */}
              <div className="absolute inset-0 p-6 sm:p-8 flex flex-col justify-between pointer-events-none">
                <div className="flex justify-between items-start">
                  <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-white/50 group-hover:text-white transition-colors duration-700">
                    0{idx + 1}
                  </span>
                  <div className="w-1.5 h-1.5 rounded-full bg-white/30 group-hover:bg-white transition-colors duration-700" />
                </div>
                
                <div className="transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-700 ease-out">
                  <h3 className="text-xl sm:text-2xl font-serif text-white uppercase tracking-tight mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs text-neutral-400 font-sans max-w-md leading-relaxed">
                    {item.caption}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Minimal Footer */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mt-24 pt-12 border-t border-white/[0.06] text-center"
        >
          <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-neutral-500 block">
            End of Archive
          </span>
        </motion.div>
      </div>
    </div>
  );
};
