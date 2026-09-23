import { ChevronRight } from 'lucide-react'

const courts = ['STF', 'STJ', 'TST', 'TCU', 'CARF']

function Hero() {
  return (
    <section id="inicio" className="relative isolate overflow-hidden bg-forest text-white">
      <div
        aria-hidden="true"
        className="sprout-orb absolute -right-40 -top-24 -z-10 size-[420px] opacity-50 sm:size-[560px] lg:-right-24 lg:size-[640px]"
      />
      <div
        aria-hidden="true"
        className="sprout-orb absolute -bottom-72 -left-48 -z-10 size-[460px] opacity-30"
      />

      <div className="mx-auto flex min-h-svh max-w-[1200px] flex-col items-center justify-center px-6 pb-16 pt-32 text-center sm:pt-36">
        <a
          href="#contato"
          className="inline-flex items-center gap-2 rounded-full border border-lichen px-4 py-1 text-sm"
        >
          <span>
            <span className="hidden sm:inline">Atendimento em todo o Brasil · </span>
            <span className="text-sprout">Agende uma reunião</span>
          </span>
          <ChevronRight className="size-4 text-lichen" />
        </a>

        <h1 className="mt-8 max-w-5xl font-display text-[clamp(3rem,9vw,5.75rem)] leading-[0.88]">
          Direito que antecipa o <span className="text-sprout">próximo</span> movimento.
        </h1>

        <p className="mt-8 max-w-[600px] text-lg leading-normal text-fern">
          <span className="text-sprout">Inteligência jurídica</span>, repertório e presença para
          decisões que não admitem improviso.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <a href="#contato" className="btn btn-sprout">
            Agende uma conversa
          </a>
          <a href="#atuacao" className="btn btn-ghost">
            Conheça os departamentos
          </a>
        </div>

        <div className="mt-16 w-full max-w-3xl sm:mt-20">
          <p className="text-sm text-fern">
            Atuação consolidada perante tribunais superiores e órgãos de controle
          </p>
          <ul className="mt-5 flex flex-wrap items-center justify-center gap-x-5 gap-y-3 sm:gap-x-12">
            {courts.map((court) => (
              <li
                key={court}
                className="font-display text-xl tracking-[0.04em] text-white/50 sm:text-3xl"
              >
                {court}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Hero
