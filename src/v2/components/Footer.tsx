import { ArrowRight } from 'lucide-react'
import { office } from '../../data/office'

function Footer() {
  return (
    <footer id="contato" className="bg-aged-paper">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-20 lg:px-10 lg:py-24">
        <div className="rounded-card bg-parchment px-6 py-12 text-center shadow-float sm:px-12 sm:py-16">
          <p className="eyebrow">Vamos conversar</p>
          <h2 className="mx-auto mt-3 max-w-3xl font-display text-[clamp(2.1rem,5vw,4rem)] leading-[1.05]">
            Toda boa estratégia começa com a pergunta <em>certa.</em>
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-lg font-light leading-[1.4] text-charcoal">
            Conte brevemente o seu caso. Um especialista retorna em até um dia útil.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a href="mailto:contato@antunesveiga.adv.br" className="btn btn-primary">
              Escrever para o escritório <ArrowRight className="size-4" />
            </a>
            <a href={`tel:${office.phone.replace(/\D/g, '')}`} className="btn btn-outline">
              {office.phone}
            </a>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 text-sm text-graphite sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Antunes Veiga Advocacia · Brasília · São Paulo</p>
          <p>Conteúdo demonstrativo · Versão 2</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
