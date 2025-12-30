import { Suspense } from "react"
import HomeClientWrapper from "./home-client-wrapper"

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden relative bg-background">
      <Suspense fallback={<div className="min-h-screen bg-background" />}>
        <HomeClientWrapper />
      </Suspense>
    </main>
  )
}
