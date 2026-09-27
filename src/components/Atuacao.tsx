import { pillars } from '../data/conteudo'

function Atuacao() {
  return (
    <section id="atuacao" className="section-y bg-navy text-mist">
      <div className="container-page">
        <div className="reveal">
          <p className="eyebrow text-gold">Nossa forma de atuar</p>
          <h2 className="title-display mt-5 text-[clamp(1.875rem,4vw,2.875rem)] text-white">
            Mais do que responder perguntas.
            <br />
            Entender o problema.
          </h2>
          <p className="mt-6 max-w-2xl text-[1.0625rem] leading-relaxed text-mist/70">
            Questões jurídicas raramente existem de forma isolada. Por isso, nossa atuação começa pela
            compreensão do contexto, dos documentos e das circunstâncias de cada caso.
          </p>

          <ol className="mt-[clamp(2.5rem,7svh,4rem)] grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
            {pillars.map((pillar) => (
              <li key={pillar.number} className="border-t border-white/15 pt-5">
                <p className="font-serif text-2xl text-gold">{pillar.number}</p>
                <h3 className="eyebrow mt-3 text-white">{pillar.title}</h3>
                <p className="mt-2 text-[0.95rem] leading-relaxed text-mist/60">{pillar.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}

export default Atuacao
