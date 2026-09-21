import { ArrowRight, Briefcase, Building2, Landmark, Scale, ShieldCheck } from 'lucide-react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'

const DEPARTMENTS_NAVIGATION = {
  prevEl: '.dept-nav-prev',
  nextEl: '.dept-nav-next',
} as const

const DEPARTMENTS_BREAKPOINTS = {
  640: { slidesPerView: 1.6, spaceBetween: 24 },
  1024: { slidesPerView: 2.4, spaceBetween: 32 },
  1280: { slidesPerView: 3, spaceBetween: 32 },
} as const

const departments = [
  {
    number: '01',
    name: 'Contencioso Estratégico',
    icon: Scale,
    lawyer: 'Helena Antunes',
    specialty: 'Litígios complexos',
    service:
      'Condução de causas sensíveis, da definição da estratégia à sustentação oral nos tribunais superiores.',
  },
  {
    number: '02',
    name: 'Direito Empresarial',
    icon: Building2,
    lawyer: 'Rafael Veiga',
    specialty: 'Direito Societário',
    service:
      'Assessoria contínua para sociedades, contratos, reorganizações e decisões de negócio.',
  },
  {
    number: '03',
    name: 'Direito Público',
    icon: Landmark,
    lawyer: 'Marina Castro',
    specialty: 'Direito Administrativo',
    service:
      'Atuação consultiva e contenciosa perante a Administração Pública e órgãos de controle.',
  },
  {
    number: '04',
    name: 'Patrimônio & Sucessões',
    icon: ShieldCheck,
    lawyer: 'Tiago Moreira',
    specialty: 'Planejamento Sucessório',
    service:
      'Planejamento patrimonial e sucessório com discrição, segurança jurídica e visão de longo prazo.',
  },
  {
    number: '05',
    name: 'Direito do Trabalho',
    icon: Briefcase,
    lawyer: 'Camila Rocha',
    specialty: 'Relações de Trabalho',
    service:
      'Prevenção de passivos, negociações coletivas e defesa em demandas trabalhistas de alta exposição.',
  },
]

function Departments() {
  return (
    <section
      id="atuacao"
      className="overflow-hidden bg-surface-dark py-20 text-surface-dark-foreground sm:py-28 lg:py-36"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="grid gap-8 border-b border-dark-line pb-12 lg:grid-cols-[1fr_1.2fr] lg:items-end">
          <div>
            <p className="eyebrow text-brand">Departamentos & equipe</p>
            <h2 className="mt-6 max-w-xl font-display text-4xl leading-tight sm:text-5xl lg:text-6xl">
              Conhecimento profundo, atuação integrada.
            </h2>
          </div>
          <p className="max-w-xl text-base leading-8 text-surface-dark-muted lg:justify-self-end">
            Cada departamento é conduzido por um especialista que responde diretamente pelo seu
            caso — do preventivo ao contencioso.
          </p>
        </div>

        <Swiper
          modules={[Pagination, Navigation]}
          slidesPerView={1.1}
          spaceBetween={16}
          pagination={{ clickable: true }}
          navigation={DEPARTMENTS_NAVIGATION}
          breakpoints={DEPARTMENTS_BREAKPOINTS}
          className="departments-swiper mt-10 sm:mt-14"
        >
          {departments.map(({ number, name, icon: Icon, lawyer, specialty, service }) => (
            <SwiperSlide key={number}>
              <article className="flex h-full flex-col border border-dark-line p-6 sm:p-8">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-brand">{number}</span>
                  <Icon className="size-6 text-brand" strokeWidth={1.4} />
                </div>
                <h3 className="mt-8 font-display text-3xl leading-tight">{name}</h3>

                <div className="mt-6 border-t border-dark-line pt-6">
                  <p className="text-base font-semibold">{lawyer}</p>
                  <p className="mt-1 text-xs font-semibold uppercase text-brand">
                    Especialista em {specialty}
                  </p>
                  <p className="mt-4 text-sm leading-7 text-surface-dark-muted">{service}</p>
                </div>

                <a
                  href="#contato"
                  className="mt-auto inline-flex w-fit items-center gap-3 pt-8 text-xs font-semibold uppercase text-brand"
                >
                  Falar com {lawyer.split(' ')[0]} <ArrowRight className="size-4" />
                </a>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="mt-8 flex items-center justify-between">
          <p className="text-xs text-surface-dark-muted">Deslize para ver os departamentos</p>
          <div className="flex gap-3">
            <button
              type="button"
              aria-label="Departamento anterior"
              className="dept-nav-prev grid size-11 place-items-center border border-dark-line text-brand transition-colors hover:border-brand hover:bg-brand hover:text-brand-foreground disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-brand disabled:hover:border-dark-line"
            >
              <ArrowRight className="size-4 rotate-180" />
            </button>
            <button
              type="button"
              aria-label="Próximo departamento"
              className="dept-nav-next grid size-11 place-items-center border border-dark-line text-brand transition-colors hover:border-brand hover:bg-brand hover:text-brand-foreground disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-brand disabled:hover:border-dark-line"
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
