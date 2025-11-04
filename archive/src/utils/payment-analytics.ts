import { PaymentMethod, PaymentTrackingParams } from '@/types/payment';
import { analytics } from './analytics';

export const trackPaymentResult = (
  status: 'success' | 'cancel',
  params: PaymentTrackingParams
) => {
  const eventName = status === 'success' ? 'Payment Success' : 'Payment Cancelled';
  
  analytics.trackDonationForm(
    eventName,
    params.provider || 'unknown',
    params.formId,
    {
      paymentMethod: params.provider,
      donationAmount: params.amount ? parseInt(params.amount, 10) : undefined
    }
  );
}; 
