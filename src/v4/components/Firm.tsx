import officeImage from '../../assets/departamentos/publico.jpg'

const stats = [
  { value: '1998', label: 'Ano de fundação' },
  { value: '5', label: 'Departamentos especializados' },
  { value: 'DF · SP', label: 'Escritórios em Brasília e São Paulo' },
]

function Firm() {
  return (
    <section className="pb-18 sm:pb-28">
      <div className="mx-auto grid max-w-[1200px] gap-3 px-5 sm:px-8 lg:grid-cols-2">
        <div className="flex flex-col justify-between gap-12 rounded-card bg-card p-8 sm:p-10">
          <div>
            <p className="label">O escritório</p>
            <h2 className="mt-4 font-display text-[clamp(1.75rem,4vw,2.625rem)] leading-[1.15]">
              Experiência acadêmica e prática jurídica, lado a lado.
            </h2>
            <p className="mt-5 max-w-md leading-normal text-ash">
              Enfrentamos questões de alta complexidade com rigor, proximidade e visão de negócio — em
              qualquer região do país.
            </p>
          </div>

          <dl className="grid grid-cols-3 gap-4 border-t pt-6">
            {stats.map(({ value, label }) => (
              <div key={label}>
                <dt className="sr-only">{label}</dt>
                <dd className="whitespace-nowrap font-display text-[clamp(1.05rem,3vw,2rem)] leading-[1.15]">{value}</dd>
                <dd className="mt-2 text-xs leading-snug text-ash">{label}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="overflow-hidden rounded-card bg-card">
          <img
            src={officeImage}
            alt="Biblioteca jurídica com bustos e estantes de livros"
            width={900}
            height={600}
            loading="lazy"
            className="size-full min-h-72 object-cover saturate-[0.35] brightness-90"
          />
        </div>
      </div>
    </section>
  )
}

export default Firm
