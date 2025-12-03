"use client"

import { useState, useEffect, useMemo } from "react"

export interface ResponsiveDimensions {
  // Screen info
  width: number
  height: number
  minDimension: number
  isMobile: boolean
  isTablet: boolean
  isDesktop: boolean

  // Card dimensions (maintains 3:5 ratio)
  cardWidth: number
  cardHeight: number

  // Sphere/Ring radius
  sphereRadius: number
  ringRadius: number

  // Container size
  formationSize: number

  // Spacing
  spacing: {
    sm: number
    md: number
    lg: number
  }

  // Animation scale factor
  animationScale: number
}

export function useResponsiveDimensions(): ResponsiveDimensions {
  const [dimensions, setDimensions] = useState({
    width: 1024,
    height: 768,
  })

  useEffect(() => {
    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return useMemo(() => {
    const { width, height } = dimensions
    const minDimension = Math.min(width, height)

    // Breakpoint detection
    const isMobile = width < 768
    const isTablet = width >= 768 && width < 1280
    const isDesktop = width >= 1280

    // Card height based on viewport height (3:5 ratio)
    // Desktop: 18-22%, Tablet: 20-25%, Mobile: 27-32%
    let cardHeightPercent: number
    if (isMobile) {
      cardHeightPercent = 0.28 // 28% of vh
    } else if (isTablet) {
      cardHeightPercent = 0.22 // 22% of vh
    } else {
      cardHeightPercent = 0.2 // 20% of vh
    }

    const cardHeight = Math.min(height * cardHeightPercent, 300)
    const cardWidth = cardHeight * 0.6 // 3:5 ratio

    // Sphere/Ring radius based on screen size
    // Large: 35-42%, Medium: 30-38%, Small: 40-48%
    let radiusPercent: number
    if (isMobile) {
      radiusPercent = 0.44 // Larger on mobile for immersion
    } else if (isTablet) {
      radiusPercent = 0.34
    } else {
      radiusPercent = 0.38
    }

    const sphereRadius = minDimension * radiusPercent
    const ringRadius = minDimension * radiusPercent

    // Formation container size
    const formationSize = minDimension * (isMobile ? 0.9 : 0.8)

    // Responsive spacing
    const baseSpacing = isMobile ? 12 : isTablet ? 18 : 24
    const spacing = {
      sm: baseSpacing,
      md: baseSpacing * 1.5,
      lg: baseSpacing * 2.5,
    }

    // Animation scale factor (for position calculations)
    const animationScale = minDimension / 1000

    return {
      width,
      height,
      minDimension,
      isMobile,
      isTablet,
      isDesktop,
      cardWidth,
      cardHeight,
      sphereRadius,
      ringRadius,
      formationSize,
      spacing,
      animationScale,
    }
  }, [dimensions])
}
