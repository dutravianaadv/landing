import { ArrowRight } from 'lucide-react'
import { practiceAreas } from '../data/conteudo'

function Areas() {
  return (
    <section id="areas" className="section-y scroll-mt-28 border-t border-black/5 bg-cream-dark">
      <div className="container-page">
        <div className="max-w-3xl">
          <p className="eyebrow text-gold-dark">Nossas duas grandes áreas</p>
          <h2 className="title-display mt-5 text-[clamp(1.875rem,4vw,2.875rem)] text-navy">
            Duas áreas. Diferentes desafios.
            <br className="hidden sm:block" /> Uma atuação jurídica próxima e estratégica.
          </h2>
          <p className="mt-6 max-w-2xl text-[1.0625rem] leading-relaxed text-muted">
            Nossa atuação está concentrada em Direito Previdenciário e Direito do Trabalho, áreas que
            acompanham diferentes momentos da vida profissional e empresarial. Cada uma delas reúne
            especializações próprias, detalhadas logo abaixo.
          </p>
          <a
            href="#especializacoes"
            className="mt-6 inline-flex items-center gap-2 text-[0.75rem] font-medium tracking-[0.14em] text-navy uppercase transition-colors duration-250 hover:text-gold-dark"
          >
            Ver as especializações
            <ArrowRight className="size-4" strokeWidth={1.5} />
          </a>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {practiceAreas.map((area) => (
            <article
              key={area.id}
              className="group surface flex flex-col overflow-hidden transition-transform duration-300 ease-soft hover:-translate-y-[3px]"
            >
              <div className="relative overflow-hidden">
                <img
                  src={area.image}
                  alt={area.alt}
                  width={1400}
                  height={1000}
                  className="aspect-7/5 w-full object-cover transition-transform duration-700 ease-soft group-hover:scale-102"
                />
                <div aria-hidden="true" className="absolute inset-0 bg-navy/45" />
                <h3 className="eyebrow absolute bottom-5 left-6 text-white">{area.title}</h3>
              </div>

              <div className="flex flex-1 flex-col p-6 sm:p-8">
                <p className="leading-relaxed text-muted">{area.description}</p>
                <a
                  href={`#${area.id}`}
                  className="mt-7 inline-flex items-center gap-2 text-[0.75rem] font-medium tracking-[0.14em] text-navy uppercase transition-colors duration-250 hover:text-gold-dark"
                >
                  {area.cta}
                  <ArrowRight className="size-4" strokeWidth={1.5} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Areas
