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
  const formattedSubtitles = subtitles.map((subtitle, index) => 
    index === 0 ? subtitle : subtitle.toLowerCase()
  ).join(', ');

  return (
    <div className="bg-white md:rounded-2xl w-full">
      <div className="p-8 md:p-12">
        <h2 className="text-3xl md:text-5xl font-bold mb-8 text-blue-600">{title}</h2>
        
        {subtitles.length > 0 && (
          <p className="text-standard md:text-2xl text-blue-600 leading-tight mb-8">
            {formattedSubtitles}
          </p>
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
