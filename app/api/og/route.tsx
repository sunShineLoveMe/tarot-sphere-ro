import { ImageResponse } from "@vercel/og"
import { NextRequest } from "next/server"

export const runtime = "edge"

// Card name mapping
const cardNames: Record<number, string> = {
  0: "The Fool",
  1: "The Magician",
  2: "The High Priestess",
  3: "The Empress",
  4: "The Emperor",
  5: "The Hierophant",
  6: "The Lovers",
  7: "The Chariot",
  8: "Strength",
  9: "The Hermit",
  10: "Wheel of Fortune",
  11: "Justice",
  12: "The Hanged Man",
  13: "Death",
  14: "Temperance",
  15: "The Devil",
  16: "The Tower",
  17: "The Star",
  18: "The Moon",
  19: "The Sun",
  20: "Judgement",
  21: "The World",
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    
    // Parse cards from query params
    const cardsParam = searchParams.get("cards")
    const question = searchParams.get("question") || ""
    
    let cards: { index: number; reversed: boolean; position: string }[] = []
    
    if (cardsParam) {
      try {
        cards = JSON.parse(cardsParam)
      } catch {
        // Use default cards if parsing fails
        cards = [
          { index: 6, reversed: false, position: "past" },
          { index: 10, reversed: false, position: "present" },
          { index: 21, reversed: false, position: "future" },
        ]
      }
    }

    // Ensure we have 3 cards
    if (cards.length !== 3) {
      cards = [
        { index: 6, reversed: false, position: "past" },
        { index: 10, reversed: false, position: "present" },
        { index: 21, reversed: false, position: "future" },
      ]
    }

    // Sort by position
    const pastCard = cards.find(c => c.position === "past") || cards[0]
    const presentCard = cards.find(c => c.position === "present") || cards[1]
    const futureCard = cards.find(c => c.position === "future") || cards[2]

    return new ImageResponse(
      (
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            background: "linear-gradient(135deg, #0a0612 0%, #1a0a2e 50%, #0d0618 100%)",
            fontFamily: "Inter, sans-serif",
            position: "relative",
          }}
        >
          {/* Background Pattern */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: "radial-gradient(circle at 50% 50%, rgba(255, 79, 216, 0.15) 0%, transparent 50%)",
            }}
          />
          
          {/* Sacred Geometry Lines */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              opacity: 0.1,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <svg width="800" height="600" viewBox="0 0 800 600">
              <circle cx="400" cy="300" r="200" fill="none" stroke="#73F2FF" strokeWidth="1" />
              <circle cx="400" cy="300" r="150" fill="none" stroke="#FF4FD8" strokeWidth="1" />
              <circle cx="400" cy="300" r="100" fill="none" stroke="#A855F7" strokeWidth="1" />
            </svg>
          </div>

          {/* Logo & Title */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: 30,
              gap: 16,
            }}
          >
            <div
              style={{
                width: 48,
                height: 48,
                borderRadius: "50%",
                background: "linear-gradient(135deg, #FF4FD8, #73F2FF)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <svg width="28" height="28" viewBox="0 0 24 24" fill="white">
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
              </svg>
            </div>
            <span
              style={{
                fontSize: 42,
                fontWeight: 700,
                fontStyle: "italic",
                background: "linear-gradient(135deg, #FF4FD8, #73F2FF)",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              Love Tarot
            </span>
          </div>

          {/* Cards Container */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 32,
              marginBottom: 30,
            }}
          >
            {/* Past Card */}
            <CardDisplay
              label="PAST"
              cardName={cardNames[pastCard.index] || "Unknown"}
              reversed={pastCard.reversed}
              color="#A855F7"
            />

            {/* Present Card */}
            <CardDisplay
              label="PRESENT"
              cardName={cardNames[presentCard.index] || "Unknown"}
              reversed={presentCard.reversed}
              color="#FF4FD8"
              isCenter
            />

            {/* Future Card */}
            <CardDisplay
              label="FUTURE"
              cardName={cardNames[futureCard.index] || "Unknown"}
              reversed={futureCard.reversed}
              color="#73F2FF"
            />
          </div>

          {/* Question (if provided) */}
          {question && (
            <div
              style={{
                maxWidth: 600,
                textAlign: "center",
                color: "rgba(255, 255, 255, 0.7)",
                fontSize: 18,
                fontStyle: "italic",
                marginBottom: 20,
              }}
            >
              "{question.slice(0, 80)}{question.length > 80 ? "..." : ""}"
            </div>
          )}

          {/* Tagline */}
          <div
            style={{
              color: "rgba(115, 242, 255, 0.8)",
              fontSize: 16,
              letterSpacing: 3,
              textTransform: "uppercase",
            }}
          >
            AI-Powered Tarot Reading
          </div>

          {/* URL */}
          <div
            style={{
              position: "absolute",
              bottom: 24,
              color: "rgba(255, 255, 255, 0.5)",
              fontSize: 14,
            }}
          >
            www.tarotromania.com
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    )
  } catch (error) {
    console.error("OG Image generation error:", error)
    
    // Return a simple fallback image
    return new ImageResponse(
      (
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            background: "linear-gradient(135deg, #0a0612, #1a0a2e)",
            color: "white",
          }}
        >
          <span style={{ fontSize: 48, fontWeight: 700 }}>Love Tarot</span>
          <span style={{ fontSize: 24, opacity: 0.7, marginTop: 16 }}>
            AI-Powered Tarot Reading
          </span>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    )
  }
}

// Card Display Component
function CardDisplay({
  label,
  cardName,
  reversed,
  color,
  isCenter,
}: {
  label: string
  cardName: string
  reversed: boolean
  color: string
  isCenter?: boolean
}) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        transform: isCenter ? "scale(1.1)" : "scale(1)",
      }}
    >
      {/* Position Label */}
      <div
        style={{
          color: color,
          fontSize: 14,
          fontWeight: 600,
          letterSpacing: 2,
          marginBottom: 12,
        }}
      >
        {label}
      </div>

      {/* Card Frame */}
      <div
        style={{
          width: 140,
          height: 200,
          borderRadius: 12,
          background: "linear-gradient(145deg, #1a0a2e, #0d0618)",
          border: `2px solid ${color}`,
          boxShadow: `0 0 30px ${color}40`,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: 12,
          transform: reversed ? "rotate(180deg)" : "none",
        }}
      >
        {/* Card Inner */}
        <div
          style={{
            width: "100%",
            height: "100%",
            border: `1px solid ${color}40`,
            borderRadius: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            background: `radial-gradient(circle, ${color}10 0%, transparent 70%)`,
          }}
        >
          {/* Star Icon */}
          <svg width="32" height="32" viewBox="0 0 24 24" fill={color} style={{ opacity: 0.8 }}>
            <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
          </svg>
        </div>
      </div>

      {/* Card Name */}
      <div
        style={{
          color: "white",
          fontSize: 14,
          fontWeight: 500,
          marginTop: 12,
          textAlign: "center",
          maxWidth: 140,
        }}
      >
        {cardName}
      </div>

      {/* Reversed indicator */}
      {reversed && (
        <div
          style={{
            color: color,
            fontSize: 11,
            marginTop: 4,
          }}
        >
          (Reversed)
        </div>
      )}
    </div>
  )
}
