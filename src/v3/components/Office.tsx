import { Clock, MapPin, Phone } from 'lucide-react'
import { mapEmbedUrl, mapLinkUrl, office } from '../../data/office'

function Office() {
  return (
    <section id="escritorio" className="bg-forest py-20 text-white sm:py-24 lg:py-30">
      <div className="mx-auto grid max-w-[1200px] gap-12 px-6 lg:grid-cols-[1fr_2fr] lg:items-center">
        <div>
          <span className="badge border border-lichen text-fern">
            <span className="font-serif text-sm italic">Nosso escritório</span>
          </span>
          <h2 className="mt-6 font-display text-[clamp(2.5rem,6vw,3.5rem)] leading-[0.86]">
            Um espaço para conversas <span className="text-sprout">decisivas.</span>
          </h2>

          <dl className="mt-10 space-y-6">
            <div className="flex gap-4">
              <MapPin className="mt-0.5 size-5 shrink-0 text-sprout" strokeWidth={1.5} />
              <div>
                <dt className="text-sm font-medium">Endereço</dt>
                <dd className="mt-1 text-sm leading-normal text-fern">
                  {office.address}
                  <br />
                  {office.building} · {office.district}
                  <br />
                  CEP {office.cep}
                </dd>
              </div>
            </div>
            <div className="flex gap-4">
              <Clock className="mt-0.5 size-5 shrink-0 text-sprout" strokeWidth={1.5} />
              <div>
                <dt className="text-sm font-medium">Horário</dt>
                <dd className="mt-1 text-sm leading-normal text-fern">{office.hours}</dd>
              </div>
            </div>
            <div className="flex gap-4">
              <Phone className="mt-0.5 size-5 shrink-0 text-sprout" strokeWidth={1.5} />
              <div>
                <dt className="text-sm font-medium">Telefone</dt>
                <dd className="mt-1 text-sm leading-normal text-fern">
                  <a href={`tel:${office.phone.replace(/\D/g, '')}`}>{office.phone}</a>
                </dd>
              </div>
            </div>
          </dl>

          <a href={mapLinkUrl} target="_blank" rel="noopener noreferrer" className="btn btn-ghost mt-10">
            Como chegar
          </a>
        </div>

        <div className="overflow-hidden rounded-card border border-olive">
          <iframe
            title="Mapa com a localização do escritório Antunes Veiga em Brasília"
            src={mapEmbedUrl}
            className="block aspect-[4/3] w-full sm:aspect-[16/10]"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  )
}

export default Office
