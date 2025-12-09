# Love Tarot Sphere

融合AI洞察的现代塔罗体验。

A modern tarot experience enriched with AI insight.

一个沉浸式、仪式感的爱情塔罗占卜 Web 应用，融合赛博魔法美学、3D 动效、神圣几何元素。

An immersive, ritual-style Love Tarot divination web application that combines cyber-magic aesthetics, 3D animations, and sacred geometry elements.

---

## 版本更新记录 | Version History

### v1.5.0 - 2025-12-05
- **音效移除**: 移除了所有背景音效和交互音效，提供更纯净的视觉体验
- **UI 简化**: 移除了声音切换按钮

### v1.4.0 - 2025-12-04
- **阅读结果页面路由**: 选完3张牌后跳转至独立的 `/reading-result` 页面，通过 URL 参数传递卡牌数据和用户问题
- **i18n 修复**: 修复 `StartButton` 和 `RingFormation` 组件中翻译函数 `t` 的错误用法
- **布局优化**: 调整首页卡牌堆、问题输入框、开始按钮的垂直间距，避免元素重叠
- **代码质量**: 修复 TypeScript 类型错误，移除无效代码检查

### v1.3.0 - 2025-12-03
- **国际化系统 (i18n)**: 添加完整的中英文双语支持，使用 React Context 实现语言切换
- **Landing Page**: 全新 SEO 优化首页，包含 Hero、How It Works、FAQ 等区块
- **语言切换器**: 右上角全局语言切换按钮
- **翻译系统**: 完整的翻译接口定义，支持所有 UI 文本的本地化

### v1.2.0 - 2025-12-03
- **开始按钮自适应**: 优化了 "Start Shuffle" 按钮，强制不换行，调整移动端内边距
- **悬浮星盘环阵**: 更新阵列展示为 "Ring Aura Deck"，包含呼吸流动、极慢旋转和多层光晕效果
- **魔法阵响应式优化**: 使用 `vw` 单位和 `max-w` 约束，确保在不同屏幕上完整显示

### v1.1.0 - 2025-12-03
- **修复 Hydration Error**: 重构组件，将随机数生成移至 `useEffect`
- **魔法阵响应式优化**: 使用 `vw` 单位确保完整显示
- **卡牌堆尺寸调整**: 优化视觉比例

---

## 🚀 Gemini Pro API 接入计划 | API Integration Roadmap

> **Status**: ✅ Phase 1-3 Complete | Ready for API Key Configuration

### 架构概览 | Architecture Overview

\`\`\`
┌──────────────────────────────────────────────────────────────┐
│  前端 (用户问题 + 选牌) → POST /api/reading → Gemini Pro    │
│                              ↓                               │
│               AI 生成个性化塔罗解读 → 流式输出到页面         │
└──────────────────────────────────────────────────────────────┘
\`\`\`

### To-Do List

#### Phase 1: 后端 API 搭建 | Backend Setup ✅
- [x] 安装依赖 `@google/generative-ai`
- [x] 配置环境变量模板 `.env.example`
- [x] 创建 API 路由 `app/api/reading/route.ts`
- [x] 设计 Prompt 模板 `lib/gemini/prompts.ts`
- [x] 定义类型接口 `lib/gemini/types.ts`
- [x] 创建 Gemini 客户端 `lib/gemini/client.ts`

#### Phase 2: Prompt 工程 | Prompt Engineering ✅
- [x] 基础角色设定 (专业爱情塔罗师)
- [x] 牌面上下文注入 (牌名、关键词、正逆位)
- [x] 用户问题整合与解读定制
- [x] 多语言输出支持 (en/zh/ro)

#### Phase 3: 前端集成 | Frontend Integration ✅
- [x] 创建 API 调用 Hook `hooks/use-reading.ts`
- [x] AI 解读展示组件 `components/ai-reading.tsx`
- [x] 加载骨架屏动画 `components/reading-skeleton.tsx`
- [x] 集成到 reading-result 页面
- [x] 错误处理与降级方案

#### Phase 4: 优化与测试 | Optimization & Testing
- [ ] 响应缓存 (相同牌组合)
- [ ] Rate Limiting 防滥用
- [ ] API 失败降级到静态解读
- [ ] 端到端测试

### API 接口设计 | API Interface

\`\`\`typescript
// POST /api/reading
// Request
interface ReadingRequest {
  question: string                    // 用户问题
  locale: "en" | "zh" | "ro"          // 语言
  cards: {
    id: number                        // 牌 ID (0-21)
    position: "past" | "present" | "future"
    reversed: boolean                 // 是否逆位
  }[]
}

// Response
interface ReadingResponse {
  success: boolean
  reading: {
    overview: string                  // 整体能量概述
    cards: { position: string; interpretation: string }[]
    synthesis: string                 // 三牌综合解读
    advice: string                    // 行动建议
    affirmation: string               // 每日肯定语
  }
}
\`\`\`

### 新增文件结构 | New File Structure

\`\`\`
app/api/reading/route.ts    # API 路由
lib/gemini/
├── client.ts               # Gemini 客户端
├── prompts.ts              # Prompt 模板
└── types.ts                # 类型定义
hooks/use-reading.ts        # API Hook
components/
├── ai-reading.tsx          # AI 解读组件
└── reading-skeleton.tsx    # 加载骨架屏
\`\`\`

---

## 核心特性 | Core Features

### 1. 国际化系统 | Internationalization (i18n)

#### 支持语言 | Supported Languages
- **English (en)** - 默认语言
- **简体中文 (zh)** - 完整翻译

#### 实现架构 | Implementation Architecture

\`\`\`tsx
// lib/i18n/locales.ts - 语言类型定义
export const locales = ["en", "zh"] as const
export type Locale = (typeof locales)[number]
export const defaultLocale: Locale = "en"

// lib/i18n/context.tsx - React Context Provider
export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocale] = useState<Locale>(defaultLocale)
  const t = useCallback((key: string) => {
    // 通过点分路径访问翻译，如 "hero.title"
    return keys.reduce((obj, k) => obj?.[k], translations[locale])
  }, [locale])
  
  return (
    <I18nContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </I18nContext.Provider>
  )
}

// 使用示例 - 在组件中使用翻译
const { t, locale, setLocale } = useI18n()
<h1>{t('hero.title')}</h1>
<button onClick={() => setLocale('zh')}>中文</button>
\`\`\`

#### 翻译结构 | Translation Structure

\`\`\`tsx
interface Translations {
  meta: { title, description, ogTitle, ogDescription }
  nav: { home, startReading, howItWorks, about, faq }
  hero: { title, subtitle, ctaStart, ctaHowItWorks, deckNote }
  howItWorks: { title, subtitle, steps[] }
  forEurope: { title, subtitle, points[] }
  sampleReading: { title, subtitle, cardName, position, keywords[], meaning, advice }
  faq: { title, subtitle, items[] }
  footer: { tagline, disclaimer, links }
  tarot: { title, subtitle, startShuffle, selectCard, newReading, upright, reversed, ... }
  shuffle: { startButton }
  formation: { hoverHint, touchHint, wheelOfFate }
  language: { select }
}
\`\`\`

---

### 2. Landing Page (SEO 优化首页)

#### 页面结构 | Page Structure

\`\`\`
┌─────────────────────────────────────┐
│  Navigation Bar (Logo + Language)   │
├─────────────────────────────────────┤
│                                     │
│            Hero Section             │
│    Title + Subtitle + CTA Button    │
│                                     │
├─────────────────────────────────────┤
│                                     │
│        How It Works Section         │
│     4-Step Process with Icons       │
│                                     │
├─────────────────────────────────────┤
│                                     │
│      For European Users Section     │
│      Localization & Privacy Info    │
│                                     │
├─────────────────────────────────────┤
│                                     │
│       Sample Reading Section        │
│    Preview Card + Interpretation    │
│                                     │
├─────────────────────────────────────┤
│                                     │
│           FAQ Section               │
│    Accordion-style Q&A             │
│                                     │
├─────────────────────────────────────┤
│            Footer                   │
│   Disclaimer + Links + Copyright    │
└─────────────────────────────────────┘
\`\`\`

#### Hero Section 动效 | Hero Animations

\`\`\`tsx
// 标题淡入上浮
<motion.h1
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, delay: 0.2 }}
>
  {t('hero.title')}
</motion.h1>

// CTA 按钮霓虹发光
<motion.button
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  style={{
    boxShadow: "0 0 30px rgba(255,79,216,0.5), 0 0 60px rgba(115,242,255,0.3)"
  }}
>
  {t('hero.ctaStart')}
</motion.button>
\`\`\`

---

### 3. 视觉设计系统 | Visual Design System

#### 主题 | Theme
- **赛博魔法** - Cyber Magic aesthetic with neon energy
- **神圣几何** - Sacred geometry patterns throughout
- **深空星空** - Deep space starfield background
- **霓虹能量** - Neon energy trails and glow effects

#### 配色方案 | Color Palette
- 霓虹粉 (Neon Pink): `#FF4FD8`
- 霓虹青 (Neon Cyan): `#73F2FF`
- 深空紫 (Deep Purple): `#1a0a2e`, `#0f0a20`
- 星光白 (Starlight): `rgba(255, 255, 255, 0.8)`

---

### 4. 五阶段占卜动画流程 | Five-Phase Divination Flow

\`\`\`
用户进入 Landing Page
    ↓
点击 "Start Love Reading"
    ↓
显示浮动卡牌堆 (Idle Phase)
    ↓
点击 "Start Shuffle"
    ↓
爆炸式洗牌动画 (Shuffle Phase) - 4秒
    ↓
形成环形阵列 (Formation Phase)
    ↓
用户选择卡牌
    ↓
卡牌飞向中央 (Selected Phase)
    ↓
3D翻牌揭示
    ↓
显示解读面板 (Reading Phase)
\`\`\`

#### Phase A: 待机阶段 (Idle Phase)
- 3D 层叠卡牌堆
- 轻微上下漂浮动画
- 呼吸脉冲光效

#### Phase B: 洗牌阶段 (Shuffle Phase)
- 卡牌随机方向爆炸式飞散
- 3D 旋转、翻转、偏移
- 粉青渐变能量尾迹
- 粒子场强度提升

#### Phase C: 悬浮星盘环阵 (Ring Aura Deck)
- 22张卡牌 360° 均匀分布
- 卡牌倾向圆心 15°
- 呼吸式膨胀 (scale: 1 → 1.03)
- 极慢旋转 (180秒/周)
- 多层光晕脉动

#### Phase D: 抽卡阶段 (Card Selection)
- 卡牌脱离阵法
- 飞向屏幕中央
- 3D 翻面动画 (rotateY: 180deg)

#### Phase E: 解读阶段 (Reading Phase)
- 桌面端：右侧滑入
- 移动端：底部滑入
- 玻璃拟态效果

---

### 5. 抽卡与解读逻辑 | Card Drawing & Reading Logic

#### 卡牌数据结构 | Card Data Structure

\`\`\`tsx
// lib/tarot/cards.ts
export interface TarotCard {
  id: number
  name: string
  nameZh: string
  keywords: { en: string[]; zh: string[] }
  meaning: { en: { upright: string; reversed: string }; zh: { upright: string; reversed: string } }
  advice: { en: string; zh: string }
  loveContext: { en: string; zh: string }
}

export const tarotCards: TarotCard[] = [
  {
    id: 0,
    name: "The Fool",
    nameZh: "愚者",
    keywords: { 
      en: ["New Beginning", "Innocence", "Adventure"], 
      zh: ["新开始", "纯真", "冒险"] 
    },
    meaning: {
      en: { 
        upright: "A new romantic adventure awaits...", 
        reversed: "Fear of commitment..." 
      },
      zh: { 
        upright: "一段新的浪漫冒险正在等待...", 
        reversed: "对承诺的恐惧..." 
      }
    },
    // ...
  },
  // 共20张精选爱情牌
]
\`\`\`

#### 抽卡流程 | Drawing Flow

\`\`\`tsx
// TarotSphere 主组件
const handleCardSelect = (index: number) => {
  // 1. 记录选中的卡牌索引
  setSelectedCardIndex(index)
  
  // 2. 随机决定正位/逆位 (50% 概率)
  setIsReversed(Math.random() < 0.5)
  
  // 3. 切换到选中阶段
  setPhase("selected")
  
  // 4. 延迟1秒后翻牌
  setTimeout(() => setIsFlipped(true), 1000)
  
  // 5. 延迟2秒后显示解读面板
  setTimeout(() => setPhase("reading"), 2000)
}

// 卡牌映射
const selectedCard = tarotCards[selectedCardIndex % tarotCards.length]
\`\`\`

#### 解读面板内容 | Reading Panel Content

\`\`\`tsx
// ReadingPanel 组件
const { t, locale } = useI18n()
const card = tarotCards[cardIndex]

return (
  <div className="reading-panel">
    {/* 卡牌名称 */}
    <h2>{locale === 'zh' ? card.nameZh : card.name}</h2>
    
    {/* 正位/逆位状态 */}
    <span>{isReversed ? t('tarot.reversed') : t('tarot.upright')}</span>
    
    {/* 爱情关键词 */}
    <div className="keywords">
      {card.keywords[locale].map(kw => <span key={kw}>{kw}</span>)}
    </div>
    
    {/* 解读内容 */}
    <p>{isReversed ? card.meaning[locale].reversed : card.meaning[locale].upright}</p>
    
    {/* 爱情情境 */}
    <p>{card.loveContext[locale]}</p>
    
    {/* 建议 */}
    <p>{card.advice[locale]}</p>
  </div>
)
\`\`\`

---

### 6. 响应式设计 | Responsive Design

#### 响应式尺寸 Hook | Responsive Dimensions Hook

\`\`\`tsx
// hooks/use-responsive-dimensions.ts
export function useResponsiveDimensions() {
  const [dims, setDims] = useState({
    width: 1200,
    height: 800,
    isMobile: false,
    cardWidth: 90,
    cardHeight: 150,
    ringRadius: 280,
    spacing: { sm: 8, md: 16, lg: 24 }
  })
  
  useEffect(() => {
    const update = () => {
      const w = window.innerWidth
      const h = window.innerHeight
      const isMobile = w < 768
      
      setDims({
        width: w,
        height: h,
        isMobile,
        cardWidth: isMobile ? 50 : w < 1024 ? 70 : 90,
        cardHeight: isMobile ? 83 : w < 1024 ? 117 : 150,
        ringRadius: isMobile ? Math.min(w * 0.35, 140) : Math.min(w * 0.25, 280),
        spacing: isMobile ? { sm: 4, md: 8, lg: 16 } : { sm: 8, md: 16, lg: 24 }
      })
    }
    
    update()
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [])
  
  return dims
}
\`\`\`

#### 断点设计 | Breakpoints

| 断点 | 宽度 | 卡牌尺寸 | 环形半径 |
|------|------|---------|---------|
| Mobile | < 768px | 50×83 | 140px |
| Tablet | 768-1023px | 70×117 | 200px |
| Desktop | ≥ 1024px | 90×150 | 280px |

---

### 7. 核心动效总结 | Core Animations Summary

| 动效 | 描述 | 关键技术 |
|------|------|---------|
| **卡牌漂浮** | 待机时的轻微浮动 | translateY + rotateZ |
| **洗牌爆炸** | 混乱的飞散效果 | 随机位置 + 3D旋转 |
| **环形分布** | 360°均匀分布 + 倾向圆心 | cos/sin + tiltX/tiltY |
| **呼吸膨胀** | 圆环周期性缩放 | scale [1, 1.03, 1] |
| **光晕脉动** | 多层光环呼吸效果 | 径向渐变 + opacity |
| **极慢旋转** | 命运之轮缓慢转动 | rotate 360° + 180s |
| **悬停浮起** | 卡牌悬停时上浮发光 | translateY -15px |
| **3D翻牌** | 卡牌正反面切换 | rotateY 180deg |
| **能量尾迹** | 运动时的拖尾效果 | 渐变 + blur |
| **触摸拖拽** | 移动端旋转控制 | TouchEvent + deltaX |

---

## 项目结构 | Project Structure

\`\`\`
tarot-sphere-prototype/
├── app/
│   ├── layout.tsx          # 根布局 + SEO 元数据
│   ├── page.tsx            # 主页面 (Landing + Tarot)
│   └── globals.css         # 全局样式 + Tailwind
├── components/
│   ├── landing-page.tsx    # SEO 首页
│   ├── language-switcher.tsx # 语言切换器
│   ├── tarot-sphere.tsx    # 主占卜控制器
│   ├── card-stack.tsx      # 待机卡牌堆
│   ├── shuffle-phase.tsx   # 洗牌阶段
│   ├── ring-formation.tsx  # 悬浮星盘环阵
│   ├── selected-card.tsx   # 选中卡牌
│   ├── reading-panel.tsx   # 解读面板
│   ├── magic-background.tsx # 魔法背景
│   ├── magic-circle.tsx    # 魔法阵
│   ├── particle-field.tsx  # 粒子场
│   └── start-button.tsx    # 开始按钮
├── lib/
│   ├── i18n/
│   │   ├── locales.ts      # 语言类型定义
│   │   ├── translations.ts # 翻译内容
│   │   └── context.tsx     # i18n React Context
│   ├── tarot/
│   │   └── cards.ts        # 塔罗牌数据
│   └── utils.ts            # 工具函数
├── hooks/
│   └── use-responsive-dimensions.ts
└── public/
    └── *.jpg               # 背景图片
\`\`\`

---

## 技术栈 | Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Animation**: Framer Motion
- **Styling**: Tailwind CSS v4
- **i18n**: Custom React Context
- **TypeScript**: 完整类型支持

---

## License

MIT License - 自由使用与修改 | Free to use and modify

---

## 致谢 | Acknowledgments

设计灵感源于赛博朋克美学与古典塔罗艺术的融合。
动画实现基于 Framer Motion 最佳实践。
响应式设计遵循移动优先原则。

Design inspired by the fusion of cyberpunk aesthetics and classical tarot art.
Animation implementation based on Framer Motion best practices.
Responsive design follows mobile-first principles.
