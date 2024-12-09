'use client'

import { useTranslations } from 'next-intl'

interface AboutKovchegSectionProps {
  showTitle?: boolean;
}

export function AboutKovchegSection({ showTitle = true }: AboutKovchegSectionProps) {
  const t = useTranslations('aboutKovcheg')

  return (
    <div className="w-full bg-white text-blue-600 py-20">
      <div className="max-w-6xl mx-auto px-8 md:px-12">
        {showTitle && (
          <h2 className="text-4xl md:text-6xl font-semibold mb-12">
            {t('title')}
          </h2>
        )}
        <p className="text-2xl md:text-3xl text-blue-600 max-w-4xl mb-12">
          {t('description')}
        </p>
        <div className="space-y-4">
          <h3 className="text-5xl md:text-7xl font-bold">
            {t('stats.helped.number')}
          </h3>
          <p className="text-2xl md:text-3xl">
            {t('stats.helped.text')}
          </p>
        </div>
      </div>
    </div>
  )
} 
