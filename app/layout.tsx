import type React from "react"
import type { Metadata, Viewport } from "next"
import { Cinzel, Geist } from "next/font/google"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _cinzel = Cinzel({ subsets: ["latin"], weight: ["400", "600", "700"] })

export const metadata: Metadata = {
  title: "AI Love Tarot – Honest Guidance for Your Heart",
  description:
    "A modern, AI-powered tarot reading experience for love and relationships. Reflective, empowering, and designed with psychological insight.",
  keywords: ["tarot", "love tarot", "AI tarot", "relationship guidance", "self-reflection", "塔罗牌", "爱情塔罗"],
  authors: [{ name: "AI Love Tarot" }],
  creator: "AI Love Tarot",
  openGraph: {
    title: "AI Love Tarot – Honest Guidance for Your Heart",
    description: "Discover honest guidance for your heart with our AI-powered love tarot reading experience.",
    type: "website",
    locale: "en_US",
    alternateLocale: "zh_CN",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Love Tarot",
    description: "Modern, AI-powered love tarot for self-reflection and relationship insights.",
  },
  robots: {
    index: true,
    follow: true,
  },
  generator: "v0.app",
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
}

export const viewport: Viewport = {
  themeColor: "#0a0a1a",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="alternate" hrefLang="en" href="https://ailovetatot.com/en" />
        <link rel="alternate" hrefLang="zh" href="https://ailovetatot.com/zh" />
        <link rel="alternate" hrefLang="x-default" href="https://ailovetatot.com" />
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
