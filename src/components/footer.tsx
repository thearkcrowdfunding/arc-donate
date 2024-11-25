'use client'

import { SiInstagram } from '@icons-pack/react-simple-icons'
import { Send } from 'lucide-react'
import Link from 'next/link'
import { analytics } from '@/utils/analytics'
import { Card, CardContent } from "@/components/ui/card"
import { useTranslations } from 'next-intl'

export function FooterComponent() {
  const t = useTranslations('footer.menu')
  
  const menuItems = [
    { name: t('aboutUs.text'), href: t('aboutUs.href') },
    { name: t('reports.text'), href: t('reports.href') },
  ]

  const handleSocialLinkClick = (platform: string) => {
    analytics.trackFooter('Social Link Click', platform);
  };

  const handleMenuItemClick = (itemName: string) => {
    analytics.trackFooter('Menu Item Click', itemName);
  };

  return (
    <footer className="w-full">
      <Card className="bg-black/90 backdrop-blur-sm border-0 ring-0 ring-offset-0 shadow-none">
        <CardContent className="px-6 md:px-20 py-2">
          <div className="flex flex-col md:flex-row justify-between items-center mb-4">
            <div className="flex flex-wrap justify-center md:justify-start gap-6 mb-4 md:mb-0">
              {menuItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-white/70 hover:text-white text-sm font-medium transition-colors"
                  onClick={() => handleMenuItemClick(item.name)}
                >
                  {item.name}
                </a>
              ))}
            </div>
            <div className="flex items-center space-x-4">
              <Link 
                href="https://www.instagram.com/uniontac_ua/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-white/70 hover:text-white transition-colors"
                onClick={() => handleSocialLinkClick('Instagram')}
              >
                <SiInstagram size={20} />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link 
                href="https://t.me/uniontac" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-white/70 hover:text-white transition-colors"
                onClick={() => handleSocialLinkClick('Telegram')}
              >
                <Send size={20} />
                <span className="sr-only">Telegram</span>
              </Link>
            </div>
          </div>
          <div className="text-center md:text-left">
            <p className="text-white/50 text-sm">
              © 2024 Uniontac
            </p>
          </div>
        </CardContent>
      </Card>
    </footer>
  )
}
