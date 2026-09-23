import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import { departments } from '../../data/departments'
import { DEPARTMENTS_AUTOPLAY } from '../../lib/carousel'

const DEPARTMENTS_BREAKPOINTS = {
  640: { slidesPerView: 2, spaceBetween: 16 },
  1024: { slidesPerView: 2.6, spaceBetween: 16 },
  1280: { slidesPerView: 3, spaceBetween: 16 },
} as const

function Departments() {
  return (
    <section id="atuacao" className="scroll-mt-18 overflow-hidden bg-charcoal/40 py-24 sm:py-30">
      <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
        <div className="grid gap-6 lg:grid-cols-[1fr_0.7fr] lg:items-end">
          <div>
            <p className="label text-smoke">Departamentos & equipe</p>
            <h2 className="mt-6 text-[clamp(2.25rem,5vw,3.5625rem)] font-light leading-none tracking-[-0.05em]">
              Conhecimento profundo, atuação <span className="accent">integrada.</span>
            </h2>
          </div>
          <p className="max-w-md leading-normal text-white/75 lg:justify-self-end">
            Cada departamento é conduzido por um especialista que responde diretamente pelo seu caso.
          </p>
        </div>

        <Swiper
          modules={[Autoplay, Pagination]}
          loop
          speed={700}
          autoplay={DEPARTMENTS_AUTOPLAY}
          slidesPerView={1.15}
          spaceBetween={12}
          pagination={{ clickable: true }}
          breakpoints={DEPARTMENTS_BREAKPOINTS}
          className="v5-departments-swiper mt-14"
        >
          {departments.map(({ number, name, portrait, lawyer, specialty, service }) => (
            <SwiperSlide key={number}>
              <article className="group flex h-full flex-col">
                <a
                  href="#contato"
                  className="relative block aspect-[4/5] overflow-hidden rounded-card"
                  aria-label={`Falar com ${lawyer}, ${name}`}
                >
                  <img
                    src={portrait}
                    alt={`Retrato de ${lawyer}`}
                    width={720}
                    height={900}
                    loading="lazy"
                    className="size-full object-cover saturate-[0.75] transition-transform duration-700 ease-film group-hover:scale-[1.03]"
                  />
                  <div className="scrim-card absolute inset-0" />
                  <span className="glass label absolute right-4 top-4 rounded-full px-4 py-2">{name}</span>
                  <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                    <p className="text-[21px] font-medium leading-tight tracking-[-0.01em]">{lawyer}</p>
                    <p className="label mt-1 text-white/70">{specialty}</p>
                  </div>
                </a>
                <p className="mt-4 leading-normal text-white/75">{service}</p>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}

export default Departments
