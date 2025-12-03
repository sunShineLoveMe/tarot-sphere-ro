import type { Locale } from "@/lib/i18n/locales"

export interface TarotCard {
  id: number
  name: {
    en: string
    zh: string
  }
  keywords: {
    en: string[]
    zh: string[]
  }
  loveUpright: {
    en: {
      situation: string
      future: string
      advice: string
    }
    zh: {
      situation: string
      future: string
      advice: string
    }
  }
  loveReversed: {
    en: {
      situation: string
      future: string
      advice: string
    }
    zh: {
      situation: string
      future: string
      advice: string
    }
  }
  quote: {
    en: string
    zh: string
  }
  image?: string
}

// MVP: 20-card curated love deck (scalable to 78)
export const loveDeck: TarotCard[] = [
  {
    id: 0,
    name: { en: "The Fool", zh: "愚者" },
    keywords: {
      en: ["New Beginnings", "Innocence", "Spontaneity", "Free Spirit", "Adventure"],
      zh: ["新开始", "纯真", "自发性", "自由精神", "冒险"],
    },
    loveUpright: {
      en: {
        situation:
          "You're at the beginning of an exciting new chapter in love. There's a fresh, innocent quality to your romantic energy right now.",
        future:
          "New romantic opportunities are approaching. Be open to unexpected connections and don't overthink — let love surprise you.",
        advice:
          "Take a leap of faith in love. Release past baggage and approach relationships with childlike wonder and openness.",
      },
      zh: {
        situation: "你正处于爱情激动人心的新篇章的开始。你现在的浪漫能量有一种清新、纯真的特质。",
        future: "新的浪漫机会正在接近。对意想不到的联系保持开放，不要过度思考——让爱给你惊喜。",
        advice: "在爱情中勇敢尝试。放下过去的包袱，以孩童般的好奇心和开放态度对待感情。",
      },
    },
    loveReversed: {
      en: {
        situation:
          "Fear of commitment or recklessness may be affecting your love life. You might be avoiding emotional growth.",
        future: "Without grounding, romantic opportunities may pass you by. Consider what's holding you back.",
        advice:
          "Balance spontaneity with wisdom. It's okay to be cautious, but don't let fear prevent you from experiencing love.",
      },
      zh: {
        situation: "对承诺的恐惧或鲁莽可能正在影响你的爱情生活。你可能在回避情感成长。",
        future: "如果没有脚踏实地，浪漫的机会可能会从你身边溜走。思考是什么在阻碍你。",
        advice: "在自发性和智慧之间取得平衡。谨慎是好的，但不要让恐惧阻止你体验爱情。",
      },
    },
    quote: {
      en: "Every love story begins with a single step into the unknown.",
      zh: "每一个爱情故事都始于迈向未知的一步。",
    },
  },
  {
    id: 1,
    name: { en: "The Magician", zh: "魔术师" },
    keywords: {
      en: ["Manifestation", "Resourcefulness", "Power", "Inspired Action", "Will"],
      zh: ["显化", "足智多谋", "力量", "灵感行动", "意志"],
    },
    loveUpright: {
      en: {
        situation:
          "You have all the tools you need to create the love life you desire. Your charisma and communication skills are heightened.",
        future: "You have the power to manifest the relationship you want. Focus your intentions clearly.",
        advice: "Take initiative in love. Use your natural gifts to attract and nurture romantic connections.",
      },
      zh: {
        situation: "你拥有创造理想爱情生活所需的一切工具。你的魅力和沟通技巧正处于高峰。",
        future: "你有能力显化你想要的关系。清晰地集中你的意图。",
        advice: "在爱情中主动出击。运用你的天赋来吸引和培养浪漫关系。",
      },
    },
    loveReversed: {
      en: {
        situation: "You may be manipulating situations or not using your talents authentically in relationships.",
        future: "Deception or miscommunication could harm your love life if not addressed.",
        advice: "Be honest and authentic. Real love requires genuine connection, not tricks or games.",
      },
      zh: {
        situation: "你可能在操纵情况或在关系中没有真实地使用你的才能。",
        future: "如果不解决，欺骗或沟通不畅可能会伤害你的爱情生活。",
        advice: "诚实真实。真正的爱情需要真诚的联系，而不是技巧或游戏。",
      },
    },
    quote: {
      en: "You are the architect of your own love story.",
      zh: "你是自己爱情故事的建筑师。",
    },
  },
  {
    id: 2,
    name: { en: "The High Priestess", zh: "女祭司" },
    keywords: {
      en: ["Intuition", "Sacred Knowledge", "Mystery", "Subconscious", "Inner Voice"],
      zh: ["直觉", "神圣知识", "神秘", "潜意识", "内心声音"],
    },
    loveUpright: {
      en: {
        situation:
          "Trust your intuition about your love life. There may be hidden depths to explore in your relationships.",
        future:
          "Secrets may be revealed, or a deeper understanding of love will emerge. Pay attention to dreams and gut feelings.",
        advice: "Listen to your inner voice. The answers you seek about love are already within you.",
      },
      zh: {
        situation: "相信你对爱情生活的直觉。你的关系中可能有隐藏的深度等待探索。",
        future: "秘密可能会被揭示，或者对爱情更深的理解将会出现。注意梦境和直觉。",
        advice: "倾听你内心的声音。你寻找的关于爱的答案已经在你心中。",
      },
    },
    loveReversed: {
      en: {
        situation: "You may be ignoring your intuition or there are secrets in your relationship that need addressing.",
        future: "Confusion in love may persist until you reconnect with your inner wisdom.",
        advice: "Stop looking outward for answers. Sit with your feelings and trust what your heart knows.",
      },
      zh: {
        situation: "你可能忽视了你的直觉，或者你的关系中存在需要解决的秘密。",
        future: "爱情中的困惑可能会持续，直到你重新连接内在智慧。",
        advice: "停止向外寻找答案。静下心来感受，相信你心中所知。",
      },
    },
    quote: {
      en: "The heart knows truths the mind cannot explain.",
      zh: "心知道头脑无法解释的真理。",
    },
  },
  {
    id: 3,
    name: { en: "The Empress", zh: "女皇" },
    keywords: {
      en: ["Femininity", "Beauty", "Nature", "Nurturing", "Abundance"],
      zh: ["女性气质", "美丽", "自然", "滋养", "丰盛"],
    },
    loveUpright: {
      en: {
        situation:
          "Love is abundant and nurturing right now. There's a sensual, fertile quality to your romantic energy.",
        future:
          "Relationships will flourish with care and attention. This is a time of romantic abundance and pleasure.",
        advice: "Embrace sensuality and self-care. Nurture your relationships like a garden — with patience and love.",
      },
      zh: {
        situation: "爱情现在丰盛而滋养。你的浪漫能量有一种感性、肥沃的特质。",
        future: "用心呵护，关系将会蓬勃发展。这是浪漫丰盛和愉悦的时期。",
        advice: "拥抱感性和自我关爱。像照料花园一样培养你的关系——用耐心和爱。",
      },
    },
    loveReversed: {
      en: {
        situation: "You may be neglecting yourself or your relationship. Creative or romantic blocks may be present.",
        future: "Growth in love requires self-nurturing first. Address any codependency or neglect.",
        advice: "Fill your own cup before giving to others. You cannot nurture love from an empty well.",
      },
      zh: {
        situation: "你可能在忽视自己或你的关系。可能存在创造力或浪漫方面的障碍。",
        future: "爱情的成长首先需要自我滋养。解决任何共依存或忽视问题。",
        advice: "先装满自己的杯子，再给予他人。你无法从空井中滋养爱情。",
      },
    },
    quote: {
      en: "Love grows where it is nurtured.",
      zh: "爱在被滋养的地方成长。",
    },
  },
  {
    id: 4,
    name: { en: "The Emperor", zh: "皇帝" },
    keywords: {
      en: ["Authority", "Structure", "Protection", "Stability", "Leadership"],
      zh: ["权威", "结构", "保护", "稳定", "领导力"],
    },
    loveUpright: {
      en: {
        situation:
          "Stability and structure are entering your love life. A mature, committed relationship is possible or strengthening.",
        future: "Long-term partnership built on solid foundations awaits. Security in love is within reach.",
        advice: "Create healthy boundaries and structure in your relationships. Be a protector, not a controller.",
      },
      zh: {
        situation: "稳定和结构正在进入你的爱情生活。一段成熟、承诺的关系正在可能或加强。",
        future: "建立在坚实基础上的长期伴侣关系在等待着你。爱情中的安全感触手可及。",
        advice: "在你的关系中创造健康的界限和结构。做一个保护者，而不是控制者。",
      },
    },
    loveReversed: {
      en: {
        situation: "Control issues or rigidity may be affecting your love life. Power struggles could be present.",
        future: "Without flexibility, relationships may become stifling or break down.",
        advice: "Release the need to control. Love requires both strength and softness.",
      },
      zh: {
        situation: "控制问题或僵化可能正在影响你的爱情生活。可能存在权力斗争。",
        future: "没有灵活性，关系可能变得令人窒息或破裂。",
        advice: "放下控制的需要。爱情需要力量和柔软并存。",
      },
    },
    quote: {
      en: "True strength in love is knowing when to hold firm and when to bend.",
      zh: "爱情中真正的力量是知道何时坚定，何时屈服。",
    },
  },
  {
    id: 5,
    name: { en: "The Lovers", zh: "恋人" },
    keywords: {
      en: ["Soul Connection", "Harmony", "Choice", "Deep Bond", "Union"],
      zh: ["灵魂连接", "和谐", "选择", "深层纽带", "结合"],
    },
    loveUpright: {
      en: {
        situation:
          "The Lovers card reveals a profound moment in your romantic journey. You stand at a crossroads where your heart and mind seek alignment.",
        future:
          "The cosmic energies align to bring harmonious love into your path. Whether strengthening an existing bond or welcoming new love, the universe supports your heart's desires.",
        advice:
          "Honor both your heart and your values in matters of love. True partnership requires authentic self-expression and mutual respect.",
      },
      zh: {
        situation: "恋人牌揭示了你浪漫旅程中的深刻时刻。你正站在一个十字路口，你的心灵和思想都在寻求一致。",
        future:
          "宇宙能量正在调整，将和谐的爱带入你的道路。无论是加强现有的纽带还是迎接新的爱情，宇宙都支持你内心的渴望。",
        advice: "在爱情事务中，尊重你的内心和价值观。真正的伙伴关系需要真实的自我表达和相互尊重。",
      },
    },
    loveReversed: {
      en: {
        situation: "There may be disharmony or difficult choices in your love life. Values may be misaligned.",
        future: "Important decisions about love cannot be avoided. Face them with honesty.",
        advice: "Look at whether your values and your partner's are truly compatible. Don't ignore red flags.",
      },
      zh: {
        situation: "你的爱情生活中可能存在不和谐或困难的选择。价值观可能不一致。",
        future: "关于爱情的重要决定无法回避。诚实地面对它们。",
        advice: "看看你和你伴侣的价值观是否真正兼容。不要忽视危险信号。",
      },
    },
    quote: {
      en: "Love is the bridge between two souls seeking to become one light.",
      zh: "爱是两个灵魂之间的桥梁，寻求合为一束光明。",
    },
  },
  {
    id: 6,
    name: { en: "Strength", zh: "力量" },
    keywords: {
      en: ["Courage", "Patience", "Inner Strength", "Compassion", "Influence"],
      zh: ["勇气", "耐心", "内在力量", "同情心", "影响力"],
    },
    loveUpright: {
      en: {
        situation:
          "Your inner strength and patience are your greatest assets in love right now. Handle relationship challenges with grace.",
        future: "Through gentle persistence and courage, love will overcome obstacles.",
        advice: "Approach love with patience rather than force. True strength is compassionate and kind.",
      },
      zh: {
        situation: "你的内在力量和耐心是你现在爱情中最大的资产。优雅地处理关系挑战。",
        future: "通过温和的坚持和勇气，爱将克服障碍。",
        advice: "用耐心而不是力量来对待爱情。真正的力量是富有同情心和善良的。",
      },
    },
    loveReversed: {
      en: {
        situation:
          "Self-doubt or lack of courage may be holding you back in love. You might be giving your power away.",
        future: "Reclaim your inner strength to transform your love life.",
        advice: "Believe in your worth. You are stronger than you think, and you deserve healthy love.",
      },
      zh: {
        situation: "自我怀疑或缺乏勇气可能阻碍你的爱情。你可能在放弃自己的力量。",
        future: "重新获得你的内在力量来改变你的爱情生活。",
        advice: "相信你的价值。你比你想象的更强大，你值得拥有健康的爱。",
      },
    },
    quote: {
      en: "The greatest battles in love are won with patience and an open heart.",
      zh: "爱情中最伟大的战斗是用耐心和开放的心赢得的。",
    },
  },
  {
    id: 7,
    name: { en: "The Star", zh: "星星" },
    keywords: {
      en: ["Hope", "Faith", "Renewal", "Serenity", "Inspiration"],
      zh: ["希望", "信念", "更新", "宁静", "灵感"],
    },
    loveUpright: {
      en: {
        situation:
          "Hope and healing are present in your love life. After difficulties, a period of peace and renewal arrives.",
        future: "Your romantic wishes are being heard by the universe. Keep faith — love is on its way.",
        advice: "Stay hopeful and open. Trust that you deserve love and it will find you.",
      },
      zh: {
        situation: "希望和治愈存在于你的爱情生活中。困难之后，和平与更新的时期到来。",
        future: "你的浪漫愿望正被宇宙听到。保持信念——爱正在来的路上。",
        advice: "保持希望和开放。相信你值得拥有爱，爱会找到你。",
      },
    },
    loveReversed: {
      en: {
        situation: "You may have lost hope in love or feel disconnected from your romantic dreams.",
        future: "Hope can be rekindled. Focus on healing before seeking new love.",
        advice: "Take time to restore your faith in love. Healing yourself attracts healthier relationships.",
      },
      zh: {
        situation: "你可能对爱情失去了希望，或者感觉与浪漫梦想脱节。",
        future: "希望可以重新点燃。在寻找新爱情之前专注于治愈。",
        advice: "花时间恢复你对爱的信念。治愈自己会吸引更健康的关系。",
      },
    },
    quote: {
      en: "Even the darkest night ends, and love rises like the morning star.",
      zh: "即使最黑暗的夜晚也会结束，爱如晨星般升起。",
    },
  },
  {
    id: 8,
    name: { en: "The Moon", zh: "月亮" },
    keywords: {
      en: ["Illusion", "Intuition", "Uncertainty", "Dreams", "Subconscious"],
      zh: ["幻觉", "直觉", "不确定性", "梦想", "潜意识"],
    },
    loveUpright: {
      en: {
        situation:
          "There may be confusion or hidden emotions in your love life. Things are not as they appear on the surface.",
        future: "Clarity will come, but first you must navigate through uncertainty. Trust the process.",
        advice: "Pay attention to your dreams and intuition. Not everything in love is as it seems — dig deeper.",
      },
      zh: {
        situation: "你的爱情生活中可能存在困惑或隐藏的情感。事情不像表面上看起来那样。",
        future: "清晰会到来，但首先你必须穿越不确定性。相信这个过程。",
        advice: "注意你的梦境和直觉。爱情中并非一切都像看起来那样——深入挖掘。",
      },
    },
    loveReversed: {
      en: {
        situation: "Fears and anxieties about love are surfacing. Deception or self-deception may be at play.",
        future: "As illusions clear, the truth about your love situation will emerge.",
        advice: "Face your fears about love honestly. Release illusions and see relationships as they truly are.",
      },
      zh: {
        situation: "关于爱情的恐惧和焦虑正在浮现。可能存在欺骗或自欺。",
        future: "当幻觉消散，关于你爱情状况的真相将会浮现。",
        advice: "诚实面对你对爱情的恐惧。放下幻想，看清关系的真实面貌。",
      },
    },
    quote: {
      en: "In the moonlight of love, shadows reveal as much as light.",
      zh: "在爱情的月光下，阴影和光明同样揭示真相。",
    },
  },
  {
    id: 9,
    name: { en: "The Sun", zh: "太阳" },
    keywords: {
      en: ["Joy", "Success", "Vitality", "Positivity", "Celebration"],
      zh: ["喜悦", "成功", "活力", "积极", "庆祝"],
    },
    loveUpright: {
      en: {
        situation: "Joy and warmth radiate in your love life. This is one of the most positive cards for romance.",
        future: "Happiness in love is assured. Celebrate your relationships and the joy they bring.",
        advice: "Let your light shine in love. Be open, joyful, and share your warmth with those you care about.",
      },
      zh: {
        situation: "喜悦和温暖在你的爱情生活中散发。这是浪漫中最积极的牌之一。",
        future: "爱情中的幸福是确定的。庆祝你的关系和它们带来的喜悦。",
        advice: "让你的光芒在爱情中闪耀。开放、快乐，与你关心的人分享你的温暖。",
      },
    },
    loveReversed: {
      en: {
        situation: "The joy in your love life may be dimmed temporarily. You might be struggling to see the positive.",
        future: "The sun will shine again on your love life. Have patience.",
        advice: "Reconnect with what brings you joy. Don't let temporary clouds block your inner light.",
      },
      zh: {
        situation: "你爱情生活中的喜悦可能暂时黯淡。你可能在努力看到积极的一面。",
        future: "太阳会再次照耀你的爱情生活。要有耐心。",
        advice: "重新连接带给你喜悦的事物。不要让暂时的乌云遮挡你内心的光芒。",
      },
    },
    quote: {
      en: "Love at its brightest warms everything it touches.",
      zh: "最明亮的爱温暖它所触及的一切。",
    },
  },
  {
    id: 10,
    name: { en: "The World", zh: "世界" },
    keywords: {
      en: ["Completion", "Integration", "Achievement", "Fulfillment", "Wholeness"],
      zh: ["完成", "整合", "成就", "满足", "完整"],
    },
    loveUpright: {
      en: {
        situation:
          "A cycle in your love life is completing. You may have reached a significant milestone in your relationship.",
        future: "Fulfillment and wholeness in love await. New chapters begin from a place of completion.",
        advice: "Celebrate how far you've come in love. Honor your journey and prepare for the next beautiful chapter.",
      },
      zh: {
        situation: "你爱情生活中的一个周期正在完成。你可能在关系中达到了一个重要的里程碑。",
        future: "爱情中的满足和完整在等待着。新篇章从完成的地方开始。",
        advice: "庆祝你在爱情中走过的路程。尊重你的旅程，准备迎接下一个美丽的篇章。",
      },
    },
    loveReversed: {
      en: {
        situation: "You may feel incomplete in love or that something is missing. A cycle may be struggling to close.",
        future: "Completion is possible, but requires letting go of what no longer serves you.",
        advice: "Identify what's preventing you from feeling whole in love. Release it and embrace closure.",
      },
      zh: {
        situation: "你可能在爱情中感到不完整或缺少什么。一个周期可能难以结束。",
        future: "完成是可能的，但需要放下不再服务于你的东西。",
        advice: "找出是什么阻止你在爱情中感到完整。释放它，拥抱结束。",
      },
    },
    quote: {
      en: "In love, every ending is a new beginning in disguise.",
      zh: "在爱情中，每一个结束都是伪装的新开始。",
    },
  },
  {
    id: 11,
    name: { en: "Two of Cups", zh: "圣杯二" },
    keywords: {
      en: ["Partnership", "Mutual Attraction", "Connection", "Unity", "Romance"],
      zh: ["伙伴关系", "相互吸引", "连接", "统一", "浪漫"],
    },
    loveUpright: {
      en: {
        situation: "A beautiful connection is forming or deepening. There's mutual attraction and emotional balance.",
        future: "A meaningful romantic partnership is on the horizon. Hearts are aligning.",
        advice: "Open yourself to genuine connection. When two hearts meet in honesty, magic happens.",
      },
      zh: {
        situation: "一个美丽的连接正在形成或加深。存在相互吸引和情感平衡。",
        future: "一段有意义的浪漫伴侣关系即将到来。心灵正在对齐。",
        advice: "向真诚的连接敞开心扉。当两颗心在诚实中相遇，奇迹就会发生。",
      },
    },
    loveReversed: {
      en: {
        situation:
          "There may be imbalance or disconnect in your romantic connection. One person may be giving more than receiving.",
        future: "Work on restoring balance to bring the relationship back to harmony.",
        advice: "Examine whether your relationship has equal give and take. Address imbalances honestly.",
      },
      zh: {
        situation: "你的浪漫连接中可能存在不平衡或脱节。一方可能付出多于接受。",
        future: "努力恢复平衡，使关系回归和谐。",
        advice: "检查你的关系是否有平等的给予和接受。诚实地解决不平衡问题。",
      },
    },
    quote: {
      en: "When two hearts beat as one, love becomes infinite.",
      zh: "当两颗心合而为一，爱变得无限。",
    },
  },
  {
    id: 12,
    name: { en: "Ace of Cups", zh: "圣杯王牌" },
    keywords: {
      en: ["New Love", "Emotional Beginning", "Intuition", "Compassion", "Overflowing Heart"],
      zh: ["新爱情", "情感开始", "直觉", "同情心", "满溢的心"],
    },
    loveUpright: {
      en: {
        situation: "A new wave of love and emotion is entering your life. Your heart is open and ready to receive.",
        future: "New love or a renewal of love is coming. Your emotional cup is about to overflow.",
        advice: "Be receptive to love in all its forms. Let your heart remain open to new emotional experiences.",
      },
      zh: {
        situation: "一股新的爱和情感正在进入你的生活。你的心是开放的，准备好接受。",
        future: "新的爱情或爱情的更新即将到来。你的情感之杯即将溢出。",
        advice: "接受各种形式的爱。让你的心对新的情感体验保持开放。",
      },
    },
    loveReversed: {
      en: {
        situation: "You may be blocking yourself from receiving love or experiencing emotional emptiness.",
        future: "Healing emotional blocks will allow love to flow again.",
        advice:
          "Examine what's causing you to close your heart. Self-love is the first step to receiving love from others.",
      },
      zh: {
        situation: "你可能在阻止自己接受爱或正在经历情感空虚。",
        future: "治愈情感障碍将让爱再次流动。",
        advice: "检查是什么让你关闭心扉。自爱是接受他人之爱的第一步。",
      },
    },
    quote: {
      en: "An open heart is the vessel through which love flows.",
      zh: "一颗开放的心是爱流动的容器。",
    },
  },
  {
    id: 13,
    name: { en: "Knight of Cups", zh: "圣杯骑士" },
    keywords: {
      en: ["Romance", "Charm", "Imagination", "Proposal", "Following Heart"],
      zh: ["浪漫", "魅力", "想象力", "求婚", "追随内心"],
    },
    loveUpright: {
      en: {
        situation: "Romance and charm are in the air. Someone may be pursuing you with heartfelt intentions.",
        future: "A romantic gesture or proposal may be coming. Follow your heart's calling.",
        advice: "Embrace your romantic side. Don't be afraid to express your feelings with poetic gestures.",
      },
      zh: {
        situation: "浪漫和魅力弥漫在空气中。某人可能正在真诚地追求你。",
        future: "一个浪漫的举动或求婚可能即将到来。追随你心灵的召唤。",
        advice: "拥抱你浪漫的一面。不要害怕用诗意的举动表达你的感情。",
      },
    },
    loveReversed: {
      en: {
        situation: "Beware of someone who is all charm but no substance. Romantic idealism may be clouding reality.",
        future: "Ground your romantic dreams in reality. Not every knight's intentions are pure.",
        advice: "Look beyond the surface charm. True love is shown through actions, not just beautiful words.",
      },
      zh: {
        situation: "小心那些只有魅力没有内涵的人。浪漫理想主义可能在遮蔽现实。",
        future: "让你的浪漫梦想扎根于现实。不是每个骑士的意图都是纯洁的。",
        advice: "看穿表面的魅力。真爱通过行动展现，而不仅仅是美丽的言辞。",
      },
    },
    quote: {
      en: "True romance speaks through actions as much as words.",
      zh: "真正的浪漫通过行动和言语同样表达。",
    },
  },
  {
    id: 14,
    name: { en: "Queen of Cups", zh: "圣杯皇后" },
    keywords: {
      en: ["Emotional Depth", "Compassion", "Nurturing", "Intuitive", "Loving"],
      zh: ["情感深度", "同情心", "滋养", "直觉的", "充满爱的"],
    },
    loveUpright: {
      en: {
        situation:
          "Deep emotional connection and nurturing love are present. You or your partner embody compassionate love.",
        future: "Emotional maturity will guide your relationships to deeper intimacy.",
        advice: "Lead with your heart. Offer unconditional love while maintaining healthy emotional boundaries.",
      },
      zh: {
        situation: "深厚的情感连接和滋养的爱存在。你或你的伴侣体现了富有同情心的爱。",
        future: "情感成熟将引导你的关系走向更深的亲密。",
        advice: "用心引导。在保持健康情感界限的同时提供无条件的爱。",
      },
    },
    loveReversed: {
      en: {
        situation: "Emotional overwhelm or being too giving at your own expense may be affecting your love life.",
        future: "Balance nurturing others with nurturing yourself.",
        advice: "Don't lose yourself in caring for others. Your emotional needs matter too.",
      },
      zh: {
        situation: "情感过载或以牺牲自己为代价的过度付出可能影响你的爱情生活。",
        future: "在滋养他人和滋养自己之间取得平衡。",
        advice: "不要在照顾他人时迷失自己。你的情感需求也很重要。",
      },
    },
    quote: {
      en: "The heart that loves deeply understands without words.",
      zh: "深深爱着的心无需言语就能理解。",
    },
  },
  {
    id: 15,
    name: { en: "King of Cups", zh: "圣杯国王" },
    keywords: {
      en: ["Emotional Balance", "Diplomacy", "Wisdom", "Calm", "Maturity"],
      zh: ["情感平衡", "外交", "智慧", "平静", "成熟"],
    },
    loveUpright: {
      en: {
        situation:
          "Emotional mastery and maturity characterize your current love situation. Calm, balanced love is present.",
        future: "A mature, emotionally stable relationship is developing or strengthening.",
        advice: "Be the calm center in your relationships. Lead with emotional wisdom and balance.",
      },
      zh: {
        situation: "情感掌控和成熟是你当前爱情状况的特征。平静、平衡的爱存在。",
        future: "一段成熟、情感稳定的关系正在发展或加强。",
        advice: "成为你关系中的平静中心。以情感智慧和平衡来引导。",
      },
    },
    loveReversed: {
      en: {
        situation: "Emotional manipulation or suppression of feelings may be affecting your relationships.",
        future: "Developing true emotional intelligence will transform your love life.",
        advice: "Don't control emotions — yours or others'. Healthy love allows all feelings to flow.",
      },
      zh: {
        situation: "情感操纵或压抑感情可能影响你的关系。",
        future: "发展真正的情商将改变你的爱情生活。",
        advice: "不要控制情绪——无论是你的还是他人的。健康的爱允许所有感情流动。",
      },
    },
    quote: {
      en: "Mastery in love comes from mastery of oneself.",
      zh: "爱情的掌控来自于对自己的掌控。",
    },
  },
  {
    id: 16,
    name: { en: "Ten of Cups", zh: "圣杯十" },
    keywords: {
      en: ["Harmony", "Happiness", "Family", "Alignment", "Contentment"],
      zh: ["和谐", "幸福", "家庭", "一致", "满足"],
    },
    loveUpright: {
      en: {
        situation: "Emotional fulfillment and happiness in love are here. This is the 'happily ever after' card.",
        future: "Lasting love, family harmony, and emotional contentment await you.",
        advice:
          "Appreciate the love you have. Create a harmonious emotional environment for your relationships to thrive.",
      },
      zh: {
        situation: "爱情中的情感满足和幸福就在这里。这是'从此幸福'的牌。",
        future: "持久的爱、家庭和谐和情感满足在等待着你。",
        advice: "感激你拥有的爱。为你的关系创造一个和谐的情感环境使其蓬勃发展。",
      },
    },
    loveReversed: {
      en: {
        situation:
          "There may be disharmony in your home or relationship. The ideal of perfect happiness feels out of reach.",
        future: "Realign your values with your partner to restore harmony.",
        advice: "Address underlying issues before they grow. Perfect love doesn't exist, but deep contentment does.",
      },
      zh: {
        situation: "你的家庭或关系中可能存在不和谐。完美幸福的理想感觉遥不可及。",
        future: "与你的伴侣重新调整价值观以恢复和谐。",
        advice: "在问题扩大之前解决潜在问题。完美的爱不存在，但深深的满足是存在的。",
      },
    },
    quote: {
      en: "True happiness in love is built with shared dreams and grateful hearts.",
      zh: "爱情中真正的幸福是用共同的梦想和感恩的心建造的。",
    },
  },
  {
    id: 17,
    name: { en: "The Hierophant", zh: "教皇" },
    keywords: {
      en: ["Tradition", "Commitment", "Institutions", "Guidance", "Conformity"],
      zh: ["传统", "承诺", "制度", "指导", "顺从"],
    },
    loveUpright: {
      en: {
        situation:
          "Traditional values and commitment play a role in your love life. Marriage or official commitment may be relevant.",
        future: "A relationship built on shared values and tradition is forming or deepening.",
        advice:
          "Consider what traditions and values you want your relationship to be built upon. Seek wisdom from those who've loved well.",
      },
      zh: {
        situation: "传统价值观和承诺在你的爱情生活中扮演着角色。婚姻或正式承诺可能相关。",
        future: "一段建立在共同价值观和传统上的关系正在形成或加深。",
        advice: "考虑你希望你的关系建立在什么传统和价值观之上。向那些深爱过的人寻求智慧。",
      },
    },
    loveReversed: {
      en: {
        situation: "You may be questioning traditional approaches to love or feeling confined by expectations.",
        future: "Breaking from tradition may be necessary to find authentic love.",
        advice: "Define love on your own terms. Not all traditional paths are right for everyone.",
      },
      zh: {
        situation: "你可能在质疑传统的爱情方式或感到被期望所束缚。",
        future: "打破传统可能是找到真实爱情所必需的。",
        advice: "按照自己的方式定义爱情。并非所有传统道路都适合每个人。",
      },
    },
    quote: {
      en: "Love honors the wisdom of the past while writing its own story.",
      zh: "爱尊重过去的智慧，同时书写自己的故事。",
    },
  },
  {
    id: 18,
    name: { en: "Wheel of Fortune", zh: "命运之轮" },
    keywords: {
      en: ["Destiny", "Cycles", "Change", "Luck", "Turning Point"],
      zh: ["命运", "周期", "改变", "运气", "转折点"],
    },
    loveUpright: {
      en: {
        situation:
          "The wheel is turning in your favor in love. Fate is bringing changes that will benefit your romantic life.",
        future: "Destined encounters and fortunate changes in love are coming. Trust the timing.",
        advice: "Embrace the changes coming in your love life. The universe is aligning things for your highest good.",
      },
      zh: {
        situation: "爱情中的轮子正在向你有利的方向转动。命运正在带来有利于你浪漫生活的变化。",
        future: "命中注定的相遇和爱情中的幸运变化即将到来。相信时机。",
        advice: "拥抱你爱情生活中即将到来的变化。宇宙正在为你的最高利益安排一切。",
      },
    },
    loveReversed: {
      en: {
        situation: "You may feel like luck is against you in love, or that you're stuck in an unwanted cycle.",
        future: "The wheel always turns. Bad luck in love is temporary.",
        advice: "Don't resist change. What feels like misfortune may be redirecting you to better love.",
      },
      zh: {
        situation: "你可能觉得爱情中的运气不站在你这边，或者你陷入了不想要的循环。",
        future: "轮子总是在转动。爱情中的厄运是暂时的。",
        advice: "不要抗拒改变。感觉像是不幸的事情可能正在将你引向更好的爱情。",
      },
    },
    quote: {
      en: "In the wheel of love, every turn brings new possibilities.",
      zh: "在爱的轮盘中，每一次转动都带来新的可能。",
    },
  },
  {
    id: 19,
    name: { en: "Temperance", zh: "节制" },
    keywords: {
      en: ["Balance", "Patience", "Moderation", "Harmony", "Purpose"],
      zh: ["平衡", "耐心", "节制", "和谐", "目的"],
    },
    loveUpright: {
      en: {
        situation:
          "Balance and patience are working in your favor in love. A harmonious blending of energies is occurring.",
        future: "A balanced, healthy relationship is developing. Good things come to those who wait.",
        advice: "Practice patience in love. The best relationships develop slowly and with careful attention.",
      },
      zh: {
        situation: "平衡和耐心在爱情中对你有利。能量的和谐融合正在发生。",
        future: "一段平衡、健康的关系正在发展。好事属于那些等待的人。",
        advice: "在爱情中练习耐心。最好的关系是慢慢发展的，需要用心关注。",
      },
    },
    loveReversed: {
      en: {
        situation:
          "Imbalance or impatience may be affecting your love life. You might be rushing or going to extremes.",
        future: "Finding middle ground is necessary for love to flourish.",
        advice: "Avoid all-or-nothing thinking in love. Balance passion with patience.",
      },
      zh: {
        situation: "不平衡或不耐烦可能影响你的爱情生活。你可能在匆忙或走向极端。",
        future: "找到中间地带对于爱情的蓬勃发展是必要的。",
        advice: "在爱情中避免非此即彼的思维。用耐心平衡激情。",
      },
    },
    quote: {
      en: "Love blossoms in the balance between giving and receiving.",
      zh: "爱在给予和接受的平衡中绽放。",
    },
  },
]

// Utility functions
export const TOTAL_CARDS = loveDeck.length

export function getCardByIndex(index: number): TarotCard {
  return loveDeck[index % TOTAL_CARDS]
}

export function isReversed(): boolean {
  return Math.random() > 0.5
}

export function getCardReading(card: TarotCard, reversed: boolean, locale: Locale) {
  const reading = reversed ? card.loveReversed : card.loveUpright
  const localeKey = locale as keyof typeof card.name

  return {
    name: card.name[localeKey] || card.name.en,
    keywords: card.keywords[localeKey] || card.keywords.en,
    position: reversed ? (locale === "zh" ? "逆位" : "Reversed") : locale === "zh" ? "正位" : "Upright",
    situation: reading[localeKey]?.situation || reading.en.situation,
    future: reading[localeKey]?.future || reading.en.future,
    advice: reading[localeKey]?.advice || reading.en.advice,
    quote: card.quote[localeKey] || card.quote.en,
  }
}
