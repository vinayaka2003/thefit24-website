import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gallery - TheFit24',
  description: 'View the sanctuary. Industrial aesthetics meet elite strength architecture.',
};

export default function GalleryLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
