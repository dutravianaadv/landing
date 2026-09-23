import { steps } from '../data/method'

const numerals = ['I', 'II', 'III']

function Method() {
  return (
    <section id="metodo" className="border-y bg-paper py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-end">
          <div>
            <p className="eyebrow">Como trabalhamos</p>
            <h2 className="mt-8 font-display text-[clamp(2.5rem,5vw,4.25rem)] leading-[1.02]">
              Um método, do diagnóstico à <em>decisão.</em>
            </h2>
          </div>
          <p className="max-w-md text-lg leading-8 text-muted-foreground lg:justify-self-end">
            Cada caso segue o mesmo cuidado: entender antes de agir, planejar antes de litigar.
          </p>
        </div>

        <ol className="mt-16 grid gap-px bg-border md:grid-cols-3">
          {steps.map(({ number, title, text }, index) => (
            <li key={number} className="bg-paper py-10 md:px-10 md:first:pl-0 md:last:pr-0">
              <span className="font-display text-6xl italic leading-none text-brand">{numerals[index]}</span>
              <h3 className="mt-8 font-display text-3xl">{title}</h3>
              <p className="mt-4 leading-7 text-muted-foreground">{text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

export default Method
