"use client"

import type React from "react"
import { motion } from "framer-motion"
import { useI18n } from "@/lib/i18n/context"
import { I18nProvider } from "@/lib/i18n/context"
import MagicBackground from "./magic-background"
import LanguageSwitcher from "./language-switcher"
import { LogoIcon } from "./logo-icon"
import { ArrowLeft, Megaphone } from "lucide-react"
import Link from "next/link"

function AdvertisingContent() {
  const { t, locale } = useI18n()

  const adsInfo = {
    en: {
      title: "About Our Ads",
      lastUpdated: "Last Updated: December 2024",
      intro: {
        title: "Why We Show Ads",
        content:
          "Love Tarot is completely free to use. To keep our tarot reading service accessible to everyone at no cost, we display advertisements provided by Google AdSense. The revenue from these ads helps us maintain and improve the service.",
      },
      howItWorks: {
        title: "How Ad Personalization Works",
        content:
          "Google AdSense uses cookies and similar technologies to show you ads that may be relevant to your interests. These ads are based on:",
        items: [
          "Your previous visits to our website and other websites",
          "Your interactions with ads and content",
          "Information from advertising partners",
          "General location and language preferences",
        ],
        note: "We do not personally collect or store your browsing data for advertising purposes. All ad personalization is managed by Google.",
      },
      thirdParty: {
        title: "Third-Party Advertising",
        content:
          "We use Google AdSense, which may allow third-party advertisers to display ads on our website. These advertisers may use cookies to collect information about your visits to this and other websites to provide relevant advertisements.",
        vendor: "Primary advertising vendor: Google LLC",
      },
      control: {
        title: "How to Control Your Ad Experience",
        content: "You have several options to manage the ads you see:",
        options: [
          {
            title: "Customize Ad Settings",
            description: "Visit Google's Ads Settings to customize your advertising preferences:",
            link: "www.google.com/settings/ads",
          },
          {
            title: "Opt Out of Personalized Ads",
            description: "You can opt out of personalized advertising while still seeing generic ads:",
            link: "www.aboutads.info/choices",
          },
          {
            title: "Use Browser Settings",
            description:
              "Configure your browser to block third-party cookies, though this may affect website functionality.",
          },
          {
            title: "Ad Blockers",
            description:
              "You can use ad-blocking software, but please note that ads help us keep this service free for everyone.",
          },
        ],
      },
      commitment: {
        title: "Our Commitment",
        content:
          "We are committed to displaying only appropriate, non-intrusive advertisements. We do not control the specific ads shown, as they are managed by Google AdSense. If you encounter any inappropriate ads, please contact us so we can report them to Google.",
      },
    },
    ro: {
      title: "Despre Reclamele Noastre",
      lastUpdated: "Ultima actualizare: Decembrie 2024",
      intro: {
        title: "De ce afișăm reclame",
        content:
          "Love Tarot este complet gratuit. Pentru a menține serviciul nostru de citire tarot accesibil tuturor fără costuri, afișăm reclame furnizate de Google AdSense. Veniturile din aceste reclame ne ajută să menținem și să îmbunătățim serviciul.",
      },
      howItWorks: {
        title: "Cum funcționează personalizarea reclamelor",
        content:
          "Google AdSense folosește cookie-uri și tehnologii similare pentru a vă arăta reclame care ar putea fi relevante pentru interesele dvs. Aceste reclame se bazează pe:",
        items: [
          "Vizitele dvs. anterioare pe site-ul nostru și alte site-uri web",
          "Interacțiunile dvs. cu reclamele și conținutul",
          "Informații de la partenerii publicitari",
          "Locația generală și preferințele lingvistice",
        ],
        note: "Nu colectăm sau stocăm personal datele dvs. de navigare în scopuri publicitare. Toată personalizarea reclamelor este gestionată de Google.",
      },
      thirdParty: {
        title: "Publicitate de la terți",
        content:
          "Folosim Google AdSense, care poate permite furnizorilor de publicitate terți să afișeze reclame pe site-ul nostru. Acești furnizori pot folosi cookie-uri pentru a colecta informații despre vizitele dvs. pe acest și alte site-uri web pentru a oferi reclame relevante.",
        vendor: "Furnizor principal de publicitate: Google LLC",
      },
      control: {
        title: "Cum să controlați experiența publicitară",
        content: "Aveți mai multe opțiuni pentru a gestiona reclamele pe care le vedeți:",
        options: [
          {
            title: "Personalizați setările de reclame",
            description: "Vizitați Setările de reclame Google pentru a personaliza preferințele publicitare:",
            link: "www.google.com/settings/ads",
          },
          {
            title: "Renunțați la reclamele personalizate",
            description:
              "Puteți renunța la publicitatea personalizată, continuând totuși să vedeți reclame generice:",
            link: "www.aboutads.info/choices",
          },
          {
            title: "Folosiți setările browserului",
            description:
              "Configurați browserul pentru a bloca cookie-urile terțe, deși acest lucru poate afecta funcționalitatea site-ului.",
          },
          {
            title: "Blocări de reclame",
            description:
              "Puteți folosi software de blocare a reclamelor, dar vă rugăm să rețineți că reclamele ne ajută să menținem acest serviciu gratuit pentru toată lumea.",
          },
        ],
      },
      commitment: {
        title: "Angajamentul nostru",
        content:
          "Ne angajăm să afișăm doar reclame adecvate și non-intruzive. Nu controlăm reclamele specifice afișate, deoarece acestea sunt gestionate de Google AdSense. Dacă întâlniți reclame nepotrivite, vă rugăm să ne contactați pentru a le raporta la Google.",
      },
    },
    zh: {
      title: "关于我们的广告",
      lastUpdated: "最后更新：2024年12月",
      intro: {
        title: "为什么展示广告",
        content:
          "Love Tarot 完全免费使用。为了让所有人都能免费访问我们的塔罗牌解读服务，我们展示由 Google AdSense 提供的广告。这些广告的收入帮助我们维护和改进服务。",
      },
      howItWorks: {
        title: "广告个性化的工作原理",
        content: "Google AdSense 使用 Cookie 和类似技术向您展示可能与您的兴趣相关的广告。这些广告基于：",
        items: [
          "您之前访问我们网站和其他网站的记录",
          "您与广告和内容的互动",
          "来自广告合作伙伴的信息",
          "大致位置和语言偏好",
        ],
        note: "我们不会为广告目的个人收集或存储您的浏览数据。所有广告个性化均由 Google 管理。",
      },
      thirdParty: {
        title: "第三方广告",
        content:
          "我们使用 Google AdSense，它可能允许第三方广告商在我们的网站上展示广告。这些广告商可能使用 Cookie 收集您访问本网站和其他网站的信息，以提供相关广告。",
        vendor: "主要广告供应商：Google LLC",
      },
      control: {
        title: "如何控制您的广告体验",
        content: "您有几种选项来管理您看到的广告：",
        options: [
          {
            title: "自定义广告设置",
            description: "访问 Google 的广告设置来自定义您的广告偏好：",
            link: "www.google.com/settings/ads",
          },
          {
            title: "选择退出个性化广告",
            description: "您可以选择退出个性化广告，同时仍然看到通用广告：",
            link: "www.aboutads.info/choices",
          },
          {
            title: "使用浏览器设置",
            description: "配置您的浏览器以阻止第三方 Cookie，尽管这可能会影响网站功能。",
          },
          {
            title: "广告拦截器",
            description: "您可以使用广告拦截软件，但请注意广告帮助我们为所有人保持此服务免费。",
          },
        ],
      },
      commitment: {
        title: "我们的承诺",
        content:
          "我们致力于仅展示适当的、非侵入性的广告。我们不控制展示的具体广告，因为它们由 Google AdSense 管理。如果您遇到任何不适当的广告，请联系我们，以便我们向 Google 报告。",
      },
    },
  }

  const content = adsInfo[locale as keyof typeof adsInfo] || adsInfo.en

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
        <div className="max-w-[700px] mx-auto">
          {/* Title */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-8">
            <div className="inline-flex items-center gap-2 mb-4">
              <Megaphone className="w-8 h-8 text-[#FF4FD8]" />
            </div>
            <h1 className="text-3xl sm:text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#FF4FD8] to-[#73F2FF] mb-2">
              {content.title}
            </h1>
            <p className="text-foreground/50 text-sm">{content.lastUpdated}</p>
          </motion.div>

          {/* Sections */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            {/* Intro */}
            <div
              className="p-6 rounded-xl"
              style={{
                background: "linear-gradient(135deg, rgba(26,10,46,0.8) 0%, rgba(15,10,32,0.9) 100%)",
                border: "1px solid rgba(255,79,216,0.2)",
              }}
            >
              <h2 className="text-xl font-semibold text-[#73F2FF] mb-3">{content.intro.title}</h2>
              <p className="text-foreground/70 text-sm leading-relaxed">{content.intro.content}</p>
            </div>

            {/* How It Works */}
            <div
              className="p-6 rounded-xl"
              style={{
                background: "linear-gradient(135deg, rgba(26,10,46,0.8) 0%, rgba(15,10,32,0.9) 100%)",
                border: "1px solid rgba(255,79,216,0.2)",
              }}
            >
              <h2 className="text-xl font-semibold text-[#73F2FF] mb-3">{content.howItWorks.title}</h2>
              <p className="text-foreground/70 text-sm mb-3">{content.howItWorks.content}</p>
              <ul className="list-disc list-inside space-y-1 text-foreground/60 text-sm mb-3">
                {content.howItWorks.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
              <p className="text-[#FF4FD8]/70 text-xs italic">{content.howItWorks.note}</p>
            </div>

            {/* Third Party */}
            <div
              className="p-6 rounded-xl"
              style={{
                background: "linear-gradient(135deg, rgba(26,10,46,0.8) 0%, rgba(15,10,32,0.9) 100%)",
                border: "1px solid rgba(255,79,216,0.2)",
              }}
            >
              <h2 className="text-xl font-semibold text-[#73F2FF] mb-3">{content.thirdParty.title}</h2>
              <p className="text-foreground/70 text-sm mb-2 leading-relaxed">{content.thirdParty.content}</p>
              <p className="text-[#73F2FF]/80 text-sm font-medium">{content.thirdParty.vendor}</p>
            </div>

            {/* Control */}
            <div
              className="p-6 rounded-xl"
              style={{
                background: "linear-gradient(135deg, rgba(26,10,46,0.8) 0%, rgba(15,10,32,0.9) 100%)",
                border: "1px solid rgba(255,79,216,0.2)",
              }}
            >
              <h2 className="text-xl font-semibold text-[#73F2FF] mb-3">{content.control.title}</h2>
              <p className="text-foreground/70 text-sm mb-4">{content.control.content}</p>
              <div className="space-y-4">
                {content.control.options.map((option, i) => (
                  <div key={i}>
                    <h3 className="text-[#FF4FD8] font-medium mb-1 text-sm">{option.title}</h3>
                    <p className="text-foreground/60 text-sm mb-1">{option.description}</p>
                    {option.link && (
                      <p className="text-[#73F2FF] text-xs font-mono bg-[#73F2FF]/10 px-2 py-1 rounded inline-block">
                        {option.link}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Commitment */}
            <div
              className="p-6 rounded-xl"
              style={{
                background: "linear-gradient(135deg, rgba(26,10,46,0.8) 0%, rgba(15,10,32,0.9) 100%)",
                border: "1px solid rgba(255,79,216,0.2)",
              }}
            >
              <h2 className="text-xl font-semibold text-[#73F2FF] mb-3">{content.commitment.title}</h2>
              <p className="text-foreground/70 text-sm leading-relaxed">{content.commitment.content}</p>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  )
}

export default function AdvertisingPage() {
  return (
    <I18nProvider>
      <AdvertisingContent />
    </I18nProvider>
  )
}
