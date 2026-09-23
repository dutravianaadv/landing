import heroImage from '../../assets/escritorio-hero.jpg'

const stats = [
  { value: '1998', label: 'Ano de fundação' },
  { value: '5', label: 'Departamentos especializados' },
  { value: 'DF · SP', label: 'Brasília e São Paulo' },
]

function Hero() {
  return (
    <section id="inicio" className="relative isolate overflow-hidden text-parchment">
      <img
        src={heroImage}
        alt="Interior contemporâneo de um escritório de advocacia em Brasília"
        width={1600}
        height={1000}
        className="absolute inset-0 -z-10 size-full object-cover"
      />
      <div className="hero-overlay absolute inset-0 -z-10" />

      <div className="mx-auto flex min-h-[calc(100svh-6.5rem)] max-w-7xl flex-col justify-end px-6 pb-12 pt-24 lg:min-h-[max(80svh,640px)] lg:px-10 lg:pb-16">
        <p className="eyebrow text-parchment">Advocacia estratégica · Brasília</p>
        <h1 className="mt-4 max-w-4xl font-display text-[clamp(2.75rem,8vw,5.5rem)] leading-[0.95]">
          Direito que antecipa o próximo <em>movimento.</em>
        </h1>
        <p className="mt-6 max-w-xl text-lg font-light leading-[1.4] text-parchment/80">
          Inteligência jurídica, repertório e presença para decisões que não admitem improviso.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href="#contato" className="btn btn-primary">
            Agende uma conversa
          </a>
          <a href="#atuacao" className="btn btn-outline-light">
            Conheça os departamentos
          </a>
        </div>

        <dl className="mt-12 grid grid-cols-3 border-t border-parchment/20 pt-6 lg:mt-16">
          {stats.map(({ value, label }, index) => (
            <div
              key={label}
              className={index > 0 ? 'border-l border-parchment/20 pl-4 sm:pl-8' : 'pr-4'}
            >
              <dt className="sr-only">{label}</dt>
              <dd className="font-display text-[clamp(1.5rem,4vw,2.8rem)] leading-none">{value}</dd>
              <dd className="mt-2 text-xs leading-snug text-parchment/70 sm:text-sm">{label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}

export default Hero
