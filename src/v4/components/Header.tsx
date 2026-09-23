import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import VersionSwitcher from '../../components/VersionSwitcher'
import { useScrolled } from '../../lib/useScrolled'

const links = [
  { href: '#metodo', label: 'Como trabalhamos' },
  { href: '#atuacao', label: 'Departamentos' },
  { href: '#escritorio', label: 'Escritório' },
]

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const scrolled = useScrolled()
  const solid = scrolled || menuOpen

  return (
    <header
      className={`fixed inset-x-0 top-0 z-30 transition-colors duration-300 ${
        solid ? 'bg-canvas/80 backdrop-blur-xl' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex h-18 max-w-[1200px] items-center justify-between gap-4 px-5 sm:px-8">
        <VersionSwitcher
          current={4}
          className="gap-3"
          menuClassName="rounded-card bg-card"
          itemClassName="rounded-lg transition-colors hover:bg-obsidian"
          activeItemClassName="bg-obsidian"
          mutedClassName="text-ash"
        >
          <span aria-hidden="true" className="grid size-7 shrink-0 place-items-center rounded-full border border-ivory">
            <span className="size-3 rounded-full border border-ivory" />
          </span>
          <span className="truncate font-display text-base">Antunes Veiga</span>
        </VersionSwitcher>

        <nav className="hidden items-center lg:flex" aria-label="Navegação principal">
          {links.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="rounded-pill px-5 py-2 transition-colors hover:bg-obsidian"
            >
              {label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a href="#contato" className="btn btn-cobalt hidden py-2! sm:inline-flex">
            Agendar reunião
          </a>
          <button
            type="button"
            aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
            className="grid size-10 place-items-center rounded-full hover:bg-obsidian lg:hidden"
          >
            {menuOpen ? <X className="size-5" strokeWidth={1.5} /> : <Menu className="size-5" strokeWidth={1.5} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav className="px-5 pb-5 sm:px-8 lg:hidden" aria-label="Menu móvel">
          {links.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              className="block rounded-lg px-3 py-3 hover:bg-obsidian"
            >
              {label}
            </a>
          ))}
          <a
            href="#contato"
            onClick={() => setMenuOpen(false)}
            className="btn btn-cobalt mt-3 w-full sm:hidden"
          >
            Agendar reunião
          </a>
        </nav>
      )}
    </header>
  )
}

export default Header
