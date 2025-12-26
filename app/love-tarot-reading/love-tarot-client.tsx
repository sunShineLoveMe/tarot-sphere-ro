"use client"

import { motion } from "framer-motion"
import MagicBackground from "@/components/magic-background"
import Header from "@/components/header"
import { LogoIcon } from "@/components/logo-icon"
import Link from "next/link"
import { useI18n } from "@/lib/i18n/context"
import { loveTarotHubContent } from "@/lib/hub/love-tarot-content"

import { ArrowLeft } from "lucide-react"
import { BlogArticleLayout } from "@/components/blog/blog-article-layout"

export default function LoveTarotClient() {
  const { locale, t } = useI18n()
  const lang = (locale || "en") as "en" | "ro" | "zh"
  const content = loveTarotHubContent[lang] || loveTarotHubContent.en

  return (
    <div className="relative min-h-screen">
      <MagicBackground />
      <Header />

      <main className="relative pt-24 pb-20 px-4">
        <div className="max-w-3xl mx-auto">
          {/* Back Link */}
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-foreground/50 hover:text-[#73F2FF] transition-colors mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            {lang === 'ro' ? 'Înapoi la Acasă' : lang === 'zh' ? '返回首页' : 'Back to Home'}
          </Link>

          {/* Header Section */}
          <header className="text-center mb-16">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#FF4FD8] to-[#73F2FF] mb-6 leading-tight px-4">
              {content.title}
            </h1>
            <p className="text-lg sm:text-xl text-foreground/70 leading-relaxed max-w-2xl mx-auto px-4">
              {content.description}
            </p>
          </header>

          {/* Main Article Content - Using BlogArticleLayout for consistent premium styling */}
          <BlogArticleLayout>
            {content.content}
          </BlogArticleLayout>


          {/* Bottom Call to Action */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-20 p-8 sm:p-12 rounded-3xl text-center relative overflow-hidden group border border-[#FF4FD8]/20"
            style={{
              background: "linear-gradient(135deg, rgba(26,10,46,0.8) 0%, rgba(15,10,32,0.9) 100%)",
            }}
          >
             <div className="absolute inset-0 bg-gradient-to-r from-[#FF4FD8]/5 to-[#73F2FF]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
             <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8 relative z-10">
               {lang === 'ro' ? 'Ești gata să îți explorezi propria cale?' : lang === 'zh' ? '准备好探索你自己的道路了吗？' : 'Ready to explore your own path?'}
             </h2>
             <div className="flex flex-col sm:flex-row items-center justify-center gap-6 relative z-10">
               <Link 
                 href="/intake" 
                 className="w-full sm:w-auto inline-flex items-center justify-center px-10 py-4 rounded-full bg-gradient-to-r from-[#FF4FD8] to-[#73F2FF] text-white font-bold text-lg hover:scale-105 transition-transform active:scale-95 shadow-lg shadow-[#FF4FD8]/25"
               >
                 {lang === 'ro' ? 'Începe Citirea' : lang === 'zh' ? '开始占卜' : 'Start Your Reading'}
               </Link>
               <Link 
                 href="/blog" 
                 className="w-full sm:w-auto inline-flex items-center justify-center px-10 py-4 rounded-full border border-[#73F2FF]/30 text-[#73F2FF] font-semibold text-lg hover:bg-[#73F2FF]/5 transition-all"
               >
                 {lang === 'ro' ? 'Vezi Blogul' : lang === 'zh' ? '查看更多文章' : 'View All Articles'}
               </Link>
             </div>
          </motion.div>

        </div>
      </main>

      {/* Footer */}
      <footer className="relative py-12 px-4 border-t border-[#FF4FD8]/10 text-center sm:text-left">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <Link href="/" className="inline-flex items-center gap-2">
              <LogoIcon size={28} className="logo-neon" />
              <span className="text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#FF4FD8] to-[#73F2FF]">
                Love Tarot Romania
              </span>
            </Link>
            <div className="flex gap-6 text-sm text-foreground/50">
              <Link href="/privacy" className="hover:text-[#73F2FF] transition-colors">Privacy</Link>
              <Link href="/terms" className="hover:text-[#73F2FF] transition-colors">Terms</Link>
              <Link href="/contact" className="hover:text-[#73F2FF] transition-colors">Contact</Link>
              <Link href="/blog" className="hover:text-[#73F2FF] transition-colors">Blog</Link>
            </div>
          </div>
          <p className="mt-8 text-xs text-foreground/30 text-center">
            © {new Date().getFullYear()} Love Tarot Romania. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}
