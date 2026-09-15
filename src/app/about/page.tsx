"use client";

import React from 'react';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/navigation';

const AboutView = dynamic(() => import('../../components/about/AboutView').then(mod => mod.AboutView), { ssr: false });

export default function AboutPage() {
  const router = useRouter();
  const whatsappNumber = '919740262746';

  const handleOpenConsult = (type: string = 'consult') => {
    let msg = 'Hi TheFit24, I would like to inquire about membership and facility access.';
    const encoded = encodeURIComponent(msg);
    window.open(`https://wa.me/${whatsappNumber}?text=${encoded}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <AboutView 
      onOpenConsult={() => handleOpenConsult('consult')} 
      onNavigate={(path) => router.push(path === 'home' ? '/' : `/${path}`)} 
    />
  );
}
