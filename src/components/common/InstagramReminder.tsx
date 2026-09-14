import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Instagram } from 'lucide-react';

export const InstagramReminder: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // 2. Wait 2 seconds for testing (instead of 10s)
    const timer = setTimeout(() => {
      console.log('Showing Instagram Reminder...');
      setIsVisible(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
  };

  const handleFollow = () => {
    setIsVisible(false);
    window.open('https://instagram.com/thefit24', '_blank', 'noopener,noreferrer');
  };

  return (
    // 12. Do NOT repeatedly animate or reappear after dismissal (AnimatePresence handles the exit, and state ensures it stays gone)
    <AnimatePresence>
      {isVisible && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={handleDismiss}
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full max-w-[420px] bg-[#0c0c0e] rounded-2xl border border-white/10 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.8)] p-8 flex flex-col items-center text-center"
          >
            {/* Elegant Close Button */}
            <button
              onClick={handleDismiss}
              className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center bg-white/5 hover:bg-white/10 text-neutral-400 hover:text-white rounded-full transition-colors focus:outline-none"
              aria-label="Close"
            >
              <X size={16} />
            </button>
            
            {/* Logo container with subtle premium glow */}
            <div className="mb-6 flex flex-col items-center justify-center">
              <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-[#1c1c24] flex items-center justify-center shadow-[0_0_20px_rgba(255,255,255,0.05)] bg-black">
                 <img src="/logo.jpg" alt="TheFit24 Logo" className="w-full h-full object-cover" />
              </div>
            </div>
            
            <h2 className="text-3xl font-bold text-white mb-3 tracking-tight">
              Connect With Us
            </h2>
            
            <p className="text-sm text-neutral-400 leading-relaxed mb-8 px-2">
              Follow our journey on Instagram for daily motivation, workout tips, and exclusive facility updates.
            </p>
            
            {/* Professional solid button */}
            <button
              onClick={handleFollow}
              className="w-full flex items-center justify-center gap-3 rounded-xl bg-white hover:bg-neutral-200 text-black px-6 py-3.5 transition-all duration-300 shadow-lg focus:outline-none"
            >
              <Instagram size={20} />
              <span className="font-bold text-sm tracking-wide">FOLLOW @THEFIT24</span>
            </button>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
