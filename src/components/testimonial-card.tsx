'use client'

import Image from 'next/image';
import { cn } from '@/lib/utils';

interface TestimonialCardProps {
  quote: string;
  author: string;
  imageSrc?: string;
}

export function TestimonialCard({ quote, author, imageSrc }: TestimonialCardProps) {
  return (
    <div className={cn(
      "rounded-2xl overflow-hidden relative aspect-square",
      imageSrc ? "text-white" : "bg-white text-blue-600"
    )}>
      {imageSrc && (
        <>
          <Image
            src={imageSrc}
            alt=""
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-black/40" />
        </>
      )}
      
      <div className="relative h-full p-8 md:p-12 flex flex-col justify-center">
        <p className="text-2xl md:text-3xl lg:text-4xl font-medium mb-8">
          {quote}
        </p>
        
        <div className="space-y-6">
          <div className="w-16 h-0.5 bg-current opacity-60" />
          <p className="text-lg md:text-xl opacity-80">
            {author}
          </p>
        </div>
      </div>
    </div>
  );
} 
