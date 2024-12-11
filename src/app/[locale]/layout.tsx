import { NonprofitNavComponent } from '@/components/nonprofit-nav'
import { NextIntlClientProvider } from 'next-intl';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import { VideoProvider } from '@/contexts/video-context';
import { setRequestLocale } from 'next-intl/server';
import Head from 'next/head';

type Locale = 'en' | 'ru';

export default async function LocaleLayout({
  children,
  params: { locale }
}: {
  children: React.ReactNode;
  params: { locale: Locale };
}) {
  setRequestLocale(locale);

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
    <>
      <Head>
        <link rel="preload" href="/fonts/HovesRegular.woff2" as="font" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/HovesMedium.woff2" as="font" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/HovesDemiBold.woff2" as="font" crossOrigin="anonymous" />
      </Head>
      <NextIntlClientProvider locale={locale} messages={messages}>
        <VideoProvider>
          <NonprofitNavComponent />
          <main className="font-sans">
            {children}
          </main>
        </VideoProvider>
      </NextIntlClientProvider>
    </>
  );
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}
