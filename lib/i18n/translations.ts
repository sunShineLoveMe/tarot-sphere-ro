import type { Locale } from "./locales"

export interface Translations {
  // Meta & SEO
  meta: {
    title: string
    description: string
    ogTitle: string
    ogDescription: string
  }
  // Navigation & Common
  nav: {
    home: string
    startReading: string
    howItWorks: string
    about: string
    faq: string
  }
  // Hero Section
  hero: {
    title: string
    subtitle: string
    ctaStart: string
    ctaHowItWorks: string
    deckNote: string
  }
  // How It Works Section
  howItWorks: {
    title: string
    subtitle: string
    steps: {
      title: string
      description: string
    }[]
  }
  // For European Users Section
  forEurope: {
    title: string
    subtitle: string
    points: string[]
  }
  // Sample Reading Section
  sampleReading: {
    title: string
    subtitle: string
    cardName: string
    position: string
    keywords: string[]
    meaning: string
    advice: string
  }
  // FAQ Section
  faq: {
    title: string
    subtitle: string
    items: {
      question: string
      answer: string
    }[]
  }
  // Footer
  footer: {
    tagline: string
    disclaimer: string
    links: {
      privacy: string
      terms: string
      contact: string
    }
  }
  // Tarot Reading UI
  tarot: {
    title: string
    subtitle: string
    startShuffle: string
    selectCard: string
    newReading: string
    upright: string
    reversed: string
    loveKeywords: string
    currentSituation: string
    futureTrend: string
    guidance: string
    quote: string
  }
  shuffle: {
    startButton: string
  }
  formation: {
    hoverHint: string
    touchHint: string
    wheelOfFate: string
  }
  // Language Switcher
  language: {
    select: string
  }
  // 3-card selection translations
  threeCardSpread: {
    selectPrompt: string
    cardsRemaining: {
      two: string
      one: string
    }
    positions: {
      past: string
      present: string
      future: string
    }
    summary: string
    summaryPlaceholder: string
  }
}

export const translations: Record<Locale, Translations> = {
  en: {
    meta: {
      title: "AI Love Tarot – Honest Guidance for Your Heart",
      description:
        "A modern, AI-powered tarot reading experience for love and relationships. Reflective, empowering, and designed for European users.",
      ogTitle: "AI Love Tarot Reading Online",
      ogDescription:
        "Discover honest guidance for your heart with our AI-powered love tarot. Modern, psychological approach to relationship insights.",
    },
    nav: {
      home: "Home",
      startReading: "Start Reading",
      howItWorks: "How It Works",
      about: "About",
      faq: "FAQ",
    },
    hero: {
      title: "AI Love Tarot",
      subtitle: "Honest Guidance for Your Heart",
      ctaStart: "Start Love Reading",
      ctaHowItWorks: "How It Works",
      deckNote: "Curated 20-card love deck • Expanding to full 78 cards",
    },
    howItWorks: {
      title: "How It Works",
      subtitle: "A modern approach to tarot for self-reflection",
      steps: [
        {
          title: "Shuffle the Deck",
          description: "Focus on your love question as the cards shuffle in a mystical 3D ritual.",
        },
        {
          title: "Choose Your Card",
          description: "Trust your intuition. Select the card that calls to you from the cosmic ring.",
        },
        {
          title: "Receive AI Insight",
          description: "Get a personalized, psychologically-grounded interpretation of your card.",
        },
        {
          title: "Reflect & Act",
          description: "Use the guidance as a mirror for self-reflection, not as fate prediction.",
        },
      ],
    },
    forEurope: {
      title: "Designed for European Users",
      subtitle: "With special care for Romanian cultural context",
      points: [
        "Modern, psychological approach to tarot — no superstition",
        "Focus on self-reflection, communication, and emotional growth",
        "Localized support for Romanian users (Română available)",
        "Privacy-focused, no fortune-telling claims",
      ],
    },
    sampleReading: {
      title: "Sample Love Reading",
      subtitle: "See what insights await you",
      cardName: "The Lovers",
      position: "Upright",
      keywords: ["Soul Connection", "Harmony", "Choice", "Deep Bond", "Union"],
      meaning:
        "The Lovers card reveals a profound moment in your romantic journey. You stand at a crossroads where your heart and mind seek alignment. A deep, meaningful connection is either present or approaching.",
      advice:
        "Honor both your heart and your values in matters of love. True partnership requires authentic self-expression and mutual respect.",
    },
    faq: {
      title: "Frequently Asked Questions",
      subtitle: "Common questions about AI Love Tarot",
      items: [
        {
          question: "Is this fortune-telling?",
          answer:
            "No. We use tarot as a tool for self-reflection and psychological insight, not as a way to predict the future. Think of it as a mirror for your thoughts and feelings about love.",
        },
        {
          question: "How does the AI interpretation work?",
          answer:
            "Our AI analyzes the traditional meanings of tarot cards through a modern, psychological lens, providing insights that encourage self-reflection rather than making deterministic predictions.",
        },
        {
          question: "Why only 20 cards?",
          answer:
            "We've curated a focused love deck of 20 cards for the MVP, specifically chosen for relationship insights. We're expanding to the full 78-card deck in future updates.",
        },
        {
          question: "Is my reading private?",
          answer:
            "Yes, completely. We don't store your readings or personal data. Each session is private and anonymous.",
        },
        {
          question: "Is this suitable for religious users?",
          answer:
            "We approach tarot as a psychological tool for reflection, not as a spiritual or occult practice. Many users of various backgrounds find it helpful for self-understanding.",
        },
      ],
    },
    footer: {
      tagline: "Modern tarot for the modern heart",
      disclaimer: "For entertainment and self-reflection purposes only. Not a substitute for professional advice.",
      links: {
        privacy: "Privacy Policy",
        terms: "Terms of Service",
        contact: "Contact",
      },
    },
    tarot: {
      title: "AI Love Tarot",
      subtitle: "Divine Your Heart's Path",
      startShuffle: "Start Shuffle",
      selectCard: "Select a card from the cosmic ring",
      newReading: "New Reading",
      upright: "Upright",
      reversed: "Reversed",
      loveKeywords: "Love Keywords",
      currentSituation: "Current Love Situation",
      futureTrend: "Future Trend",
      guidance: "Guidance",
      quote: "Love is the bridge between two souls seeking to become one light.",
    },
    shuffle: {
      startButton: "Start Shuffle",
    },
    formation: {
      hoverHint: "Choose the card that calls to your soul",
      touchHint: "Touch your destined card",
      wheelOfFate: "The Wheel of Fate awaits",
    },
    language: {
      select: "Language",
    },
    threeCardSpread: {
      selectPrompt: "Choose 3 cards: Past, Present, Future",
      cardsRemaining: {
        two: "2 cards remaining",
        one: "1 card remaining",
      },
      positions: {
        past: "Past",
        present: "Present",
        future: "Future",
      },
      summary: "Summary & Advice",
      summaryPlaceholder:
        "The three cards together reveal a journey through your love life. Your past experiences have shaped who you are today, influencing your current romantic situation. As you move forward, trust your intuition and remain open to the possibilities that await. The energy of these cards suggests a period of growth and transformation in matters of the heart.",
    },
  },
  ro: {
    meta: {
      title: "AI Love Tarot – Ghidare Sinceră pentru Inima Ta",
      description:
        "O experiență modernă de citire a tarotului cu AI pentru dragoste și relații. Reflectivă, împuternicitoare și concepută pentru utilizatorii europeni.",
      ogTitle: "Citire Tarot AI pentru Dragoste Online",
      ogDescription:
        "Descoperă ghidare sinceră pentru inima ta cu tarotul nostru AI. Abordare modernă, psihologică a relațiilor.",
    },
    nav: {
      home: "Acasă",
      startReading: "Începe Citirea",
      howItWorks: "Cum Funcționează",
      about: "Despre",
      faq: "Întrebări Frecvente",
    },
    hero: {
      title: "AI Love Tarot",
      subtitle: "Ghidare Sinceră pentru Inima Ta",
      ctaStart: "Începe Citirea de Dragoste",
      ctaHowItWorks: "Cum Funcționează",
      deckNote: "Pachet de 20 cărți pentru dragoste • Se extinde la 78 cărți complete",
    },
    howItWorks: {
      title: "Cum Funcționează",
      subtitle: "O abordare modernă a tarotului pentru auto-reflecție",
      steps: [
        {
          title: "Amestecă Cărțile",
          description:
            "Concentrează-te pe întrebarea ta de dragoste în timp ce cărțile se amestecă într-un ritual mistic 3D.",
        },
        {
          title: "Alege Cartea Ta",
          description: "Ai încredere în intuiția ta. Selectează cartea care te cheamă din inelul cosmic.",
        },
        {
          title: "Primește Interpretarea AI",
          description: "Obține o interpretare personalizată, fundamentată psihologic, a cărții tale.",
        },
        {
          title: "Reflectează și Acționează",
          description: "Folosește ghidarea ca o oglindă pentru auto-reflecție, nu ca predicție a destinului.",
        },
      ],
    },
    forEurope: {
      title: "Conceput pentru Utilizatorii Europeni",
      subtitle: "Cu atenție specială pentru contextul cultural românesc",
      points: [
        "Abordare modernă, psihologică a tarotului — fără superstiție",
        "Focus pe auto-reflecție, comunicare și creștere emoțională",
        "Suport localizat pentru utilizatorii români",
        "Axat pe confidențialitate, fără pretenții de ghicit",
      ],
    },
    sampleReading: {
      title: "Exemplu de Citire de Dragoste",
      subtitle: "Vezi ce perspective te așteaptă",
      cardName: "Îndrăgostiții",
      position: "Drept",
      keywords: ["Conexiune Sufletească", "Armonie", "Alegere", "Legătură Profundă", "Uniune"],
      meaning:
        "Cartea Îndrăgostiților relevă un moment profund în călătoria ta romantică. Te afli la o răscruce unde inima și mintea ta caută aliniere.",
      advice:
        "Onorează atât inima cât și valorile tale în chestiunile de dragoste. Parteneriatul adevărat necesită exprimare autentică și respect reciproc.",
    },
    faq: {
      title: "Întrebări Frecvente",
      subtitle: "Întrebări comune despre AI Love Tarot",
      items: [
        {
          question: "Este aceasta ghicit?",
          answer:
            "Nu. Folosim tarotul ca un instrument pentru auto-reflecție și insight psihologic, nu ca o modalitate de a prezice viitorul.",
        },
        {
          question: "Cum funcționează interpretarea AI?",
          answer:
            "AI-ul nostru analizează semnificațiile tradiționale ale cărților de tarot printr-o lentilă modernă, psihologică.",
        },
        {
          question: "De ce doar 20 de cărți?",
          answer:
            "Am curatoriat un pachet focusat de 20 de cărți pentru MVP. Extindem la pachetul complet de 78 de cărți în actualizările viitoare.",
        },
        {
          question: "Este citirea mea privată?",
          answer: "Da, complet. Nu stocăm citirile tale sau datele personale. Fiecare sesiune este privată și anonimă.",
        },
        {
          question: "Este potrivit pentru utilizatorii religioși?",
          answer:
            "Abordăm tarotul ca un instrument psihologic pentru reflecție, nu ca o practică spirituală sau ocultă.",
        },
      ],
    },
    footer: {
      tagline: "Tarot modern pentru inima modernă",
      disclaimer: "Doar pentru divertisment și auto-reflecție. Nu înlocuiește sfatul profesional.",
      links: {
        privacy: "Politica de Confidențialitate",
        terms: "Termeni și Condiții",
        contact: "Contact",
      },
    },
    tarot: {
      title: "AI Love Tarot",
      subtitle: "Descoperă Calea Inimii Tale",
      startShuffle: "Începe Amestecarea",
      selectCard: "Selectează o carte din inelul cosmic",
      newReading: "Citire Nouă",
      upright: "Drept",
      reversed: "Inversat",
      loveKeywords: "Cuvinte Cheie Dragoste",
      currentSituation: "Situația Actuală de Dragoste",
      futureTrend: "Tendința Viitoare",
      guidance: "Ghidare",
      quote: "Dragostea este podul dintre două suflete care caută să devină o singură lumină.",
    },
    shuffle: {
      startButton: "Începe Amestecarea",
    },
    formation: {
      hoverHint: "Alege cartea care îți cheamă sufletul",
      touchHint: "Atinge cartea ta destinată",
      wheelOfFate: "Roata Destinului așteaptă",
    },
    language: {
      select: "Limbă",
    },
    // Romanian 3-card spread translations
    threeCardSpread: {
      selectPrompt: "Alege 3 cărți: Trecut, Prezent, Viitor",
      cardsRemaining: {
        two: "Mai sunt 2 cărți",
        one: "Mai e 1 carte",
      },
      positions: {
        past: "Trecut",
        present: "Prezent",
        future: "Viitor",
      },
      summary: "Rezumat și Sfaturi",
      summaryPlaceholder:
        "Cele trei cărți împreună relevă o călătorie prin viața ta de dragoste. Experiențele tale trecute au modelat cine ești astăzi, influențând situația ta romantică actuală. Pe măsură ce avansezi, ai încredere în intuiția ta și rămâi deschis la posibilitățile care te așteaptă.",
    },
  },
  zh: {
    meta: {
      title: "AI爱情塔罗 - 为你的心灵提供真诚指引",
      description: "现代化的AI塔罗牌阅读体验，专注于爱情和人际关系。反思性、赋能性，专为欧洲用户设计。",
      ogTitle: "AI爱情塔罗在线占卜",
      ogDescription: "通过我们的AI爱情塔罗，发现心灵的真诚指引。",
    },
    nav: {
      home: "首页",
      startReading: "开始占卜",
      howItWorks: "如何使用",
      about: "关于",
      faq: "常见问题",
    },
    hero: {
      title: "AI爱情塔罗",
      subtitle: "为你的心灵提供真诚指引",
      ctaStart: "开始爱情占卜",
      ctaHowItWorks: "了解详情",
      deckNote: "精选20张爱情牌组 • 即将扩展至完整78张",
    },
    howItWorks: {
      title: "如何使用",
      subtitle: "现代化的塔罗自我反思方法",
      steps: [
        {
          title: "洗牌",
          description: "在牌组进行神秘3D仪式洗牌时，专注于你的爱情问题。",
        },
        {
          title: "选择你的牌",
          description: "相信你的直觉。从宇宙之环中选择呼唤你的那张牌。",
        },
        {
          title: "接收AI解读",
          description: "获得个性化的、基于心理学的牌面解读。",
        },
        {
          title: "反思与行动",
          description: "将指引作为自我反思的镜子，而非命运预测。",
        },
      ],
    },
    forEurope: {
      title: "为欧洲用户设计",
      subtitle: "特别关注罗马尼亚文化背景",
      points: [
        "现代化、心理学方法解读塔罗——无迷信",
        "专注于自我反思、沟通和情感成长",
        "为罗马尼亚用户提供本地化支持",
        "注重隐私，无算命声称",
      ],
    },
    sampleReading: {
      title: "示例爱情占卜",
      subtitle: "看看等待你的洞见",
      cardName: "恋人",
      position: "正位",
      keywords: ["灵魂连接", "和谐", "选择", "深层纽带", "结合"],
      meaning: "恋人牌揭示了你浪漫旅程中的深刻时刻。你正站在一个十字路口，你的心灵和思想都在寻求一致。",
      advice: "在爱情事务中，尊重你的内心和价值观。真正的伙伴关系需要真实的自我表达和相互尊重。",
    },
    faq: {
      title: "常见问题",
      subtitle: "关于AI爱情塔罗的常见问题",
      items: [
        {
          question: "这是算命吗？",
          answer: "不是。我们将塔罗作为自我反思和心理洞察的工具，而不是预测未来的方式。",
        },
        {
          question: "AI解读如何运作？",
          answer: "我们的AI通过现代心理学视角分析塔罗牌的传统含义，提供鼓励自我反思的洞见。",
        },
        {
          question: "为什么只有20张牌？",
          answer: "我们为MVP精选了20张爱情牌组。我们将在未来更新中扩展到完整的78张牌组。",
        },
        {
          question: "我的占卜是私密的吗？",
          answer: "是的，完全私密。我们不存储你的占卜结果或个人数据。",
        },
        {
          question: "这适合有宗教信仰的用户吗？",
          answer: "我们将塔罗作为反思的心理工具，而非灵性或神秘学实践。",
        },
      ],
    },
    footer: {
      tagline: "为现代心灵设计的现代塔罗",
      disclaimer: "仅供娱乐和自我反思。不能替代专业建议。",
      links: {
        privacy: "隐私政策",
        terms: "服务条款",
        contact: "联系我们",
      },
    },
    tarot: {
      title: "AI爱情塔罗",
      subtitle: "探寻你心灵的道路",
      startShuffle: "开始洗牌",
      selectCard: "从宇宙之环中选择一张牌",
      newReading: "新的占卜",
      upright: "正位",
      reversed: "逆位",
      loveKeywords: "爱情关键词",
      currentSituation: "当前爱情状况",
      futureTrend: "未来趋势",
      guidance: "指引",
      quote: "爱是两个灵魂之间的桥梁，寻求合为一束光明。",
    },
    shuffle: {
      startButton: "开始洗牌",
    },
    formation: {
      hoverHint: "选择呼唤你灵魂的那张牌",
      touchHint: "触摸你命定的牌",
      wheelOfFate: "命运之轮在等待",
    },
    language: {
      select: "语言",
    },
    // Chinese 3-card spread translations
    threeCardSpread: {
      selectPrompt: "请选择三张卡：过去、现在、未来",
      cardsRemaining: {
        two: "还剩 2 张卡",
        one: "还剩 1 张卡",
      },
      positions: {
        past: "过去",
        present: "现在",
        future: "未来",
      },
      summary: "总结与建议",
      summaryPlaceholder:
        "这三张牌共同揭示了你爱情生活的旅程。你过去的经历塑造了今天的你，影响着你当前的浪漫状况。当你向前迈进时，相信你的直觉，对等待着你的可能性保持开放。这些牌的能量暗示着在心灵事务上的成长和转变时期。",
    },
  },
}

export function getTranslations(locale: Locale): Translations {
  return translations[locale] || translations.en
}
