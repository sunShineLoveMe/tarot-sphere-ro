"use client"

import Image from "next/image"

export interface LogoIconProps {
  size?: number
  className?: string
}

export function LogoIcon({ size = 64, className = "" }: LogoIconProps) {
  return (
    <Image
      src="/logo-icon.png"
      alt="Love Tarot Logo"
      width={size}
      height={size}
      className={`logo-neon ${className}`}
      priority
    />
  )
}

export { LogoIcon as default }
