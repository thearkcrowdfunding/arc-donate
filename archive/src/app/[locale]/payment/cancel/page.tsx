import { setRequestLocale } from 'next-intl/server';
import { PaymentCancelContent } from './content';

export default async function PaymentCancelPage({ 
  params: { locale } 
}: { 
  params: { locale: string } 
}) {
  setRequestLocale(locale);
  
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4">
      <PaymentCancelContent />
    </div>
  );
}

export const dynamic = 'force-static'; 
