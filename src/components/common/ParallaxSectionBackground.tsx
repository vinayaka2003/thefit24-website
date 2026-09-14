import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'motion/react';

interface ParallaxSectionBackgroundProps {
  imageUrl?: string;
  gridOverlay?: boolean;
  spotlightColor?: string;
  spotlightPosition?: 'left' | 'right' | 'center';
  intensity?: number;
  className?: string;
}

export const ParallaxSectionBackground: React.FC<ParallaxSectionBackgroundProps> = ({
  imageUrl,
  gridOverlay = true,
  spotlightColor = 'rgba(217, 119, 6, 0.035)', // Warm ambient amber
  spotlightPosition = 'center',
  intensity = 50,
  className = '',
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  // Spring physics for buttery-smooth depth parallax
  const springConfig = { stiffness: 180, damping: 26, mass: 0.3 };

  // Background layer moves slower than the scroll rate
  const bgY = useSpring(
    useTransform(scrollYProgress, [0, 1], [-intensity, intensity]),
    springConfig
  );
  const bgScale = useSpring(
    useTransform(scrollYProgress, [0, 1], [1.02, 1.08]),
    springConfig
  );

  // Depth-of-field optical blur transition
  const bgFilter = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    ['blur(0px)', 'blur(1.5px)', 'blur(3px)']
  );

  // Floating ambient spotlight counter-parallax
  const spotY = useSpring(
    useTransform(scrollYProgress, [0, 1], [intensity * 0.8, -intensity * 0.8]),
    springConfig
  );

  const spotPositionClass =
    spotlightPosition === 'left'
      ? 'left-10 sm:left-24'
      : spotlightPosition === 'right'
      ? 'right-10 sm:right-24'
      : 'left-1/2 -translate-x-1/2';

  return (
    <div
      ref={containerRef}
      className={`pointer-events-none absolute inset-0 overflow-hidden -z-10 ${className}`}
      aria-hidden="true"
    >
      {/* Parallax Background Image (if supplied) */}
      {imageUrl && (
        <motion.div
          style={{
            y: bgY,
            scale: bgScale,
            filter: bgFilter,
            backgroundImage: `url('${imageUrl}')`,
          }}
          className="absolute -inset-10 bg-cover bg-center filter grayscale-[40%] brightness-40"
        />
      )}

      {/* Architectural Blueprint Grid Pattern */}
      {gridOverlay && (
        <motion.div
          style={{ y: bgY }}
          className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px]"
        />
      )}

      {/* Depth-of-Field Ambient Atmospheric Spotlight */}
      <motion.div
        style={{
          y: spotY,
          background: `radial-gradient(circle, ${spotlightColor} 0%, transparent 70%)`,
        }}
        className={`absolute top-1/3 ${spotPositionClass} w-[550px] h-[450px] rounded-full blur-[110px]`}
      />

      {/* Edge vignette gradients to blend seamlessly into section borders */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#09090b]/80" />
      <div className="absolute inset-0 gritty-overlay opacity-20" />
    </div>
  );
};
