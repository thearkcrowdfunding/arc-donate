'use client'

import dynamic from 'next/dynamic'
import { HeroComponent } from "@/components/hero"

// Dynamic imports for main sections
const MainContent = dynamic(() => import('@/components/main-content'), {
  loading: () => <div className="h-[2000px]" />, // Approximate height for main content
  ssr: true // Enable SSR for critical content
})

const SecondaryContent = dynamic(() => import('@/components/secondary-content'), {
  loading: () => <div className="h-[3600px]" />, // Approximate height for secondary content
  ssr: false // Keep secondary content client-side
})

export default function LocalePage() {
  return (
    <div className="bg-kovcheg">
      <HeroComponent />
      <div className="mx-auto">
        <MainContent />
        <SecondaryContent />
      </div>
    </div>
  )
}
