import { ArrowRight, MapPin } from 'lucide-react'
import { brand, contact, partners } from '../data/site'
import { images } from '../data/conteudo'
import WhatsappIcon from './WhatsappIcon'

function Hero() {
  return (
    <section id="inicio" className="flex min-h-svh items-center bg-navy pt-20">
      <div className="container-page grid items-center gap-[clamp(2.5rem,6svh,4rem)] py-[clamp(2.5rem,7svh,5rem)] lg:grid-cols-[1.05fr_0.95fr]">
        <div className="reveal">
          <p className="eyebrow text-gold">{brand.fullName}</p>

          <h1 className="title-display mt-7 text-[clamp(2.25rem,5.2vw,3.5rem)] text-white">
            Conhecimento jurídico{' '}
            <br className="hidden sm:block" />
            para orientar.
            <br />
            Estratégia para proteger.
          </h1>

          <p className="title-display mt-4 text-[clamp(1.5rem,3.4vw,2.125rem)] text-gold italic">
            Atenção para cada história.
          </p>

          <div className="mt-8 max-w-xl border-l border-gold/40 pl-5">
            <p className="text-[0.95rem] leading-relaxed text-mist/75">
              A {brand.name} Advogados Associados atua principalmente nas áreas de Direito
              Previdenciário e Direito do Trabalho, oferecendo orientação jurídica para pessoas e
              empresas.
            </p>
          </div>

          <p className="mt-6 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-mist/60">
            <MapPin className="size-4 text-gold" strokeWidth={1.25} />
            Manaus/AM <span className="text-gold/60">•</span> Palmas/TO
            <span className="block w-full sm:inline sm:w-auto">
              Atendimento online em todo o Brasil
            </span>
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href={contact.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-gold"
            >
              Fale com nossa equipe
              <WhatsappIcon />
            </a>
            <a href="#escritorio" className="btn btn-ghost-light">
              Conheça o escritório
              <ArrowRight className="size-4" strokeWidth={1.5} />
            </a>
          </div>
        </div>

        <figure className="reveal reveal-delay-1 relative">
          <div className="overflow-hidden bg-navy-dark">
            <img
              src={images.hero}
              alt="Eduardo César Dutra e Washington Luiz Viana, sócios da Dutra & Viana Advogados Associados"
              width={1096}
              height={1600}
              className="aspect-4/5 max-h-[calc(100svh-15rem)] min-h-[320px] w-full object-cover object-[center_18%] transition-transform duration-700 ease-soft hover:scale-102"
            />
          </div>

          <figcaption className="mt-4 grid grid-cols-2 gap-4 border-t border-white/15 pt-4">
            {partners.map((partner) => (
              <div key={partner.name}>
                <p className="text-[0.8rem] leading-snug font-medium text-mist">{partner.name}</p>
                <p className="mt-1 text-[0.7rem] tracking-[0.06em] text-white/45">{partner.oab}</p>
              </div>
            ))}
          </figcaption>
        </figure>
      </div>
    </section>
  )
}

export default Hero
