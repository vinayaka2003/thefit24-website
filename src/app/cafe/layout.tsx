import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The Fit24 Cafe - TheFit24',
  description: 'Savor quality food and a warm atmosphere at The Fit24 Cafe in Sathnur.',
};

export default function CafeLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
