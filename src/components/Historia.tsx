import { images } from '../data/conteudo'

function Historia() {
  return (
    <section id="escritorio" className="section-y bg-cream">
      <div className="container-page grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <figure className="reveal">
          <div className="overflow-hidden">
            <img
              src={images.marca}
              alt="Marca da Dutra & Viana Advogados Associados em dourado sobre fundo azul"
              width={1200}
              height={800}
              className="media-fit aspect-3/2 w-full object-cover transition-transform duration-700 ease-soft hover:scale-102"
            />
          </div>
        </figure>

        <div className="reveal reveal-delay-1">
          <span className="rule-gold" aria-hidden="true" />
          <h2 className="title-display mt-6 text-[clamp(1.875rem,4vw,2.875rem)] text-navy">
            Cada caso tem uma história.
            <br />
            Cada história merece ser compreendida.
          </h2>
          <p className="mt-6 max-w-xl text-[1.0625rem] leading-relaxed text-muted">
            Antes de qualquer estratégia jurídica, existe uma pessoa, uma família ou uma empresa que
            precisa ser ouvida e orientada. É a partir dessa compreensão que construímos nossa
            atuação.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Historia
