/* eslint-disable  @typescript-eslint/no-explicit-any */
'use client'

import { useSearchParams } from "next/navigation";
import { JSX, useEffect, useState } from 'react';
import './index.css';

const CopyIcon = () => {
    return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ><rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path></svg>
}

const SuccessIcon = () => {
    return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ><path d="M20 6 9 17l-5-5"></path></svg>
}

declare global {
    interface Window {
        gtag: (...args: any[]) => void;
    }
}

export { };


declare global {
    interface Window {
        dataLayer: Record<string, any>[];
    }
}

export { };


const CryptoAddressItem = ({ network, address }: { network: string, address: string }) => {
    const [isCopied, setCopied] = useState(false);

    const handleCopy = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        navigator.clipboard.writeText(address).then(() => {
            setCopied(true);
        })
        reportCopyCrypto();
    }

    const reportCopyCrypto = () => {
        try {
            window.gtag && window.gtag('event', 'crypto_copy_button_click');
            console.log("crypto_copy_button_click");
        } catch (e) {
            console.log(e);
        }
    }

    useEffect(() => {
        if (isCopied) {
            setTimeout(() => {
                setCopied(false);
            }, 5000)
        }
    }, [isCopied])

    return <div className='crypto-address'>
        <div>
            <div className='network'>{network}</div>
            <div className='address'>{address}</div>
        </div>
        <button className='copy-button' onClick={handleCopy}>
            {isCopied ? <SuccessIcon /> : <CopyIcon />}
        </button>
    </div>
}

export default function DonationForm({ id, title, idx }: {
    id: string, title: JSX.Element, idx: string
}) {

    const searchParams = useSearchParams();

    const [paymentMethod, setPaymentMethod] = useState<'stripe' | 'paypal' | 'crypto'>('stripe');
    const [isRecurrent, setReccurent] = useState(true);
    const [subscriptionAmount, setSubscriptionAmount] = useState<15 | 20 | 30>(20);
    const [donationAmount, setDonationAmount] = useState<20 | 50 | 100>(50);
    const [clientId, setClientId] = useState<string | null>(null);

    const getUserParameters = () => {
        const utms = {
            utm_source: searchParams.get("utm_source"),
            utm_medium: searchParams.get("utm_medium"),
            utm_campaign: searchParams.get("utm_campaign"),
            utm_term: searchParams.get("utm_term"),
            utm_content: searchParams.get("utm_content"),
        };
        console.log({ utms });
        return utms
    }

    const STRIPE_SUBSCRIPTION_LINKS = {
        15: 'https://pay.kovcheg.live/b/bIY7uMdwp2Vb5NeaEE',
        20: 'https://pay.kovcheg.live/b/bIYcP67819jzb7y4gh',
        30: 'https://pay.kovcheg.live/b/4gw2as2RL67n0sU002'
    }

    const STRIPE_ONE_TIME_DONATION_LINKS = {
        20: "https://pay.kovcheg.live/b/6oEcP68c5eDT1wY6ow",
        50: "https://pay.kovcheg.live/b/aEU7uMgIB9jz7VmbIR",
        100: "https://pay.kovcheg.live/b/9AQ6qI1NHdzP5Ne8wG"
    }

    const PAYPAL_SUBSCRIPTION_LINKS = {
        15: 'https://www.paypal.com/webapps/billing/plans/subscribe?plan_id=P-60L38257PV6342114M6MRVUQ',
        20: 'https://www.paypal.com/webapps/billing/plans/subscribe?plan_id=P-7FF292585V2221223M6MRTWY',
        30: 'https://www.paypal.com/webapps/billing/plans/subscribe?plan_id=P-06L04058VW619271DM6MRTBI',
    };

    const PAYPAL_ONE_TIME_PAYMENT_LINKS = {
        20: "https://www.paypal.com/donate/?hosted_button_id=9Z6EGRDP9YPL8",
        50: "https://www.paypal.com/donate/?hosted_button_id=A5ZGDUEKEHWMC",
        100: "https://www.paypal.com/donate/?hosted_button_id=B63V7TT4YDHPE"
    }

    useEffect(() => {
        const interval = setInterval(() => {
            if (typeof window !== "undefined" && typeof window.gtag === "function") {
                try {
                    window.gtag(
                        "get",
                        "G-5BQJ8VFLE2",
                        "client_id",
                        (clientId: string) => {
                            setClientId(clientId);
                            console.log("Component is ready");
                            clearInterval(interval);
                        }
                    );
                } catch (e) {
                    console.warn("gtag not ready yet", e);
                }
            }
        }, 200);

        return () => clearInterval(interval);
    }, []);


    const reportDonationInitiate = () => {
        try {
            window.gtag && window.gtag('event', 'start_donation_button_click', {
                form_number: idx
            });
            console.log("start_donation_button_click");
        } catch (e) {
            console.log(e);
        }
    }


    const handleDonateClick = (event: any) => {
        event.preventDefault();
        if (paymentMethod === 'crypto') {
            return;
        }

        reportDonationInitiate();

        if (paymentMethod === 'stripe') {
            const url = getStripeDonationPaymentURL();
            window.location.href = url;
        }

        if (paymentMethod === 'paypal') {
            const url = getPaypalDonationURL();
            window.location.href = url;
        }
    }

    const getPaypalDonationURL = (): string => {
        const baseURL = isRecurrent ? PAYPAL_SUBSCRIPTION_LINKS[subscriptionAmount] : PAYPAL_ONE_TIME_PAYMENT_LINKS[donationAmount]
        const stripePaymentURL = new URL(baseURL);

        const utms = getUserParameters();
        if (utms.utm_campaign) {
            stripePaymentURL.searchParams.set("utm_campaign", utms.utm_campaign)
        }
        if (utms.utm_content) {
            stripePaymentURL.searchParams.set("utm_content", utms.utm_content)
        }
        if (utms.utm_medium) {
            stripePaymentURL.searchParams.set("utm_medium", utms.utm_medium)
        }
        if (utms.utm_source) {
            stripePaymentURL.searchParams.set("utm_source", utms.utm_source)
        }
        if (utms.utm_term) {
            stripePaymentURL.searchParams.set("utm_term", utms.utm_term)
        }
        console.log("Successfully created payment link", { paymentLink: stripePaymentURL.toString() });
        return stripePaymentURL.toString();
    }

    const getStripeDonationPaymentURL = (): string => {
        const baseURL = isRecurrent ? STRIPE_SUBSCRIPTION_LINKS[subscriptionAmount] : STRIPE_ONE_TIME_DONATION_LINKS[donationAmount]
        const stripePaymentURL = new URL(baseURL);

        if (clientId) {
            const cleanClientId = clientId.replaceAll(".", "_");
            stripePaymentURL.searchParams.set("client_reference_id", cleanClientId);
        } else {
            console.log("gtag is not available at the moment, skipping client_reference_id");
        }

        const utms = getUserParameters();
        if (utms.utm_campaign) {
            stripePaymentURL.searchParams.set("utm_campaign", utms.utm_campaign)
        }
        if (utms.utm_content) {
            stripePaymentURL.searchParams.set("utm_content", utms.utm_content)
        }
        if (utms.utm_medium) {
            stripePaymentURL.searchParams.set("utm_medium", utms.utm_medium)
        }
        if (utms.utm_source) {
            stripePaymentURL.searchParams.set("utm_source", utms.utm_source)
        }
        if (utms.utm_term) {
            stripePaymentURL.searchParams.set("utm_term", utms.utm_term)
        }
        console.log("Successfully created payment link", { paymentLink: stripePaymentURL.toString() });
        return stripePaymentURL.toString();
    }


    return (
        <div className="donation-form-container" id={id}>
            <div className="donation-form-content">
                <div className='donation-form-info'>
                    <h2>{title}</h2>
                    <p>Это вклад в наше общее будущее</p>
                    {(paymentMethod === 'stripe' || paymentMethod === 'paypal') && <p>Подпишитесь на {isRecurrent ? <b>ежемесячные</b> : <u style={{ cursor: 'pointer' }} onClick={() => setReccurent(true)}>ежемесячные</u>}  или {!isRecurrent ? <b>разовые</b> : <u style={{ cursor: 'pointer' }} onClick={() => setReccurent(false)}>разовые</u>} пожертвования</p>}
                </div>
                <div className='donation-form-action-block'>
                    <div className='donation-form-method-selector-container'>
                        <button onClick={() => setPaymentMethod('stripe')} className={paymentMethod === 'stripe' ? 'selected' : ''}>Банковская карта</button>
                        <button onClick={() => setPaymentMethod('paypal')} className={paymentMethod === 'paypal' ? 'selected' : ''}>PayPal</button>
                        <button onClick={() => setPaymentMethod('crypto')} className={paymentMethod === 'crypto' ? 'selected' : ''}>Крипто</button>
                    </div>
                    {paymentMethod === 'crypto' && <div className='crypto-container'>
                        <CryptoAddressItem network='USDT (ERC-20)' address='0x593c93cDF0076541ffe9cA2CDEF035f9FB8ae3a8' />
                        <CryptoAddressItem network='USDC (ERC-20)' address='0x593c93cDF0076541ffe9cA2CDEF035f9FB8ae3a8' />
                        <CryptoAddressItem network='USDT (TRC-20)' address='TDWsHaZcsifiBypNJDKNrQf7vmhZ9LtXko' />
                        <CryptoAddressItem network='BTC' address='bc1qnxmjjj23e5u6y8slhl9wss74t3wep6tke2nc60' />
                        <CryptoAddressItem network='ETH (ERC-20)' address='0xBf178F99b8790db1BD2194D80c3a268AE4AcE804' />
                    </div>}
                    {(paymentMethod === 'stripe' || paymentMethod === 'paypal') && isRecurrent &&
                        <>
                            <div className='donation-form-amount-selector-container'>
                                <button className={subscriptionAmount === 15 ? 'selected' : ""} onClick={() => setSubscriptionAmount(15)}>$15</button>
                                <button className={subscriptionAmount === 20 ? 'selected' : ""} onClick={() => setSubscriptionAmount(20)}>$20</button>
                                <button className={subscriptionAmount === 30 ? 'selected' : ""} onClick={() => setSubscriptionAmount(30)}>$30</button>
                            </div>
                            <button className='help-button' onClick={handleDonateClick}>Помочь!</button>
                        </>
                    }
                    {(paymentMethod === 'stripe' || paymentMethod === 'paypal') && !isRecurrent &&
                        <>
                            <div className='donation-form-amount-selector-container'>
                                <button className={donationAmount === 20 ? 'selected' : ""} onClick={() => setDonationAmount(20)}>$20</button>
                                <button className={donationAmount === 50 ? 'selected' : ""} onClick={() => setDonationAmount(50)}>$50</button>
                                <button className={donationAmount === 100 ? 'selected' : ""} onClick={() => setDonationAmount(100)}>$100</button>
                            </div>
                            <button className='help-button' onClick={handleDonateClick}>Помочь!</button>
                        </>
                    }
                </div>
                {(paymentMethod === 'stripe' || paymentMethod === 'paypal') && <>
                    <div className='donation-form-legal'>
                        Нажимая на кнопку, вы принимаете условия <a href="https://kovcheg.live/policy/?_gl=1*1wsweb7*_ga*MTk4NTU0MDE0LjE3NTY1NTM2NTY.*_ga_5BQJ8VFLE2*czE3NjA4OTI4NDUkbzEyJGcwJHQxNzYwODkyODQ1JGo2MCRsMCRoODIwNTM4Njc." target="_blank">Пользовательского соглашения</a> и <a href="https://kovcheg.live/agreement/" target="_blank">Соглашения о пожертвовании</a>
                    </div>
                </>}
            </div>
        </div>
    )
}