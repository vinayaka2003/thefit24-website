"use client";

import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'motion/react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface NavbarProps {
  onOpenConsult: (type?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenConsult,
}) => {
  const pathname = usePathname();
  const activePage = pathname === '/' ? 'home' : pathname?.substring(1) || 'home';
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY;
    setIsScrolled(currentScrollY > 15);
  }, []);

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, [handleScroll]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileMenuOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'facilities', label: 'Facilities' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'membership', label: 'Membership' },
    { id: 'trainers', label: 'Trainers' },
    { id: 'cafe', label: 'Cafe' },
    { id: 'contact', label: 'Contact' }
  ];

  const navRef = useRef<HTMLElement>(null);
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0, opacity: 0 });

  useEffect(() => {
    if (!navRef.current) return;
    const activeEl = navRef.current.querySelector('[data-active="true"]') as HTMLElement;
    if (activeEl) {
      setIndicatorStyle({
        left: activeEl.offsetLeft + 10, // left padding
        width: activeEl.offsetWidth - 20, // subtract padding
        opacity: 1
      });
    } else {
      setIndicatorStyle(prev => ({ ...prev, opacity: 0 }));
    }
  }, [activePage]);

  const handleNavClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      <motion.header
        layoutRoot
        className={`fixed top-0 left-0 right-0 z-50 h-16 transition-all duration-300 will-change-[background-color,border-color] ${
          mobileMenuOpen
            ? 'bg-[#08080a] border-b border-white/[0.08]'
            : isScrolled
            ? 'bg-[#08080a]/75 backdrop-blur-xl border-b border-white/[0.08] shadow-lg shadow-black/40'
            : 'bg-transparent border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Minimalist Brand Identity */}
          <Link
            href="/"
            onClick={handleNavClick}
            className="flex items-center gap-3 text-left group cursor-pointer focus:outline-none select-none"
            aria-label="TheFit24 Home"
          >
            <img src="/logo.jpg" alt="TheFit24 Logo" className="w-8 h-8 object-contain shrink-0 rounded" />
            <span className="font-serif font-bold text-white tracking-[0.2em] text-sm sm:text-base uppercase drop-shadow-[0_1px_4px_rgba(0,0,0,0.8)]">
              TheFit24
            </span>
          </Link>

          {/* Clean Desktop Navigation with Active Underline */}
          <nav ref={navRef} className="hidden lg:flex items-center space-x-1 relative">
            <motion.div
              className="absolute bottom-1.5 h-[2px] bg-[#FF5500] rounded-full shadow-[0_0_8px_rgba(255,85,0,0.7)] pointer-events-none"
              animate={{ left: indicatorStyle.left, width: indicatorStyle.width, opacity: indicatorStyle.opacity }}
              initial={false}
              transition={{ type: 'spring', stiffness: 450, damping: 35 }}
            />
            {navLinks.map((link) => {
              const isActive = activePage === link.id;
              return (
                <Link
                  key={link.id}
                  href={link.id === 'home' ? '/' : `/${link.id}`}
                  onClick={handleNavClick}
                  data-active={isActive}
                  className={`relative px-3.5 py-2 text-xs font-mono tracking-wider uppercase rounded-lg transition-colors cursor-pointer drop-shadow-[0_1px_3px_rgba(0,0,0,0.7)] ${
                    isActive
                      ? 'text-white font-semibold'
                      : 'text-neutral-300 hover:text-white hover:bg-white/[0.06]'
                  }`}
                >
                  <span>{link.label}</span>
                </Link>
              );
            })}
          </nav>

          {/* Desktop Primary CTA */}
          <div className="hidden lg:flex items-center space-x-3">
            <a
              href="https://wa.me/919740262746?text=Hi%20The%20FIT24%20Fitness!%20I%27m%20interested%20in%20joining%20the%20gym."
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 text-xs font-mono uppercase tracking-wider bg-[#FF5500] hover:bg-[#E64D00] text-white font-semibold rounded-lg transition-all shadow-[0_0_15px_rgba(255,85,0,0.3)] hover:shadow-[0_0_20px_rgba(255,85,0,0.5)] cursor-pointer active:scale-95 border border-[#FF5500]/50"
            >
              Join Now
            </a>
          </div>

          {/* Animated Mobile Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden w-10 h-10 flex items-center justify-center rounded-lg text-neutral-300 hover:text-white hover:bg-white/[0.08] transition-colors cursor-pointer focus:outline-none drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)]"
            aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <motion.line 
                x1="4" y1="6" x2="20" y2="6" 
                animate={mobileMenuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }} 
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }} 
                style={{ originX: "50%", originY: "50%" }}
              />
              <motion.line 
                x1="4" y1="12" x2="20" y2="12" 
                animate={mobileMenuOpen ? { opacity: 0, x: -10 } : { opacity: 1, x: 0 }} 
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }} 
              />
              <motion.line 
                x1="4" y1="18" x2="20" y2="18" 
                animate={mobileMenuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }} 
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }} 
                style={{ originX: "50%", originY: "50%" }}
              />
            </svg>
          </button>
        </div>

        {/* Sleek Scroll Progress Bar Underline Along Bottom of Navbar (Only when scrolled) */}
        {isScrolled && (
          <div className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-transparent overflow-hidden pointer-events-none">
            <motion.div
              className="h-full w-full bg-gradient-to-r from-white/40 via-white to-white/70"
              style={{ scaleX, transformOrigin: "0% 50%" }}
            />
          </div>
        )}
      </motion.header>

      {/* Premium Animated Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-x-0 top-16 bottom-0 bg-[#050507] z-40 px-6 flex flex-col overflow-y-auto lg:hidden border-t border-white/[0.06]"
          >
            <motion.div 
              className="space-y-2 mt-8"
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={{
                visible: { transition: { staggerChildren: 0.05, delayChildren: 0.1 } },
                hidden: { transition: { staggerChildren: 0.03, staggerDirection: -1 } }
              }}
            >
              <motion.span 
                variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}
                className="text-[10px] font-mono uppercase tracking-[0.3em] text-neutral-500 px-3 block mb-6"
              >
                Menu
              </motion.span>
              {navLinks.map((link) => {
                const isActive = activePage === link.id;
                return (
                  <motion.div key={link.id} variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } } }}>
                    <Link
                      href={link.id === 'home' ? '/' : `/${link.id}`}
                      onClick={handleNavClick}
                      className={`w-full flex items-center justify-between px-2 py-3.5 text-lg font-sans tracking-wide transition-all duration-300 cursor-pointer ${
                        isActive
                          ? 'text-white font-medium'
                          : 'text-neutral-500 hover:text-white font-light'
                      }`}
                    >
                      <span className="flex items-center gap-3">
                        {isActive && (
                          <span className="w-[2px] h-4 bg-[#FF5500] rounded-full shadow-[0_0_8px_rgba(255,85,0,0.7)]" />
                        )}
                        <span className={isActive ? "" : "pl-3.5"}>{link.label}</span>
                      </span>
                    </Link>
                  </motion.div>
                );
              })}
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="mt-auto pt-8 pb-12 sm:pb-16 space-y-6 shrink-0"
            >
              <a
                href="https://wa.me/919740262746?text=Hi%20The%20FIT24%20Fitness!%20I%27m%20interested%20in%20joining%20the%20gym."
                target="_blank"
                rel="noreferrer"
                className="w-full flex items-center justify-center py-4 rounded-xl bg-[#FF5500] text-white font-mono text-sm uppercase tracking-widest font-bold hover:bg-[#E64D00] transition-colors shadow-[0_0_20px_rgba(255,85,0,0.2)] cursor-pointer"
                onClick={() => setMobileMenuOpen(false)}
              >
                Join Now
              </a>

              <p className="text-center text-xs font-mono text-neutral-500 uppercase tracking-widest">
                Yelahanka • Premier Fitness Hub
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
