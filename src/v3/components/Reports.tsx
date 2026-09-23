import { Check, Circle } from 'lucide-react'

const reportRows = [
  { label: 'Fase atual', value: 'Instrução probatória', badge: 'Em andamento' },
  { label: 'Risco estimado', value: 'Reduzido após parecer técnico', badge: 'Baixo' },
  { label: 'Próxima audiência', value: '14 de outubro · 14h', badge: 'Confirmada' },
]

const nextSteps = [
  { text: 'Protocolo de memoriais', done: true },
  { text: 'Reunião de alinhamento com a diretoria', done: true },
  { text: 'Sustentação oral no tribunal', done: false },
]

function Reports() {
  return (
    <section className="overflow-hidden bg-forest py-20 text-white sm:py-24 lg:py-30">
      <div className="mx-auto grid max-w-[1200px] items-center gap-16 px-6 lg:grid-cols-[1fr_2fr]">
        <div>
          <span className="badge border border-lichen text-fern">
            <span className="font-serif text-sm italic">Transparência</span>
          </span>
          <h2 className="mt-6 font-display text-[clamp(2.5rem,6vw,3.5rem)] leading-[0.86]">
            Você sabe onde o seu caso <span className="text-sprout">está.</span>
          </h2>
          <p className="mt-6 text-lg leading-normal text-fern">
            Relatórios claros a cada etapa: fase, riscos e próximos passos, sem juridiquês.
          </p>

          <figure className="mt-10 border-l border-lichen pl-5">
            <blockquote className="font-serif text-xl italic leading-[1.4] text-white">
              “Nenhum caso complexo se resolve com fórmulas prontas.”
            </blockquote>
            <figcaption className="mt-3 text-sm text-fern">
              Helena Antunes · Sócia fundadora
            </figcaption>
          </figure>
        </div>

        {/* Cartões flutuantes inclinados, no lugar dos mockups de produto */}
        <div className="relative mx-auto h-[540px] w-full max-w-[640px] sm:h-[500px]">
          <div
            aria-hidden="true"
            className="sprout-orb absolute left-1/2 top-1/2 size-[480px] -translate-x-1/2 -translate-y-1/2 opacity-40"
          />

          <div className="absolute right-0 top-0 w-[82%] rotate-[5deg] rounded-card bg-bone p-6 text-olive opacity-90 shadow-mockup sm:p-8">
            <p className="text-sm font-medium text-lichen">Próximos passos</p>
            <ul className="mt-5 space-y-4">
              {nextSteps.map(({ text, done }) => (
                <li key={text} className="flex items-center gap-3 text-sm">
                  {done ? (
                    <span className="grid size-5 place-items-center rounded-full bg-sprout-wash text-moss">
                      <Check className="size-3" strokeWidth={2} />
                    </span>
                  ) : (
                    <Circle className="size-5 text-fern" strokeWidth={1.5} />
                  )}
                  <span className={done ? 'text-olive/60 line-through' : ''}>{text}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="absolute bottom-0 left-0 w-[88%] -rotate-[4deg] rounded-card bg-white p-6 text-olive shadow-mockup sm:p-8">
            <div className="flex items-center justify-between gap-4">
              <p className="text-sm font-medium text-lichen">Relatório do caso · semana 12</p>
              <span className="size-2.5 rounded-full bg-sprout" />
            </div>
            <p className="mt-3 text-2xl font-semibold leading-[1.33] tracking-[-0.015em]">
              Ação indenizatória · Grupo Horizonte
            </p>
            <dl className="mt-6 divide-y divide-mist border-t border-mist">
              {reportRows.map(({ label, value, badge }) => (
                <div key={label} className="flex items-center justify-between gap-4 py-3">
                  <div className="min-w-0">
                    <dt className="text-xs text-lichen">{label}</dt>
                    <dd className="text-sm">{value}</dd>
                  </div>
                  <dd className="badge badge-wash shrink-0">{badge}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Reports
