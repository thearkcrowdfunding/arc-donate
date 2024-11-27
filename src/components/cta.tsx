'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useTranslations } from 'next-intl'

export function CtaComponent() {
  const t = useTranslations('cta')

  return (
    <div className="w-full">
      <Card className="bg-white text-kovcheg p-6 md:p-20 border-0 ring-0 ring-offset-0 shadow-none">
        <CardHeader>
          <CardTitle className="text-4xl md:text-6xl pt-6 mb:pt-0 leading-tight font-semibold text-left mb-2">
            {t('title')}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4 max-w-3xl">
            <p className="text-2xl">{t('paragraph1')}</p>
            <p className="text-2xl">{t('paragraph2')}</p>
            <p className="text-2xl">{t('paragraph3')}</p>
            <p className="text-2xl">{t('paragraph4')}</p>
            <p className="text-4xl md:text-6xl font-semibold">{t('paragraph5')}</p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
