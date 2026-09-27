import { useState } from 'react'
import { Minus, Plus } from 'lucide-react'
import { faqs } from '../data/conteudo'

function Faq() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section className="section-y bg-navy-dark text-mist">
      <div className="container-page">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <p className="eyebrow text-gold">Dúvidas frequentes</p>
            <h2 className="title-display mt-5 text-[clamp(1.875rem,4vw,2.875rem)] text-white">
              Perguntas frequentes
            </h2>
            <p className="mt-6 max-w-sm text-[1.0625rem] leading-relaxed text-mist/60">
              Tire suas dúvidas sobre nossos serviços e como funciona o atendimento.
            </p>
          </div>

          <ul className="border-t border-white/15">
            {faqs.map((faq, index) => {
              const isOpen = open === index
              return (
                <li key={faq.question} className="border-b border-white/15">
                  <h3>
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={`faq-resposta-${index}`}
                      onClick={() => setOpen(isOpen ? null : index)}
                      className="flex w-full items-center justify-between gap-6 py-5 text-left transition-colors duration-250 hover:text-gold"
                    >
                      <span className="text-[1.0625rem] leading-snug">{faq.question}</span>
                      {isOpen ? (
                        <Minus className="size-4 shrink-0 text-gold" strokeWidth={1.5} aria-hidden="true" />
                      ) : (
                        <Plus className="size-4 shrink-0 text-gold" strokeWidth={1.5} aria-hidden="true" />
                      )}
                    </button>
                  </h3>
                  <div
                    id={`faq-resposta-${index}`}
                    hidden={!isOpen}
                    className="pb-6 pr-10 text-[0.95rem] leading-relaxed text-mist/65"
                  >
                    {faq.answer}
                  </div>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Faq
