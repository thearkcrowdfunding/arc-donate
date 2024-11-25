'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useTranslations } from 'next-intl'
import { Highlight } from "@/components/ui/highlight"

export function StatisticsComponent() {
  const t = useTranslations('statistics')

  return (
    <div className="w-full">
      <Card className="bg-gray-900 text-white p-6 md:p-20">
        <CardHeader>
          <CardTitle className="text-4xl md:text-5xl pt-6 mb:pt-0 leading-tight font-semibold text-left mb-2">
            {t('title')}
          </CardTitle>
          <p className="text-white text-left text-xl">
            {t('subtitle')}
          </p>
        </CardHeader>
        <CardContent className="grid gap-8 md:grid-cols-3">
          <StatItemWithDescription 
            value={t('medkits.value')}
            title={t('medkits.title')}
            namespace="medkits"
          />
          <StatItem 
            value={t('volunteers.value')}
            title={t('volunteers.title')}
          />
          <StatItem 
            value={t('brigades.value')}
            title={t('brigades.title')}
          />
        </CardContent>
      </Card>
    </div>
  )
}

function StatItem({ value, title }: { 
  value: string, 
  title: string
}) {
  return (
    <div className="space-y-2">
      <h3 className="text-4xl md:text-5xl leading-tight font-semibold bg-gradient-to-r from-yellow-400 via-yellow-300 to-blue-300 text-transparent bg-clip-text">
        {value}
      </h3>
      <h4 className="text-2xl font-semibold">{title}</h4>
    </div>
  )
}

function StatItemWithDescription({ value, title, namespace }: { 
  value: string, 
  title: string,
  namespace: 'medkits'
}) {
  const t = useTranslations(`statistics.${namespace}`)

  return (
    <div className="space-y-2">
      <h3 className="text-4xl md:text-5xl font-semibold bg-gradient-to-r from-yellow-400 via-yellow-300 to-blue-300 text-transparent bg-clip-text">
        {value}
      </h3>
      <h4 className="text-2xl font-semibold">{title}</h4>
      <p className="text-white">
        {t('description.prefix')}
        <Highlight>{t('description.highlight')}</Highlight>
        {t('description.postfix')}
      </p>
    </div>
  )
}
