import { useId } from "react";
import { siteConfig } from "@/lib/site-config";

const INK = "#2A1510";
const ACCENT = "#B5451F";
const GLOW = "#D97A3F";
const CREAM = "#F6EDE3";

// Circular arcs (text-only paths), centered on (160,133), that keep clear
// gaps from both the pill edge and the shield: top apex at y=30 (well below
// the pill's top at y=-30, well above the shield's top at y=100); bottom
// apex at y=265 (well above the pill's bottom at y=296, well below the
// shield's bottom at y=222).
const TOP_ARC = "M 63.21,97.77 A 103 103 0 0 1 256.79,97.77";
const BOTTOM_ARC = "M 35.96,178.15 A 132 132 0 0 0 284.04,178.15";

export function LogoMark({ className }: { className?: string }) {
  const topArcId = useId();
  const bottomArcId = useId();

  return (
    <svg
      viewBox="0 -40 320 340"
      className={className}
      role="img"
      aria-label={siteConfig.fullName}
    >
      {/* pill-shaped background */}
      <ellipse cx="160" cy="133" rx="150" ry="163" fill={CREAM} stroke={ACCENT} strokeWidth="2" />

      {/* ribbons flanking the shield */}
      <path d="M125,128 L30,108 L46,140 L18,150 L46,160 L30,192 L125,172 Z" fill={ACCENT} />
      <path d="M195,128 L290,108 L274,140 L302,150 L274,160 L290,192 L195,172 Z" fill={ACCENT} />

      {/* shield */}
      <path
        d="M110,100 Q110,68 160,68 Q210,68 210,100 L210,150 Q210,196 160,222 Q110,196 110,150 Z"
        fill={CREAM}
        stroke={INK}
        strokeWidth="5"
      />
      <path
        d="M117,103 Q117,76 160,76 Q203,76 203,103 L203,149 Q203,190 160,213 Q117,190 117,149 Z"
        fill="none"
        stroke={ACCENT}
        strokeWidth="2"
      />

      {/* stylized cat face, line-art style on the shield */}
      <g fill="none" stroke={INK} strokeWidth="3" strokeLinejoin="round" strokeLinecap="round">
        {/* ears with tufts */}
        <path d="M128,118 L120,88 L146,112 Z" fill={CREAM} />
        <path d="M192,118 L200,88 L174,112 Z" fill={CREAM} />
        <path d="M122,92 L118,80 L128,90" />
        <path d="M198,92 L202,80 L192,90" />

        {/* head */}
        <path d="M128,118 Q160,96 192,118 Q200,148 182,172 Q160,184 138,172 Q120,148 128,118 Z" fill={CREAM} />

        {/* cheek fur tufts */}
        <path d="M130,155 Q118,160 112,172" />
        <path d="M134,166 Q124,174 116,184" />
        <path d="M190,155 Q202,160 208,172" />
        <path d="M186,166 Q196,174 204,184" />
      </g>

      <g fill={INK}>
        <ellipse cx="146" cy="134" rx="7" ry="10" transform="rotate(-6 146 134)" />
        <ellipse cx="174" cy="134" rx="7" ry="10" transform="rotate(6 174 134)" />
      </g>
      <path d="M160,150 L153,160 L167,160 Z" fill={ACCENT} />

      {/* top curved text */}
      <path id={topArcId} d={TOP_ARC} fill="none" />
      <text
        fontFamily="var(--font-berkshire), cursive"
        fontWeight={400}
        fontSize="27"
        fill={GLOW}
        stroke={INK}
        strokeWidth="1"
      >
        <textPath href={`#${topArcId}`} startOffset="50%" textAnchor="middle">
          {siteConfig.brandPrimary}
        </textPath>
      </text>

      {/* bottom curved text */}
      <path id={bottomArcId} d={BOTTOM_ARC} fill="none" />
      <text
        fontFamily="var(--font-lora), serif"
        fontWeight={700}
        fontSize="22"
        letterSpacing="3"
        fill={INK}
      >
        <textPath href={`#${bottomArcId}`} startOffset="50%" textAnchor="middle">
          MAINE COONS
        </textPath>
      </text>
    </svg>
  );
}
