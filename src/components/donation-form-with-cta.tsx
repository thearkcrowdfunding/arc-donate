"use client"

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { useTranslations } from 'next-intl'
import { analytics } from '@/utils/analytics'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { locales } from '@/i18n/config'

interface DonationFormProps {
  showCTA?: boolean;
  variant?: 'urgent' | 'default';
  formId: string;
}

const paymentLinks = {
  '5': 'https://buy.stripe.com/8wM01005HgQv90s8wA',
  '10': 'https://buy.stripe.com/fZedRQ9GhgQvgsUaEF',
  '15': 'https://buy.stripe.com/fZe1549GhdEjfoQbIK'
};

type PaymentMethod = 'card' | 'paypal';

export function DonationFormWithCta({ 
  showCTA = false, 
  variant = 'default',
  formId
}: DonationFormProps) {
  const t = useTranslations('donationForm')
  const [amount, setAmount] = useState<string>('10')
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>('card')

  const handleAmountClick = (value: string) => {
    setAmount(value)
    analytics.trackDonationForm('Payment Option Click', `$${value}`, formId);
  }

  const handlePaymentMethodChange = (method: PaymentMethod) => {
    setPaymentMethod(method);
    analytics.trackDonationForm('Payment Method Change', method, formId);
  }

  const handleDonateClick = () => {
    const numericAmount = parseInt(amount, 10);
    const paymentLink = paymentLinks[amount as keyof typeof paymentLinks];

    if (!isNaN(numericAmount) && numericAmount > 0) {
      analytics.trackDonation(numericAmount, formId);
      
      if (paymentLink) {
        window.location.href = paymentLink;
      } else {
        analytics.trackEvent('Error', 'Invalid Payment Link', `Amount: ${amount}`, undefined, { formId });
      }
    } else {
      analytics.trackEvent('Error', 'Invalid Amount', `Amount: ${amount}`, undefined, { formId });
    }
  }

  const params = useParams()
  const isUaLocale = params.locale === 'ua' && locales.includes('ua')

  const renderLegalText = () => {
    return (
      <p className="mt-4 text-sm text-kovcheg/70">
        {t.rich('legalText', {
          terms: (chunks) => (
            <Link href="https://kovcheg.live/policy/" className="underline hover:no-underline">
              {chunks}
            </Link>
          ),
          agreement: (chunks) => (
            <Link href="https://kovcheg.live/agreement/" className="underline hover:no-underline">
              {chunks}
            </Link>
          )
        })}
      </p>
    );
  };

  return (
    <div className="w-full pt-6 md:p-6">
      <div className="flex flex-col max-w-6xl mx-auto">
        {showCTA && (
          <div className="m-8 text-left">
            <h2 className="text-3xl font-semibold text-white whitespace-pre-line">
              {t(`ctaTexts.${variant}`)}
            </h2>
          </div>
        )}
        
        <div className="w-full">
          <div className="bg-white text-kovcheg rounded-lg px-8 py-10 md:p-12">
            <h2 className="text-4xl md:text-5xl leading-tight font-semibold mb-4">
              {t('title')}
            </h2>
            <p className="mb-6">
              {t('description.text')}
            </p>
            <p className="text-xl mb-4">{t('monthlySupport')}</p>
            
            {/* Centered Payment Method Tabs */}
            <div className="flex justify-center mb-6 border-b border-kovcheg/20">
              {(['card', 'paypal'] as const).map((method) => (
                <button
                  key={method}
                  onClick={() => handlePaymentMethodChange(method)}
                  className={`px-6 py-3 text-lg font-medium transition-colors relative ${
                    paymentMethod === method 
                      ? 'text-kovcheg border-b-2 border-kovcheg' 
                      : 'text-kovcheg/60 hover:text-kovcheg/80'
                  }`}
                >
                  {t(`paymentMethods.${method}`)}
                </button>
              ))}
            </div>
            
            <form onSubmit={(e) => { 
              e.preventDefault(); 
              handleDonateClick(); 
            }} className="space-y-6 mb-8">
              <RadioGroup
                value={amount}
                onValueChange={handleAmountClick}
                className="grid grid-cols-3 gap-4"
              >
                {Object.keys(paymentLinks).map((value) => (
                  <div key={value}>
                    <RadioGroupItem
                      value={value}
                      id={`amount-${formId}-${value}`}
                      className="peer sr-only"
                    />
                    <Label
                      htmlFor={`amount-${formId}-${value}`}
                      className={`flex items-center justify-center p-4 border-2 border-kovcheg cursor-pointer transition-colors ${
                        amount === value ? 'bg-kovcheg text-white' : 'hover:bg-kovcheg/10'
                      }`}
                    >
                      ${value}
                    </Label>
                  </div>
                ))}
              </RadioGroup>

              <Button
                type="submit"
                className="w-full bg-kovcheg text-white hover:bg-kovcheg/90 font-semibold py-10 text-3xl"
              >
                {t('helpButton')}
              </Button>
            </form>
            
            {renderLegalText()}
          </div>
        </div>
      </div>
    </div>
  )
}
