'use client'

import { Suspense } from 'react'
import { HelpCardsSection } from './help-cards-section'
import { AboutKovchegSection } from './about-kovcheg-section'
import { DonationFormWithCta } from './donation-form-with-cta'
import { MediaMentionsSection } from './media-mentions-section'
import { FinalCtaComponent } from './final-cta'
import { FooterComponent } from './footer'

export default function SecondaryContent() {
  return (
    <>
      <Suspense fallback={<div className="h-[600px]" />}>
        <HelpCardsSection />
      </Suspense>

      <Suspense fallback={<div className="h-[600px]" />}>
        <AboutKovchegSection 
          showTitle={true} 
          isFirst={false}
        />
      </Suspense>

      <Suspense fallback={<div className="h-[800px]" />}>
        <div id="donate-form-3">
          <DonationFormWithCta showCTA={true} variant="default" formId="form3" />
        </div>
      </Suspense>

      <Suspense fallback={<div className="h-[600px]" />}>
        <MediaMentionsSection />
      </Suspense>

      <Suspense fallback={<div className="h-[400px]" />}>
        <FinalCtaComponent />
      </Suspense>
    
      <Suspense fallback={<div className="h-[200px]" />}>
        <FooterComponent />
      </Suspense>
    </>
  )
} 
