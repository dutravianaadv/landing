import { useState } from 'react'
import { ChevronDown, Menu, X } from 'lucide-react'

const links = [
  { href: '#escritorio', label: 'O escritório' },
  { href: '#atuacao', label: 'Atuação' },
  { href: '#contato', label: 'Contato' },
]

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="absolute inset-x-0 top-0 z-30 border-b border-hero-line">
      <div className="mx-auto grid h-20 max-w-screen-2xl grid-cols-[minmax(0,1fr)_auto] items-center px-5 sm:h-24 sm:px-8 lg:px-14">
        <a href="#inicio" className="flex min-w-0 items-center gap-3 text-hero-foreground">
          <span className="grid size-10 shrink-0 place-items-center border border-brand text-lg font-semibold">
            AV
          </span>
          <span className="truncate font-display text-lg sm:text-xl">Antunes Veiga</span>
        </a>

        <nav
          className="hidden items-center gap-8 text-xs font-semibold uppercase text-hero-muted lg:flex"
          aria-label="Navegação principal"
        >
          {links.map(({ href, label }) => (
            <a key={href} className="nav-link flex items-center gap-1" href={href}>
              {label}
              {href === '#atuacao' && <ChevronDown className="size-3" />}
            </a>
          ))}
          <a
            className="border border-brand px-5 py-3 text-hero-foreground transition-colors hover:bg-brand hover:text-brand-foreground"
            href="#contato"
          >
            Fale conosco
          </a>
        </nav>

        <button
          type="button"
          aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
          className="grid size-11 place-items-center border border-hero-line text-hero-foreground lg:hidden"
        >
          {menuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {menuOpen && (
        <nav
          className="border-t border-hero-line bg-hero px-5 py-6 text-hero-foreground lg:hidden"
          aria-label="Menu móvel"
        >
          <div className="flex flex-col gap-5 text-sm uppercase">
            {links.map(({ href, label }) => (
              <a key={href} href={href} onClick={() => setMenuOpen(false)}>
                {label}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  )
}

export default Header
