"use client"

export interface LogoIconProps {
  size?: number
  className?: string
}

export function LogoIcon({ size = 64, className = "" }: LogoIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 512 512"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        {/* Main gradient from pink to cyan */}
        <linearGradient id="neonGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FF6BD5" />
          <stop offset="100%" stopColor="#66EFFF" />
        </linearGradient>

        {/* Pink-dominant gradient */}
        <linearGradient id="pinkGradient" x1="0%" y1="50%" x2="100%" y2="50%">
          <stop offset="0%" stopColor="#FF6BD5" />
          <stop offset="50%" stopColor="#CC5FB8" />
          <stop offset="100%" stopColor="#66EFFF" />
        </linearGradient>

        {/* Cyan-dominant gradient */}
        <linearGradient id="cyanGradient" x1="100%" y1="50%" x2="0%" y2="50%">
          <stop offset="0%" stopColor="#66EFFF" />
          <stop offset="50%" stopColor="#55C8DD" />
          <stop offset="100%" stopColor="#FF6BD5" />
        </linearGradient>

        {/* Star fill gradient */}
        <radialGradient id="starGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#66EFFF" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#66EFFF" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Outer ring with sacred geometry pattern */}
      <circle
        cx="256"
        cy="256"
        r="240"
        stroke="url(#neonGradient)"
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
      />

      {/* Second outer ring */}
      <circle
        cx="256"
        cy="256"
        r="220"
        stroke="url(#neonGradient)"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
        opacity="0.7"
      />

      {/* Sacred geometry - small circles on the outer ring (left side - pink) */}
      <circle cx="40" cy="256" r="12" stroke="#FF6BD5" strokeWidth="1.5" fill="none" opacity="0.8" />
      <circle cx="40" cy="256" r="6" stroke="#FF6BD5" strokeWidth="1" fill="none" opacity="0.6" />
      <circle cx="70" cy="160" r="10" stroke="#FF6BD5" strokeWidth="1.5" fill="none" opacity="0.8" />
      <circle cx="70" cy="160" r="5" stroke="#FF6BD5" strokeWidth="1" fill="none" opacity="0.6" />
      <circle cx="70" cy="352" r="10" stroke="#FF6BD5" strokeWidth="1.5" fill="none" opacity="0.8" />
      <circle cx="70" cy="352" r="5" stroke="#FF6BD5" strokeWidth="1" fill="none" opacity="0.6" />
      <circle cx="130" cy="85" r="8" stroke="#FF6BD5" strokeWidth="1.5" fill="none" opacity="0.7" />
      <circle cx="130" cy="427" r="8" stroke="#FF6BD5" strokeWidth="1.5" fill="none" opacity="0.7" />

      {/* Sacred geometry - small circles on the outer ring (right side - cyan) */}
      <circle cx="472" cy="256" r="12" stroke="#66EFFF" strokeWidth="1.5" fill="none" opacity="0.8" />
      <circle cx="472" cy="256" r="6" stroke="#66EFFF" strokeWidth="1" fill="none" opacity="0.6" />
      <circle cx="442" cy="160" r="10" stroke="#66EFFF" strokeWidth="1.5" fill="none" opacity="0.8" />
      <circle cx="442" cy="160" r="5" stroke="#66EFFF" strokeWidth="1" fill="none" opacity="0.6" />
      <circle cx="442" cy="352" r="10" stroke="#66EFFF" strokeWidth="1.5" fill="none" opacity="0.8" />
      <circle cx="442" cy="352" r="5" stroke="#66EFFF" strokeWidth="1" fill="none" opacity="0.6" />
      <circle cx="382" cy="85" r="8" stroke="#66EFFF" strokeWidth="1.5" fill="none" opacity="0.7" />
      <circle cx="382" cy="427" r="8" stroke="#66EFFF" strokeWidth="1.5" fill="none" opacity="0.7" />

      {/* Top and bottom circles - gradient transition */}
      <circle cx="256" cy="28" r="10" stroke="url(#neonGradient)" strokeWidth="1.5" fill="none" opacity="0.8" />
      <circle cx="256" cy="28" r="5" stroke="url(#neonGradient)" strokeWidth="1" fill="none" opacity="0.6" />
      <circle cx="256" cy="484" r="10" stroke="url(#neonGradient)" strokeWidth="1.5" fill="none" opacity="0.8" />
      <circle cx="256" cy="484" r="5" stroke="url(#neonGradient)" strokeWidth="1" fill="none" opacity="0.6" />

      {/* Decorative arcs on outer ring */}
      <path
        d="M 100 140 Q 60 200 60 256"
        stroke="#FF6BD5"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
        opacity="0.5"
      />
      <path
        d="M 100 372 Q 60 312 60 256"
        stroke="#FF6BD5"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
        opacity="0.5"
      />
      <path
        d="M 412 140 Q 452 200 452 256"
        stroke="#66EFFF"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
        opacity="0.5"
      />
      <path
        d="M 412 372 Q 452 312 452 256"
        stroke="#66EFFF"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
        opacity="0.5"
      />

      {/* Inner decorative circle */}
      <circle
        cx="256"
        cy="256"
        r="180"
        stroke="url(#neonGradient)"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
        opacity="0.5"
      />

      {/* Crescent moon - created by overlapping two circles */}
      <path
        d="M 310 140 
           A 130 130 0 1 1 310 372
           A 100 100 0 1 0 310 140"
        stroke="url(#pinkGradient)"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />

      {/* Inner crescent arc for depth */}
      <path
        d="M 300 160 
           A 110 110 0 1 1 300 352
           A 80 80 0 1 0 300 160"
        stroke="url(#cyanGradient)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        opacity="0.6"
      />

      {/* 8-pointed star (compass star) in the center */}
      {/* Main 4 points */}
      <polygon
        points="256,180 266,240 326,256 266,272 256,332 246,272 186,256 246,240"
        stroke="url(#neonGradient)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="url(#starGlow)"
      />

      {/* Diagonal 4 points */}
      <polygon
        points="256,200 280,230 310,256 280,282 256,312 232,282 202,256 232,230"
        stroke="url(#neonGradient)"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        opacity="0.7"
      />

      {/* Center glow point */}
      <circle cx="256" cy="256" r="8" fill="#66EFFF" opacity="0.9" />
      <circle cx="256" cy="256" r="4" fill="white" opacity="0.9" />
    </svg>
  )
}

export { LogoIcon as default }
