const courts = [
  'Supremo Tribunal Federal',
  'Superior Tribunal de Justiça',
  'Tribunal Superior do Trabalho',
  'Tribunal de Contas da União',
  'CARF',
]

function Manifesto() {
  return (
    <section id="manifesto" className="scroll-mt-18 py-24 sm:py-30">
      <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
        <p className="label text-smoke">O escritório</p>
        <p className="mt-8 max-w-5xl text-[clamp(1.75rem,4.2vw,3.375rem)] font-light leading-[1.2] tracking-[-0.025em]">
          Unimos experiência acadêmica e prática jurídica para enfrentar questões de alta complexidade
          com rigor, proximidade e visão de <span className="accent">negócio.</span>
        </p>
      </div>

      {/* Duplicado para a rolagem contínua fechar o loop sem emenda */}
      <div className="mt-20 overflow-hidden border-y py-6 sm:mt-24" aria-label="Atuação perante tribunais superiores">
        <ul className="marquee-track flex w-max">
          {[...courts, ...courts].map((court, index) => (
            <li
              key={`${court}-${index}`}
              aria-hidden={index >= courts.length}
              className="label flex items-center whitespace-nowrap text-sm text-smoke"
            >
              <span className="px-10">{court}</span>
              <span aria-hidden="true" className="size-1 rounded-full bg-graphite" />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Manifesto
