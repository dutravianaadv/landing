import { mapEmbedUrl, mapLinkUrl, office } from '../../data/office'

function Office() {
  return (
    <section id="escritorio" className="scroll-mt-18 py-24 sm:py-30">
      <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
        <h2 className="max-w-3xl text-[clamp(2.25rem,5vw,3.5625rem)] font-light leading-none tracking-[-0.05em]">
          Um espaço para conversas <span className="accent">decisivas.</span>
        </h2>

        <div className="mt-14 grid gap-4 lg:grid-cols-[1fr_1.6fr]">
          <div className="flex flex-col justify-between gap-10 rounded-card bg-charcoal p-7 sm:p-8">
            <dl className="space-y-7">
              <div>
                <dt className="label text-smoke">Endereço</dt>
                <dd className="mt-2 leading-normal">
                  {office.address}
                  <br />
                  {office.building} · {office.district}
                  <br />
                  CEP {office.cep}
                </dd>
              </div>
              <div>
                <dt className="label text-smoke">Horário</dt>
                <dd className="mt-2 leading-normal">{office.hours}</dd>
              </div>
              <div>
                <dt className="label text-smoke">Telefone</dt>
                <dd className="mt-2 leading-normal">
                  <a href={`tel:${office.phone.replace(/\D/g, '')}`}>{office.phone}</a>
                </dd>
              </div>
            </dl>
            <a href={mapLinkUrl} target="_blank" rel="noopener noreferrer" className="btn btn-ghost w-fit">
              Como chegar
            </a>
          </div>

          <div className="overflow-hidden rounded-card bg-charcoal">
            <iframe
              title="Mapa com a localização do escritório Antunes Veiga em Brasília"
              src={mapEmbedUrl}
              className="map-dark block aspect-[4/3] w-full sm:aspect-[16/10] lg:aspect-auto lg:h-full lg:min-h-[440px]"
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
