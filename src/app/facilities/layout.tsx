import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Facilities & Equipment - TheFit24',
  description: 'Explore our 14 power racks, Olympic platforms, and cold plunge contrast recovery.',
};

export default function FacilitiesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
