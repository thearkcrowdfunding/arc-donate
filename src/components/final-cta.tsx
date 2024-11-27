'use client'

import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { useTranslations } from 'next-intl'
import { scrollHandlers } from "@/utils/scroll-handlers"

export function FinalCtaComponent() {
  const t = useTranslations('finalCta')

  return (
    <div className="w-full">
      <Card className="bg-white text-blue-600 p-6 md:p-20 border-0 ring-0 ring-offset-0 shadow-none">
        <CardHeader>
          <p className="text-2xl md:text-3xl mb-4">
            {t('text')}
          </p>
          <p className="text-4xl md:text-6xl font-semibold mb-12">
            {t('callToAction')}
          </p>
          <button 
            className="w-full md:w-[400px] bg-blue-600 text-white hover:bg-blue-700 font-semibold py-8 rounded-full text-3xl transition duration-300"
            onClick={() => scrollHandlers.handleHeroToFormClick('donate-form-2')}
          >
            {t('helpButton')}
          </button>
        </CardHeader>
      </Card>
    </div>
  )
} 
