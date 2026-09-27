import Logo from './Logo'
import { brand, contact, locations, navLinks, partners, signature } from '../data/site'

function Footer() {
  return (
    <footer className="bg-navy-dark pt-16 text-mist/70">
      <div className="container-page">
        <div className="grid gap-12 border-b border-white/10 pb-14 sm:grid-cols-2 lg:grid-cols-[1.4fr_0.8fr_1fr_1fr]">
          <div>
            <Logo size="sm" />
            <p className="mt-6 font-serif text-lg leading-relaxed text-mist/80 italic">
              {signature.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </p>
          </div>

          <nav aria-label="Navegação do rodapé">
            <h2 className="eyebrow text-gold">Navegação</h2>
            <ul className="mt-5 space-y-3">
              {navLinks.map(({ href, label }) => (
                <li key={href}>
                  <a
                    href={href}
                    className="text-[0.9rem] transition-colors duration-250 hover:text-gold"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="eyebrow text-gold">Onde atendemos</h2>
            <ul className="mt-5 space-y-4">
              {locations.map((location) => (
                <li key={location.city}>
                  <p className="text-[0.9rem] text-white">{location.city}</p>
                  <p className="mt-1 text-[0.85rem] leading-relaxed">
                    {location.lines.map((line) => (
                      <span key={line} className="block">
                        {line}
                      </span>
                    ))}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="eyebrow text-gold">Contato</h2>
            <ul className="mt-5 space-y-3 text-[0.9rem]">
              <li>
                <a
                  href={contact.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors duration-250 hover:text-gold"
                >
                  WhatsApp {contact.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${contact.email}`}
                  className="transition-colors duration-250 hover:text-gold"
                >
                  {contact.email}
                </a>
              </li>
              <li>
                <a
                  href={contact.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors duration-250 hover:text-gold"
                >
                  Instagram {contact.instagram}
                </a>
              </li>
            </ul>

            <h2 className="eyebrow mt-8 text-gold">Advogados</h2>
            <ul className="mt-5 space-y-4">
              {partners.map((partner) => (
                <li key={partner.name}>
                  <p className="text-[0.9rem] text-white">{partner.name}</p>
                  <p className="mt-1 text-[0.8rem]">{partner.oab}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-2 py-8 text-[0.75rem] sm:flex-row sm:items-center sm:justify-between">
          <p>
            © 2026 {brand.fullName}. Todos os direitos reservados.
          </p>
          <p>
            {brand.areas} · Manaus/AM · Palmas/TO
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
