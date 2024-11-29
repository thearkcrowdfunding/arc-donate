'use client'

import Image from 'next/image'
import { useTranslations } from 'next-intl'

export function FooterComponent() {
  const t = useTranslations('nav')

  return (
    <div className="w-full bg-white text-blue-600 py-20">
      <div className="max-w-6xl mx-auto px-8 md:px-12">
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
    </div>
  )
}
