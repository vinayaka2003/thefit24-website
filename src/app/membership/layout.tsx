import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Membership Plans - TheFit24',
  description: 'Select your membership tier and gain access to TheFit24.',
};

export default function MembershipLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
