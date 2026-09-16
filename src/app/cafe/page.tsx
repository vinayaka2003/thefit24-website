"use client";

import dynamic from 'next/dynamic';

const CafeView = dynamic(() => import('../../components/cafe/CafeView').then(mod => mod.CafeView));

export default function CafePage() {
  return <CafeView />;
}
