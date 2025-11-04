'use client'

import { useEffect } from 'react'
import { scrollHandlers } from "@/utils/scroll-handlers"
import { analytics } from "@/utils/analytics"

export function HeroClientHandlers() {
  useEffect(() => {
    const donateButton = document.querySelector('[data-action="donate"]')
    const learnMoreLink = document.querySelector('[data-action="learn-more"]')

    donateButton?.addEventListener('click', () => {
      scrollHandlers.handleHeroToFormClick('donate-form')
      analytics.trackDonationForm('Donate Button Click', 'hero', 'form1')
    })

    learnMoreLink?.addEventListener('click', (e) => {
      scrollHandlers.handleLearnMoreClick(e as any)
      analytics.trackNavigation('Learn More Click', 'Hero')
    })

    return () => {
      donateButton?.removeEventListener('click', () => {})
      learnMoreLink?.removeEventListener('click', () => {})
    }
  }, [])

  return null
} 
