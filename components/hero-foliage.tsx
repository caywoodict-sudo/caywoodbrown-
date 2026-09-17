export default function HeroFoliage() {
  return (
    <svg aria-hidden="true" className="absolute inset-0 h-full w-full" viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice" fill="none">
      <defs>
        <radialGradient id="canopy-haze"><stop stopColor="#203b29" /><stop offset="1" stopColor="#122319" /></radialGradient>
        <filter id="canopy-blur"><feGaussianBlur stdDeviation="28" /></filter>
        <g id="canopy-leaves">
          <path d="M0 0C-29-58-98-82-142-46-108-6-51 4 0 0Z" />
          <path d="M0 0C-65-16-128 22-132 80-69 78-24 46 0 0Z" />
          <path d="M0 0C-8-68 34-122 94-127 93-63 55-19 0 0Z" />
          <path d="M0 0C39-52 110-62 158-23 119 12 60 19 0 0Z" />
          <path d="M0 0C-30 40-26 101 15 136 45 82 34 31 0 0Z" />
        </g>
      </defs>
      <rect width="1440" height="900" fill="url(#canopy-haze)" />
      <g filter="url(#canopy-blur)" fill="#31543a" opacity=".62">
        <ellipse cx="70" cy="190" rx="270" ry="240" /><ellipse cx="1380" cy="160" rx="295" ry="230" />
        <ellipse cx="90" cy="790" rx="330" ry="240" /><ellipse cx="1360" cy="780" rx="350" ry="240" />
      </g>
      <g fill="#102117" opacity=".75">
        <use href="#canopy-leaves" transform="translate(90 118) rotate(12) scale(1.2)" />
        <use href="#canopy-leaves" transform="translate(354 80) rotate(88)" />
        <use href="#canopy-leaves" transform="translate(18 404) rotate(-26) scale(1.34)" />
        <use href="#canopy-leaves" transform="translate(1320 106) rotate(165) scale(1.22)" />
        <use href="#canopy-leaves" transform="translate(1116 54) rotate(83)" />
        <use href="#canopy-leaves" transform="translate(1450 372) rotate(205) scale(1.32)" />
        <use href="#canopy-leaves" transform="translate(106 858) rotate(-80) scale(1.38)" />
        <use href="#canopy-leaves" transform="translate(368 874) rotate(-25) scale(1.13)" />
        <use href="#canopy-leaves" transform="translate(1294 866) rotate(92) scale(1.38)" />
        <use href="#canopy-leaves" transform="translate(1024 920) rotate(40) scale(1.14)" />
      </g>
      <g fill="#294634" opacity=".65">
        <use href="#canopy-leaves" transform="translate(204 236) rotate(-14) scale(.84)" />
        <use href="#canopy-leaves" transform="translate(1210 238) rotate(160) scale(.86)" />
        <use href="#canopy-leaves" transform="translate(188 660) rotate(35) scale(.92)" />
        <use href="#canopy-leaves" transform="translate(1242 646) rotate(144) scale(.92)" />
      </g>
      <g className="sm:hidden" fill="#294634" opacity=".65">
        <use href="#canopy-leaves" transform="translate(540 145) rotate(15) scale(.8)" />
        <use href="#canopy-leaves" transform="translate(900 150) rotate(160) scale(.8)" />
        <use href="#canopy-leaves" transform="translate(535 735) rotate(-40) scale(.85)" />
        <use href="#canopy-leaves" transform="translate(900 760) rotate(110) scale(.85)" />
      </g>
    </svg>
  )
}
