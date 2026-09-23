# Antunes Veiga Advocacia — Landing Page

Protótipo de alta fidelidade (mockup) de uma landing page de escritório de advocacia,
tendo como referência https://elpidiodonizetti.com.br/. Responsivo, com as seções de
departamentos e serviços unificadas.

## Stack

- [Vite](https://vite.dev) + [React 19](https://react.dev) + TypeScript
- [Tailwind CSS v4](https://tailwindcss.com) (via `@tailwindcss/vite`)
- [Swiper](https://swiperjs.com) para o carrossel de departamentos
- [lucide-react](https://lucide.dev) para ícones
- ESLint (flat config)

## Versões do mockup

Cinco direções visuais com o mesmo conteúdo. Clicar no logo abre um menu para trocar de versão.

| Versão | Caminho | Estilo | Referência |
|--------|---------|--------|------------|
| v1 · Clássica | `/` | Escuro com dourado, serifa clássica | — |
| v2 · Pergaminho | `/v2/` | Creme quente com acento terracota | `style.md` |
| v3 · Estufa | `/v3/` | Verde-floresta com verde neon | `style2.md` |
| v4 · Alpina | `/v4/` | Grafite escuro com azul-cobalto | `style3.md` |
| v5 · Cinema | `/v5/` | Preto absoluto com luz creme | `style4.md` |

## Estrutura

```
index.html, v2/ … v5/  # uma entrada HTML por versão (multi-page no Vite)
src/
  main.tsx, App.tsx, index.css, components/  # v1
  v2/ … v5/            # cada versão: main.tsx, App.tsx, index.css, components/
  components/VersionSwitcher.tsx             # menu de versões, compartilhado
  data/                # conteúdo compartilhado (departamentos, escritório, método, versões)
  lib/                 # utilitários compartilhados (autoplay do carrossel, scroll)
  assets/              # fotos dos departamentos e da equipe (placeholders do Unsplash)
```

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
[`.github/workflows/deploy.yml`](.github/workflows/deploy.yml):
https://veigagustavo.github.io/advogacia-landing/

No build do workflow, `GITHUB_PAGES=true` faz o Vite usar o caminho base `/advogacia-landing/`.
