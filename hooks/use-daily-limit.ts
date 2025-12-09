"use client"

import { useState, useEffect, useCallback } from "react"

// Daily limit configuration
const MAX_DAILY_DRAWS = 2
const STORAGE_KEY = "tarot_daily_limit"
const SESSION_KEY = "tarot_session_limit"

// Generate a lightweight browser fingerprint
function generateFingerprint(): string {
  if (typeof window === "undefined") return "server"
  
  const ua = navigator.userAgent || ""
  const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone || ""
  const language = navigator.language || ""
  const screenRes = `${window.screen.width}x${window.screen.height}`
  
  // Simple hash for fingerprint
  const raw = `${ua}|${timezone}|${language}|${screenRes}`
  let hash = 0
  for (let i = 0; i < raw.length; i++) {
    const char = raw.charCodeAt(i)
    hash = ((hash << 5) - hash) + char
    hash = hash & hash // Convert to 32bit integer
  }
  return hash.toString(36)
}

// Get today's date in YYYY-MM-DD format (local time)
function getTodayDate(): string {
  const now = new Date()
  return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}-${String(now.getDate()).padStart(2, "0")}`
}

interface LimitData {
  dailyDrawCount: number
  lastDrawDate: string
  fingerprint: string
}

function getDefaultData(): LimitData {
  return {
    dailyDrawCount: 0,
    lastDrawDate: getTodayDate(),
    fingerprint: generateFingerprint(),
  }
}

// Read limit data from storage
function readLimitData(): LimitData {
  if (typeof window === "undefined") return getDefaultData()
  
  try {
    // Try localStorage first
    const localData = localStorage.getItem(STORAGE_KEY)
    if (localData) {
      const parsed = JSON.parse(localData) as LimitData
      return parsed
    }
    
    // Fallback to sessionStorage
    const sessionData = sessionStorage.getItem(SESSION_KEY)
    if (sessionData) {
      const parsed = JSON.parse(sessionData) as LimitData
      return parsed
    }
  } catch {
    // Storage access failed, return default
  }
  
  return getDefaultData()
}

// Write limit data to both storages
function writeLimitData(data: LimitData): void {
  if (typeof window === "undefined") return
  
  try {
    const jsonData = JSON.stringify(data)
    localStorage.setItem(STORAGE_KEY, jsonData)
    sessionStorage.setItem(SESSION_KEY, jsonData)
  } catch {
    // Storage write failed, silently ignore
  }
}

export interface DailyLimitHook {
  canDraw: boolean
  remainingCount: number
  dailyDrawCount: number
  maxDailyDraws: number
  increaseDrawCount: () => void
  isSharePage: boolean
  isLoading: boolean  // True while initializing, must wait for this to be false before checking canDraw
}

export function useDailyLimit(): DailyLimitHook {
  const [limitData, setLimitData] = useState<LimitData>(getDefaultData)
  const [isSharePage, setIsSharePage] = useState(false)
  const [isInitialized, setIsInitialized] = useState(false)

  // Initialize on mount
  useEffect(() => {
    const data = readLimitData()
    const today = getTodayDate()
    const currentFingerprint = generateFingerprint()
    
    // Check if we need to reset (new day or different fingerprint tampering)
    if (data.lastDrawDate !== today) {
      // New day - reset count
      const newData: LimitData = {
        dailyDrawCount: 0,
        lastDrawDate: today,
        fingerprint: currentFingerprint,
      }
      setLimitData(newData)
      writeLimitData(newData)
    } else if (data.fingerprint !== currentFingerprint) {
      // Fingerprint mismatch - possible tampering, keep the higher count
      const newData: LimitData = {
        ...data,
        fingerprint: currentFingerprint,
        dailyDrawCount: Math.max(data.dailyDrawCount, MAX_DAILY_DRAWS - 1),
      }
      setLimitData(newData)
      writeLimitData(newData)
    } else {
      setLimitData(data)
    }
    
    // Check if this is a share page
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search)
      setIsSharePage(params.has("share") || params.get("share") === "1")
    }
    
    setIsInitialized(true)
  }, [])

  // Calculate remaining draws
  const remainingCount = Math.max(0, MAX_DAILY_DRAWS - limitData.dailyDrawCount)
  // Only return true for canDraw if initialized AND has remaining draws AND not share page
  const canDraw = isInitialized && remainingCount > 0 && !isSharePage

  // Increase draw count
  const increaseDrawCount = useCallback(() => {
    if (!canDraw) return
    
    const newData: LimitData = {
      ...limitData,
      dailyDrawCount: limitData.dailyDrawCount + 1,
      lastDrawDate: getTodayDate(),
    }
    setLimitData(newData)
    writeLimitData(newData)
  }, [canDraw, limitData])

  return {
    canDraw,
    remainingCount,
    dailyDrawCount: limitData.dailyDrawCount,
    maxDailyDraws: MAX_DAILY_DRAWS,
    increaseDrawCount,
    isSharePage,
    isLoading: !isInitialized,  // Return loading state
  }
}
