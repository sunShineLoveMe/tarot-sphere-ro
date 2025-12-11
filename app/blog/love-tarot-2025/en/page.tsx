import type { Metadata } from "next"
import ArticleLayout from "@/components/blog/article-layout"
import Link from "next/link"

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.tarotromania.com"

const article = {
  slug: "love-tarot-2025",
  lang: "en" as const,
  title: "Love Tarot Reading: What Your Heart Needs to Hear in 2025",
  description:
    "Discover how love tarot readings can offer honest guidance for your relationships in 2025. Learn to ask the right questions and embrace emotional clarity.",
  publishedAt: "2025-01-10",
  readingTime: 8,
  keywords: ["love tarot reading", "relationship guidance", "Romania tarot", "tarot reading 2025", "emotional wisdom"],
}

const headings = [
  { id: "what-love-tarot-reveals", title: "What Love Tarot Really Reveals", level: 2 },
  { id: "asking-the-right-question", title: "How to Ask the Right Question", level: 2 },
  { id: "emotional-trends-2025", title: "2025 Emotional Trends in Love Tarot", level: 2 },
  { id: "reflection-not-prediction", title: "How Tarot Supports Reflection, Not Prediction", level: 2 },
  { id: "start-your-journey", title: "Start Your Love Tarot Reflection", level: 2 },
]

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: article.title,
  description: article.description,
  image: `${siteUrl}/og-default.png`,
  author: {
    "@type": "Organization",
    name: "Love Tarot Romania",
    url: siteUrl,
  },
  publisher: {
    "@type": "Organization",
    name: "Love Tarot Romania",
    logo: {
      "@type": "ImageObject",
      url: `${siteUrl}/logo-love-tarot.svg`,
    },
  },
  datePublished: article.publishedAt,
  dateModified: article.publishedAt,
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": `${siteUrl}/blog/${article.slug}/en`,
  },
  inLanguage: "en",
  keywords: article.keywords.join(", "),
}

export const metadata: Metadata = {
  title: article.title,
  description: article.description,
  keywords: article.keywords,
  authors: [{ name: "Love Tarot Romania" }],
  openGraph: {
    title: article.title,
    description: article.description,
    url: `${siteUrl}/blog/${article.slug}/en`,
    siteName: "Love Tarot Romania",
    images: [{ url: "/og-default.png", width: 1200, height: 630 }],
    type: "article",
    publishedTime: article.publishedAt,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: article.title,
    description: article.description,
    images: ["/og-default.png"],
  },
  alternates: {
    canonical: `${siteUrl}/blog/${article.slug}/en`,
    languages: {
      en: `${siteUrl}/blog/${article.slug}/en`,
      ro: `${siteUrl}/blog/${article.slug}/ro`,
      "zh-CN": `${siteUrl}/blog/${article.slug}/zh`,
    },
  },
}

export default function LoveTarot2025ENPage() {
  const prevArticle = null
  const nextArticle = {
    slug: "love-tarot-2025",
    lang: "ro" as const,
    title: "Citirea Tarotului Iubirii: Ce Trebuie Să Audă Inima Ta în 2025",
    description: "",
    publishedAt: "2025-01-10",
    readingTime: 8,
    keywords: [],
  }

  return (
    <ArticleLayout
      article={article}
      headings={headings}
      prevArticle={prevArticle}
      nextArticle={nextArticle}
      jsonLd={jsonLd}
    >
      <p className="text-xl leading-relaxed mb-8">
        Love is one of the most profound experiences of human life—complex, transformative, and deeply personal. In
        2025, as we navigate an increasingly connected yet emotionally fragmented world, many are turning to{" "}
        <strong>love tarot reading</strong> not for fortune-telling, but for honest{" "}
        <strong>relationship guidance</strong> and emotional clarity.
      </p>

      <p className="mb-6">
        Whether you're in Romania, across Europe, or anywhere in the world, the timeless wisdom of tarot offers a mirror
        for self-reflection. This article explores how love tarot can help you understand your heart's true needs in
        2025—without making promises about the future.
      </p>

      <h2 id="what-love-tarot-reveals" className="text-2xl font-semibold text-[#73F2FF] mt-12 mb-4">
        What Love Tarot Really Reveals
      </h2>

      <p className="mb-6">
        Contrary to popular belief, tarot doesn't predict who you'll marry or when you'll find love. Instead,{" "}
        <strong>love tarot reading</strong> illuminates the emotional patterns, fears, and desires that shape your
        romantic experiences. It's a tool for introspection, not prophecy.
      </p>

      <p className="mb-6">
        When you draw cards in a love reading, you're essentially having a conversation with your subconscious. The
        imagery and symbolism of tarot cards—from The Lovers to The Two of Cups—act as prompts that help you articulate
        feelings you may struggle to express otherwise.
      </p>

      <ul className="list-disc pl-6 mb-6 space-y-2 text-foreground/80">
        <li>Understanding recurring relationship patterns</li>
        <li>Identifying emotional blocks or fears</li>
        <li>Clarifying what you truly want in a partner</li>
        <li>Recognizing growth opportunities in current relationships</li>
      </ul>

      <h2 id="asking-the-right-question" className="text-2xl font-semibold text-[#73F2FF] mt-12 mb-4">
        How to Ask the Right Question
      </h2>

      <p className="mb-6">
        The quality of your <strong>tarot reading 2025</strong> experience depends largely on the questions you ask.
        Vague questions like "Will I find love?" often lead to unclear guidance. Instead, focus on questions that invite
        reflection:
      </p>

      <ul className="list-disc pl-6 mb-6 space-y-2 text-foreground/80">
        <li>
          <em>"What is preventing me from opening my heart fully?"</em>
        </li>
        <li>
          <em>"What can I learn from my past relationship?"</em>
        </li>
        <li>
          <em>"How can I nurture more love in my current partnership?"</em>
        </li>
        <li>
          <em>"What emotional patterns should I be aware of?"</em>
        </li>
      </ul>

      <p className="mb-6">
        These questions shift the focus from external outcomes to internal growth—exactly where tarot's wisdom shines
        brightest. Whether you're using our{" "}
        <Link href="/" className="text-[#FF4FD8] hover:underline">
          Love Tarot
        </Link>{" "}
        platform or exploring independently, thoughtful questions lead to meaningful insights.
      </p>

      <h2 id="emotional-trends-2025" className="text-2xl font-semibold text-[#73F2FF] mt-12 mb-4">
        2025 Emotional Trends in Love Tarot
      </h2>

      <p className="mb-6">
        As we move through 2025, certain emotional themes are emerging in love readings worldwide. Here in{" "}
        <strong>Romania</strong> and across Europe, practitioners are noticing:
      </p>

      <ol className="list-decimal pl-6 mb-6 space-y-4 text-foreground/80">
        <li>
          <strong>A return to emotional authenticity</strong> – After years of curated social media personas, people are
          craving genuine emotional connections. Cards like The Star and The Sun appear frequently, suggesting a
          collective desire for hope and openness.
        </li>
        <li>
          <strong>Healing from past wounds</strong> – The Three of Swords and The Tower have been showing up in
          readings, indicating that many are finally processing old heartbreaks. This is healthy—healing must happen
          before new love can flourish.
        </li>
        <li>
          <strong>Redefining commitment</strong> – Traditional relationship structures are being questioned. The
          Hierophant reversed appears often, suggesting people are creating their own definitions of partnership and
          devotion.
        </li>
        <li>
          <strong>Self-love as foundation</strong> – Perhaps the most significant trend is the emphasis on self-love.
          The Empress and The Emperor remind us that loving ourselves fully is the prerequisite for healthy romantic
          relationships.
        </li>
      </ol>

      <h2 id="reflection-not-prediction" className="text-2xl font-semibold text-[#73F2FF] mt-12 mb-4">
        How Tarot Supports Reflection, Not Prediction
      </h2>

      <p className="mb-6">
        Let's be clear: responsible <strong>love tarot reading</strong> never claims to predict specific outcomes. No
        card can tell you exactly when you'll meet your soulmate or whether your ex will return. What tarot does offer
        is invaluable in its own right:
      </p>

      <ul className="list-disc pl-6 mb-6 space-y-2 text-foreground/80">
        <li>
          <strong>Perspective</strong> – Seeing your situation from different angles
        </li>
        <li>
          <strong>Validation</strong> – Confirming intuitions you may have dismissed
        </li>
        <li>
          <strong>Empowerment</strong> – Reminding you that you have agency in your love life
        </li>
        <li>
          <strong>Compassion</strong> – Encouraging gentleness toward yourself and others
        </li>
      </ul>

      <p className="mb-6">
        Psychologists and therapists increasingly recognize tarot as a legitimate tool for
        <strong>relationship guidance</strong>. The symbolic language of the cards bypasses our rational defenses,
        allowing deeper truths to surface. It's not magic—it's psychology dressed in beautiful imagery.
      </p>

      <blockquote className="border-l-4 border-[#FF4FD8] pl-6 my-8 italic text-foreground/70">
        "Tarot doesn't tell you what will happen. It shows you what's already happening within you— and invites you to
        choose your response." — Modern Tarot Practitioner
      </blockquote>

      <h2 id="start-your-journey" className="text-2xl font-semibold text-[#73F2FF] mt-12 mb-4">
        Start Your Love Tarot Reflection
      </h2>

      <p className="mb-6">
        If you're ready to explore what your heart needs to hear in 2025, we invite you to experience a thoughtful love
        tarot reading. Our platform combines traditional tarot wisdom with modern psychological insights, designed
        specifically for emotional reflection.
      </p>

      <p className="mb-6">
        Remember: the cards are not fortune tellers. They are mirrors, reflecting back the truths you already carry
        within. Whether you're seeking clarity about a current relationship, healing from a past one, or preparing your
        heart for future love, tarot offers a gentle, non-judgmental space for exploration.
      </p>

      <div className="my-10 p-6 rounded-2xl bg-gradient-to-r from-[#FF4FD8]/10 to-[#73F2FF]/10 border border-[#FF4FD8]/30 text-center">
        <p className="text-lg mb-4">Ready to discover what your heart needs?</p>
        <Link
          href="/intake"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium text-white"
          style={{
            background: "linear-gradient(135deg, #FF4FD8 0%, #73F2FF 100%)",
          }}
        >
          Start Your Love Tarot Reflection
        </Link>
      </div>

      <p className="text-foreground/60 text-sm mt-8">
        Explore more insights on our{" "}
        <Link href="/blog" className="text-[#73F2FF] hover:underline">
          blog
        </Link>
        , or learn about our approach on the{" "}
        <Link href="/" className="text-[#73F2FF] hover:underline">
          home page
        </Link>
        .
      </p>
    </ArticleLayout>
  )
}
