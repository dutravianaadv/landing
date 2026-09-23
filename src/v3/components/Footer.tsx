import { ArrowRight } from 'lucide-react'
import { office } from '../../data/office'

function Footer() {
  return (
    <footer id="contato">
      <div className="mx-auto max-w-[1200px] px-6 py-20 text-center sm:py-24 lg:py-30">
        <span className="badge badge-wash">
          <span className="font-serif text-sm italic">Vamos conversar</span>
        </span>
        <h2 className="mx-auto mt-6 max-w-3xl font-display text-[clamp(2.5rem,6vw,3.5rem)] leading-[0.86]">
          Toda boa estratégia começa com a pergunta <span className="text-verdant">certa.</span>
        </h2>
        <p className="mx-auto mt-6 max-w-lg text-lg leading-normal text-olive/80">
          Conte brevemente o seu caso. Um especialista retorna em até um dia útil.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <a href="mailto:contato@antunesveiga.adv.br" className="btn btn-sprout">
            Escrever para o escritório <ArrowRight className="size-4" />
          </a>
          <a href={`tel:${office.phone.replace(/\D/g, '')}`} className="btn btn-outline">
            {office.phone}
          </a>
        </div>
      </div>

      <div className="bg-forest text-fern">
        <div className="mx-auto flex max-w-[1200px] flex-col gap-3 px-6 py-8 text-sm sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Antunes Veiga Advocacia · Brasília · São Paulo</p>
          <p>Conteúdo demonstrativo · Versão 3</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
