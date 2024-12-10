declare global {
	interface Window {
		dataLayer: Array<{
			event: string;
			[key: string]: string | number | boolean;
		  }>;
		analyticsQueue: Array<{
			event: string;
			params: Record<string, string | number | boolean>;
		}>;
	}
  }
  
type EventParams = Record<string, string | number | boolean>;

// Add payment method types
type PaymentMethod = 'stripe' | 'paypal' | 'crypto';

class Analytics {
  private queue: Array<{event: string; params: EventParams}> = [];
  private isInitialized = false;

  constructor() {
    if (typeof window !== 'undefined') {
      window.analyticsQueue = this.queue;
      this.initializeWhenReady();
    }
  }

  private initializeWhenReady() {
    if (document.readyState === 'complete') {
      this.processQueue();
    } else {
      window.addEventListener('load', () => {
        setTimeout(() => this.processQueue(), 2000);
      });
    }
  }

  private processQueue() {
    this.isInitialized = true;
    while (this.queue.length > 0) {
      const item = this.queue.shift();
      if (item) {
        this.pushToDataLayer(item.event, item.params);
      }
    }
  }

  private pushToDataLayer(event: string, params: EventParams) {
    if (!this.isInitialized) {
      this.queue.push({ event, params });
      return;
    }

    if (typeof window !== 'undefined' && window.dataLayer) {
      window.dataLayer.push({
        event,
        ...params,
      });
    }
  }

  /**
   * Tracks a custom event by pushing it to the dataLayer.
   * @param category - The event category (e.g., 'Donation Form').
   * @param action - The event action (e.g., 'Donate Button Click').
   * @param label - Optional event label (e.g., '$20').
   * @param value - Optional event value (e.g., 20).
   * @param additionalParams - Additional parameters to include.
   */
  trackEvent(
    category: string,
    action: string,
    label?: string,
    value?: number,
    additionalParams?: EventParams
  ) {
    const eventParams: EventParams = {
      event_category: category,
      event_action: action,
      event_label: label ?? '',
    };

    // Include event_value only if it is a valid positive number
    if (typeof value === 'number' && !isNaN(value) && value > 0) {
      eventParams.event_value = value;
    }

    // Merge additionalParams, ensuring no undefined values are introduced
    if (additionalParams) {
      for (const key in additionalParams) {
        const paramValue = additionalParams[key];
        if (paramValue !== undefined) {
          eventParams[key] = paramValue;
        }
      }
    }

    this.pushToDataLayer('custom_event', eventParams);
  }

  /**
   * Tracks navigation events.
   * @param action - The navigation action.
   * @param label - The label for the action.
   */
  trackNavigation(action: string, label: string) {
    this.trackEvent('Navigation', action, label);
  }

  /**
   * Tracks interactions with the hero section.
   * @param action - The action performed.
   */
  trackHero(action: string) {
    this.trackEvent('Hero', action);
  }

  
  /**
   * Tracks interactions with the donation form.
   * @param action - The action performed
   * @param label - Event label
   * @param formId - Form identifier
   * @param params - Additional parameters
   */
  trackDonationForm(
    action: string,
    label: string,
    formId: string,
    params?: {
      donationAmount?: number;
      paymentMethod?: PaymentMethod;
    }
  ) {
    // Convert navigation clicks to proper event name
    const eventAction = action === 'Donate Button Click' 
      ? 'Donation Form Navigation'  // For nav/hero/final-cta clicks
      : action === 'Payment Method Select' 
        ? 'Donation Initiate'       // For actual donation starts
        : action;

    const eventParams: EventParams = {
      form_id: formId,
      ...(params?.paymentMethod && { payment_method: params.paymentMethod }),
      ...(params?.donationAmount && { donation_amount: params.donationAmount })
    };

    this.trackEvent(
      'Donation Form',
      eventAction,
      label,
      params?.donationAmount,
      eventParams
    );
  }

  /**
   * Tracks crypto donation initiations
   */
  trackCryptoDonation(
    currency: string,
    formId: string,
    amount?: number
  ) {
    this.trackEvent(
      'Donation Form',
      'Donation Initiate',
      'crypto_copy',
      amount,
      {
        form_id: formId,
        payment_method: 'crypto',
        crypto_currency: currency
      }
    );
  }

  /**
   * Tracks successful donations with payment method
   */
  trackDonationSuccess(
    amount: number,
    formId: string,
    paymentMethod: PaymentMethod
  ) {
    this.trackEvent(
      'Donation Form',
      'Donation Success',
      paymentMethod,
      amount,
      {
        form_id: formId,
        payment_method: paymentMethod,
        donation_amount: amount
      }
    );
  }

  /**
   * Tracks footer interactions.
   * @param action - The action performed.
   * @param label - The label for the event.
   */
  trackFooter(action: string, label: string) {
    this.trackEvent('Footer', action, label);
  }

  /**
   * Tracks virtual page views.
   * @param path - The path of the page.
   */
  trackPageView(path: string) {
    this.pushToDataLayer('virtual_page_view', { page_path: path });
  }

  /**
   * Tracks successful donations.
   * @param amount - The donation amount.
   * @param formId - The identifier of the form.
   */
  trackDonation(amount: number, formId: string) {
    this.pushToDataLayer('donation', { donation_amount: amount, formId });
  }

  /**
   * Tracks interactions with the About Us section.
   * @param action - The action performed.
   */
  trackAboutUs(action: string) {
    this.trackEvent('About Us', action);
  }

  /**
   * Tracks Monobank donation link interactions
   * @param action - The action performed
   * @param formId - The identifier of the form
   */
  trackMonobank(action: string, formId: string) {
    this.trackEvent('Monobank Donation', action, undefined, undefined, {
      formId,
      donation_type: 'single_payment',
      payment_method: 'monobank'
    });
  }
}

export const analytics = new Analytics();
