# AI Love Tarot Sphere

一个沉浸式、仪式感的 AI 爱情塔罗占卜 Web 应用，融合赛博魔法美学、3D 动效、神圣几何元素。

An immersive, ritual-style AI Love Tarot divination web application that combines cyber-magic aesthetics, 3D animations, and sacred geometry elements.

---

## 核心特性 | Core Features

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

---

### 2. 五阶段占卜动画流程 | Five-Phase Divination Flow

#### 流程概览 | Flow Overview

\`\`\`
用户进入页面 (Idle Phase)
    ↓
显示浮动卡牌堆
    ↓
点击 "Start Shuffle"
    ↓
爆炸式洗牌动画 (Shuffle Phase) - 4秒
    ↓
形成球体/环形阵列 (Formation Phase)
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

**视觉呈现 | Visual Presentation:**
- 屏幕中央显示 3D 层叠卡牌堆
- 卡牌带有轻微上下漂浮动画 (floating animation)
- 卡牌周围有呼吸脉冲光效 (breathing pulse glow)
- 背景星空缓慢移动

**动效实现 | Animation Implementation:**
\`\`\`tsx
// CardStack 组件中的漂浮动画
animate={{
  y: [i * -4, i * -6, i * -4],
  rotateZ: [(i - 2) * 3, (i - 2) * 3 + 1, (i - 2) * 3],
}}
transition={{
  duration: 3,
  repeat: Infinity,
  ease: "easeInOut",
}}
\`\`\`

#### Phase B: 洗牌阶段 (Shuffle Phase)

**视觉呈现 | Visual Presentation:**
- 卡牌以随机方向爆炸式飞散
- 每张卡牌带有 3D 旋转、翻转、偏移
- 运动轨迹带粉青渐变能量尾迹
- 背景粒子场强度提升至 2 倍
- 魔法阵进行强烈脉冲和旋转

**动效实现 | Animation Implementation:**
\`\`\`tsx
// ShuffleCard 组件 - 响应式位移计算
const randomX = (Math.random() - 0.5) * dims.width * 0.6
const randomY = (Math.random() - 0.5) * dims.height * 0.5

animate={{
  x: [0, randomX, randomX * 0.5, 0],
  y: [0, randomY, randomY * 0.5, 0],
  rotateX: [0, 180, 360, 0],
  rotateY: [0, randomRotate, 0],
  rotateZ: [initialAngle, initialAngle + 360, initialAngle],
}}
transition={{
  duration: 4,
  times: [0, 0.3, 0.7, 1],
  ease: "easeInOut",
}}
\`\`\`

#### Phase C: 阵法展示 (Formation Phase)

**两种布局模式 | Two Formation Modes:**

1. **球体阵列 (Sphere Formation)**
   - 22 张塔罗牌均匀分布在 3D 球体表面
   - 使用斐波那契球体分布算法
   - 球体缓慢自转 (60秒一周)
   - 支持鼠标悬停和触摸拖拽旋转

2. **环形阵列 (Ring Formation)**
   - 卡牌组成 360° 圆环
   - 中心悬浮魔法阵
   - 环整体带微小上下震动
   - 支持触摸拖拽旋转

**斐波那契球体分布算法 | Fibonacci Sphere Algorithm:**
\`\`\`tsx
const phi = Math.PI * (3 - Math.sqrt(5))
for (let i = 0; i < numCards; i++) {
  const y = 1 - (i / (numCards - 1)) * 2
  const radius = Math.sqrt(1 - y * y)
  const theta = phi * i
  positions.push({
    x: Math.cos(theta) * radius * dims.sphereRadius,
    y: y * dims.sphereRadius,
    z: Math.sin(theta) * radius * dims.sphereRadius,
  })
}
\`\`\`

#### Phase D: 抽卡阶段 (Card Selection)

**交互流程 | Interaction Flow:**
1. 用户点击/触摸阵法中的任意卡牌
2. 卡牌脱离阵法位置
3. 飞向屏幕中央 (带光迹粒子)
4. 到达后进行 3D 翻面动画 (rotateY: 180deg)
5. 其他卡牌保持静默

**3D翻牌动效 | 3D Flip Animation:**
\`\`\`tsx
animate={{
  scale: 1,
  x: offsetX,
  y: dims.isMobile && isFlipped ? -dims.height * 0.15 : 0,
  rotateY: isFlipped ? 180 : 0,
}}
transition={{
  type: "spring",
  stiffness: 100,
  damping: 15,
  rotateY: { duration: 0.8, ease: "easeInOut" },
}}
\`\`\`

#### Phase E: 解读阶段 (Reading Phase)

**视觉呈现 | Visual Presentation:**
- 桌面端：解读面板从右侧滑入
- 移动端：解读面板从底部滑入 (Bottom Sheet)
- 玻璃拟态效果 (Glassmorphism)
- 内容包含：卡牌标题、关键词、爱情状况分析、未来趋势、指导建议

---

### 3. 抽卡逻辑 | Card Drawing Logic

#### 卡牌数据结构 | Card Data Structure
\`\`\`tsx
const tarotCards = [
  { name: "The Lovers", nameZh: "恋人" },
  { name: "The Star", nameZh: "星星" },
  { name: "The Moon", nameZh: "月亮" },
  // ... 共22张大阿尔卡纳牌
]
\`\`\`

#### 抽卡流程 | Drawing Flow
1. **用户选择**: 用户在 Sphere/Ring 阵列中点击任意卡牌
2. **索引记录**: 系统记录被选中卡牌的索引 `selectedCard: number`
3. **状态转换**: 阶段从 `formation` 变为 `selected`
4. **卡牌映射**: 使用 `cardIndex % tarotCards.length` 映射到具体卡牌
5. **翻牌延迟**: 卡牌飞到中央后延迟 1 秒开始翻面

\`\`\`tsx
// TarotSphere 主组件中的抽卡处理
const handleCardSelect = (index: number) => {
  setSelectedCard(index)
  setPhase("selected")
  // 延迟翻牌
  setTimeout(() => setIsFlipped(true), 1000)
  // 延迟显示解读面板
  setTimeout(() => setPhase("reading"), 2000)
}
\`\`\`

---

### 4. 解读逻辑 | Reading Interpretation Logic

#### 解读面板结构 | Reading Panel Structure
\`\`\`
┌─────────────────────────────────┐
│  卡牌名称 (中英文)              │
│  The Lovers / 恋人              │
├─────────────────────────────────┤
│  正位/逆位状态                  │
│  正位 · Upright                 │
├─────────────────────────────────┤
│  爱情关键词 (3-5个)             │
│  Soul Connection, Harmony...    │
├─────────────────────────────────┤
│  ♡ 爱情现状分析                 │
│  (短段落描述)                   │
├─────────────────────────────────┤
│  ✧ 未来趋势                     │
│  (短段落描述)                   │
├─────────────────────────────────┤
│  ⟡ 指导建议                     │
│  (短段落描述)                   │
├─────────────────────────────────┤
│  "情感箴言"                     │
├─────────────────────────────────┤
│  [✧ New Reading ✧]              │
└─────────────────────────────────┘
\`\`\`

#### 解读内容生成 | Reading Content Generation
当前原型使用静态示例文案，未来可接入 AI 生成：

\`\`\`tsx
// 未来 AI 解读接口示例
async function generateReading(cardName: string) {
  const response = await fetch('/api/tarot-reading', {
    method: 'POST',
    body: JSON.stringify({ card: cardName, type: 'love' })
  })
  return response.json()
}
\`\`\`

---

### 5. 响应式自适应系统 | Responsive Adaptation System

#### 断点定义 | Breakpoints
| 设备类型 | 宽度范围 | 变量 |
|---------|---------|------|
| 手机 Mobile | < 768px | `isMobile: true` |
| 平板 Tablet | 768px - 1279px | `isTablet: true` |
| 桌面 Desktop | >= 1280px | `isDesktop: true` |

#### 卡牌尺寸自适应 | Card Size Adaptation
卡牌使用视口高度百分比计算，保持 3:5 比例：

| 设备 | 卡牌高度占比 | 实际效果 |
|-----|------------|---------|
| 桌面 | 20% vh | 标准大小 |
| 平板 | 22% vh | 稍大 |
| 手机 | 28% vh | 更大更沉浸 |

\`\`\`tsx
// hooks/use-responsive-dimensions.ts
let cardHeightPercent: number
if (isMobile) {
  cardHeightPercent = 0.28
} else if (isTablet) {
  cardHeightPercent = 0.22
} else {
  cardHeightPercent = 0.20
}
const cardHeight = Math.min(height * cardHeightPercent, 300)
const cardWidth = cardHeight * 0.6 // 3:5 比例
\`\`\`

#### 球体/环形半径自适应 | Sphere/Ring Radius Adaptation
| 设备 | 半径占比 | 说明 |
|-----|---------|------|
| 桌面 | 38% minDimension | 标准比例 |
| 平板 | 34% minDimension | 适中 |
| 手机 | 44% minDimension | 更大更沉浸 |

#### 解读面板自适应 | Reading Panel Adaptation
- **桌面端**: 右侧浮出面板，宽度 max-w-xl
- **移动端**: 底部滑入 (Bottom Sheet)，高度 70vh，可滚动

\`\`\`tsx
// 面板动画变体
const panelVariants = dims.isMobile
  ? { initial: { y: "100%" }, animate: { y: 0 } }  // 底部滑入
  : { initial: { x: 100 }, animate: { x: 0 } }     // 右侧滑入
\`\`\`

#### 触摸交互支持 | Touch Interaction Support
- **单指拖拽**: 旋转 Sphere/Ring 阵列
- **单指点击**: 选择卡牌
- **惯性旋转**: 拖拽后保持旋转动量

\`\`\`tsx
// 触摸事件处理
const handleTouchMove = (e: React.TouchEvent) => {
  if (isDragging && lastTouchRef.current) {
    const deltaX = e.touches[0].clientX - lastTouchRef.current.x
    const deltaY = e.touches[0].clientY - lastTouchRef.current.y
    setDragRotation(prev => ({
      x: prev.x + deltaY * 0.3,
      y: prev.y + deltaX * 0.3,
    }))
  }
}
\`\`\`

---

### 6. 背景与特效系统 | Background & Effects System

#### 神圣几何星空背景 | Sacred Geometry Starfield
- **渐变背景**: 深空紫到黑色的径向渐变
- **星星粒子**: 动态闪烁 (桌面100个，移动端60个)
- **宇宙尘埃**: 漂浮的星云效果

#### 魔法阵系统 | Magic Circle System
- **双层旋转**: 外圈顺时针，内圈逆时针旋转
- **呼吸脉冲**: 根据当前阶段调整脉冲强度

#### 粒子场系统 | Particle Field System
- **动态生成**: 随机位置、大小、生命周期的粒子
- **阶段响应**: 洗牌阶段粒子数量翻倍

---

### 7. 状态管理 | State Management

\`\`\`tsx
// 主状态定义
type Phase = "idle" | "shuffling" | "formation" | "selected" | "reading"
type FormationType = "sphere" | "ring"

const [phase, setPhase] = useState<Phase>("idle")
const [formationType, setFormationType] = useState<FormationType>("sphere")
const [selectedCard, setSelectedCard] = useState<number | null>(null)
const [isFlipped, setIsFlipped] = useState(false)
\`\`\`

---

## 技术栈 | Tech Stack

- **框架 | Framework:** Next.js 15 (App Router)
- **动画库 | Animation:** Framer Motion
- **样式 | Styling:** Tailwind CSS v4
- **类型 | Types:** TypeScript
- **响应式 | Responsive:** Custom useResponsiveDimensions Hook

---

## 项目结构 | Project Structure

\`\`\`
tarot-sphere-prototype/
├── app/
│   ├── layout.tsx       # 根布局
│   ├── page.tsx         # 主页面
│   └── globals.css      # 全局样式
├── components/
│   ├── tarot-sphere.tsx       # 主控制器组件
│   ├── card-stack.tsx         # 待机卡牌堆
│   ├── shuffle-phase.tsx      # 洗牌阶段
│   ├── sphere-formation.tsx   # 球体阵列
│   ├── ring-formation.tsx     # 环形阵列
│   ├── selected-card.tsx      # 选中卡牌
│   ├── reading-panel.tsx      # 解读面板
│   ├── magic-background.tsx   # 魔法背景
│   ├── magic-circle.tsx       # 魔法阵
│   ├── particle-field.tsx     # 粒子场
│   ├── formation-toggle.tsx   # 阵型切换
│   └── start-button.tsx       # 开始按钮
├── hooks/
│   └── use-responsive-dimensions.ts  # 响应式尺寸Hook
└── public/
    └── sacred-geometry-*.jpg  # 背景图片
\`\`\`

---

## 核心动效总结 | Core Animations Summary

| 动效 | 描述 | 关键技术 |
|------|------|---------|
| **卡牌漂浮** | 待机时的轻微浮动 | translateY + rotateZ |
| **洗牌爆炸** | 混乱的飞散效果 | 随机位置 + 3D旋转 + 响应式缩放 |
| **球体分布** | 斐波那契球体算法 | translate3d + 响应式半径 |
| **环形分布** | 360°均匀分布 | rotateX + rotateZ |
| **3D翻牌** | 卡牌正反面切换 | rotateY 180deg + backface-visibility |
| **能量尾迹** | 运动时的拖尾效果 | 渐变 + blur + opacity动画 |
| **触摸拖拽** | 移动端旋转控制 | TouchEvent + deltaX/Y |

---

## License

MIT License - 自由使用与修改 | Free to use and modify

---

## 致谢 | Acknowledgments

- 设计灵感源于赛博朋克美学与古典塔罗艺术的融合
- 动画实现基于 Framer Motion 最佳实践
- 响应式设计遵循移动优先原则

Design inspired by the fusion of cyberpunk aesthetics and classical tarot art.
Animation implementation based on Framer Motion best practices.
Responsive design follows mobile-first principles.
