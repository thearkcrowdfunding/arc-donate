'use client'

import { Card } from "@/components/ui/card"
import Image from 'next/image'
import { useTranslations } from 'next-intl'

export function FooterComponent() {
  const t = useTranslations('nav')

  return (
    <div className="w-full">
      <Card className="bg-white text-blue-600 p-6 md:p-20 border-0 ring-0 ring-offset-0 shadow-none">
        <div className="max-w-6xl mx-auto flex flex-col items-start">
          <div className="relative w-[120px] h-[40px] mb-4">
            <Image
              src="/logo/kovcheg.svg"
              alt={t('brand')}
              fill
              priority
              className="object-contain"
            />
          </div>
          <p className="text-lg">
            © 2022-2024 «Ковчег»
          </p>
        </div>
      </Card>
    </div>
  )
}
