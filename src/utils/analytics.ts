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
type DonationFormParams = {
  donationAmount?: number;
  paymentMethod?: PaymentMethod;
};

class Analytics {
  private queue: Array<{event: string; params: EventParams}> = [];
  private isInitialized = false;
  private maxRetries = 3;
  private retryDelay = 1000;

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

  private async pushToDataLayer(event: string, params: EventParams, retryCount = 0) {
    if (!this.isInitialized) {
      this.queue.push({ event, params });
      return;
    }

    if (typeof window === 'undefined' || !window.dataLayer) {
      return;
    }

    try {
      window.dataLayer.push({
        event,
        ...params,
      });
    } catch (error) {
      console.warn(`Analytics push failed:`, error);
      if (retryCount < this.maxRetries) {
        setTimeout(() => {
          this.pushToDataLayer(event, params, retryCount + 1);
        }, this.retryDelay * Math.pow(2, retryCount));
      }
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
    try {
      const eventParams: EventParams = {
        event_category: category,
        event_action: action,
        event_label: label ?? '',
      };

      if (typeof value === 'number' && !isNaN(value) && value > 0) {
        eventParams.event_value = value;
      }

      if (additionalParams) {
        Object.entries(additionalParams).forEach(([key, value]) => {
          if (value !== undefined) {
            eventParams[key] = value;
          }
        });
      }

      this.pushToDataLayer('custom_event', eventParams);
    } catch (error) {
      console.warn('Failed to track event:', { category, action, error });
    }
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
    params?: DonationFormParams
  ) {
    const eventParams: EventParams = {
      form_id: formId,
      ...(params?.paymentMethod && { payment_method: params.paymentMethod }),
      ...(params?.donationAmount && { donation_amount: params.donationAmount })
    };

    this.trackEvent(
      'Donation Form',
      action,
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
