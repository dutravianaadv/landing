import { useCallback, useEffect, useRef, useState } from 'react'
import {
  ArrowLeft,
  ArrowRight,
  Baby,
  Bandage,
  Building2,
  CalendarClock,
  Clock,
  Factory,
  FileSearch,
  Fish,
  Gavel,
  HandHeart,
  HardHat,
  HeartHandshake,
  IdCard,
  MessageSquareWarning,
  Receipt,
  Scale,
  ShieldCheck,
  Stethoscope,
  TriangleAlert,
  Users,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { areasEspecializacao } from '../data/conteudo'
import type { Especializacao } from '../data/conteudo'
import EspecializacaoCard from './EspecializacaoCard'

const icons: Record<string, LucideIcon> = {
  'aposentadoria-planejamento': CalendarClock,
  'auxilios-diversos': HandHeart,
  'aposentadorias-especiais': Factory,
  'bpc-loas': HeartHandshake,
  'pensao-por-morte': Users,
  'salario-maternidade': Baby,
  'revisao-reativacao': FileSearch,
  'seguro-defeso': Fish,
  'auxilio-doenca': Stethoscope,
  'auxilio-acidente': Bandage,
  'auxilio-reclusao': Scale,
  'verbas-rescisorias': Receipt,
  'horas-extras': Clock,
  'reconhecimento-vinculo': IdCard,
  'acidente-doenca-ocupacional': HardHat,
  estabilidades: ShieldCheck,
  'assedio-moral': MessageSquareWarning,
  'insalubridade-periculosidade': TriangleAlert,
  'rescisao-indireta-justa-causa': Gavel,
  'consultoria-empresas': Building2,
}

type Aberta = { area: string; index: number; item: Especializacao }

type CarrosselProps = {
  area: (typeof areasEspecializacao)[number]
  numero: string
  onOpen: (index: number, trigger: HTMLButtonElement) => void
}

type SetaProps = {
  direction: 1 | -1
  disabled: boolean
  label: string
  onClick: () => void
}

/** Seta lateral do carrossel: só a partir do tablet, no toque basta deslizar */
function Seta({ direction, disabled, label, onClick }: SetaProps) {
  const Icon = direction === 1 ? ArrowRight : ArrowLeft
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={label}
      className="mb-5 hidden size-11 shrink-0 place-items-center border border-navy/25 text-navy transition-colors duration-250 hover:border-gold hover:bg-gold disabled:pointer-events-none disabled:opacity-30 sm:grid"
    >
      <Icon className="size-4" strokeWidth={1.5} aria-hidden="true" />
    </button>
  )
}

/** Trilho com rolagem horizontal e snap: arrasta no toque, setas no desktop */
function Carrossel({ area, numero, onOpen }: CarrosselProps) {
  const trackRef = useRef<HTMLUListElement>(null)
  const [edges, setEdges] = useState({ start: true, end: false })

  const updateEdges = useCallback(() => {
    const track = trackRef.current
    if (!track) return
    setEdges({
      start: track.scrollLeft <= 4,
      end: track.scrollLeft + track.clientWidth >= track.scrollWidth - 4,
    })
  }, [])

  useEffect(() => {
    updateEdges()
    window.addEventListener('resize', updateEdges)
    return () => window.removeEventListener('resize', updateEdges)
  }, [updateEdges])

  const scroll = (direction: 1 | -1) => {
    const track = trackRef.current
    if (!track) return
    const card = track.querySelector('li')
    const step = card ? card.getBoundingClientRect().width + 20 : track.clientWidth
    track.scrollBy({ left: step * direction, behavior: 'smooth' })
  }

  const titleId = `carrossel-${area.id}`

  return (
    <div role="region" aria-roledescription="carrossel" aria-labelledby={titleId}>
      <div className="border-b border-black/10 pb-5">
        <p className="eyebrow text-gold-dark">
          {numero} · {area.items.length} especializações
        </p>
        <h3 id={titleId} className="title-display mt-2 text-[clamp(1.5rem,2.6vw,2rem)] text-navy">
          {area.title}
        </h3>
      </div>

      <div className="mt-5 flex items-center gap-4">
        <Seta
          direction={-1}
          disabled={edges.start}
          label={`Especializações anteriores de ${area.title}`}
          onClick={() => scroll(-1)}
        />

        <ul
          ref={trackRef}
          onScroll={updateEdges}
          className="scrollbar-none -mx-5 flex min-w-0 flex-1 snap-x snap-mandatory scroll-px-5 gap-5 overflow-x-auto px-5 pt-1 pb-6 sm:mx-0 sm:scroll-px-0 sm:px-0"
        >
          {area.items.map((item, index) => {
            const Icon = icons[item.id] ?? Scale
            return (
              <li
                key={item.id}
                className="w-[82%] shrink-0 snap-start sm:w-[calc((100%-1.25rem)/2)] lg:w-[calc((100%-2.5rem)/3)]"
              >
                <button
                  type="button"
                  aria-haspopup="dialog"
                  onClick={(event) => onOpen(index, event.currentTarget)}
                  className="group relative flex h-full min-h-[clamp(320px,44svh,380px)] w-full flex-col overflow-hidden rounded-card bg-navy text-left shadow-[0_18px_40px_-24px_rgba(4,28,45,0.7)] transition-transform duration-300 ease-soft hover:-translate-y-[3px]"
                >
                  {/* Foto da área esmaecida no topo, recortada em pontos diferentes a cada cartão */}
                  <span
                    aria-hidden="true"
                    className="absolute inset-x-0 top-0 h-[58%] bg-cover opacity-45 transition-[opacity,transform] duration-700 ease-soft group-hover:scale-103 group-hover:opacity-60"
                    style={{
                      backgroundImage: `url(${area.image})`,
                      backgroundPosition: `${(index * 37) % 100}% ${30 + ((index * 23) % 40)}%`,
                    }}
                  />
                  <span
                    aria-hidden="true"
                    className="absolute inset-0 bg-[linear-gradient(180deg,rgb(6_36_58/0.35)_0%,rgb(6_36_58/0.85)_38%,var(--navy)_58%)]"
                  />
  
                  <span className="relative flex flex-1 flex-col p-6 pt-[clamp(4.5rem,11svh,6rem)] sm:p-7 sm:pt-[clamp(4.5rem,11svh,6rem)]">
                    <span className="flex items-center justify-between gap-4">
                      <Icon className="size-8 text-gold" strokeWidth={1.1} aria-hidden="true" />
                      <span className="text-[0.7rem] tracking-[0.14em] text-white/45">
                        {String(index + 1).padStart(2, '0')} / {String(area.items.length).padStart(2, '0')}
                      </span>
                    </span>
  
                    <span className="mt-5 text-[0.95rem] leading-snug font-medium tracking-[0.08em] text-white uppercase">
                      {item.title}
                    </span>
                    <span className="mt-3 flex-1 text-[0.9rem] leading-relaxed text-mist/70">
                      {item.summary}
                    </span>
  
                    <span className="mt-6 inline-flex w-fit items-center gap-3 border border-gold/70 px-4 py-2.5 text-[0.68rem] font-medium tracking-[0.16em] text-white uppercase transition-colors duration-250 group-hover:border-gold group-hover:bg-gold group-hover:text-navy">
                      Ver especialização
                      <ArrowRight
                        className="size-3.5 transition-transform duration-250 ease-soft group-hover:translate-x-0.5"
                        strokeWidth={1.5}
                        aria-hidden="true"
                      />
                    </span>
                  </span>
                </button>
              </li>
            )
          })}
        </ul>

        <Seta
          direction={1}
          disabled={edges.end}
          label={`Próximas especializações de ${area.title}`}
          onClick={() => scroll(1)}
        />
      </div>
    </div>
  )
}

function Especializacoes() {
  const [aberta, setAberta] = useState<Aberta | null>(null)
  const lastTrigger = useRef<HTMLButtonElement | null>(null)

  useEffect(() => {
    if (aberta === null && lastTrigger.current) {
      lastTrigger.current.focus()
      lastTrigger.current = null
    }
  }, [aberta])

  const onClose = useCallback(() => setAberta(null), [])

  return (
    <section id="especializacoes" className="section-y scroll-mt-28 border-t border-black/5 bg-cream">
      <div className="container-page">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end lg:gap-20">
          <div>
            <p className="eyebrow text-gold-dark">Áreas de especialização</p>
            <h2 className="title-display mt-5 text-[clamp(1.875rem,4vw,2.875rem)] text-navy">
              Especializações em cada área de atuação
            </h2>
          </div>
          <p className="max-w-xl text-[1.0625rem] leading-relaxed text-muted">
            Cada especialização tem requisitos, prazos e documentação próprios. Deslize ou use as
            setas para navegar e clique em uma delas para saber o que ela trata e quem tem direito.
          </p>
        </div>

        <div className="mt-[clamp(2.5rem,6svh,3.5rem)] space-y-[clamp(2.5rem,7svh,4rem)]">
          {areasEspecializacao.map((area, areaIndex) => (
            <Carrossel
              key={area.id}
              area={area}
              numero={String(areaIndex + 1).padStart(2, '0')}
              onOpen={(index, trigger) => {
                lastTrigger.current = trigger
                setAberta({ area: area.title, index, item: area.items[index] })
              }}
            />
          ))}
        </div>
      </div>

      <EspecializacaoCard
        especializacao={aberta?.item ?? null}
        area={aberta?.area ?? ''}
        position={String((aberta?.index ?? 0) + 1).padStart(2, '0')}
        onClose={onClose}
      />
    </section>
  )
}

export default Especializacoes
