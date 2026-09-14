export { reviewsData as testimonialsData } from './reviews';

export interface AthleteTransformation {
  name: string;
  discipline: string;
  stats: string;
  imageBefore: string;
  imageAfter: string;
  quote: string;
}

export const athleteTransformations: AthleteTransformation[] = [
  {
    name: 'Julian Vance',
    discipline: 'Powerlifting Open Division',
    stats: 'Bench: 285 lb → 420 lb | Squat: 405 lb → 615 lb',
    imageBefore: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=600&q=80',
    imageAfter: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=600&q=80',
    quote: 'TheFit24 built an unbreakable foundation. When you surround yourself with pure iron and no gimmicks, limits vanish.'
  },
  {
    name: 'Tanya Morales',
    discipline: 'Strongwoman & Tactical Fitness',
    stats: 'Deadlift: 245 lb → 455 lb | Atlas Stone: 220 lb Load',
    imageBefore: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=600&q=80',
    imageAfter: 'https://images.unsplash.com/photo-1594381898411-846e7d193883?auto=format&fit=crop&w=600&q=80',
    quote: 'Having 24/7 access to real heavy logs, yokes, and stones gave me the freedom to train around my 12-hour shifts.'
  }
];
