"use client"

import type React from "react"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowLeft, ArrowRight, Calendar, Clock } from "lucide-react"
import MagicBackground from "@/components/magic-background"
import Header from "@/components/header"
import { LogoIcon } from "@/components/logo-icon"
import TOCGenerator from "./toc-generator"
import TagLang from "./tag-lang"
import type { ArticleMeta } from "./article-card"

interface ArticleLayoutProps {
  article: ArticleMeta
  headings: { id: string; title: string; level: number }[]
  prevArticle?: ArticleMeta | null
  nextArticle?: ArticleMeta | null
  children: React.ReactNode
  jsonLd: object
}

export default function ArticleLayout({
  article,
  headings,
  prevArticle,
  nextArticle,
  children,
  jsonLd,
}: ArticleLayoutProps) {
  const formattedDate = new Date(article.publishedAt).toLocaleDateString(
    article.lang === "ro" ? "ro-RO" : article.lang === "zh" ? "zh-CN" : "en-US",
    { year: "numeric", month: "long", day: "numeric" },
  )

  return (
    <div className="relative min-h-screen">
      <MagicBackground />
      <Header />

      {/* JSON-LD Structured Data */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <main className="relative pt-24 pb-20 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Back to blog */}
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-[#73F2FF] hover:text-[#FF4FD8] transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Blog</span>
            </Link>
          </motion.div>

          <div className="grid lg:grid-cols-[1fr_280px] gap-8">
            {/* Main content */}
            <article className="min-w-0">
              {/* Article header */}
              <motion.header initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
                <div className="flex items-center gap-4 mb-4">
                  <TagLang lang={article.lang} size="md" />
                  <div className="flex items-center gap-4 text-sm text-foreground/50">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {formattedDate}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {article.readingTime} min read
                    </span>
                  </div>
                </div>

                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#FF4FD8] to-[#73F2FF] mb-4 leading-tight">
                  {article.title}
                </h1>

                <p className="text-lg text-foreground/70">{article.description}</p>

                {/* Keywords */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {article.keywords.map((keyword) => (
                    <span
                      key={keyword}
                      className="px-3 py-1 rounded-full text-sm bg-[#73F2FF]/10 border border-[#73F2FF]/20 text-[#73F2FF]/80"
                    >
                      {keyword}
                    </span>
                  ))}
                </div>
              </motion.header>

              {/* Article body */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="prose prose-invert prose-lg max-w-none"
                style={
                  {
                    "--tw-prose-headings": "#73F2FF",
                    "--tw-prose-links": "#FF4FD8",
                    "--tw-prose-body": "rgba(255,255,255,0.8)",
                  } as React.CSSProperties
                }
              >
                {children}
              </motion.div>

              {/* Navigation */}
              <motion.nav
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="mt-12 pt-8 border-t border-[#FF4FD8]/20"
              >
                <div className="grid sm:grid-cols-2 gap-4">
                  {prevArticle && (
                    <Link
                      href={`/blog/${prevArticle.slug}/${prevArticle.lang}`}
                      className="group p-4 rounded-xl bg-[#1a0a2e]/50 border border-[#73F2FF]/20 hover:border-[#73F2FF]/40 transition-colors"
                    >
                      <span className="text-xs text-foreground/50 flex items-center gap-1">
                        <ArrowLeft className="w-3 h-3" />
                        Previous
                      </span>
                      <span className="text-[#73F2FF] font-medium line-clamp-1 group-hover:text-[#FF4FD8] transition-colors">
                        {prevArticle.title}
                      </span>
                    </Link>
                  )}
                  {nextArticle && (
                    <Link
                      href={`/blog/${nextArticle.slug}/${nextArticle.lang}`}
                      className="group p-4 rounded-xl bg-[#1a0a2e]/50 border border-[#73F2FF]/20 hover:border-[#73F2FF]/40 transition-colors sm:text-right sm:ml-auto"
                    >
                      <span className="text-xs text-foreground/50 flex items-center gap-1 sm:justify-end">
                        Next
                        <ArrowRight className="w-3 h-3" />
                      </span>
                      <span className="text-[#73F2FF] font-medium line-clamp-1 group-hover:text-[#FF4FD8] transition-colors">
                        {nextArticle.title}
                      </span>
                    </Link>
                  )}
                </div>
              </motion.nav>
            </article>

            {/* Sidebar with TOC */}
            <aside className="hidden lg:block">
              <TOCGenerator headings={headings} lang={article.lang} />
            </aside>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative py-12 px-4 border-t border-[#FF4FD8]/10">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <Link href="/" className="inline-flex items-center gap-2 group">
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

export { ArticleLayout }
