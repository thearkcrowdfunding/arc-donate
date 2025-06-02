'use client'

import { Suspense } from 'react'
import { CtaComponent } from './cta'
import { AboutKovchegSection } from './about-kovcheg-section'
import { DonationFormWithCta } from './donation-form-with-cta'

export default function MainContent() {
  return (
    <>

      <div id="learn-more" className="bg-kovcheg h-8"></div>

      <Suspense fallback={<div className="h-[600px]" />}>
        <AboutKovchegSection showTitle={false} isFirst={true} />
      </Suspense>

      <Suspense fallback={<div className="h-[800px]" />}>
        <div id="donate-form">
          <DonationFormWithCta showCTA={false} variant="default" formId="form1" />
        </div>
      </Suspense>
    </>
  )
} 
