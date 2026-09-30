import type { ReactNode } from 'react'
import { contact } from '../data/site'

type Item = { texto: string; sub: string[] }

type Bloco =
  | { tipo: 'titulo'; nivel: 2 | 3; texto: string }
  | { tipo: 'paragrafo'; texto: string }
  | { tipo: 'nota'; texto: string }
  | { tipo: 'lista'; ordenada: boolean; itens: Item[] }
  | { tipo: 'tabela'; linhas: string[][] }

const marcadorItem = /^(-|\d+\.) /
const marcadorSub = /^\s+- /

/** Lê o subconjunto de Markdown usado nos artigos: títulos, parágrafos, listas, notas e tabelas */
function lerBlocos(markdown: string): Bloco[] {
  const linhas = markdown.split('\n')
  const blocos: Bloco[] = []
  let i = 0

  while (i < linhas.length) {
    const linha = linhas[i]

    if (!linha.trim()) {
      i++
      continue
    }

    const titulo = linha.match(/^(#{2,3}) (.+)/)
    if (titulo) {
      blocos.push({ tipo: 'titulo', nivel: titulo[1].length as 2 | 3, texto: titulo[2] })
      i++
      continue
    }

    if (linha.startsWith('> ')) {
      blocos.push({ tipo: 'nota', texto: linha.slice(2) })
      i++
      continue
    }

    if (linha.startsWith('|')) {
      const tabela: string[][] = []
      while (i < linhas.length && linhas[i].startsWith('|')) {
        if (!/^\|[\s|:-]+\|$/.test(linhas[i])) {
          tabela.push(linhas[i].slice(1, -1).split('|').map((celula) => celula.trim()))
        }
        i++
      }
      blocos.push({ tipo: 'tabela', linhas: tabela })
      continue
    }

    if (marcadorItem.test(linha)) {
      const itens: Item[] = []
      while (i < linhas.length && (marcadorItem.test(linhas[i]) || marcadorSub.test(linhas[i]))) {
        if (marcadorSub.test(linhas[i])) itens.at(-1)?.sub.push(linhas[i].replace(marcadorSub, ''))
        else itens.push({ texto: linhas[i].replace(marcadorItem, ''), sub: [] })
        i++
      }
      blocos.push({ tipo: 'lista', ordenada: /^\d/.test(linha), itens })
      continue
    }

    blocos.push({ tipo: 'paragrafo', texto: linha })
    i++
  }

  return blocos
}

/** Negrito e links; "#whatsapp" aponta para o WhatsApp do escritório */
function Inline({ texto }: { texto: string }) {
  const partes = texto.split(/(\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\))/)
  return partes.map((parte, index): ReactNode => {
    if (parte.startsWith('**')) {
      return (
        <strong key={index} className="font-medium text-navy">
          {parte.slice(2, -2)}
        </strong>
      )
    }
    const link = parte.match(/^\[([^\]]+)\]\(([^)]+)\)$/)
    if (link) {
      const href = link[2] === '#whatsapp' ? contact.whatsapp : link[2]
      return (
        <a
          key={index}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-gold-dark underline underline-offset-3 hover:text-navy"
        >
          {link[1]}
        </a>
      )
    }
    return parte
  })
}

function Artigo({ markdown }: { markdown: string }) {
  const blocos = lerBlocos(markdown)

  return (
    <div className="space-y-4 text-[0.95rem] leading-relaxed text-muted">
      {blocos.map((bloco, index) => {
        switch (bloco.tipo) {
          case 'titulo':
            return bloco.nivel === 2 ? (
              <h4
                key={index}
                className="title-display border-t border-black/10 pt-8 text-[1.35rem] text-navy first:border-t-0 first:pt-0"
              >
                {bloco.texto}
              </h4>
            ) : (
              <h5 key={index} className="eyebrow pt-4 text-navy">
                {bloco.texto}
              </h5>
            )
          case 'paragrafo':
            return (
              <p key={index}>
                <Inline texto={bloco.texto} />
              </p>
            )
          case 'nota':
            return (
              <p key={index} className="border-l-2 border-gold bg-cream-dark px-4 py-3">
                <Inline texto={bloco.texto} />
              </p>
            )
          case 'lista': {
            const Lista = bloco.ordenada ? 'ol' : 'ul'
            return (
              <Lista
                key={index}
                className={`space-y-2 pl-5 marker:text-gold-dark ${bloco.ordenada ? 'list-decimal' : 'list-disc'}`}
              >
                {bloco.itens.map((item, itemIndex) => (
                  <li key={itemIndex} className="pl-1">
                    <Inline texto={item.texto} />
                    {item.sub.length > 0 && (
                      <ul className="mt-2 list-[circle] space-y-1.5 pl-5 marker:text-gold-dark">
                        {item.sub.map((sub, subIndex) => (
                          <li key={subIndex} className="pl-1">
                            <Inline texto={sub} />
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </Lista>
            )
          }
          case 'tabela': {
            const [cabecalho, ...corpo] = bloco.linhas
            return (
              <div key={index} className="overflow-x-auto">
                <table className="w-full border-collapse text-left text-[0.9rem]">
                  <thead>
                    <tr>
                      {cabecalho.map((celula) => (
                        <th key={celula} className="border-b border-gold/60 px-3 py-2 font-medium text-navy">
                          {celula}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {corpo.map((linha, linhaIndex) => (
                      <tr key={linhaIndex}>
                        {linha.map((celula, celulaIndex) => (
                          <td key={celulaIndex} className="border-b border-black/10 px-3 py-2">
                            {celula}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )
          }
        }
      })}
    </div>
  )
}

export default Artigo
