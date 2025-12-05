"use client"

import type React from "react"
import { useState, useCallback, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Download, X, Check, Copy } from "lucide-react"
import { useI18n } from "@/lib/i18n/context"
import { useSound } from "@/lib/sound/sound-manager"
import { toPng } from "html-to-image"
import QRCode from "qrcode"

interface CardData {
  card: {
    id: number
    name: { en: string; ro: string; zh: string }
    keywords: { en: string[]; ro: string[]; zh: string[] }
  }
  reversed: boolean
  position: "past" | "present" | "future"
}

interface ShareButtonsProps {
  cards: CardData[]
  question: string
  overallEnergy: string
  shareCardRef: React.RefObject<HTMLDivElement | null>
}

async function shortenUrl(url: string): Promise<string> {
  try {
    const response = await fetch(`https://tinyurl.com/api-create.php?url=${encodeURIComponent(url)}`)
    if (response.ok) {
      const shortUrl = await response.text()
      return shortUrl
    }
    return url
  } catch (error) {
    console.error("Failed to shorten URL:", error)
    return url
  }
}

async function generateQRCode(url: string): Promise<string> {
  try {
    return await QRCode.toDataURL(url, {
      width: 120,
      margin: 1,
      color: {
        dark: "#73F2FF",
        light: "#0a0a1a",
      },
    })
  } catch (error) {
    console.error("Failed to generate QR code:", error)
    return ""
  }
}

// WhatsApp Icon
function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}

// Facebook Icon
function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  )
}

// TikTok Icon
function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
    </svg>
  )
}

function TikTokModal({
  isOpen,
  onClose,
  cards,
  summary,
  shortLink,
  translations,
  locale,
}: {
  isOpen: boolean
  onClose: () => void
  cards: CardData[]
  summary: string
  shortLink: string
  translations: {
    title: string
    past: string
    present: string
    future: string
    copyButton: string
    copied: string
  }
  locale: string
}) {
  const [copied, setCopied] = useState(false)
  const { playSound } = useSound()

  const getCardName = (card: CardData["card"]) => {
    return card.name[locale as keyof typeof card.name] || card.name.en
  }

  const pastCard = cards.find((c) => c.position === "past")
  const presentCard = cards.find((c) => c.position === "present")
  const futureCard = cards.find((c) => c.position === "future")

  const tiktokText = `${translations.title}

${translations.past}: ${pastCard ? getCardName(pastCard.card) : ""}${pastCard?.reversed ? " ↺" : ""}
${translations.present}: ${presentCard ? getCardName(presentCard.card) : ""}${presentCard?.reversed ? " ↺" : ""}
${translations.future}: ${futureCard ? getCardName(futureCard.card) : ""}${futureCard?.reversed ? " ↺" : ""}

${summary}

${shortLink}`

  const handleCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(tiktokText)
      setCopied(true)
      playSound("flip")
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error("Failed to copy:", err)
    }
  }, [tiktokText, playSound])

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Backdrop */}
          <motion.div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={onClose} />

          {/* Modal */}
          <motion.div
            className="relative w-full max-w-md p-6 rounded-2xl overflow-hidden"
            style={{
              background: "rgba(20, 10, 40, 0.95)",
              border: "1px solid rgba(115, 242, 255, 0.3)",
              boxShadow: "0 0 40px rgba(115, 242, 255, 0.2), 0 0 80px rgba(255, 79, 216, 0.1)",
            }}
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 20 }}
          >
            {/* Particle effect background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              {[...Array(12)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 rounded-full"
                  style={{
                    background: i % 2 === 0 ? "#73F2FF" : "#FF4FD8",
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                  animate={{
                    opacity: [0.2, 0.8, 0.2],
                    scale: [1, 1.5, 1],
                  }}
                  transition={{
                    duration: 2 + Math.random() * 2,
                    repeat: Number.POSITIVE_INFINITY,
                    delay: Math.random() * 2,
                  }}
                />
              ))}
            </div>

            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-1 rounded-full text-white/60 hover:text-white transition-colors z-10"
            >
              <X className="w-5 h-5" />
            </button>

            {/* TikTok Icon */}
            <div className="flex justify-center mb-4 relative z-10">
              <div
                className="p-3 rounded-full"
                style={{
                  background: "linear-gradient(135deg, #69C9D0, #EE1D52)",
                }}
              >
                <TikTokIcon className="w-8 h-8 text-white" />
              </div>
            </div>

            {/* Title */}
            <h3 className="text-xl font-bold text-center text-white mb-4 relative z-10">{translations.title}</h3>

            {/* Card Names */}
            <div className="space-y-2 mb-4 relative z-10">
              <div className="flex items-center gap-2 text-sm">
                <span className="text-[#FF4FD8] font-medium w-16">{translations.past}:</span>
                <span className="text-white/90">
                  {pastCard ? getCardName(pastCard.card) : ""}
                  {pastCard?.reversed ? " ↺" : ""}
                </span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <span className="text-[#73F2FF] font-medium w-16">{translations.present}:</span>
                <span className="text-white/90">
                  {presentCard ? getCardName(presentCard.card) : ""}
                  {presentCard?.reversed ? " ↺" : ""}
                </span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <span className="text-[#A855F7] font-medium w-16">{translations.future}:</span>
                <span className="text-white/90">
                  {futureCard ? getCardName(futureCard.card) : ""}
                  {futureCard?.reversed ? " ↺" : ""}
                </span>
              </div>
            </div>

            {/* Summary */}
            <div
              className="p-3 rounded-lg mb-4 relative z-10"
              style={{
                background: "rgba(115, 242, 255, 0.1)",
                border: "1px solid rgba(115, 242, 255, 0.2)",
              }}
            >
              <p className="text-white/80 text-sm leading-relaxed line-clamp-3">{summary}</p>
            </div>

            {/* Short Link */}
            <div className="text-center mb-5 relative z-10">
              <span className="text-[#73F2FF] text-sm font-mono">{shortLink}</span>
            </div>

            {/* Copy Button */}
            <motion.button
              onClick={handleCopy}
              className="w-full py-3 px-6 rounded-full font-semibold text-white flex items-center justify-center gap-2 relative z-10"
              style={{
                background: copied
                  ? "linear-gradient(135deg, #22C55E, #16A34A)"
                  : "linear-gradient(135deg, #69C9D0, #EE1D52)",
              }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {copied ? (
                <>
                  <Check className="w-5 h-5" />
                  {translations.copied}
                </>
              ) : (
                <>
                  <Copy className="w-5 h-5" />
                  {translations.copyButton}
                </>
              )}
            </motion.button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

function SocialShareButton({
  icon,
  label,
  gradientFrom,
  gradientTo,
  onClick,
  isLoading,
}: {
  icon: React.ReactNode
  label: string
  gradientFrom: string
  gradientTo: string
  onClick: () => void
  isLoading?: boolean
}) {
  const { playSound } = useSound()
  const [ripple, setRipple] = useState(false)

  const handleClick = () => {
    if (isLoading) return
    playSound("flip")
    setRipple(true)
    setTimeout(() => setRipple(false), 600)
    onClick()
  }

  return (
    <motion.button
      className="relative overflow-hidden flex items-center justify-center gap-1.5 px-4 py-3 rounded-full text-sm font-medium text-white min-w-[72px]"
      onClick={handleClick}
      whileHover={{ scale: 1.05, boxShadow: `0 0 20px ${gradientFrom}40` }}
      whileTap={{ scale: 0.95 }}
      style={{
        background: `linear-gradient(135deg, ${gradientFrom}20, ${gradientTo}20)`,
        border: `1px solid ${gradientFrom}50`,
      }}
    >
      {/* Ripple effect */}
      <AnimatePresence>
        {ripple && (
          <motion.span
            className="absolute inset-0 rounded-full"
            style={{
              background: `radial-gradient(circle, ${gradientFrom}40 0%, transparent 70%)`,
            }}
            initial={{ scale: 0, opacity: 1 }}
            animate={{ scale: 2.5, opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
          />
        )}
      </AnimatePresence>

      {/* Icon with glow */}
      <span
        className="relative z-10 flex-shrink-0"
        style={{
          filter: `drop-shadow(0 0 6px ${gradientFrom})`,
          color: gradientFrom,
        }}
      >
        {icon}
      </span>

      {/* Label - nowrap */}
      <span className="relative z-10 whitespace-nowrap">{label}</span>
    </motion.button>
  )
}

export function ShareButtons({ cards, question, overallEnergy, shareCardRef }: ShareButtonsProps) {
  const { t, locale } = useI18n()
  const { playSound } = useSound()
  const [showTikTokModal, setShowTikTokModal] = useState(false)
  const [isDownloading, setIsDownloading] = useState(false)
  const [shortLink, setShortLink] = useState("")
  const [qrCodeUrl, setQrCodeUrl] = useState("")

  // Get card names based on locale
  const getCardName = (card: CardData["card"]) => {
    return card.name[locale as keyof typeof card.name] || card.name.en
  }

  useEffect(() => {
    const generateShortLink = async () => {
      if (typeof window !== "undefined") {
        const originalUrl = window.location.href
        const shortened = await shortenUrl(originalUrl)
        setShortLink(shortened)

        // Generate QR code for the short link
        const qr = await generateQRCode(shortened)
        setQrCodeUrl(qr)
      }
    }
    generateShortLink()
  }, [])

  const getShareShortText = useCallback(() => {
    const texts = {
      en: "My Love Tarot Reading",
      ro: "Lectura mea Love Tarot",
      zh: "我的爱情塔罗占卜",
    }
    return texts[locale as keyof typeof texts] || texts.en
  }, [locale])

  const handleWhatsAppShare = useCallback(() => {
    const shareText = `${t.readingResult.share.shareShort} ${shortLink || window.location.href}`
    const url = `https://wa.me/?text=${encodeURIComponent(shareText)}`
    window.open(url, "_blank")
  }, [shortLink, t.readingResult.share.shareShort])

  const handleFacebookShare = useCallback(() => {
    const url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shortLink || window.location.href)}`
    window.open(url, "_blank", "width=600,height=400")
  }, [shortLink])

  // TikTok share (open modal)
  const handleTikTokShare = useCallback(() => {
    setShowTikTokModal(true)
  }, [])

  const handleDownloadCard = useCallback(async () => {
    if (!shareCardRef.current || isDownloading) return

    setIsDownloading(true)
    playSound("flip")

    try {
      // Clone the share card and add QR code
      const originalCard = shareCardRef.current
      const clone = originalCard.cloneNode(true) as HTMLDivElement

      // Add QR code to the clone if available
      if (qrCodeUrl) {
        const qrContainer = document.createElement("div")
        qrContainer.style.cssText =
          "display: flex; justify-content: center; padding: 16px; margin-top: 16px; border-top: 1px solid rgba(115, 242, 255, 0.2);"

        const qrWrapper = document.createElement("div")
        qrWrapper.style.cssText = "text-align: center;"

        const qrImg = document.createElement("img")
        qrImg.src = qrCodeUrl
        qrImg.style.cssText = "width: 100px; height: 100px; border-radius: 8px;"

        const qrLabel = document.createElement("p")
        qrLabel.textContent = shortLink
        qrLabel.style.cssText = "color: #73F2FF; font-size: 10px; margin-top: 8px; font-family: monospace;"

        qrWrapper.appendChild(qrImg)
        qrWrapper.appendChild(qrLabel)
        qrContainer.appendChild(qrWrapper)
        clone.appendChild(qrContainer)
      }

      // Temporarily append clone to body for rendering
      clone.style.position = "absolute"
      clone.style.left = "-9999px"
      document.body.appendChild(clone)

      const dataUrl = await toPng(clone, {
        quality: 1,
        pixelRatio: 2,
        backgroundColor: "#0a0a1a",
      })

      // Remove clone
      document.body.removeChild(clone)

      const link = document.createElement("a")
      link.download = "love-tarot-reading.png"
      link.href = dataUrl
      link.click()
    } catch (err) {
      console.error("Failed to generate share card:", err)
    } finally {
      setIsDownloading(false)
    }
  }, [shareCardRef, isDownloading, playSound, qrCodeUrl, shortLink])

  return (
    <>
      <motion.section
        className="mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <div
          className="p-5 md:p-6 rounded-2xl"
          style={{
            background: "rgba(115, 242, 255, 0.05)",
            border: "1px solid rgba(115, 242, 255, 0.15)",
            backdropFilter: "blur(10px)",
          }}
        >
          <h3 className="text-sm font-semibold text-[#73F2FF] uppercase tracking-wider mb-5 text-center">
            {t.readingResult.share.title}
          </h3>

          <div className="grid grid-cols-2 md:flex md:flex-row gap-3 md:gap-4 justify-center">
            {/* WhatsApp */}
            <SocialShareButton
              icon={<WhatsAppIcon className="w-5 h-5" />}
              label={t.readingResult.share.whatsapp}
              gradientFrom="#25D366"
              gradientTo="#128C7E"
              onClick={handleWhatsAppShare}
            />

            {/* Facebook */}
            <SocialShareButton
              icon={<FacebookIcon className="w-5 h-5" />}
              label={t.readingResult.share.facebook}
              gradientFrom="#1877F2"
              gradientTo="#0A5DC2"
              onClick={handleFacebookShare}
            />

            {/* TikTok */}
            <SocialShareButton
              icon={<TikTokIcon className="w-5 h-5" />}
              label={t.readingResult.share.tiktok}
              gradientFrom="#69C9D0"
              gradientTo="#EE1D52"
              onClick={handleTikTokShare}
            />

            {/* Download */}
            <SocialShareButton
              icon={<Download className="w-5 h-5" />}
              label={t.readingResult.share.download}
              gradientFrom="#FF4FD8"
              gradientTo="#A855F7"
              onClick={handleDownloadCard}
              isLoading={isDownloading}
            />
          </div>
        </div>
      </motion.section>

      <TikTokModal
        isOpen={showTikTokModal}
        onClose={() => setShowTikTokModal(false)}
        cards={cards}
        summary={overallEnergy}
        shortLink={shortLink || (typeof window !== "undefined" ? window.location.href : "")}
        translations={{
          title: t.readingResult.share.tiktokModal.title,
          past: t.threeCardSpread.positions.past,
          present: t.threeCardSpread.positions.present,
          future: t.threeCardSpread.positions.future,
          copyButton: t.readingResult.share.tiktokModal.copyButton,
          copied: t.readingResult.share.tiktokModal.copied,
        }}
        locale={locale}
      />
    </>
  )
}

export { ShareButtons as default }
