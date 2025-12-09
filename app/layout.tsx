import type React from "react"
import type { Metadata, Viewport } from "next"
import { Cinzel, Geist } from "next/font/google"
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
    "A modern tarot experience enriched with AI insight for love and relationships. Reflective, empowering, and designed with psychological insight.",
  keywords: [
    "tarot",
    "love tarot",
    "AI tarot",
    "relationship guidance",
    "self-reflection",
    "tarot romania",
    "tarot reading",
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
    description: "A modern tarot experience enriched with AI insight. Discover honest guidance for your heart through the ancient wisdom of tarot.",
    images: [
      {
        url: "/og-default.png",
        width: 1200,
        height: 630,
        alt: "Love Tarot - AI-Powered Tarot Reading",
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
    description: "A modern tarot experience enriched with AI insight for self-reflection and relationship insights.",
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
    generator: 'v0.app'
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
        <link rel="alternate" hrefLang="en" href={`${siteUrl}/en`} />
        <link rel="alternate" hrefLang="ro" href={`${siteUrl}/ro`} />
        <link rel="alternate" hrefLang="zh" href={`${siteUrl}/zh`} />
        <link rel="alternate" hrefLang="x-default" href={siteUrl} />
        <link rel="canonical" href={siteUrl} />
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
