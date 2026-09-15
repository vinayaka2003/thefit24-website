import React, { useState, useEffect } from 'react';
import { SvglWhatsApp } from './SvglIcons';
import { ArrowUp } from 'lucide-react';

export const WhatsAppButton: React.FC = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);
  const whatsappNumber = '919740262746';
  const defaultMessage = 'Hi TheFit24, I would like to inquire about membership and facility access.';
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLaunch = () => {
    const encoded = encodeURIComponent(defaultMessage);
    const url = `https://wa.me/${whatsappNumber}?text=${encoded}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3 items-center">
      
      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className={`w-10 h-10 rounded-full bg-[#111116] border border-white/[0.08] text-neutral-400 hover:text-white flex items-center justify-center transition-all duration-500 hover:bg-[#1f1f28] hover:border-white/20 shadow-lg cursor-pointer ${
          showTopBtn ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
        aria-label="Back to top"
        title="Back to top"
      >
        <ArrowUp className="w-4 h-4" />
      </button>

      {/* Ultra-Minimalist Direct WhatsApp Link */}
      <button
        onClick={handleLaunch}
        className="w-14 h-14 rounded-full bg-white hover:bg-neutral-200 text-black flex items-center justify-center transition-all duration-300 cursor-pointer active:scale-90 shadow-[0_0_30px_rgba(255,255,255,0.15)] group relative"
        aria-label="Contact via WhatsApp"
        title="Contact via WhatsApp"
      >
        <div className="absolute inset-0 rounded-full border border-white/20 scale-[1.15] opacity-0 group-hover:opacity-100 group-hover:scale-[1.2] transition-all duration-500 pointer-events-none" />
        <SvglWhatsApp size={24} className="transition-transform duration-300 group-hover:scale-110" />
      </button>

    </div>
  );
};
