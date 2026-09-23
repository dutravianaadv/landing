const areas = [
  'Litígios complexos',
  'Tribunais superiores',
  'Direito societário',
  'Contratos',
  'Reorganizações',
  'Direito administrativo',
  'Órgãos de controle',
  'Planejamento sucessório',
  'Relações de trabalho',
  'Negociações coletivas',
]

function Areas() {
  return (
    <section className="border-b border-taupe py-12 lg:py-16">
      <div className="mx-auto grid max-w-7xl gap-4 px-6 lg:grid-cols-[200px_1fr] lg:items-baseline lg:px-10">
        <p className="eyebrow">Áreas de atuação</p>
        {/* Cada item leva o "·" antes; a margem negativa esconde o do início de cada linha */}
        <div className="overflow-hidden">
          <ul className="-ml-9 flex flex-wrap gap-y-2 text-sm text-charcoal">
            {areas.map((area) => (
              <li
                key={area}
                className="flex items-center before:w-9 before:text-center before:text-terracotta before:content-['·']"
              >
                {area}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Areas
