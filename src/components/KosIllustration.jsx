export default function KosIllustration({
  illustration = {},
  area = 'Yogyakarta',
  size = 'card',
}) {
  const {
    variant = 'pavilion',
    accentColor = '#0F6E56',
    secondaryColor = '#D5EDE5',
  } = illustration;

  return (
    <div
      className={`kos-illustration kos-illustration--${size}`}
      style={{
        '--ill-accent': accentColor,
        '--ill-secondary': secondaryColor,
      }}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 360 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="kos-illustration-svg"
        preserveAspectRatio="xMidYMid slice"
      >
        <rect width="360" height="200" fill={secondaryColor} />
        <circle cx="305" cy="46" r="24" fill="#FFFFFF" fillOpacity="0.65" />
        <path
          d="M0 166C68 156 124 160 190 168C252 175 304 170 360 160V200H0V166Z"
          fill={accentColor}
          fillOpacity="0.14"
        />

        {variant === 'joglo' && (
          <g>
            <path d="M90 108L180 54L270 108H90Z" fill={accentColor} />
            <path
              d="M132 82L180 42L228 82H132Z"
              fill={accentColor}
              fillOpacity="0.85"
            />
            <rect x="108" y="108" width="144" height="62" rx="4" fill="#FFFFFF" />
            <rect x="164" y="128" width="32" height="42" rx="3" fill={accentColor} />
            <rect
              x="122"
              y="122"
              width="28"
              height="24"
              rx="3"
              fill={secondaryColor}
              stroke={accentColor}
              strokeWidth="2"
            />
            <rect
              x="210"
              y="122"
              width="28"
              height="24"
              rx="3"
              fill={secondaryColor}
              stroke={accentColor}
              strokeWidth="2"
            />
          </g>
        )}

        {variant === 'studio' && (
          <g>
            <rect x="92" y="56" width="176" height="114" rx="8" fill="#FFFFFF" />
            <rect x="92" y="56" width="176" height="18" rx="6" fill={accentColor} />
            <rect
              x="110"
              y="90"
              width="62"
              height="44"
              rx="4"
              fill={secondaryColor}
              stroke={accentColor}
              strokeWidth="2"
            />
            <line
              x1="141"
              y1="90"
              x2="141"
              y2="134"
              stroke={accentColor}
              strokeWidth="2"
            />
            <rect
              x="188"
              y="90"
              width="62"
              height="44"
              rx="4"
              fill={secondaryColor}
              stroke={accentColor}
              strokeWidth="2"
            />
            <rect x="166" y="144" width="28" height="26" rx="2" fill={accentColor} />
          </g>
        )}

        {variant === 'courtyard' && (
          <g>
            <rect x="76" y="70" width="108" height="100" rx="6" fill="#FFFFFF" />
            <rect x="192" y="88" width="92" height="82" rx="6" fill="#FFFFFF" />
            <rect x="76" y="64" width="112" height="12" rx="4" fill={accentColor} />
            <rect x="190" y="82" width="96" height="12" rx="4" fill={accentColor} />
            <rect
              x="94"
              y="92"
              width="72"
              height="28"
              rx="3"
              fill={secondaryColor}
              stroke={accentColor}
              strokeWidth="2"
            />
            <rect
              x="94"
              y="132"
              width="30"
              height="38"
              rx="3"
              fill={accentColor}
            />
            <rect
              x="210"
              y="108"
              width="56"
              height="28"
              rx="3"
              fill={secondaryColor}
              stroke={accentColor}
              strokeWidth="2"
            />
            <circle cx="176" cy="154" r="14" fill={accentColor} fillOpacity="0.35" />
          </g>
        )}

        {variant === 'loft' && (
          <g>
            <path d="M88 94L154 50H272V170H88V94Z" fill="#FFFFFF" />
            <path d="M84 96L154 46H276V60H158L92 106L84 96Z" fill={accentColor} />
            <rect
              x="110"
              y="102"
              width="48"
              height="68"
              rx="3"
              fill={secondaryColor}
              stroke={accentColor}
              strokeWidth="2"
            />
            <rect
              x="176"
              y="76"
              width="74"
              height="40"
              rx="4"
              fill={secondaryColor}
              stroke={accentColor}
              strokeWidth="2"
            />
            <rect x="176" y="130" width="74" height="40" rx="4" fill={accentColor} fillOpacity="0.16" />
          </g>
        )}

        {variant === 'garden' && (
          <g>
            <path d="M100 100L180 60L260 100V170H100V100Z" fill="#FFFFFF" />
            <path
              d="M90 102L180 54L270 102"
              stroke={accentColor}
              strokeWidth="8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <rect x="164" y="122" width="32" height="48" rx="16" fill={accentColor} />
            <rect
              x="118"
              y="118"
              width="30"
              height="28"
              rx="4"
              fill={secondaryColor}
              stroke={accentColor}
              strokeWidth="2"
            />
            <rect
              x="212"
              y="118"
              width="30"
              height="28"
              rx="4"
              fill={secondaryColor}
              stroke={accentColor}
              strokeWidth="2"
            />
            <circle cx="72" cy="146" r="20" fill={accentColor} fillOpacity="0.28" />
            <circle cx="288" cy="150" r="16" fill={accentColor} fillOpacity="0.28" />
          </g>
        )}

        {variant === 'townhouse' && (
          <g>
            <rect x="96" y="48" width="168" height="122" rx="6" fill="#FFFFFF" />
            <rect x="96" y="48" width="168" height="14" rx="4" fill={accentColor} />
            <rect
              x="114"
              y="76"
              width="38"
              height="32"
              rx="3"
              fill={secondaryColor}
              stroke={accentColor}
              strokeWidth="2"
            />
            <rect
              x="162"
              y="76"
              width="38"
              height="32"
              rx="3"
              fill={secondaryColor}
              stroke={accentColor}
              strokeWidth="2"
            />
            <rect
              x="210"
              y="76"
              width="38"
              height="32"
              rx="3"
              fill={secondaryColor}
              stroke={accentColor}
              strokeWidth="2"
            />
            <rect x="114" y="124" width="36" height="46" rx="3" fill={accentColor} />
            <rect
              x="168"
              y="124"
              width="80"
              height="30"
              rx="3"
              fill={secondaryColor}
              stroke={accentColor}
              strokeWidth="2"
            />
          </g>
        )}

        {variant === 'pavilion' && (
          <g>
            <path d="M84 96L180 56L276 96H84Z" fill={accentColor} />
            <rect x="102" y="96" width="156" height="74" rx="4" fill="#FFFFFF" />
            <rect x="118" y="114" width="52" height="32" rx="4" fill={secondaryColor} stroke={accentColor} strokeWidth="2" />
            <rect x="184" y="114" width="58" height="56" rx="4" fill={accentColor} fillOpacity="0.16" />
            <rect x="198" y="126" width="30" height="44" rx="3" fill={accentColor} />
            <circle cx="72" cy="154" r="14" fill={accentColor} fillOpacity="0.3" />
            <circle cx="288" cy="148" r="18" fill={accentColor} fillOpacity="0.25" />
          </g>
        )}
      </svg>

      <span className="kos-illustration-area">{area}</span>
    </div>
  );
}
