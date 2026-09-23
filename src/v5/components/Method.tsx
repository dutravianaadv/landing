import { steps } from '../../data/method'

function Method() {
  return (
    <section id="metodo" className="scroll-mt-18 pb-24 sm:pb-30">
      <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
        <h2 className="max-w-3xl text-[clamp(2.25rem,5vw,3.5625rem)] font-light leading-none tracking-[-0.05em]">
          Clareza para compreender.
          <br />
          Estratégia para <span className="accent">transformar.</span>
        </h2>

        <div className="mt-14 grid gap-4 md:grid-cols-3">
          {steps.map(({ number, title, text }) => (
            <article key={number} className="rounded-card bg-charcoal p-7 sm:p-8">
              <p className="label text-smoke">Etapa {number}</p>
              <h3 className="mt-12 text-[1.875rem] font-light leading-[1.2] tracking-[-0.025em]">{title}</h3>
              <p className="mt-4 leading-normal text-white/75">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Method
