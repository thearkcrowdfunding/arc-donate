'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CircleIcon } from 'lucide-react'
import { useTranslations } from 'next-intl'

export function HowWeHelpComponent() {
  const t = useTranslations('howWeHelp')

  return (
    <div className="w-full">
      <Card className="bg-gradient-to-r from-yellow-300 to-blue-300 p-6 md:p-20 border-0 ring-0 ring-offset-0 shadow-none">
        <CardHeader className="p-0 mb-6">
          <CardTitle className="text-4xl md:text-5xl pt-6 mb:pt-0 leading-tight font-semibold text-left text-black">
            {t('title')}
          </CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[0, 1, 2, 3].map((index) => (
              <div key={index} className="flex flex-col items-start text-left">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-black text-white mb-4">
                  <CircleIcon className="w-8 h-8" />
                  <span className="absolute font-bold">{index + 1}</span>
                </div>
                <h3 className="text-2xl font-bold mb-2 text-black">
                  {t(`steps.${index}.title`)}
                </h3>
                <p className="text-xl font-semibold text-black whitespace-pre-line">
                  {t(`steps.${index}.description`)}
                </p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
