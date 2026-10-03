import { Globe, Mail, MapPin, Phone } from 'lucide-react'
import { contact, locations, whatsapps } from '../data/site'
import WhatsappIcon from './WhatsappIcon'

function Presenca() {
  return (
    <section id="contato" className="section-y scroll-mt-28 border-t border-black/5 bg-cream-dark">
      <div className="container-page">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="eyebrow text-gold-dark">Contato</p>
            <h2 className="title-display mt-5 text-[clamp(1.75rem,3.4vw,2.5rem)] text-navy">
              Fale com a nossa equipe
            </h2>
          </div>
          <a
            href={`mailto:${contact.email}`}
            className="link-underline text-[0.95rem] text-navy transition-colors duration-250 hover:text-gold-dark"
          >
            {contact.email}
          </a>
        </div>

        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {locations.map((location) => (
            <li key={location.city} className="surface p-6">
              <div className="flex items-center gap-3">
                {location.city === 'Online' ? (
                  <Globe className="size-5 text-gold" strokeWidth={1.25} aria-hidden="true" />
                ) : (
                  <MapPin className="size-5 text-gold" strokeWidth={1.25} aria-hidden="true" />
                )}
                <div>
                  <h3 className="title-display text-xl text-navy">{location.city}</h3>
                  <p className="text-[0.7rem] tracking-[0.12em] text-muted uppercase">
                    {location.kind}
                  </p>
                </div>
              </div>

              <p className="mt-5 text-[0.95rem] leading-relaxed text-muted">
                {location.lines.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </p>

              <a
                href={location.phoneHref}
                data-direto
                target={location.phoneHref.startsWith('https') ? '_blank' : undefined}
                rel={location.phoneHref.startsWith('https') ? 'noopener noreferrer' : undefined}
                className="mt-6 inline-flex items-center gap-2 text-[0.7rem] font-medium tracking-[0.14em] text-navy uppercase transition-colors duration-250 hover:text-gold-dark"
              >
                {location.phoneHref.startsWith('https') ? (
                  <WhatsappIcon className="size-3.5" />
                ) : (
                  <Phone className="size-3.5" strokeWidth={1.5} aria-hidden="true" />
                )}
                {location.phone}
              </a>
            </li>
          ))}
        </ul>

        <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-black/10 pt-8">
          {whatsapps.map((item) => (
            <a
              key={item.href}
              href={item.href}
              data-direto
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[0.95rem] text-muted transition-colors duration-250 hover:text-navy"
            >
              <WhatsappIcon className="size-4 text-gold" />
              {item.phone}
            </a>
          ))}
          <a
            href={`mailto:${contact.email}`}
            className="inline-flex items-center gap-2 text-[0.95rem] text-muted transition-colors duration-250 hover:text-navy"
          >
            <Mail className="size-4 text-gold" strokeWidth={1.25} aria-hidden="true" />
            {contact.email}
          </a>
          <a
            href={contact.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="link-underline text-[0.95rem] text-muted transition-colors duration-250 hover:text-navy"
          >
            Instagram {contact.instagram}
          </a>
        </div>
      </div>
    </section>
  )
}

export default Presenca
