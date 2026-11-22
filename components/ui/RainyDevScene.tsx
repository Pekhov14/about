'use client'

import {motion} from 'framer-motion'

const raindrops = Array.from({ length: 70 }, (_, i) => {
  const x = (i * 13 + 5) % 100
  const delay = (i * 0.09) % 2
  const duration = 0.8 + (i % 6) * 0.15
  const length = 10 + (i % 5) * 6
  const opacity = 0.12 + (i % 5) * 0.07
  return { x, delay, duration, length, opacity }
})

export function RainyDevScene() {
  return (
    <div className="relative h-full w-full overflow-hidden rounded-[2rem] border border-[var(--site-border)] bg-[linear-gradient(180deg,#08111f_0%,#0c1a2e_45%,#0a1424_100%)] shadow-2xl shadow-black/20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_15%,rgba(148,163,184,0.12),transparent_30%),radial-gradient(circle_at_60%_75%,rgba(56,189,248,0.12),transparent_35%)]" />

      {/* Rain */}
      <div className="pointer-events-none absolute inset-0 z-20">
        {raindrops.map((drop, i) => (
          <motion.span
            key={i}
            className="absolute top-[-20%] w-px rounded-full bg-slate-200/70"
            style={{ left: `${drop.x}%`, height: drop.length, opacity: drop.opacity }}
            animate={{ y: ['0vh', '125vh'], x: [0, -10] }}
            transition={{ duration: drop.duration, delay: drop.delay, repeat: Infinity, ease: 'linear' }}
          />
        ))}
      </div>

      <svg
        viewBox="0 0 520 420"
        className="relative z-10 h-full w-full"
        role="img"
        aria-label="A dinosaur coding on a laptop in the rain"
      >
        <defs>
          <linearGradient id="skyGlow" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#0f172a" />
            <stop offset="100%" stopColor="#0b1220" />
          </linearGradient>
          <linearGradient id="screenGlow" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#67e8f9" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#22d3ee" stopOpacity="0.75" />
          </linearGradient>
          <filter id="glow" x="-40%" y="-40%" width="180%" height="180%">
            <feGaussianBlur stdDeviation="8" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Night sky / distant shapes */}
        <rect x="0" y="0" width="520" height="420" fill="url(#skyGlow)" opacity="0.2" />
        <circle cx="410" cy="70" r="26" fill="#e2e8f0" opacity="0.08" />
        <circle cx="402" cy="64" r="24" fill="#08111f" opacity="0.35" />

        {/* Ground & puddles */}
        <ellipse cx="260" cy="362" rx="230" ry="40" fill="#0b1324" />
        <ellipse cx="260" cy="350" rx="200" ry="22" fill="#101b31" />
        <ellipse cx="170" cy="356" rx="55" ry="8" fill="#38bdf8" opacity="0.08" />
        <ellipse cx="340" cy="360" rx="70" ry="10" fill="#38bdf8" opacity="0.06" />

        {/* Laptop glow on ground */}
        <ellipse cx="292" cy="332" rx="62" ry="16" fill="#67e8f9" opacity="0.14" filter="url(#glow)" />

        {/* Laptop */}
        <g transform="translate(230, 248)">
          <rect x="0" y="56" width="124" height="12" rx="5" fill="#334155" />
          <rect x="10" y="0" width="104" height="60" rx="7" fill="#1e293b" />
          <rect x="17" y="7" width="90" height="46" rx="4" fill="#020617" />
          <rect x="17" y="7" width="90" height="46" rx="4" fill="url(#screenGlow)" opacity="0.18" />
          <g filter="url(#glow)">
            <rect x="24" y="16" width="42" height="3.5" rx="1.8" fill="#67e8f9" opacity="0.95">
              <animate attributeName="width" values="42;28;42" dur="2.6s" repeatCount="indefinite" />
            </rect>
            <rect x="24" y="25" width="58" height="3.5" rx="1.8" fill="#5eead4" opacity="0.9">
              <animate attributeName="width" values="58;40;58" dur="3.2s" repeatCount="indefinite" />
            </rect>
            <rect x="24" y="34" width="34" height="3.5" rx="1.8" fill="#a5b4fc" opacity="0.9">
              <animate attributeName="width" values="34;48;34" dur="2.1s" repeatCount="indefinite" />
            </rect>
            <rect x="24" y="43" width="8" height="3.5" rx="1.8" fill="#e2e8f0" opacity="0.95">
              <animate attributeName="opacity" values="1;0.15;1" dur="1s" repeatCount="indefinite" />
            </rect>
          </g>
        </g>

        {/* Dino sitting in the rain */}
        <g transform="translate(150, 160)">
          {/* Tail */}
          <path d="M40 150 C8 150,-8 120,8 90 C20 114,34 122,56 116" fill="#22c55e" />
          <path d="M16 122 C4 122,-2 108,4 94" fill="#22c55e" opacity="0.7" />
          {/* Body */}
          <ellipse cx="95" cy="128" rx="58" ry="52" fill="#4ade80" />
          <ellipse cx="104" cy="142" rx="34" ry="28" fill="#86efac" opacity="0.8" />
          {/* Head/neck */}
          <path d="M122 110 C134 88,150 72,178 72 C204 72,220 88,220 108 C220 128,204 140,182 140 C166 140,154 132,146 122" fill="#4ade80" />
          <ellipse cx="201" cy="106" rx="18" ry="13" fill="#86efac" opacity="0.85" />
          {/* Spikes */}
          <path d="M58 92 l11 -18 l11 18 Z" fill="#16a34a" />
          <path d="M78 82 l11 -18 l11 18 Z" fill="#16a34a" />
          <path d="M98 74 l11 -18 l11 18 Z" fill="#16a34a" />
          <path d="M118 70 l11 -18 l11 18 Z" fill="#16a34a" />
          <path d="M138 72 l11 -18 l11 18 Z" fill="#16a34a" />
          {/* Eye */}
          <circle cx="186" cy="96" r="6" fill="#0f172a" />
          <circle cx="188.5" cy="93.5" r="2.2" fill="#f8fafc" />
          {/* Mouth */}
          <path d="M196 118 Q206 126 216 118" stroke="#14532d" strokeWidth="3" fill="none" strokeLinecap="round" />
          {/* Arm typing */}
          <motion.path
            d="M128 132 Q156 146 182 142"
            stroke="#4ade80"
            strokeWidth="12"
            strokeLinecap="round"
            fill="none"
            animate={{ d: ['M128 132 Q156 146 182 142', 'M128 132 Q156 140 180 138', 'M128 132 Q156 146 182 142'] }}
            transition={{ duration: 0.85, repeat: Infinity, ease: 'easeInOut' }}
          />
          {/* Other arm hugging laptop area */}
          <path d="M82 142 Q98 156 122 154" stroke="#4ade80" strokeWidth="12" strokeLinecap="round" fill="none" />
          {/* Feet */}
          <ellipse cx="72" cy="176" rx="18" ry="8" fill="#22c55e" />
          <ellipse cx="118" cy="178" rx="18" ry="8" fill="#22c55e" />
          {/* Little belly highlight */}
          <ellipse cx="96" cy="150" rx="22" ry="14" fill="#bbf7d0" opacity="0.18" />
        </g>

        {/* Rain splashes */}
        <g opacity="0.35" stroke="#bae6fd" strokeWidth="1.5" strokeLinecap="round" fill="none">
          <motion.path d="M110 350 q4 -6 8 0" animate={{ opacity: [0, 0.6, 0], scale: [0.8, 1.1, 0.8] }} transition={{ duration: 1.4, repeat: Infinity }} />
          <motion.path d="M380 356 q4 -6 8 0" animate={{ opacity: [0, 0.5, 0] }} transition={{ duration: 1.7, delay: 0.5, repeat: Infinity }} />
          <motion.path d="M250 364 q4 -6 8 0" animate={{ opacity: [0, 0.4, 0] }} transition={{ duration: 1.2, delay: 0.9, repeat: Infinity }} />
        </g>
      </svg>
    </div>
  )
}