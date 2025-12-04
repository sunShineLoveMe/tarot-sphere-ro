export interface TarotCard {
  id: number
  name: {
    en: string
    zh: string
    ro: string
  }
  keywords: {
    en: string[]
    zh: string[]
    ro: string[]
  }
  loveUpright: {
    en: { situation: string; future: string; advice: string }
    zh: { situation: string; future: string; advice: string }
    ro: { situation: string; future: string; advice: string }
  }
  loveReversed: {
    en: { situation: string; future: string; advice: string }
    zh: { situation: string; future: string; advice: string }
    ro: { situation: string; future: string; advice: string }
  }
  quote: {
    en: string
    zh: string
    ro: string
  }
  image?: string
}

// Full 22 Major Arcana deck
export const loveDeck: TarotCard[] = [
  {
    id: 0,
    name: { en: "The Fool", zh: "愚者", ro: "Nebunul" },
    keywords: {
      en: ["New Beginnings", "Innocence", "Spontaneity", "Free Spirit", "Adventure"],
      zh: ["新开始", "纯真", "自发性", "自由精神", "冒险"],
      ro: ["Începuturi Noi", "Inocență", "Spontaneitate", "Spirit Liber", "Aventură"],
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
      ro: {
        situation:
          "Te afli la începutul unui nou capitol emoționant în dragoste. Există o calitate proaspătă și inocentă în energia ta romantică acum.",
        future:
          "Noi oportunități romantice se apropie. Fii deschis la conexiuni neașteptate și nu gândi prea mult — lasă dragostea să te surprindă.",
        advice:
          "Fă un salt de credință în dragoste. Eliberează bagajul trecut și abordează relațiile cu uimire și deschidere copilărească.",
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
      ro: {
        situation:
          "Frica de angajament sau imprudența ar putea afecta viața ta amoroasă. S-ar putea să eviți creșterea emoțională.",
        future: "Fără fundament, oportunitățile romantice ar putea să te ocolească. Gândește-te ce te reține.",
        advice:
          "Echilibrează spontaneitatea cu înțelepciunea. E în regulă să fii precaut, dar nu lăsa frica să te împiedice să experimentezi dragostea.",
      },
    },
    quote: {
      en: "Every love story begins with a single step into the unknown.",
      zh: "每一个爱情故事都始于迈向未知的一步。",
      ro: "Fiecare poveste de dragoste începe cu un singur pas în necunoscut.",
    },
  },
  {
    id: 1,
    name: { en: "The Magician", zh: "魔术师", ro: "Magicianul" },
    keywords: {
      en: ["Manifestation", "Resourcefulness", "Power", "Inspired Action", "Will"],
      zh: ["显化", "足智多谋", "力量", "灵感行动", "意志"],
      ro: ["Manifestare", "Ingeniozitate", "Putere", "Acțiune Inspirată", "Voință"],
    },
    loveUpright: {
      en: {
        situation:
          "You have all the tools you need to create the love life you desire. Your charisma and communication skills are heightened.",
        future: "You have the power to manifest the relationship you want. Focus your intentions clearly.",
        advice: "Take initiative in love. Use your natural gifts to attract and nurture romantic connections.",
      },
      zh: {
        situation: "你拥有创造理想爱情生活所需的一切工具。你的魅力和沟通技巧都处于高峰。",
        future: "你有能力显化你想要的关系。清晰地聚焦你的意图。",
        advice: "在爱情中主动出击。运用你的天赋来吸引和培养浪漫关系。",
      },
      ro: {
        situation:
          "Ai toate instrumentele necesare pentru a crea viața amoroasă pe care o dorești. Carisma și abilitățile tale de comunicare sunt amplificate.",
        future: "Ai puterea de a manifesta relația pe care o dorești. Concentrează-ți intențiile clar.",
        advice:
          "Ia inițiativa în dragoste. Folosește-ți darurile naturale pentru a atrage și cultiva conexiuni romantice.",
      },
    },
    loveReversed: {
      en: {
        situation: "You may be manipulating situations or not using your gifts authentically in relationships.",
        future: "Deception or miscommunication could cause problems. Be honest about your intentions.",
        advice: "Align your actions with your true desires. Avoid games and be genuine in your romantic pursuits.",
      },
      zh: {
        situation: "你可能在操控局面，或在关系中没有真实地运用你的天赋。",
        future: "欺骗或沟通不畅可能会造成问题。对你的意图保持诚实。",
        advice: "让你的行动与真正的渴望保持一致。避免玩心计，在追求爱情时保持真诚。",
      },
      ro: {
        situation: "S-ar putea să manipulezi situațiile sau să nu-ți folosești darurile autentic în relații.",
        future:
          "Înșelăciunea sau comunicarea greșită ar putea cauza probleme. Fii sincer cu privire la intențiile tale.",
        advice:
          "Aliniază-ți acțiunile cu dorințele tale adevărate. Evită jocurile și fii autentic în căutările tale romantice.",
      },
    },
    quote: {
      en: "Love is the greatest magic we can create.",
      zh: "爱是我们能创造的最伟大的魔法。",
      ro: "Dragostea este cea mai mare magie pe care o putem crea.",
    },
  },
  {
    id: 2,
    name: { en: "The High Priestess", zh: "女祭司", ro: "Marea Preoteasă" },
    keywords: {
      en: ["Intuition", "Mystery", "Inner Voice", "Subconscious", "Divine Feminine"],
      zh: ["直觉", "神秘", "内心之声", "潜意识", "神圣女性"],
      ro: ["Intuiție", "Mister", "Vocea Interioară", "Subconștient", "Divinul Feminin"],
    },
    loveUpright: {
      en: {
        situation:
          "Trust your intuition about your love life. There may be hidden aspects to explore within yourself or your relationship.",
        future: "Secrets may be revealed. Trust your inner knowing about romantic matters.",
        advice: "Listen to your inner voice. The answers you seek about love lie within you.",
      },
      zh: {
        situation: "相信你对爱情生活的直觉。可能有隐藏的方面需要在你自己或你的关系中探索。",
        future: "秘密可能会被揭示。相信你对浪漫事务的内在认知。",
        advice: "倾听你内心的声音。你寻求的关于爱的答案就在你心中。",
      },
      ro: {
        situation:
          "Ai încredere în intuiția ta despre viața ta amoroasă. Ar putea exista aspecte ascunse de explorat în tine sau în relația ta.",
        future:
          "Secretele ar putea fi dezvăluite. Ai încredere în cunoașterea ta interioară despre chestiunile romantice.",
        advice: "Ascultă-ți vocea interioară. Răspunsurile pe care le cauți despre dragoste se află în tine.",
      },
    },
    loveReversed: {
      en: {
        situation: "You may be ignoring your intuition or there are secrets affecting your relationship.",
        future: "Hidden truths may surface. Be prepared to face what's been concealed.",
        advice: "Don't ignore red flags. Reconnect with your inner wisdom about love.",
      },
      zh: {
        situation: "你可能在忽视你的直觉，或者有秘密在影响你的关系。",
        future: "隐藏的真相可能会浮出水面。准备好面对被隐藏的事情。",
        advice: "不要忽视危险信号。重新连接你关于爱的内在智慧。",
      },
      ro: {
        situation: "S-ar putea să-ți ignori intuiția sau există secrete care îți afectează relația.",
        future: "Adevăruri ascunse ar putea ieși la suprafață. Fii pregătit să înfrunți ce a fost ascuns.",
        advice: "Nu ignora semnalele de alarmă. Reconectează-te cu înțelepciunea ta interioară despre dragoste.",
      },
    },
    quote: {
      en: "The heart knows truths the mind cannot fathom.",
      zh: "心知道头脑无法理解的真相。",
      ro: "Inima cunoaște adevăruri pe care mintea nu le poate înțelege.",
    },
  },
  {
    id: 3,
    name: { en: "The Empress", zh: "皇后", ro: "Împărăteasa" },
    keywords: {
      en: ["Abundance", "Nurturing", "Fertility", "Beauty", "Sensuality"],
      zh: ["丰盛", "滋养", "生育", "美丽", "感官"],
      ro: ["Abundență", "Îngrijire", "Fertilitate", "Frumusețe", "Senzualitate"],
    },
    loveUpright: {
      en: {
        situation:
          "Love is flourishing around you. This is a time of deep nurturing, sensuality, and emotional abundance.",
        future: "Romance will blossom. Expect growth, fertility, and deepening of emotional bonds.",
        advice: "Embrace your sensual nature. Nurture your relationships with care and abundance.",
      },
      zh: {
        situation: "爱正在你周围蓬勃发展。这是一个深度滋养、感官享受和情感丰盛的时期。",
        future: "浪漫将会绽放。期待成长、生育和情感纽带的加深。",
        advice: "拥抱你的感性本质。用关怀和丰盛滋养你的关系。",
      },
      ro: {
        situation:
          "Dragostea înflorește în jurul tău. Aceasta este o perioadă de îngrijire profundă, senzualitate și abundență emoțională.",
        future: "Romantismul va înflori. Așteaptă-te la creștere, fertilitate și aprofundarea legăturilor emoționale.",
        advice: "Îmbrățișează-ți natura senzuală. Hrănește-ți relațiile cu grijă și abundență.",
      },
    },
    loveReversed: {
      en: {
        situation: "You may be neglecting self-care or feeling creatively blocked in love.",
        future: "Emotional stagnation is possible if you don't address your needs.",
        advice: "Reconnect with your body and emotions. Practice self-love before giving to others.",
      },
      zh: {
        situation: "你可能在忽视自我照顾，或在爱情中感到创造力受阻。",
        future: "如果你不关注自己的需求，情感停滞是可能的。",
        advice: "重新连接你的身体和情感。在给予他人之前先练习自爱。",
      },
      ro: {
        situation: "S-ar putea să neglijezi îngrijirea de sine sau să te simți blocat creativ în dragoste.",
        future: "Stagnarea emoțională este posibilă dacă nu îți adresezi nevoile.",
        advice: "Reconectează-te cu corpul și emoțiile tale. Practică iubirea de sine înainte de a oferi altora.",
      },
    },
    quote: {
      en: "Love grows where it is nurtured with care.",
      zh: "爱在被用心滋养的地方生长。",
      ro: "Dragostea crește acolo unde este îngrijită cu grijă.",
    },
  },
  {
    id: 4,
    name: { en: "The Emperor", zh: "皇帝", ro: "Împăratul" },
    keywords: {
      en: ["Authority", "Structure", "Protection", "Stability", "Leadership"],
      zh: ["权威", "结构", "保护", "稳定", "领导力"],
      ro: ["Autoritate", "Structură", "Protecție", "Stabilitate", "Conducere"],
    },
    loveUpright: {
      en: {
        situation:
          "Stability and security are present in your love life. A strong, protective energy surrounds your relationships.",
        future: "Long-term commitment and stable partnerships are indicated.",
        advice: "Provide structure and security in your relationships. Be a pillar of strength for your partner.",
      },
      zh: {
        situation: "你的爱情生活中存在稳定和安全感。一股强大、保护性的能量围绕着你的关系。",
        future: "预示着长期承诺和稳定的伙伴关系。",
        advice: "在你的关系中提供结构和安全感。成为你伴侣的力量支柱。",
      },
      ro: {
        situation:
          "Stabilitatea și securitatea sunt prezente în viața ta amoroasă. O energie puternică și protectoare înconjoară relațiile tale.",
        future: "Sunt indicate angajamente pe termen lung și parteneriate stabile.",
        advice: "Oferă structură și securitate în relațiile tale. Fii un pilon de forță pentru partenerul tău.",
      },
    },
    loveReversed: {
      en: {
        situation: "Control issues or rigidity may be affecting your relationship. Balance power dynamics.",
        future: "Without flexibility, relationships may become stifling.",
        advice: "Soften your approach. True strength in love comes from vulnerability, not control.",
      },
      zh: {
        situation: "控制问题或僵化可能正在影响你的关系。平衡权力动态。",
        future: "没有灵活性，关系可能变得令人窒息。",
        advice: "软化你的方式。爱中真正的力量来自脆弱，而不是控制。",
      },
      ro: {
        situation: "Problemele de control sau rigiditatea ar putea afecta relația ta. Echilibrează dinamica puterii.",
        future: "Fără flexibilitate, relațiile ar putea deveni sufocante.",
        advice: "Înmoaie-ți abordarea. Adevărata putere în dragoste vine din vulnerabilitate, nu din control.",
      },
    },
    quote: {
      en: "True strength in love is found in gentle protection.",
      zh: "爱中真正的力量在于温柔的保护。",
      ro: "Adevărata putere în dragoste se găsește în protecția blândă.",
    },
  },
  {
    id: 5,
    name: { en: "The Hierophant", zh: "教皇", ro: "Hierofantul" },
    keywords: {
      en: ["Tradition", "Commitment", "Spiritual Union", "Conformity", "Guidance"],
      zh: ["传统", "承诺", "精神结合", "遵从", "指导"],
      ro: ["Tradiție", "Angajament", "Uniune Spirituală", "Conformitate", "Îndrumare"],
    },
    loveUpright: {
      en: {
        situation:
          "Traditional values and commitment are highlighted. This may indicate marriage or deepening spiritual connection.",
        future: "A conventional path in love awaits. Consider traditional milestones.",
        advice: "Honor shared values and traditions. Seek guidance from trusted mentors about love.",
      },
      zh: {
        situation: "传统价值观和承诺被强调。这可能表示婚姻或加深的精神联系。",
        future: "爱情中传统的道路在等待。考虑传统的里程碑。",
        advice: "尊重共同的价值观和传统。向信任的导师寻求关于爱的指导。",
      },
      ro: {
        situation:
          "Valorile tradiționale și angajamentul sunt evidențiate. Aceasta poate indica căsătoria sau aprofundarea conexiunii spirituale.",
        future: "O cale convențională în dragoste te așteaptă. Ia în considerare etapele tradiționale.",
        advice: "Onorează valorile și tradițiile comune. Caută îndrumarea mentorilor de încredere despre dragoste.",
      },
    },
    loveReversed: {
      en: {
        situation: "You may be questioning traditional relationship structures or feeling restricted by conventions.",
        future: "Non-traditional paths may suit you better. Follow your own heart.",
        advice: "Don't force yourself into conventional molds. Create your own relationship rules.",
      },
      zh: {
        situation: "你可能在质疑传统的关系结构，或感到被惯例所限制。",
        future: "非传统的道路可能更适合你。跟随你自己的心。",
        advice: "不要强迫自己进入传统模式。创造你自己的关系规则。",
      },
      ro: {
        situation:
          "S-ar putea să pui sub semnul întrebării structurile relaționale tradiționale sau să te simți restricționat de convenții.",
        future: "Căile netradiționale ți-ar putea conveni mai bine. Urmează-ți propria inimă.",
        advice: "Nu te forța în tipare convenționale. Creează-ți propriile reguli de relație.",
      },
    },
    quote: {
      en: "Sacred bonds are built on shared values and mutual respect.",
      zh: "神圣的纽带建立在共同的价值观和相互尊重之上。",
      ro: "Legăturile sacre sunt construite pe valori comune și respect reciproc.",
    },
  },
  {
    id: 6,
    name: { en: "The Lovers", zh: "恋人", ro: "Îndrăgostiții" },
    keywords: {
      en: ["Soul Connection", "Harmony", "Choice", "Deep Bond", "Union"],
      zh: ["灵魂连接", "和谐", "选择", "深层纽带", "结合"],
      ro: ["Conexiune Sufletească", "Armonie", "Alegere", "Legătură Profundă", "Uniune"],
    },
    loveUpright: {
      en: {
        situation:
          "A profound romantic connection is present or approaching. This is about soul-deep love and meaningful choice.",
        future: "True love and harmony await. A significant relationship decision may arise.",
        advice: "Follow your heart while honoring your values. This is a time for authentic connection.",
      },
      zh: {
        situation: "一个深刻的浪漫连接正在存在或接近。这是关于灵魂深处的爱和有意义的选择。",
        future: "真爱和和谐在等待。一个重要的关系决定可能会出现。",
        advice: "跟随你的心，同时尊重你的价值观。这是真诚连接的时刻。",
      },
      ro: {
        situation:
          "O conexiune romantică profundă este prezentă sau se apropie. Este vorba despre dragoste profundă și alegere semnificativă.",
        future: "Dragostea adevărată și armonia te așteaptă. O decizie semnificativă de relație poate apărea.",
        advice: "Urmează-ți inima în timp ce îți onorezi valorile. Aceasta este o perioadă pentru conexiune autentică.",
      },
    },
    loveReversed: {
      en: {
        situation: "Disharmony or difficult choices are affecting your love life. Values may be misaligned.",
        future: "Without addressing conflicts, the relationship may struggle.",
        advice: "Examine what you truly want. Make choices aligned with your authentic self.",
      },
      zh: {
        situation: "不和谐或艰难的选择正在影响你的爱情生活。价值观可能不一致。",
        future: "如果不解决冲突，关系可能会挣扎。",
        advice: "审视你真正想要的。做出与你真实自我一致的选择。",
      },
      ro: {
        situation: "Dezarmonia sau alegerile dificile îți afectează viața amoroasă. Valorile pot fi nealiniate.",
        future: "Fără a aborda conflictele, relația ar putea avea dificultăți.",
        advice: "Examinează ce îți dorești cu adevărat. Fă alegeri aliniate cu sinele tău autentic.",
      },
    },
    quote: {
      en: "Love is the bridge between two souls seeking to become one light.",
      zh: "爱是两个寻求成为一束光的灵魂之间的桥梁。",
      ro: "Dragostea este podul dintre două suflete care caută să devină o singură lumină.",
    },
  },
  {
    id: 7,
    name: { en: "The Chariot", zh: "战车", ro: "Carul" },
    keywords: {
      en: ["Determination", "Victory", "Willpower", "Direction", "Triumph"],
      zh: ["决心", "胜利", "意志力", "方向", "凯旋"],
      ro: ["Determinare", "Victorie", "Voință", "Direcție", "Triumf"],
    },
    loveUpright: {
      en: {
        situation:
          "You're taking charge of your love life with determination. Progress is being made through focused effort.",
        future: "Success in love through perseverance. Obstacles will be overcome.",
        advice: "Stay focused on your romantic goals. Your determination will lead to victory in love.",
      },
      zh: {
        situation: "你正以决心掌控你的爱情生活。通过专注的努力正在取得进展。",
        future: "通过坚持在爱情中取得成功。障碍将被克服。",
        advice: "专注于你的浪漫目标。你的决心将在爱情中带来胜利。",
      },
      ro: {
        situation: "Preiei controlul vieții tale amoroase cu determinare. Se face progres prin efort concentrat.",
        future: "Succes în dragoste prin perseverență. Obstacolele vor fi depășite.",
        advice: "Rămâi concentrat pe obiectivele tale romantice. Determinarea ta va duce la victorie în dragoste.",
      },
    },
    loveReversed: {
      en: {
        situation: "You may be forcing outcomes or feeling out of control in your love life.",
        future: "Without balance, relationships may feel like battles.",
        advice: "Release the need to control everything. Sometimes love requires surrender.",
      },
      zh: {
        situation: "你可能在强求结果，或在爱情生活中感到失控。",
        future: "没有平衡，关系可能感觉像战斗。",
        advice: "放下控制一切的需要。有时爱需要投降。",
      },
      ro: {
        situation: "S-ar putea să forțezi rezultatele sau să te simți scăpat de sub control în viața ta amoroasă.",
        future: "Fără echilibru, relațiile pot părea bătălii.",
        advice: "Renunță la nevoia de a controla totul. Uneori dragostea necesită capitulare.",
      },
    },
    quote: {
      en: "Love conquers all when guided by a determined heart.",
      zh: "当被坚定的心引导时，爱能征服一切。",
      ro: "Dragostea învinge totul când este ghidată de o inimă hotărâtă.",
    },
  },
  {
    id: 8,
    name: { en: "Strength", zh: "力量", ro: "Forța" },
    keywords: {
      en: ["Inner Strength", "Courage", "Patience", "Compassion", "Gentle Power"],
      zh: ["内在力量", "勇气", "耐心", "同情", "温柔力量"],
      ro: ["Forță Interioară", "Curaj", "Răbdare", "Compasiune", "Putere Blândă"],
    },
    loveUpright: {
      en: {
        situation: "You're approaching love with courage and gentle strength. Patience and compassion are your allies.",
        future: "Through gentle persistence, love will flourish. Inner strength attracts authentic connection.",
        advice: "Lead with compassion, not force. Your gentle strength is your greatest romantic asset.",
      },
      zh: {
        situation: "你正以勇气和温柔的力量面对爱情。耐心和同情是你的盟友。",
        future: "通过温柔的坚持，爱将蓬勃发展。内在力量吸引真诚的连接。",
        advice: "以同情心引领，而非武力。你温柔的力量是你最大的浪漫资产。",
      },
      ro: {
        situation: "Abordezi dragostea cu curaj și forță blândă. Răbdarea și compasiunea sunt aliații tăi.",
        future: "Prin persistență blândă, dragostea va înflori. Forța interioară atrage conexiuni autentice.",
        advice: "Conduce cu compasiune, nu cu forță. Forța ta blândă este cel mai mare atu romantic.",
      },
    },
    loveReversed: {
      en: {
        situation: "Self-doubt or excessive force may be affecting your relationships.",
        future: "Without self-compassion, love may feel exhausting.",
        advice: "Be gentle with yourself first. True strength comes from self-love.",
      },
      zh: {
        situation: "自我怀疑或过度用力可能正在影响你的关系。",
        future: "没有自我同情，爱可能感觉令人疲惫。",
        advice: "首先对自己温柔。真正的力量来自自爱。",
      },
      ro: {
        situation: "Îndoiala de sine sau forța excesivă ar putea afecta relațiile tale.",
        future: "Fără auto-compasiune, dragostea poate părea epuizantă.",
        advice: "Fii blând cu tine mai întâi. Adevărata forță vine din iubirea de sine.",
      },
    },
    quote: {
      en: "The strongest love is gentle, patient, and kind.",
      zh: "最强大的爱是温柔的、耐心的、善良的。",
      ro: "Cea mai puternică dragoste este blândă, răbdătoare și bună.",
    },
  },
  {
    id: 9,
    name: { en: "The Hermit", zh: "隐士", ro: "Ermitul" },
    keywords: {
      en: ["Introspection", "Solitude", "Inner Guidance", "Wisdom", "Soul-Searching"],
      zh: ["内省", "独处", "内在指导", "智慧", "灵魂探索"],
      ro: ["Introspecție", "Solitudine", "Îndrumare Interioară", "Înțelepciune", "Căutare Sufletească"],
    },
    loveUpright: {
      en: {
        situation: "A period of reflection on love is needed. Take time for inner exploration before moving forward.",
        future: "Wisdom gained through solitude will benefit your future relationships.",
        advice: "Take time alone to understand what you truly want in love. The answers are within.",
      },
      zh: {
        situation: "需要一段对爱的反思时期。在前进之前花时间进行内在探索。",
        future: "通过独处获得的智慧将有利于你未来的关系。",
        advice: "花时间独处，了解你在爱情中真正想要什么。答案就在内心。",
      },
      ro: {
        situation:
          "Este necesară o perioadă de reflecție asupra dragostei. Ia-ți timp pentru explorare interioară înainte de a merge mai departe.",
        future: "Înțelepciunea câștigată prin solitudine va beneficia relațiilor tale viitoare.",
        advice:
          "Ia-ți timp singur pentru a înțelege ce îți dorești cu adevărat în dragoste. Răspunsurile sunt înăuntru.",
      },
    },
    loveReversed: {
      en: {
        situation: "Isolation or avoidance may be affecting your love life. Don't retreat too far.",
        future: "Prolonged isolation could lead to loneliness.",
        advice: "Balance reflection with connection. Don't use solitude as an escape from intimacy.",
      },
      zh: {
        situation: "孤立或回避可能正在影响你的爱情生活。不要退缩太远。",
        future: "长期的孤立可能导致孤独。",
        advice: "平衡反思与连接。不要用独处作为逃避亲密的借口。",
      },
      ro: {
        situation: "Izolarea sau evitarea ar putea afecta viața ta amoroasă. Nu te retrage prea departe.",
        future: "Izolarea prelungită ar putea duce la singurătate.",
        advice: "Echilibrează reflecția cu conexiunea. Nu folosi solitudinea ca evadare din intimitate.",
      },
    },
    quote: {
      en: "In stillness, we discover what our hearts truly seek.",
      zh: "在静默中，我们发现心灵真正寻求的是什么。",
      ro: "În liniște, descoperim ce caută cu adevărat inimile noastre.",
    },
  },
  {
    id: 10,
    name: { en: "Wheel of Fortune", zh: "命运之轮", ro: "Roata Norocului" },
    keywords: {
      en: ["Destiny", "Cycles", "Change", "Fate", "Turning Point"],
      zh: ["命运", "循环", "改变", "宿命", "转折点"],
      ro: ["Destin", "Cicluri", "Schimbare", "Soartă", "Punct de Cotitură"],
    },
    loveUpright: {
      en: {
        situation:
          "A turning point in love is approaching. Fate is at work, bringing unexpected romantic developments.",
        future: "Positive changes are coming. Trust the cycles of love.",
        advice: "Embrace change in your love life. What's meant for you will find you.",
      },
      zh: {
        situation: "爱情的转折点正在接近。命运正在运作，带来意想不到的浪漫发展。",
        future: "积极的变化即将到来。相信爱的循环。",
        advice: "拥抱你爱情生活中的改变。属于你的会找到你。",
      },
      ro: {
        situation:
          "Se apropie un punct de cotitură în dragoste. Destinul lucrează, aducând dezvoltări romantice neașteptate.",
        future: "Schimbări pozitive sunt pe drum. Ai încredere în ciclurile dragostei.",
        advice: "Îmbrățișează schimbarea în viața ta amoroasă. Ce-ți este menit te va găsi.",
      },
    },
    loveReversed: {
      en: {
        situation: "You may be resisting necessary changes or experiencing delays in love.",
        future: "Fighting fate will only create frustration.",
        advice: "Accept what you cannot control. Trust that the wheel turns for everyone.",
      },
      zh: {
        situation: "你可能在抵抗必要的改变，或在爱情中经历延迟。",
        future: "与命运抗争只会创造挫折。",
        advice: "接受你无法控制的。相信轮子为每个人转动。",
      },
      ro: {
        situation: "S-ar putea să te opui schimbărilor necesare sau să experimentezi întârzieri în dragoste.",
        future: "Lupta cu destinul va crea doar frustrare.",
        advice: "Acceptă ce nu poți controla. Ai încredere că roata se întoarce pentru toată lumea.",
      },
    },
    quote: {
      en: "Every ending in love is but a new beginning in disguise.",
      zh: "爱情中的每一个结束都只是伪装的新开始。",
      ro: "Fiecare sfârșit în dragoste este doar un nou început deghizat.",
    },
  },
  {
    id: 11,
    name: { en: "Justice", zh: "正义", ro: "Dreptatea" },
    keywords: {
      en: ["Balance", "Fairness", "Truth", "Karma", "Accountability"],
      zh: ["平衡", "公正", "真相", "因果", "责任"],
      ro: ["Echilibru", "Corectitudine", "Adevăr", "Karma", "Responsabilitate"],
    },
    loveUpright: {
      en: {
        situation: "Fairness and balance are important in your current love situation. Truth is being revealed.",
        future: "Karma is at work. Fair outcomes await honest hearts.",
        advice: "Be honest and fair in love. What you give is what you'll receive.",
      },
      zh: {
        situation: "公平和平衡在你当前的爱情状况中很重要。真相正在被揭示。",
        future: "因果正在运作。诚实的心等待公平的结果。",
        advice: "在爱中保持诚实和公平。你付出什么就会收到什么。",
      },
      ro: {
        situation:
          "Corectitudinea și echilibrul sunt importante în situația ta actuală de dragoste. Adevărul este dezvăluit.",
        future: "Rezultate corecte așteaptă inimile sincere.",
        advice: "Fii sincer și corect în dragoste. Ceea ce dai este ceea ce vei primi.",
      },
    },
    loveReversed: {
      en: {
        situation: "Imbalance or dishonesty may be affecting your relationship.",
        future: "Without truth, relationships cannot thrive.",
        advice: "Examine any unfairness in your relationship. Seek balance and honesty.",
      },
      zh: {
        situation: "不平衡或不诚实可能正在影响你的关系。",
        future: "没有真相，关系无法茁壮成长。",
        advice: "审视你关系中的任何不公平。寻求平衡和诚实。",
      },
      ro: {
        situation: "Dezechilibrul sau necinste ar putea afecta relația ta.",
        future: "Fără adevăr, relațiile nu pot prospera.",
        advice: "Examinează orice nedreptate din relația ta. Caută echilibru și onestitate.",
      },
    },
    quote: {
      en: "True love is built on the foundation of truth and fairness.",
      zh: "真爱建立在真相和公平的基础上。",
      ro: "Dragostea adevărată este construită pe fundația adevărului și corectitudinii.",
    },
  },
  {
    id: 12,
    name: { en: "The Hanged Man", zh: "倒吊人", ro: "Spânzuratul" },
    keywords: {
      en: ["Surrender", "New Perspective", "Letting Go", "Pause", "Sacrifice"],
      zh: ["臣服", "新视角", "放手", "暂停", "牺牲"],
      ro: ["Capitulare", "Perspectivă Nouă", "Eliberare", "Pauză", "Sacrificiu"],
    },
    loveUpright: {
      en: {
        situation: "A pause or shift in perspective is needed in love. Surrender to what is.",
        future: "By letting go of expectations, new possibilities emerge.",
        advice: "See your love situation from a different angle. Sometimes doing nothing is the wisest action.",
      },
      zh: {
        situation: "在爱情中需要暂停或视角转换。接受现状。",
        future: "通过放下期望，新的可能性会出现。",
        advice: "从不同角度看待你的爱情状况。有时候什么都不做是最明智的行动。",
      },
      ro: {
        situation: "Este necesară o pauză sau o schimbare de perspectivă în dragoste. Capitulează la ceea ce este.",
        future: "Renunțând la așteptări, apar noi posibilități.",
        advice:
          "Privește situația ta amoroasă dintr-un unghi diferit. Uneori a nu face nimic este cea mai înțeleaptă acțiune.",
      },
    },
    loveReversed: {
      en: {
        situation: "Resistance to necessary change or unwillingness to see things differently.",
        future: "Stubbornness will only prolong discomfort.",
        advice: "Stop fighting what cannot be changed. Embrace a new perspective.",
      },
      zh: {
        situation: "抵抗必要的改变或不愿意以不同的方式看待事物。",
        future: "固执只会延长不适。",
        advice: "停止与无法改变的事情抗争。拥抱新的视角。",
      },
      ro: {
        situation: "Rezistență la schimbarea necesară sau refuzul de a vedea lucrurile diferit.",
        future: "Încăpățânarea va prelungi doar disconfortul.",
        advice: "Oprește-te din a lupta cu ce nu poate fi schimbat. Îmbrățișează o nouă perspectivă.",
      },
    },
    quote: {
      en: "Sometimes love asks us to release our grip to truly receive.",
      zh: "有时爱要求我们放开紧握才能真正接收。",
      ro: "Uneori dragostea ne cere să eliberăm strânsoarea pentru a primi cu adevărat.",
    },
  },
  {
    id: 13,
    name: { en: "Death", zh: "死神", ro: "Moartea" },
    keywords: {
      en: ["Transformation", "Endings", "New Beginnings", "Release", "Transition"],
      zh: ["转变", "结束", "新开始", "释放", "过渡"],
      ro: ["Transformare", "Sfârșitul", "Începuturi Noi", "Eliberare", "Tranziție"],
    },
    loveUpright: {
      en: {
        situation:
          "A significant transformation in your love life is occurring. Something old must end for new love to begin.",
        future: "After this transition, renewed and deeper love awaits.",
        advice: "Embrace the ending as a necessary part of growth. Let go of what no longer serves your heart.",
      },
      zh: {
        situation: "你的爱情生活正在发生重大转变。旧的必须结束，新的爱才能开始。",
        future: "在这次过渡之后，更新和更深的爱在等待。",
        advice: "接受结束是成长的必要部分。放下不再服务于你心灵的东西。",
      },
      ro: {
        situation:
          "O transformare semnificativă în viața ta amoroasă are loc. Ceva vechi trebuie să se termine pentru ca noua dragoste să înceapă.",
        future: "După această tranziție, te așteaptă o dragoste reînnoită și mai profundă.",
        advice: "Îmbrățișează sfârșitul ca parte necesară a creșterii. Lasă să plece ce nu mai servește inimii tale.",
      },
    },
    loveReversed: {
      en: {
        situation: "Resistance to necessary endings is causing stagnation.",
        future: "Without release, new love cannot enter.",
        advice: "Stop clinging to what has already ended. Transformation awaits your acceptance.",
      },
      zh: {
        situation: "对必要结束的抵抗正在造成停滞。",
        future: "没有释放，新的爱无法进入。",
        advice: "停止执着于已经结束的事情。转变等待你的接受。",
      },
      ro: {
        situation: "Rezistența la sfârșiturile necesare cauzează stagnare.",
        future: "Fără eliberare, noua dragoste nu poate intra.",
        advice: "Oprește-te din a te agăța de ce s-a terminat deja. Transformarea așteaptă acceptarea ta.",
      },
    },
    quote: {
      en: "In love, every ending carries the seed of a beautiful new beginning.",
      zh: "在爱中，每一个结束都携带着美丽新开始的种子。",
      ro: "În dragoste, fiecare sfârșit poartă sămânța unui frumos nou început.",
    },
  },
  {
    id: 14,
    name: { en: "Temperance", zh: "节制", ro: "Cumpătarea" },
    keywords: {
      en: ["Balance", "Moderation", "Patience", "Harmony", "Healing"],
      zh: ["平衡", "节制", "耐心", "和谐", "疗愈"],
      ro: ["Echilibru", "Moderație", "Răbdare", "Armonie", "Vindecare"],
    },
    loveUpright: {
      en: {
        situation: "Balance and harmony are being restored in your love life. Patience is bringing rewards.",
        future: "Healing and harmonious love await. Take the middle path.",
        advice: "Practice patience and moderation in love. Balance giving and receiving.",
      },
      zh: {
        situation: "你的爱情生活中正在恢复平衡与和谐。耐心正在带来回报。",
        future: "疗愈和和谐的爱在等待。走中间道路。",
        advice: "在爱中练习耐心和节制。平衡给予和接受。",
      },
      ro: {
        situation: "Echilibrul și armonia sunt restaurate în viața ta amoroasă. Răbdarea aduce recompense.",
        future: "Vindecarea și dragostea armonioasă te așteaptă. Ia calea de mijloc.",
        advice: "Practică răbdarea și moderația în dragoste. Echilibrează dăruirea și primirea.",
      },
    },
    loveReversed: {
      en: {
        situation: "Imbalance or extremes are affecting your relationship.",
        future: "Without moderation, relationships become unstable.",
        advice: "Find your center. Avoid extremes in your romantic expressions.",
      },
      zh: {
        situation: "不平衡或极端正在影响你的关系。",
        future: "没有节制，关系会变得不稳定。",
        advice: "找到你的中心。避免浪漫表达中的极端。",
      },
      ro: {
        situation: "Dezechilibrul sau extremele îți afectează relația.",
        future: "Fără moderație, relațiile devin instabile.",
        advice: "Găsește-ți centrul. Evită extremele în expresiile tale romantice.",
      },
    },
    quote: {
      en: "Love flows best when balanced between passion and peace.",
      zh: "当在激情与平静之间取得平衡时，爱流动得最好。",
      ro: "Dragostea curge cel mai bine când este echilibrată între pasiune și pace.",
    },
  },
  {
    id: 15,
    name: { en: "The Devil", zh: "恶魔", ro: "Diavolul" },
    keywords: {
      en: ["Attachment", "Temptation", "Shadow Self", "Bondage", "Materialism"],
      zh: ["执着", "诱惑", "阴影自我", "束缚", "物质主义"],
      ro: ["Atașament", "Tentație", "Sinele Umbră", "Sclavie", "Materialism"],
    },
    loveUpright: {
      en: {
        situation: "Unhealthy attachments or temptations may be affecting your love life. Examine what binds you.",
        future: "Without awareness, patterns may repeat.",
        advice: "Recognize any unhealthy dynamics. You have the power to break free from limiting patterns.",
      },
      zh: {
        situation: "不健康的依附或诱惑可能正在影响你的爱情生活。审视什么在束缚你。",
        future: "没有意识，模式可能会重复。",
        advice: "认识到任何不健康的动态。你有能力从限制性模式中解脱出来。",
      },
      ro: {
        situation: "Atașamentele nesănătoase sau tentațiile ar putea afecta viața ta amoroasă. Examinează ce te leagă.",
        future: "Fără conștientizare, tiparele se pot repeta.",
        advice: "Recunoaște orice dinamici nesănătoase. Ai puterea de a te elibera din tiparele limitante.",
      },
    },
    loveReversed: {
      en: {
        situation: "You're breaking free from unhealthy relationship patterns.",
        future: "Liberation from old bonds is occurring.",
        advice: "Continue releasing what no longer serves you. Freedom awaits.",
      },
      zh: {
        situation: "你正在从不健康的关系模式中解脱出来。",
        future: "从旧束缚中解放正在发生。",
        advice: "继续释放不再服务于你的东西。自由在等待。",
      },
      ro: {
        situation: "Te eliberezi din tiparele de relație nesănătoase.",
        future: "Are loc eliberarea din vechile legături.",
        advice: "Continuă să eliberezi ce nu te mai servește. Libertatea te așteaptă.",
      },
    },
    quote: {
      en: "True love liberates; it never imprisons the soul.",
      zh: "真爱解放；它从不囚禁灵魂。",
      ro: "Dragostea adevărată eliberează; nu închide niciodată sufletul.",
    },
  },
  {
    id: 16,
    name: { en: "The Tower", zh: "塔", ro: "Turnul" },
    keywords: {
      en: ["Sudden Change", "Revelation", "Awakening", "Upheaval", "Liberation"],
      zh: ["突变", "启示", "觉醒", "剧变", "解放"],
      ro: ["Schimbare Bruscă", "Revelație", "Trezire", "Răsturnare", "Eliberare"],
    },
    loveUpright: {
      en: {
        situation: "A sudden revelation or upheaval is shaking your love life. What seemed stable is being challenged.",
        future: "After the dust settles, clarity and authentic connection await.",
        advice: "Let false structures fall. Only what's truly meant for you will remain.",
      },
      zh: {
        situation: "一个突然的启示或剧变正在动摇你的爱情生活。看似稳定的东西正在受到挑战。",
        future: "尘埃落定后，清晰和真诚的连接在等待。",
        advice: "让虚假的结构倒塌。只有真正属于你的才会留下。",
      },
      ro: {
        situation: "O revelație bruscă sau o răsturnare îți zguduie viața amoroasă. Ce părea stabil este provocat.",
        future: "După ce praful se așază, te așteaptă claritate și conexiune autentică.",
        advice: "Lasă structurile false să cadă. Doar ce-ți este cu adevărat menit va rămâne.",
      },
    },
    loveReversed: {
      en: {
        situation: "You're resisting necessary changes or avoiding inevitable revelations.",
        future: "Delayed change often comes more forcefully later.",
        advice: "Don't cling to what's already crumbling. Embrace the transformation.",
      },
      zh: {
        situation: "你在抵抗必要的改变或回避不可避免的启示。",
        future: "延迟的改变往往之后会来得更猛烈。",
        advice: "不要执着于已经崩塌的东西。拥抱转变。",
      },
      ro: {
        situation: "Te opui schimbărilor necesare sau eviți revelațiile inevitabile.",
        future: "Schimbarea întârziată vine adesea mai forțat mai târziu.",
        advice: "Nu te agăța de ce deja se prăbușește. Îmbrățișează transformarea.",
      },
    },
    quote: {
      en: "From love's ashes, the phoenix of true connection rises.",
      zh: "从爱的灰烬中，真正连接的凤凰升起。",
      ro: "Din cenușa dragostei, se ridică phoenixul conexiunii adevărate.",
    },
  },
  {
    id: 17,
    name: { en: "The Star", zh: "星星", ro: "Steaua" },
    keywords: {
      en: ["Hope", "Inspiration", "Renewal", "Serenity", "Faith"],
      zh: ["希望", "灵感", "更新", "宁静", "信念"],
      ro: ["Speranță", "Inspirație", "Reînnoire", "Serenitate", "Credință"],
    },
    loveUpright: {
      en: {
        situation: "Hope and healing are entering your love life. A period of renewal and optimism surrounds you.",
        future: "Beautiful, inspiring love awaits. Keep faith in your romantic dreams.",
        advice: "Stay hopeful and open. The universe is aligning to bring you the love you deserve.",
      },
      zh: {
        situation: "希望和疗愈正在进入你的爱情生活。一段更新和乐观的时期围绕着你。",
        future: "美丽、鼓舞人心的爱在等待。对你的浪漫梦想保持信念。",
        advice: "保持希望和开放。宇宙正在对齐，为你带来你应得的爱。",
      },
      ro: {
        situation:
          "Speranța și vindecarea intră în viața ta amoroasă. O perioadă de reînnoire și optimism te înconjoară.",
        future: "Te așteaptă o dragoste frumoasă și inspirată. Păstrează-ți credința în visele tale romantice.",
        advice: "Rămâi optimist și deschis. Universul se aliniază pentru a-ți aduce dragostea pe care o meriți.",
      },
    },
    loveReversed: {
      en: {
        situation: "Hopelessness or disconnection from your dreams may be affecting your love life.",
        future: "Without hope, love struggles to flourish.",
        advice: "Reconnect with your inner light. Don't lose faith in love.",
      },
      zh: {
        situation: "绝望或与你的梦想脱节可能正在影响你的爱情生活。",
        future: "没有希望，爱难以蓬勃发展。",
        advice: "重新连接你的内在之光。不要对爱失去信念。",
      },
      ro: {
        situation: "Lipsa de speranță sau deconectarea de visele tale ar putea afecta viața ta amoroasă.",
        future: "Fără speranță, dragostea se luptă să înflorească.",
        advice: "Reconectează-te cu lumina ta interioară. Nu-ți pierde credința în dragoste.",
      },
    },
    quote: {
      en: "Love is the star that guides us through the darkest nights.",
      zh: "爱是引导我们穿越最黑暗夜晚的星星。",
      ro: "Dragostea este steaua care ne ghidează prin cele mai întunecate nopți.",
    },
  },
  {
    id: 18,
    name: { en: "The Moon", zh: "月亮", ro: "Luna" },
    keywords: {
      en: ["Intuition", "Illusion", "Mystery", "Subconscious", "Dreams"],
      zh: ["直觉", "幻觉", "神秘", "潜意识", "梦境"],
      ro: ["Intuiție", "Iluzie", "Mister", "Subconștient", "Vise"],
    },
    loveUpright: {
      en: {
        situation: "Not everything in your love life is as it seems. Trust your intuition to navigate uncertainties.",
        future: "Hidden truths will surface. Let your inner knowing guide you.",
        advice: "Pay attention to your dreams and gut feelings. Something may be hidden beneath the surface.",
      },
      zh: {
        situation: "你爱情生活中的一切并非如表面所见。相信你的直觉来驾驭不确定性。",
        future: "隐藏的真相将浮出水面。让你的内在认知指引你。",
        advice: "注意你的梦境和直觉。表面之下可能隐藏着什么。",
      },
      ro: {
        situation:
          "Nu totul în viața ta amoroasă este așa cum pare. Ai încredere în intuiția ta pentru a naviga incertitudinile.",
        future: "Adevărurile ascunse vor ieși la suprafață. Lasă cunoașterea ta interioară să te ghideze.",
        advice: "Acordă atenție viselor și instinctelor tale. Ceva poate fi ascuns sub suprafață.",
      },
    },
    loveReversed: {
      en: {
        situation: "Confusion is clearing. Illusions in love are being dispelled.",
        future: "Clarity is coming after a period of uncertainty.",
        advice: "Trust that the fog is lifting. Truth in love is being revealed.",
      },
      zh: {
        situation: "困惑正在消散。爱情中的幻觉正在被驱散。",
        future: "在一段不确定性之后，清晰正在到来。",
        advice: "相信迷雾正在散去。爱中的真相正在被揭示。",
      },
      ro: {
        situation: "Confuzia se limpezește. Iluziile în dragoste sunt risipite.",
        future: "Claritatea vine după o perioadă de incertitudine.",
        advice: "Ai încredere că ceața se ridică. Adevărul în dragoste este revelat.",
      },
    },
    quote: {
      en: "In love's shadows, intuition lights the path to truth.",
      zh: "在爱的阴影中，直觉照亮了通往真相的道路。",
      ro: "În umbrele dragostei, intuiția luminează calea către adevăr.",
    },
  },
  {
    id: 19,
    name: { en: "The Sun", zh: "太阳", ro: "Soarele" },
    keywords: {
      en: ["Joy", "Success", "Vitality", "Positivity", "Celebration"],
      zh: ["喜悦", "成功", "活力", "积极", "庆祝"],
      ro: ["Bucurie", "Succes", "Vitalitate", "Pozitivitate", "Celebrare"],
    },
    loveUpright: {
      en: {
        situation: "Joy and happiness radiate through your love life. This is a time of celebration and warmth.",
        future: "Bright, joyful love awaits. Success in romantic endeavors is indicated.",
        advice: "Embrace the happiness available to you. Let your love shine brightly without reservation.",
      },
      zh: {
        situation: "喜悦和幸福在你的爱情生活中散发光芒。这是一个庆祝和温暖的时刻。",
        future: "明亮、快乐的爱在等待。浪漫努力的成功被预示。",
        advice: "拥抱你可获得的幸福。毫无保留地让你的爱闪耀。",
      },
      ro: {
        situation:
          "Bucuria și fericirea radiază prin viața ta amoroasă. Aceasta este o perioadă de celebrare și căldură.",
        future: "Te așteaptă o dragoste luminoasă și veselă. Se indică succes în demersurile romantice.",
        advice: "Îmbrățișează fericirea disponibilă ție. Lasă-ți dragostea să strălucească puternic fără rezerve.",
      },
    },
    loveReversed: {
      en: {
        situation: "Temporary clouds may be dimming your romantic happiness.",
        future: "The sun will return. This is just a passing shadow.",
        advice: "Don't lose sight of the joy available to you. Seek the light within.",
      },
      zh: {
        situation: "暂时的乌云可能正在遮蔽你的浪漫幸福。",
        future: "太阳会回来。这只是一个过眼云烟。",
        advice: "不要忘记你可获得的喜悦。寻找内在的光明。",
      },
      ro: {
        situation: "Nori temporari ar putea diminua fericirea ta romantică.",
        future: "Soarele va reveni. Aceasta este doar o umbră trecătoare.",
        advice: "Nu pierde din vedere bucuria disponibilă ție. Caută lumina din interior.",
      },
    },
    quote: {
      en: "In love's light, every heart can bloom and shine.",
      zh: "在爱的光芒中，每颗心都能绽放和闪耀。",
      ro: "În lumina dragostei, fiecare inimă poate înflori și străluci.",
    },
  },
  {
    id: 20,
    name: { en: "Judgement", zh: "审判", ro: "Judecata" },
    keywords: {
      en: ["Rebirth", "Reflection", "Awakening", "Calling", "Renewal"],
      zh: ["重生", "反思", "觉醒", "召唤", "更新"],
      ro: ["Renaștere", "Reflecție", "Trezire", "Chemare", "Reînnoire"],
    },
    loveUpright: {
      en: {
        situation: "A major awakening in your love life is occurring. Past patterns are being evaluated for renewal.",
        future: "A significant turning point approaches. Old relationship karma is being resolved.",
        advice: "Reflect on past relationship patterns. This is your chance for a fresh start in love.",
      },
      zh: {
        situation: "你爱情生活中正在发生重大觉醒。过去的模式正在被评估以进行更新。",
        future: "重大转折点临近。旧的关系业力正在被化解。",
        advice: "反思过去的关系模式。这是你在爱情中重新开始的机会。",
      },
      ro: {
        situation: "O trezire majoră în viața ta amoroasă are loc. Tiparele din trecut sunt evaluate pentru reînnoire.",
        future: "Un punct de cotitură semnificativ se apropie. Karma veche a relației este rezolvată.",
        advice:
          "Reflectează asupra tiparelor din relațiile trecute. Aceasta este șansa ta pentru un nou început în dragoste.",
      },
    },
    loveReversed: {
      en: {
        situation: "You may be avoiding necessary self-reflection about love patterns.",
        future: "Healing is delayed until you're ready to face past lessons.",
        advice: "Don't ignore the call to examine your heart. Closure is needed for renewal.",
      },
      zh: {
        situation: "你可能在逃避关于爱情模式的必要自我反思。",
        future: "治愈被推迟，直到你准备好面对过去的教训。",
        advice: "不要忽视审视你内心的呼唤。更新需要结束。",
      },
      ro: {
        situation: "S-ar putea să eviți auto-reflecția necesară despre tiparele în dragoste.",
        future: "Vindecarea este întârziată până când ești gata să înfrunți lecțiile trecute.",
        advice: "Nu ignora chemarea de a-ți examina inima. Închiderea este necesară pentru reînnoire.",
      },
    },
    quote: {
      en: "In love's awakening, the heart finds its true calling.",
      zh: "在爱的觉醒中，心灵找到了它真正的召唤。",
      ro: "În trezirea dragostei, inima își găsește chemarea adevărată.",
    },
  },
  {
    id: 21,
    name: { en: "The World", zh: "世界", ro: "Lumea" },
    keywords: {
      en: ["Completion", "Fulfillment", "Wholeness", "Achievement", "Integration"],
      zh: ["完成", "满足", "完整", "成就", "整合"],
      ro: ["Completare", "Împlinire", "Întregime", "Realizare", "Integrare"],
    },
    loveUpright: {
      en: {
        situation: "A beautiful sense of completion and fulfillment in love. You've reached a significant milestone.",
        future: "Wholeness and deep satisfaction in love await. A cycle is completing beautifully.",
        advice: "Celebrate how far you've come in love. You've integrated important lessons.",
      },
      zh: {
        situation: "爱情中美丽的完成感和满足感。你已经达到了一个重要的里程碑。",
        future: "爱中的完整和深深的满足在等待。一个周期正在美丽地完成。",
        advice: "庆祝你在爱中走了多远。你已经整合了重要的教训。",
      },
      ro: {
        situation: "Un frumos sentiment de completare și împlinire în dragoste. Ai atins o etapă semnificativă.",
        future: "Te așteaptă întregime și satisfacție profundă în dragoste. Un ciclu se încheie frumos.",
        advice: "Celebrează cât de departe ai ajuns în dragoste. Ai integrat lecții importante.",
      },
    },
    loveReversed: {
      en: {
        situation: "You may feel something is incomplete or lacking in love.",
        future: "Closure is coming, but patience is needed.",
        advice: "Identify what's missing for your sense of wholeness. The final piece is within reach.",
      },
      zh: {
        situation: "你可能感觉爱情中有些不完整或缺失。",
        future: "结束即将到来，但需要耐心。",
        advice: "确定你完整感缺失的是什么。最后一块拼图触手可及。",
      },
      ro: {
        situation: "S-ar putea să simți că ceva este incomplet sau lipsește în dragoste.",
        future: "Închiderea vine, dar este nevoie de răbdare.",
        advice: "Identifică ce lipsește pentru sentimentul tău de întregime. Piesa finală este la îndemână.",
      },
    },
    quote: {
      en: "In love's completion, every journey finds its perfect ending.",
      zh: "在爱的完成中，每一段旅程都找到了完美的结局。",
      ro: "În completarea dragostei, fiecare călătorie își găsește sfârșitul perfect.",
    },
  },
]

// Helper function to get a random subset of cards
export function getRandomCards(count: number): TarotCard[] {
  const shuffled = [...loveDeck].sort(() => Math.random() - 0.5)
  return shuffled.slice(0, count)
}

// Helper function to determine if card is reversed (50% chance)
export function isCardReversed(): boolean {
  return Math.random() > 0.5
}

// Get card by index
export function getCardByIndex(index: number): TarotCard | undefined {
  return loveDeck.find((card) => card.id === index)
}

// Alias for isCardReversed
export function isReversed(): boolean {
  return Math.random() > 0.5
}

// Get card reading based on card and reversed state
export function getCardReading(
  card: TarotCard,
  reversed: boolean,
  locale: "en" | "zh" | "ro" = "en",
): {
  name: string
  keywords: string[]
  situation: string
  future: string
  advice: string
} {
  const reading = reversed ? card.loveReversed[locale] : card.loveUpright[locale]
  return {
    name: card.name[locale],
    keywords: card.keywords[locale],
    ...reading,
  }
}
