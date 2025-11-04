export type PaymentMethod = 'stripe' | 'paypal' | 'crypto';

export type PaymentTrackingParams = {
  provider?: PaymentMethod;
  amount?: string;
  formId: string;
};

export type DonationFormParams = {
  donationAmount?: number;
  paymentMethod?: PaymentMethod;
}; 
