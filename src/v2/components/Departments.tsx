import { ArrowRight } from 'lucide-react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import { departments } from '../../data/departments'
import { DEPARTMENTS_AUTOPLAY } from '../../lib/carousel'

const DEPARTMENTS_BREAKPOINTS = {
  640: { slidesPerView: 1.6, spaceBetween: 20 },
  1024: { slidesPerView: 2.4, spaceBetween: 24 },
  1280: { slidesPerView: 3, spaceBetween: 24 },
} as const

function Departments() {
  return (
    <section id="atuacao" className="overflow-hidden py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-6 lg:grid-cols-[1fr_0.8fr] lg:items-end">
          <div>
            <p className="eyebrow">Departamentos & equipe</p>
            <h2 className="mt-3 max-w-2xl font-display text-[clamp(2.1rem,5vw,4rem)] leading-[1.05]">
              Conhecimento profundo, atuação <em>integrada.</em>
            </h2>
          </div>
          <p className="max-w-md text-lg font-light leading-[1.4] text-charcoal lg:justify-self-end">
            Cada departamento é conduzido por um especialista que responde diretamente pelo seu caso.
          </p>
        </div>

        <Swiper
          modules={[Autoplay, Pagination]}
          loop
          autoplay={DEPARTMENTS_AUTOPLAY}
          slidesPerView={1.1}
          spaceBetween={16}
          pagination={{ clickable: true }}
          breakpoints={DEPARTMENTS_BREAKPOINTS}
          className="v2-departments-swiper mt-10 lg:mt-14"
        >
          {departments.map(
            ({ number, name, icon: Icon, image, photo, lawyer, specialty, service }) => (
              <SwiperSlide key={number}>
                <article className="group flex h-full flex-col rounded-card bg-aged-paper p-3">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-[18px]">
                    <img
                      src={image}
                      alt=""
                      width={900}
                      height={600}
                      loading="lazy"
                      className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <span className="absolute left-3 top-3 grid size-10 place-items-center rounded-full bg-parchment/90 text-terracotta">
                      <Icon className="size-5" strokeWidth={1.5} />
                    </span>
                  </div>

                  <div className="flex flex-1 flex-col px-3 pb-3 pt-6 sm:px-5 sm:pb-5">
                    <p className="text-sm font-semibold text-terracotta">{number}</p>
                    <h3 className="mt-2 font-display text-3xl leading-[1.15]">{name}</h3>
                    <p className="mt-3 leading-normal text-charcoal">{service}</p>

                    <div className="mt-6 flex items-center gap-3 border-t border-taupe pt-5">
                      <img
                        src={photo}
                        alt={`Foto de ${lawyer}`}
                        width={240}
                        height={240}
                        loading="lazy"
                        className="size-14 shrink-0 rounded-full object-cover"
                      />
                      <div className="min-w-0">
                        <p className="text-sm font-semibold">{lawyer}</p>
                        <p className="text-sm text-graphite">Especialista em {specialty}</p>
                      </div>
                    </div>

                    <a
                      href="#contato"
                      className="mt-auto inline-flex w-fit items-center gap-2 pt-6 text-sm font-semibold text-terracotta"
                    >
                      Falar com {lawyer.split(' ')[0]} <ArrowRight className="size-4" />
                    </a>
                  </div>
                </article>
              </SwiperSlide>
            ),
          )}
        </Swiper>
      </div>
    </section>
  )
}

export default Departments
