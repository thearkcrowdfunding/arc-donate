'use client'

import { useTranslations } from 'next-intl'

export function CtaComponent() {
  const t = useTranslations('cta')

  return (
    <div className="w-full bg-white text-blue-600 py-12 md:py-16">
      <div className="max-w-6xl mx-auto px-8 md:px-12">
        <div className="text-5xl md:text-7xl font-bold leading-tight text-left mb-8">
          {t('title')}
        </div>
        <div className="space-y-4 max-w-4xl">
          <p className="text-2xl md:text-3xl">{t('paragraph1')}</p>
          <p className="text-2xl md:text-3xl">{t('paragraph2')}</p>
          <p className="text-2xl md:text-3xl">{t('paragraph3')}</p>
        </div>
      </div>
    </div>
  )
}
