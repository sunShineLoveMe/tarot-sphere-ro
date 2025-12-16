"use client"

import MagicBackground from "@/components/magic-background"
import Header from "@/components/header"
import { LogoIcon } from "@/components/logo-icon"
import Link from "next/link"
import { useI18n } from "@/lib/i18n/context"
import { Calendar, Clock, ArrowLeft } from "lucide-react"
import { articles } from "@/lib/blog/articles"
import { notFound } from "next/navigation"
import { BlogArticleLayout } from "@/components/blog/blog-article-layout"

// i18n labels for the blog detail page
const blogLabels = {
  en: {
    back: "Back to Blog",
    published: "Published on",
    readTime: "min read",
    share: "Share this article",
    startReading: "Start Reading",
    enjoyed: "Enjoyed this article? Start your tarot journey.",
  },
  ro: {
    back: "Înapoi la Blog",
    published: "Publicat pe",
    readTime: "min citire",
    share: "Distribuie acest articol",
    startReading: "Începe Citirea",
    enjoyed: "Ți-a plăcut acest articol? Începe călătoria ta în tarot.",
  },
  zh: {
    back: "返回博客",
    published: "发布于",
    readTime: "分钟阅读",
    share: "分享文章",
    startReading: "开始解读",
    enjoyed: "喜欢这篇文章吗？开始你的塔罗之旅吧。",
  },
}

export default function BlogDetailClient({ slug }: { slug: string }) {
  const { locale } = useI18n()
  const lang = (locale || "en") as "en" | "ro" | "zh"
  const labels = blogLabels[lang] || blogLabels.en

  // Find article
  const article = articles.find((a) => a.slug === slug)

  if (!article) {
    notFound()
  }

  const translation = article.translations[lang] || article.translations.en

  // Format date based on locale
  const formattedDate = new Date(article.publishedAt).toLocaleDateString(
    lang === "ro" ? "ro-RO" : lang === "zh" ? "zh-CN" : "en-US",
    { year: "numeric", month: "long", day: "numeric" },
  )

  return (
    <div className="relative min-h-screen">
      <MagicBackground />
      <Header />

      <main className="relative pt-24 pb-4 px-4">
        {/* Article Container */}
        <article className="max-w-3xl mx-auto relative">
          {/* Back Link */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-foreground/50 hover:text-[#73F2FF] transition-colors mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            {labels.back}
          </Link>

          {/* Header - Centered */}
          <header className="text-center mb-12">
            <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-foreground/50 mb-6">
              <span className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                {formattedDate}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {article.readingTime} {labels.readTime}
              </span>
            </div>

            {/* H1 - Large Gradient Title */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#FF4FD8] to-[#73F2FF] mb-6 leading-tight px-4">
              {translation.title}
            </h1>

            {/* Subtitle / Description */}
            <p className="text-lg sm:text-xl text-foreground/70 leading-relaxed max-w-2xl mx-auto px-4">
              {translation.description}
            </p>
          </header>

          {/* Content - Using BlogArticleLayout for consistent styling */}
          <BlogArticleLayout>{translation.content}</BlogArticleLayout>

          {/* Footer / CTA */}
          <div className="mt-12 pt-8 border-t border-[#FF4FD8]/20 text-center max-w-2xl mx-auto">
            <p className="text-foreground/60 mb-6">{labels.enjoyed}</p>
            <Link
              href="/intake"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-full font-medium text-white transition-transform hover:scale-105"
              style={{
                background: "linear-gradient(135deg, #FF4FD8 0%, #73F2FF 100%)",
                boxShadow: "0 0 20px rgba(255,79,216,0.3)",
              }}
            >
              {labels.startReading}
            </Link>
          </div>
        </article>
      </main>

      {/* Footer */}
      <footer className="relative py-8 px-4 border-t border-[#FF4FD8]/10 mt-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <Link href="/" className="inline-flex items-center gap-2">
              <LogoIcon size={28} className="logo-neon" />
              <span className="text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#FF4FD8] to-[#73F2FF]">
                Love Tarot
              </span>
            </Link>
            <div className="flex gap-6 text-sm text-foreground/50">
              <Link href="/privacy" className="hover:text-[#73F2FF] transition-colors">
                Privacy
              </Link>
              <Link href="/terms" className="hover:text-[#73F2FF] transition-colors">
                Terms
              </Link>
              <Link href="/contact" className="hover:text-[#73F2FF] transition-colors">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
