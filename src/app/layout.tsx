import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";

const metadata: Record<string, Metadata> = {
  en: {
    title: "KOVCHEG",
    description: "Help people with an anti‑war stance. Kovcheg is the largest project helping Russians with an anti‑war stance in emigration and inside the country",
    icons: {
      icon: '/favicon.png',
    },
  },
  ru: {
    title: "КОВЧЕГ",
    description: "Помогите людям с антивоенной позицией. Ковчег — самый большой проект, который помогает россиянам с антивоенной позицией в эмиграции и внутри страны",
    icons: {
      icon: '/favicon.png',
    },
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Default to Russian metadata
  const currentMetadata = metadata.ru;

  const gtmId = "Your GTM ID";

  return (
    <html lang="ru" suppressHydrationWarning className="dark">
      <head>
        <title>{currentMetadata.title}</title>
        <meta name="description" content={currentMetadata.description} />
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
      <body className="antialiased">
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
