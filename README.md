# Antunes Veiga Advocacia — Landing Page

Protótipo de alta fidelidade (mockup) de uma landing page de escritório de advocacia,
tendo como referência https://elpidiodonizetti.com.br/. Responsivo, com as seções de
departamentos e serviços unificadas.

## Stack

- [Vite](https://vite.dev) + [React 19](https://react.dev) + TypeScript
- [Tailwind CSS v4](https://tailwindcss.com) (via `@tailwindcss/vite`)
- [lucide-react](https://lucide.dev) para ícones
- ESLint (flat config)

## Estrutura

```
src/
  main.tsx          # entrada
  App.tsx           # composição das seções
  index.css         # tokens do design system + utilitários
  components/
    Header.tsx
    Hero.tsx
    About.tsx       # O escritório
    Practices.tsx   # Departamentos & serviços
    Team.tsx
    Footer.tsx      # Contato
  assets/
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
