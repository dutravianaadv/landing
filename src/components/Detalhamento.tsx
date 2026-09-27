import { ArrowRight, Check } from 'lucide-react'
import { contact } from '../data/site'
import {
  companiesServices,
  previdenciarioServices,
  trabalhistaWorkers,
} from '../data/conteudo'

function Servicos({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3 text-[0.95rem] leading-relaxed text-muted">
          <Check className="mt-1 size-3.5 shrink-0 text-gold" strokeWidth={1.5} aria-hidden="true" />
          {item}
        </li>
      ))}
    </ul>
  )
}

function Detalhamento() {
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
            <Servicos items={previdenciarioServices} />
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
                <Servicos items={trabalhistaWorkers} />
              </div>
            </div>
            <div>
              <h3 className="eyebrow border-b border-black/10 pb-3 text-navy">Para empresas</h3>
              <div className="mt-5">
                <Servicos items={companiesServices} />
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
    </section>
  )
}

export default Detalhamento
