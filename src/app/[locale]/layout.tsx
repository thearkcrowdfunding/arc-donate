import { NonprofitNavComponent } from '@/components/nonprofit-nav'
import { NextIntlClientProvider } from 'next-intl';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import '@/app/globals.css';
import { VideoProvider } from '@/contexts/video-context';
import { setRequestLocale } from 'next-intl/server';
import type { Metadata } from "next";

type Locale = 'en' | 'ru';

const metadata: Record<string, Metadata> = {
  en: {
    title: "KOVCHEG",
    description: "Help people with an anti‑war stance. Kovcheg is the largest project helping Russians with an anti‑war stance in emigration and inside the country",
  },
  ru: {
    title: "КОВЧЕГ",
    description: "Помогите людям с антивоенной позицией. Ковчег — самый большой проект, который помогает россиянам с антивоенной позицией в эмиграции и внутри страны",
  }
};

export function generateMetadata({ params: { locale } }: { params: { locale: string } }): Metadata {
  return metadata[locale as keyof typeof metadata] || metadata.ru;
}

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
    <html lang={locale}>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <VideoProvider>
            <NonprofitNavComponent />
            <main className="font-sans">
              {children}
            </main>
          </VideoProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}
