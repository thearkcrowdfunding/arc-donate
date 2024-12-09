import { Button } from "@/components/ui/button"
import { useTranslations } from 'next-intl'
import Link from 'next/link'
import { Metadata } from 'next'
import { Suspense, useEffect } from 'react'
import { trackPaymentResult } from '@/utils/payment-analytics'
import { useSearchParams } from 'next/navigation'

export const metadata: Metadata = {
  title: 'Thank You For Your Support | Kovcheg',
  description: 'Your donation helps Russians with an anti-war stance continue their work and support others',
  robots: 'noindex',
}

function PaymentSuccessContent() {
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
  )
}

export default function PaymentSuccessPage() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4">
      <Suspense fallback={
        <div className="w-16 h-16 border-4 border-kovcheg border-t-transparent rounded-full animate-spin" />
      }>
        <PaymentSuccessContent />
      </Suspense>
    </div>
  )
} 
