import { mapEmbedUrl, mapLinkUrl, office } from '../../data/office'

function Office() {
  return (
    <section id="escritorio" className="py-18 sm:py-28">
      <div className="mx-auto grid max-w-[1200px] gap-3 px-5 sm:px-8 lg:grid-cols-[1fr_1.4fr]">
        <div className="flex flex-col justify-between gap-10 rounded-card bg-card p-8 sm:p-10">
          <div>
            <p className="label">Nosso escritório</p>
            <h2 className="mt-4 font-display text-[clamp(1.75rem,4vw,2.625rem)] leading-[1.15]">
              Um espaço para conversas decisivas.
            </h2>
          </div>

          <dl className="space-y-5 text-sm">
            <div>
              <dt className="label">Endereço</dt>
              <dd className="mt-2 leading-normal">
                {office.address}
                <br />
                {office.building} · {office.district} · CEP {office.cep}
              </dd>
            </div>
            <div>
              <dt className="label">Horário</dt>
              <dd className="mt-2 leading-normal">{office.hours}</dd>
            </div>
            <div>
              <dt className="label">Telefone</dt>
              <dd className="mt-2 leading-normal">
                <a href={`tel:${office.phone.replace(/\D/g, '')}`}>{office.phone}</a>
              </dd>
            </div>
          </dl>

          <a href={mapLinkUrl} target="_blank" rel="noopener noreferrer" className="btn btn-ghost w-fit">
            Como chegar
          </a>
        </div>

        <div className="overflow-hidden rounded-card bg-card">
          <iframe
            title="Mapa com a localização do escritório Antunes Veiga em Brasília"
            src={mapEmbedUrl}
            className="map-dark block aspect-[4/3] w-full sm:aspect-[16/10] lg:aspect-auto lg:h-full lg:min-h-[420px]"
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
