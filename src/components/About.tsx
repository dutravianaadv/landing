import libraryImage from '../assets/departamentos/publico.jpg'

const pillars = [
  { title: 'Rigor técnico', text: 'Pesquisa aprofundada e produção acadêmica aplicada a cada tese.' },
  { title: 'Atenção direta', text: 'O especialista responsável conduz o caso do início ao fim.' },
  { title: 'Visão de negócio', text: 'Soluções jurídicas pensadas para a realidade de quem decide.' },
]

function About() {
  return (
    <section id="escritorio" className="py-24 sm:py-32 lg:py-40">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-5 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-24 lg:px-12">
        <div>
          <p className="eyebrow">O escritório · desde 1998</p>
          <h2 className="mt-8 font-display text-[clamp(2.5rem,5vw,4.25rem)] leading-[1.02]">
            Clareza para compreender. Estratégia para <em>transformar.</em>
          </h2>
          <p className="mt-8 max-w-xl text-lg leading-8 text-muted-foreground">
            Unimos experiência acadêmica e prática jurídica para enfrentar questões de alta complexidade
            com rigor, proximidade e visão de negócio — em qualquer região do país.
          </p>

          <dl className="mt-12 grid gap-8 border-t pt-10 sm:grid-cols-3">
            {pillars.map(({ title, text }) => (
              <div key={title}>
                <dt className="font-display text-2xl">{title}</dt>
                <dd className="mt-2 text-sm leading-6 text-muted-foreground">{text}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Moldura dourada deslocada atrás da foto */}
        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div aria-hidden="true" className="absolute -bottom-5 -right-5 left-5 top-5 border border-brand sm:-bottom-6 sm:-right-6" />
          <img
            src={libraryImage}
            alt="Biblioteca jurídica com bustos e estantes de livros"
            width={900}
            height={600}
            loading="lazy"
            className="relative aspect-[4/5] w-full object-cover grayscale-[40%]"
          />
          <p className="absolute -left-3 bottom-8 bg-hero px-6 py-5 text-hero-foreground sm:-left-8">
            <span className="block font-display text-5xl leading-none text-brand">28</span>
            <span className="mt-1 block text-xs uppercase tracking-[0.16em] text-hero-muted">anos de atuação</span>
          </p>
        </div>
      </div>
    </section>
  )
}

export default About
