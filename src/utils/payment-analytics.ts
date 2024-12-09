import { analytics } from './analytics';

type PaymentProvider = 'stripe' | 'paypal';

interface PaymentTrackingParams {
  provider?: PaymentProvider;
  amount?: string;
  formId: string;
}

export const trackPaymentResult = (
  status: 'success' | 'cancel',
  params: PaymentTrackingParams
) => {
  const eventName = status === 'success' ? 'Payment Success' : 'Payment Cancelled';
  
  analytics.trackEvent(
    'Payment',
    eventName,
    params.provider || 'unknown',
    params.amount ? parseInt(params.amount, 10) : undefined,
    { formId: params.formId }
  );
}; 
