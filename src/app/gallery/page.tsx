"use client";

import dynamic from 'next/dynamic';

const GalleryView = dynamic(() => import('../../components/gallery/GalleryView').then(mod => mod.GalleryView), { ssr: false });

export default function GalleryPage() {
  return <GalleryView />;
}
