'use client'

import Image from 'next/image';
import { cn } from '@/lib/utils';

interface TestimonialCardProps {
  quote: string;
  boldParts?: string[];
  author: string;
  imageSrc?: string;
}

export function TestimonialCard({ quote, boldParts = [], author, imageSrc }: TestimonialCardProps) {
  const highlightText = (text: string) => {
    if (!Array.isArray(boldParts) || boldParts.length === 0) {
      return <p className="text-2xl md:text-3xl lg:text-4xl font-medium">{text}</p>;
    }

    const parts = [];
    let lastIndex = 0;

    for (const part of boldParts) {
      const index = text.indexOf(part, lastIndex);
      if (index !== -1) {
        // Add text before the bold part
        if (index > lastIndex) {
          parts.push(text.slice(lastIndex, index));
        }
        // Add the bold part
        parts.push(<strong key={index} className="font-bold">{part}</strong>);
        lastIndex = index + part.length;
      }
    }

    // Add remaining text
    if (lastIndex < text.length) {
      parts.push(text.slice(lastIndex));
    }

    return (
      <p className="text-2xl md:text-3xl lg:text-4xl font-medium">
        {parts}
      </p>
    );
  };

  return (
    <div className={cn(
      "overflow-hidden relative w-full",
      "h-[600px] md:aspect-square",
      imageSrc ? "text-white" : "bg-white text-blue-600",
      "md:rounded-2xl"
    )}>
      {imageSrc ? (
        <>
          <Image
            src={imageSrc}
            alt=""
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 p-6 md:p-8 flex flex-col">
            <div className="flex-grow flex items-end mb-8">
              {highlightText(quote)}
            </div>
            <div>
              <div className="w-16 h-0.5 bg-current opacity-60 mb-4" />
              <p className="text-lg md:text-xl opacity-80">
                {author}
              </p>
            </div>
          </div>
        </>
      ) : (
        <div className="h-full p-6 md:p-8 flex flex-col">
          <div className="flex-grow flex items-end mb-8">
            {highlightText(quote)}
          </div>
          <div>
            <div className="w-16 h-0.5 bg-current opacity-60 mb-4" />
            <p className="text-base md:text-lg opacity-80">
              {author}
            </p>
          </div>
        </div>
      )}
    </div>
  );
} 
