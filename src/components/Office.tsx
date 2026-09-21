import { Clock, MapPin, Phone } from 'lucide-react'

const office = {
  address: 'SHIS QI 5, Bloco A, Sala 201',
  district: 'Lago Sul, Brasília – DF',
  cep: '71615-050',
  phone: '+55 (61) 3000-0000',
  hours: 'Segunda a sexta, 9h às 18h',
}

const mapQuery = encodeURIComponent(`${office.address}, ${office.district}, ${office.cep}`)
const mapEmbedUrl = `https://www.google.com/maps?q=${mapQuery}&z=16&output=embed`
const mapLinkUrl = `https://www.google.com/maps/search/?api=1&query=${mapQuery}`

function Office() {
  return (
    <section id="onde-estamos" className="border-t border-border py-20 sm:py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr] lg:items-end">
          <div>
            <p className="eyebrow">Nosso escritório</p>
            <h2 className="mt-6 max-w-xl font-display text-4xl leading-tight sm:text-5xl lg:text-6xl">
              Um espaço pensado para conversas decisivas.
            </h2>
          </div>
          <p className="max-w-xl text-base leading-8 text-muted-foreground lg:justify-self-end">
            Atendimento presencial em Brasília e remoto para todo o Brasil. Agende uma reunião e
            venha nos visitar.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:mt-16 lg:grid-cols-[minmax(280px,0.8fr)_1.6fr]">
          <div className="order-last flex flex-col justify-between gap-8 border border-border p-6 sm:p-8 lg:order-first">
            <dl className="space-y-7">
              <div className="flex gap-4">
                <MapPin className="mt-1 size-5 shrink-0 text-brand" strokeWidth={1.4} />
                <div>
                  <dt className="eyebrow">Endereço</dt>
                  <dd className="mt-2 text-sm leading-7">
                    {office.address}
                    <br />
                    {office.district}
                    <br />
                    CEP {office.cep}
                  </dd>
                </div>
              </div>
              <div className="flex gap-4">
                <Clock className="mt-1 size-5 shrink-0 text-brand" strokeWidth={1.4} />
                <div>
                  <dt className="eyebrow">Horário</dt>
                  <dd className="mt-2 text-sm leading-7">{office.hours}</dd>
                </div>
              </div>
              <div className="flex gap-4">
                <Phone className="mt-1 size-5 shrink-0 text-brand" strokeWidth={1.4} />
                <div>
                  <dt className="eyebrow">Telefone</dt>
                  <dd className="mt-2 text-sm leading-7">
                    <a href={`tel:${office.phone.replace(/\D/g, '')}`}>{office.phone}</a>
                  </dd>
                </div>
              </div>
            </dl>

            <a
              href={mapLinkUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-fit items-center gap-3 border-b border-foreground pb-2 text-xs font-semibold uppercase"
            >
              Como chegar
            </a>
          </div>

          <div className="border border-border">
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
