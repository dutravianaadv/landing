import { steps } from '../../data/method'

function Method() {
  return (
    <section id="metodo" className="bg-aged-paper py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <p className="eyebrow">Como trabalhamos · desde 1998</p>
        <h2 className="mt-3 max-w-3xl font-display text-[clamp(2.1rem,5vw,4rem)] leading-[1.05]">
          Clareza para compreender. Estratégia para <em>transformar.</em>
        </h2>

        <div className="mt-10 grid gap-4 md:grid-cols-3 lg:mt-14 lg:gap-6">
          {steps.map(({ number, title, text }) => (
            <article key={number} className="rounded-card bg-parchment px-6 py-8 sm:px-8 sm:py-10">
              <p className="text-sm font-semibold text-terracotta">{number}</p>
              <h3 className="mt-6 font-display text-[clamp(1.75rem,3vw,2.125rem)] leading-[1.15]">
                {title}
              </h3>
              <p className="mt-3 leading-normal text-charcoal">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Method
