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
    aiSubtitle: string // Wisdom subtitle field (legacy key name)
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
    title: string // Rebrand footer title
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
      whatsapp: string
      facebook: string
      tiktok: string
      download: string // Added download field
      downloadCard: string
      shareShort: string // Added shareShort field
      tiktokModal: {
        title: string
        description: string
        copyButton: string
        copied: string
      }
    }
    viewFullReading: string
  }
  legal: {
    privacy: {
      title: string
      lastUpdated: string
      sections: {
        intro: { title: string; content: string }
        dataCollect: { title: string; content: string; items: string[] }
        dataUse: { title: string; content: string; items: string[] }
        legalBasis: { title: string; content: string; items: string[] }
        dataSharing: { title: string; content: string }
        dataRetention: { title: string; content: string }
        userRights: { title: string; content: string; items: string[] }
        internationalTransfers: { title: string; content: string }
        childrenPrivacy: { title: string; content: string }
        contact: { title: string; content: string }
      }
    }
    terms: {
      title: string
      lastUpdated: string
      sections: {
        acceptance: { title: string; content: string }
        description: { title: string; content: string } // Rebrand service description
        noAdvice: { title: string; content: string } // Rebrand no advice disclaimer
        eligibility: { title: string; content: string }
        userResponsibilities: { title: string; content: string; items: string[] }
        aiDisclaimer: { title: string; content: string }
        limitation: { title: string; content: string } // Rebrand liability section
        intellectualProperty: { title: string; content: string } // Rebrand IP section
        termination: { title: string; content: string }
        governingLaw: { title: string; content: string }
        contact: { title: string; content: string }
      }
    }
    contact: {
      title: string
      subtitle: string
      email: string
      form: {
        name: string
        namePlaceholder: string
        email: string
        emailPlaceholder: string
        message: string
        messagePlaceholder: string
        submit: string
        success: string
      }
    }
  }
}

export const translations: Record<Locale, Translations> = {
  en: {
    meta: {
      title: "Love Tarot – Honest Guidance for Your Heart",
      description:
        "Insightful tarot readings to help you reflect on love and relationships. Rooted in timeless wisdom, designed for European users.",
      ogTitle: "Love Tarot Reading Online",
      ogDescription:
        "Discover honest guidance for your heart through ancient tarot wisdom. Insightful readings for love and relationship reflection.",
    },
    nav: {
      home: "Home",
      startReading: "Start Reading",
      howItWorks: "How It Works",
      about: "About",
      faq: "FAQ",
    },
    hero: {
      title: "Love Tarot",
      subtitle: "Honest Guidance for Your Heart",
      aiSubtitle: "🔮 Guided by Ancient Tarot Wisdom",
      ctaStart: "Start Love Reading",
      ctaHowItWorks: "How It Works",
      deckNote: "22 Major Arcana Cards",
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
          title: "Receive Your Interpretation",
          description: "Gain a personalized, meaningful interpretation of your chosen card, rooted in timeless tarot symbolism.",
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
      subtitle: "Common questions about Love Tarot",
      items: [
        {
          question: "Is this fortune-telling?",
          answer:
            "No. We use tarot as a tool for self-reflection and psychological insight, not as a way to predict the future. Think of it as a mirror for your thoughts and feelings about love.",
        },
        {
          question: "How does the interpretation work?",
          answer:
            "Our interpretations draw from traditional tarot symbolism through a modern, psychological lens, providing insights that encourage self-reflection rather than making predictions.",
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
      title: "Love Tarot",
      tagline: "Insightful tarot readings to help you reflect and move forward.",
      disclaimer: "For entertainment and self-reflection purposes only. Not a substitute for professional advice.",
      links: {
        privacy: "Privacy Policy",
        terms: "Terms of Service",
        contact: "Contact",
      },
    },
    tarot: {
      title: "Love Tarot",
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
        whatsapp: "WhatsApp",
        facebook: "Facebook",
        tiktok: "TikTok",
        download: "Download", // Updated from downloadCard
        downloadCard: "Download Share Card",
        shareShort: "✨ My Love Tarot Reading →", // Added shareShort
        tiktokModal: {
          title: "Love Tarot Reading", // Updated title
          description: "Copy your reading summary and paste it into TikTok along with your video or post.",
          copyButton: "Copy Summary",
          copied: "Copied! Paste it in TikTok description.", // Updated copied message
        },
      },
      viewFullReading: "View Full Reading",
    },
    legal: {
      privacy: {
        title: "Privacy Policy",
        lastUpdated: "Last Updated: December 2024",
        sections: {
          intro: {
            title: "Introduction",
            content:
              "Welcome to Love Tarot. This Privacy Policy explains how we collect, use, and protect your personal information when you use our tarot reading service. Our service is designed for entertainment and self-reflection purposes only. We are committed to protecting your privacy and ensuring compliance with the General Data Protection Regulation (GDPR) and the ePrivacy Directive.",
          },
          dataCollect: {
            title: "Data We Collect",
            content: "We collect the following types of information to provide and improve our services:",
            items: [
              "User Questions (Optional): The love-related questions you choose to input before your reading",
              "Card Selection Data: The tarot cards you select and their positions (Past, Present, Future)",
              "Usage Analytics: Anonymous data about how you interact with our service (page views, session duration)",
              "Cookies: Essential cookies for functionality and optional cookies for analytics (with your consent)",
            ],
          },
          dataUse: {
            title: "How We Use Your Data",
            content: "Your data is used exclusively for the following purposes:",
            items: [
              "Generating personalized tarot readings based on your card selections",
              "Improving our interpretation quality and user experience",
              "Analyzing usage patterns to enhance service quality",
              "We do NOT use your data for advertising profiling or sell your information to third parties",
            ],
          },
          legalBasis: {
            title: "Legal Basis under GDPR",
            content: "We process your personal data based on the following legal grounds:",
            items: [
              "Consent: You provide explicit consent when using our service and accepting cookies",
              "Legitimate Interest: We have a legitimate interest in improving our service and ensuring security",
            ],
          },
          dataSharing: {
            title: "Data Sharing",
            content:
              "We do not sell your personal information. We may share data only with essential third-party service providers who are contractually obligated to protect your data and use it solely for providing the service.",
          },
          dataRetention: {
            title: "Data Retention",
            content:
              "Your reading history is optional and stored only if you choose to save it. Anonymous usage data is automatically deleted after 90 days. You can request deletion of your data at any time.",
          },
          userRights: {
            title: "Your Rights under GDPR",
            content: "As a user in the European Union, you have the following rights:",
            items: [
              "Right of Access: Request a copy of your personal data",
              "Right to Erasure: Request deletion of your personal data",
              "Right to Data Portability: Receive your data in a portable format",
              "Right to Withdraw Consent: Withdraw your consent at any time",
            ],
          },
          internationalTransfers: {
            title: "International Data Transfers",
            content:
              "Our service may use third-party providers whose servers may be located outside the EU. We ensure appropriate safeguards are in place, including Standard Contractual Clauses, to protect your data during any international transfers.",
          },
          childrenPrivacy: {
            title: "Children's Privacy",
            content:
              "Our service is not intended for users under 16 years of age, in compliance with EU regulations. We do not knowingly collect personal information from children under 16.",
          },
          contact: {
            title: "Contact Information",
            content:
              "For any privacy-related inquiries or to exercise your rights, please contact us at: chris@zhiyunllm.com",
          },
        },
      },
      terms: {
        title: "Terms of Service",
        lastUpdated: "Last Updated: December 2024",
        sections: {
          acceptance: {
            title: "Acceptance of Terms",
            content:
              "By accessing or using Love Tarot, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our service.",
          },
          description: {
            title: "Description of Services",
            content:
              "Love Tarot is a tarot reading service designed for entertainment and personal reflection purposes. Our service provides love-themed tarot readings with meaningful interpretations rooted in traditional tarot symbolism. The readings are meant to inspire self-reflection and are not intended to predict the future.",
          },
          noAdvice: {
            title: "No Professional Advice Disclaimer",
            content:
              "Love Tarot does NOT provide professional advice of any kind. Our readings do not constitute and should not be considered as: psychological or mental health counseling, legal advice, financial or investment advice, medical or health advice, or relationship counseling from a licensed professional. Always seek qualified professionals for serious matters.",
          },
          eligibility: {
            title: "User Eligibility",
            content:
              "You must be at least 16 years old to use this service, in compliance with EU regulations. By using our service, you confirm that you meet this age requirement.",
          },
          userResponsibilities: {
            title: "User Responsibilities",
            content: "When using our service, you agree to:",
            items: [
              "Use the service for personal entertainment only",
              "Not rely on readings for important life decisions",
              "Provide accurate information if you choose to input questions",
              "Not attempt to misuse, hack, or disrupt the service",
            ],
          },
          aiDisclaimer: {
            title: "Content Disclaimer",
            content:
              "Our readings are for entertainment and reflection purposes only. Interpretations may not be applicable to every situation. Users should exercise their own judgment and not treat readings as absolute truth or professional guidance.",
          },
          limitation: {
            title: "Limitation of Liability",
            content:
              "Love Tarot and its operators shall not be liable for any direct, indirect, incidental, or consequential damages arising from your use of the service. We provide the service 'as is' without warranties of any kind.",
          },
          intellectualProperty: {
            title: "Intellectual Property",
            content:
              "All content, designs, trademarks, and intellectual property on Love Tarot are owned by us or our licensors. You may not copy, modify, distribute, or create derivative works without our permission.",
          },
          termination: {
            title: "Termination",
            content:
              "We reserve the right to terminate or suspend your access to the service at any time, without notice, for any reason, including violation of these terms.",
          },
          governingLaw: {
            title: "Governing Law",
            content:
              "These terms are governed by EU law principles and international internet product standards. Any disputes shall be resolved through good faith negotiation or, if necessary, through appropriate legal channels.",
          },
          contact: {
            title: "Contact Information",
            content: "For any questions about these Terms of Service, please contact us at: chris@zhiyunllm.com",
          },
        },
      },
      contact: {
        title: "Contact Us",
        subtitle: "For inquiries, feedback, or legal requests, you may contact us at:",
        email: "chris@zhiyunllm.com",
        form: {
          name: "Your Name",
          namePlaceholder: "Enter your name",
          email: "Email Address",
          emailPlaceholder: "your@email.com",
          message: "Message",
          messagePlaceholder: "How can we help you?",
          submit: "Send Message",
          success: "Message sent successfully! We'll get back to you soon.",
        },
      },
    },
  },
  ro: {
    meta: {
      title: "Love Tarot – Ghidare Sinceră pentru Inima Ta",
      description:
        "Citiri de tarot pline de înțelepciune pentru a te ajuta să reflectezi asupra dragostei și relațiilor. Înrădăcinată în înțelepciune atemporala, concepută pentru utilizatorii europeni.",
      ogTitle: "Citire Love Tarot Online",
      ogDescription:
        "Descoperă ghidare sinceră pentru inima ta prin înțelepciunea străveche a tarotului. Citiri pline de sens pentru reflecție asupra dragostei.",
    },
    nav: {
      home: "Acasă",
      startReading: "Începe Citirea",
      howItWorks: "Cum Funcționează",
      about: "Despre",
      faq: "Întrebări Frecvente",
    },
    hero: {
      title: "Love Tarot",
      subtitle: "Ghidare Sinceră pentru Inima Ta",
      aiSubtitle: "🔮 Călăuzit de înțelepciunea veche a tarotului",
      ctaStart: "Începe Citirea de Dragoste",
      ctaHowItWorks: "Cum Funcționează",
      deckNote: "22 de Cărți Arcana Mare",
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
          title: "Primește Interpretarea Ta",
          description: "Obține o interpretare personalizată și semnificativă a cărții tale, înrădăcinată în simbolismul atemporar al tarotului.",
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
        "Suport localizat pentru utilizatorii români (Română available)",
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
      subtitle: "Întrebări comune despre Love Tarot",
      items: [
        {
          question: "Este aceasta ghicit?",
          answer:
            "Nu. Folosim tarotul ca un instrument pentru auto-reflecție și insight psihologic, nu ca o modalitate de a prezice viitorul.",
        },
        {
          question: "Cum funcționează interpretarea?",
          answer:
            "Interpretările noastre se bazează pe semnificațiile tradiționale ale cărților de tarot printr-o lentilă modernă, psihologică, oferind perspective care încurajează auto-reflecția.",
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
      title: "Love Tarot",
      tagline: "Citiri de tarot care te ajută să reflectezi și să mergi înainte.",
      disclaimer: "Doar pentru divertisment și auto-reflecție. Nu înlocuiește sfatul profesional.",
      links: {
        privacy: "Politica de Confidențialitate",
        terms: "Termeni și Condiții",
        contact: "Contact",
      },
    },
    tarot: {
      title: "Love Tarot",
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
        whatsapp: "WhatsApp",
        facebook: "Facebook",
        tiktok: "TikTok",
        download: "Descarcă", // Updated from downloadCard
        downloadCard: "Descarcă Cardul",
        shareShort: "✨ Lectura mea Love Tarot →", // Added shareShort
        tiktokModal: {
          title: "Citire Love Tarot", // Updated title
          description: "Copiază rezumatul citirii și lipește-l în TikTok împreună cu videoclipul sau postarea ta.",
          copyButton: "Copiază Rezumatul",
          copied: "Copiat! Lipiți în descrierea TikTok.", // Updated copied message
        },
      },
      viewFullReading: "Vezi Citirea Completă",
    },
    legal: {
      privacy: {
        title: "Politica de Confidențialitate",
        lastUpdated: "Ultima actualizare: Decembrie 2024",
        sections: {
          intro: {
            title: "Introducere",
            content:
              "Bine ați venit la Love Tarot. Această Politică de Confidențialitate explică modul în care colectăm, folosim și protejăm informațiile dvs. personale când utilizați serviciul nostru de citire tarot. Serviciul nostru este conceput exclusiv pentru divertisment și auto-reflecție. Ne angajăm să vă protejăm confidențialitatea și să asigurăm conformitatea cu Regulamentul General privind Protecția Datelor (GDPR) și Directiva ePrivacy.",
          },
          dataCollect: {
            title: "Datele pe care le colectăm",
            content: "Colectăm următoarele tipuri de informații pentru a furniza și îmbunătăți serviciile noastre:",
            items: [
              "Întrebări ale utilizatorilor (Opțional): Întrebările despre dragoste pe care alegeți să le introduceți înainte de citire",
              "Date de selecție a cărților: Cărțile tarot selectate și pozițiile lor (Trecut, Prezent, Viitor)",
              "Analize de utilizare: Date anonime despre modul în care interacționați cu serviciul nostru",
              "Cookie-uri: Cookie-uri esențiale pentru funcționalitate și cookie-uri opționale pentru analiză (cu consimțământul dvs.)",
            ],
          },
          dataUse: {
            title: "Cum folosim datele dvs.",
            content: "Datele dvs. sunt folosite exclusiv în următoarele scopuri:",
            items: [
              "Generarea de citiri tarot personalizate bazate pe selecțiile dvs. de cărți",
              "Îmbunătățirea calității interpretărilor noastre și a experienței utilizatorului",
              "Analiza tiparelor de utilizare pentru îmbunătățirea calității serviciului",
              "NU folosim datele dvs. pentru profilare publicitară și nu vindem informațiile dvs. terților",
            ],
          },
          legalBasis: {
            title: "Baza legală conform GDPR",
            content: "Procesăm datele dvs. personale pe baza următoarelor temeiuri juridice:",
            items: [
              "Consimțământ: Oferiți consimțământul explicit când utilizați serviciul nostru și acceptați cookie-urile",
              "Interes legitim: Avem un interes legitim în îmbunătățirea serviciului și asigurarea securității",
            ],
          },
          dataSharing: {
            title: "Partajarea datelor",
            content:
              "Nu vindem informațiile dvs. personale. Putem partaja date doar cu furnizori terți esențiali care sunt obligați contractual să vă protejeze datele și să le folosească exclusiv pentru furnizarea serviciului.",
          },
          dataRetention: {
            title: "Păstrarea datelor",
            content:
              "Istoricul citirilor dvs. este opțional și stocat doar dacă alegeți să îl salvați. Datele anonime de utilizare sunt șterse automat după 90 de zile. Puteți solicita ștergerea datelor dvs. oricând.",
          },
          userRights: {
            title: "Drepturile dvs. conform GDPR",
            content: "Ca utilizator în Uniunea Europeană, aveți următoarele drepturi:",
            items: [
              "Dreptul de acces: Solicitați o copie a datelor dvs. personale",
              "Dreptul la ștergere: Solicitați ștergerea datelor dvs. personale",
              "Dreptul la portabilitatea datelor: Primiți datele într-un format portabil",
              "Dreptul de a retrage consimțământul: Retrageți consimțământul oricând",
            ],
          },
          internationalTransfers: {
            title: "Transferuri internaționale de date",
            content:
              "Serviciul nostru poate folosi furnizori terți ale căror servere pot fi situate în afara UE. Asigurăm măsuri de protecție adecvate, inclusiv Clauze Contractuale Standard, pentru a vă proteja datele în timpul transferurilor internaționale.",
          },
          childrenPrivacy: {
            title: "Confidențialitatea copiilor",
            content:
              "Serviciul nostru nu este destinat utilizatorilor sub 16 ani, în conformitate cu reglementările UE. Nu colectăm cu bună știință informații personale de la copii sub 16 ani.",
          },
          contact: {
            title: "Informații de contact",
            content:
              "Pentru orice întrebări legate de confidențialitate sau pentru a vă exercita drepturile, vă rugăm să ne contactați la: chris@zhiyunllm.com",
          },
        },
      },
      terms: {
        title: "Termeni și Condiții",
        lastUpdated: "Ultima actualizare: Decembrie 2024",
        sections: {
          acceptance: {
            title: "Acceptarea termenilor",
            content:
              "Prin accesarea sau utilizarea Love Tarot, sunteți de acord să fiți obligat de acești Termeni și Condiții. Dacă nu sunteți de acord cu acești termeni, vă rugăm să nu utilizați serviciul nostru.",
          },
          description: {
            title: "Descrierea serviciilor",
            content:
              "Love Tarot este un serviciu de citire tarot conceput pentru divertisment și reflecție personală. Serviciul nostru oferă citiri tarot cu tematică de dragoste cu interpretări semnificative înrădăcinate în simbolismul tradițional al tarotului. Citirile sunt menite să inspire auto-reflecția și nu sunt destinate să prezică viitorul.",
          },
          noAdvice: {
            title: "Disclaimer - Fără sfaturi profesionale",
            content:
              "Love Tarot NU oferă sfaturi profesionale de niciun fel. Citirile noastre nu constituie și nu trebuie considerate ca: consiliere psihologică sau de sănătate mintală, sfaturi juridice, sfaturi financiare sau de investiții, sfaturi medicale sau de sănătate, sau consiliere relațională de la un profesionist autorizat. Căutați întotdeauna profesioniști calificați pentru probleme serioase.",
          },
          eligibility: {
            title: "Eligibilitatea utilizatorului",
            content:
              "Trebuie să aveți cel puțin 16 ani pentru a utiliza acest serviciu, în conformitate cu reglementările UE. Prin utilizarea serviciului nostru, confirmați că îndepliniți această cerință de vârstă.",
          },
          userResponsibilities: {
            title: "Responsabilitățile utilizatorului",
            content: "Când utilizați serviciul nostru, sunteți de acord să:",
            items: [
              "Utilizați serviciul doar pentru divertisment personal",
              "Nu vă bazați pe citiri pentru decizii importante de viață",
              "Furnizați informații exacte dacă alegeți să introduceți întrebări",
              "Nu încercați să folosiți greșit, să hackuiți sau să perturbați serviciul",
            ],
          },
          aiDisclaimer: {
            title: "Disclaimer conținut",
            content:
              "Citirile noastre sunt exclusiv pentru divertisment și reflecție. Interpretările pot să nu fie aplicabile fiecărei situații. Utilizatorii trebuie să își exercite propria judecată și să nu trateze citirile ca adevăr absolut sau îndrumare profesională.",
          },
          limitation: {
            title: "Limitarea răspunderii",
            content:
              'Love Tarot și operatorii săi nu vor fi răspunzători pentru nicio daună directă, indirectă, incidentală sau consecventă care rezultă din utilizarea serviciului. Oferim serviciul "ca atare" fără garanții de niciun fel.',
          },
          intellectualProperty: {
            title: "Proprietate intelectuală",
            content:
              "Tot conținutul, designurile, mărcile comerciale și proprietatea intelectuală de pe Love Tarot sunt deținute de noi sau de licențiatorii noștri. Nu puteți copia, modifica, distribui sau crea lucrări derivate fără permisiunea noastră.",
          },
          termination: {
            title: "Încetare",
            content:
              "Ne rezervăm dreptul de a înceta sau suspenda accesul dvs. la serviciu în orice moment, fără notificare, din orice motiv, inclusiv încălcarea acestor termeni.",
          },
          governingLaw: {
            title: "Legea aplicabilă",
            content:
              "Acești termeni sunt guvernați de principiile legii UE și standardele internaționale pentru produse de internet. Orice dispute vor fi rezolvate prin negociere de bună credință sau, dacă este necesar, prin canale legale adecvate.",
          },
          contact: {
            title: "Informații de contact",
            content:
              "Pentru orice întrebări despre acești Termeni și Condiții, vă rugăm să ne contactați la: chris@zhiyunllm.com",
          },
        },
      },
      contact: {
        title: "Contactați-ne",
        subtitle: "Pentru întrebări, feedback sau solicitări legale, ne puteți contacta la:",
        email: "chris@zhiyunllm.com",
        form: {
          name: "Numele dvs.",
          namePlaceholder: "Introduceți numele dvs.",
          email: "Adresa de email",
          emailPlaceholder: "your@email.com",
          message: "Mesaj",
          messagePlaceholder: "Cu ce vă putem ajuta?",
          submit: "Trimite mesaj",
          success: "Mesaj trimis cu succes! Vă vom răspunde în curând.",
        },
      },
    },
  },
  zh: {
    meta: {
      title: "Love Tarot – 真诚的心灵指引",
      description: "洞见式塔罗解读，帮助你反思爱情与关系。植根于永恒智慧，专为欧洲用户设计。",
      ogTitle: "Love Tarot 在线占卜",
      ogDescription: "通过古老塔罗智慧，发现真诚的心灵指引。充满洞见的爱情反思解读。",
    },
    nav: {
      home: "首页",
      startReading: "开始占卜",
      howItWorks: "如何使用",
      about: "关于",
      faq: "常见问题",
    },
    hero: {
      title: "Love Tarot",
      subtitle: "真诚的心灵指引",
      aiSubtitle: "🔮 受古老塔罗智慧引导",
      ctaStart: "开始爱情占卜",
      ctaHowItWorks: "了解流程",
      deckNote: "22张大阿尔卡纳牌",
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
          title: "接收你的解读",
          description: "获得个性化、富有意义的牌面解读，植根于永恒的塔罗象征。",
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
      subtitle: "关于Love Tarot的常见问题",
      items: [
        {
          question: "这是算命吗？",
          answer: "不是。我们将塔罗作为自我反思和心理洞察的工具，而不是预测未来的方式。",
        },
        {
          question: "解读是如何运作的？",
          answer: "我们的解读基于塔罗牌的传统含义，通过现代心理学视角提供鼓励自我反思的洞见。",
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
      title: "Love Tarot",
      tagline: "洞见式塔罗解读，帮助你思考并迈向未来。",
      disclaimer: "仅供娱乐和自我反思。不能替代专业建议。",
      links: {
        privacy: "隐私政策",
        terms: "服务条款",
        contact: "联系我们",
      },
    },
    tarot: {
      title: "Love Tarot",
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
        whatsapp: "WhatsApp",
        facebook: "Facebook",
        tiktok: "TikTok",
        download: "下载", // Updated from downloadCard
        downloadCard: "下载分享卡片",
        shareShort: "✨ 我的爱情塔罗占卜 →", // Added shareShort
        tiktokModal: {
          title: "爱情塔罗解读", // Updated title
          description: "复制你的解读摘要，粘贴到 TikTok 视频或帖子中。",
          copyButton: "复制摘要",
          copied: "已复制！粘贴到 TikTok 描述中即可。", // Updated copied message
        },
      },
      viewFullReading: "查看完整解读",
    },
    legal: {
      privacy: {
        title: "隐私政策",
        lastUpdated: "最后更新：2024年12月",
        sections: {
          intro: {
            title: "简介",
            content:
              "欢迎使用Love Tarot。本隐私政策说明我们在您使用塔罗牌占卜服务时如何收集、使用和保护您的个人信息。我们的服务仅供娱乐和自我反思之用。我们致力于保护您的隐私，并确保符合《通用数据保护条例》(GDPR)和《电子隐私指令》的要求。",
          },
          dataCollect: {
            title: "我们收集的数据",
            content: "我们收集以下类型的信息以提供和改进服务：",
            items: [
              "用户问题（可选）：您在占卜前选择输入的爱情相关问题",
              "卡牌选择数据：您选择的塔罗牌及其位置（过去、现在、未来）",
              "使用分析：关于您如何与我们服务互动的匿名数据（页面浏览、会话时长）",
              "Cookie：功能所需的必要Cookie和分析用的可选Cookie（需您同意）",
            ],
          },
          dataUse: {
            title: "我们如何使用您的数据",
            content: "您的数据仅用于以下目的：",
            items: [
              "根据您的卡牌选择生成个性化塔罗解读",
              "改进我们的解读质量和用户体验",
              "分析使用模式以提升服务质量",
              "我们不会将您的数据用于广告画像，也不会将您的信息出售给第三方",
            ],
          },
          legalBasis: {
            title: "GDPR下的法律依据",
            content: "我们基于以下法律依据处理您的个人数据：",
            items: [
              "同意：当您使用我们的服务并接受Cookie时，您提供了明确的同意",
              "合法利益：我们在改进服务和确保安全方面有合法利益",
            ],
          },
          dataSharing: {
            title: "数据分享",
            content:
              "我们不会出售您的个人信息。我们仅可能与必要的第三方服务提供商分享数据，这些提供商有合同义务保护您的数据，并仅将其用于提供服务。",
          },
          dataRetention: {
            title: "数据保留",
            content:
              "您的占卜历史是可选的，仅在您选择保存时才会存储。匿名使用数据会在90天后自动删除。您可以随时请求删除您的数据。",
          },
          userRights: {
            title: "您在GDPR下的权利",
            content: "作为欧盟用户，您享有以下权利：",
            items: [
              "访问权：请求获取您个人数据的副本",
              "删除权：请求删除您的个人数据",
              "数据可携权：以便携格式接收您的数据",
              "撤回同意权：随时撤回您的同意",
            ],
          },
          internationalTransfers: {
            title: "国际数据传输",
            content:
              "我们的服务可能使用第三方提供商，其服务器可能位于欧盟以外。我们确保采取适当的保护措施，包括标准合同条款，以在任何国际传输期间保护您的数据。",
          },
          childrenPrivacy: {
            title: "儿童隐私",
            content: "根据欧盟法规，我们的服务不面向16岁以下的用户。我们不会故意收集16岁以下儿童的个人信息。",
          },
          contact: {
            title: "联系方式",
            content: "如有任何隐私相关问题或需要行使您的权利，请通过以下邮箱联系我们：chris@zhiyunllm.com",
          },
        },
      },
      terms: {
        title: "服务条款",
        lastUpdated: "最后更新：2024年12月",
        sections: {
          acceptance: {
            title: "条款接受",
            content: "访问或使用Love Tarot即表示您同意受这些服务条款的约束。如果您不同意这些条款，请勿使用我们的服务。",
          },
          description: {
            title: "服务描述",
            content:
              "Love Tarot是一款塔罗占卜服务，专为娱乐和个人反思而设计。我们的服务提供爱情主题的塔罗占卜，解读植根于传统塔罗象征。占卜旨在激发自我反思，而非预测未来。",
          },
          noAdvice: {
            title: "非专业建议免责声明",
            content:
              "Love Tarot不提供任何形式的专业建议。我们的占卜不构成也不应被视为：心理或心理健康咨询、法律建议、财务或投资建议、医疗或健康建议、或来自持证专业人士的关系咨询。重要事项请务必寻求合格专业人士的帮助。",
          },
          eligibility: {
            title: "用户资格",
            content: "根据欧盟法规，您必须年满16岁才能使用本服务。使用我们的服务即表示您确认符合此年龄要求。",
          },
          userResponsibilities: {
            title: "用户责任",
            content: "使用我们的服务时，您同意：",
            items: [
              "仅将服务用于个人娱乐",
              "不依赖占卜结果做出重要人生决定",
              "如选择输入问题，请提供准确信息",
              "不试图滥用、攻击或破坏服务",
            ],
          },
          aiDisclaimer: {
            title: "内容免责声明",
            content:
              "我们的占卜仅供娱乐和反思之用。解读可能不适用于每种情况。用户应自行判断，不应将解读视为绝对真理或专业指导。",
          },
          limitation: {
            title: "责任限制",
            content:
              'Love Tarot及其运营商对因使用服务而产生的任何直接、间接、附带或后果性损害不承担责任。我们"按原样"提供服务，不作任何形式的保证。',
          },
          intellectualProperty: {
            title: "知识产权",
            content:
              "Love Tarot上的所有内容、设计、商标和知识产权均归我们或我们的许可方所有。未经我们许可，您不得复制、修改、分发或创作衍生作品。",
          },
          termination: {
            title: "终止",
            content: "我们保留随时终止或暂停您对服务访问的权利，无需通知，出于任何原因，包括违反这些条款。",
          },
          governingLaw: {
            title: "适用法律",
            content:
              "这些条款受欧盟法律原则和国际互联网产品标准管辖。任何争议应通过善意协商解决，必要时通过适当的法律途径解决。",
          },
          contact: {
            title: "联系方式",
            content: "如对这些服务条款有任何疑问，请通过以下邮箱联系我们：chris@zhiyunllm.com",
          },
        },
      },
      contact: {
        title: "联系我们",
        subtitle: "如有咨询、反馈或法律请求，请通过以下方式联系我们：",
        email: "chris@zhiyunllm.com",
        form: {
          name: "您的姓名",
          namePlaceholder: "请输入您的姓名",
          email: "电子邮箱",
          emailPlaceholder: "your@email.com",
          message: "留言内容",
          messagePlaceholder: "我们能为您做些什么？",
          submit: "发送消息",
          success: "消息发送成功！我们会尽快回复您。",
        },
      },
    },
  },
}

export function getTranslations(locale: Locale): Translations {
  return translations[locale] || translations.en
}
