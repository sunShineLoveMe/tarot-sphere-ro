import type { Metadata } from "next"
import BlogIndexClient from "./blog-index-client"

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.tarotromania.com"

export const metadata: Metadata = {
  title: "Blog | Love Tarot Romania",
  description:
    "Explore insightful articles about love tarot readings, relationship guidance, and emotional wisdom. Available in English, Romanian, and Chinese.",
  keywords: [
    "love tarot blog",
    "tarot reading articles",
    "relationship guidance",
    "Romania tarot",
    "tarot reading 2025",
  ],
  openGraph: {
    title: "Love Tarot Blog – Insights for Your Heart",
    description: "Explore insightful articles about love tarot readings, relationship guidance, and emotional wisdom.",
    url: `${siteUrl}/blog`,
    siteName: "Love Tarot Romania",
    images: [{ url: "/og-default.png", width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Love Tarot Blog",
    description: "Insightful articles about love tarot and relationship guidance.",
    images: ["/og-default.png"],
  },
  alternates: {
    canonical: `${siteUrl}/blog`,
    languages: {
      en: `${siteUrl}/blog`,
      ro: `${siteUrl}/blog`,
      "zh-CN": `${siteUrl}/blog`,
    },
  },
}

export default function BlogPage() {
  return <BlogIndexClient />
}
