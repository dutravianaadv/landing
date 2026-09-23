import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import VersionSwitcher from '../../components/VersionSwitcher'

const links = [
  { href: '#metodo', label: 'Como trabalhamos' },
  { href: '#atuacao', label: 'Departamentos' },
  { href: '#escritorio', label: 'Escritório' },
]

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-4 z-30 px-4 sm:top-6 sm:px-6">
      <div className="mx-auto max-w-[1200px] rounded-nav bg-olive/90 text-white shadow-nav backdrop-blur">
        <div className="flex h-14 items-center justify-between gap-4 pl-5 pr-2">
          <div className="flex min-w-0 items-center gap-3">
            <VersionSwitcher
              current={3}
              className="text-lg font-semibold tracking-[-0.03em]"
              menuClassName="rounded-card border border-white/10 bg-forest text-white shadow-nav"
              itemClassName="rounded-xl transition-colors hover:bg-white/5"
              activeItemClassName="text-sprout"
              mutedClassName="font-normal tracking-normal text-fern"
            >
              <span className="truncate">antunes veiga</span>
            </VersionSwitcher>
            <span className="badge hidden bg-sprout text-olive sm:inline-flex">Desde 1998</span>
          </div>

          <nav className="hidden items-center gap-1 text-sm font-medium lg:flex" aria-label="Navegação principal">
            {links.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className="rounded-lg px-3 py-2 text-lichen transition-colors hover:text-white"
              >
                {label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a href="#contato" className="btn btn-sprout hidden py-2! text-sm sm:inline-flex">
              Fale conosco
            </a>
            <button
              type="button"
              aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((open) => !open)}
              className="grid size-10 place-items-center rounded-full text-white hover:bg-white/10 lg:hidden"
            >
              {menuOpen ? <X className="size-5" strokeWidth={1.5} /> : <Menu className="size-5" strokeWidth={1.5} />}
            </button>
          </div>
        </div>

        {menuOpen && (
          <nav className="border-t border-white/10 px-3 pb-3 pt-2 lg:hidden" aria-label="Menu móvel">
            {links.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                onClick={() => setMenuOpen(false)}
                className="block rounded-lg px-3 py-3 text-fern hover:text-white"
              >
                {label}
              </a>
            ))}
            <a
              href="#contato"
              onClick={() => setMenuOpen(false)}
              className="btn btn-sprout mt-2 w-full sm:hidden"
            >
              Fale conosco
            </a>
          </nav>
        )}
      </div>
    </header>
  )
}

export default Header
