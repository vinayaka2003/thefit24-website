import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const images = [
  "/cafe/1.webp",
  "/cafe/2.webp",
  "/cafe/3.webp",
  "/cafe/4.webp"
];

export const CafeCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  }, []);

  useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(prevSlide, 4000);
    return () => clearInterval(timer);
  }, [prevSlide, isHovered]);

  const getVisibleImages = () => {
    const visible = [];
    for (let i = -2; i <= 2; i++) {
      let index = (currentIndex + i) % images.length;
      if (index < 0) index += images.length;
      visible.push({ index, originalIndex: i });
    }
    return visible;
  };

  return (
    <div 
      className="relative w-full py-12 lg:py-20 flex justify-center items-center overflow-hidden min-h-[500px] lg:min-h-[600px]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Ultra-minimalist Navigation (Left) */}
      <button
        onClick={prevSlide}
        className="absolute left-4 md:left-12 z-40 text-xs font-mono tracking-[0.3em] text-neutral-500 hover:text-white transition-colors uppercase cursor-pointer"
      >
        Prev
      </button>

      <div className="relative w-full max-w-5xl mx-auto flex justify-center items-center">
        <AnimatePresence mode="popLayout">
          {getVisibleImages().map((item) => {
            const isCenter = item.originalIndex === 0;
            
            let zIndex = 30;
            let scale = 1;
            let opacity = 1;
            let xOffset = 0;
            
            if (Math.abs(item.originalIndex) === 1) {
              zIndex = 20;
              scale = 0.9;
              opacity = 0.8;
              xOffset = item.originalIndex > 0 ? 40 : -40;
            } else if (Math.abs(item.originalIndex) === 2) {
              zIndex = 10;
              scale = 0.8;
              opacity = 0.4;
              xOffset = item.originalIndex > 0 ? 70 : -70;
            }

            return (
              <motion.div
                key={`${item.index}-${item.originalIndex}`}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{
                  opacity,
                  scale,
                  x: `${xOffset}%`,
                  zIndex,
                }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                className="absolute w-[80%] sm:w-[50%] md:w-[40%] lg:w-[32%] aspect-[4/5] rounded-xl overflow-hidden shadow-2xl origin-center bg-black"
              >
                <img
                  src={images[item.index]}
                  alt="Cafe view"
                  className="w-full h-full object-cover opacity-90 transition-opacity duration-700"
                />
                {!isCenter && (
                  <div className="absolute inset-0 bg-[#050507]/60 transition-all duration-700" />
                )}
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      {/* Ultra-minimalist Navigation (Right) */}
      <button
        onClick={nextSlide}
        className="absolute right-4 md:right-12 z-40 text-xs font-mono tracking-[0.3em] text-neutral-500 hover:text-white transition-colors uppercase cursor-pointer"
      >
        Next
      </button>
      
      {/* Minimalist Progress Line */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`transition-all duration-700 h-[1px] ${
              currentIndex === idx 
                ? "w-8 bg-white" 
                : "w-3 bg-white/20 hover:bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
};
