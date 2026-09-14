export interface SocialLink {
  platform: string;
  handle: string;
  url: string;
  icon: 'WhatsApp' | 'Instagram' | 'YouTube' | 'Twitter' | 'Spotify' | 'Gmail' | 'Maps' | 'Phone';
  svglRoute: string;
  followers?: string;
}

export const socialLinks: SocialLink[] = [
  {
    platform: 'WhatsApp',
    handle: '+91 80555 34824',
    url: 'https://wa.me/918055534824?text=Hi%20TheFit24%2C%20I%20would%20like%20to%20inquire%20about%20passes%20and%20membership',
    icon: 'WhatsApp',
    svglRoute: 'https://svgl.app/library/whatsapp-icon.svg',
    followers: '24/7 Live Desk',
  },
  {
    platform: 'Instagram',
    handle: '@TheFit24Official',
    url: 'https://instagram.com',
    icon: 'Instagram',
    svglRoute: 'https://svgl.app/library/instagram-icon.svg',
    followers: '48.5K Lifters',
  },
  {
    platform: 'YouTube',
    handle: 'TheFit24 Iron Works',
    url: 'https://youtube.com',
    icon: 'YouTube',
    svglRoute: 'https://svgl.app/library/youtube.svg',
    followers: '120K Subscribers',
  },
  {
    platform: 'Spotify',
    handle: 'TheFit24 Heavy Iron Tracks',
    url: 'https://spotify.com',
    icon: 'Spotify',
    svglRoute: 'https://svgl.app/library/spotify.svg',
    followers: '18K Monthly Saves',
  },
  {
    platform: 'Twitter',
    handle: '@TheFit24',
    url: 'https://x.com',
    icon: 'Twitter',
    svglRoute: 'https://svgl.app/library/x.svg',
    followers: '22K Followers',
  },
];

