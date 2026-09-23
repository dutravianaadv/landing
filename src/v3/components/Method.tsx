import { steps } from '../../data/method'

function Method() {
  return (
    <section id="metodo" className="py-20 sm:py-24 lg:py-30">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="mx-auto max-w-3xl text-center">
          <span className="badge badge-wash">
            <span className="font-serif text-sm italic">Como trabalhamos</span>
          </span>
          <h2 className="mt-6 font-display text-[clamp(2.5rem,6vw,3.5rem)] leading-[0.86]">
            Clareza para compreender. Estratégia para <span className="text-verdant">transformar.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-normal text-olive/80">
            Desde 1998, cada caso recebe atenção direta e uma estratégia construída sob medida.
          </p>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-3 lg:mt-16 lg:gap-6">
          {steps.map(({ number, title, text }) => (
            <article key={number} className="rounded-card border border-mist bg-bone p-6 sm:p-8">
              <span className="badge badge-wash">Etapa {number}</span>
              <h3 className="mt-8 text-2xl font-semibold leading-[1.33] tracking-[-0.015em]">{title}</h3>
              <p className="mt-3 leading-normal text-olive/80">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Method
