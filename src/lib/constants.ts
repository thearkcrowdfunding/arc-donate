export const PAYPAL_SUBSCRIPTION_LINKS = {
  '15': 'https://www.paypal.com/webapps/billing/plans/subscribe?plan_id=P-60L38257PV6342114M6MRVUQ',
  '20': 'https://www.paypal.com/webapps/billing/plans/subscribe?plan_id=P-7FF292585V2221223M6MRTWY',
  '30': 'https://www.paypal.com/webapps/billing/plans/subscribe?plan_id=P-06L04058VW619271DM6MRTBI',
} as const; 

export const STRIPE_PAYMENT_LINKS = {
  '15': 'https://pay.kovcheg.live/b/bIY7uMdwp2Vb5NeaEE',
  '20': 'https://pay.kovcheg.live/b/bIYcP67819jzb7y4gh',
  '30': 'https://pay.kovcheg.live/b/4gw2as2RL67n0sU002'
} as const;

export const CRYPTO_ADDRESSES = [
  {
    currency: 'USDT',
    network: 'TRC20',
    address: 'TDWsHaZcsifiBypNJDKNrQf7vmhZ9LtXko'
  },
  {
    currency: 'BTC',
    network: '',
    address: 'bc1qnxmjjj23e5u6y8slhl9wss74t3wep6tke2nc60'
  },
  {
    currency: 'ETH',
    network: 'ERC20',
    address: '0xBf178F99b8790db1BD2194D80c3a268AE4AcE804'
  }
] as const;

export const PAYMENT_URLS = {
  SUCCESS: '/payment/success',
  CANCEL: '/payment/cancel'
} as const;

// For use with payment providers that need full URLs:
export const getPaymentUrls = (baseUrl: string, locale: string) => ({
  success: `${baseUrl}/${locale}${PAYMENT_URLS.SUCCESS}`,
  cancel: `${baseUrl}/${locale}${PAYMENT_URLS.CANCEL}`
});
