/** Artigos completos de cada especialização (src/data/artigos/<id>.md), exibidos no card */
const arquivos = import.meta.glob<string>('./artigos/*.md', {
  query: '?raw',
  import: 'default',
  eager: true,
})

export const artigos: Record<string, string> = Object.fromEntries(
  Object.entries(arquivos).map(([caminho, texto]) => [
    caminho.replace(/^.*\/(.+)\.md$/, '$1'),
    texto,
  ]),
)
