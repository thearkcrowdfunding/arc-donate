'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { scrollHandlers } from "@/utils/scroll-handlers"
import { analytics } from "@/utils/analytics"

export function HeroComponent() {
  const t = useTranslations('hero')

  return (
    <div className="relative h-screen md:h-[800px] flex flex-col text-white font-sans border-0 overflow-hidden">
      <Image
        priority={true}
        src="/images/hero/hero.jpg"
        alt="Background"
        fill
        quality={85}
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/60 md:bg-black/40" />
      
      <div className="w-full relative z-10 h-full flex flex-col justify-end pb-12 md:pb-16">
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-8 md:px-12">
          <div className="text-left mb-8 md:mb-32 max-w-[800px] md:max-w-[1000px] translate-y-[-10vh] md:translate-y-0">
            <h1 className="text-[min(9vw,2.5rem)] sm:text-5xl lg:text-7xl font-bold mb-3 md:mb-6 leading-tight uppercase">
              {t('title')}
            </h1>
            <p className="text-[min(5vw,1.25rem)] sm:text-2xl md:text-3xl font-semibold">
              {t('subtitle')}
            </p>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-4">
            <button 
              className="w-full md:w-[400px] bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 md:py-8 rounded-lg text-[min(6vw,1.75rem)] md:text-3xl transition duration-300"
              onClick={() => {
                scrollHandlers.handleHeroToFormClick('donate-form');
                analytics.trackDonationForm('Donate Button Click', 'hero', 'form1')
              }}
            >
              {t('helpButton')}
            </button>
            <Link 
              href="#learn-more" 
              className="text-[min(5vw,1.375rem)] md:text-2xl underline text-center w-full md:text-left md:w-auto md:ml-8 py-2" 
              onClick={(e) => {
                scrollHandlers.handleLearnMoreClick(e);
                analytics.trackNavigation('Learn More Click', 'Hero');
              }}
            >
              {t('learnMore')}
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
