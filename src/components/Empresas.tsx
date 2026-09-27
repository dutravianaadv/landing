import { businessPillars } from '../data/conteudo'
import { contact } from '../data/site'
import WhatsappIcon from './WhatsappIcon'

function Empresas() {
  return (
    <section id="empresas" className="section-y scroll-mt-28 border-t border-black/5 bg-cream-dark">
      <div className="container-page">
        <div className="reveal max-w-3xl">
          <p className="eyebrow text-gold-dark">Atendimento empresarial</p>
          <h2 className="title-display mt-5 text-[clamp(1.875rem,4vw,2.875rem)] text-navy">
            Para empresas, prevenção também é estratégia.
          </h2>
          <p className="mt-6 text-[1.0625rem] leading-relaxed text-muted">
            Decisões relacionadas às relações de trabalho podem gerar consequências jurídicas,
            financeiras e operacionais. A orientação preventiva permite que a empresa compreenda os
            riscos envolvidos e tome decisões com maior segurança jurídica.
          </p>

          <ul className="mt-8 flex flex-wrap gap-x-3 gap-y-2">
            {businessPillars.map((pillar) => (
              <li key={pillar} className="eyebrow border border-gold/40 px-3 py-2 text-gold-dark">
                {pillar}
              </li>
            ))}
          </ul>

          <a
            href={contact.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-gold mt-9"
          >
            Falar sobre minha empresa
            <WhatsappIcon />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Empresas
