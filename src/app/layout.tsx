import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";
import { headers } from 'next/headers';

export async function generateMetadata(): Promise<Metadata> {
  const headersList = headers();
  const locale = headersList.get('x-next-intl-locale') || 'ru';
  const messages = (await import(`../../messages/${locale}.json`)).default;

  return {
    metadataBase: new URL('https://donate.kovcheg.live'),
    title: messages.metadata.title,
    description: messages.metadata.description,
    openGraph: {
      title: messages.metadata.title,
      description: messages.metadata.description,
      images: [
        {
          url: '/images/og/og-image.jpg',
          width: 1200,
          height: 630,
          alt: messages.metadata.title,
        },
      ],
      locale: locale,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: messages.metadata.title,
      description: messages.metadata.description,
      images: ['/images/og/og-image.jpg'],
    },
    icons: {
      icon: '/favicon.png',
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const gtmId = "GTM-TQMSQ3C8";
  const headersList = headers();
  const locale = headersList.get('x-next-intl-locale') || 'ru';

  return (
    <html lang={locale} suppressHydrationWarning className="dark">
      <head>
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','${gtmId}');
            `,
          }}
        />
      </head>
      <body className="antialiased font-[400]">
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        {children}
      </body>
    </html>
  );
}
