import { useId } from 'react'
import logoCircular from '../assets/marca/logo-circular.jpg'

/** Monograma DV com a balança sobre o V, recriado a partir da marca da Dutra & Viana */
export function Monograma({ className = 'h-10 w-auto' }: { className?: string }) {
  const gradientId = `dv-ouro-${useId().replace(/[^a-zA-Z0-9]/g, '')}`

  return (
    <svg viewBox="2 8 58 52" className={className} aria-hidden="true">
      <defs>
        {/* userSpaceOnUse: com objectBoundingBox o degradê some em traços retos (caixa de altura zero) */}
        <linearGradient id={gradientId} gradientUnits="userSpaceOnUse" x1="0" y1="6" x2="0" y2="60">
          <stop offset="0" stopColor="#ecd08a" />
          <stop offset="0.55" stopColor="#c79a4a" />
          <stop offset="1" stopColor="#a47629" />
        </linearGradient>
      </defs>
      <g fill={`url(#${gradientId})`} fontFamily='"Cormorant Garamond", Georgia, serif' fontWeight={500}>
        <text x="4" y="39" fontSize="44">
          D
        </text>
        <text x="17.5" y="58" fontSize="50">
          V
        </text>
      </g>
      {/* Balança apoiada na haste direita do V: coluna, travessão e pratos */}
      <g stroke={`url(#${gradientId})`} fill="none" strokeLinecap="round">
        <path d="M48.5 15.5 V28.5" strokeWidth={1.3} />
        <path d="M42.1 17.5 H54.9" strokeWidth={1.1} />
        <circle cx="48.5" cy="15" r="1" fill={`url(#${gradientId})`} stroke="none" />
        <path
          d="M42.1 17.5 L40.6 21.6 M42.1 17.5 L43.6 21.6 M54.9 17.5 L53.4 21.6 M54.9 17.5 L56.4 21.6"
          strokeWidth={0.55}
        />
        <path
          d="M40.1 21.6 Q42.1 23.8 44.1 21.6 Z M52.9 21.6 Q54.9 23.8 56.9 21.6 Z"
          fill={`url(#${gradientId})`}
          strokeWidth={0.4}
        />
      </g>
    </svg>
  )
}

type LogoProps = {
  /** Esconde o letreiro e mostra só o monograma (telas muito estreitas) */
  compact?: boolean
  size?: 'sm' | 'md'
  /** Usa o recorte circular da marca original (foto) no lugar do monograma vetorial */
  circular?: boolean
}

function Logo({ compact = false, size = 'md', circular = false }: LogoProps) {
  return (
    <span className="flex items-center gap-2.5">
      {circular ? (
        <img
          src={logoCircular}
          alt=""
          width={192}
          height={192}
          className="size-11 shrink-0 rounded-full object-cover ring-1 ring-gold/60 ring-offset-2 ring-offset-navy sm:size-12"
        />
      ) : (
        <Monograma className={size === 'md' ? 'h-10 w-auto sm:h-11' : 'h-10 w-auto'} />
      )}
      {!compact && (
        <span className="flex flex-col items-center leading-none max-[359px]:hidden">
          <span
            className={`font-display font-semibold tracking-[0.04em] text-gold-light ${
              size === 'md' ? 'text-[1.05rem] sm:text-[1.2rem]' : 'text-[1.05rem]'
            }`}
          >
            DUTRA &amp; VIANA
          </span>
          <span className="mt-1.5 flex items-center gap-1.5 text-[0.46rem] font-medium tracking-[0.28em] text-white/70 uppercase sm:text-[0.5rem]">
            <span aria-hidden="true" className="h-px w-2.5 bg-gold/70" />
            Advogados Associados
            <span aria-hidden="true" className="h-px w-2.5 bg-gold/70" />
          </span>
        </span>
      )}
    </span>
  )
}

export default Logo
