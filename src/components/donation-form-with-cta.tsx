"use client"

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { useTranslations } from 'next-intl'
import { analytics } from '@/utils/analytics'
import Link from 'next/link'
import { CopyIcon, CheckIcon } from 'lucide-react'
import { 
  STRIPE_PAYMENT_LINKS,
  PAYPAL_SUBSCRIPTION_LINKS,
  CRYPTO_ADDRESSES 
} from '@/lib/constants';
import { PaymentMethod, DonationFormParams } from '@/types/payment';

interface DonationFormProps {
  showCTA?: boolean;
  variant?: 'urgent' | 'default';
  formId: string;
}

export function DonationFormWithCta({ 
  showCTA = false, 
  variant = 'default',
  formId
}: DonationFormProps) {
  const t = useTranslations('donationForm')
  const [amount, setAmount] = useState<string>('20')
  const [paymentMethod, setPaymentMethod] = useState<'stripe' | 'paypal' | 'crypto'>('stripe')
  const [copiedAddress, setCopiedAddress] = useState<string | null>(null)

  const handleAmountClick = (value: string) => {
    setAmount(value);
    analytics.trackDonationForm(
      'Payment Option Click', 
      `$${value}`, 
      formId,
      {
        paymentMethod
      }
    );
  };

  const handlePaymentMethodChange = (method: 'stripe' | 'paypal' | 'crypto') => {
    setPaymentMethod(method);
    analytics.trackDonationForm(
      'Payment Method Change', 
      method, 
      formId
    );
  };

  const handleDonateClick = () => {
    if (paymentMethod === 'crypto') {
      return;
    }

    const numericAmount = parseInt(amount, 10);
    const links = paymentMethod === 'stripe' ? STRIPE_PAYMENT_LINKS : PAYPAL_SUBSCRIPTION_LINKS;
    const paymentLink = links[amount as keyof typeof STRIPE_PAYMENT_LINKS];

    if (!isNaN(numericAmount) && numericAmount > 0) {
      analytics.trackDonationForm(
        'Donation Initiate',
        paymentMethod,
        formId,
        {
          donationAmount: numericAmount,
          paymentMethod
        }
      );
      
      if (paymentLink) {
        const redirectUrl = new URL(paymentLink);
        redirectUrl.searchParams.append('provider', paymentMethod);
        redirectUrl.searchParams.append('amount', amount);
        redirectUrl.searchParams.append('formId', formId);
        
        window.location.href = redirectUrl.toString();
      } else {
        analytics.trackEvent(
          'Error', 
          'Invalid Payment Link', 
          `Amount: ${amount}, Method: ${paymentMethod}`, 
          undefined, 
          { formId }
        );
      }
    } else {
      analytics.trackEvent(
        'Error', 
        'Invalid Amount', 
        `Amount: ${amount}, Method: ${paymentMethod}`, 
        undefined, 
        { formId }
      );
    }
  };

  const handleCopyAddress = async (address: string) => {
    try {
      await navigator.clipboard.writeText(address);
      setCopiedAddress(address);
      setTimeout(() => setCopiedAddress(null), 2000);
      
      const cryptoDetails = CRYPTO_ADDRESSES.find(crypto => crypto.address === address);
      if (cryptoDetails) {
        analytics.trackCryptoDonation(cryptoDetails.currency, formId, parseInt(amount, 10));
      }
    } catch (err) {
      console.error('Failed to copy address:', err);
    }
  }

  const renderPaymentForm = () => {
    if (paymentMethod === 'crypto') {
      return (
        <div className="space-y-4 max-w-2xl mx-auto px-4">
          {CRYPTO_ADDRESSES.map((crypto) => (
            <div key={crypto.currency} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div>
                <p className="font-medium text-lg">
                  {crypto.currency} {crypto.network && `(${crypto.network})`}
                </p>
                <p className="font-mono text-sm text-gray-600 break-all">
                  {crypto.address}
                </p>
              </div>
              <button
                onClick={() => handleCopyAddress(crypto.address)}
                className="ml-4 p-2 hover:bg-gray-200 rounded-full transition-colors shrink-0"
              >
                {copiedAddress === crypto.address ? (
                  <CheckIcon className="w-5 h-5 text-green-600" />
                ) : (
                  <CopyIcon className="w-5 h-5" />
                )}
              </button>
            </div>
          ))}
        </div>
      )
    }

    if (paymentMethod === 'paypal') {
      return (
        <>
          <Button
            onClick={handleDonateClick}
            className="w-full bg-[#0070ba] hover:bg-[#003087] text-white font-semibold py-10 text-3xl"
          >
            {t('helpButton')}
          </Button>
          <p className="text-center mt-2 text-sm text-gray-600">
            {t('youWillBeRedirectedToPaypal')}
          </p>
        </>
      )
    }

    return (
      <Button
        type="submit"
        className="w-full bg-kovcheg text-white hover:bg-kovcheg/90 font-semibold py-10 text-3xl"
      >
        {t('helpButton')}
      </Button>
    )
  }

  return (
    <div className="w-full pt-6 md:p-6">
      <div className="flex flex-col max-w-6xl mx-auto">
        {showCTA && (
          <div className="px-8 md:px-12 mb-8 text-left">
            <h2 className="text-4xl md:text-6xl font-semibold text-white whitespace-pre-line">
              {t(`ctaTexts.${variant}`)}
            </h2>
          </div>
        )}
        
        <div className="w-full">
          <div className="bg-white text-blue-600 rounded-lg md:border-none border-8 border-kovcheg">
            <div className="px-4 py-4 sm:px-6 sm:py-8 md:p-16">
              <div className="text-center max-w-3xl mx-auto">
                <h2 className="text-[34px] leading-tight font-semibold mb-3 sm:text-3xl md:text-5xl">
                  {t('title')}
                </h2>
                <p className="mb-2 text-standard sm:text-base md:text-base">
                  {t('description.text')}
                </p>
                {paymentMethod !== 'crypto' && (
                  <p className="text-standard md:text-xl mb-4">
                    {t('monthlySupport')}
                  </p>
                )}
              </div>
              
              <div className="flex justify-center mb-2 sm:mb-4 md:mb-6 border-b border-blue-600/20">
                <button
                  onClick={() => setPaymentMethod('stripe')}
                  className={`px-3 sm:px-4 md:px-6 py-2 md:py-3 text-[15px] sm:text-base md:text-lg font-medium transition-colors relative ${
                    paymentMethod === 'stripe' 
                      ? 'text-blue-600 border-b-2 border-blue-600' 
                      : 'text-blue-600/60 hover:text-blue-600/80'
                  }`}
                >
                  {t('paymentMethods.card')}
                </button>
                <button
                  onClick={() => setPaymentMethod('paypal')}
                  className={`px-3 sm:px-4 md:px-6 py-2 md:py-3 text-[15px] sm:text-base md:text-lg font-medium transition-colors relative ${
                    paymentMethod === 'paypal' 
                      ? 'text-blue-600 border-b-2 border-blue-600' 
                      : 'text-blue-600/60 hover:text-blue-600/80'
                  }`}
                >
                  {t('paymentMethods.paypal')}
                </button>
                <button
                  onClick={() => setPaymentMethod('crypto')}
                  className={`px-3 sm:px-4 md:px-6 py-2 md:py-3 text-[15px] sm:text-base md:text-lg font-medium transition-colors relative ${
                    paymentMethod === 'crypto' 
                      ? 'text-blue-600 border-b-2 border-blue-600' 
                      : 'text-blue-600/60 hover:text-blue-600/80'
                  }`}
                >
                  {t('paymentMethods.crypto')}
                </button>
              </div>
              
              <form 
                onSubmit={(e) => { 
                  e.preventDefault(); 
                  if (paymentMethod !== 'crypto') {
                    handleDonateClick();
                  }
                }} 
                className="space-y-6 sm:space-y-4 md:space-y-6 mb-6 sm:mb-4 md:mb-8"
              >
                {paymentMethod !== 'crypto' && (
                  <RadioGroup
                    value={amount}
                    onValueChange={handleAmountClick}
                    className="grid grid-cols-3 gap-4"
                  >
                    {['15', '20', '30'].map((value) => (
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
                )}

                {renderPaymentForm()}
              </form>
              
              {paymentMethod !== 'crypto' && (
                <p className="text-center mt-2 sm:mt-3 md:mt-4 text-xs md:text-sm text-blue-600/70">
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
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
