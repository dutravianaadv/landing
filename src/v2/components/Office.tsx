import { Clock, MapPin, Phone } from 'lucide-react'
import { mapEmbedUrl, mapLinkUrl, office } from '../../data/office'

function Office() {
  return (
    <section id="escritorio" className="py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <p className="eyebrow">Nosso escritório</p>
        <h2 className="mt-3 max-w-3xl font-display text-[clamp(2.1rem,5vw,4rem)] leading-[1.05]">
          Um espaço pensado para conversas <em>decisivas.</em>
        </h2>

        <div className="mt-10 grid gap-4 lg:mt-14 lg:grid-cols-[minmax(300px,0.8fr)_1.6fr] lg:gap-6">
          <div className="order-last flex flex-col justify-between gap-8 rounded-card bg-aged-paper p-6 sm:p-8 lg:order-first">
            <dl className="space-y-6">
              <div className="flex gap-4">
                <MapPin className="mt-0.5 size-5 shrink-0 text-terracotta" strokeWidth={1.5} />
                <div>
                  <dt className="text-sm font-semibold">Endereço</dt>
                  <dd className="mt-1 text-sm leading-normal text-charcoal">
                    {office.address}
                    <br />
                    {office.building} · {office.district}
                    <br />
                    CEP {office.cep}
                  </dd>
                </div>
              </div>
              <div className="flex gap-4">
                <Clock className="mt-0.5 size-5 shrink-0 text-terracotta" strokeWidth={1.5} />
                <div>
                  <dt className="text-sm font-semibold">Horário</dt>
                  <dd className="mt-1 text-sm leading-normal text-charcoal">{office.hours}</dd>
                </div>
              </div>
              <div className="flex gap-4">
                <Phone className="mt-0.5 size-5 shrink-0 text-terracotta" strokeWidth={1.5} />
                <div>
                  <dt className="text-sm font-semibold">Telefone</dt>
                  <dd className="mt-1 text-sm leading-normal text-charcoal">
                    <a href={`tel:${office.phone.replace(/\D/g, '')}`}>{office.phone}</a>
                  </dd>
                </div>
              </div>
            </dl>

            <a href={mapLinkUrl} target="_blank" rel="noopener noreferrer" className="btn btn-outline w-fit">
              Como chegar
            </a>
          </div>

          <div className="overflow-hidden rounded-card bg-aged-paper">
            <iframe
              title="Mapa com a localização do escritório Antunes Veiga em Brasília"
              src={mapEmbedUrl}
              className="block aspect-[4/3] w-full sm:aspect-[16/10] lg:aspect-auto lg:h-full lg:min-h-[420px]"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Office
