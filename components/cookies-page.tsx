"use client"

import type React from "react"
import { motion } from "framer-motion"
import { useI18n } from "@/lib/i18n/context"
import { I18nProvider } from "@/lib/i18n/context"
import MagicBackground from "./magic-background"
import LanguageSwitcher from "./language-switcher"
import { LogoIcon } from "./logo-icon"
import { ArrowLeft, Cookie } from "lucide-react"
import Link from "next/link"

function CookiesContent() {
  const { t, locale } = useI18n()

  const cookiesInfo = {
    en: {
      title: "Cookies Policy",
      lastUpdated: "Last Updated: December 2024",
      intro: {
        title: "What Are Cookies?",
        content:
          "Cookies are small text files stored on your device when you visit our website. They help us provide you with a better experience by remembering your preferences and understanding how you use our service.",
      },
      types: {
        title: "Types of Cookies We Use",
        essential: {
          title: "1. Essential Cookies (Required)",
          description:
            "These cookies are necessary for the website to function. They enable core functionality such as security, network management, and accessibility.",
          examples: ["Session management", "Security authentication", "Load balancing"],
        },
        analytics: {
          title: "2. Analytics Cookies (Optional)",
          description:
            "We use Google Analytics to understand how visitors interact with our website. This helps us improve our service quality.",
          examples: [
            "Page views and session duration",
            "User navigation patterns",
            "Device and browser information",
          ],
          optOut: "You can opt out of Google Analytics by visiting: tools.google.com/dlpage/gaoptout",
        },
        advertising: {
          title: "3. Advertising Cookies (Third-Party)",
          description:
            "We use Google AdSense to display advertisements. Google and its partners use cookies to serve personalized ads based on your browsing history.",
          examples: [
            "DoubleClick DART cookie for ad personalization",
            "Advertising preferences and interests",
            "Ad performance measurement",
          ],
          optOut: "Manage  advertising preferences at: www.google.com/settings/ads",
          optOut2: "Opt out of third-party advertising cookies at: www.aboutads.info/choices",
        },
      },
      manage: {
        title: "How to Manage Cookies",
        content:
          "You can control and/or delete cookies through your browser settings. Most browsers allow you to refuse cookies or delete specific cookies. However, disabling essential cookies may affect website functionality.",
        browsers: [
          "Chrome: Settings → Privacy and Security → Cookies",
          "Firefox: Settings → Privacy & Security → Cookies and Site Data",
          "Safari: Preferences → Privacy → Manage Website Data",
          "Edge: Settings → Cookies and site permissions",
        ],
      },
      consent: {
        title: "Your Consent",
        content:
          "By continuing to use Love Tarot, you consent to our use of cookies as described in this policy. We keep our tarot reading service free by displaying advertisements, which require advertising cookies.",
      },
    },
    ro: {
      title: "Politica de Cookie-uri",
      lastUpdated: "Ultima actualizare: Decembrie 2024",
      intro: {
        title: "Ce sunt Cookie-urile?",
        content:
          "Cookie-urile sunt fișiere text mici stocate pe dispozitivul dvs. când vizitați site-ul nostru. Ele ne ajută să vă oferim o experiență mai bună, reținând preferințele dvs. și înțelegând cum utilizați serviciul nostru.",
      },
      types: {
        title: "Tipuri de Cookie-uri pe care le folosim",
        essential: {
          title: "1. Cookie-uri Esențiale (Necesare)",
          description:
            "Aceste cookie-uri sunt necesare pentru funcționarea site-ului. Ele permit funcționalitatea de bază, cum ar fi securitatea, gestionarea rețelei și accesibilitatea.",
          examples: ["Gestionarea sesiunii", "Autentificare securizată", "Echilibrare încărcare"],
        },
        analytics: {
          title: "2. Cookie-uri de Analiză (Opționale)",
          description:
            "Folosim Google Analytics pentru a înțelege cum interacționează vizitatorii cu site-ul nostru. Acest lucru ne ajută să îmbunătățim calitatea serviciului.",
           examples: [
            "Vizualizări de pagini și durata sesiunii",
            "Modele de navigare ale utilizatorilor",
            "Informații despre dispozitiv și browser",
          ],
          optOut: "Puteți renunța la Google Analytics vizitând: tools.google.com/dlpage/gaoptout",
        },
        advertising: {
          title: "3. Cookie-uri Publicitare (Terțe părți)",
          description:
            "Folosim Google AdSense pentru afișarea reclamelor. Google și partenerii săi folosesc cookie-uri pentru a afișa reclame personalizate bazate pe istoricul dvs. de navigare.",
          examples: [
            "Cookie-ul DoubleClick DART pentru personalizarea reclamelor",
            "Preferințe și interese publicitare",
            "Măsurarea performanței reclamelor",
          ],
          optOut: "Gestionați preferințele publicitare la: www.google.com/settings/ads",
          optOut2: "Renunțați la cookie-urile publicitare terțe la: www.aboutads.info/choices",
        },
      },
      manage: {
        title: "Cum să gestionați Cookie-urile",
        content:
          "Puteți controla și/sau șterge cookie-urile prin setările browserului. Majoritatea browserelor vă permit să refuzați cookie-urile sau să ștergeți anumite cookie-uri. Cu toate acestea, dezactivarea cookie-urilor esențiale poate afecta funcționalitatea site-ului.",
        browsers: [
          "Chrome: Setări → Confidențialitate și securitate → Cookie-uri",
          "Firefox: Setări → Confidențialitate și securitate → Cookie-uri și date site",
          "Safari: Preferințe → Confidențialitate → Gestionare date site-uri web",
          "Edge: Setări → Cookie-uri și permisiuni site",
        ],
      },
      consent: {
        title: "Consimțământul dvs.",
        content:
          "Continuând să utilizați Love Tarot, consimțiți la utilizarea cookie-urilor așa cum este descris în această politică. Menținem serviciul nostru de lectură tarot gratuit prin afișarea reclamelor, care necesită cookie-uri publicitare.",
      },
    },
    zh: {
      title: "Cookie 政策",
      lastUpdated: "最后更新：2024年12月",
      intro: {
        title: "什么是 Cookie？",
        content:
          "Cookie 是您访问我们网站时存储在您设备上的小型文本文件。它们通过记住您的偏好并了解您如何使用我们的服务，帮助我们为您提供更好的体验。",
      },
      types: {
        title: "我们使用的 Cookie 类型",
        essential: {
          title: "1. 必要 Cookie（必需）",
          description:
            "这些 Cookie 对于网站功能是必需的。它们启用核心功能，如安全性、网络管理和可访问性。",
          examples: ["会话管理", "安全认证", "负载平衡"],
        },
        analytics: {
          title: "2. 分析 Cookie（可选）",
          description:
            "我们使用 Google Analytics 来了解访问者如何与我们的网站互动。这有助于我们提高服务质量。",
          examples: ["页面浏览量和会话时长", "用户导航模式", "设备和浏览器信息"],
          optOut: "您可以通过访问以下网址选择退出 Google Analytics：tools.google.com/dlpage/gaoptout",
        },
        advertising: {
          title: "3. 广告 Cookie（第三方）",
          description:
            "我们使用 Google AdSense 展示广告。Google 及其合作伙伴使用 Cookie 根据您的浏览历史投放个性化广告。",
          examples: [
            "用于广告个性化的 DoubleClick DART cookie",
            "广告偏好和兴趣",
            "广告效果衡量",
          ],
          optOut: "在以下网址管理广告偏好：www.google.com/settings/ads",
          optOut2: "在以下网址选择退出第三方广告 Cookie：www.aboutads.info/choices",
        },
      },
      manage: {
        title: "如何管理 Cookie",
        content:
          "您可以通过浏览器设置控制和/或删除 Cookie。大多数浏览器允许您拒绝 Cookie 或删除特定 Cookie。但是，禁用必要 Cookie 可能会影响网站功能。",
        browsers: [
          "Chrome：设置 → 隐私和安全 → Cookie",
          "Firefox：设置 → 隐私与安全 → Cookie 和网站数据",
          "Safari：偏好设置 → 隐私 → 管理网站数据",
          "Edge：设置 → Cookie 和网站权限",
        ],
      },
      consent: {
        title: "您的同意",
        content:
          "继续使用 Love Tarot，即表示您同意我们按照本政策中所述使用 Cookie。我们通过展示广告来保持塔罗牌解读服务免费，这需要广告 Cookie。",
      },
    },
  }

  const content = cookiesInfo[locale as keyof typeof cookiesInfo] || cookiesInfo.en

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
              <Cookie className="w-8 h-8 text-[#FF4FD8]" />
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

            {/* Types */}
            <div
              className="p-6 rounded-xl"
              style={{
                background: "linear-gradient(135deg, rgba(26,10,46,0.8) 0%, rgba(15,10,32,0.9) 100%)",
                border: "1px solid rgba(255,79,216,0.2)",
              }}
            >
              <h2 className="text-xl font-semibold text-[#73F2FF] mb-4">{content.types.title}</h2>

              <div className="space-y-5">
                {/* Essential */}
                <div>
                  <h3 className="text-lg font-medium text-[#FF4FD8] mb-2">{content.types.essential.title}</h3>
                  <p className="text-foreground/70 text-sm mb-2">{content.types.essential.description}</p>
                  <ul className="list-disc list-inside space-y-1 text-foreground/60 text-sm">
                    {content.types.essential.examples.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>

                {/* Analytics */}
                <div>
                  <h3 className="text-lg font-medium text-[#FF4FD8] mb-2">{content.types.analytics.title}</h3>
                  <p className="text-foreground/70 text-sm mb-2">{content.types.analytics.description}</p>
                  <ul className="list-disc list-inside space-y-1 text-foreground/60 text-sm mb-2">
                    {content.types.analytics.examples.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                  <p className="text-[#73F2FF]/80 text-xs italic">{content.types.analytics.optOut}</p>
                </div>

                {/* Advertising */}
                <div>
                  <h3 className="text-lg font-medium text-[#FF4FD8] mb-2">{content.types.advertising.title}</h3>
                  <p className="text-foreground/70 text-sm mb-2">{content.types.advertising.description}</p>
                  <ul className="list-disc list-inside space-y-1 text-foreground/60 text-sm mb-2">
                    {content.types.advertising.examples.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                  <p className="text-[#73F2FF]/80 text-xs italic mb-1">{content.types.advertising.optOut}</p>
                  <p className="text-[#73F2FF]/80 text-xs italic">{content.types.advertising.optOut2}</p>
                </div>
              </div>
            </div>

            {/* Manage */}
            <div
              className="p-6 rounded-xl"
              style={{
                background: "linear-gradient(135deg, rgba(26,10,46,0.8) 0%, rgba(15,10,32,0.9) 100%)",
                border: "1px solid rgba(255,79,216,0.2)",
              }}
            >
              <h2 className="text-xl font-semibold text-[#73F2FF] mb-3">{content.manage.title}</h2>
              <p className="text-foreground/70 text-sm mb-3 leading-relaxed">{content.manage.content}</p>
              <ul className="list-disc list-inside space-y-1 text-foreground/60 text-sm">
                {content.manage.browsers.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>

            {/* Consent */}
            <div
              className="p-6 rounded-xl"
              style={{
                background: "linear-gradient(135deg, rgba(26,10,46,0.8) 0%, rgba(15,10,32,0.9) 100%)",
                border: "1px solid rgba(255,79,216,0.2)",
              }}
            >
              <h2 className="text-xl font-semibold text-[#73F2FF] mb-3">{content.consent.title}</h2>
              <p className="text-foreground/70 text-sm leading-relaxed">{content.consent.content}</p>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  )
}

export default function CookiesPage() {
  return (
    <I18nProvider>
      <CookiesContent />
    </I18nProvider>
  )
}
