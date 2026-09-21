import { ArrowDown } from 'lucide-react'
import heroImage from '../assets/escritorio-hero.jpg'

function Hero() {
  return (
    <section
      id="inicio"
      className="relative h-[92svh] max-h-[980px] min-h-[760px] bg-hero text-hero-foreground"
    >
      <img
        src={heroImage}
        alt="Interior contemporâneo de um escritório de advocacia em Brasília"
        width={1600}
        height={1000}
        className="absolute inset-0 size-full object-cover object-center"
      />
      <div className="hero-shade absolute inset-0" />
      <div className="relative mx-auto flex h-full max-w-screen-2xl items-end px-5 pb-20 pt-32 sm:px-8 sm:pb-24 lg:px-14 lg:pb-28">
        <div className="max-w-4xl animate-reveal">
          <p className="mb-5 flex items-center gap-3 text-xs font-semibold uppercase text-brand sm:text-sm">
            <span className="h-px w-9 bg-brand" /> Advocacia estratégica · Brasília
          </p>
          <h1 className="font-display text-[clamp(3rem,8vw,7.5rem)] leading-[0.91]">
            Direito que antecipa
            <br />o próximo movimento.
          </h1>
          <div className="mt-8 grid max-w-2xl grid-cols-1 gap-7 border-t border-hero-line pt-6 sm:grid-cols-[1fr_auto] sm:items-end">
            <p className="max-w-xl text-base leading-7 text-hero-muted sm:text-lg">
              Inteligência jurídica, repertório e presença para decisões que não admitem
              improviso.
            </p>
            <a
              href="#atuacao"
              aria-label="Conheça nossa atuação"
              className="grid size-14 place-items-center border border-brand text-brand transition-colors hover:bg-brand hover:text-brand-foreground"
            >
              <ArrowDown className="size-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
