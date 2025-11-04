'use client'

import { useTranslations } from 'next-intl'
import Image from 'next/image'

interface MediaOutlet {
  id: string;
  name: string;
  imageSrc: string;
}

export function MediaMentionsSection() {
  const t = useTranslations('mediaMentions')
  
  const mediaOutlets: MediaOutlet[] = [
    { id: 'wp', name: 'Washington Post', imageSrc: '/images/media/w-post.png' },
    { id: 'fp', name: 'Foreign Policy', imageSrc: '/images/media/fpp-qoakx25nyy563wrogy860cs3t8pg3il61lubr1sqsg.png' },
    { id: 'ng', name: 'Новая газета', imageSrc: '/images/media/novaya.png' },
    { id: 'meduza', name: 'Медуза', imageSrc: '/images/media/meduza.png' },
    { id: 'popular', name: 'Популярная политика', imageSrc: '/images/media/pp.jpg' },
    { id: 'bbc', name: 'BBC', imageSrc: '/images/media/bbc.jpg' },
    { id: 'republic', name: 'Republic', imageSrc: '/images/media/rep.jpg' },
    { id: 'forbes', name: 'Forbes', imageSrc: '/images/media/forbes.jpg' }
  ]

  return (
    <div className="w-full bg-white text-blue-600 py-20">
      <div className="max-w-6xl mx-auto">
        <div className="p-8 md:p-12">
          <h2 className="text-4xl md:text-6xl font-semibold text-left mb-12">
            {t('title')}
          </h2>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {mediaOutlets.map((outlet) => (
            <div key={outlet.id} className="flex flex-col items-center space-y-4">
              <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden 
                            transition-transform duration-300 hover:scale-105 bg-gray-100">
                <Image
                  src={outlet.imageSrc}
                  alt={outlet.name}
                  fill
                  className="object-contain transition-opacity duration-300"
                />
              </div>
              <p className="text-lg md:text-xl font-medium text-center">
                {outlet.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
} 
