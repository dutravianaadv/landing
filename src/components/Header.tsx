import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { brand, contact, navLinks } from '../data/site'
import { useScrolled } from '../lib/useScrolled'
import Logo from './Logo'
import WhatsappIcon from './WhatsappIcon'

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const scrolled = useScrolled(16)

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ease-soft ${
        scrolled || menuOpen
          ? 'border-white/10 bg-navy/95 backdrop-blur-md'
          : 'border-transparent bg-navy'
      }`}
    >
      <div className="container-page flex h-20 items-center justify-between gap-6">
        <a href="#inicio" aria-label={`${brand.fullName} — início`} className="shrink-0">
          <Logo circular />
        </a>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Navegação principal">
          {navLinks.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="link-underline py-1 text-[0.8rem] tracking-[0.04em] text-mist/80 transition-colors duration-250 hover:text-white"
            >
              {label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={contact.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-gold hidden px-5 py-3 sm:inline-flex"
          >
            Fale conosco
          </a>
          <a
            href={contact.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Falar no WhatsApp"
            className="grid size-10 place-items-center text-gold transition-opacity hover:opacity-80 sm:hidden"
          >
            <WhatsappIcon className="size-5" />
          </a>
          <button
            type="button"
            aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
            className="grid size-10 place-items-center text-mist transition-colors hover:text-gold lg:hidden"
          >
            {menuOpen ? <X className="size-6" strokeWidth={1.25} /> : <Menu className="size-6" strokeWidth={1.25} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav
          className="h-[calc(100dvh-5rem)] overflow-y-auto border-t border-white/10 bg-navy px-5 py-8 sm:px-8 lg:hidden"
          aria-label="Menu móvel"
        >
          <ul className="space-y-1">
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <a
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center justify-between border-b border-white/10 py-4 font-serif text-2xl text-mist transition-colors hover:text-gold"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={contact.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
            className="btn btn-gold mt-8 w-full"
          >
            Fale conosco
          </a>
          <p className="eyebrow mt-10 text-white/40">Manaus/AM · Palmas/TO · Online no Brasil</p>
        </nav>
      )}
    </header>
  )
}

export default Header
