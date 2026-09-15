import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Master Coaches - TheFit24',
  description: 'Train with elite strength and conditioning coaches at TheFit24.',
};

export default function TrainersLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
