"use client"

import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"

interface TypewriterTextProps {
  text: string
  speed?: number
  delay?: number
  className?: string
  onComplete?: () => void
}

export default function TypewriterText({
  text,
  speed = 30,
  delay = 0,
  className = "",
  onComplete,
}: TypewriterTextProps) {
  const [displayedText, setDisplayedText] = useState("")
  const [isComplete, setIsComplete] = useState(false)
  const onCompleteRef = useRef(onComplete)
  const hasCompletedRef = useRef(false)

  // Update ref when onComplete changes
  useEffect(() => {
    onCompleteRef.current = onComplete
  }, [onComplete])

  useEffect(() => {
    setDisplayedText("")
    setIsComplete(false)
    hasCompletedRef.current = false

    const startTimeout = setTimeout(() => {
      let currentIndex = 0
      const intervalId = setInterval(() => {
        if (currentIndex < text.length) {
          setDisplayedText(text.slice(0, currentIndex + 1))
          currentIndex++
        } else {
          clearInterval(intervalId)
          setIsComplete(true)
          if (!hasCompletedRef.current) {
            hasCompletedRef.current = true
            onCompleteRef.current?.()
          }
        }
      }, speed)

      return () => clearInterval(intervalId)
    }, delay)

    return () => clearTimeout(startTimeout)
  }, [text, speed, delay]) // Removed onComplete from dependencies

  return (
    <span className={className}>
      {displayedText}
      {!isComplete && (
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.5, repeat: Number.POSITIVE_INFINITY }}
          className="inline-block w-0.5 h-4 bg-[#FF4FD8] ml-0.5 align-middle"
        />
      )}
    </span>
  )
}
