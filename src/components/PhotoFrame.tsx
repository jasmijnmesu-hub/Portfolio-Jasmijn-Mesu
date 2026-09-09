import React, { useState } from 'react';

interface PhotoFrameProps {
  id: string;
  defaultSrc?: string;
  alt: string;
  caption?: string;
  aspectRatio?: 'square' | 'portrait' | 'landscape';
}

export const PhotoFrame: React.FC<PhotoFrameProps> = ({
  id,
  defaultSrc = '/IMG_1185.jpg',
  alt = 'Jasmijn Mesu · Facility Management Zuyd Hogeschool — Minor HU',
  caption = 'Facility Management Zuyd Hogeschool · Minor Futureproof met AI',
  aspectRatio = 'portrait',
}) => {
  const [imageSrc, setImageSrc] = useState<string>(defaultSrc);

  const aspectClass = {
    square: 'aspect-square',
    portrait: 'aspect-4/5',
    landscape: 'aspect-16/10',
  }[aspectRatio];

  const handleImageError = () => {
    if (imageSrc !== '/jasmijn-mesu.jpg') {
      setImageSrc('/jasmijn-mesu.jpg');
    }
  };

  return (
    <figure id={id} className="relative block">
      <div 
        className={`w-full ${aspectClass} bg-[#CEC5B5] border border-[#1B2A24]/15 overflow-hidden flex flex-col items-center justify-center relative shadow-xs`}
      >
        <img
          src={imageSrc}
          alt={alt}
          className="w-full h-full object-cover object-top"
          referrerPolicy="no-referrer"
          onError={handleImageError}
        />

        {/* Permanent caption overlay */}
        {caption && (
          <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 bg-gradient-to-t from-[#1B2A24]/90 via-[#1B2A24]/60 to-transparent pointer-events-none text-white">
            <p className="text-[10px] uppercase tracking-widest font-bold opacity-80 mb-0.5 text-[#EDE6D8]">
              Jasmijn Mesu
            </p>
            <p className="font-serif italic text-xs sm:text-sm text-[#EDE6D8] line-clamp-1">
              {caption}
            </p>
          </div>
        )}
      </div>
    </figure>
  );
};
