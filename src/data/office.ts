export const office = {
  address: 'SHS Quadra 6, Conjunto A, Bloco E, Sala 1201',
  building: 'Complexo Brasil 21',
  district: 'Asa Sul, Brasília – DF',
  cep: '70316-000',
  phone: '+55 (61) 3000-0000',
  hours: 'Segunda a sexta, 9h às 18h',
}

const mapQuery = encodeURIComponent(`${office.building}, SHS Quadra 6, ${office.district}`)
export const mapEmbedUrl = `https://www.google.com/maps?q=${mapQuery}&z=16&output=embed`
export const mapLinkUrl = `https://www.google.com/maps/search/?api=1&query=${mapQuery}`
