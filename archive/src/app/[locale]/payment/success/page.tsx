import { setRequestLocale } from 'next-intl/server';
import { PaymentSuccessContent } from './content';

export default async function PaymentSuccessPage({ 
  params: { locale } 
}: { 
  params: { locale: string } 
}) {
  setRequestLocale(locale);
  
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4">
      <PaymentSuccessContent />
    </div>
  );
}

export const dynamic = 'force-static';
