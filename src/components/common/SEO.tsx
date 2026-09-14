import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  type?: string;
  name?: string;
  image?: string;
  url?: string;
}

export const SEO: React.FC<SEOProps> = ({ 
  title, 
  description, 
  type = 'website',
  name = "TheFit24 - Yelahanka Bangalore's 24/7 Fitness Hub",
  image = 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=1200&q=80',
  url = 'https://thefit24.com'
}) => {
  return (
    <Helmet>
      {/* Standard metadata tags */}
      <title>{title} | {name}</title>
      <meta name='description' content={description} />
      
      {/* OpenGraph tags */}
      <meta property='og:title' content={`${title} | ${name}`} />
      <meta property='og:description' content={description} />
      <meta property='og:type' content={type} />
      <meta property='og:url' content={url} />
      <meta property='og:image' content={image} />
      
      {/* Twitter tags */}
      <meta name='twitter:creator' content={name} />
      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:title' content={`${title} | ${name}`} />
      <meta name='twitter:description' content={description} />
      <meta name='twitter:image' content={image} />
    </Helmet>
  );
};
