import { useRef, type RefObject } from 'react';
import { useScroll, useTransform, useSpring, MotionValue } from 'motion/react';

export interface ParallaxOptions {
  /**
   * Scroll offset defining when the effect starts and ends.
   * Defaults to target entering to target leaving the viewport: ['start end', 'end start']
   */
  offset?: [string, string];
  /**
   * Vertical parallax movement range in pixels [start, end].
   * Positive values move downward as user scrolls down.
   */
  yRange?: [number, number];
  /**
   * Scale factor range [start, end] to simulate optical depth expansion.
   */
  scaleRange?: [number, number];
  /**
   * Opacity range [start, end] for subtle depth-of-field dissipation.
   */
  opacityRange?: [number, number];
  /**
   * Depth-of-field blur range in pixels [start, end].
   */
  blurRange?: [number, number];
  /**
   * Whether to apply spring physics to prevent scroll-linked jitter.
   * Defaults to true.
   */
  smooth?: boolean;
  /**
   * Spring physics configuration for smoothing.
   */
  springConfig?: {
    stiffness?: number;
    damping?: number;
    mass?: number;
  };
}

export interface ParallaxResult<T extends HTMLElement = HTMLDivElement> {
  ref: RefObject<T | null>;
  scrollYProgress: MotionValue<number>;
  y: MotionValue<number>;
  scale: MotionValue<number>;
  opacity: MotionValue<number>;
  filter: MotionValue<string>;
}

/**
 * High-performance scroll-linked parallax hook built on Framer Motion's
 * hardware-accelerated useScroll, useTransform, and useSpring.
 */
export function useScrollParallax<T extends HTMLElement = HTMLDivElement>(
  options: ParallaxOptions = {}
): ParallaxResult<T> {
  const {
    offset = ['start end', 'end start'],
    yRange = [0, 80],
    scaleRange = [1, 1],
    opacityRange = [1, 1],
    blurRange = [0, 0],
    smooth = true,
    springConfig = { stiffness: 180, damping: 28, mass: 0.35 },
  } = options;

  const targetRef = useRef<T | null>(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: offset as any,
  });

  // Base transformations mapped to scroll progression (0 -> 1)
  const rawY = useTransform(scrollYProgress, [0, 1], yRange);
  const rawScale = useTransform(scrollYProgress, [0, 1], scaleRange);
  const rawOpacity = useTransform(scrollYProgress, [0, 1], opacityRange);
  const rawBlur = useTransform(
    scrollYProgress,
    [0, 1],
    [`blur(${blurRange[0]}px)`, `blur(${blurRange[1]}px)`]
  );

  // Apply spring damping for high-end organic inertia, or return raw MotionValues
  const y = smooth ? useSpring(rawY, springConfig) : rawY;
  const scale = smooth ? useSpring(rawScale, springConfig) : rawScale;
  const opacity = smooth ? useSpring(rawOpacity, springConfig) : rawOpacity;
  const filter = rawBlur;

  return {
    ref: targetRef,
    scrollYProgress,
    y,
    scale,
    opacity,
    filter,
  };
}
