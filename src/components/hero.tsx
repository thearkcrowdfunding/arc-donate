'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { scrollHandlers } from "@/utils/scroll-handlers"

export function HeroComponent() {
  const t = useTranslations('hero')

  return (
    <div className="relative h-[750px] md:h-[800px] flex flex-col justify-center text-white font-sans border-0">
      <Image
        src="/images/hero/hero.jpg"
        alt="Background"
        fill
        priority
        quality={85}
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/40" /> 
      
      <div className="w-full p-4 md:p-20 relative z-10 flex flex-col h-full">
        <div className="flex-grow" />
        <div className="text-left mb-6 max-w-[700px]">
          <h1 className="text-5xl md:text-6xl lg:text-8xl font-bold mb-4 leading-none">
            {t('title')}
          </h1>
          <p className="md:text-3xl text-2xl mb-2 md:mb-4 font-semibold">
            {t('subtitle')}
          </p>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-4">
          <button 
            className="w-full md:w-[400px] bg-blue-600 hover:bg-blue-700 text-white font-semibold py-8 rounded-lg text-3xl transition duration-300"
            onClick={() => scrollHandlers.handleHeroToFormClick()}
          >
            {t('helpButton')}
          </button>
          <Link 
            href="#learn-more" 
            className="text-2xl underline text-center w-full md:text-left md:w-auto md:ml-8" 
            onClick={scrollHandlers.handleLearnMoreClick}
          >
            {t('learnMore')}
          </Link>
        </div>
      </div>
    </div>
  )
}
