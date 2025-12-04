"use client"

import { motion } from "framer-motion"
import { Volume2, VolumeX } from "lucide-react"
import { useSound } from "@/lib/sound/sound-manager"

export { SoundToggle }

export default function SoundToggle() {
  const { isMuted, toggleMute } = useSound()

  return (
    <motion.button
      onClick={toggleMute}
      className="flex items-center justify-center w-10 h-10 rounded-full"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      style={{
        background: "rgba(115,242,255,0.1)",
        border: "1px solid rgba(115,242,255,0.3)",
      }}
      title={isMuted ? "Unmute" : "Mute"}
    >
      {isMuted ? <VolumeX className="w-5 h-5 text-[#73F2FF]/60" /> : <Volume2 className="w-5 h-5 text-[#73F2FF]" />}
    </motion.button>
  )
}
