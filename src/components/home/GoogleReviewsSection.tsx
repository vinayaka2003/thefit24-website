import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Star, ExternalLink, MapPin, Copy, Check } from 'lucide-react';
import { GoogleReviewQrCard } from './GoogleReviewQrCard';
import { SvglGoogleG } from '../common/SvglIcons';
import { gymData } from '../../data/gym';

export const GoogleReviewsSection: React.FC = () => {
  const [copiedLink, setCopiedLink] = useState(false);
  const reviewUrl = gymData.coordinates.mapsSearchUrl;

  const ratingBars = [
    { stars: 5, percentage: 98, label: '98%' },
    { stars: 4, percentage: 1.5, label: '1.5%' },
    { stars: 3, percentage: 0.5, label: '0.5%' },
    { stars: 2, percentage: 0, label: '0%' },
    { stars: 1, percentage: 0, label: '0%' },
  ];

  const handleCopy = () => {
    navigator.clipboard.writeText(reviewUrl);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  return (
    <section className="bg-[#09090c] py-20 sm:py-24 px-4 sm:px-6 lg:px-8 border-t border-white/[0.06]">
      <div className="max-w-6xl mx-auto">
        {/* Minimalist Section Header */}
        <div className="text-center max-w-xl mx-auto mb-12 sm:mb-16 space-y-2">
          <span className="text-xs font-mono uppercase tracking-widest text-neutral-400">
            Google Reviews
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif text-white uppercase tracking-tight">
            Rated 4.9 on Google
          </h2>
          <p className="text-sm text-neutral-400 font-sans">
            Over 1,300 reviews from our community in Yelahanka, Bengaluru.
          </p>
        </div>

        {/* Minimalist 2-Column Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-center">
          {/* Left Column: Metrics & Breakdown (7 cols) */}
          <div className="lg:col-span-7 space-y-10">
            {/* Score & Stars */}
            <div className="flex flex-col gap-3">
              <div className="flex items-end gap-4">
                <span className="text-7xl sm:text-8xl font-black text-white tracking-tighter leading-none">
                  4.9
                </span>
                <div className="pb-2 space-y-2">
                  <div className="flex items-center gap-1.5 text-[#FFD700]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 sm:w-6 h-5 sm:h-6 fill-current drop-shadow-[0_0_8px_rgba(255,215,0,0.5)]" />
                    ))}
                  </div>
                  <span className="text-xs font-mono tracking-widest text-neutral-500 uppercase block">
                    Based on 1,300+ Reviews
                  </span>
                </div>
              </div>
            </div>

              {/* Minimal Address */}
              <div className="flex items-center gap-2 text-xs text-neutral-400">
                <MapPin className="w-3.5 h-3.5 text-neutral-400 shrink-0" />
                <span>BSF Circle, Bagalur Main Road, Yelahanka, Bengaluru</span>
              </div>

              {/* Minimal Breakdown Bars */}
              <div className="space-y-2.5 pt-2 max-w-md">
                {ratingBars.map((bar) => (
                  <div key={bar.stars} className="flex items-center gap-3 text-xs">
                    <span className="w-4 text-neutral-300 font-mono text-right shrink-0">
                      {bar.stars}★
                    </span>

                    {/* Clean Progress Line */}
                    <div className="flex-1 h-1.5 rounded-full bg-white/[0.06] overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${bar.percentage}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.05 * (5 - bar.stars) }}
                        className="h-full rounded-full bg-amber-400"
                      />
                    </div>

                    <span className="w-8 text-neutral-400 font-mono text-right text-[11px] shrink-0">
                      {bar.label}
                    </span>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="pt-3 flex flex-wrap items-center gap-3">
                <a
                  href={reviewUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl bg-white hover:bg-neutral-200 text-black text-xs font-sans font-bold tracking-wide uppercase transition-colors shadow-sm"
                >
                  <SvglGoogleG size={18} />
                  <span>Write a Google Review</span>
                </a>
              </div>
            </div>

            {/* Right Column: Clean Google Review Stand (5 cols) */}
            <div className="lg:col-span-5 flex justify-center items-center">
              <GoogleReviewQrCard />
            </div>
        </div>
      </div>
    </section>
  );
};
