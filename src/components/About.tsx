function About() {
  return (
    <section id="escritorio" className="border-b border-border py-20 sm:py-28 lg:py-36">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.7fr_1.3fr] lg:px-12">
        <div>
          <p className="eyebrow">O escritório</p>
          <p className="mt-8 font-display text-2xl text-muted-foreground">Desde 1998</p>
        </div>
        <div>
          <h2 className="font-display text-4xl leading-tight sm:text-5xl lg:text-6xl">
            Clareza para compreender.
            <br />
            Estratégia para transformar.
          </h2>
          <div className="mt-10 grid gap-8 text-base leading-8 text-muted-foreground sm:grid-cols-2">
            <p>
              Unimos experiência acadêmica e prática jurídica para enfrentar questões de alta
              complexidade com rigor, proximidade e visão de negócio.
            </p>
            <p>
              Cada caso recebe atenção direta, análise multidisciplinar e uma estratégia
              construída sob medida — em qualquer região do país.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
