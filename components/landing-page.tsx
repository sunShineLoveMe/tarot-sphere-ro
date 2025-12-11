"use client"

import { motion } from "framer-motion"
import { useI18n } from "@/lib/i18n/context"
import MagicBackground from "./magic-background"
import { LogoIcon } from "./logo-icon"
import Header from "./header"
import { Sparkles, ArrowRight, Shield, Heart, Brain, Globe } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"

interface LandingPageProps {
  onStartReading: () => void
}

export default function LandingPage({ onStartReading }: LandingPageProps) {
  const { t } = useI18n()
  const router = useRouter()

  const handleStartReading = () => {
    router.push("/intake")
  }

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  }

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <MagicBackground />

      <Header />

      {/* Hero Section - Added pt-20 for header offset, removed centered logo */}
      <section className="relative min-h-screen flex items-center justify-center px-4 py-20 pt-24 md:pt-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FF4FD8]/10 border border-[#FF4FD8]/30 mb-6">
              <Sparkles className="w-4 h-4 text-[#FF4FD8]" />
              <span className="text-sm text-[#FF4FD8]">{t.hero.deckNote}</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF4FD8] via-[#73F2FF] to-[#FF4FD8]">
                {t.hero.title}
              </span>
            </h1>

            {/* Tarot wisdom subtitle below title */}
            <p
              className="text-sm sm:text-base text-[#73F2FF]/60 mb-4 tracking-wide"
              style={{ textShadow: "0 0 10px rgba(115,242,255,0.3)" }}
            >
              {t.hero.aiSubtitle}
            </p>

            <p className="text-xl sm:text-2xl md:text-3xl text-[#73F2FF]/80 mb-8">{t.hero.subtitle}</p>

            <p className="text-foreground/60 max-w-2xl mx-auto mb-10 text-base sm:text-lg">{t.meta.description}</p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                onClick={handleStartReading}
                className="group px-8 py-4 rounded-full font-medium text-lg flex items-center justify-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{
                  background: "linear-gradient(135deg, #FF4FD8 0%, #73F2FF 100%)",
                  boxShadow: "0 0 30px rgba(255,79,216,0.4), 0 0 60px rgba(115,242,255,0.2)",
                }}
              >
                <span className="text-white">{t.hero.ctaStart}</span>
                <ArrowRight className="w-5 h-5 text-white group-hover:translate-x-1 transition-transform" />
              </motion.button>

              <motion.a
                href="#how-it-works"
                className="px-8 py-4 rounded-full font-medium text-lg border border-[#73F2FF]/30 text-[#73F2FF] hover:bg-[#73F2FF]/10 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {t.hero.ctaHowItWorks}
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
        >
          <div className="w-6 h-10 rounded-full border-2 border-[#73F2FF]/30 flex justify-center pt-2">
            <div className="w-1.5 h-3 rounded-full bg-[#73F2FF]/50" />
          </div>
        </motion.div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="relative py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#FF4FD8] to-[#73F2FF] mb-4">
              {t.howItWorks.title}
            </h2>
            <p className="text-foreground/60 text-lg">{t.howItWorks.subtitle}</p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.howItWorks.steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative p-6 rounded-2xl"
                style={{
                  background: "linear-gradient(135deg, rgba(26,10,46,0.8) 0%, rgba(15,10,32,0.9) 100%)",
                  border: "1px solid rgba(255,79,216,0.2)",
                }}
              >
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#FF4FD8] to-[#73F2FF] flex items-center justify-center text-white font-semibold mb-4">
                  {index + 1}
                </div>
                <h3 className="text-lg font-semibold text-[#73F2FF] mb-2">{step.title}</h3>
                <p className="text-foreground/60 text-sm">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* For European Users Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#FF4FD8] to-[#73F2FF] mb-4">
              {t.forEurope.title}
            </h2>
            <p className="text-foreground/60 text-lg">{t.forEurope.subtitle}</p>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-4">
            {t.forEurope.points.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start gap-3 p-4 rounded-xl bg-[#73F2FF]/5 border border-[#73F2FF]/20"
              >
                {index === 0 && <Brain className="w-5 h-5 text-[#FF4FD8] mt-0.5 flex-shrink-0" />}
                {index === 1 && <Heart className="w-5 h-5 text-[#FF4FD8] mt-0.5 flex-shrink-0" />}
                {index === 2 && <Globe className="w-5 h-5 text-[#FF4FD8] mt-0.5 flex-shrink-0" />}
                {index === 3 && <Shield className="w-5 h-5 text-[#FF4FD8] mt-0.5 flex-shrink-0" />}
                <span className="text-foreground/80">{point}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sample Reading Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#FF4FD8] to-[#73F2FF] mb-4">
              {t.sampleReading.title}
            </h2>
            <p className="text-foreground/60 text-lg">{t.sampleReading.subtitle}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-6 sm:p-8 rounded-2xl"
            style={{
              background: "linear-gradient(135deg, rgba(26,10,46,0.9) 0%, rgba(15,10,32,0.95) 100%)",
              border: "1px solid rgba(255,79,216,0.3)",
              boxShadow: "0 0 40px rgba(255,79,216,0.15), 0 0 80px rgba(115,242,255,0.1)",
            }}
          >
            <div className="text-center mb-6">
              <h3 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#FF4FD8] to-[#73F2FF]">
                {t.sampleReading.cardName}
              </h3>
              <span className="inline-block mt-2 px-3 py-1 rounded-full text-sm bg-[#73F2FF]/10 border border-[#73F2FF]/30 text-[#73F2FF]">
                {t.sampleReading.position}
              </span>
            </div>

            <div className="flex flex-wrap gap-2 justify-center mb-6">
              {t.sampleReading.keywords.map((keyword) => (
                <span
                  key={keyword}
                  className="px-3 py-1 rounded-full text-sm bg-[#FF4FD8]/10 border border-[#FF4FD8]/30 text-[#FF4FD8]"
                >
                  {keyword}
                </span>
              ))}
            </div>

            <div className="space-y-4 text-foreground/80">
              <p>{t.sampleReading.meaning}</p>
              <div className="h-px bg-gradient-to-r from-transparent via-[#FF4FD8]/30 to-transparent" />
              <p className="italic text-[#73F2FF]/80">{t.sampleReading.advice}</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="relative py-20 px-4">
        <div className="max-w-3xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#FF4FD8] to-[#73F2FF] mb-4">
              {t.faq.title}
            </h2>
            <p className="text-foreground/60 text-lg">{t.faq.subtitle}</p>
          </motion.div>

          <div className="space-y-4">
            {t.faq.items.map((item, index) => (
              <motion.details
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                viewport={{ once: true }}
                className="group p-4 rounded-xl bg-[#1a0a2e]/80 border border-[#FF4FD8]/20 cursor-pointer"
              >
                <summary className="flex items-center justify-between font-medium text-[#73F2FF] list-none">
                  {item.question}
                  <span className="text-[#FF4FD8] group-open:rotate-45 transition-transform">+</span>
                </summary>
                <p className="mt-3 text-foreground/70 text-sm">{item.answer}</p>
              </motion.details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div {...fadeInUp}>
            <h2 className="text-3xl sm:text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#FF4FD8] to-[#73F2FF] mb-6">
              {t.hero.title}
            </h2>
            <motion.button
              onClick={handleStartReading}
              className="group px-10 py-5 rounded-full font-medium text-xl flex items-center justify-center gap-3 mx-auto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{
                background: "linear-gradient(135deg, #FF4FD8 0%, #73F2FF 100%)",
                boxShadow: "0 0 40px rgba(255,79,216,0.5), 0 0 80px rgba(115,242,255,0.3)",
              }}
            >
              <span className="text-white">{t.hero.ctaStart}</span>
              <ArrowRight className="w-6 h-6 text-white group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-12 px-4 border-t border-[#FF4FD8]/10">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="text-center sm:text-left">
              <Link href="/" className="inline-flex items-center gap-2 group">
                <LogoIcon size={28} className="logo-neon" />
                <h3 className="text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#FF4FD8] to-[#73F2FF]">
                  Love Tarot
                </h3>
              </Link>
              {/* Tarot wisdom subtitle */}
              <p className="text-xs text-[#73F2FF]/50 mt-0.5">{t.hero.aiSubtitle}</p>
              <p className="text-sm text-foreground/50 mt-1">{t.footer.tagline}</p>
            </div>

            <div className="flex gap-6 text-sm text-foreground/50">
              <Link href="/privacy" className="hover:text-[#73F2FF] transition-colors">
                {t.footer.links.privacy}
              </Link>
              <Link href="/terms" className="hover:text-[#73F2FF] transition-colors">
                {t.footer.links.terms}
              </Link>
              <Link href="/contact" className="hover:text-[#73F2FF] transition-colors">
                {t.footer.links.contact}
              </Link>
            </div>
          </div>

          <p className="text-center text-xs text-foreground/40 mt-8">{t.footer.disclaimer}</p>
        </div>
      </footer>
    </div>
  )
}
