import { useCallback, useEffect, useRef, useState } from 'react'
import { ArrowRight, Check } from 'lucide-react'
import { contact } from '../data/site'
import {
  areasEspecializacao,
  companiesServices,
  previdenciarioServices,
  trabalhistaWorkers,
} from '../data/conteudo'
import type { Servico } from '../data/conteudo'
import EspecializacaoCard from './EspecializacaoCard'

/** Localiza a especialização pelo id, com a área e a posição dela no carrossel */
function findEspecializacao(id: string) {
  for (const area of areasEspecializacao) {
    const index = area.items.findIndex((item) => item.id === id)
    if (index >= 0) return { area: area.title, index, item: area.items[index] }
  }
  return null
}

type Aberta = NonNullable<ReturnType<typeof findEspecializacao>>

type ServicosProps = {
  items: Servico[]
  vistos: Set<string>
  onOpen: (servico: Servico, trigger: HTMLButtonElement) => void
}

function Servicos({ items, vistos, onOpen }: ServicosProps) {
  return (
    <ul className="space-y-3">
      {items.map((servico) => {
        const icon = (
          <Check className="mt-1 size-3.5 shrink-0 text-gold" strokeWidth={1.5} aria-hidden="true" />
        )
        return (
          <li key={servico.label} className="text-[0.95rem] leading-relaxed text-muted">
            {servico.id ? (
              <button
                type="button"
                aria-haspopup="dialog"
                onClick={(event) => onOpen(servico, event.currentTarget)}
                className={`group flex items-start gap-3 text-left transition-colors duration-250 hover:text-navy ${
                  vistos.has(servico.label) ? 'text-gold-dark' : ''
                }`}
              >
                {icon}
                <span className="decoration-gold/60 underline-offset-4 group-hover:underline">
                  {servico.label}
                </span>
              </button>
            ) : (
              <span className="flex items-start gap-3">
                {icon}
                {servico.label}
              </span>
            )}
          </li>
        )
      })}
    </ul>
  )
}

function Detalhamento() {
  const [aberta, setAberta] = useState<Aberta | null>(null)
  const [vistos, setVistos] = useState<Set<string>>(() => new Set())
  const lastTrigger = useRef<HTMLButtonElement | null>(null)

  useEffect(() => {
    if (aberta === null && lastTrigger.current) {
      lastTrigger.current.focus()
      lastTrigger.current = null
    }
  }, [aberta])

  const onClose = useCallback(() => setAberta(null), [])

  const onOpen = (servico: Servico, trigger: HTMLButtonElement) => {
    const encontrada = servico.id ? findEspecializacao(servico.id) : null
    if (!encontrada) return
    lastTrigger.current = trigger
    setVistos((prev) => new Set(prev).add(servico.label))
    setAberta(encontrada)
  }

  return (
    <section className="section-y bg-cream">
      <div className="container-page grid gap-16 lg:grid-cols-2 lg:gap-20">
        <article id="previdenciario" className="reveal scroll-mt-28">
          <p className="eyebrow text-gold-dark">01</p>
          <h2 className="title-display mt-4 text-[clamp(1.75rem,3.4vw,2.5rem)] text-navy">
            Direito Previdenciário
          </h2>
          <p className="mt-4 font-serif text-xl text-gold-dark italic">
            Do planejamento à defesa dos seus direitos perante o INSS e a Justiça.
          </p>
          <p className="mt-6 max-w-xl leading-relaxed text-muted">
            Questões previdenciárias exigem atenção aos detalhes. Histórico de contribuições,
            vínculos, documentos, períodos trabalhados e regras aplicáveis podem influenciar
            diretamente a análise de cada caso.
          </p>

          <div className="mt-8">
            <Servicos items={previdenciarioServices} vistos={vistos} onOpen={onOpen} />
          </div>

          <a
            href={contact.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-gold mt-9"
          >
            Conheça toda nossa atuação previdenciária
            <ArrowRight className="size-4" strokeWidth={1.5} />
          </a>
        </article>

        <article id="trabalhista" className="reveal reveal-delay-1 scroll-mt-28">
          <p className="eyebrow text-gold-dark">02</p>
          <h2 className="title-display mt-4 text-[clamp(1.75rem,3.4vw,2.5rem)] text-navy">
            Direito do Trabalho
          </h2>
          <p className="mt-4 font-serif text-xl text-gold-dark italic">
            Orientação jurídica para trabalhadores e empresas.
          </p>
          <p className="mt-6 max-w-xl leading-relaxed text-muted">
            As relações de trabalho envolvem direitos, deveres e responsabilidades para todos os
            envolvidos. Nossa atuação busca compreender cada situação e oferecer orientação jurídica
            adequada ao contexto apresentado.
          </p>

          <div className="mt-9 grid gap-9 sm:grid-cols-2">
            <div>
              <h3 className="eyebrow border-b border-black/10 pb-3 text-navy">Para trabalhadores</h3>
              <div className="mt-5">
                <Servicos items={trabalhistaWorkers} vistos={vistos} onOpen={onOpen} />
              </div>
            </div>
            <div>
              <h3 className="eyebrow border-b border-black/10 pb-3 text-navy">Para empresas</h3>
              <div className="mt-5">
                <Servicos items={companiesServices} vistos={vistos} onOpen={onOpen} />
              </div>
            </div>
          </div>

          <div className="mt-9 flex flex-wrap gap-3">
            <a href="#contato" className="btn btn-outline">
              Conheça os direitos trabalhistas
              <ArrowRight className="size-4" strokeWidth={1.5} />
            </a>
            <a href="#empresas" className="btn btn-outline">
              Atuação empresarial
              <ArrowRight className="size-4" strokeWidth={1.5} />
            </a>
          </div>
        </article>
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

export default Detalhamento
