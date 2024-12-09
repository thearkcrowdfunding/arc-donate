export const PAYPAL_SUBSCRIPTION_LINKS = {
  '15': 'https://www.paypal.com/webapps/billing/plans/subscribe?plan_id=P-8YF15328CS788392LM4DCHRI',
  '20': 'https://www.paypal.com/webapps/billing/plans/subscribe?plan_id=P-8YF15328CS788392LM4DCHRI',
  '30': 'https://www.paypal.com/webapps/billing/plans/subscribe?plan_id=P-8YF15328CS788392LM4DCHRI',
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
export const getPaymentUrls = (baseUrl: string) => ({
  success: `${baseUrl}${PAYMENT_URLS.SUCCESS}`,
  cancel: `${baseUrl}${PAYMENT_URLS.CANCEL}`
});
