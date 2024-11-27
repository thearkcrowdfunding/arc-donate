'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useTranslations } from 'next-intl'

export function AboutKovchegSection() {
  const t = useTranslations('aboutKovcheg')

  return (
    <div className="w-full">
      <Card className="bg-white text-blue-600 p-6 md:p-20 border-0 ring-0 ring-offset-0 shadow-none">
        <CardHeader>
          <CardTitle className="text-4xl md:text-6xl pt-6 mb:pt-0 leading-tight font-bold text-left mb-8">
            {t('title')}
          </CardTitle>
          <p className="text-2xl md:text-3xl text-blue-600 max-w-4xl">
            {t('description')}
          </p>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
            <div className="space-y-4">
              <h3 className="text-5xl md:text-7xl font-bold">
                {t('stats.helped.number')}
              </h3>
              <p className="text-2xl md:text-3xl">
                {t('stats.helped.text')}
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-5xl md:text-7xl font-bold">
                {t('stats.volunteers.number')}
              </h3>
              <p className="text-2xl md:text-3xl">
                {t('stats.volunteers.text')}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
} 
