import { ArrowRight } from 'lucide-react'
import { images } from '../data/conteudo'
import { brasilViewBox, cidades, estados } from '../data/mapaBrasil'
import { locations, partners } from '../data/site'

const destaques = new Set(cidades.map((cidade) => cidade.id))

/** Mapa real do Brasil com os estados onde há escritório (AM e TO) em destaque */
function MapaBrasil() {
  return (
    <svg
      viewBox={brasilViewBox}
      role="img"
      aria-label="Mapa do Brasil com os estados do Amazonas e do Tocantins em destaque, marcando Manaus e Palmas"
      className="mx-auto block max-h-[min(56svh,520px)] w-full"
    >
      <g strokeWidth={0.8} strokeLinejoin="round">
        {estados.map((estado) => (
          <path
            key={estado.id}
            d={estado.path}
            className={
              destaques.has(estado.id)
                ? 'fill-navy stroke-cream'
                : 'fill-navy/[0.08] stroke-cream'
            }
          >
            <title>{estado.name}</title>
          </path>
        ))}
      </g>

      {cidades.map((cidade) => (
        <g key={cidade.id}>
          <circle cx={cidade.x} cy={cidade.y} r={13} className="fill-none stroke-gold/60" strokeWidth={1.5} />
          <circle cx={cidade.x} cy={cidade.y} r={5.5} className="fill-gold" />
          <text
            x={cidade.x}
            y={cidade.y - 20}
            textAnchor="middle"
            paintOrder="stroke"
            strokeWidth={5}
            strokeLinejoin="round"
            className="fill-gold-light stroke-navy font-sans text-[15px] font-medium tracking-[0.06em]"
          >
            {cidade.label}
          </text>
        </g>
      ))}
    </svg>
  )
}

function Socios() {
  return (
    <section className="section-y bg-cream">
      <div className="container-page">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-20">
          <div className="reveal">
            <p className="eyebrow text-gold-dark">Os sócios</p>
            <h2 className="title-display mt-5 text-[clamp(1.875rem,4vw,2.875rem)] text-navy">
              Quem está por trás da Dutra &amp; Viana
            </h2>
            <p className="mt-6 max-w-2xl text-[1.0625rem] leading-relaxed text-muted">
              A Dutra &amp; Viana Advogados Associados reúne os advogados Eduardo Cesar Dutra e
              Washington Luiz Viana, com atuação principalmente nas áreas de Direito Previdenciário e
              Direito do Trabalho. A sociedade tem como princípio uma advocacia baseada em
              conhecimento jurídico, atenção individual e estratégia para cada caso.
            </p>

            <ul className="mt-12 grid gap-8 sm:grid-cols-2">
              {partners.map((partner, index) => (
                <li key={partner.name}>
                  <div className="overflow-hidden">
                    <img
                      src={index === 0 ? images.eduardoDutra : images.washingtonViana}
                      alt={`Retrato de ${partner.name}, ${partner.role}`}
                      width={1066}
                      height={1600}
                      className="aspect-4/5 w-full object-cover object-top transition-transform duration-700 ease-soft hover:scale-102"
                    />
                  </div>
                  <h3 className="title-display mt-5 text-xl text-navy">{partner.name}</h3>
                  <p className="mt-1 text-[0.8rem] tracking-[0.04em] text-gold-dark uppercase">
                    {partner.role}
                  </p>
                  <p className="mt-1.5 text-[0.8rem] text-muted">{partner.oab}</p>
                </li>
              ))}
            </ul>

            <a href="#escritorio" className="btn btn-outline mt-12">
              Conheça o escritório
              <ArrowRight className="size-4" strokeWidth={1.5} />
            </a>
          </div>

          <div className="reveal reveal-delay-1">
            <MapaBrasil />
            <p className="mt-8 text-[0.75rem] tracking-[0.12em] text-muted uppercase">
              Presença local. Atendimento sem fronteiras.
            </p>
            <p className="mt-4 max-w-md leading-relaxed text-muted">
              A Dutra &amp; Viana possui atendimento presencial em Manaus/AM e Palmas/TO e oferece
              atendimento online para clientes de todo o Brasil.
            </p>

            <dl className="mt-8 space-y-4 border-t border-black/10 pt-8">
              {locations.map((location) => (
                <div key={location.city}>
                  <dt className="eyebrow text-navy">{location.city}</dt>
                  <dd className="mt-1.5 text-[0.95rem] text-muted">{location.shortLine}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Socios
