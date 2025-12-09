"use client"

import type React from "react"

import { motion } from "framer-motion"
import { useI18n } from "@/lib/i18n/context"
import { I18nProvider } from "@/lib/i18n/context"
import MagicBackground from "./magic-background"
import LanguageSwitcher from "./language-switcher"
import { LogoIcon } from "./logo-icon"
import { ArrowLeft, Mail, Send, CheckCircle } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

function ContactContent() {
  const { t } = useI18n()
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })
  const [submitted, setSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError(null)

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (!response.ok || !data.success) {
        throw new Error(data.error || "Failed to send message")
      }

      setSubmitted(true)
      setFormData({ name: "", email: "", message: "" })
      
      // Reset after 5 seconds
      setTimeout(() => {
        setSubmitted(false)
      }, 5000)
    } catch (err) {
      console.error("Contact form error:", err)
      setError(err instanceof Error ? err.message : "Failed to send message. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="relative min-h-screen">
      <MagicBackground />

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 px-4 py-4">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <Link href="/">
            <motion.button
              className="flex items-center gap-2 px-4 py-2 rounded-full text-[#73F2FF] border border-[#73F2FF]/30 hover:bg-[#73F2FF]/10 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="text-sm">Home</span>
            </motion.button>
          </Link>
          <div className="flex items-center gap-3">
            <Link href="/" className="hidden sm:block">
              <LogoIcon size={32} className="logo-neon" />
            </Link>
            <LanguageSwitcher />
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="relative pt-24 pb-16 px-4">
        <div className="max-w-[500px] mx-auto">
          {/* Title */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-8">
            <div className="inline-flex items-center gap-2 mb-4">
              <Mail className="w-8 h-8 text-[#FF4FD8]" />
            </div>
            <h1 className="text-3xl sm:text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#FF4FD8] to-[#73F2FF] mb-4">
              {t.legal.contact.title}
            </h1>
            <p className="text-foreground/70">{t.legal.contact.subtitle}</p>
          </motion.div>

          {/* Email Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-8"
          >
            <a href={`mailto:${t.legal.contact.email}`} className="block w-full">
              <motion.div
                className="flex items-center justify-center gap-3 px-6 py-4 rounded-xl font-medium"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                style={{
                  background: "linear-gradient(135deg, rgba(255,79,216,0.2) 0%, rgba(115,242,255,0.2) 100%)",
                  border: "1px solid rgba(255,79,216,0.4)",
                  boxShadow: "0 0 20px rgba(255,79,216,0.2)",
                }}
              >
                <Mail className="w-5 h-5 text-[#FF4FD8]" />
                <span className="text-[#73F2FF]">{t.legal.contact.email}</span>
              </motion.div>
            </a>
          </motion.div>

          {/* Divider */}
          <div className="flex items-center gap-4 mb-8">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[#FF4FD8]/30 to-transparent" />
            <span className="text-foreground/40 text-sm">or</span>
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[#73F2FF]/30 to-transparent" />
          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="rounded-2xl p-6"
            style={{
              background: "linear-gradient(135deg, rgba(26,10,46,0.8) 0%, rgba(15,10,32,0.9) 100%)",
              border: "1px solid rgba(255,79,216,0.2)",
            }}
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center py-8"
              >
                <CheckCircle className="w-12 h-12 text-[#73F2FF] mb-4" />
                <p className="text-[#73F2FF] text-center">{t.legal.contact.form.success}</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name */}
                <div>
                  <label className="block text-sm text-foreground/70 mb-2">{t.legal.contact.form.name}</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder={t.legal.contact.form.namePlaceholder}
                    className="w-full px-4 py-3 rounded-xl bg-[#0a0a1a]/50 border border-[#FF4FD8]/20 text-foreground placeholder:text-foreground/30 focus:outline-none focus:border-[#FF4FD8]/50 focus:ring-1 focus:ring-[#FF4FD8]/30 transition-all"
                    style={{
                      boxShadow: "inset 0 0 20px rgba(255,79,216,0.05)",
                    }}
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm text-foreground/70 mb-2">{t.legal.contact.form.email}</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder={t.legal.contact.form.emailPlaceholder}
                    className="w-full px-4 py-3 rounded-xl bg-[#0a0a1a]/50 border border-[#FF4FD8]/20 text-foreground placeholder:text-foreground/30 focus:outline-none focus:border-[#FF4FD8]/50 focus:ring-1 focus:ring-[#FF4FD8]/30 transition-all"
                    style={{
                      boxShadow: "inset 0 0 20px rgba(255,79,216,0.05)",
                    }}
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm text-foreground/70 mb-2">{t.legal.contact.form.message}</label>
                  <textarea
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder={t.legal.contact.form.messagePlaceholder}
                    className="w-full px-4 py-3 rounded-xl bg-[#0a0a1a]/50 border border-[#FF4FD8]/20 text-foreground placeholder:text-foreground/30 focus:outline-none focus:border-[#FF4FD8]/50 focus:ring-1 focus:ring-[#FF4FD8]/30 transition-all resize-none"
                    style={{
                      boxShadow: "inset 0 0 20px rgba(255,79,216,0.05)",
                    }}
                  />
                </div>

                {/* Error Message */}
                {error && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-3 rounded-lg text-sm text-red-400"
                    style={{
                      background: "rgba(239, 68, 68, 0.1)",
                      border: "1px solid rgba(239, 68, 68, 0.3)",
                    }}
                  >
                    {error}
                  </motion.div>
                )}

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isLoading}
                  className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-medium text-white disabled:opacity-70 disabled:cursor-not-allowed"
                  whileHover={isLoading ? {} : { scale: 1.02 }}
                  whileTap={isLoading ? {} : { scale: 0.98 }}
                  style={{
                    background: "linear-gradient(135deg, #FF4FD8 0%, #73F2FF 100%)",
                    boxShadow: "0 0 20px rgba(255,79,216,0.3), 0 0 40px rgba(115,242,255,0.2)",
                  }}
                >
                  {isLoading ? (
                    <>
                      <motion.div
                        className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>{t.legal.contact.form.submit}</span>
                    </>
                  )}
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </main>
    </div>
  )
}

export default function ContactPage() {
  return (
    <I18nProvider>
      <ContactContent />
    </I18nProvider>
  )
}
