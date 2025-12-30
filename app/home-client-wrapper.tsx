"use client"

import { useState } from "react"
import LandingPage from "@/components/landing-page"
import TarotSphere from "@/components/tarot-sphere"
import SearchParamsHandler from "./search-params-handler"
import { Suspense } from "react"

interface HomeClientWrapperProps {
  initialShowReading?: boolean
  initialSkipIdle?: boolean
}

export default function HomeClientWrapper({ 
  initialShowReading = false, 
  initialSkipIdle = false 
}: HomeClientWrapperProps) {
  const [showReading, setShowReading] = useState(initialShowReading)
  const [skipIdle, setSkipIdle] = useState(initialSkipIdle)

  const handleBack = () => {
    setShowReading(false)
    setSkipIdle(false)
  }

  const handleStartReading = () => {
    setShowReading(true)
  }

  const handleTriggerReading = (skip: boolean) => {
    setShowReading(true)
    setSkipIdle(skip)
  }

  return (
    <>
      <Suspense fallback={null}>
        <SearchParamsHandler onTriggerReading={handleTriggerReading} />
      </Suspense>
      {!showReading ? (
        <LandingPage onStartReading={handleStartReading} />
      ) : (
        <TarotSphere onBack={handleBack} skipIdle={skipIdle} />
      )}
    </>
  )
}
