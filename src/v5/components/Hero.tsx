import { ArrowDown } from 'lucide-react'
import heroImage from '../../assets/escritorio-hero.jpg'

function Hero() {
  return (
    <section id="inicio" className="relative isolate h-svh min-h-[560px] overflow-hidden">
      <img
        src={heroImage}
        alt="Interior contemporâneo de um escritório de advocacia em Brasília"
        width={1600}
        height={1000}
        className="absolute inset-0 -z-10 size-full object-cover saturate-[0.8]"
      />
      <div className="scrim-bottom absolute inset-0 -z-10" />
      <div className="absolute inset-x-0 top-0 -z-10 h-32 bg-gradient-to-b from-black/50 to-transparent" />

      <div className="mx-auto flex h-full max-w-[1200px] items-end justify-between gap-8 px-5 pb-10 sm:px-8 sm:pb-14">
        <div>
          <p className="label text-white/80">Advocacia estratégica · Brasília · desde 1998</p>
          <h1 className="mt-5 max-w-4xl text-[clamp(2.75rem,8.5vw,7rem)] font-light leading-none tracking-[-0.05em]">
            Direito que antecipa o próximo <span className="accent">movimento.</span>
          </h1>
        </div>

        <a
          href="#manifesto"
          className="glass hidden size-28 shrink-0 flex-col items-center justify-center gap-2 rounded-full border border-white/60 text-center transition-colors duration-300 ease-film hover:bg-white/10 md:flex"
        >
          <ArrowDown className="size-4" strokeWidth={1.25} />
          <span className="text-[13px] uppercase leading-tight tracking-[0.03em]">
            Conheça
            <br />o escritório
          </span>
        </a>
      </div>
    </section>
  )
}

export default Hero
