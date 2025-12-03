"use client"

import { motion } from "framer-motion"

interface SelectedCardProps {
  cardIndex: number
  isFlipped: boolean
}

const tarotCards = [
  { name: "The Lovers", nameZh: "恋人" },
  { name: "The Star", nameZh: "星星" },
  { name: "The Moon", nameZh: "月亮" },
  { name: "The Empress", nameZh: "皇后" },
  { name: "Two of Cups", nameZh: "圣杯二" },
  { name: "Ace of Cups", nameZh: "圣杯王牌" },
  { name: "The Sun", nameZh: "太阳" },
  { name: "Temperance", nameZh: "节制" },
  { name: "The World", nameZh: "世界" },
  { name: "Wheel of Fortune", nameZh: "命运之轮" },
  { name: "The High Priestess", nameZh: "女祭司" },
  { name: "Strength", nameZh: "力量" },
  { name: "The Magician", nameZh: "魔术师" },
  { name: "Justice", nameZh: "正义" },
  { name: "The Fool", nameZh: "愚人" },
  { name: "The Hermit", nameZh: "隐士" },
  { name: "Knight of Cups", nameZh: "圣杯骑士" },
  { name: "Queen of Cups", nameZh: "圣杯皇后" },
  { name: "King of Cups", nameZh: "圣杯国王" },
  { name: "Page of Cups", nameZh: "圣杯侍从" },
  { name: "Ten of Cups", nameZh: "圣杯十" },
  { name: "Three of Cups", nameZh: "圣杯三" },
]

export default function SelectedCard({ cardIndex, isFlipped }: SelectedCardProps) {
  const card = tarotCards[cardIndex % tarotCards.length]

  return (
    <motion.div
      className="absolute inset-0 flex items-center justify-center z-30 pointer-events-none"
      style={{ perspective: "1500px" }}
    >
      <motion.div
        className="relative w-[180px] h-[300px] md:w-[220px] md:h-[367px]"
        initial={{
          scale: 0.5,
          x: (Math.random() - 0.5) * 400,
          y: (Math.random() - 0.5) * 300,
          opacity: 0,
        }}
        animate={{
          scale: 1,
          x: 0,
          y: 0,
          opacity: 1,
          rotateY: isFlipped ? 180 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 15,
          rotateY: { duration: 0.8, ease: "easeInOut" },
        }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Card Back */}
        <motion.div
          className="absolute inset-0 rounded-xl overflow-hidden"
          style={{
            backfaceVisibility: "hidden",
          }}
          animate={{
            y: [0, -5, 0],
          }}
          transition={{
            duration: 3,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        >
          <div
            className="w-full h-full rounded-xl border-2 border-[#FF4FD8]/50 overflow-hidden"
            style={{
              background: "linear-gradient(135deg, #1a0a2e 0%, #0f0a20 50%, #1a0a2e 100%)",
              boxShadow: `
                0 0 40px rgba(255,79,216,0.5),
                0 0 80px rgba(115,242,255,0.3),
                inset 0 0 40px rgba(255,79,216,0.1)
              `,
            }}
          >
            <div className="w-full h-full flex items-center justify-center p-4">
              <div
                className="w-full h-full rounded-lg border border-[#73F2FF]/30 flex items-center justify-center"
                style={{
                  background: "radial-gradient(circle, rgba(115,242,255,0.1) 0%, transparent 70%)",
                }}
              >
                <svg viewBox="0 0 100 100" className="w-24 h-24 opacity-70">
                  <defs>
                    <linearGradient id="selectedCardGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#FF4FD8" />
                      <stop offset="100%" stopColor="#73F2FF" />
                    </linearGradient>
                  </defs>
                  <circle cx="50" cy="50" r="45" fill="none" stroke="url(#selectedCardGradient)" strokeWidth="1.5" />
                  <circle cx="50" cy="50" r="35" fill="none" stroke="#FF4FD8" strokeWidth="0.5" />
                  <polygon
                    points="50,10 61,40 95,40 68,58 79,90 50,70 21,90 32,58 5,40 39,40"
                    fill="none"
                    stroke="url(#selectedCardGradient)"
                    strokeWidth="1"
                  />
                </svg>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Card Front */}
        <motion.div
          className="absolute inset-0 rounded-xl overflow-hidden"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
          animate={{
            y: [0, -5, 0],
          }}
          transition={{
            duration: 3,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        >
          <div
            className="w-full h-full rounded-xl border-2 border-[#73F2FF]/60 overflow-hidden"
            style={{
              background: "linear-gradient(135deg, #1a0a2e 0%, #150820 50%, #1a0a2e 100%)",
              boxShadow: `
                0 0 50px rgba(115,242,255,0.5),
                0 0 100px rgba(255,79,216,0.3),
                inset 0 0 40px rgba(115,242,255,0.1)
              `,
            }}
          >
            {/* Card illustration placeholder */}
            <div className="w-full h-full flex flex-col items-center justify-center p-4">
              <div
                className="w-full flex-1 rounded-lg mb-3 flex items-center justify-center"
                style={{
                  background: `url('/--card-name--tarot-card-mystical-illustration.jpg') center/cover`,
                  boxShadow: "inset 0 0 20px rgba(115,242,255,0.2)",
                }}
              >
                <div
                  className="w-full h-full rounded-lg flex items-center justify-center backdrop-blur-[1px]"
                  style={{
                    background: "radial-gradient(circle, transparent 30%, rgba(15,10,32,0.3) 100%)",
                  }}
                >
                  <span className="text-6xl opacity-80">♡</span>
                </div>
              </div>
              <div className="text-center">
                <p className="text-[#73F2FF] text-lg font-semibold tracking-wider">{card.name}</p>
                <p className="text-[#FF4FD8] text-sm mt-1">{card.nameZh}</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Glow effect */}
        <motion.div
          className="absolute inset-0 rounded-xl pointer-events-none"
          animate={{
            boxShadow: [
              "0 0 40px rgba(255,79,216,0.4), 0 0 80px rgba(115,242,255,0.2)",
              "0 0 60px rgba(255,79,216,0.6), 0 0 120px rgba(115,242,255,0.3)",
              "0 0 40px rgba(255,79,216,0.4), 0 0 80px rgba(115,242,255,0.2)",
            ],
          }}
          transition={{
            duration: 2,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      </motion.div>

      {/* Energy trail particles */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-full"
          initial={{
            x: (Math.random() - 0.5) * 300,
            y: (Math.random() - 0.5) * 200,
            opacity: 0,
            scale: 0,
          }}
          animate={{
            x: 0,
            y: 0,
            opacity: [0, 1, 0],
            scale: [0, 1.5, 0],
          }}
          transition={{
            duration: 1,
            delay: i * 0.1,
            ease: "easeOut",
          }}
          style={{
            background: i % 2 === 0 ? "#FF4FD8" : "#73F2FF",
            boxShadow: i % 2 === 0 ? "0 0 20px #FF4FD8" : "0 0 20px #73F2FF",
          }}
        />
      ))}
    </motion.div>
  )
}
