import { ArrowRight } from 'lucide-react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import { departments } from '../../data/departments'
import { DEPARTMENTS_AUTOPLAY } from '../../lib/carousel'

const DEPARTMENTS_BREAKPOINTS = {
  640: { slidesPerView: 1.6, spaceBetween: 16 },
  1024: { slidesPerView: 2.4, spaceBetween: 24 },
  1280: { slidesPerView: 3, spaceBetween: 24 },
} as const

function Departments() {
  return (
    <section id="atuacao" className="overflow-hidden py-20 sm:py-24 lg:py-30">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="mx-auto max-w-3xl text-center">
          <span className="badge badge-wash">
            <span className="font-serif text-sm italic">Departamentos & equipe</span>
          </span>
          <h2 className="mt-6 font-display text-[clamp(2.5rem,6vw,3.5rem)] leading-[0.86]">
            Conhecimento profundo, atuação <span className="text-verdant">integrada.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-normal text-olive/80">
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
          className="v3-departments-swiper mt-12 lg:mt-16"
        >
          {departments.map(
            ({ number, name, icon: Icon, image, photo, lawyer, specialty, service }) => (
              <SwiperSlide key={number}>
                <article className="group flex h-full flex-col rounded-card border border-mist bg-bone p-2">
                  <div className="relative aspect-[16/10] overflow-hidden rounded-2xl">
                    <img
                      src={image}
                      alt=""
                      width={900}
                      height={600}
                      loading="lazy"
                      className="size-full object-cover grayscale transition duration-700 group-hover:scale-105 group-hover:grayscale-0"
                    />
                    <div className="absolute inset-0 bg-forest/30 mix-blend-multiply" />
                    <span className="absolute left-3 top-3 grid size-10 place-items-center rounded-full bg-forest text-sprout">
                      <Icon className="size-5" strokeWidth={1.5} />
                    </span>
                  </div>

                  <div className="flex flex-1 flex-col p-4 sm:p-6">
                    <div className="flex items-center gap-3">
                      <img
                        src={photo}
                        alt={`Foto de ${lawyer}`}
                        width={240}
                        height={240}
                        loading="lazy"
                        className="size-12 shrink-0 rounded-full object-cover"
                      />
                      <div className="min-w-0">
                        <p className="text-sm font-semibold">{lawyer}</p>
                        <span className="badge badge-wash mt-1 px-2! py-0!">{specialty}</span>
                      </div>
                    </div>

                    <h3 className="mt-6 text-2xl font-semibold leading-[1.33] tracking-[-0.015em]">
                      <span className="mr-2 text-base font-medium text-lichen">{number}</span>
                      {name}
                    </h3>
                    <p className="mt-2 text-[15px] leading-normal text-olive/80">{service}</p>

                    <a
                      href="#contato"
                      className="mt-auto inline-flex w-fit items-center gap-2 pt-6 text-sm font-medium text-carbon underline decoration-verdant decoration-2 underline-offset-4"
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
