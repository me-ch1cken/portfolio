import { Card, CardContent } from "./ui/card";

interface SlideItemProps {
    name: string;
    description: string;
    imageUrl: string;
    projectUrl: string;
    githubUrl: string;
    tech: string[];
}

export default function SlideItem({name, description, tech, imageUrl, projectUrl, githubUrl}: SlideItemProps) {
    return (
        <HoverImage src={imageUrl} alt={name} overlayText={name} />
    );
}

import React from 'react';

interface HoverImageProps {
  src: string;
  alt: string;
  overlayText: string;
}

const HoverImage: React.FC<HoverImageProps> = ({ src, alt, overlayText }) => {
  return (
    <div className="relative w-64 h-40 group overflow-hidden rounded-xl">
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-contain bg-white transition duration-300 ease-in-out group-hover:brightness-20"
      />
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-lg font-semibold">
        {overlayText}
      </div>
    </div>
  );
};
