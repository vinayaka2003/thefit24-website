import React from 'react';
import type { Metadata } from 'next';
import { DynamicClientLayout } from '../components/layout/DynamicClientLayout';
import '../index.css';

export const metadata: Metadata = {
  title: "TheFit24 - Yelahanka Bangalore's Premier Fitness Hub",
  description: "Get fit anytime with top-notch equipment and expert trainers. Your fitness journey starts now!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-[#09090b] text-[#e5e5e8] selection:bg-neutral-200 selection:text-black flex flex-col font-sans">
        <DynamicClientLayout>
          {children}
        </DynamicClientLayout>
      </body>
    </html>
  );
}
