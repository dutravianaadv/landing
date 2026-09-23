import { ArrowRight } from 'lucide-react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import { departments } from '../../data/departments'
import { DEPARTMENTS_AUTOPLAY } from '../../lib/carousel'

const DEPARTMENTS_BREAKPOINTS = {
  640: { slidesPerView: 1.6, spaceBetween: 12 },
  1024: { slidesPerView: 2.4, spaceBetween: 12 },
  1280: { slidesPerView: 3, spaceBetween: 12 },
} as const

function Departments() {
  return (
    <section id="atuacao" className="overflow-hidden bg-card/40 py-18 sm:py-28">
      <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
        <div className="grid gap-4 lg:grid-cols-[1fr_0.8fr] lg:items-end">
          <div>
            <p className="label">Departamentos & equipe</p>
            <h2 className="mt-4 max-w-2xl font-display text-[clamp(1.75rem,4vw,2.625rem)] leading-[1.15]">
              Conhecimento profundo, atuação integrada.
            </h2>
          </div>
          <p className="max-w-md leading-normal text-ash lg:justify-self-end">
            Cada departamento é conduzido por um especialista que responde diretamente pelo seu caso.
          </p>
        </div>

        <Swiper
          modules={[Autoplay, Pagination]}
          loop
          autoplay={DEPARTMENTS_AUTOPLAY}
          slidesPerView={1.1}
          spaceBetween={12}
          pagination={{ clickable: true }}
          breakpoints={DEPARTMENTS_BREAKPOINTS}
          className="v4-departments-swiper mt-12"
        >
          {departments.map(({ number, name, image, photo, lawyer, specialty, service }) => (
            <SwiperSlide key={number}>
              <article className="group flex h-full flex-col overflow-hidden rounded-card bg-card">
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={image}
                    alt=""
                    width={900}
                    height={600}
                    loading="lazy"
                    className="size-full object-cover saturate-[0.35] brightness-90 transition duration-700 group-hover:scale-105"
                  />
                </div>

                <div className="flex flex-1 flex-col p-8">
                  <p className="label">Departamento {number}</p>
                  <h3 className="mt-3 font-display text-2xl leading-[1.2] tracking-[0.02em]">{name}</h3>
                  <p className="mt-3 leading-normal text-ash">{service}</p>

                  <div className="mt-8 flex items-center gap-3">
                    <img
                      src={photo}
                      alt={`Foto de ${lawyer}`}
                      width={240}
                      height={240}
                      loading="lazy"
                      className="size-12 shrink-0 rounded-full object-cover"
                    />
                    <div className="min-w-0">
                      <p className="font-[480]">{lawyer}</p>
                      <p className="text-sm text-ash">{specialty}</p>
                    </div>
                  </div>

                  <div className="mt-auto pt-8">
                    <a href="#contato" className="btn btn-ghost py-1.5! text-sm">
                      Falar com {lawyer.split(' ')[0]} <ArrowRight className="size-4" strokeWidth={1.5} />
                    </a>
                  </div>
                </div>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}

export default Departments
