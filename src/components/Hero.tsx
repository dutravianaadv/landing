import { ArrowDown, ArrowRight } from 'lucide-react'
import heroImage from '../assets/escritorio-hero.jpg'

const stats = [
  { value: '1998', label: 'Ano de fundação' },
  { value: '5', label: 'Departamentos especializados' },
  { value: 'DF · SP', label: 'Brasília e São Paulo' },
]

function Hero() {
  return (
    <section id="inicio" className="relative isolate flex min-h-svh flex-col bg-hero text-hero-foreground">
      <img
        src={heroImage}
        alt="Interior contemporâneo de um escritório de advocacia em Brasília"
        width={1600}
        height={1000}
        className="absolute inset-0 -z-10 size-full object-cover object-center"
      />
      <div className="hero-shade absolute inset-0 -z-10" />

      <div className="mx-auto flex w-full max-w-screen-2xl flex-1 flex-col justify-end px-5 pb-10 pt-32 sm:px-8 sm:pb-14 lg:px-14">
        <div className="max-w-5xl animate-reveal">
          <p className="eyebrow text-brand">Advocacia estratégica · Brasília</p>
          <h1 className="mt-6 font-display text-[clamp(3rem,7.4vw,7rem)] leading-[0.95]">
            Direito que antecipa o próximo <em>movimento.</em>
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-8 text-hero-muted">
            Inteligência jurídica, repertório e presença para decisões que não admitem improviso.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a href="#contato" className="btn btn-gold">
              Agende uma conversa <ArrowRight className="size-4" />
            </a>
            <a href="#atuacao" className="btn btn-line text-hero-foreground">
              Conheça a atuação
            </a>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-[1fr_auto] items-end gap-6 border-t border-hero-line pt-6 lg:mt-20">
          <dl className="grid max-w-3xl grid-cols-3 gap-4 sm:gap-10">
            {stats.map(({ value, label }) => (
              <div key={label}>
                <dt className="sr-only">{label}</dt>
                <dd className="whitespace-nowrap font-display text-[clamp(1.5rem,3.5vw,2.75rem)] leading-none">
                  {value}
                </dd>
                <dd className="mt-2 text-xs leading-snug text-hero-muted sm:text-sm">{label}</dd>
              </div>
            ))}
          </dl>
          <a
            href="#escritorio"
            aria-label="Rolar para conhecer o escritório"
            className="hidden size-14 place-items-center border border-hero-line text-brand transition-colors hover:border-brand md:grid"
          >
            <ArrowDown className="size-5" strokeWidth={1.5} />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero
