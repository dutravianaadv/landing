import { departments } from '../data/departments'

const founder = departments[0]

function Testimonial() {
  return (
    <section className="py-24 sm:py-32 lg:py-40">
      <figure className="mx-auto grid max-w-6xl items-center gap-12 px-5 sm:px-8 md:grid-cols-[auto_1fr] md:gap-16 lg:px-12">
        <div className="relative mx-auto w-48 sm:w-56 md:mx-0">
          <div aria-hidden="true" className="absolute -right-4 -top-4 bottom-4 left-4 border border-brand" />
          <img
            src={founder.portrait}
            alt={`Retrato de ${founder.lawyer}`}
            width={720}
            height={900}
            loading="lazy"
            className="relative aspect-[4/5] w-full object-cover"
          />
        </div>

        <div className="text-center md:text-left">
          <span aria-hidden="true" className="block font-display text-8xl leading-[0.5] text-brand">
            “
          </span>
          <blockquote className="mt-4 font-display text-[clamp(1.75rem,3.5vw,2.75rem)] italic leading-[1.2]">
            Nenhum caso complexo se resolve com fórmulas prontas. Antes do primeiro passo, precisamos
            entender o que realmente está em jogo para o cliente.
          </blockquote>
          <figcaption className="mt-8">
            <span className="block font-semibold">{founder.lawyer}</span>
            <span className="mt-1 block text-sm uppercase tracking-[0.12em] text-muted-foreground">
              Sócia fundadora · {founder.name}
            </span>
          </figcaption>
        </div>
      </figure>
    </section>
  )
}

export default Testimonial
