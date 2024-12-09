'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { scrollHandlers } from "@/utils/scroll-handlers"

export function HeroComponent() {
  const t = useTranslations('hero')

  return (
    <div className="relative h-[750px] md:h-[800px] flex flex-col justify-end text-white font-sans border-0 pb-8 md:pb-16">
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
      
      <div className="w-full relative z-10">
        <div className="max-w-6xl mx-auto px-8 md:px-12">
          <div className="text-left mb-16 md:mb-32 max-w-[800px] md:max-w-[1000px] mt-[-200px] md:mt-[-150px]">
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-4 md:mb-6 leading-tight uppercase">
              {t('title')}
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl font-semibold">
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
    </div>
  )
}
