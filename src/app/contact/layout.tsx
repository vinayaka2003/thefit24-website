import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact & Location - TheFit24',
  description: 'Find our gym in Yelahanka, Bangalore, or reach out to our concierge.',
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
