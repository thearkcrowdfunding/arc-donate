'use client'

import { useTranslations } from 'next-intl'

export function CtaComponent() {
  const t = useTranslations('cta')

  return (
    <div className="w-full bg-white text-kovcheg py-20">
      <div className="max-w-6xl mx-auto px-8 md:px-12">
        <div className="text-4xl md:text-6xl pt-6 mb:pt-0 leading-tight font-semibold text-left mb-8">
          {t('title')}
        </div>
        <div className="space-y-4 max-w-4xl">
          <p className="text-2xl md:text-3xl font-medium">{t('paragraph1')}</p>
          <p className="text-2xl md:text-3xl font-medium">{t('paragraph2')}</p>
          <p className="text-2xl md:text-3xl font-medium">{t('paragraph3')}</p>
          <p className="text-4xl md:text-6xl font-semibold">{t('paragraph5')}</p>
        </div>
      </div>
    </div>
  )
}
