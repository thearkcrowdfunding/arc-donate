'use client'

import Link from 'next/link'
import { scrollHandlers } from "@/utils/scroll-handlers"
import { analytics } from "@/utils/analytics"

interface ClientHeroActionsProps {
  t: (key: string) => string;
}

export function ClientHeroActions({ t }: ClientHeroActionsProps) {
  return (
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
  )
} 
