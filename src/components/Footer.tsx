import { ArrowRight } from 'lucide-react'
import { office } from '../data/office'

const links = [
  { href: '#escritorio', label: 'O escritório' },
  { href: '#metodo', label: 'Método' },
  { href: '#atuacao', label: 'Atuação' },
  { href: '#onde-estamos', label: 'Onde estamos' },
]

function Footer() {
  return (
    <footer id="contato" className="bg-hero text-hero-foreground">
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32 lg:px-12">
        <div className="grid gap-12 border-b border-hero-line pb-20 lg:grid-cols-[1.4fr_0.6fr] lg:items-end">
          <div>
            <p className="eyebrow text-brand">Vamos conversar</p>
            <h2 className="mt-8 max-w-3xl font-display text-[clamp(2.75rem,6vw,5.5rem)] leading-[1]">
              Toda boa estratégia começa com a pergunta <em>certa.</em>
            </h2>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row lg:flex-col">
            <a href="mailto:contato@antunesveiga.adv.br" className="btn btn-gold">
              Escrever para o escritório <ArrowRight className="size-4" />
            </a>
            <a href={`tel:${office.phone.replace(/\D/g, '')}`} className="btn btn-line text-hero-foreground">
              {office.phone}
            </a>
          </div>
        </div>

        <div className="grid gap-10 py-14 sm:grid-cols-3">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand">Antunes Veiga</p>
            <p className="mt-4 max-w-xs text-sm leading-7 text-hero-muted">
              Advocacia estratégica desde 1998. Atendimento presencial em Brasília e São Paulo, remoto em
              todo o Brasil.
            </p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand">Endereço</p>
            <p className="mt-4 text-sm leading-7 text-hero-muted">
              {office.address}
              <br />
              {office.district} · CEP {office.cep}
            </p>
          </div>
          <nav aria-label="Rodapé">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand">Navegação</p>
            <ul className="mt-4 space-y-2 text-sm text-hero-muted">
              {links.map(({ href, label }) => (
                <li key={href}>
                  <a href={href} className="transition-colors hover:text-hero-foreground">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="flex flex-col gap-3 border-t border-hero-line pt-8 text-xs text-hero-muted sm:flex-row sm:justify-between">
          <p>© 2026 Antunes Veiga Advocacia</p>
          <p>Conteúdo demonstrativo · Versão 1</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
