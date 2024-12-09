"use client"

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { useTranslations } from 'next-intl'
import { analytics } from '@/utils/analytics'
import Link from 'next/link'
import Script from 'next/script'
import { CopyIcon, CheckIcon } from 'lucide-react'
import { PayPalButtons } from "@paypal/react-paypal-js"

interface DonationFormProps {
  showCTA?: boolean;
  variant?: 'urgent' | 'default';
  formId: string;
}

const paymentLinks = {
  '15': 'https://buy.stripe.com/8wM01005HgQv90s8wA',
  '20': 'https://buy.stripe.com/fZedRQ9GhgQvgsUaEF',
  '30': 'https://buy.stripe.com/fZe1549GhdEjfoQbIK'
};

const paypalLinks = {
  '15': 'https://www.paypal.com/checkoutnow?atomic-event-state=eyJkb21haW4iOiJzZGtfcGF5cGFsX3Y1IiwiZXZlbnRzIjpbXSwiaW50ZW50IjoiY2xpY2tfcGF5bWVudF9idXR0b24iLCJpbnRlbnRUeXBlIjoiY2xpY2siLCJpbnRlcmFjdGlvblN0YXJ0VGltZSI6MTQ3NzgxMjQuNzk5OTk5OTk3LCJ0aW1lU3RhbXAiOjE0Nzc4MTI1LCJ0aW1lT3JpZ2luIjoxNzMyNjkzMzM4ODQ4LjksInRhc2siOiJzZWxlY3Rfb25lX3RpbWVfY2hlY2tvdXQiLCJmbG93Ijoib25lLXRpbWUtY2hlY2tvdXQiLCJ1aVN0YXRlIjoid2FpdGluZyIsInBhdGgiOiIvc21hcnQvYnV0dG9ucyIsInZpZXdOYW1lIjoicGF5cGFsLXNkayJ9&sessionID=uid_1b1e5328a5_mdc6ndi6mtg&buttonSessionID=uid_ec70224b4e_mdc6ndi6mtg&stickinessID=uid_f22ff0a4db_mtq6mdg6mtc&smokeHash=&sign_out_user=false&fundingSource=paypal&buyerCountry=GE&locale.x=ru_RU&commit=true&client-metadata-id=uid_1b1e5328a5_mdc6ndi6mtg&token=56987717WA522615N&clientID=BAA3Re8fEw3bV7D3wMjtrdQGcpJn8KqIp0ROX3a35PTURhK2POvOmECPU8-Rnm4RKEmgJeJSKoP5f3JbDE&env=production&sdkMeta=eyJ1cmwiOiJodHRwczovL3d3dy5wYXlwYWwuY29tL3Nkay9qcz9jbGllbnQtaWQ9QkFBM1JlOGZFdzNiVjdEM3dNanRyZFFHY3BKbjhLcUlwMFJPWDNhMzVQVFVSaEsyUE92T21FQ1BVOC1Sbm00UktFbWdKZUpTS29QNWYzSmJERSZjdXJyZW5jeT1VU0QmbG9jYWxlPXJ1X1JVJmRpc2FibGUtZnVuZGluZz1jcmVkaXQlMkNwYXlsYXRlciUyQ2JhbmNvbnRhY3QlMkNibGlrJTJDZXBzJTJDZ2lyb3BheSUyQ2lkZWFsJTJDbWVyY2Fkb3BhZ28lMkNteWJhbmslMkNwMjQlMkNzZXBhJTJDc29mb3J0JTJDdmVubW8lMkNhcHBsZXBheSZ2YXVsdD10cnVlJmludGVudD1zdWJzY3JpcHRpb24mY29tcG9uZW50cz1idXR0b25zLGhvc3RlZC1maWVsZHMiLCJhdHRycyI6eyJkYXRhLXBhcnRuZXItYXR0cmlidXRpb24taWQiOiJBd2Vzb21lTW90aXZlX1NQX1BQQ1AiLCJkYXRhLXVpZCI6InVpZF9xYXNpdWx0bGxwbnZuaHZ6Ynp6Zmh0YmVpbXlwZmkifX0&country.x=RU&xcomponent=1&version=5.0.465',
  '20': 'https://www.paypal.com/checkoutnow?atomic-event-state=eyJkb21haW4iOiJzZGtfcGF5cGFsX3Y1IiwiZXZlbnRzIjpbXSwiaW50ZW50IjoiY2xpY2tfcGF5bWVudF9idXR0b24iLCJpbnRlbnRUeXBlIjoiY2xpY2siLCJpbnRlcmFjdGlvblN0YXJ0VGltZSI6MTQ3NzgxMjQuNzk5OTk5OTk3LCJ0aW1lU3RhbXAiOjE0Nzc4MTI1LCJ0aW1lT3JpZ2luIjoxNzMyNjkzMzM4ODQ4LjksInRhc2siOiJzZWxlY3Rfb25lX3RpbWVfY2hlY2tvdXQiLCJmbG93Ijoib25lLXRpbWUtY2hlY2tvdXQiLCJ1aVN0YXRlIjoid2FpdGluZyIsInBhdGgiOiIvc21hcnQvYnV0dG9ucyIsInZpZXdOYW1lIjoicGF5cGFsLXNkayJ9&sessionID=uid_1b1e5328a5_mdc6ndi6mtg&buttonSessionID=uid_ec70224b4e_mdc6ndi6mtg&stickinessID=uid_f22ff0a4db_mtq6mdg6mtc&smokeHash=&sign_out_user=false&fundingSource=paypal&buyerCountry=GE&locale.x=ru_RU&commit=true&client-metadata-id=uid_1b1e5328a5_mdc6ndi6mtg&token=1XT57900Y0937860Y&clientID=BAA3Re8fEw3bV7D3wMjtrdQGcpJn8KqIp0ROX3a35PTURhK2POvOmECPU8-Rnm4RKEmgJeJSKoP5f3JbDE&env=production&sdkMeta=eyJ1cmwiOiJodHRwczovL3d3dy5wYXlwYWwuY29tL3Nkay9qcz9jbGllbnQtaWQ9QkFBM1JlOGZFdzNiVjdEM3dNanRyZFFHY3BKbjhLcUlwMFJPWDNhMzVQVFVSaEsyUE92T21FQ1BVOC1Sbm00UktFbWdKZUpTS29QNWYzSmJERSZjdXJyZW5jeT1VU0QmbG9jYWxlPXJ1X1JVJmRpc2FibGUtZnVuZGluZz1jcmVkaXQlMkNwYXlsYXRlciUyQ2JhbmNvbnRhY3QlMkNibGlrJTJDZXBzJTJDZ2lyb3BheSUyQ2lkZWFsJTJDbWVyY2Fkb3BhZ28lMkNteWJhbmslMkNwMjQlMkNzZXBhJTJDc29mb3J0JTJDdmVubW8lMkNhcHBsZXBheSZ2YXVsdD10cnVlJmludGVudD1zdWJzY3JpcHRpb24mY29tcG9uZW50cz1idXR0b25zLGhvc3RlZC1maWVsZHMiLCJhdHRycyI6eyJkYXRhLXBhcnRuZXItYXR0cmlidXRpb24taWQiOiJBd2Vzb21lTW90aXZlX1NQX1BQQ1AiLCJkYXRhLXVpZCI6InVpZF9xYXNpdWx0bGxwbnZuaHZ6Ynp6Zmh0YmVpbXlwZmkifX0&country.x=RU&xcomponent=1&version=5.0.465',
  '30': 'YOUR_PAYPAL_LINK_30'
};

type PaymentMethod = 'card' | 'paypal' | 'crypto';

interface CryptoAddress {
  currency: string;
  network: string;
  address: string;
}

const cryptoAddresses: CryptoAddress[] = [
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
];

export function DonationFormWithCta({ 
  showCTA = false, 
  variant = 'default',
  formId
}: DonationFormProps) {
  const t = useTranslations('donationForm')
  const [amount, setAmount] = useState<string>('20')
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>('card')
  const [paypalLoaded, setPaypalLoaded] = useState(false)
  const [copiedAddress, setCopiedAddress] = useState<string | null>(null)

  useEffect(() => {
    if (paymentMethod === 'paypal' && !paypalLoaded) {
      const paypalButtonContainer = document.getElementById('paypal-button-container');
      if (paypalButtonContainer && (window as any).paypal) {
        (window as any).paypal.Buttons({
          style: {
            shape: 'pill',
            color: 'blue',
            layout: 'vertical',
            label: 'paypal'
          },
          createOrder: function(data: any, actions: any) {
            return actions.order.create({
              purchase_units: [{
                amount: {
                  value: amount
                }
              }]
            });
          },
          onApprove: function(data: any, actions: any) {
            return actions.order.capture().then(function(details: any) {
              analytics.trackDonation(parseInt(amount, 10), formId);
              // Handle successful payment here
            });
          }
        }).render('#paypal-button-container');
        setPaypalLoaded(true);
      }
    }
  }, [paymentMethod, amount, paypalLoaded, formId]);

  const handleAmountClick = (value: string) => {
    setAmount(value)
    analytics.trackDonationForm('Payment Option Click', `$${value}`, formId);
  }

  const handlePaymentMethodChange = (method: PaymentMethod) => {
    setPaymentMethod(method);
    analytics.trackDonationForm('Payment Method Change', method, formId);
  }

  const handleDonateClick = () => {
    if (paymentMethod === 'crypto') {
      return;
    }

    const numericAmount = parseInt(amount, 10);
    const links = paymentMethod === 'card' ? paymentLinks : paypalLinks;
    const paymentLink = links[amount as keyof typeof paymentLinks];

    if (!isNaN(numericAmount) && numericAmount > 0) {
      analytics.trackDonation(numericAmount, formId);
      
      if (paymentLink) {
        if (paymentMethod === 'paypal') {
          // Insert PayPal button/iframe here using the correct amount
          return;
        }
        window.location.href = paymentLink;
      } else {
        analytics.trackEvent('Error', 'Invalid Payment Link', `Amount: ${amount}`, undefined, { formId });
      }
    } else {
      analytics.trackEvent('Error', 'Invalid Amount', `Amount: ${amount}`, undefined, { formId });
    }
  }

  const handleCopyAddress = async (address: string) => {
    try {
      await navigator.clipboard.writeText(address);
      setCopiedAddress(address);
      setTimeout(() => setCopiedAddress(null), 2000);
      analytics.trackDonationForm('Crypto Address Copied', address, formId);
    } catch (err) {
      console.error('Failed to copy address:', err);
    }
  }

  const renderPaymentForm = () => {
    if (paymentMethod === 'crypto') {
      return (
        <div className="space-y-4 max-w-2xl mx-auto px-4">
          {cryptoAddresses.map((crypto) => (
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
          <PayPalButtons 
            style={{ 
              layout: "vertical",
              shape: "pill",
            }}
            createOrder={(data, actions) => {
              if (actions?.order) {
                return actions.order.create({
                  intent: "CAPTURE",
                  purchase_units: [{
                    amount: {
                      currency_code: "USD",
                      value: amount
                    }
                  }]
                });
              }
              throw new Error('PayPal actions not available');
            }}
            onApprove={(data, actions) => {
              if (actions?.order) {
                return actions.order.capture().then(function(details) {
                  if (details?.payer?.name?.given_name) {
                    analytics.trackDonation(parseInt(amount, 10), formId);
                    alert("Transaction completed by " + details.payer.name.given_name);
                  }
                });
              }
              throw new Error('PayPal actions not available');
            }}
          />
          <div className="mt-4">
            <button
              type="submit"
              className="w-full bg-[#0070ba] text-white hover:bg-[#003087] font-semibold py-8 rounded-full text-3xl transition duration-300"
            >
              {t('helpButton')}
            </button>
          </div>
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
          <div className="bg-white text-blue-600 rounded-lg md:border-none border-8 border-kovcheg max-h-[100svh] md:max-h-none overflow-y-auto">
            <div className="px-4 py-4 sm:px-6 sm:py-8 md:p-16">
              <div className="text-center max-w-3xl mx-auto">
                <h2 className="text-2xl sm:text-3xl md:text-5xl leading-tight font-semibold mb-2 sm:mb-3 md:mb-4">
                  {t('title')}
                </h2>
                <p className="mb-2 sm:mb-4 md:mb-6 text-base">
                  {t('description.text')}
                </p>
                {paymentMethod !== 'crypto' && (
                  <p className="text-base md:text-xl mb-2 sm:mb-3 md:mb-4">{t('monthlySupport')}</p>
                )}
              </div>
              
              <div className="flex justify-center mb-2 sm:mb-4 md:mb-6 border-b border-blue-600/20">
                <button
                  onClick={() => setPaymentMethod('card')}
                  className={`px-3 sm:px-4 md:px-6 py-2 md:py-3 text-[15px] sm:text-base md:text-lg font-medium transition-colors relative ${
                    paymentMethod === 'card' 
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
              
              <form onSubmit={(e) => { 
                e.preventDefault(); 
                if (paymentMethod !== 'crypto') {
                  handleDonateClick();
                }
              }} className="space-y-2 sm:space-y-4 md:space-y-6 mb-2 sm:mb-4 md:mb-8">
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
