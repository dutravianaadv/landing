import { steps } from '../../data/method'

function Method() {
  return (
    <section id="metodo" className="py-18 sm:py-28">
      <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
        <p className="label">Como trabalhamos</p>
        <h2 className="mt-4 max-w-3xl font-display text-[clamp(1.75rem,4vw,2.625rem)] leading-[1.15]">
          Clareza para compreender. Estratégia para transformar.
        </h2>

        <div className="mt-12 grid gap-3 md:grid-cols-3">
          {steps.map(({ number, title, text }) => (
            <article key={number} className="rounded-card bg-card p-8">
              <p className="label">Etapa {number}</p>
              <h3 className="mt-10 font-display text-[1.75rem] leading-[1.2] tracking-[0.015em]">
                {title}
              </h3>
              <p className="mt-3 leading-normal text-ash">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Method
