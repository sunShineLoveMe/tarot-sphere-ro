"use client"

import { createContext, useContext, useState, useCallback, useRef, type ReactNode } from "react"

interface SoundManagerContextType {
  isMuted: boolean
  toggleMute: () => void
  playSound: (soundType: SoundType) => void
}

export type SoundType = "shuffle" | "flip" | "exit" | "loading"

const SOUND_URLS: Record<SoundType, string> = {
  shuffle: "https://assets.mixkit.co/sfx/preview/mixkit-shuffling-cards-2909.wav",
  flip: "https://soundeffect-lab.info/sound/anime/mp3/bound-wood1.mp3",
  exit: "https://soundeffect-lab.info/sound/anime/mp3/attention1.mp3",
  loading: "https://assets.mixkit.co/sfx/preview/mixkit-mystic-choir-pad-2896.wav",
}

const SoundManagerContext = createContext<SoundManagerContextType | null>(null)

export function SoundManagerProvider({ children }: { children: ReactNode }) {
  const [isMuted, setIsMuted] = useState(false)
  const audioRefs = useRef<Map<SoundType, HTMLAudioElement>>(new Map())
  const loadingAudioRef = useRef<HTMLAudioElement | null>(null)

  const toggleMute = useCallback(() => {
    setIsMuted((prev) => !prev)
    // Stop loading sound if muting
    if (!isMuted && loadingAudioRef.current) {
      loadingAudioRef.current.pause()
      loadingAudioRef.current.currentTime = 0
    }
  }, [isMuted])

  const playSound = useCallback(
    (soundType: SoundType) => {
      if (isMuted) return

      try {
        // For loading sound, handle looping
        if (soundType === "loading") {
          if (loadingAudioRef.current) {
            loadingAudioRef.current.pause()
            loadingAudioRef.current.currentTime = 0
          }
          const audio = new Audio(SOUND_URLS[soundType])
          audio.loop = true
          audio.volume = 0.3
          loadingAudioRef.current = audio
          audio.play().catch(() => {})
          return
        }

        // For other sounds
        let audio = audioRefs.current.get(soundType)
        if (!audio) {
          audio = new Audio(SOUND_URLS[soundType])
          audioRefs.current.set(soundType, audio)
        }
        audio.currentTime = 0
        audio.volume = soundType === "shuffle" ? 0.4 : 0.5
        audio.play().catch(() => {})
      } catch {
        // Silently fail - sound is enhancement only
      }
    },
    [isMuted],
  )

  return (
    <SoundManagerContext.Provider value={{ isMuted, toggleMute, playSound }}>{children}</SoundManagerContext.Provider>
  )
}

export function useSound() {
  const context = useContext(SoundManagerContext)
  if (!context) {
    return {
      isMuted: false,
      toggleMute: () => {},
      playSound: () => {},
    }
  }
  return context
}

export function stopLoadingSound() {
  // This is a utility to stop loading sound from outside
}
