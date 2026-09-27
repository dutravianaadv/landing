import { ArrowUpRight, Clock, MapPin, Phone } from 'lucide-react'
import type { ReactNode } from 'react'
import { locations, mapEmbedUrl, mapLinkUrl } from '../data/site'
import type { Location } from '../data/site'
import WhatsappIcon from './WhatsappIcon'

const offices = locations.filter((location) => location.mapQuery)

const iconClass = 'mt-0.5 size-4.5 shrink-0 text-gold'

function Info({ icon, label, children }: { icon: ReactNode; label: string; children: ReactNode }) {
  return (
    <div className="flex items-start gap-4">
      {icon}
      <div>
        <h4 className="eyebrow font-semibold text-muted">{label}</h4>
        <div className="mt-1.5 text-[0.95rem] leading-relaxed text-ink">{children}</div>
      </div>
    </div>
  )
}

/** Cartão de um escritório: dados em cima, mapa embaixo, altura proporcional à tela */
function Escritorio({ office }: { office: Location }) {
  const isWhatsapp = office.phoneHref.startsWith('https')

  return (
    <li className="surface flex flex-col overflow-hidden">
      <div className="p-6 sm:p-8">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <p className="eyebrow text-gold-dark">{office.kind}</p>
            <h3 className="title-display mt-2 text-[clamp(1.5rem,2.6vw,2rem)] text-navy">{office.city}</h3>
          </div>
          <a
            href={mapLinkUrl(office.mapQuery ?? '')}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2.5 border border-navy px-5 py-3 text-[0.7rem] font-semibold tracking-[0.16em] text-navy uppercase transition-colors duration-250 hover:bg-navy hover:text-white"
          >
            Como chegar
            <ArrowUpRight
              className="size-3.5 transition-transform duration-250 ease-soft group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              strokeWidth={1.5}
              aria-hidden="true"
            />
          </a>
        </div>

        <div className="mt-7 grid gap-6 sm:grid-cols-[1.3fr_1fr]">
          <Info icon={<MapPin className={iconClass} strokeWidth={1.25} aria-hidden="true" />} label="Endereço">
            <address className="not-italic">
              {office.lines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </address>
          </Info>

          <div className="space-y-6">
            {office.hours && (
              <Info icon={<Clock className={iconClass} strokeWidth={1.25} aria-hidden="true" />} label="Horário">
                {office.hours}
              </Info>
            )}

            <Info
              icon={
                isWhatsapp ? (
                  <WhatsappIcon className={iconClass} />
                ) : (
                  <Phone className={iconClass} strokeWidth={1.25} aria-hidden="true" />
                )
              }
              label={isWhatsapp ? 'WhatsApp' : 'Telefone'}
            >
              <a
                href={office.phoneHref}
                target={isWhatsapp ? '_blank' : undefined}
                rel={isWhatsapp ? 'noopener noreferrer' : undefined}
                className="transition-colors duration-250 hover:text-gold-dark"
              >
                {office.phone}
              </a>
            </Info>
          </div>
        </div>
      </div>

      <div className="map-soft relative mt-auto h-[clamp(260px,38svh,400px)] border-t border-black/10">
        <iframe
          title={`Mapa da localização do escritório em ${office.city}`}
          src={mapEmbedUrl(office.mapQuery ?? '', office.mapZoom)}
          className="absolute inset-0 block size-full"
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </li>
  )
}

function Mapas() {
  return (
    <section id="mapas" className="section-y scroll-mt-28 border-t border-black/5 bg-cream-dark">
      <div className="container-page">
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-end lg:gap-20">
          <div>
            <p className="eyebrow text-gold-dark">Onde estamos</p>
            <h2 className="title-display mt-5 text-[clamp(1.875rem,4vw,2.875rem)] text-navy">
              Atendimento presencial em Manaus e Palmas
            </h2>
          </div>
          <p className="max-w-xl text-[1.0625rem] leading-relaxed text-muted">
            Dois escritórios, o mesmo padrão de atendimento. Quem não pode comparecer continua
            sendo atendido online, de qualquer lugar do Brasil.
          </p>
        </div>

        <ul className="mt-[clamp(2rem,6svh,3.5rem)] grid gap-6 lg:grid-cols-2">
          {offices.map((office) => (
            <Escritorio key={office.city} office={office} />
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Mapas
