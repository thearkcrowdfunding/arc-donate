import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Помоги защитить людей от преслeдований",
  description: "Каждый день антивоенные россияне сталкиваются с арестами, депортациями, угрозой тюрьмы и преследованиями. Бесплатная юридическая помощь даёт шанс сохранить свободу и продолжать жить.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-5BQJ8VFLE2"
        strategy="afterInteractive"
      />
      <Script id="ga-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-5BQJ8VFLE2');
        `}
      </Script>
    </html>
  );
}
