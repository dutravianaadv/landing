import { office } from '../../data/office'

function Footer() {
  return (
    <footer id="contato" className="border-t">
      <div className="mx-auto max-w-[1200px] px-5 py-24 sm:px-8 sm:py-30">
        <h2 className="max-w-5xl text-[clamp(2.75rem,8vw,7rem)] font-light leading-none tracking-[-0.05em]">
          Toda boa estratégia começa com a pergunta <span className="accent">certa.</span>
        </h2>
        <div className="mt-12 flex flex-wrap gap-3">
          <a href="mailto:contato@antunesveiga.adv.br" className="btn btn-cream">
            Escrever para o escritório
          </a>
          <a href={`tel:${office.phone.replace(/\D/g, '')}`} className="btn btn-ghost">
            {office.phone}
          </a>
        </div>
      </div>

      <div className="mx-auto flex max-w-[1200px] flex-col gap-3 border-t px-5 py-8 sm:flex-row sm:justify-between sm:px-8">
        <p className="label text-smoke">© 2026 Antunes Veiga Advocacia · Brasília · São Paulo</p>
        <p className="label text-smoke">Conteúdo demonstrativo · Versão 5</p>
      </div>
    </footer>
  )
}

export default Footer
