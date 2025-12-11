"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { List, ChevronDown, ChevronUp } from "lucide-react"

interface TOCItem {
  id: string
  title: string
  level: number
}

interface TOCGeneratorProps {
  headings: TOCItem[]
  lang?: "en" | "ro" | "zh"
}

const tocLabels = {
  en: "Table of Contents",
  ro: "Cuprins",
  zh: "目录",
}

export default function TOCGenerator({ headings, lang = "en" }: TOCGeneratorProps) {
  const [isOpen, setIsOpen] = useState(true)
  const [activeId, setActiveId] = useState<string>("")

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      { rootMargin: "-20% 0% -35% 0%" },
    )

    headings.forEach((heading) => {
      const element = document.getElementById(heading.id)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [headings])

  const scrollToHeading = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  if (headings.length === 0) return null

  return (
    <motion.nav
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      className="sticky top-24 p-4 rounded-xl"
      style={{
        background: "linear-gradient(135deg, rgba(26,10,46,0.8) 0%, rgba(15,10,32,0.9) 100%)",
        border: "1px solid rgba(255,79,216,0.2)",
      }}
    >
      <button onClick={() => setIsOpen(!isOpen)} className="flex items-center justify-between w-full text-left">
        <span className="flex items-center gap-2 text-[#73F2FF] font-medium">
          <List className="w-4 h-4" />
          {tocLabels[lang]}
        </span>
        {isOpen ? (
          <ChevronUp className="w-4 h-4 text-foreground/50" />
        ) : (
          <ChevronDown className="w-4 h-4 text-foreground/50" />
        )}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.ul
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="mt-4 space-y-2 overflow-hidden"
          >
            {headings.map((heading) => (
              <li key={heading.id} style={{ paddingLeft: `${(heading.level - 2) * 12}px` }}>
                <button
                  onClick={() => scrollToHeading(heading.id)}
                  className={`text-sm text-left w-full py-1 transition-colors ${
                    activeId === heading.id ? "text-[#FF4FD8] font-medium" : "text-foreground/60 hover:text-[#73F2FF]"
                  }`}
                >
                  {heading.title}
                </button>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

export { TOCGenerator }
