"use client"

import { useState, useCallback } from "react"
import { AnimatePresence } from "framer-motion"
import MagicBackground from "./magic-background"
import MagicCircle from "./magic-circle"
import CardStack from "./card-stack"
import ShufflePhase from "./shuffle-phase"
import SphereFormation from "./sphere-formation"
import RingFormation from "./ring-formation"
import SelectedCard from "./selected-card"
import ReadingPanel from "./reading-panel"
import StartButton from "./start-button"
import ParticleField from "./particle-field"
import FormationToggle from "./formation-toggle"

export type Phase = "idle" | "shuffling" | "formation" | "selected" | "reading"
export type FormationType = "sphere" | "ring"

export default function TarotSphere() {
  const [phase, setPhase] = useState<Phase>("idle")
  const [formationType, setFormationType] = useState<FormationType>("sphere")
  const [selectedCardIndex, setSelectedCardIndex] = useState<number | null>(null)
  const [isFlipped, setIsFlipped] = useState(false)

  const handleStartShuffle = useCallback(() => {
    setPhase("shuffling")
    setTimeout(() => {
      setPhase("formation")
    }, 4000)
  }, [])

  const handleCardSelect = useCallback(
    (index: number) => {
      if (phase !== "formation") return
      setSelectedCardIndex(index)
      setPhase("selected")
      setTimeout(() => {
        setIsFlipped(true)
        setTimeout(() => {
          setPhase("reading")
        }, 1500)
      }, 1500)
    },
    [phase],
  )

  const handleReset = useCallback(() => {
    setPhase("idle")
    setSelectedCardIndex(null)
    setIsFlipped(false)
  }, [])

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Mystical Background */}
      <MagicBackground />

      {/* Particle Field */}
      <ParticleField intensity={phase === "shuffling" ? 2 : 1} />

      {/* Central Magic Circle */}
      <MagicCircle
        isActive={phase !== "idle"}
        intensity={phase === "shuffling" ? "high" : phase === "reading" ? "elevated" : "normal"}
      />

      {/* Phase: Idle - Card Stack */}
      <AnimatePresence>
        {phase === "idle" && (
          <>
            <CardStack />
            <StartButton onStart={handleStartShuffle} />
          </>
        )}
      </AnimatePresence>

      {/* Phase: Shuffling */}
      <AnimatePresence>{phase === "shuffling" && <ShufflePhase />}</AnimatePresence>

      {/* Phase: Formation */}
      <AnimatePresence>
        {phase === "formation" && (
          <>
            <FormationToggle current={formationType} onChange={setFormationType} />
            {formationType === "sphere" ? (
              <SphereFormation onCardSelect={handleCardSelect} />
            ) : (
              <RingFormation onCardSelect={handleCardSelect} />
            )}
          </>
        )}
      </AnimatePresence>

      {/* Phase: Selected Card */}
      <AnimatePresence>
        {(phase === "selected" || phase === "reading") && selectedCardIndex !== null && (
          <SelectedCard cardIndex={selectedCardIndex} isFlipped={isFlipped} />
        )}
      </AnimatePresence>

      {/* Phase: Reading Panel */}
      <AnimatePresence>{phase === "reading" && <ReadingPanel onReset={handleReset} />}</AnimatePresence>

      {/* Title */}
      <div className="absolute top-8 left-1/2 -translate-x-1/2 z-50 text-center">
        <h1 className="text-3xl md:text-4xl font-semibold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-[#FF4FD8] via-[#73F2FF] to-[#FF4FD8] drop-shadow-[0_0_30px_rgba(255,79,216,0.5)]">
          AI Love Tarot
        </h1>
        <p className="text-sm text-[#73F2FF]/70 mt-2 tracking-widest uppercase">Divine Your Heart&apos;s Path</p>
      </div>
    </div>
  )
}
