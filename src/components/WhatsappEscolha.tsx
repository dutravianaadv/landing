import { X } from 'lucide-react'
import { useEffect, useRef } from 'react'
import { contact, whatsapps } from '../data/site'
import WhatsappIcon from './WhatsappIcon'

/**
 * Todo link genérico para contact.whatsapp abre esta escolha entre os números.
 * Links com data-direto (cartões de cada escritório) seguem direto para o número.
 * Sem JavaScript, o link continua levando ao WhatsApp de Manaus.
 */
function WhatsappEscolha() {
  const dialogRef = useRef<HTMLDialogElement>(null)

  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      const link = (event.target as Element | null)?.closest?.('a')
      if (!link || link.hasAttribute('data-direto') || link.getAttribute('href') !== contact.whatsapp) return
      event.preventDefault()
      dialogRef.current?.showModal()
    }
    document.addEventListener('click', onClick)
    return () => document.removeEventListener('click', onClick)
  }, [])

  const close = () => dialogRef.current?.close()

  return (
    <dialog
      ref={dialogRef}
      aria-labelledby="whatsapp-escolha-titulo"
      onClick={(event) => event.target === dialogRef.current && close()}
      className="m-auto w-[calc(100%-2rem)] max-w-md rounded-sm bg-cream p-0 text-ink shadow-[0_20px_60px_rgba(0,0,0,0.3)] backdrop:bg-navy-dark/70"
    >
      <div className="p-6 sm:p-8">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="eyebrow text-gold-dark">WhatsApp</p>
            <h2 id="whatsapp-escolha-titulo" className="title-display mt-2 text-2xl text-navy">
              Com qual escritório deseja falar?
            </h2>
          </div>
          <button
            type="button"
            onClick={close}
            aria-label="Fechar"
            className="-mt-1 -mr-2 p-2 text-muted transition-colors duration-250 hover:text-navy"
          >
            <X className="size-5" strokeWidth={1.5} aria-hidden="true" />
          </button>
        </div>

        <ul className="mt-6 space-y-3">
          {whatsapps.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                data-direto
                target="_blank"
                rel="noopener noreferrer"
                onClick={close}
                className="surface flex items-center gap-4 px-5 py-4 transition-colors duration-250 hover:border-gold"
              >
                <span className="grid size-10 shrink-0 place-items-center rounded-full bg-[#25d366] text-white">
                  <WhatsappIcon className="size-5" />
                </span>
                <span>
                  <span className="block text-[0.7rem] tracking-[0.12em] text-muted uppercase">{item.city}</span>
                  <span className="block font-serif text-xl text-navy">{item.phone}</span>
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </dialog>
  )
}

export default WhatsappEscolha
