import { ArrowUpRight, Clock, MapPin, Phone } from 'lucide-react'
import { mapEmbedUrl, mapLinkUrl, office } from '../data/office'

function Office() {
  return (
    <section id="onde-estamos" className="border-t bg-paper py-24 sm:py-32 lg:py-40">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="grid gap-8 lg:grid-cols-[1.4fr_0.8fr] lg:items-end">
          <div>
            <p className="eyebrow">Onde estamos</p>
            <h2 className="mt-8 max-w-3xl font-display text-[clamp(2.5rem,5vw,4.25rem)] leading-[1.02]">
              Um espaço pensado para conversas <em>decisivas.</em>
            </h2>
          </div>
          <p className="max-w-md text-lg leading-8 text-muted-foreground lg:justify-self-end">
            Atendimento presencial em Brasília e remoto para todo o Brasil. Agende uma reunião e venha nos
            visitar.
          </p>
        </div>

        <div className="mt-16 grid border bg-background lg:grid-cols-[minmax(320px,0.8fr)_1.6fr]">
          <div className="order-last flex flex-col justify-between gap-10 p-8 sm:p-10 lg:order-first">
            <dl className="space-y-8">
              <div className="flex gap-5">
                <MapPin className="mt-1 size-5 shrink-0 text-brand" strokeWidth={1.4} />
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">Endereço</dt>
                  <dd className="mt-2 leading-7">
                    {office.address}
                    <br />
                    {office.building} · {office.district}
                    <br />
                    CEP {office.cep}
                  </dd>
                </div>
              </div>
              <div className="flex gap-5">
                <Clock className="mt-1 size-5 shrink-0 text-brand" strokeWidth={1.4} />
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">Horário</dt>
                  <dd className="mt-2 leading-7">{office.hours}</dd>
                </div>
              </div>
              <div className="flex gap-5">
                <Phone className="mt-1 size-5 shrink-0 text-brand" strokeWidth={1.4} />
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">Telefone</dt>
                  <dd className="mt-2 leading-7">
                    <a href={`tel:${office.phone.replace(/\D/g, '')}`}>{office.phone}</a>
                  </dd>
                </div>
              </div>
            </dl>

            <a
              href={mapLinkUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-line w-full text-foreground sm:w-fit"
            >
              Como chegar <ArrowUpRight className="size-4" />
            </a>
          </div>

          <div className="border-b lg:border-b-0 lg:border-l">
            <iframe
              title="Mapa com a localização do escritório Antunes Veiga em Brasília"
              src={mapEmbedUrl}
              className="map-classic block aspect-[4/3] w-full sm:aspect-[16/10] lg:aspect-auto lg:h-full lg:min-h-[460px]"
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
