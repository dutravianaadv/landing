import { departments } from '../../data/departments'

const founder = departments[0]

function Testimonial() {
  return (
    <section className="bg-aged-paper py-16 sm:py-20 lg:py-24">
      <figure className="mx-auto max-w-3xl px-6 text-center">
        <blockquote className="font-display text-[clamp(1.5rem,3.5vw,2.25rem)] font-light italic leading-[1.25]">
          “Nenhum caso complexo se resolve com fórmulas prontas. Antes do primeiro passo, precisamos
          entender o que realmente está em jogo para o cliente.”
        </blockquote>
        <figcaption className="mt-8 flex items-center justify-center gap-3 text-left">
          <img
            src={founder.photo}
            alt={`Foto de ${founder.lawyer}`}
            width={240}
            height={240}
            loading="lazy"
            className="size-14 rounded-full object-cover"
          />
          <div>
            <p className="text-sm font-semibold">{founder.lawyer}</p>
            <p className="text-sm text-graphite">Sócia fundadora · {founder.name}</p>
          </div>
        </figcaption>
      </figure>
    </section>
  )
}

export default Testimonial
