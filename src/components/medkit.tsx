'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Image from 'next/image'
import { useTranslations } from 'next-intl'

export function MedkitComponent() {
  const t = useTranslations('medkit')

  return (
    <div className="w-full">
      <Card className="bg-gradient-to-r from-yellow-300 to-blue-300 p-6 md:p-20 border-0 ring-0 ring-offset-0 shadow-none">
        <CardHeader>
          <CardTitle className="text-4xl md:text-5xl pt-6 mb:pt-0 leading-tight font-semibold text-left text-black">
            {t('title')}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:order-2 md:w-1/2">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="relative w-full md:w-1/2 h-64 md:h-80 rounded-lg overflow-hidden">
                  <Image
                    src="/images/medkit/medkit1.jpg"
                    alt={t('title')}
                    fill
                    sizes="(max-width: 768px) 100vw, 25vw"
                    className="object-cover"
                  />
                </div>
                <div className="relative w-full md:w-1/2 h-64 md:h-80 rounded-lg overflow-hidden">
                  <Image
                    src="/images/medkit/medkit2.jpg"
                    alt={t('title')}
                    fill
                    sizes="(max-width: 768px) 100vw, 25vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
            <div className="md:order-1 md:w-1/2">
              <div className="space-y-4 text-xl text-black font-semibold">
                <p>{t('description1')}</p>
                <p>{t('description2')}</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
