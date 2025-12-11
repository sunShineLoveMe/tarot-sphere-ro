"use client"

import { useMemo } from "react"
import { motion } from "framer-motion"
import MagicBackground from "@/components/magic-background"
import Header from "@/components/header"
import { LogoIcon } from "@/components/logo-icon"
import Link from "next/link"
import { useI18n } from "@/lib/i18n/context"
import { Calendar, Clock, ArrowRight } from "lucide-react"
import { articles } from "@/lib/blog/articles"

// i18n labels for the blog page
const blogLabels = {
  en: {
    title: "Love Tarot Blog",
    subtitle: "Explore insightful articles about love tarot readings, relationship guidance, and emotional wisdom.",
    readMore: "Read more",
    minRead: "min read",
    noArticles: "No articles available yet.",
  },
  ro: {
    title: "Blog Tarot Iubire",
    subtitle: "Explorează articole despre citirile de tarot pentru iubire, ghiduri pentru relații și înțelepciune emoțională.",
    readMore: "Citește mai mult",
    minRead: "min citire",
    noArticles: "Nu există încă articole disponibile.",
  },
  zh: {
    title: "爱情塔罗博客",
    subtitle: "探索关于爱情塔罗牌解读、情感指导和情感智慧的深度文章。",
    readMore: "阅读更多",
    minRead: "分钟阅读",
    noArticles: "暂无文章。",
  },
}

export default function BlogIndexClient() {
  const { locale } = useI18n()
  const lang = (locale || "en") as "en" | "ro" | "zh"
  const labels = blogLabels[lang] || blogLabels.en

  // Get articles with current language translations
  const localizedArticles = useMemo(() => {
    return articles.map((article) => {
      const translation = article.translations[lang] || article.translations.en
      return {
        slug: article.slug,
        title: translation.title,
        description: translation.description,
        keywords: translation.keywords,
        publishedAt: article.publishedAt,
        readingTime: article.readingTime,
      }
    }).sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
  }, [lang])

  // Format date based on locale
  const formatDate = (dateStr: string) => {
    return new Date(dateStr).toLocaleDateString(
      lang === "ro" ? "ro-RO" : lang === "zh" ? "zh-CN" : "en-US",
      { year: "numeric", month: "long", day: "numeric" }
    )
  }

  return (
    <div className="relative min-h-screen">
      <MagicBackground />
      <Header />

      <main className="relative pt-24 pb-20 px-4">
        <div className="max-w-5xl mx-auto">
          {/* Header - NO local language buttons */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#FF4FD8] to-[#73F2FF] mb-4">
              {labels.title}
            </h1>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              {labels.subtitle}
            </p>
          </motion.div>

          {/* Articles grid - displays based on current i18n language */}
          <div className="grid md:grid-cols-2 gap-6">
            {localizedArticles.map((article, index) => (
              <motion.article
                key={article.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="group relative"
              >
                <Link href={`/blog/${article.slug}`}>
                  <div
                    className="relative p-6 rounded-2xl overflow-hidden transition-all duration-300 hover:scale-[1.02]"
                    style={{
                      background: "linear-gradient(135deg, rgba(26,10,46,0.9) 0%, rgba(15,10,32,0.95) 100%)",
                      border: "1px solid rgba(255,79,216,0.2)",
                    }}
                  >
                    {/* Hover glow effect */}
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{
                        background: "radial-gradient(circle at center, rgba(115,242,255,0.1) 0%, transparent 70%)",
                      }}
                    />

                    {/* Content */}
                    <div className="relative z-10">
                      {/* Meta info */}
                      <div className="flex items-center gap-4 text-xs text-foreground/50 mb-4">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {formatDate(article.publishedAt)}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {article.readingTime} {labels.minRead}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#FF4FD8] to-[#73F2FF] mb-3 line-clamp-2">
                        {article.title}
                      </h3>

                      {/* Description */}
                      <p className="text-foreground/70 text-sm mb-4 line-clamp-3">{article.description}</p>

                      {/* Keywords */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {article.keywords.slice(0, 3).map((keyword) => (
                          <span
                            key={keyword}
                            className="px-2 py-1 rounded-full text-xs bg-[#73F2FF]/10 border border-[#73F2FF]/20 text-[#73F2FF]/80"
                          >
                            {keyword}
                          </span>
                        ))}
                      </div>

                      {/* Read more */}
                      <div className="flex items-center gap-2 text-[#FF4FD8] text-sm font-medium group-hover:gap-3 transition-all">
                        <span>{labels.readMore}</span>
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>

          {localizedArticles.length === 0 && (
            <div className="text-center py-12 text-foreground/50">{labels.noArticles}</div>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="relative py-12 px-4 border-t border-[#FF4FD8]/10">
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
