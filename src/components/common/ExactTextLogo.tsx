import React from 'react';

export const ExactTextLogo: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <svg 
      viewBox="0 0 540 240" 
      fill="none" 
      className={className} 
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* 
        This is a pure SVG manual path recreation of the exact physical stencil font.
        skewX(-15) creates the identical aggressive slant.
      */}
      <g fill="#ffffff" transform="skewX(-15) translate(40, 10)">
        {/* "THE" (Scaled down and positioned above the F/I) */}
        <g transform="translate(10, 0) scale(0.45)">
          {/* T */}
          <path d="M0,0 H100 V40 H65 V140 H35 V40 H0 Z" />
          {/* H */}
          <path d="M120,0 H160 V50 H180 V0 H220 V140 H180 V90 H160 V140 H120 Z" />
          {/* E */}
          <path d="M240,0 H340 V40 H280 V50 H320 V90 H280 V100 H340 V140 H240 Z" />
        </g>
        
        {/* "FIT24" */}
        <g transform="translate(0, 75) scale(1)">
          {/* F */}
          <path d="M0,0 H100 V40 H40 V50 H80 V90 H40 V140 H0 Z" />
          
          {/* I */}
          <path d="M120,0 H160 V140 H120 Z" />
          
          {/* T */}
          <path d="M180,0 H280 V40 H250 V140 H210 V40 H180 Z" />
          
          {/* 2 */}
          <path d="M300,0 H400 V90 H340 V100 H400 V140 H300 V50 H360 V40 H300 Z" />
          
          {/* 4 */}
          <path d="M420,0 H460 V50 H480 V0 H520 V140 H480 V90 H420 Z" />
        </g>
      </g>
    </svg>
  );
};
