import React, { useRef, useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import { Button } from '../common/Button';
import { AnimatedCounter } from '../common/AnimatedCounter';
import { ChevronDown } from 'lucide-react';

interface HeroProps {
  onStartBuild: () => void;
  onExploreFacilities: () => void;
}

const LIFTING_VIDEOS = [
  {
    id: 'deadlift',
    label: 'Deadlift',
    desc: 'Heavy Barbell Deadlift',
    src: '/videos/deadlift.mp4',
    poster: '/videos/poster-deadlift.jpg',
  },
  {
    id: 'dumbbell',
    label: 'Dumbbells',
    desc: 'Dumbbell Press',
    src: '/videos/dumbbell.mp4',
    poster: '/videos/poster-dumbbell.jpg',
  },
  {
    id: 'barbell',
    label: 'Barbell',
    desc: 'Barbell Curls & Lifts',
    src: '/videos/barbell.mp4',
    poster: '/videos/poster-barbell.jpg',
  },
  {
    id: 'reel',
    label: 'Full Reel',
    desc: 'Deadlift, Dumbbell & Barbell Montage',
    src: '/videos/gym-lifting.mp4',
    poster: '/videos/poster-lifting.jpg',
  },
];

export const Hero: React.FC<HeroProps> = ({ onStartBuild, onExploreFacilities }) => {
  const containerRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const activeVideoId = 'reel'; // Only use the full reel for a clean look

  const currentVideo = LIFTING_VIDEOS.find((v) => v.id === activeVideoId) || LIFTING_VIDEOS[0];

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, { damping: 30, stiffness: 180 });
  const smoothY = useSpring(mouseY, { damping: 30, stiffness: 180 });

  const spotlightBg = useTransform([smoothX, smoothY], ([x, y]) => {
    return `radial-gradient(800px circle at ${x}px ${y}px, rgba(255, 255, 255, 0.05), transparent 75%)`;
  });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
      videoRef.current.play().catch(() => {});
    }
  }, [activeVideoId]);

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-[100svh] sm:min-h-screen flex items-center justify-center overflow-hidden bg-[#070709] pt-16"
    >
      {/* Background Cinematic Video with Loop & Balanced Black Tint */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          key={currentVideo.id}
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          poster={currentVideo.poster}
          className="w-full h-full object-cover select-none pointer-events-none filter contrast-[102%] brightness-90 scale-105 transition-opacity duration-700"
        >
          <source src={currentVideo.src} type="video/mp4" />
        </video>

        {/* Uniform Black Tint Layer */}
        <div className="absolute inset-0 bg-black/60 pointer-events-none" />

        {/* Soft atmospheric gradient from top under navbar into floor */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-[#070709] pointer-events-none" />
        <div className="absolute inset-0 bg-radial at-center from-transparent via-black/25 to-black/70 pointer-events-none" />
      </div>

      {/* Dynamic Cursor Spotlight Layer */}
      <motion.div
        style={{ background: spotlightBg }}
        className="pointer-events-none absolute inset-0 z-[1]"
      />

      {/* Center Hero Content with Framer Motion reveals */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center flex flex-col items-center justify-center pt-16 pb-32 sm:py-24">
        {/* Sleek Eyebrow Quote */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-[10px] sm:text-xs tracking-[0.3em] sm:tracking-[0.4em] text-neutral-400 uppercase font-sans font-medium mb-6 px-2"
        >
          THE FIT24
        </motion.p>

        {/* Main Display Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-[5vw] sm:text-4xl md:text-5xl lg:text-6xl tracking-[0.1em] sm:tracking-[0.2em] font-sans font-light text-white/80 uppercase mb-8 text-center whitespace-nowrap"
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF8C00] via-[#FF5500] to-[#FF3300] font-medium drop-shadow-[0_0_15px_rgba(255,85,0,0.5)]">1%</span> BETTER EVERYDAY
        </motion.h1>

        {/* Minimalist Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-sm sm:text-base text-neutral-400 font-sans font-light tracking-wide max-w-lg px-4"
        >
          Yelahanka Bengaluru's premier fitness hub. Your journey starts now.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-10 sm:mt-12 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4 w-full sm:w-auto px-6 sm:px-0"
        >
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="w-full sm:w-auto">
            <Button
              id="hero-start-build-btn"
              variant="primary"
              size="lg"
              onClick={onStartBuild}
              className="w-full sm:w-auto px-10 py-4 text-xs font-medium tracking-[0.2em] uppercase bg-white text-black hover:bg-neutral-200 border-none rounded-none"
            >
              Book A Free Session
            </Button>
          </motion.div>
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="w-full sm:w-auto">
            <Button
              id="hero-explore-btn"
              variant="outline"
              size="lg"
              onClick={onExploreFacilities}
              className="w-full sm:w-auto px-10 py-4 text-xs font-medium tracking-[0.2em] uppercase border-white/20 text-white hover:bg-white/5 rounded-none"
            >
              View Facilities
            </Button>
          </motion.div>
        </motion.div>

        {/* Ultra-Minimalist Specs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 sm:mt-24 grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-12 w-full max-w-4xl text-center px-2"
        >
          <motion.div whileHover={{ y: -2 }} transition={{ duration: 0.2 }}>
            <div className="text-xl sm:text-3xl font-light text-[#FFD700] flex items-center justify-center gap-1">
              <AnimatedCounter to={4.9} from={1.0} decimals={1} duration={2.2} />
              <span className="text-[#FFD700] text-base sm:text-xl font-light">★</span>
            </div>
            <div className="text-[10px] sm:text-xs font-mono text-neutral-400 font-medium uppercase tracking-widest mt-1 sm:mt-2 flex items-center justify-center gap-1.5">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="w-4 h-4 sm:w-5 sm:h-5">
                <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
                <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
                <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
                <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
              </svg>
              <span>Rating</span>
            </div>
          </motion.div>
          <motion.div whileHover={{ y: -2 }} transition={{ duration: 0.2 }}>
            <div className="text-xl sm:text-3xl font-light text-[#FFD700]">
              <AnimatedCounter to={1300} from={0} duration={2.4} formatCommas suffix="+" />
            </div>
            <div className="text-[10px] sm:text-xs font-mono text-neutral-400 font-medium uppercase tracking-widest mt-1 sm:mt-2 flex items-center justify-center gap-1.5">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="w-4 h-4 sm:w-5 sm:h-5">
                <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
                <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
                <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
                <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
              </svg>
              <span>Reviews</span>
            </div>
          </motion.div>
          <motion.div whileHover={{ y: -2 }} transition={{ duration: 0.2 }}>
            <div className="text-xl sm:text-3xl font-light text-white">
              <AnimatedCounter to={24} from={0} duration={1.8} suffix="/7" />
            </div>
            <div className="text-[10px] sm:text-xs font-mono text-neutral-400 font-medium uppercase tracking-widest mt-1 sm:mt-2">
              Access
            </div>
          </motion.div>
          <motion.div whileHover={{ y: -2 }} transition={{ duration: 0.2 }}>
            <div className="text-xl sm:text-3xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-[#556B2F] via-[#8B7355] to-[#4B5320]">
              BSF CIRCLE
            </div>
            <div className="text-[10px] sm:text-xs font-mono text-neutral-400 font-medium uppercase tracking-widest mt-1 sm:mt-2">
              Yelahanka
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 pointer-events-none"
      >
        <span className="text-[9px] uppercase tracking-[0.3em] text-white/50 font-sans font-medium">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <ChevronDown className="text-white/50 w-5 h-5" />
        </motion.div>
      </motion.div>
    </section>
  );
};
