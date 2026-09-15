import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us - TheFit24',
  description: 'Learn about the philosophy and master coaches behind TheFit24.',
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
