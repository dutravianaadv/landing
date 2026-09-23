import { office } from '../../data/office'

function Footer() {
  return (
    <footer id="contato">
      <div className="mx-auto max-w-[1200px] px-5 pb-18 sm:px-8 sm:pb-28">
        <div className="rounded-card bg-card px-6 py-16 text-center sm:px-12 sm:py-20">
          <h2 className="mx-auto max-w-2xl font-display text-[clamp(1.75rem,4vw,2.625rem)] leading-[1.15]">
            Toda boa estratégia começa com a pergunta certa.
          </h2>
          <p className="mx-auto mt-5 max-w-md leading-normal text-ash">
            Conte brevemente o seu caso. Um especialista retorna em até um dia útil.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <a href="mailto:contato@antunesveiga.adv.br" className="btn btn-ghost">
              contato@antunesveiga.adv.br
            </a>
            <a href={`tel:${office.phone.replace(/\D/g, '')}`} className="btn btn-ghost">
              {office.phone}
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-card">
        <div className="mx-auto flex max-w-[1200px] flex-col gap-3 px-5 py-8 text-xs font-[480] tracking-[0.01em] text-ash sm:flex-row sm:justify-between sm:px-8">
          <p>© 2026 Antunes Veiga Advocacia · Brasília · São Paulo</p>
          <p>Conteúdo demonstrativo · Versão 4. Este site não constitui aconselhamento jurídico.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
