import { ArrowRight, Building2, BriefcaseBusiness, FileX, HardHat, Hourglass, UserX } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { situations } from '../data/conteudo'

const icons: Record<string, LucideIcon> = {
  FileX,
  Hourglass,
  BriefcaseBusiness,
  HardHat,
  UserX,
  Building2,
}

function Situacoes() {
  return (
    <section className="section-y bg-cream">
      <div className="container-page">
        <div className="max-w-3xl">
          <p className="eyebrow text-gold-dark">Situações reais</p>
          <h2 className="title-display mt-5 text-[clamp(1.875rem,4vw,2.875rem)] text-navy">
            Talvez você esteja procurando orientação porque...
          </h2>
          <p className="mt-6 max-w-2xl text-[1.0625rem] leading-relaxed text-muted">
            Entendemos que cada situação é única. Veja algumas das situações mais comuns em que
            podemos ajudar.
          </p>
        </div>

        <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {situations.map((situation) => {
            const Icon = icons[situation.icon]
            return (
              <li
                key={situation.title}
                className="surface group flex flex-col p-6 transition-transform duration-300 ease-soft hover:-translate-y-[3px]"
              >
                <Icon className="size-6 text-gold" strokeWidth={1.25} aria-hidden="true" />
                <h3 className="title-display mt-5 text-xl text-navy">{situation.title}</h3>
                <p className="mt-3 flex-1 text-[0.95rem] leading-relaxed text-muted">
                  {situation.text}
                </p>
                <a
                  href={situation.href}
                  className="mt-6 inline-flex items-center gap-2 text-[0.7rem] font-medium tracking-[0.14em] text-navy uppercase transition-colors duration-250 hover:text-gold-dark"
                >
                  {situation.link}
                  <ArrowRight className="size-3.5" strokeWidth={1.5} />
                </a>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}

export default Situacoes
