'use client'

import { useTranslations } from 'next-intl'
import { scrollHandlers } from "@/utils/scroll-handlers"
import { analytics } from "@/utils/analytics"

export function FinalCtaComponent() {
  const t = useTranslations('finalCta')

  return (
    <div className="w-full bg-white text-blue-600 py-20">
      <div className="max-w-6xl mx-auto px-8 md:px-12">
        <p className="text-2xl md:text-3xl mb-4">
          {t('text')}
        </p>
        <p className="text-4xl md:text-6xl font-semibold mb-12">
          {t('callToAction')}
        </p>
        <button 
          className="w-full md:w-[400px] bg-blue-600 text-white hover:bg-blue-700 font-semibold py-8 rounded-full text-3xl transition duration-300"
          onClick={() => {
            scrollHandlers.handleHeroToFormClick('donate-form-2')
            analytics.trackDonationForm('Donate Button Click', 'final_cta', 'final')
          }}
        >
          {t('helpButton')}
        </button>
      </div>
    </div>
  )
} 
