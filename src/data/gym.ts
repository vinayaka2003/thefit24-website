import { GymInfo } from '../types';

export const gymData: GymInfo = {
  name: 'TheFit24',
  tagline: 'Yelahanka Bengaluru\'s Premier Fitness Hub',
  slogan: 'Train with Purpose, Become Unstoppable',
  address: {
    street: '3rd floor, No.5, Bagalur Main Rd, above Krishna Leela Grand, Niranthara Layout',
    district: 'Yelahanka',
    city: 'Bengaluru',
    state: 'Karnataka',
    zip: '560064',
    landmark: 'Near Reva University, BSF Circle',
  },
  coordinates: {
    lat: 13.122466670725972,
    lng: 77.63064472502387,
    formatted: '13.1224666° N, 77.6306447° E',
    mapsSearchUrl: 'https://www.google.com/maps/search/?api=1&query=13.122466670725972,77.63064472502387',
    directionsUrl: 'https://www.google.com/maps?q=13.122466670725972,77.63064472502387',
  },
  contact: {
    phone: '+91 97402 62746',
    emergencyPhone: '+91 97402 62746',
    email: 'iron@thefit24.in',
    conciergeEmail: 'concierge@thefit24.in',
  },
  hours: {
    general: 'Monday - Saturday: 6:00 AM – 10:00 PM',
    sunday: 'Sunday: 8:00 AM – 1:00 PM',
  },
  pricing: {
    monthlyBand: '₹3,000 - ₹5,000 / month',
    annualBand: '₹10,000 - ₹14,000 / year',
    feeRange: 'Mid-range fee band',
  },
  amenities: [
    'Modern equipment',
    'Clean and hygienic environment',
    'Steam bath',
    'Free Trial Available'
  ],
  services: [
    'Gym',
    'Zumba',
    'Aerobics',
    'Weight Gain Program',
    'Personal Training'
  ],
  trainerNames: [
    'Prathiksha Shetty',
    'Sudheer Shetty',
    'Abhishek',
    'Dhanush raj'
  ],
  stats: {
    sqft: '28,000 sq.ft.',
    freeWeightsMax: '150 lb Dumbbells',
    squatRacks: 14,
    olympicPlatforms: 8,
    activeAthletes: '1,240+ Active Members',
  },
};
