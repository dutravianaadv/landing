import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import VersionSwitcher from '../../components/VersionSwitcher'
import { useScrolled } from '../../lib/useScrolled'

const links = [
  { href: '#metodo', label: 'Método' },
  { href: '#atuacao', label: 'Equipe' },
  { href: '#escritorio', label: 'Escritório' },
]

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const scrolled = useScrolled()

  return (
    <header
      className={`fixed inset-x-0 top-0 z-30 transition-colors duration-300 ease-film ${
        scrolled || menuOpen ? 'bg-void' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto grid h-18 max-w-[1200px] grid-cols-[1fr_auto] items-center gap-4 px-5 sm:px-8 lg:grid-cols-[1fr_auto_1fr]">
        <VersionSwitcher
          current={5}
          className="gap-2.5 text-lg font-medium tracking-[-0.03em]"
          menuClassName="glass rounded-card bg-charcoal/80"
          itemClassName="rounded-lg transition-colors hover:bg-white/5"
          activeItemClassName="bg-white/5"
          mutedClassName="font-normal tracking-normal text-smoke"
        >
          <span aria-hidden="true" className="flex h-4 items-end gap-[3px]">
            <span className="h-2 w-[2px] bg-white" />
            <span className="h-4 w-[2px] bg-white" />
            <span className="h-3 w-[2px] bg-white" />
          </span>
          <span className="truncate">antunes veiga</span>
        </VersionSwitcher>

        <nav className="hidden items-center gap-4 text-[15px] font-medium lg:flex" aria-label="Navegação principal">
          {links.map(({ href, label }) => (
            <a key={href} href={href} className="px-2 py-2 transition-opacity hover:opacity-70">
              {label}
            </a>
          ))}
        </nav>

        <div className="flex items-center justify-end gap-2">
          <a href="#contato" className="btn btn-cream hidden py-2! text-[15px] sm:inline-flex">
            Fale conosco
          </a>
          <button
            type="button"
            aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
            className="grid size-10 place-items-center rounded-full lg:hidden"
          >
            {menuOpen ? <X className="size-5" strokeWidth={1.25} /> : <Menu className="size-5" strokeWidth={1.25} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav className="border-t px-5 pb-6 pt-2 sm:px-8 lg:hidden" aria-label="Menu móvel">
          {links.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              className="block py-3 text-2xl font-light tracking-[-0.025em]"
            >
              {label}
            </a>
          ))}
          <a href="#contato" onClick={() => setMenuOpen(false)} className="btn btn-cream mt-4 w-full sm:hidden">
            Fale conosco
          </a>
        </nav>
      )}
    </header>
  )
}

export default Header
