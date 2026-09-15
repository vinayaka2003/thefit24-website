"use client";

import React from 'react';
import { Navbar } from '../layout/Navbar';
import { Footer } from '../layout/Footer';
import { WhatsAppButton } from '../common/WhatsAppButton';
import { SmoothScroller } from '../layout/SmoothScroller';
import { InstagramReminder } from '../common/InstagramReminder';

export function ClientLayout({ children }: { children: React.ReactNode }) {
  const whatsappNumber = '918055534824';

  const handleOpenConsult = (type: string = 'consult') => {
    let msg = 'Hi TheFit24, I would like to inquire about membership and facility access.';
    if (type === 'facility-tour') msg = 'Hi TheFit24, I would like to book a free session.';
    else if (type === 'membership-signup') msg = 'Hi TheFit24, I am interested in joining and would like to sign up for a membership.';
    const encoded = encodeURIComponent(msg);
    window.open(`https://wa.me/${whatsappNumber}?text=${encoded}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <>
      <SmoothScroller />
      <Navbar onOpenConsult={() => handleOpenConsult('consult')} />
      
      <main className="flex-1 relative overflow-hidden">
        {children}
      </main>

      <Footer onOpenConsult={() => handleOpenConsult('consult')} />
      <WhatsAppButton />
      <InstagramReminder />
    </>
  );
}
