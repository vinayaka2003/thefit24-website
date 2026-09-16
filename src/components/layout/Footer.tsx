import React from 'react';
import Link from 'next/link';
import { gymData } from '../../data/gym';
import {
  SvglWhatsApp,
  SvglInstagram,
  SvglYouTube,
  SvglPhone,
  SvglGmail,
  SvglGoogleMaps,
} from '../common/SvglIcons';

interface FooterProps {
  onOpenConsult: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenConsult }) => {
  const navItems = [
    { label: 'Home', id: 'home' },
    { label: 'Facilities', id: 'facilities' },
    { label: 'Membership', id: 'membership' },
    { label: 'Trainers', id: 'trainers' },
    { label: 'Cafe', id: 'cafe' },
    { label: 'About', id: 'about' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <footer className="bg-[#09090c] border-t border-white/[0.06] text-neutral-400 font-sans">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-4 sm:py-6">
        {/* Main Grid */}
        <div className="flex flex-col md:grid md:grid-cols-12 gap-6 md:gap-8 lg:gap-10 pb-4 border-b border-white/[0.06]">
          {/* Brand & Address (5 cols) */}
          <div className="md:col-span-5 flex flex-col items-center md:items-start text-center md:text-left space-y-6">
            <div className="flex items-center gap-3">
              <img src="/logo.jpg" alt="TheFit24 Logo" className="w-8 h-8 object-contain rounded" />
              <span className="text-lg font-serif font-bold text-white tracking-[0.15em] uppercase">
                TheFit24
              </span>
            </div>

            <p className="text-xs sm:text-sm text-neutral-500 max-w-sm font-light leading-relaxed">
              Premier Strength & Conditioning Club. Equipped with calibrated iron, specialized platforms, and modern cardio suites.
            </p>

            <div className="pt-2 text-[10px] sm:text-xs font-mono uppercase tracking-widest text-neutral-500 space-y-1.5">
              <p className="text-neutral-400">BSF Circle, Bagalur Main Road</p>
              <p>Yelahanka, Bengaluru, 560063</p>
            </div>

            {/* Direct Connect Icons */}
            <div className="flex items-center gap-3 pt-4">
              <a
                href="tel:+919740262746"
                className="w-8 h-8 rounded-lg bg-[#14141c] hover:bg-[#1f1f2a] border border-white/[0.08] hover:border-white/25 flex items-center justify-center transition-colors text-neutral-300 hover:text-white"
                title="Call +91 97402 62746"
                aria-label="Call"
              >
                <SvglPhone size={15} />
              </a>

              <a
                href="https://wa.me/919740262746?text=Hi%20The%20FIT24%20Fitness!%20I%27m%20interested%20in%20joining%20the%20gym."
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-lg bg-[#14141c] hover:bg-[#1f1f2a] border border-white/[0.08] hover:border-emerald-500/40 flex items-center justify-center transition-colors"
                title="WhatsApp"
                aria-label="WhatsApp"
              >
                <SvglWhatsApp size={16} />
              </a>

              <a
                href="https://www.instagram.com/thefit24.in/"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-lg bg-[#14141c] hover:bg-[#1f1f2a] border border-white/[0.08] hover:border-pink-500/40 flex items-center justify-center transition-colors"
                title="Instagram"
                aria-label="Instagram"
              >
                <SvglInstagram size={16} />
              </a>

              <a
                href="mailto:iron@thefit24.in"
                className="w-8 h-8 rounded-lg bg-[#14141c] hover:bg-[#1f1f2a] border border-white/[0.08] hover:border-blue-500/40 flex items-center justify-center transition-colors"
                title="Email iron@thefit24.in"
                aria-label="Email"
              >
                <SvglGmail size={16} />
              </a>

              <a
                href={gymData.coordinates.mapsSearchUrl}
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-lg bg-[#14141c] hover:bg-[#1f1f2a] border border-white/[0.08] hover:border-amber-500/40 flex items-center justify-center transition-colors"
                title="Google Maps"
                aria-label="Google Maps"
              >
                <SvglGoogleMaps size={16} />
              </a>

              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-lg bg-[#14141c] hover:bg-[#1f1f2a] border border-white/[0.08] hover:border-red-500/40 flex items-center justify-center transition-colors"
                title="YouTube"
                aria-label="YouTube"
              >
                <SvglYouTube size={16} />
              </a>
            </div>
          </div>

          {/* Navigation Links (Hidden on Mobile for Minimalism) */}
          <div className="hidden md:block md:col-span-3 space-y-5">
            <h4 className="text-[10px] font-mono uppercase tracking-widest text-neutral-500">
              Explore
            </h4>
            <ul className="space-y-3 text-sm font-light">
              {navItems.map((item) => (
                <li key={item.id}>
                  <Link
                    href={item.id === 'home' ? '/' : `/${item.id}`}
                    onClick={() => {
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="text-neutral-400 hover:text-white transition-colors cursor-pointer text-left inline-block"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Hours & Access */}
          <div className="md:col-span-4 flex flex-col items-center md:items-start text-center md:text-left space-y-5">
            <h4 className="text-[10px] font-mono uppercase tracking-widest text-neutral-500">
              Hours & Access
            </h4>
            <div className="space-y-3 text-sm font-light text-neutral-400">
              <div>
                <span className="text-white block mb-1">Gym Floor</span>
                <span className="text-xs text-neutral-500">24 Hours / 7 Days a Week</span>
              </div>
              <div className="pt-2 border-t border-white/[0.06] w-24 md:w-full border-dashed mx-auto md:mx-0">
                <span className="text-neutral-300 block text-xs mt-3 mb-1">Staffed Front Desk</span>
                <span className="text-xs text-neutral-500 block">Mon - Fri: 6:00 AM - 9:00 PM</span>
                <span className="text-xs text-neutral-500 block mt-0.5">Sat - Sun: 8:00 AM - 6:00 PM</span>
              </div>
              <div className="pt-4">
                <button
                  onClick={onOpenConsult}
                  className="text-[10px] font-mono uppercase tracking-widest text-white hover:text-neutral-400 transition-colors cursor-pointer"
                >
                  Book A Free Session →
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Minimal Bottom Bar */}
        <div className="pt-3 pb-1 flex items-center justify-center">
          <div className="flex items-center justify-center gap-2 sm:gap-3 text-[7px] sm:text-[8px] md:text-[9px] font-mono uppercase tracking-[0.28em] text-neutral-500">
            <span className="hidden sm:inline-block h-px w-8 bg-white/[0.08]" />
            <p>© {new Date().getFullYear()} TheFit24</p>
            <span className="hidden sm:inline text-neutral-700">•</span>
            <p className="hidden sm:inline">All rights reserved</p>
            <span className="hidden sm:inline-block h-px w-8 bg-white/[0.08]" />
          </div>
        </div>
      </div>
    </footer>
  );
};
