import { useEffect, useRef } from 'react'
import { Check, X } from 'lucide-react'
import { contact } from '../data/site'
import type { Especializacao } from '../data/conteudo'
import { artigos } from '../data/artigos'
import Artigo from './Artigo'
import WhatsappIcon from './WhatsappIcon'

type Props = {
  especializacao: Especializacao | null
  area: string
  position: string
  onClose: () => void
}

function Lista({ items, marker }: { items: string[]; marker: 'check' | 'dot' }) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3 text-[0.95rem] leading-relaxed text-muted">
          {marker === 'check' ? (
            <Check className="mt-1 size-3.5 shrink-0 text-gold" strokeWidth={1.5} aria-hidden="true" />
          ) : (
            <span aria-hidden="true" className="mt-2.5 size-1 shrink-0 bg-gold" />
          )}
          {item}
        </li>
      ))}
    </ul>
  )
}

/** Card descritivo de uma especialização: abre sobre a especialização clicada */
function EspecializacaoCard({ especializacao, area, position, onClose }: Props) {
  const panelRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!especializacao) return

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose()
        return
      }

      if (event.key !== 'Tab' || !panelRef.current) return

      const focusable = panelRef.current.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled])',
      )
      if (focusable.length === 0) return

      const first = focusable[0]
      const last = focusable[focusable.length - 1]

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }

    document.addEventListener('keydown', onKeyDown)
    document.body.style.overflow = 'hidden'
    panelRef.current?.focus()

    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = ''
    }
  }, [especializacao, onClose])

  if (!especializacao) return null

  const titleId = `especializacao-${especializacao.id}`
  const artigo = artigos[especializacao.id]

  return (
    <div
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose()
      }}
      className="fixed inset-0 z-60 flex items-end justify-center bg-navy/70 backdrop-blur-sm sm:items-center sm:p-6"
    >
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        tabIndex={-1}
        className={`surface max-h-[90dvh] w-full ${artigo ? 'max-w-3xl' : 'max-w-2xl'} overflow-y-auto rounded-t-sm sm:max-h-[88dvh] sm:rounded-sm`}
      >
        <div className="flex items-start justify-between gap-6 border-b border-black/10 p-6 sm:p-8">
          <div>
            <p className="eyebrow text-gold-dark">
              Especialização {position} · {area}
            </p>
            <h3 id={titleId} className="title-display mt-4 text-[clamp(1.5rem,3vw,2rem)] text-navy">
              {especializacao.title}
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Fechar"
            className="-mt-1 -mr-1 grid size-9 shrink-0 place-items-center text-muted transition-colors duration-250 hover:text-navy"
          >
            <X className="size-5" strokeWidth={1.25} aria-hidden="true" />
          </button>
        </div>

        <div className="space-y-8 p-6 sm:p-8">
          <p className="font-serif text-lg text-gold-dark italic sm:text-xl">
            {especializacao.summary}
          </p>

          {artigo ? (
            <Artigo markdown={artigo} />
          ) : (
            <>
              <div>
                <h4 className="eyebrow border-b border-black/10 pb-3 text-navy">O que é</h4>
                <p className="mt-4 leading-relaxed text-muted">{especializacao.whatIs}</p>
              </div>

              <div>
                <h4 className="eyebrow border-b border-black/10 pb-3 text-navy">Quem tem direito</h4>
                <div className="mt-5">
                  <Lista items={especializacao.who} marker="check" />
                </div>
              </div>

              <div>
                <h4 className="eyebrow border-b border-black/10 pb-3 text-navy">Pontos importantes</h4>
                <div className="mt-5">
                  <Lista items={especializacao.highlights} marker="dot" />
                </div>
              </div>
            </>
          )}
        </div>

        <div className="flex flex-wrap items-center gap-4 border-t border-black/10 bg-cream-dark p-6 sm:p-8">
          <a
            href={contact.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-gold"
          >
            <WhatsappIcon className="size-4" />
            Falar sobre este caso
          </a>
          <button type="button" onClick={onClose} className="btn btn-outline">
            Voltar às especializações
          </button>
        </div>
      </div>
    </div>
  )
}

export default EspecializacaoCard
