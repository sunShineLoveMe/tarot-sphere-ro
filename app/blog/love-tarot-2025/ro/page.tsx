import type { Metadata } from "next"
import ArticleLayout from "@/components/blog/article-layout"
import Link from "next/link"

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.tarotromania.com"

const article = {
  slug: "love-tarot-2025",
  lang: "ro" as const,
  title: "Citirea Tarotului Iubirii: Ce Trebuie Să Audă Inima Ta în 2025",
  description:
    "Descoperă cum citirile de tarot pentru iubire pot oferi îndrumări sincere pentru relațiile tale în 2025. Învață să pui întrebările potrivite și să îmbrățișezi claritatea emoțională.",
  publishedAt: "2025-01-10",
  readingTime: 8,
  keywords: ["tarot iubire", "ghid relații", "tarot Romania", "citire tarot 2025", "înțelepciune emoțională"],
}

const headings = [
  { id: "ce-dezvaluie-tarotul", title: "Ce Dezvăluie cu Adevărat Tarotul Iubirii", level: 2 },
  { id: "intrebarea-potrivita", title: "Cum Să Pui Întrebarea Potrivită", level: 2 },
  { id: "tendinte-emotionale-2025", title: "Tendințe Emoționale în Tarotul Iubirii 2025", level: 2 },
  { id: "reflectie-nu-predictie", title: "Cum Tarotul Susține Reflecția, Nu Predicția", level: 2 },
  { id: "incepe-calatoria", title: "Începe Reflecția Ta de Tarot pentru Iubire", level: 2 },
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
    "@id": `${siteUrl}/blog/${article.slug}/ro`,
  },
  inLanguage: "ro",
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
    url: `${siteUrl}/blog/${article.slug}/ro`,
    siteName: "Love Tarot Romania",
    images: [{ url: "/og-default.png", width: 1200, height: 630 }],
    type: "article",
    publishedTime: article.publishedAt,
    locale: "ro_RO",
  },
  twitter: {
    card: "summary_large_image",
    title: article.title,
    description: article.description,
    images: ["/og-default.png"],
  },
  alternates: {
    canonical: `${siteUrl}/blog/${article.slug}/ro`,
    languages: {
      en: `${siteUrl}/blog/${article.slug}/en`,
      ro: `${siteUrl}/blog/${article.slug}/ro`,
      "zh-CN": `${siteUrl}/blog/${article.slug}/zh`,
    },
  },
}

export default function LoveTarot2025ROPage() {
  const prevArticle = {
    slug: "love-tarot-2025",
    lang: "en" as const,
    title: "Love Tarot Reading: What Your Heart Needs to Hear in 2025",
    description: "",
    publishedAt: "2025-01-10",
    readingTime: 8,
    keywords: [],
  }
  const nextArticle = {
    slug: "love-tarot-2025",
    lang: "zh" as const,
    title: "爱情塔罗牌解读：2025年你的内心需要听到什么",
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
        Iubirea este una dintre cele mai profunde experiențe ale vieții umane—complexă, transformatoare și profund
        personală. În 2025, pe măsură ce navigăm într-o lume din ce în ce mai conectată, dar fragmentată emoțional,
        mulți apelează la <strong>citirea tarotului iubirii</strong> nu pentru a prezice viitorul, ci pentru{" "}
        <strong>îndrumări sincere în relații</strong> și claritate emoțională.
      </p>

      <p className="mb-6">
        Fie că ești în România sau oriunde în lume, înțelepciunea atemporală a tarotului oferă o oglindă pentru
        auto-reflecție. Acest articol explorează cum tarotul iubirii te poate ajuta să înțelegi adevăratele nevoi ale
        inimii tale în 2025—fără a face promisiuni despre viitor.
      </p>

      <h2 id="ce-dezvaluie-tarotul" className="text-2xl font-semibold text-[#73F2FF] mt-12 mb-4">
        Ce Dezvăluie cu Adevărat Tarotul Iubirii
      </h2>

      <p className="mb-6">
        Contrar credinței populare, tarotul nu prezice cu cine te vei căsători sau când vei găsi iubirea. În schimb,{" "}
        <strong>citirea tarotului iubirii</strong> luminează tiparele emoționale, temerile și dorințele care îți
        modelează experiențele romantice. Este un instrument pentru introspecție, nu pentru profeție.
      </p>

      <p className="mb-6">
        Când tragi cărți într-o citire de iubire, în esență ai o conversație cu subconștientul tău. Imaginile și
        simbolismul cărților de tarot—de la Îndrăgostiții până la Doi de Cupe—acționează ca indicii care te ajută să
        articulezi sentimente pe care altfel ai putea să le exprimi cu dificultate.
      </p>

      <ul className="list-disc pl-6 mb-6 space-y-2 text-foreground/80">
        <li>Înțelegerea tiparelor recurente în relații</li>
        <li>Identificarea blocajelor sau temerilor emoționale</li>
        <li>Clarificarea a ceea ce îți dorești cu adevărat de la un partener</li>
        <li>Recunoașterea oportunităților de creștere în relațiile actuale</li>
      </ul>

      <h2 id="intrebarea-potrivita" className="text-2xl font-semibold text-[#73F2FF] mt-12 mb-4">
        Cum Să Pui Întrebarea Potrivită
      </h2>

      <p className="mb-6">
        Calitatea experienței tale de <strong>citire tarot 2025</strong> depinde în mare măsură de întrebările pe care
        le pui. Întrebările vagi precum „Voi găsi iubirea?" duc adesea la îndrumări neclare. În schimb, concentrează-te
        pe întrebări care invită la reflecție:
      </p>

      <ul className="list-disc pl-6 mb-6 space-y-2 text-foreground/80">
        <li>
          <em>„Ce mă împiedică să îmi deschid inima complet?"</em>
        </li>
        <li>
          <em>„Ce pot învăța din relația mea anterioară?"</em>
        </li>
        <li>
          <em>„Cum pot cultiva mai multă iubire în parteneriatul meu actual?"</em>
        </li>
        <li>
          <em>„De ce tipare emoționale ar trebui să fiu conștient/ă?"</em>
        </li>
      </ul>

      <p className="mb-6">
        Aceste întrebări mută focusul de la rezultate externe la creștere internă—exact locul unde înțelepciunea
        tarotului strălucește cel mai mult. Fie că folosești platforma noastră{" "}
        <Link href="/" className="text-[#FF4FD8] hover:underline">
          Love Tarot
        </Link>
        sau explorezi independent, întrebările gândite duc la perspective semnificative.
      </p>

      <h2 id="tendinte-emotionale-2025" className="text-2xl font-semibold text-[#73F2FF] mt-12 mb-4">
        Tendințe Emoționale în Tarotul Iubirii 2025
      </h2>

      <p className="mb-6">
        Pe măsură ce avansăm în 2025, anumite teme emoționale apar în citirile de iubire din întreaga lume. Aici în{" "}
        <strong>România</strong> și în toată Europa, practicienii observă:
      </p>

      <ol className="list-decimal pl-6 mb-6 space-y-4 text-foreground/80">
        <li>
          <strong>O întoarcere la autenticitatea emoțională</strong> – După ani de personaje curate pe rețelele sociale,
          oamenii tânjesc după conexiuni emoționale autentice. Cărți precum Steaua și Soarele apar frecvent, sugerând o
          dorință colectivă de speranță și deschidere.
        </li>
        <li>
          <strong>Vindecarea de rănile trecutului</strong> – Trei de Săbii și Turnul apar în citiri, indicând că mulți
          procesează în sfârșit vechi suferințe. Acest lucru este sănătos—vindecarea trebuie să se întâmple înainte ca
          noua iubire să poată înflori.
        </li>
        <li>
          <strong>Redefinirea angajamentului</strong> – Structurile tradiționale de relații sunt puse sub semnul
          întrebării. Hierofantul inversat apare des, sugerând că oamenii își creează propriile definiții ale
          parteneriatului și devotamentului.
        </li>
        <li>
          <strong>Iubirea de sine ca fundament</strong> – Poate cea mai semnificativă tendință este accentul pe iubirea
          de sine. Împărăteasa și Împăratul ne amintesc că a ne iubi pe deplin este condiția prealabilă pentru relații
          romantice sănătoase.
        </li>
      </ol>

      <h2 id="reflectie-nu-predictie" className="text-2xl font-semibold text-[#73F2FF] mt-12 mb-4">
        Cum Tarotul Susține Reflecția, Nu Predicția
      </h2>

      <p className="mb-6">
        Să fim clari: <strong>citirea responsabilă a tarotului iubirii</strong> nu pretinde niciodată să prezică
        rezultate specifice. Nicio carte nu îți poate spune exact când îți vei întâlni sufletul pereche sau dacă
        fostul/a ta se va întoarce. Ceea ce oferă tarotul este neprețuit în sine:
      </p>

      <ul className="list-disc pl-6 mb-6 space-y-2 text-foreground/80">
        <li>
          <strong>Perspectivă</strong> – Vederea situației tale din unghiuri diferite
        </li>
        <li>
          <strong>Validare</strong> – Confirmarea intuițiilor pe care le-ai putea fi respins
        </li>
        <li>
          <strong>Împuternicire</strong> – Amintirea că ai putere în viața ta amoroasă
        </li>
        <li>
          <strong>Compasiune</strong> – Încurajarea blândeții față de tine și față de ceilalți
        </li>
      </ul>

      <blockquote className="border-l-4 border-[#FF4FD8] pl-6 my-8 italic text-foreground/70">
        „Tarotul nu îți spune ce se va întâmpla. Îți arată ce se întâmplă deja în tine— și te invită să îți alegi
        răspunsul." — Practicant Modern de Tarot
      </blockquote>

      <h2 id="incepe-calatoria" className="text-2xl font-semibold text-[#73F2FF] mt-12 mb-4">
        Începe Reflecția Ta de Tarot pentru Iubire
      </h2>

      <p className="mb-6">
        Dacă ești gata să explorezi ce trebuie să audă inima ta în 2025, te invităm să experimentezi o citire de tarot
        pentru iubire atentă. Platforma noastră combină înțelepciunea tradițională a tarotului cu perspective
        psihologice moderne, concepută special pentru reflecție emoțională.
      </p>

      <div className="my-10 p-6 rounded-2xl bg-gradient-to-r from-[#FF4FD8]/10 to-[#73F2FF]/10 border border-[#FF4FD8]/30 text-center">
        <p className="text-lg mb-4">Gata să descoperi ce are nevoie inima ta?</p>
        <Link
          href="/intake"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium text-white"
          style={{
            background: "linear-gradient(135deg, #FF4FD8 0%, #73F2FF 100%)",
          }}
        >
          Începe Reflecția Ta de Tarot pentru Iubire
        </Link>
      </div>

      <p className="text-foreground/60 text-sm mt-8">
        Explorează mai multe perspective pe{" "}
        <Link href="/blog" className="text-[#73F2FF] hover:underline">
          blogul nostru
        </Link>
        , sau află despre abordarea noastră pe{" "}
        <Link href="/" className="text-[#73F2FF] hover:underline">
          pagina principală
        </Link>
        .
      </p>
    </ArticleLayout>
  )
}
