import { ArrowRight } from 'lucide-react'

function Team() {
  return (
    <section id="equipe" className="py-20 sm:py-28 lg:py-36">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[1fr_1fr] lg:px-12">
        <div>
          <p className="eyebrow">Nossa equipe</p>
          <h2 className="mt-6 font-display text-4xl leading-tight sm:text-5xl lg:text-6xl">
            Excelência é uma prática coletiva.
          </h2>
        </div>
        <div className="flex flex-col justify-between gap-10">
          <p className="text-lg leading-8 text-muted-foreground">
            Profissionais com formação sólida, experiência em cenários decisivos e compromisso
            genuíno com cada cliente.
          </p>
          <a
            href="#contato"
            className="inline-flex w-fit items-center gap-3 border-b border-foreground pb-2 text-xs font-semibold uppercase"
          >
            Conheça nossos profissionais <ArrowRight className="size-4" />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Team
