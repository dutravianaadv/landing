# Dutra & Viana Advogados Associados — Landing Page

Landing page institucional do escritório Dutra & Viana Advogados Associados, com atuação em
**Direito Previdenciário** e **Direito do Trabalho** em Manaus/AM, Palmas/TO e atendimento online
em todo o Brasil.

- Conteúdo e estrutura: [`briefing.md`](briefing.md)
- Especificação visual: [`refac.md`](refac.md)

## Stack

- [Vite](https://vite.dev) + [React 19](https://react.dev) + TypeScript
- [Tailwind CSS v4](https://tailwindcss.com) (via `@tailwindcss/vite`)
- [lucide-react](https://lucide.dev) para ícones outline
- ESLint (flat config)

## Design

Direção visual **editorial premium**: azul-marinho profundo (`#06243A`), off-white quente
(`#F7F4ED`) e dourado envelhecido (`#C79A4A`) usado com moderação. Títulos em Cormorant Garamond,
textos em Inter. Bordas discretas, cantos pouco arredondados (2–6px), sombras mínimas e bastante
espaço negativo. CTAs em dourado com texto azul-marinho; secundários em outline.

Todos os tokens vivem em `src/index.css` (`@theme` + `:root`) e as classes utilitárias da marca
(`.btn-gold`, `.btn-outline`, `.eyebrow`, `.rule-gold`, `.surface`, `.reveal`) estão em
`@layer components`.

## Estrutura da página

Sequência das seções, na ordem de `src/App.tsx`:

| # | Componente | Seção |
|---|---|---|
| 1 | `Header` | Navegação fixa, logo DV, CTA "Fale conosco", menu hambúrguer no mobile |
| 2 | `Hero` | Headline da marca, localização, CTAs e foto dos sócios |
| 3 | `Historia` | "Cada caso tem uma história" |
| 4 | `Areas` | Cards de Direito Previdenciário e Direito do Trabalho |
| 5 | `Especializacoes` | Onze especializações: clicar abre o card descritivo |
| 6 | `Situacoes` | Seis situações reais que puxam conversão |
| 7 | `Atuacao` | Forma de atuar: escuta, análise, estratégia, acompanhamento |
| 8 | `Detalhamento` | Lists de serviços de previdência e trabalho |
| 9 | `Empresas` | Consultoria e prevenção trabalhista |
| 10 | `Socios` | Sócios, mapa estilizado do Brasil e endereços |
| 11 | `Mapas` | Mapas de localização de Manaus/AM e Palmas/TO |
| 12 | `Presenca` | Blocos de contato (Manaus, Palmas, online) |
| 13 | `ComoFunciona` | Quatro etapas do atendimento |
| 14 | `Faq` | Acordeão de perguntas frequentes |
| 15 | `CtaFinal` | Chamada final em azul-marinho |
| 16 | `Footer` | Navegação, contato, endereços e advogados |

`EspecializacaoCard` é o diálogo (`role="dialog"`) que abre ao clicar em uma especialização:
resume o assunto, detalha o que é, quem tem direito e os pontos importantes. Fecha por `Esc`,
clique no fundo ou no botão, com bloqueio de scroll e retorno do foco ao item de origem.

`WhatsappFloat` fica fixo no canto inferior direito, com ação recorrente de contato.

## Organização

```
index.html            # entrada HTML única, meta tags e fontes
src/
  main.tsx, App.tsx, index.css
  components/         # uma seção por arquivo + WhatsappIcon
  data/
    site.ts           # marca, contato, navegação, locais, sócios, URLs de mapa
    conteudo.ts       # áreas, especializações, situações, pilares, serviços, etapas, FAQ, imagens
  lib/useScrolled.ts  # fundo do header ao rolar
  assets/             # hero, escritório, áreas, empresas, retratos dos sócios
public/               # favicon e robots.txt
```

## Especializações e mapas

- As 11 especializações vêm de `especializacao.md` e ficam em `especializacoes`
  (`src/data/conteudo.ts`): resumo, o que é, quem tem direito e pontos importantes. Para incluir
  uma nova, basta acrescentar um item ao array — o grid e o card do diálogo leem dali.
- Os mapas usam o embed do Google Maps sem chave de API. `mapQuery` e `mapZoom` em `locations`
  (`src/data/site.ts`) definem o alvo de cada mapa e são convertidos em URL por
  `mapEmbedUrl`/`mapLinkUrl`.
- Endereços e telefones ficam todos em `locations`: `lines` (endereço completo, usado em `Mapas` e
  `Presenca`), `shortLine` (lista resumida em `Socios`), `phone` e `phoneHref`. Manaus atende pelo
  WhatsApp e Palmas por telefone fixo — o ícone do link acompanha o tipo de URL.

## Fotografias

As imagens em `src/assets/` são **placeholders** do Unsplash, escolhidas pela linguagem editorial
(premium, contemporânea, tons quentes). Conforme o `briefing.md`, devem ser substituídas por:

- fotos reais dos dois sócios no hero e em `Socios`;
- foto real do ambiente do escritório;
- foto de atendimento para o bloco de empresas.

Cada import tem o caminho por seção em `src/data/conteudo.ts` (`images`), então a troca é feita em
um único lugar.

## Desenvolvimento

Requer Node.js 20+ e npm.

```sh
npm install
npm run dev       # servidor local
npm run build     # type-check + build em dist/
npm run preview   # serve o build
npm run lint
```

## Deploy

Cada push na `main` publica o site no GitHub Pages pelo workflow
[`.github/workflows/deploy.yml`](.github/workflows/deploy.yml).

No build do workflow, `GITHUB_PAGES=true` faz o Vite usar o caminho base `/advogacia-landing/`.
