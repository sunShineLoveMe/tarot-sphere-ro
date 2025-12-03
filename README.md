# AI Love Tarot Sphere 🔮

[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=for-the-badge&logo=vercel)](https://vercel.com/juneqi9-gmailcoms-projects/v0-tarot-sphere-prototype)
[![Built with v0](https://img.shields.io/badge/Built%20with-v0.app-black?style=for-the-badge)](https://v0.app/chat/ib7B5HxUvuz)

一个沉浸式、仪式感的 AI 爱情塔罗占卜 Web 应用，融合赛博魔法美学、3D 动效、神圣几何元素。

An immersive, ritual-style AI Love Tarot divination web application that combines cyber-magic aesthetics, 3D animations, and sacred geometry elements.

---

## 🎨 核心特性 | Core Features

### 1. 视觉设计系统 | Visual Design System

#### 主题 | Theme
- **赛博魔法** - Cyber Magic aesthetic with neon energy
- **神圣几何** - Sacred geometry patterns throughout
- **深空星空** - Deep space starfield background with cosmic dust
- **霓虹能量** - Neon energy trails and glow effects

#### 配色方案 | Color Palette
- 霓虹粉 (Neon Pink): `#FF4FD8` - Primary brand color
- 霓虹青 (Neon Cyan): `#73F2FF` - Secondary accent color
- 深空紫 (Deep Purple): `#1a0a2e`, `#0f0a20` - Background depths
- 星光白 (Starlight): `rgba(255, 255, 255, 0.8)` - Foreground elements

#### 实现技术 | Implementation
\`\`\`css
/* 在 globals.css 中使用 CSS 变量系统 */
/* CSS variables defined in globals.css */
--neon-pink: #FF4FD8;
--neon-cyan: #73F2FF;
--space-dark: #1a0a2e;
--space-darker: #0f0a20;

/* 所有组件通过 Tailwind 的自定义主题引用 */
/* Referenced via Tailwind's custom theme tokens */
\`\`\`

---

### 2. 五阶段占卜动画流程 | Five-Phase Divination Flow

#### Phase A: 待机阶段 (Idle Phase)

**视觉呈现 | Visual Presentation:**
- 屏幕中央显示 3D 层叠卡牌堆
- 卡牌带有轻微上下漂浮动画 (floating animation)
- 卡牌周围有呼吸脉冲光效 (breathing pulse glow)
- 背景星空缓慢移动

**动效实现 | Animation Implementation:**
\`\`\`tsx
// components/card-stack.tsx
// 使用 Framer Motion 的 animate 属性实现持续浮动
<motion.div
  animate={{
    y: [0, -10, 0],           // 垂直漂浮
    rotateY: [0, 2, 0, -2, 0] // 微小旋转摆动
  }}
  transition={{
    duration: 4,
    repeat: Infinity,
    ease: "easeInOut"
  }}
/>
\`\`\`

**交互 | Interaction:**
- 显示 "Start Shuffle" 按钮
- 按钮带有霓虹边框和 hover 缩放效果

---

#### Phase B: 洗牌阶段 (Shuffle Phase)

**视觉呈现 | Visual Presentation:**
- 卡牌以随机方向爆炸式飞散
- 每张卡牌带有 3D 旋转、翻转、偏移
- 运动轨迹带粉青渐变能量尾迹
- 背景粒子场强度提升至 2 倍
- 魔法阵进行强烈脉冲和旋转

**动效实现 | Animation Implementation:**
\`\`\`tsx
// components/shuffle-phase.tsx
// 为每张卡牌生成随机初始位置和旋转角度
const randomCards = Array.from({ length: 22 }, (_, i) => ({
  id: i,
  x: (Math.random() - 0.5) * 800,      // 随机 X 轴位置
  y: (Math.random() - 0.5) * 600,      // 随机 Y 轴位置
  rotation: Math.random() * 360,       // 随机旋转
  rotateX: (Math.random() - 0.5) * 180,// 3D X轴旋转
  rotateY: (Math.random() - 0.5) * 180,// 3D Y轴旋转
}))

// 使用 Spring 动画实现混乱洗牌效果
<motion.div
  initial={{ x: 0, y: 0, rotation: 0 }}
  animate={{
    x: [0, card.x, 0],
    y: [0, card.y, 0],
    rotation: [0, card.rotation, 0],
    rotateX: [0, card.rotateX, 0],
    rotateY: [0, card.rotateY, 0]
  }}
  transition={{
    duration: 3,
    times: [0, 0.5, 1],
    ease: "easeInOut"
  }}
  style={{
    filter: "blur(1px)", // 运动模糊效果
  }}
/>
\`\`\`

**能量尾迹实现 | Energy Trail Implementation:**
\`\`\`tsx
// 使用 SVG path + motion 绘制轨迹
<motion.path
  d={`M 0,0 Q ${card.x/2},${card.y/2} ${card.x},${card.y}`}
  stroke="url(#trailGradient)"
  strokeWidth="2"
  fill="none"
  initial={{ pathLength: 0, opacity: 0 }}
  animate={{ pathLength: 1, opacity: [0, 1, 0] }}
  transition={{ duration: 1.5 }}
/>
\`\`\`

**持续时间 | Duration:** 4 秒后自动进入阵法阶段

---

#### Phase C: 阵法展示 (Formation Phase)

**两种布局模式 | Two Formation Modes:**

##### 模式 1: 球体阵列 (Sphere Formation)

**视觉呈现 | Visual Presentation:**
- 22 张塔罗牌均匀分布在 3D 球体表面
- 使用斐波那契球体算法实现均匀分布
- 球体缓慢自转 (Y 轴旋转)
- 每张卡牌朝向球心倾斜

**球体分布算法 | Sphere Distribution Algorithm:**
\`\`\`tsx
// components/sphere-formation.tsx
// Fibonacci Sphere 算法确保均匀分布
const generateSpherePositions = (count: number, radius: number) => {
  const positions = []
  const goldenAngle = Math.PI * (3 - Math.sqrt(5)) // ~137.5°
  
  for (let i = 0; i < count; i++) {
    const y = 1 - (i / (count - 1)) * 2      // -1 到 1
    const radiusAtY = Math.sqrt(1 - y * y)   // 该高度的圆半径
    const theta = goldenAngle * i            // 黄金角螺旋
    
    const x = Math.cos(theta) * radiusAtY * radius
    const z = Math.sin(theta) * radiusAtY * radius
    
    positions.push({ x, y: y * radius, z })
  }
  return positions
}
\`\`\`

**3D 透视实现 | 3D Perspective Implementation:**
\`\`\`tsx
// 使用 CSS transform-style 和 perspective
<div style={{
  transformStyle: "preserve-3d",
  perspective: "1000px"
}}>
  <motion.div
    animate={{ rotateY: 360 }}
    transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
    style={{ transformStyle: "preserve-3d" }}
  >
    {cards.map((card, i) => (
      <motion.div
        style={{
          transform: `
            translate3d(${pos.x}px, ${pos.y}px, ${pos.z}px)
            rotateY(${Math.atan2(pos.x, pos.z) * (180/Math.PI)}deg)
          `
        }}
      />
    ))}
  </motion.div>
</div>
\`\`\`

##### 模式 2: 环形阵列 (Ring Formation)

**视觉呈现 | Visual Presentation:**
- 卡牌组成 360° 圆环
- 中心悬浮魔法阵
- 环整体带微小上下震动 (breathing motion)
- 环缓慢旋转

**环形分布算法 | Ring Distribution Algorithm:**
\`\`\`tsx
// components/ring-formation.tsx
const generateRingPositions = (count: number, radius: number) => {
  return Array.from({ length: count }, (_, i) => {
    const angle = (i / count) * Math.PI * 2
    return {
      x: Math.cos(angle) * radius,
      y: 0,
      z: Math.sin(angle) * radius,
      rotation: angle * (180 / Math.PI) + 90 // 卡牌朝向圆心
    }
  })
}
\`\`\`

**呼吸震动实现 | Breathing Motion:**
\`\`\`tsx
<motion.div
  animate={{
    y: [0, -15, 0],
    rotateY: 360
  }}
  transition={{
    y: { duration: 3, repeat: Infinity, ease: "easeInOut" },
    rotateY: { duration: 40, repeat: Infinity, ease: "linear" }
  }}
/>
\`\`\`

**模式切换 | Mode Toggle:**
\`\`\`tsx
// components/formation-toggle.tsx
// 用户可通过 UI 按钮切换球体/环形模式
<button onClick={() => setFormationType(type)}>
  {type === 'sphere' ? '⚫ Sphere' : '⭕ Ring'}
</button>
\`\`\`

**交互效果 | Hover Effects:**
\`\`\`tsx
// 鼠标悬停时卡牌放大、发光增强、浮出阵法
<motion.div
  whileHover={{
    scale: 1.15,
    z: isInFormation ? 50 : 0, // 浮出 50px
    boxShadow: "0 0 60px rgba(255,79,216,0.8)",
  }}
  whileTap={{ scale: 0.95 }}
/>
\`\`\`

---

#### Phase D: 抽卡阶段 (Card Selection)

**交互流程 | Interaction Flow:**
1. 用户点击阵法中的任意卡牌
2. 卡牌脱离阵法位置
3. 飞向屏幕中央 (带光迹)
4. 到达后进行 3D 翻面动画
5. 其他卡牌保持静默

**抽卡逻辑实现 | Card Selection Logic:**
\`\`\`tsx
// components/tarot-sphere.tsx
const handleCardSelect = useCallback((index: number) => {
  if (phase !== "formation") return // 仅在阵法阶段可选
  
  setSelectedCardIndex(index)
  setPhase("selected")
  
  // 1.5秒后开始翻牌
  setTimeout(() => {
    setIsFlipped(true)
    // 翻牌完成后 1.5秒进入解读
    setTimeout(() => {
      setPhase("reading")
    }, 1500)
  }, 1500)
}, [phase])
\`\`\`

**飞行动画 | Flying Animation:**
\`\`\`tsx
// components/selected-card.tsx
<motion.div
  initial={{
    scale: 0.5,
    x: (Math.random() - 0.5) * 400, // 从随机位置飞来
    y: (Math.random() - 0.5) * 300,
    opacity: 0
  }}
  animate={{
    scale: 1,
    x: 0,  // 飞向中心
    y: 0,
    opacity: 1,
    rotateY: isFlipped ? 180 : 0 // 翻面
  }}
  transition={{
    type: "spring",
    stiffness: 100,
    damping: 15,
    rotateY: { duration: 0.8, ease: "easeInOut" }
  }}
  style={{
    transformStyle: "preserve-3d",
    perspective: "1500px"
  }}
/>
\`\`\`

**3D 翻面实现 | 3D Flip Implementation:**
\`\`\`tsx
// 卡牌背面和正面分别渲染,使用 rotateY 控制
<div style={{ transformStyle: "preserve-3d" }}>
  {/* 背面 */}
  <div style={{
    backfaceVisibility: "hidden",
    transform: "rotateY(0deg)"
  }}>
    {/* 卡背图案 */}
  </div>
  
  {/* 正面 */}
  <div style={{
    backfaceVisibility: "hidden",
    transform: "rotateY(180deg)"
  }}>
    {/* 卡牌内容 */}
  </div>
</div>
\`\`\`

**能量粒子尾迹 | Energy Particle Trail:**
\`\`\`tsx
// 8 个粒子从随机位置向中心聚拢
{[...Array(8)].map((_, i) => (
  <motion.div
    key={i}
    className="absolute w-2 h-2 rounded-full"
    initial={{
      x: (Math.random() - 0.5) * 300,
      y: (Math.random() - 0.5) * 200,
      opacity: 0,
      scale: 0
    }}
    animate={{
      x: 0,
      y: 0,
      opacity: [0, 1, 0],
      scale: [0, 1.5, 0]
    }}
    transition={{
      duration: 1,
      delay: i * 0.1,
      ease: "easeOut"
    }}
    style={{
      background: i % 2 === 0 ? "#FF4FD8" : "#73F2FF",
      boxShadow: `0 0 20px ${i % 2 === 0 ? "#FF4FD8" : "#73F2FF"}`
    }}
  />
))}
\`\`\`

**卡牌数据结构 | Card Data Structure:**
\`\`\`tsx
// components/selected-card.tsx
const tarotCards = [
  { name: "The Lovers", nameZh: "恋人" },
  { name: "The Star", nameZh: "星星" },
  { name: "The Moon", nameZh: "月亮" },
  { name: "The Empress", nameZh: "皇后" },
  { name: "Two of Cups", nameZh: "圣杯二" },
  { name: "Ace of Cups", nameZh: "圣杯王牌" },
  // ... 共 22 张大阿尔克那牌
]

// 根据选中的索引获取对应卡牌
const card = tarotCards[cardIndex % tarotCards.length]
\`\`\`

---

#### Phase E: 解读阶段 (Reading Phase)

**解读面板结构 | Reading Panel Structure:**
\`\`\`tsx
// components/reading-panel.tsx
<ReadingPanel>
  {/* 1. 卡牌标题 (中英文) */}
  <CardTitle>
    <h2>The Lovers</h2>
    <p>恋人</p>
    <Badge>正位 · Upright</Badge>
  </CardTitle>
  
  {/* 2. 爱情关键词 */}
  <Keywords>
    {["Soul Connection", "Harmony", "Choice", "Deep Bond", "Union"]}
  </Keywords>
  
  {/* 3. 当前爱情状况分析 */}
  <CurrentSituation>
    The Lovers card reveals a profound moment in your romantic journey...
  </CurrentSituation>
  
  {/* 4. 未来趋势 */}
  <FutureTrend>
    The cosmic energies align to bring harmonious love...
  </FutureTrend>
  
  {/* 5. 指导建议 */}
  <Guidance>
    Honor both your heart and your values in matters of love...
  </Guidance>
  
  {/* 6. 情感洞察 */}
  <EmotionalInsight>
    "Love is the bridge between two souls seeking to become one light."
  </EmotionalInsight>
  
  {/* 7. 重新抽卡按钮 */}
  <ResetButton onClick={onReset}>
    ✧ New Reading ✧
  </ResetButton>
</ReadingPanel>
\`\`\`

**面板动画 | Panel Animation:**
\`\`\`tsx
// 面板从右侧滑入
<motion.div
  initial={{ x: 100, opacity: 0 }}
  animate={{ x: 0, opacity: 1 }}
  exit={{ x: 100, opacity: 0 }}
  transition={{ 
    type: "spring", 
    stiffness: 100, 
    damping: 20, 
    delay: 0.3 
  }}
/>

// 内容逐个淡入上浮
<motion.div
  initial={{ y: 20, opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  transition={{ delay: 0.5 }}
/>
\`\`\`

**玻璃拟态样式 | Glassmorphism Style:**
\`\`\`tsx
style={{
  background: "linear-gradient(135deg, rgba(26,10,46,0.95) 0%, rgba(15,10,32,0.98) 100%)",
  border: "1px solid rgba(255,79,216,0.3)",
  boxShadow: `
    0 0 40px rgba(255,79,216,0.2),
    0 0 80px rgba(115,242,255,0.1),
    inset 0 1px 0 rgba(255,255,255,0.1)
  `,
  backdropFilter: "blur(20px)"
}}
\`\`\`

**解读逻辑 (当前为静态示例) | Reading Logic (Static Example):**
\`\`\`tsx
// 当前版本使用预设解读内容
// Current version uses preset reading content

// 未来可扩展为 AI 生成:
// Future expansion with AI generation:
/*
const generateReading = async (cardName: string) => {
  const response = await fetch('/api/generate-reading', {
    method: 'POST',
    body: JSON.stringify({ card: cardName })
  })
  return await response.json()
}
*/
\`\`\`

---

### 3. 背景与特效系统 | Background & Effects System

#### 神圣几何星空背景 | Sacred Geometry Starfield

**实现 | Implementation:**
\`\`\`tsx
// components/magic-background.tsx
<div className="absolute inset-0">
  {/* 渐变背景 */}
  <div style={{
    background: "radial-gradient(ellipse at center, #1a0a2e 0%, #0f0a20 50%, #05000d 100%)"
  }} />
  
  {/* 星星粒子 (600+) */}
  {stars.map(star => (
    <motion.div
      className="absolute rounded-full"
      style={{
        width: star.size,
        height: star.size,
        left: star.x,
        top: star.y,
        background: star.color
      }}
      animate={{
        opacity: [0.3, 1, 0.3],
        scale: [1, 1.2, 1]
      }}
      transition={{
        duration: star.twinkleDuration,
        repeat: Infinity,
        delay: star.delay
      }}
    />
  ))}
  
  {/* 宇宙尘埃 */}
  {dust.map(particle => (
    <motion.div
      style={{
        background: "radial-gradient(circle, rgba(115,242,255,0.1), transparent)"
      }}
      animate={{
        x: [0, particle.dx],
        y: [0, particle.dy],
        opacity: [0, 0.3, 0]
      }}
      transition={{
        duration: 15,
        repeat: Infinity
      }}
    />
  ))}
</div>
\`\`\`

#### 魔法阵系统 | Magic Circle System

**双层旋转魔法阵 | Dual-Rotating Magic Circle:**
\`\`\`tsx
// components/magic-circle.tsx
<div className="absolute inset-0 flex items-center justify-center pointer-events-none">
  {/* 外圈 - 顺时针旋转 */}
  <motion.svg
    animate={{ rotate: 360 }}
    transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
  >
    <circle cx="250" cy="250" r="200" 
      stroke="url(#gradient)" 
      strokeWidth="2" 
      fill="none" 
    />
    {/* 六芒星、符文等图案 */}
  </motion.svg>
  
  {/* 内圈 - 逆时针旋转 */}
  <motion.svg
    animate={{ rotate: -360 }}
    transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
  >
    <circle cx="250" cy="250" r="150" 
      stroke="url(#gradient2)" 
      strokeWidth="1.5" 
      fill="none" 
    />
  </motion.svg>
</div>
\`\`\`

**呼吸脉冲 | Breathing Pulse:**
\`\`\`tsx
// 根据阶段调整脉冲强度
const pulseIntensity = {
  idle: [0.3, 0.5, 0.3],
  shuffling: [0.5, 1, 0.5],    // 洗牌时最强
  formation: [0.4, 0.6, 0.4],
  reading: [0.5, 0.7, 0.5]     // 解读时提升
}

<motion.div
  animate={{
    opacity: pulseIntensity[phase],
    scale: [1, 1.05, 1]
  }}
  transition={{
    duration: 2,
    repeat: Infinity,
    ease: "easeInOut"
  }}
/>
\`\`\`

#### 粒子场系统 | Particle Field System

**动态粒子生成 | Dynamic Particle Generation:**
\`\`\`tsx
// components/particle-field.tsx
const generateParticles = (count: number) => {
  return Array.from({ length: count }, () => ({
    x: Math.random() * window.innerWidth,
    y: Math.random() * window.innerHeight,
    size: Math.random() * 3 + 1,
    duration: Math.random() * 10 + 5,
    delay: Math.random() * 5
  }))
}

// 洗牌时粒子数量翻倍 (intensity prop)
const particleCount = 50 * intensity // intensity: 1 or 2
\`\`\`

**粒子运动轨迹 | Particle Motion:**
\`\`\`tsx
<motion.div
  animate={{
    x: [particle.x, particle.x + (Math.random() - 0.5) * 100],
    y: [particle.y, particle.y - 200], // 向上漂浮
    opacity: [0, 0.6, 0],
    scale: [0, 1, 0.5]
  }}
  transition={{
    duration: particle.duration,
    delay: particle.delay,
    repeat: Infinity,
    ease: "easeOut"
  }}
/>
\`\`\`

---

### 4. 状态管理与用户旅程 | State Management & User Journey

**状态机设计 | State Machine Design:**
\`\`\`tsx
// components/tarot-sphere.tsx
type Phase = "idle" | "shuffling" | "formation" | "selected" | "reading"

const [phase, setPhase] = useState<Phase>("idle")
const [formationType, setFormationType] = useState<"sphere" | "ring">("sphere")
const [selectedCardIndex, setSelectedCardIndex] = useState<number | null>(null)
const [isFlipped, setIsFlipped] = useState(false)
\`\`\`

**完整用户旅程 | Complete User Journey:**
\`\`\`
1. 进入页面 (idle)
   ↓
   [显示卡牌堆 + 星空背景]
   ↓
2. 点击 "Start Shuffle"
   ↓
3. 洗牌动画 (shuffling) - 4秒
   ↓
   [自动切换]
   ↓
4. 阵法展示 (formation)
   ↓
   [用户可切换球体/环形]
   ↓
5. 点击卡牌
   ↓
6. 卡牌飞行 (selected) - 1.5秒
   ↓
7. 翻牌动画 - 0.8秒
   ↓
   [1.5秒后自动切换]
   ↓
8. 解读面板展开 (reading)
   ↓
   [用户阅读占卜结果]
   ↓
9. 点击 "New Reading"
   ↓
   [重置回 idle 状态]
\`\`\`

**状态转换时序图 | State Transition Timing:**
\`\`\`tsx
// 洗牌 → 阵法
setTimeout(() => setPhase("formation"), 4000)

// 选中 → 翻牌 → 解读
handleCardSelect → 
  setPhase("selected") → 
    setTimeout(setIsFlipped(true), 1500) → 
      setTimeout(setPhase("reading"), 1500)
\`\`\`

---

## 🛠 技术栈 | Tech Stack

- **框架 | Framework:** Next.js 15 (App Router)
- **动画库 | Animation:** Framer Motion
- **样式 | Styling:** Tailwind CSS v4
- **类型 | Types:** TypeScript
- **部署 | Deployment:** Vercel

---

## 📦 项目结构 | Project Structure

\`\`\`
tarot-sphere-prototype/
├── app/
│   ├── layout.tsx           # 根布局
│   ├── page.tsx             # 主页面
│   └── globals.css          # 全局样式 + 主题变量
├── components/
│   ├── tarot-sphere.tsx     # 主控制器组件 (状态机)
│   ├── magic-background.tsx # 星空背景
│   ├── magic-circle.tsx     # 魔法阵
│   ├── particle-field.tsx   # 粒子场
│   ├── card-stack.tsx       # 待机卡牌堆
│   ├── start-button.tsx     # 开始按钮
│   ├── shuffle-phase.tsx    # 洗牌动画
│   ├── sphere-formation.tsx # 球体阵法
│   ├── ring-formation.tsx   # 环形阵法
│   ├── formation-toggle.tsx # 阵法切换器
│   ├── selected-card.tsx    # 选中卡牌 (翻面)
│   └── reading-panel.tsx    # 解读面板
└── public/
    └── (可选背景图片)
\`\`\`

---

## 🎯 核心动效总结 | Core Animations Summary

| 动效 | 实现技术 | 关键参数 |
|------|----------|---------|
| **卡牌漂浮** | Framer Motion `animate` | `y: [0, -10, 0]`, duration: 4s |
| **洗牌爆炸** | Random position + Spring | stiffness: 80, damping: 10 |
| **球体分布** | Fibonacci Sphere 算法 | 22 cards, radius: 300px |
| **环形旋转** | 360° circle + rotateY | duration: 40s, linear |
| **3D 翻牌** | `rotateY` + `backfaceVisibility` | 0° → 180°, duration: 0.8s |
| **能量尾迹** | Motion path + gradient | opacity: [0, 1, 0] |
| **魔法阵脉冲** | Opacity + Scale loop | duration: 2s, infinite |
| **粒子漂浮** | Random trajectory + fade | duration: 5-15s, random |

---

## 🚀 运行项目 | Run the Project

### 本地开发 | Local Development
\`\`\`bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 访问 http://localhost:3000
\`\`\`

### 在线预览 | Live Demo
**[https://vercel.com/juneqi9-gmailcoms-projects/v0-tarot-sphere-prototype](https://vercel.com/juneqi9-gmailcoms-projects/v0-tarot-sphere-prototype)**

---

## 🔮 未来扩展 | Future Enhancements

### 1. AI 解读生成 | AI Reading Generation
\`\`\`tsx
// 集成 AI SDK 生成个性化解读
import { generateText } from 'ai'

const generateReading = async (cardName: string) => {
  const { text } = await generateText({
    model: 'openai/gpt-4.1',
    prompt: `为塔罗牌"${cardName}"生成深度爱情占卜解读...`
  })
  return text
}
\`\`\`

### 2. 正位/逆位判定 | Upright/Reversed Detection
\`\`\`tsx
// 随机或根据用户交互判定
const isReversed = Math.random() > 0.5
const orientation = isReversed ? 'Reversed' : 'Upright'
\`\`\`

### 3. 多张牌阵 | Multi-Card Spreads
- 三张牌阵 (过去-现在-未来)
- 凯尔特十字 (10 cards)
- 用户自定义牌阵

### 4. 卡牌图像资源 | Card Image Assets
\`\`\`tsx
// 替换 placeholder 为真实塔罗牌图
<img 
  src={`/tarot-cards/${cardName.toLowerCase().replace(/\s/g, '-')}.jpg`}
  alt={cardName}
/>
\`\`\`

### 5. 音效系统 | Sound Effects
- 洗牌音效
- 翻牌音效
- 环境音乐 (神秘氛围)

### 6. 用户历史记录 | Reading History
- 保存占卜记录
- 查看历史解读
- 数据可视化

---

## 📄 License

MIT License - 自由使用与修改 | Free to use and modify

---

## 🙏 致谢 | Acknowledgments

- 设计灵感源于赛博朋克美学与古典塔罗艺术的融合
- 动画实现参考了现代 Web 动效最佳实践
- 感谢 Framer Motion 提供优秀的动画库

Design inspired by the fusion of cyberpunk aesthetics and classical tarot art. Animation implementation references modern web animation best practices. Thanks to Framer Motion for the excellent animation library.

---

**Build with v0.app** ✨
