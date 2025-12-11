import type React from "react"
import type { Metadata, Viewport } from "next"
import { Cinzel, Geist } from "next/font/google"
import Script from "next/script"
import { I18nProvider } from "@/lib/i18n/context"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _cinzel = Cinzel({ subsets: ["latin"], weight: ["400", "600", "700"] })

// Base URL for the site
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.tarotromania.com"

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Love Tarot – Honest Guidance for Your Heart",
    template: "%s | Love Tarot",
  },
  description:
    "Insightful tarot readings to help you reflect on love and relationships. Rooted in timeless wisdom, designed for thoughtful self-reflection.",
  keywords: [
    "tarot",
    "love tarot",
    "tarot reading",
    "relationship guidance",
    "self-reflection",
    "tarot romania",
    "tarot online",
    "塔罗牌",
    "爱情塔罗",
  ],
  authors: [{ name: "Love Tarot Romania" }],
  creator: "Love Tarot Romania",
  publisher: "Love Tarot Romania",
  
  // Open Graph
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: ["ro_RO", "zh_CN"],
    url: siteUrl,
    siteName: "Love Tarot Romania",
    title: "Love Tarot – Honest Guidance for Your Heart",
    description: "Insightful tarot readings to discover honest guidance for your heart. Rooted in ancient tarot wisdom for love and relationship reflection.",
    images: [
      {
        url: "/og-default.png",
        width: 1200,
        height: 630,
        alt: "Love Tarot - Guided by Ancient Tarot Wisdom",
        type: "image/png",
      },
    ],
  },
  
  // Twitter Card
  twitter: {
    card: "summary_large_image",
    site: "@lovetarot",
    creator: "@lovetarot",
    title: "Love Tarot – Honest Guidance for Your Heart",
    description: "Insightful tarot readings for self-reflection and relationship guidance. Rooted in timeless tarot wisdom.",
    images: ["/og-default.png"],
  },
  
  // Robots
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  
  // Icons
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
  
  // Other
  manifest: "/manifest.json",
  category: "entertainment",
  generator: 'v0.app',
  
  // Google AdSense verification
  other: {
    "google-adsense-account": "ca-pub-7394339745662137",
  },
}

export const viewport: Viewport = {
  themeColor: "#0a0a1a",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  colorScheme: "dark",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        {/* Google Analytics 4 (GA4) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-0RR2QD3HWG"
          strategy="afterInteractive"
        />
        <Script id="ga4-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-0RR2QD3HWG');
          `}
        </Script>
        <link rel="alternate" hrefLang="en" href={`${siteUrl}/en`} />
        <link rel="alternate" hrefLang="ro" href={`${siteUrl}/ro`} />
        <link rel="alternate" hrefLang="zh" href={`${siteUrl}/zh`} />
        <link rel="alternate" hrefLang="x-default" href={siteUrl} />
        <link rel="canonical" href={siteUrl} />
      </head>
      <body className="font-sans antialiased">
        <I18nProvider>{children}</I18nProvider>
      </body>
    </html>
  )
}
