"use client";
import dynamic from 'next/dynamic';

export const DynamicClientLayout = dynamic(() => import('./ClientLayout').then(mod => mod.ClientLayout), { ssr: false });
