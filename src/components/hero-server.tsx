import Link from 'next/link'
import Image from 'next/image'
import { getMessages } from '@/i18n/server'
import { Suspense } from 'react'
import { ClientHeroActions } from './client-hero-actions'

export async function HeroServer() {
  const { t } = await getMessages('hero')

  return (
    <div className="relative h-screen md:h-[800px]">
      <Image
        priority={true}
        src="/images/hero/hero.jpg"
        alt="Background"
        fill
        quality={75}
        sizes="(max-width: 768px) 100vw, 1920px"
        placeholder="blur"
        blurDataURL="data:image/jpeg;base64,..."
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/60 md:bg-black/40" />
      
      <div className="w-full relative z-10 h-full flex flex-col justify-end pb-12 md:pb-16">
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-8 md:px-12">
          <div className="text-left mb-8 md:mb-32 max-w-[800px] md:max-w-[1000px] translate-y-[-10vh] md:translate-y-0">
            <h1 className="text-[min(9vw,2.5rem)] sm:text-5xl lg:text-7xl font-bold mb-3 md:mb-6 leading-tight uppercase">
              {t('title')}
            </h1>
            <p className="text-[min(5vw,1.25rem)] sm:text-2xl md:text-3xl font-semibold">
              {t('subtitle')}
            </p>
          </div>
          <Suspense>
            <ClientHeroActions t={t} />
          </Suspense>
        </div>
      </div>
    </div>
  )
} 
