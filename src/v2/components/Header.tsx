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
    <header className="sticky top-0 z-30">
      <p className="bg-terracotta px-4 py-2 text-center text-sm text-parchment">
        Atendimento em todo o Brasil ·{' '}
        <a href="#contato" className="underline underline-offset-2">
          Agende uma reunião
        </a>
      </p>

      <div className="border-b border-taupe bg-parchment/95 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-6 lg:h-[72px] lg:px-10">
          <VersionSwitcher
            current={2}
            className="gap-3"
            menuClassName="rounded-card border border-taupe bg-parchment shadow-float"
            itemClassName="rounded-xl transition-colors hover:bg-aged-paper"
            activeItemClassName="text-terracotta"
            mutedClassName="text-graphite"
          >
            <span className="terracotta-seal grid size-9 shrink-0 place-items-center rounded-xl text-sm font-semibold text-parchment">
              AV
            </span>
            <span className="truncate font-display text-xl">Antunes Veiga</span>
          </VersionSwitcher>

          <nav className="hidden items-center gap-2 text-[15px] lg:flex" aria-label="Navegação principal">
            {links.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className="rounded-xl px-3 py-2 transition-colors hover:bg-aged-paper"
              >
                {label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a href="#contato" className="btn btn-primary hidden sm:inline-flex">
              Fale conosco
            </a>
            <button
              type="button"
              aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((open) => !open)}
              className="grid size-10 place-items-center rounded-full transition-colors hover:bg-aged-paper lg:hidden"
            >
              {menuOpen ? <X className="size-5" strokeWidth={1.5} /> : <Menu className="size-5" strokeWidth={1.5} />}
            </button>
          </div>
        </div>

        {menuOpen && (
          <nav className="border-t border-taupe px-6 py-4 lg:hidden" aria-label="Menu móvel">
            <div className="flex flex-col">
              {links.map(({ href, label }) => (
                <a
                  key={href}
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-xl px-3 py-3 hover:bg-aged-paper"
                >
                  {label}
                </a>
              ))}
              <a
                href="#contato"
                onClick={() => setMenuOpen(false)}
                className="btn btn-primary mt-3 sm:hidden"
              >
                Fale conosco
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}

export default Header
