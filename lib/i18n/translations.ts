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
  questionInput: {
    label: string
    placeholder: string
    optional: string
    contextLabel: string
  }
  loading: {
    connecting: string
  }
  reading: {
    summaryVibe: string
    keywords: string
    pastTitle: string
    presentTitle: string
    futureTitle: string
    advice: string
  }
  readingResult: {
    pageTitle: string
    yourQuestion: string
    overallEnergy: string
    pastInsight: {
      title: string
      summary: string
      deepDive: string
    }
    presentInsight: {
      title: string
      summary: string
      dimensions: {
        nurturing: string
        conflict: string
        growth: string
      }
    }
    futureInsight: {
      title: string
      summary: string
      opportunities: string
      warnings: string
    }
    actionableAdvice: {
      title: string
      today: string
      longTerm: string
      healing: string
    }
    affirmation: {
      title: string
      message: string
    }
    share: {
      title: string
      saveReading: string
      generateCard: string
      shareToSocial: string
    }
    viewFullReading: string
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
      deckNote: "22 Major Arcana cards • Full mystical deck",
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
          question: "Why 22 Major Arcana cards?",
          answer:
            "The 22 Major Arcana represent the major life themes and spiritual lessons. They provide deep, meaningful insights for love readings.",
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
    questionInput: {
      label: "What's on your heart?",
      placeholder: "Ask a question about love...",
      optional: "(optional)",
      contextLabel: "Your Question",
    },
    loading: {
      connecting: "Connecting with your energy...",
    },
    reading: {
      summaryVibe: "Overall Energy",
      keywords: "Love Keywords",
      pastTitle: "Past Influences",
      presentTitle: "Present Situation",
      futureTitle: "Future Path",
      advice: "Guidance & Advice",
    },
    readingResult: {
      pageTitle: "Your Love Reading",
      yourQuestion: "Your Question",
      overallEnergy: "Overall Energy",
      pastInsight: {
        title: "Past Influences",
        summary: "Summary",
        deepDive: "Deep Dive",
      },
      presentInsight: {
        title: "Present Situation",
        summary: "Summary",
        dimensions: {
          nurturing: "Nurturing",
          conflict: "Conflict",
          growth: "Growth",
        },
      },
      futureInsight: {
        title: "Future Path",
        summary: "Summary",
        opportunities: "Opportunities",
        warnings: "Gentle Warnings",
      },
      actionableAdvice: {
        title: "What You Should Do Next",
        today: "Today's Action",
        longTerm: "Long-term Relationship",
        healing: "Self-Healing",
      },
      affirmation: {
        title: "Affirmation for You",
        message: "You are worthy of deep and lasting love.",
      },
      share: {
        title: "Share Your Reading",
        saveReading: "Save Reading",
        generateCard: "Generate Share Card",
        shareToSocial: "Share to Social",
      },
      viewFullReading: "View Full Reading",
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
      deckNote: "22 cărți Major Arcana • Pachet mistic complet",
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
          question: "De ce 22 cărți Major Arcana?",
          answer:
            "Cele 22 de cărți Major Arcana reprezintă temele majore ale vieții și lecțiile spirituale. Oferă perspective profunde pentru citirile de dragoste.",
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
    questionInput: {
      label: "Ce este în inima ta?",
      placeholder: "Pune o întrebare despre dragoste...",
      optional: "(opțional)",
      contextLabel: "Întrebarea Ta",
    },
    loading: {
      connecting: "Mă conectez cu energia ta...",
    },
    reading: {
      summaryVibe: "Energia Generală",
      keywords: "Cuvinte Cheie Dragoste",
      pastTitle: "Influențe din Trecut",
      presentTitle: "Situația Prezentă",
      futureTitle: "Calea Viitorului",
      advice: "Ghidare și Sfaturi",
    },
    readingResult: {
      pageTitle: "Citirea Ta de Dragoste",
      yourQuestion: "Întrebarea Ta",
      overallEnergy: "Energia Generală",
      pastInsight: {
        title: "Influențe din Trecut",
        summary: "Rezumat",
        deepDive: "Analiză Profundă",
      },
      presentInsight: {
        title: "Situația Prezentă",
        summary: "Rezumat",
        dimensions: {
          nurturing: "Hrănire",
          conflict: "Conflict",
          growth: "Creștere",
        },
      },
      futureInsight: {
        title: "Calea Viitorului",
        summary: "Rezumat",
        opportunities: "Oportunități",
        warnings: "Avertismente Blânde",
      },
      actionableAdvice: {
        title: "Ce Ar Trebui Să Faci În Continuare",
        today: "Acțiunea de Azi",
        longTerm: "Relație pe Termen Lung",
        healing: "Auto-Vindecare",
      },
      affirmation: {
        title: "Afirmație pentru Tine",
        message: "Meriți o dragoste profundă și durabilă.",
      },
      share: {
        title: "Împărtășește Citirea Ta",
        saveReading: "Salvează Citirea",
        generateCard: "Generează Card de Partajare",
        shareToSocial: "Partajează pe Rețele Sociale",
      },
      viewFullReading: "Vezi Citirea Completă",
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
      deckNote: "22张大阿卡纳 • 完整神秘牌组",
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
          question: "为什么是22张大阿卡纳？",
          answer: "22张大阿卡纳代表主要的人生主题和精神课程。它们为爱情占卜提供深刻而有意义的洞见。",
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
    questionInput: {
      label: "你心里有什么想问的？",
      placeholder: "询问关于爱情的问题...",
      optional: "（可选）",
      contextLabel: "你的问题",
    },
    loading: {
      connecting: "正在与您的能量链接...",
    },
    reading: {
      summaryVibe: "整体能量",
      keywords: "爱情关键词",
      pastTitle: "过去的影响",
      presentTitle: "现在的状况",
      futureTitle: "未来的道路",
      advice: "指引与建议",
    },
    readingResult: {
      pageTitle: "你的爱情解读",
      yourQuestion: "你的提问",
      overallEnergy: "整体能量",
      pastInsight: {
        title: "过去的影响",
        summary: "概述",
        deepDive: "深度解析",
      },
      presentInsight: {
        title: "现在的状况",
        summary: "概述",
        dimensions: {
          nurturing: "滋养",
          conflict: "冲突",
          growth: "成长",
        },
      },
      futureInsight: {
        title: "未来的道路",
        summary: "概述",
        opportunities: "机遇",
        warnings: "温馨提醒",
      },
      actionableAdvice: {
        title: "接下来你可以采取的行动",
        today: "今日行动",
        longTerm: "长期关系建议",
        healing: "自我疗愈",
      },
      affirmation: {
        title: "给你的肯定",
        message: "你值得拥有深厚而持久的爱。",
      },
      share: {
        title: "分享你的解读",
        saveReading: "保存解读",
        generateCard: "生成分享卡片",
        shareToSocial: "分享到社交平台",
      },
      viewFullReading: "查看完整解读",
    },
  },
}

export function getTranslations(locale: Locale): Translations {
  return translations[locale] || translations.en
}
