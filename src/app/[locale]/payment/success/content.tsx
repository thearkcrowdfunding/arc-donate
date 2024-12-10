'use client'

import { Button } from "@/components/ui/button"
import { useTranslations } from 'next-intl'
import Link from 'next/link'
import { useEffect } from 'react'
import { trackPaymentResult } from '@/utils/payment-analytics'
import { useSearchParams } from 'next/navigation'

export function PaymentSuccessContent() {
  const t = useTranslations('payment.success')
  const searchParams = useSearchParams()
  
  useEffect(() => {
    const formId = searchParams.get('formId');
    const provider = searchParams.get('provider');
    const amount = searchParams.get('amount');

    if (formId) {
      trackPaymentResult('success', {
        provider: (provider as 'stripe' | 'paypal') || undefined,
        amount: amount || undefined,
        formId
      });
    }
  }, [searchParams]);

  return (
    <div className="w-full max-w-3xl">
      <div className="bg-white text-blue-600 rounded-lg p-8 md:p-16 text-center">
        <h1 className="text-3xl md:text-5xl font-semibold mb-4">
          {t('title')}
        </h1>
        <p className="text-lg md:text-xl mb-8">
          {t('description')}
        </p>
        <Link href="/">
          <Button className="bg-kovcheg hover:bg-kovcheg/90 text-white font-semibold py-6 px-8 text-xl">
            {t('button')}
          </Button>
        </Link>
      </div>
    </div>
  );
} 
