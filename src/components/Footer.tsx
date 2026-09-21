import { ArrowRight } from 'lucide-react'

function Footer() {
  return (
    <footer id="contato" className="bg-hero text-hero-foreground">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24 lg:px-12">
        <p className="eyebrow text-brand">Vamos conversar</p>
        <div className="mt-8 grid gap-12 border-b border-hero-line pb-16 lg:grid-cols-[1.4fr_0.6fr]">
          <h2 className="max-w-3xl font-display text-4xl leading-tight sm:text-6xl">
            Toda boa estratégia começa com a pergunta certa.
          </h2>
          <div className="lg:self-end">
            <a
              href="mailto:contato@antunesveiga.adv.br"
              className="inline-flex items-center gap-4 text-sm text-brand"
            >
              contato@antunesveiga.adv.br <ArrowRight className="size-4" />
            </a>
            <p className="mt-4 text-sm leading-7 text-hero-muted">
              Brasília · São Paulo
              <br />
              Atendimento em todo o Brasil
            </p>
          </div>
        </div>
        <div className="mt-8 flex flex-col gap-4 text-xs text-hero-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Antunes Veiga Advocacia</p>
          <p>Conteúdo demonstrativo para prototipação</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
