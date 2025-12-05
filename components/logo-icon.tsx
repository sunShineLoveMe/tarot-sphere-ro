"use client"

export interface LogoIconProps {
  size?: number
  className?: string
}

export function LogoIcon({ size = 64, className = "" }: LogoIconProps) {
  // Generate concentric circle motifs for the outer ring
  const generateConcentricMotif = (cx: number, cy: number, color: string, scale = 1) => (
    <>
      <circle cx={cx} cy={cy} r={14 * scale} stroke={color} strokeWidth="1.5" fill="none" opacity="0.9" />
      <circle cx={cx} cy={cy} r={10 * scale} stroke={color} strokeWidth="1.2" fill="none" opacity="0.7" />
      <circle cx={cx} cy={cy} r={6 * scale} stroke={color} strokeWidth="1" fill="none" opacity="0.5" />
      <circle cx={cx} cy={cy} r={3 * scale} stroke={color} strokeWidth="0.8" fill="none" opacity="0.4" />
    </>
  )

  // Calculate positions for 12 motifs around the outer ring
  const outerMotifs = Array.from({ length: 12 }, (_, i) => {
    const angle = (i * 30 - 90) * (Math.PI / 180)
    const radius = 230
    const cx = 256 + Math.cos(angle) * radius
    const cy = 256 + Math.sin(angle) * radius
    // Transition from pink (left) to cyan (right)
    const pinkWeight = Math.max(0, -Math.cos(angle))
    const cyanWeight = Math.max(0, Math.cos(angle))
    const color = pinkWeight > cyanWeight ? "#FF6BD5" : cyanWeight > pinkWeight ? "#66EFFF" : "url(#neonGradient)"
    return { cx, cy, color, angle }
  })

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 512 512"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`logo-neon ${className}`}
    >
      <defs>
        {/* Main gradient from pink to cyan */}
        <linearGradient id="neonGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FF6BD5" />
          <stop offset="100%" stopColor="#66EFFF" />
        </linearGradient>

        {/* Pink-dominant gradient for crescent */}
        <linearGradient id="pinkGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FF6BD5" />
          <stop offset="70%" stopColor="#AA55CC" />
          <stop offset="100%" stopColor="#66EFFF" />
        </linearGradient>

        {/* Cyan-dominant gradient */}
        <linearGradient id="cyanGradient" x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#66EFFF" />
          <stop offset="70%" stopColor="#55AADD" />
          <stop offset="100%" stopColor="#FF6BD5" />
        </linearGradient>

        {/* Star center glow */}
        <radialGradient id="starGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="1" />
          <stop offset="30%" stopColor="#66EFFF" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#66EFFF" stopOpacity="0" />
        </radialGradient>

        {/* Inner glow for star fill */}
        <radialGradient id="starFill" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#66EFFF" stopOpacity="0.6" />
          <stop offset="50%" stopColor="#66EFFF" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#66EFFF" stopOpacity="0.1" />
        </radialGradient>
      </defs>

      {/* === OUTER DECORATIVE RING === */}
      {/* Main outer circle */}
      <circle
        cx="256"
        cy="256"
        r="245"
        stroke="url(#neonGradient)"
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
      />

      {/* Second outer circle */}
      <circle
        cx="256"
        cy="256"
        r="215"
        stroke="url(#neonGradient)"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
        opacity="0.8"
      />

      {/* 12 concentric circle motifs around the outer ring */}
      {outerMotifs.map((motif, i) => (
        <g key={i}>
          {generateConcentricMotif(
            motif.cx,
            motif.cy,
            typeof motif.color === "string" && motif.color.startsWith("#") ? motif.color : "#AA88DD",
            1,
          )}
        </g>
      ))}

      {/* === DECORATIVE ARCS BETWEEN RINGS (Sacred Geometry Loops) === */}
      {/* Left side arcs (pink) */}
      <path
        d="M 60 180 Q 30 220 30 256 Q 30 292 60 332"
        stroke="#FF6BD5"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
        opacity="0.6"
      />
      <path
        d="M 75 150 Q 45 200 45 256 Q 45 312 75 362"
        stroke="#FF6BD5"
        strokeWidth="1.2"
        strokeLinecap="round"
        fill="none"
        opacity="0.4"
      />
      <path
        d="M 90 120 C 50 180 50 332 90 392"
        stroke="#FF6BD5"
        strokeWidth="1"
        strokeLinecap="round"
        fill="none"
        opacity="0.3"
      />

      {/* Right side arcs (cyan) */}
      <path
        d="M 452 180 Q 482 220 482 256 Q 482 292 452 332"
        stroke="#66EFFF"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
        opacity="0.6"
      />
      <path
        d="M 437 150 Q 467 200 467 256 Q 467 312 437 362"
        stroke="#66EFFF"
        strokeWidth="1.2"
        strokeLinecap="round"
        fill="none"
        opacity="0.4"
      />
      <path
        d="M 422 120 C 462 180 462 332 422 392"
        stroke="#66EFFF"
        strokeWidth="1"
        strokeLinecap="round"
        fill="none"
        opacity="0.3"
      />

      {/* Top arcs */}
      <path
        d="M 180 60 Q 220 30 256 30 Q 292 30 332 60"
        stroke="url(#neonGradient)"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
        opacity="0.5"
      />
      <path
        d="M 150 75 Q 200 45 256 45 Q 312 45 362 75"
        stroke="url(#neonGradient)"
        strokeWidth="1.2"
        strokeLinecap="round"
        fill="none"
        opacity="0.35"
      />

      {/* Bottom arcs */}
      <path
        d="M 180 452 Q 220 482 256 482 Q 292 482 332 452"
        stroke="url(#neonGradient)"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
        opacity="0.5"
      />
      <path
        d="M 150 437 Q 200 467 256 467 Q 312 467 362 437"
        stroke="url(#neonGradient)"
        strokeWidth="1.2"
        strokeLinecap="round"
        fill="none"
        opacity="0.35"
      />

      {/* === SPIRAL DECORATIONS IN CORNERS === */}
      {/* Top-left spiral */}
      <path
        d="M 100 100 Q 80 120 85 140 Q 90 160 110 155 Q 130 150 125 130"
        stroke="#FF6BD5"
        strokeWidth="1.2"
        strokeLinecap="round"
        fill="none"
        opacity="0.5"
      />
      {/* Top-right spiral */}
      <path
        d="M 412 100 Q 432 120 427 140 Q 422 160 402 155 Q 382 150 387 130"
        stroke="#66EFFF"
        strokeWidth="1.2"
        strokeLinecap="round"
        fill="none"
        opacity="0.5"
      />
      {/* Bottom-left spiral */}
      <path
        d="M 100 412 Q 80 392 85 372 Q 90 352 110 357 Q 130 362 125 382"
        stroke="#FF6BD5"
        strokeWidth="1.2"
        strokeLinecap="round"
        fill="none"
        opacity="0.5"
      />
      {/* Bottom-right spiral */}
      <path
        d="M 412 412 Q 432 392 427 372 Q 422 352 402 357 Q 382 362 387 382"
        stroke="#66EFFF"
        strokeWidth="1.2"
        strokeLinecap="round"
        fill="none"
        opacity="0.5"
      />

      {/* === INNER MAGICAL CIRCLE === */}
      <circle
        cx="256"
        cy="256"
        r="175"
        stroke="url(#neonGradient)"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
        opacity="0.7"
      />
      <circle
        cx="256"
        cy="256"
        r="165"
        stroke="url(#neonGradient)"
        strokeWidth="1.2"
        strokeLinecap="round"
        fill="none"
        opacity="0.4"
      />

      {/* === CRESCENT MOON (Bold, thick, on the right) === */}
      {/* Main crescent - outer arc */}
      <path
        d="M 290 100 
           A 175 175 0 1 1 290 412
           A 120 120 0 1 0 290 100"
        stroke="url(#cyanGradient)"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      {/* Secondary crescent - inner arc for depth */}
      <path
        d="M 285 115 
           A 160 160 0 1 1 285 397
           A 105 105 0 1 0 285 115"
        stroke="url(#pinkGradient)"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        opacity="0.7"
      />
      {/* Third crescent layer */}
      <path
        d="M 280 130 
           A 145 145 0 1 1 280 382
           A 90 90 0 1 0 280 130"
        stroke="#66EFFF"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        opacity="0.4"
      />

      {/* === 8-POINTED STAR (Compass Rose Style) === */}
      {/* Main 4 cardinal points (longer) */}
      <polygon
        points="256,166 268,238 338,256 268,274 256,346 244,274 174,256 244,238"
        stroke="#66EFFF"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="url(#starFill)"
      />

      {/* Diagonal 4 points (slightly shorter) */}
      <polygon
        points="256,190 291,221 322,256 291,291 256,322 221,291 190,256 221,221"
        stroke="url(#neonGradient)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />

      {/* Inner star outline */}
      <polygon
        points="256,205 278,232 305,256 278,280 256,307 234,280 207,256 234,232"
        stroke="#FF6BD5"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        opacity="0.6"
      />

      {/* Central bright glow */}
      <circle cx="256" cy="256" r="20" fill="url(#starGlow)" />
      <circle cx="256" cy="256" r="10" fill="#66EFFF" opacity="0.9" />
      <circle cx="256" cy="256" r="5" fill="white" opacity="1" />

      {/* === SPARKLE DOTS (scattered magic particles) === */}
      <circle cx="80" cy="200" r="3" fill="#FF6BD5" opacity="0.8" />
      <circle cx="95" cy="280" r="2" fill="#FF6BD5" opacity="0.6" />
      <circle cx="65" cy="340" r="2.5" fill="#FF6BD5" opacity="0.7" />
      <circle cx="432" cy="200" r="3" fill="#66EFFF" opacity="0.8" />
      <circle cx="417" cy="280" r="2" fill="#66EFFF" opacity="0.6" />
      <circle cx="447" cy="340" r="2.5" fill="#66EFFF" opacity="0.7" />
      <circle cx="180" cy="55" r="2" fill="#CC77DD" opacity="0.6" />
      <circle cx="332" cy="55" r="2" fill="#77CCDD" opacity="0.6" />
      <circle cx="180" cy="457" r="2" fill="#CC77DD" opacity="0.6" />
      <circle cx="332" cy="457" r="2" fill="#77CCDD" opacity="0.6" />
      <circle cx="120" cy="120" r="2.5" fill="#FF6BD5" opacity="0.7" />
      <circle cx="392" cy="120" r="2.5" fill="#66EFFF" opacity="0.7" />
      <circle cx="120" cy="392" r="2.5" fill="#FF6BD5" opacity="0.7" />
      <circle cx="392" cy="392" r="2.5" fill="#66EFFF" opacity="0.7" />
    </svg>
  )
}

export { LogoIcon as default }
