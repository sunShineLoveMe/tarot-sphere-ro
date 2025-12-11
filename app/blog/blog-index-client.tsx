"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import MagicBackground from "@/components/magic-background"
import Header from "@/components/header"
import ArticleCard, { type ArticleMeta } from "@/components/blog/article-card"
import { LogoIcon } from "@/components/logo-icon"
import Link from "next/link"

// Article database
const articles: ArticleMeta[] = [
  {
    slug: "love-tarot-2025",
    lang: "en",
    title: "Love Tarot Reading: What Your Heart Needs to Hear in 2025",
    description:
      "Discover how love tarot readings can offer honest guidance for your relationships in 2025. Learn to ask the right questions and embrace emotional clarity.",
    publishedAt: "2025-01-10",
    readingTime: 8,
    keywords: ["love tarot reading", "relationship guidance", "tarot reading 2025"],
  },
  {
    slug: "love-tarot-2025",
    lang: "ro",
    title: "Citirea Tarotului Iubirii: Ce Trebuie Să Audă Inima Ta în 2025",
    description:
      "Descoperă cum citirile de tarot pentru iubire pot oferi îndrumări sincere pentru relațiile tale în 2025. Învață să pui întrebările potrivite.",
    publishedAt: "2025-01-10",
    readingTime: 8,
    keywords: ["tarot iubire", "ghid relații", "tarot 2025 Romania"],
  },
  {
    slug: "love-tarot-2025",
    lang: "zh",
    title: "爱情塔罗牌解读：2025年你的内心需要听到什么",
    description: "探索爱情塔罗牌如何为你的感情生活提供真诚的指引。学会提出正确的问题，拥抱情感的清晰。",
    publishedAt: "2025-01-10",
    readingTime: 8,
    keywords: ["爱情塔罗", "感情指导", "2025塔罗牌"],
  },
]

type LangFilter = "all" | "en" | "ro" | "zh"

export default function BlogIndexClient() {
  const [filter, setFilter] = useState<LangFilter>("all")

  const filteredArticles = filter === "all" ? articles : articles.filter((a) => a.lang === filter)

  return (
    <div className="relative min-h-screen">
      <MagicBackground />
      <Header />

      <main className="relative pt-24 pb-20 px-4">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#FF4FD8] to-[#73F2FF] mb-4">
              Love Tarot Blog
            </h1>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Explore insightful articles about love tarot readings, relationship guidance, and emotional wisdom.
            </p>
          </motion.div>

          {/* Language filter */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="flex flex-wrap justify-center gap-3 mb-10"
          >
            {(["all", "en", "ro", "zh"] as const).map((lang) => (
              <button
                key={lang}
                onClick={() => setFilter(lang)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  filter === lang
                    ? "bg-gradient-to-r from-[#FF4FD8] to-[#73F2FF] text-white"
                    : "bg-[#1a0a2e]/50 text-foreground/70 border border-[#FF4FD8]/20 hover:border-[#73F2FF]/40"
                }`}
              >
                {lang === "all" ? "All Languages" : lang === "zh" ? "中文" : lang.toUpperCase()}
              </button>
            ))}
          </motion.div>

          {/* Articles grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {filteredArticles.map((article, index) => (
              <ArticleCard key={`${article.slug}-${article.lang}`} article={article} index={index} />
            ))}
          </div>

          {filteredArticles.length === 0 && (
            <div className="text-center py-12 text-foreground/50">No articles found for this language.</div>
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
