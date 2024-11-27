'use client'

import dynamic from 'next/dynamic'
import { Suspense } from 'react'
import { HeroComponent } from "@/components/hero"
import { HelpCardsSection } from '@/components/help-cards-section';

// Dynamic imports
const CtaComponent = dynamic(() => import("@/components/cta").then(mod => mod.CtaComponent), {
  loading: () => <div className="h-[600px]" />,
  ssr: false
})

const DonationFormWithCta = dynamic(() => 
  import("@/components/donation-form-with-cta").then(mod => mod.DonationFormWithCta), {
  loading: () => <div className="h-[800px]" />,
  ssr: false
})

const VideoTestimonial = dynamic(() => 
  import('@/components/video-testimonial').then(mod => mod.VideoTestimonial), {
  loading: () => <div className="h-[400px]" />,
  ssr: false
})

const FooterComponent = dynamic(() => 
  import("@/components/footer").then(mod => mod.FooterComponent), {
  loading: () => <div className="h-[200px]" />,
  ssr: false
})

const AboutKovchegSection = dynamic(() => 
  import('@/components/about-kovcheg-section').then(mod => mod.AboutKovchegSection), {
  loading: () => <div className="h-[600px]" />,
  ssr: false
})

export default function LocalePage() {
  return (
    <div className="bg-kovcheg">
      <HeroComponent />
      <div className="mx-auto">
        <Suspense fallback={<div className="h-[600px]" />}>
          <div id="learn-more">
            <CtaComponent />
          </div>
        </Suspense>
        
        <Suspense fallback={<div className="h-[800px]" />}>
          <div id="donate-form">
            <DonationFormWithCta showCTA={false} variant="default" formId="form1" />
          </div>
        </Suspense>

        <Suspense fallback={<div className="h-[600px]" />}>
          <HelpCardsSection />
        </Suspense>

        <Suspense fallback={<div className="h-[600px]" />}>
          <AboutKovchegSection />
        </Suspense>
        <Suspense fallback={<div className="h-[800px]" />}>
          <div id="donate-form-2">
            <DonationFormWithCta showCTA={true} variant="default" formId="form2" />
          </div>
        </Suspense>
      </div>
      
      <Suspense fallback={<div className="h-[200px]" />}>
        <FooterComponent />
      </Suspense>
    </div>
  )
}
