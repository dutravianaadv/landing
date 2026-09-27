import { contact } from '../data/site'
import { steps } from '../data/conteudo'
import WhatsappIcon from './WhatsappIcon'

function ComoFunciona() {
  return (
    <section className="section-y bg-navy text-mist">
      <div className="container-page">
        <div className="max-w-3xl">
          <p className="eyebrow text-gold">Como funciona</p>
          <h2 className="title-display mt-5 text-[clamp(1.875rem,4vw,2.875rem)] text-white">
            Começar é simples.
          </h2>
        </div>

        <ol className="mt-14 grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <li key={step.number} className="border-t border-white/15 pt-6">
              <p className="font-serif text-3xl text-gold">{step.number}</p>
              <h3 className="eyebrow mt-4 text-white">{step.title}</h3>
              <p className="mt-3 text-[0.95rem] leading-relaxed text-mist/60">{step.text}</p>
            </li>
          ))}
        </ol>

        <a
          href={contact.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-gold mt-14"
        >
          Falar com nossa equipe
          <WhatsappIcon />
        </a>
      </div>
    </section>
  )
}

export default ComoFunciona
