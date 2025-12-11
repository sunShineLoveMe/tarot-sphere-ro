"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Calendar, Clock, ArrowRight } from "lucide-react"
import { useI18n } from "@/lib/i18n/context"
// TagLang is removed as requested by user ("No local language buttons")

export interface ArticleMeta {
  slug: string
  title: string
  description: string
  publishedAt: string
  readingTime: number
  coverImage?: string
  keywords: string[]
}

interface ArticleCardProps {
  article: ArticleMeta
  index?: number
}

export default function ArticleCard({ article, index = 0 }: ArticleCardProps) {
  const { locale } = useI18n()
  const lang = (locale || "en") as "en" | "ro" | "zh"

  const formattedDate = new Date(article.publishedAt).toLocaleDateString(
    lang === "ro" ? "ro-RO" : lang === "zh" ? "zh-CN" : "en-US",
    { year: "numeric", month: "long", day: "numeric" },
  )

  return (
    <motion.article
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
            {/* Language tag removed as per requirements */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-4 text-xs text-foreground/50">
                <span className="flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  {formattedDate}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  {article.readingTime} min
                </span>
              </div>
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
              <span>Read more</span>
              <ArrowRight className="w-4 h-4" />
            </div>
          </div>
        </div>
      </Link>
    </motion.article>
  )
}

export { ArticleCard }
