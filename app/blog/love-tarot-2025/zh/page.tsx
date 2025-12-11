import type { Metadata } from "next"
import ArticleLayout from "@/components/blog/article-layout"
import Link from "next/link"

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.tarotromania.com"

const article = {
  slug: "love-tarot-2025",
  lang: "zh" as const,
  title: "爱情塔罗牌解读：2025年你的内心需要听到什么",
  description: "探索爱情塔罗牌如何为你的感情生活提供真诚的指引。学会提出正确的问题，拥抱情感的清晰与成长。",
  publishedAt: "2025-01-10",
  readingTime: 8,
  keywords: ["爱情塔罗", "感情指导", "塔罗牌2025", "情感智慧", "心理塔罗"],
}

const headings = [
  { id: "tarot-reveals", title: "爱情塔罗真正揭示什么", level: 2 },
  { id: "right-question", title: "如何提出正确的问题", level: 2 },
  { id: "trends-2025", title: "2025年爱情塔罗的情感趋势", level: 2 },
  { id: "reflection", title: "塔罗如何支持反思而非预测", level: 2 },
  { id: "start-journey", title: "开始你的爱情塔罗反思之旅", level: 2 },
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
    "@id": `${siteUrl}/blog/${article.slug}/zh`,
  },
  inLanguage: "zh-CN",
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
    url: `${siteUrl}/blog/${article.slug}/zh`,
    siteName: "Love Tarot Romania",
    images: [{ url: "/og-default.png", width: 1200, height: 630 }],
    type: "article",
    publishedTime: article.publishedAt,
    locale: "zh_CN",
  },
  twitter: {
    card: "summary_large_image",
    title: article.title,
    description: article.description,
    images: ["/og-default.png"],
  },
  alternates: {
    canonical: `${siteUrl}/blog/${article.slug}/zh`,
    languages: {
      en: `${siteUrl}/blog/${article.slug}/en`,
      ro: `${siteUrl}/blog/${article.slug}/ro`,
      "zh-CN": `${siteUrl}/blog/${article.slug}/zh`,
    },
  },
}

export default function LoveTarot2025ZHPage() {
  const prevArticle = {
    slug: "love-tarot-2025",
    lang: "ro" as const,
    title: "Citirea Tarotului Iubirii: Ce Trebuie Să Audă Inima Ta în 2025",
    description: "",
    publishedAt: "2025-01-10",
    readingTime: 8,
    keywords: [],
  }
  const nextArticle = null

  return (
    <ArticleLayout
      article={article}
      headings={headings}
      prevArticle={prevArticle}
      nextArticle={nextArticle}
      jsonLd={jsonLd}
    >
      <p className="text-xl leading-relaxed mb-8">
        爱情是人类生命中最深刻的体验之一——复杂、具有变革性，且极其个人化。
        在2025年，当我们在一个日益互联却情感碎片化的世界中航行时， 许多人转向<strong>爱情塔罗牌解读</strong>
        ，不是为了占卜未来， 而是为了获得真诚的<strong>感情指导</strong>和情感清晰。
      </p>

      <p className="mb-6">
        无论你身在何处，塔罗牌永恒的智慧都能提供一面自我反思的镜子。
        本文探讨爱情塔罗如何帮助你理解2025年内心真正的需求——而不做任何关于未来的承诺。
      </p>

      <h2 id="tarot-reveals" className="text-2xl font-semibold text-[#73F2FF] mt-12 mb-4">
        爱情塔罗真正揭示什么
      </h2>

      <p className="mb-6">
        与普遍认知相反，塔罗牌并不能预测你会和谁结婚或何时找到爱情。 相反，<strong>爱情塔罗牌解读</strong>
        照亮的是塑造你浪漫体验的情感模式、恐惧和渴望。 它是内省的工具，而非预言。
      </p>

      <p className="mb-6">
        当你在爱情解读中抽取牌时，你实际上是在与潜意识进行对话。 塔罗牌的意象和象征意义——从恋人牌到圣杯二——充当提示，
        帮助你表达那些可能难以用言语表达的感受。
      </p>

      <ul className="list-disc pl-6 mb-6 space-y-2 text-foreground/80">
        <li>理解反复出现的关系模式</li>
        <li>识别情感障碍或恐惧</li>
        <li>明确你真正想要的伴侣特质</li>
        <li>认识当前关系中的成长机会</li>
      </ul>

      <h2 id="right-question" className="text-2xl font-semibold text-[#73F2FF] mt-12 mb-4">
        如何提出正确的问题
      </h2>

      <p className="mb-6">
        你的<strong>2025塔罗牌解读</strong>体验质量很大程度上取决于你提出的问题。
        像"我会找到爱情吗？"这样模糊的问题往往会导致不清晰的指引。 相反，专注于邀请反思的问题：
      </p>

      <ul className="list-disc pl-6 mb-6 space-y-2 text-foreground/80">
        <li>
          <em>"是什么阻止我完全敞开心扉？"</em>
        </li>
        <li>
          <em>"我能从过去的关系中学到什么？"</em>
        </li>
        <li>
          <em>"我如何在当前的伴侣关系中培养更多的爱？"</em>
        </li>
        <li>
          <em>"我应该注意哪些情感模式？"</em>
        </li>
      </ul>

      <p className="mb-6">
        这些问题将焦点从外部结果转移到内在成长——这正是塔罗智慧最闪耀的地方。 无论你是使用我们的
        <Link href="/" className="text-[#FF4FD8] hover:underline">
          Love Tarot
        </Link>
        平台 还是独立探索，深思熟虑的问题会带来有意义的洞察。
      </p>

      <h2 id="trends-2025" className="text-2xl font-semibold text-[#73F2FF] mt-12 mb-4">
        2025年爱情塔罗的情感趋势
      </h2>

      <p className="mb-6">
        随着2025年的推进，某些情感主题正在全球范围内的爱情解读中浮现。 在欧洲和世界各地，从业者们注意到：
      </p>

      <ol className="list-decimal pl-6 mb-6 space-y-4 text-foreground/80">
        <li>
          <strong>回归情感真实性</strong> ——在多年精心策划的社交媒体形象之后，
          人们渴望真正的情感连接。星星牌和太阳牌频繁出现， 表明集体对希望和开放的渴望。
        </li>
        <li>
          <strong>治愈过去的创伤</strong> ——宝剑三和塔牌出现在解读中，
          表明许多人终于在处理旧日的心碎。这是健康的——治愈必须发生在新爱情能够绽放之前。
        </li>
        <li>
          <strong>重新定义承诺</strong> ——传统的关系结构正在被质疑。
          逆位教皇牌经常出现，表明人们正在创造自己对伴侣关系和奉献的定义。
        </li>
        <li>
          <strong>自爱作为基础</strong> ——也许最重要的趋势是对自爱的强调。
          皇后牌和皇帝牌提醒我们，完全爱自己是健康浪漫关系的前提。
        </li>
      </ol>

      <h2 id="reflection" className="text-2xl font-semibold text-[#73F2FF] mt-12 mb-4">
        塔罗如何支持反思而非预测
      </h2>

      <p className="mb-6">
        让我们明确：负责任的<strong>爱情塔罗牌解读</strong>从不声称能预测具体结果。
        没有任何牌能告诉你确切何时会遇到灵魂伴侣或前任是否会回来。 塔罗所提供的本身就是无价的：
      </p>

      <ul className="list-disc pl-6 mb-6 space-y-2 text-foreground/80">
        <li>
          <strong>视角</strong> ——从不同角度看待你的处境
        </li>
        <li>
          <strong>确认</strong> ——证实你可能曾忽视的直觉
        </li>
        <li>
          <strong>赋权</strong> ——提醒你在爱情生活中拥有主动权
        </li>
        <li>
          <strong>慈悲</strong> ——鼓励对自己和他人温柔以待
        </li>
      </ul>

      <blockquote className="border-l-4 border-[#FF4FD8] pl-6 my-8 italic text-foreground/70">
        "塔罗不会告诉你将要发生什么。它向你展示你内心已经发生的事情—— 并邀请你选择你的回应。" —— 现代塔罗从业者
      </blockquote>

      <h2 id="start-journey" className="text-2xl font-semibold text-[#73F2FF] mt-12 mb-4">
        开始你的爱情塔罗反思之旅
      </h2>

      <p className="mb-6">
        如果你准备好探索2025年你的内心需要听到什么，我们邀请你体验
        一次深思熟虑的爱情塔罗解读。我们的平台将传统塔罗智慧与现代心理学洞察相结合， 专门为情感反思而设计。
      </p>

      <div className="my-10 p-6 rounded-2xl bg-gradient-to-r from-[#FF4FD8]/10 to-[#73F2FF]/10 border border-[#FF4FD8]/30 text-center">
        <p className="text-lg mb-4">准备好发现你的内心需要什么了吗？</p>
        <Link
          href="/intake"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium text-white"
          style={{
            background: "linear-gradient(135deg, #FF4FD8 0%, #73F2FF 100%)",
          }}
        >
          开始你的爱情塔罗反思
        </Link>
      </div>

      <p className="text-foreground/60 text-sm mt-8">
        在我们的
        <Link href="/blog" className="text-[#73F2FF] hover:underline">
          博客
        </Link>
        上探索更多见解， 或在
        <Link href="/" className="text-[#73F2FF] hover:underline">
          首页
        </Link>
        了解我们的方法。
      </p>
    </ArticleLayout>
  )
}
