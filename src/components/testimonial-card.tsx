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
    let result = text;
    boldParts.forEach(part => {
      result = result.replace(
        part,
        `<strong class="font-bold">${part}</strong>`
      );
    });
    return (
      <p 
        className="text-xl md:text-2xl lg:text-3xl font-medium"
        dangerouslySetInnerHTML={{ __html: result }}
      />
    );
  };

  const content = (
    <>
      <div className="flex-grow flex items-end mb-8">
        {highlightText(quote)}
      </div>
      <div>
        <div className="w-16 h-0.5 bg-current opacity-60 mb-4" />
        <p className="text-base md:text-lg opacity-80">
          {author}
        </p>
      </div>
    </>
  );

  return (
    <div className={cn(
      "rounded-2xl overflow-hidden relative aspect-square",
      imageSrc ? "text-white" : "bg-white text-blue-600"
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
            {content}
          </div>
        </>
      ) : (
        <div className="h-full p-6 md:p-8 flex flex-col">
          {content}
        </div>
      )}
    </div>
  );
} 
