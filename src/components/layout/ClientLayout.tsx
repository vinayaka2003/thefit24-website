"use client";

import React from 'react';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'motion/react';
import { Navbar } from '../layout/Navbar';
import { Footer } from '../layout/Footer';
import { WhatsAppButton } from '../common/WhatsAppButton';
import { SmoothScroller } from '../layout/SmoothScroller';
import { InstagramReminder } from '../common/InstagramReminder';

export function ClientLayout({ children }: { children: React.ReactNode }) {
  const whatsappNumber = '919740262746';

  const handleOpenConsult = (type: string = 'consult') => {
    let msg = 'Hi TheFit24, I would like to inquire about membership and facility access.';
    if (type === 'facility-tour') msg = 'Hi TheFit24, I would like to book a free session.';
    else if (type === 'membership-signup') msg = 'Hi TheFit24, I am interested in joining and would like to sign up for a membership.';
    const encoded = encodeURIComponent(msg);
    window.open(`https://wa.me/${whatsappNumber}?text=${encoded}`, '_blank', 'noopener,noreferrer');
  };

  const pathname = usePathname();

  return (
    <>
      <SmoothScroller />
      <Navbar onOpenConsult={() => handleOpenConsult('consult')} />
      
      <AnimatePresence mode="wait" initial={false}>
        <motion.main
          key={pathname}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="flex-1 relative overflow-hidden"
        >
          {children}
        </motion.main>
      </AnimatePresence>

      <Footer onOpenConsult={() => handleOpenConsult('consult')} />
      <WhatsAppButton />
      <InstagramReminder />
    </>
  );
}
