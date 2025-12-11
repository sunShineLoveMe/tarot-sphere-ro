import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { articles } from "@/lib/blog/articles"
import BlogDetailClient from "./blog-detail-client"

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.tarotromania.com"

export async function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug,
  }))
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const article = articles.find((a) => a.slug === params.slug)

  if (!article) {
    return {}
  }

  // Default to English metadata for server-side generation
  const translation = article.translations.en

  return {
    title: translation.title,
    description: translation.description,
    keywords: translation.keywords,
    authors: [{ name: "Love Tarot Romania" }],
    openGraph: {
      title: translation.title,
      description: translation.description,
      url: `${siteUrl}/blog/${article.slug}`,
      siteName: "Love Tarot Romania",
      images: [{ url: "/og-default.png", width: 1200, height: 630 }],
      type: "article",
      publishedTime: article.publishedAt,
    },
    alternates: {
      canonical: `${siteUrl}/blog/${article.slug}`,
      languages: {
        en: `${siteUrl}/blog/${article.slug}`,
        ro: `${siteUrl}/ro/blog/${article.slug}`, // Assuming client-side routing handles this URL structure
        "zh-CN": `${siteUrl}/zh/blog/${article.slug}`,
      },
    },
  }
}

export default function BlogDetailPage({ params }: { params: { slug: string } }) {
  const article = articles.find((a) => a.slug === params.slug)

  if (!article) {
    notFound()
  }

  return <BlogDetailClient slug={params.slug} />
}
