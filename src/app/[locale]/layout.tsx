import { NonprofitNavComponent } from '@/components/nonprofit-nav'
import { NextIntlClientProvider } from 'next-intl';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import '@/app/globals.css';
import { VideoProvider } from '@/contexts/video-context';
import { PayPalProvider } from '@/components/paypal-provider';

type Locale = 'en' | 'ru';

export default async function LocaleLayout({
  children,
  params: { locale }
}: {
  children: React.ReactNode;
  params: { locale: Locale };
}) {
  if (!routing.locales.includes(locale)) {
    notFound();
  }

  let messages;
  try {
    messages = (await import(`../../../messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <VideoProvider>
            <PayPalProvider>
              <NonprofitNavComponent />
              <main className="pt-8 font-sans">
                {children}
              </main>
            </PayPalProvider>
          </VideoProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}
