import { ArrowRight, Building2, Landmark, Scale, ShieldCheck } from 'lucide-react'

const practices = [
  {
    number: '01',
    title: 'Contencioso Estratégico',
    description:
      'Condução de causas complexas e sensíveis, da definição da estratégia à sustentação nos tribunais.',
    icon: Scale,
  },
  {
    number: '02',
    title: 'Direito Empresarial',
    description:
      'Assessoria jurídica contínua para sociedades, contratos, reorganizações e decisões de negócio.',
    icon: Building2,
  },
  {
    number: '03',
    title: 'Direito Público',
    description:
      'Atuação consultiva e contenciosa nas relações com a Administração Pública e órgãos de controle.',
    icon: Landmark,
  },
  {
    number: '04',
    title: 'Patrimônio & Sucessões',
    description:
      'Planejamento patrimonial e sucessório com discrição, segurança jurídica e visão de longo prazo.',
    icon: ShieldCheck,
  },
]

function Practices() {
  return (
    <section
      id="atuacao"
      className="bg-surface-dark py-20 text-surface-dark-foreground sm:py-28 lg:py-36"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="grid gap-8 border-b border-dark-line pb-12 lg:grid-cols-[1fr_1.2fr] lg:items-end">
          <div>
            <p className="eyebrow text-brand">Departamentos & serviços</p>
            <h2 className="mt-6 max-w-xl font-display text-4xl leading-tight sm:text-5xl lg:text-6xl">
              Conhecimento profundo, atuação integrada.
            </h2>
          </div>
          <p className="max-w-xl text-base leading-8 text-surface-dark-muted lg:justify-self-end">
            Departamentos especializados trabalham em conjunto para entregar respostas completas
            — do preventivo ao contencioso.
          </p>
        </div>

        <div className="divide-y divide-dark-line">
          {practices.map(({ number, title, description, icon: Icon }) => (
            <article
              key={title}
              className="practice-row group grid gap-5 py-8 sm:grid-cols-[56px_minmax(0,1fr)_minmax(240px,0.8fr)_48px] sm:items-center sm:gap-6 sm:py-10"
            >
              <span className="text-xs text-brand">{number}</span>
              <div className="flex min-w-0 items-center gap-4">
                <Icon className="size-6 shrink-0 text-brand" strokeWidth={1.4} />
                <h3 className="font-display text-2xl sm:text-3xl">{title}</h3>
              </div>
              <p className="text-sm leading-7 text-surface-dark-muted">{description}</p>
              <a
                href="#contato"
                aria-label={`Saiba mais sobre ${title}`}
                className="grid size-11 place-items-center border border-dark-line text-brand transition-all group-hover:border-brand group-hover:bg-brand group-hover:text-brand-foreground"
              >
                <ArrowRight className="size-4" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Practices
