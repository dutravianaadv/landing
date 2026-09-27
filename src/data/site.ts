export const brand = {
  initials: 'DV',
  name: 'Dutra & Viana',
  fullName: 'Dutra & Viana Advogados Associados',
  areas: 'Direito Previdenciário e Direito do Trabalho',
}

export const signature = [
  'Conhecimento jurídico para orientar.',
  'Estratégia para proteger.',
  'Atenção para cada história.',
]

export const contact = {
  phone: '(92) 99259-0565',
  phoneHref: 'tel:+5592992590565',
  whatsapp: 'https://wa.me/5592992590565',
  email: 'contato@dutravianaadv.com.br',
  instagram: '@dutravianaadv',
  instagramUrl: 'https://instagram.com/dutravianaadv',
}

export type Location = {
  city: string
  kind: string
  lines: string[]
  /** Linha única para a lista resumida de endereços */
  shortLine: string
  phone: string
  phoneHref: string
  hours?: string
  mapQuery?: string
  mapZoom?: number
}

export const locations: Location[] = [
  {
    city: 'Manaus/AM',
    kind: 'Atendimento local',
    lines: ['Rua Dallas, 110 — Flores', 'CEP 69058-225 — Manaus/AM'],
    shortLine: 'Rua Dallas, 110 — Flores • 69058-225',
    phone: '(92) 99259-0565',
    phoneHref: 'https://wa.me/5592992590565',
    hours: 'Segunda a sexta, 9h às 18h',
    mapQuery: 'Rua Dallas, 110 — Flores, Manaus/AM',
    mapZoom: 17,
  },
  {
    city: 'Palmas/TO',
    kind: 'Atendimento local',
    lines: [
      'Quadra ACNO I (103 Norte)',
      'Conj. 1, lote 37, sala 04',
      'CEP 77001-016 — Palmas/TO',
    ],
    shortLine: 'Quadra ACNO I (103 Norte) • Conj. 1, lote 37, sala 04',
    phone: '(63) 3025-8500',
    phoneHref: 'tel:+556330258500',
    hours: 'Segunda a sexta, 9h às 18h',
    mapQuery: 'Quadra ACNO I, 103 Norte, Conjunto 1, lote 37, sala 04, Palmas/TO',
    mapZoom: 17,
  },
  {
    city: 'Online',
    kind: 'Atendimento em todo o Brasil',
    lines: ['Orientação jurídica à distância', 'Para clientes de todo o país'],
    shortLine: 'Atendimento online para todo o Brasil',
    phone: '(92) 99259-0565',
    phoneHref: 'https://wa.me/5592992590565',
  },
]

/** Embed sem chave de API: mesmo padrão do iframe usado na seção de maps */
export const mapEmbedUrl = (query: string, zoom = 16) =>
  `https://www.google.com/maps?q=${encodeURIComponent(query)}&z=${zoom}&output=embed`

export const mapLinkUrl = (query: string) =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`

/** Âncoras internas: a Home é longa e cada seção precisa de destino no menu */
export const navLinks = [
  { href: '#inicio', label: 'Início' },
  { href: '#escritorio', label: 'O Escritório' },
  { href: '#previdenciario', label: 'Previdenciário' },
  { href: '#trabalhista', label: 'Trabalhista' },
  { href: '#areas', label: 'Áreas de Atuação' },
  { href: '#contato', label: 'Contato' },
]

export const partners = [
  {
    name: 'Eduardo César Dutra',
    role: 'Advogado | Sócio',
    oab: 'OAB/TO 13.296 • OAB/AM 2.678',
  },
  {
    name: 'Washington Luiz Viana',
    role: 'Advogado | Sócio',
    oab: 'OAB/TO 13.164 • OAB/AM 2.662',
  },
]
