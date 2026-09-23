import { ArrowRight } from 'lucide-react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import { departments } from '../data/departments'
import { DEPARTMENTS_AUTOPLAY } from '../lib/carousel'

const DEPARTMENTS_NAVIGATION = {
  prevEl: '.dept-nav-prev',
  nextEl: '.dept-nav-next',
} as const

const DEPARTMENTS_BREAKPOINTS = {
  640: { slidesPerView: 1.6, spaceBetween: 24 },
  1024: { slidesPerView: 2.4, spaceBetween: 32 },
  1280: { slidesPerView: 3, spaceBetween: 32 },
} as const

function Departments() {
  return (
    <section
      id="atuacao"
      className="overflow-hidden bg-surface-dark py-24 text-surface-dark-foreground sm:py-32 lg:py-40"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="grid gap-8 border-b border-dark-line pb-12 lg:grid-cols-[1.4fr_0.8fr] lg:items-end">
          <div>
            <p className="eyebrow text-brand">Departamentos & equipe</p>
            <h2 className="mt-8 max-w-3xl font-display text-[clamp(2.5rem,5vw,4.25rem)] leading-[1.02]">
              Conhecimento profundo, atuação <em>integrada.</em>
            </h2>
          </div>
          <p className="max-w-md text-lg leading-8 text-surface-dark-muted lg:justify-self-end">
            Cada departamento é conduzido por um especialista que responde diretamente pelo seu
            caso — do preventivo ao contencioso.
          </p>
        </div>

        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          loop
          autoplay={DEPARTMENTS_AUTOPLAY}
          slidesPerView={1.1}
          spaceBetween={16}
          pagination={{ clickable: true }}
          navigation={DEPARTMENTS_NAVIGATION}
          breakpoints={DEPARTMENTS_BREAKPOINTS}
          className="departments-swiper mt-10 sm:mt-14"
        >
          {departments.map(
            ({ number, name, icon: Icon, image, photo, lawyer, specialty, service }) => (
              <SwiperSlide key={number}>
                <article className="group flex h-full flex-col border border-dark-line">
                  <div className="relative aspect-[3/2] overflow-hidden">
                    <img
                      src={image}
                      alt=""
                      width={900}
                      height={600}
                      loading="lazy"
                      className="size-full object-cover grayscale-[35%] transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="dept-image-shade absolute inset-0" />
                    <div className="absolute inset-x-0 top-0 flex items-center justify-between p-5 sm:p-6">
                      <span className="font-display text-lg italic text-brand">{number}</span>
                      <Icon className="size-6 text-brand" strokeWidth={1.4} />
                    </div>
                    <h3 className="absolute inset-x-0 bottom-0 p-5 font-display text-3xl leading-tight sm:p-6">
                      {name}
                    </h3>
                  </div>

                  <div className="flex flex-1 flex-col p-5 sm:p-6">
                    <div className="flex items-center gap-4">
                      <img
                        src={photo}
                        alt={`Foto de ${lawyer}`}
                        width={240}
                        height={240}
                        loading="lazy"
                        className="size-16 shrink-0 border border-brand object-cover"
                      />
                      <div className="min-w-0">
                        <p className="text-base font-semibold">{lawyer}</p>
                        <p className="mt-1 text-xs font-semibold uppercase tracking-[0.1em] text-brand">
                          Especialista em {specialty}
                        </p>
                      </div>
                    </div>
                    <p className="mt-5 leading-7 text-surface-dark-muted">
                      {service}
                    </p>

                    <a
                      href="#contato"
                      className="mt-auto inline-flex w-fit items-center gap-3 pt-6 text-xs font-semibold uppercase tracking-[0.12em] text-brand"
                    >
                      Falar com {lawyer.split(' ')[0]} <ArrowRight className="size-4" />
                    </a>
                  </div>
                </article>
              </SwiperSlide>
            ),
          )}
        </Swiper>

        <div className="mt-8 flex items-center justify-between">
          <p className="text-sm text-surface-dark-muted">Deslize para ver os departamentos</p>
          <div className="hidden gap-3 lg:flex">
            <button
              type="button"
              aria-label="Departamento anterior"
              className="dept-nav-prev grid size-11 place-items-center border border-dark-line text-brand transition-colors hover:border-brand hover:bg-brand hover:text-brand-foreground"
            >
              <ArrowRight className="size-4 rotate-180" />
            </button>
            <button
              type="button"
              aria-label="Próximo departamento"
              className="dept-nav-next grid size-11 place-items-center border border-dark-line text-brand transition-colors hover:border-brand hover:bg-brand hover:text-brand-foreground"
            >
              <ArrowRight className="size-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Departments
