import { contact } from '../data/site'
import WhatsappIcon from './WhatsappIcon'

function CtaFinal() {
  return (
    <section className="section-y bg-navy-dark text-mist">
      <div className="container-page">
        <div className="surface-dark relative overflow-hidden px-6 py-[clamp(3rem,9svh,5rem)] text-center sm:px-14">
          <span aria-hidden="true" className="rule-gold mx-auto" />
          <h2 className="title-display mx-auto mt-7 max-w-3xl text-[clamp(1.875rem,4.4vw,3rem)] text-white">
            Seu caso merece atenção jurídica.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-[1.0625rem] leading-relaxed text-mist/70">
            Se você tem dúvidas sobre seus direitos previdenciários ou trabalhistas, converse com
            nossa equipe. Estamos em Manaus e Palmas e também atendemos online em todo o Brasil.
          </p>

          <a
            href={contact.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-gold mt-10"
          >
            Fale com nossa equipe
            <WhatsappIcon />
          </a>

          <a
            href={contact.phoneHref}
            className="mt-7 block font-serif text-2xl text-gold-light transition-colors duration-250 hover:text-gold"
          >
            {contact.phone}
          </a>
        </div>
      </div>
    </section>
  )
}

export default CtaFinal
