import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import VersionSwitcher from './VersionSwitcher'
import { useScrolled } from '../lib/useScrolled'

const links = [
  { href: '#escritorio', label: 'O escritório' },
  { href: '#metodo', label: 'Método' },
  { href: '#atuacao', label: 'Atuação' },
  { href: '#onde-estamos', label: 'Onde estamos' },
]

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const scrolled = useScrolled()
  const solid = scrolled || menuOpen

  return (
    <header
      className={`fixed inset-x-0 top-0 z-30 border-b transition-colors duration-300 ease-classic ${
        solid ? 'border-hero-line bg-hero/95 backdrop-blur' : 'border-transparent bg-transparent'
      }`}
    >
      <div
        className={`mx-auto flex max-w-screen-2xl items-center justify-between gap-6 px-5 transition-[height] duration-300 ease-classic sm:px-8 lg:px-14 ${
          scrolled ? 'h-18' : 'h-20 sm:h-24'
        }`}
      >
        <VersionSwitcher
          current={1}
          className="gap-3 text-hero-foreground"
          menuClassName="border border-hero-line bg-hero text-hero-foreground"
          itemClassName="transition-colors hover:bg-hero-foreground/5"
          activeItemClassName="text-brand"
          mutedClassName="text-hero-muted"
        >
          <span className="grid size-10 shrink-0 place-items-center border border-brand font-display text-lg text-brand">
            AV
          </span>
          <span className="flex min-w-0 flex-col items-start leading-none">
            <span className="truncate font-display text-xl sm:text-2xl">Antunes Veiga</span>
            <span className="mt-1 hidden text-[0.625rem] font-semibold uppercase tracking-[0.3em] text-hero-muted sm:block">
              Advocacia
            </span>
          </span>
        </VersionSwitcher>

        <nav
          className="hidden items-center gap-9 text-[0.8125rem] font-medium uppercase tracking-[0.12em] text-hero-muted lg:flex"
          aria-label="Navegação principal"
        >
          {links.map(({ href, label }) => (
            <a key={href} className="nav-link" href={href}>
              {label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a href="#contato" className="btn btn-line hidden py-3! text-hero-foreground sm:inline-flex">
            Fale conosco
          </a>
          <button
            type="button"
            aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
            className="grid size-11 place-items-center border border-hero-line text-hero-foreground lg:hidden"
          >
            {menuOpen ? <X className="size-5" strokeWidth={1.5} /> : <Menu className="size-5" strokeWidth={1.5} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav className="border-t border-hero-line px-5 pb-8 pt-4 text-hero-foreground sm:px-8 lg:hidden" aria-label="Menu móvel">
          {links.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              className="block border-b border-hero-line py-4 font-display text-3xl"
            >
              {label}
            </a>
          ))}
          <a href="#contato" onClick={() => setMenuOpen(false)} className="btn btn-gold mt-6 w-full">
            Fale conosco
          </a>
        </nav>
      )}
    </header>
  )
}

export default Header
