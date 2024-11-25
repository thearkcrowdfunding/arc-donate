'use client'

import React, { useState, useEffect } from 'react';
import { useRouter, usePathname } from '@/i18n/routing';
import { useLocale, useTranslations } from 'next-intl';
import { scrollHandlers } from "@/utils/scroll-handlers"
import { Card, CardContent } from "@/components/ui/card"
import { analytics } from '@/utils/analytics'

export function NonprofitNavComponent() {
  const t = useTranslations('nav');
  const router = useRouter();
  const pathname = usePathname();
  const currentLocale = useLocale();
  const [isAfterHero, setIsAfterHero] = useState(false);
  const [activeLocale, setActiveLocale] = useState(currentLocale);

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = window.innerHeight;
      setIsAfterHero(window.scrollY > heroHeight);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLanguageChange = (locale: string) => {
    analytics.trackNavigation('Language Change', locale);
    setActiveLocale(locale);
    router.replace(pathname, {locale});
  };

  const handleDonateClick = () => {
    scrollHandlers.handleNavbarToFormClick();
  };

  const desktopButtonClasses = isAfterHero
    ? "hidden md:block bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-12 rounded-lg transition duration-300 text-base md:text-lg cursor-pointer w-[200px]"
    : "hidden md:block bg-gray-900 hover:bg-gray-800 text-white font-bold py-2 px-12 rounded-lg transition duration-300 text-base md:text-lg cursor-pointer w-[200px]";

  const mobileButtonClasses = "md:hidden bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg transition duration-300 text-base cursor-pointer";

  const getLocaleClasses = (locale: string) => {
    const baseClasses = "px-3 py-1 rounded-lg transition-colors uppercase text-sm font-medium";
    if (locale === activeLocale) {
      return `${baseClasses} bg-white text-blue-600`;
    }
    return `${baseClasses} text-white hover:bg-white/10`;
  };

  return (
    <div className="w-full fixed top-0 z-50">
      <Card className="bg-black/90 backdrop-blur-sm border-0 ring-0 ring-offset-0 shadow-none">
        <CardContent className="px-6 md:px-20 py-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <a 
                href="https://uniontacua.com" 
                className="text-xl font-bold uppercase bg-gradient-to-r from-yellow-400 via-yellow-300 to-blue-300 text-transparent bg-clip-text"
          
              >
                {t('brand')}
              </a>
            </div>
            <div className="flex items-center gap-4">
              <div className={`flex gap-1 mr-4 ${isAfterHero ? 'hidden md:flex' : 'flex'}`}>
                {['en', 'ua', 'ru'].map((locale) => (
                  <button
                    key={locale}
                    onClick={() => handleLanguageChange(locale)}
                    className={getLocaleClasses(locale)}
                  >
                    {locale}
                  </button>
                ))}
              </div>
              <button 
                onClick={handleDonateClick}
                className={desktopButtonClasses}
              >
                {t('help')}
              </button>
              {isAfterHero && (
                <button 
                  onClick={handleDonateClick}
                  className={mobileButtonClasses}
                >
                  {t('help')}
                </button>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
