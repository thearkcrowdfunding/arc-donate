'use client'

import Image from 'next/image';

interface HelpCardProps {
  title: string;
  subtitles?: string[];
  imageSrc: string;
  stats: {
    [key: string]: {
      number: string;
      text: string;
    };
  };
}

export function HelpCard({ title, subtitles = [], imageSrc, stats }: HelpCardProps) {
  return (
    <div className="bg-white md:rounded-2xl w-full">
      <div className="p-8 md:p-12">
        <h2 className="text-3xl md:text-5xl font-bold mb-8 text-blue-600">{title}</h2>
        
        {Array.isArray(subtitles) && subtitles.length > 0 && (
          <div className="grid grid-cols-2 md:grid-cols-2 gap-3 md:gap-6 mb-8">
            {subtitles.map((subtitle, index) => (
              <p key={index} className="text-standard md:text-2xl text-blue-600 leading-tight">
                {subtitle}
              </p>
            ))}
          </div>
        )}
        
        <div className="mb-8 overflow-hidden md:rounded-lg">
          <div className="relative w-full h-64 md:h-96 overflow-hidden">
            <Image
              src={imageSrc}
              alt={title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {Object.entries(stats).map(([key, stat]) => (
            <div key={key} className="space-y-3">
              <h3 className="text-4xl md:text-6xl font-bold text-blue-600">{stat.number}</h3>
              <p className="text-2xl md:text-3xl text-blue-600">{stat.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
