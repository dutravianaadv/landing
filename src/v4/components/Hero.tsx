import type { FormEvent } from 'react'
import heroImage from '../../assets/escritorio-hero.jpg'

function openEmailDraft(event: FormEvent<HTMLFormElement>) {
  event.preventDefault()
  const email = new FormData(event.currentTarget).get('email')
  const body = encodeURIComponent(`Olá! Gostaria de agendar uma conversa. Meu e-mail: ${email}`)
  window.location.href = `mailto:contato@antunesveiga.adv.br?subject=Agendamento&body=${body}`
}

function Hero() {
  return (
    <section id="inicio" className="relative isolate overflow-hidden">
      <img
        src={heroImage}
        alt="Interior contemporâneo de um escritório de advocacia em Brasília"
        width={1600}
        height={1000}
        className="absolute inset-0 -z-10 size-full object-cover saturate-[0.35] hue-rotate-[190deg]"
      />
      <div className="absolute inset-0 -z-10 bg-canvas/70" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-b from-transparent to-canvas" />

      <div className="mx-auto flex min-h-svh max-w-[820px] flex-col items-center justify-center px-5 pb-20 pt-32 text-center">
        <h1 className="font-display text-[clamp(2.25rem,7vw,4.0625rem)] leading-[1.1] text-white">
          Direito que antecipa o próximo movimento.
        </h1>
        <p className="mt-6 max-w-[520px] text-lg leading-[1.35] font-[480]">
          Inteligência jurídica, repertório e presença para decisões que não admitem improviso.
        </p>

        <form onSubmit={openEmailDraft} className="mt-10 flex w-full max-w-[480px]">
          <label htmlFor="hero-email" className="sr-only">
            Seu e-mail
          </label>
          <input
            id="hero-email"
            name="email"
            type="email"
            required
            placeholder="Seu e-mail"
            className="min-w-0 flex-1 rounded-l-[32px] border border-r-0 border-ivory bg-transparent px-5 py-3 text-ivory placeholder:text-ash focus:outline-none focus-visible:bg-obsidian"
          />
          <button type="submit" className="btn btn-cobalt shrink-0 rounded-l-none! px-5 sm:px-6">
            Agendar conversa
          </button>
        </form>
        <p className="mt-4 text-xs text-ash">Retornamos em até um dia útil.</p>
      </div>
    </section>
  )
}

export default Hero
