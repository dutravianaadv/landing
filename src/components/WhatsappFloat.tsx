import { contact } from '../data/site'
import WhatsappIcon from './WhatsappIcon'

function WhatsappFloat() {
  return (
    <a
      href={contact.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar com a Dutra & Viana no WhatsApp"
      className="group fixed right-5 bottom-5 z-50 grid size-13 place-items-center rounded-full bg-[#25d366] text-white shadow-[0_10px_30px_rgba(0,0,0,0.18)] transition-transform duration-250 ease-soft hover:scale-105 sm:right-6 sm:bottom-6"
    >
      <WhatsappIcon className="size-6" />
      <span className="pointer-events-none absolute right-full mr-3 hidden rounded-sm bg-navy px-3 py-2 text-[0.7rem] tracking-[0.1em] whitespace-nowrap text-mist uppercase opacity-0 transition-opacity duration-250 group-hover:opacity-100 lg:block">
        Fale conosco
      </span>
    </a>
  )
}

export default WhatsappFloat
