# AI Love Tarot Sphere

一个沉浸式、仪式感的 AI 爱情塔罗占卜 Web 应用，融合赛博魔法美学、3D 动效、神圣几何元素。

An immersive, ritual-style AI Love Tarot divination web application that combines cyber-magic aesthetics, 3D animations, and sacred geometry elements.

---

## 版本更新记录 | Version History

### v1.2.0 - 2025-12-03
- **开始按钮自适应**: 再次优化了 "Start Shuffle" 按钮，强制不换行 (`whitespace-nowrap`)，并调整了移动端的内边距和字体大小，确保在所有设备上单行显示。
- **卡牌堆尺寸调整**: 将待机状态下的卡牌堆尺寸缩放系数再次从 1.5 调整为 1.2，以符合 UI 设计审美。
- **统一卡背图案**: 再次修复了洗牌和 Ring Aura Deck 阵列阶段卡背图案不一致的问题，确保全程统一使用带有五角星的魔法阵图案。
- **悬浮星盘环阵**: 更新了阵列展示为 "Ring Aura Deck"，包含呼吸流动、极慢旋转和多层光晕效果。
- **魔法阵响应式优化**: 再次重构了 `MagicCircle` 组件，使用 `vw` 单位和 `max-w` 约束，确保在不同尺寸屏幕上都能完整显示且比例协调。

### v1.1.0 - 2025-12-03
- **修复 Hydration Error**: 重构了 `MagicBackground`, `ParticleField`, `ShufflePhase`, `SelectedCard` 等组件，将随机数生成移至 `useEffect`，解决了服务端与客户端渲染不一致的问题。
- **魔法阵响应式优化**: 重构了 `MagicCircle` 组件，使用 `vw` 单位和 `max-w` 约束，确保在不同尺寸屏幕上都能完整显示且比例协调。
- **卡牌堆尺寸调整**: 将待机状态下的卡牌堆尺寸缩放系数从 1.5 调整为 1.2，使其视觉比例更加协调。

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

**悬浮星盘式 · 360° 呼吸流动环阵 (Ring Aura Deck)**

设计理念：让用户感觉整个圆环是"命运之轮"，卡牌在等待被选中，操作直觉且神秘。

Design Concept: The ring creates a "Wheel of Fate" experience where cards orbit like celestial bodies around an energy core, waiting to be chosen.

**视觉呈现 | Visual Presentation:**
- 22张卡牌沿完美圆环 360° 均匀分布
- 卡牌轻微倾向圆心（15°倾斜），像星辰围绕能量中心
- 环阵带"呼吸式膨胀"动效 (scale: 1 → 1.03，6秒周期)
- 整个圆环极慢旋转 (180秒一周，用户有充足时间选择)
- 多层光晕脉动效果 (外层4秒周期，内层3秒周期)
- 中央神圣几何魔法阵旋转 + 反向旋转内圈
- 8个能量粒子环绕圆环轨道运行

**卡牌交互效果 | Card Interaction:**
- 悬停/触摸时：卡牌浮起15px、放大1.15倍
- 发光增强：边框变为霓虹青，光晕扩大
- 点击后：卡牌脱离圆阵，飞向中央

**圆环分布算法 | Ring Distribution Algorithm:**
\`\`\`tsx
// 卡牌在完美圆环上均匀分布，倾向圆心
const positions = []
for (let i = 0; i < 22; i++) {
  const angle = (i / 22) * Math.PI * 2 - Math.PI / 2 // 从顶部开始
  const tiltAngle = 15 // 向圆心倾斜15度
  
  positions.push({
    x: Math.cos(angle) * ringRadius,
    y: Math.sin(angle) * ringRadius,
    angle: (angle * 180) / Math.PI + 90, // 卡牌朝向
    tiltX: Math.sin(angle) * tiltAngle,  // X轴倾斜
    tiltY: -Math.cos(angle) * tiltAngle, // Y轴倾斜
  })
}
\`\`\`

**呼吸式膨胀动效 | Breathing Expansion Animation:**
\`\`\`tsx
// 主环容器呼吸效果
<motion.div
  animate={{
    scale: [1, 1.03, 1], // 微妙的呼吸膨胀
  }}
  transition={{
    duration: 6,
    repeat: Infinity,
    ease: "easeInOut",
  }}
>
  {/* 圆环内容 */}
</motion.div>
\`\`\`

**极慢旋转 | Ultra-Slow Rotation:**
\`\`\`tsx
// 圆环极慢旋转 - 3分钟一周
<motion.div
  animate={{ 
    rotate: [0, 360] 
  }}
  transition={{
    duration: 180, // 180秒 = 3分钟
    repeat: Infinity,
    ease: "linear",
  }}
>
  {cards}
</motion.div>
\`\`\`

**多层光晕脉动 | Multi-Layer Glow Pulse:**
\`\`\`tsx
// 外层呼吸光环
<motion.div
  style={{
    background: "radial-gradient(circle, transparent 40%, rgba(255,79,216,0.1) 60%, rgba(115,242,255,0.15) 80%, transparent 100%)",
    boxShadow: "0 0 80px 20px rgba(255,79,216,0.15), 0 0 120px 40px rgba(115,242,255,0.1)",
  }}
  animate={{
    scale: [1, 1.08, 1],
    opacity: [0.6, 1, 0.6],
  }}
  transition={{
    duration: 4,
    repeat: Infinity,
    ease: "easeInOut",
  }}
/>

// 内层能量环 - 反向旋转
<motion.div
  style={{
    border: "1px solid rgba(115,242,255,0.3)",
    boxShadow: "inset 0 0 60px rgba(255,79,216,0.2)",
  }}
  animate={{
    scale: [1, 1.05, 1],
    opacity: [0.4, 0.8, 0.4],
    rotate: [0, -360], // 反向旋转
  }}
  transition={{
    scale: { duration: 3, repeat: Infinity },
    rotate: { duration: 120, repeat: Infinity, ease: "linear" },
  }}
/>
\`\`\`

**卡牌悬停效果 | Card Hover Effects:**
\`\`\`tsx
// 卡牌悬停时浮起并发光
<motion.div
  animate={{
    scale: isHovered ? 1.15 : 1,
    z: isHovered ? 30 : 0,
  }}
  whileHover={{ 
    y: baseY - 15, // 浮起15px
  }}
  style={{
    boxShadow: isHovered 
      ? "0 0 25px rgba(115,242,255,0.7), 0 0 50px rgba(255,79,216,0.5), 0 0 80px rgba(115,242,255,0.3)"
      : "0 0 15px rgba(255,79,216,0.3), 0 0 30px rgba(115,242,255,0.15)",
    borderColor: isHovered ? "#73F2FF" : "rgba(255,79,216,0.5)",
  }}
/>
\`\`\`

**神圣几何中央区域 | Sacred Geometry Center:**
\`\`\`tsx
// 中央旋转六芒星
<motion.div
  animate={{
    rotate: [0, 360],
    scale: [0.95, 1.05, 0.95],
  }}
  transition={{
    rotate: { duration: 60, repeat: Infinity, ease: "linear" },
    scale: { duration: 5, repeat: Infinity, ease: "easeInOut" },
  }}
>
  <svg>
    <polygon points="100,20 130,60 170,60 140,90 150,140 100,110 50,140 60,90 30,60 70,60" />
  </svg>
</motion.div>

// 反向旋转内圈三角
<motion.div
  animate={{ rotate: [0, -360] }}
  transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
>
  <polygon points="50,15 80,70 20,70" /> {/* 正三角 */}
  <polygon points="50,85 80,30 20,30" /> {/* 倒三角 */}
</motion.div>
\`\`\`

**移动端触控旋转 | Mobile Touch Rotation:**
\`\`\`tsx
// 触摸拖拽旋转功能
const handleTouchMove = (e: TouchEvent) => {
  if (isDragging && lastTouchRef.current !== null) {
    const deltaX = e.touches[0].clientX - lastTouchRef.current
    setDragRotation(prev => prev + deltaX * 0.5)
    lastTouchRef.current = e.touches[0].clientX
  }
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
1. **用户选择**: 用户在 Ring Aura Deck 中点击任意卡牌
2. **索引记录**: 系统记录被选中卡牌的索引 `selectedCardIndex: number`
3. **状态转换**: 阶段从 `formation` 变为 `selected`
4. **卡牌映射**: 使用 `cardIndex % tarotCards.length` 映射到具体卡牌
5. **翻牌延迟**: 卡牌飞到中央后延迟 1 秒开始翻面

\`\`\`tsx
// TarotSphere 主组件中的抽卡处理
const handleCardSelect = (index: number) => {
  setSelectedCardIndex(index)
  setPhase("selected")
  // 延迟翻牌
  setTimeout(() => setIsFlipped(true), 1000)
  // 延迟显示解读面板
  setTimeout(() => setPhase("reading"), 2000)
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

### 7. 核心动效总结 | Core Animations Summary

| 动效 | 描述 | 关键技术 |
|------|------|---------|
| **卡牌漂浮** | 待机时的轻微浮动 | translateY + rotateZ |
| **洗牌爆炸** | 混乱的飞散效果 | 随机位置 + 3D旋转 + 响应式缩放 |
| **环形分布** | 360°均匀分布 + 倾向圆心 | cos/sin + tiltX/tiltY |
| **呼吸膨胀** | 圆环周期性缩放 | scale [1, 1.03, 1] + 6s周期 |
| **光晕脉动** | 多层光环呼吸效果 | 径向渐变 + opacity动画 |
| **极慢旋转** | 命运之轮缓慢转动 | rotate 360° + 180s周期 |
| **悬停浮起** | 卡牌悬停时上浮发光 | translateY -15px + boxShadow增强 |
| **3D翻牌** | 卡牌正反面切换 | rotateY 180deg + backface-visibility |
| **能量尾迹** | 运动时的拖尾效果 | 渐变 + blur + opacity动画 |
| **环绕粒子** | 8个能量粒子轨道运行 | cos/sin 轨迹 + 不同速度 |
| **触摸拖拽** | 移动端旋转控制 | TouchEvent + deltaX |

---

### 8. 状态管理 | State Management

\`\`\`tsx
// 主状态定义 - 简化为单一环形阵列
type Phase = "idle" | "shuffling" | "formation" | "selected" | "reading"

const [phase, setPhase] = useState<Phase>("idle")
const [selectedCardIndex, setSelectedCardIndex] = useState<number | null>(null)
const [isFlipped, setIsFlipped] = useState(false)
\`\`\`

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
│   ├── ring-formation.tsx     # 悬浮星盘环阵 (Ring Aura Deck)
│   ├── selected-card.tsx      # 选中卡牌
│   ├── reading-panel.tsx      # 解读面板
│   ├── magic-background.tsx   # 魔法背景
│   ├── magic-circle.tsx       # 魔法阵
│   ├── particle-field.tsx     # 粒子场
│   └── start-button.tsx       # 开始按钮
├── hooks/
│   └── use-responsive-dimensions.ts  # 响应式尺寸Hook
└── public/
    └── sacred-geometry-*.jpg  # 背景图片
\`\`\`

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
