import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowDown,
  ArrowRight,
  Building2,
  ChevronDown,
  Landmark,
  Menu,
  Scale,
  ShieldCheck,
  X,
} from "lucide-react";
import { useState } from "react";
import heroImage from "@/assets/escritorio-hero.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Antunes Veiga | Advocacia Estratégica" },
      {
        name: "description",
        content:
          "Escritório de advocacia com atuação estratégica, técnica e personalizada em todo o Brasil.",
      },
      { property: "og:title", content: "Antunes Veiga | Advocacia Estratégica" },
      {
        property: "og:description",
        content: "Soluções jurídicas consistentes para decisões que não admitem improviso.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const practices = [
  {
    number: "01",
    title: "Contencioso Estratégico",
    description:
      "Condução de causas complexas e sensíveis, da definição da estratégia à sustentação nos tribunais.",
    icon: Scale,
  },
  {
    number: "02",
    title: "Direito Empresarial",
    description:
      "Assessoria jurídica contínua para sociedades, contratos, reorganizações e decisões de negócio.",
    icon: Building2,
  },
  {
    number: "03",
    title: "Direito Público",
    description:
      "Atuação consultiva e contenciosa nas relações com a Administração Pública e órgãos de controle.",
    icon: Landmark,
  },
  {
    number: "04",
    title: "Patrimônio & Sucessões",
    description:
      "Planejamento patrimonial e sucessório com discrição, segurança jurídica e visão de longo prazo.",
    icon: ShieldCheck,
  },
];

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <header className="absolute inset-x-0 top-0 z-30 border-b border-hero-line">
        <div className="mx-auto grid h-20 max-w-screen-2xl grid-cols-[minmax(0,1fr)_auto] items-center px-5 sm:h-24 sm:px-8 lg:px-14">
          <a href="#inicio" className="flex min-w-0 items-center gap-3 text-hero-foreground">
            <span className="grid size-10 shrink-0 place-items-center border border-brand text-lg font-semibold">AV</span>
            <span className="truncate font-display text-lg sm:text-xl">Antunes Veiga</span>
          </a>

          <nav className="hidden items-center gap-8 text-xs font-semibold uppercase text-hero-muted lg:flex" aria-label="Navegação principal">
            <a className="nav-link" href="#escritorio">O escritório</a>
            <a className="nav-link flex items-center gap-1" href="#atuacao">Atuação <ChevronDown className="size-3" /></a>
            <a className="nav-link" href="#equipe">Equipe</a>
            <a className="nav-link" href="#contato">Contato</a>
            <a className="border border-brand px-5 py-3 text-hero-foreground transition-colors hover:bg-brand hover:text-brand-foreground" href="#contato">Fale conosco</a>
          </nav>

          <button
            type="button"
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
            className="grid size-11 place-items-center border border-hero-line text-hero-foreground lg:hidden"
          >
            {menuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>

        {menuOpen && (
          <nav className="border-t border-hero-line bg-hero px-5 py-6 text-hero-foreground lg:hidden" aria-label="Menu móvel">
            <div className="flex flex-col gap-5 text-sm uppercase">
              <a href="#escritorio" onClick={() => setMenuOpen(false)}>O escritório</a>
              <a href="#atuacao" onClick={() => setMenuOpen(false)}>Atuação</a>
              <a href="#equipe" onClick={() => setMenuOpen(false)}>Equipe</a>
              <a href="#contato" onClick={() => setMenuOpen(false)}>Contato</a>
            </div>
          </nav>
        )}
      </header>

      <section id="inicio" className="relative min-h-[760px] h-[92svh] max-h-[980px] bg-hero text-hero-foreground">
        <img src={heroImage} alt="Interior contemporâneo de um escritório de advocacia em Brasília" width={1600} height={1000} className="absolute inset-0 size-full object-cover object-center" />
        <div className="hero-shade absolute inset-0" />
        <div className="relative mx-auto flex h-full max-w-screen-2xl items-end px-5 pb-20 pt-32 sm:px-8 sm:pb-24 lg:px-14 lg:pb-28">
          <div className="max-w-4xl animate-reveal">
            <p className="mb-5 flex items-center gap-3 text-xs font-semibold uppercase text-brand sm:text-sm">
              <span className="h-px w-9 bg-brand" /> Advocacia estratégica · Brasília
            </p>
            <h1 className="font-display text-[clamp(3rem,8vw,7.5rem)] leading-[0.91]">
              Direito que antecipa<br />o próximo movimento.
            </h1>
            <div className="mt-8 grid max-w-2xl grid-cols-1 gap-7 border-t border-hero-line pt-6 sm:grid-cols-[1fr_auto] sm:items-end">
              <p className="max-w-xl text-base leading-7 text-hero-muted sm:text-lg">
                Inteligência jurídica, repertório e presença para decisões que não admitem improviso.
              </p>
              <a href="#atuacao" aria-label="Conheça nossa atuação" className="grid size-14 place-items-center border border-brand text-brand transition-colors hover:bg-brand hover:text-brand-foreground">
                <ArrowDown className="size-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="escritorio" className="border-b border-border py-20 sm:py-28 lg:py-36">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.7fr_1.3fr] lg:px-12">
          <div>
            <p className="eyebrow">O escritório</p>
            <p className="mt-8 font-display text-2xl text-muted-foreground">Desde 1998</p>
          </div>
          <div>
            <h2 className="font-display text-4xl leading-tight sm:text-5xl lg:text-6xl">Clareza para compreender.<br />Estratégia para transformar.</h2>
            <div className="mt-10 grid gap-8 text-base leading-8 text-muted-foreground sm:grid-cols-2">
              <p>Unimos experiência acadêmica e prática jurídica para enfrentar questões de alta complexidade com rigor, proximidade e visão de negócio.</p>
              <p>Cada caso recebe atenção direta, análise multidisciplinar e uma estratégia construída sob medida — em qualquer região do país.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="atuacao" className="bg-surface-dark py-20 text-surface-dark-foreground sm:py-28 lg:py-36">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="grid gap-8 border-b border-dark-line pb-12 lg:grid-cols-[1fr_1.2fr] lg:items-end">
            <div>
              <p className="eyebrow text-brand">Departamentos & serviços</p>
              <h2 className="mt-6 max-w-xl font-display text-4xl leading-tight sm:text-5xl lg:text-6xl">Conhecimento profundo, atuação integrada.</h2>
            </div>
            <p className="max-w-xl text-base leading-8 text-surface-dark-muted lg:justify-self-end">Departamentos especializados trabalham em conjunto para entregar respostas completas — do preventivo ao contencioso.</p>
          </div>

          <div className="divide-y divide-dark-line">
            {practices.map(({ number, title, description, icon: Icon }) => (
              <article key={title} className="practice-row group grid gap-5 py-8 sm:grid-cols-[56px_minmax(0,1fr)_minmax(240px,0.8fr)_48px] sm:items-center sm:gap-6 sm:py-10">
                <span className="text-xs text-brand">{number}</span>
                <div className="flex min-w-0 items-center gap-4">
                  <Icon className="size-6 shrink-0 text-brand" strokeWidth={1.4} />
                  <h3 className="font-display text-2xl sm:text-3xl">{title}</h3>
                </div>
                <p className="text-sm leading-7 text-surface-dark-muted">{description}</p>
                <a href="#contato" aria-label={`Saiba mais sobre ${title}`} className="grid size-11 place-items-center border border-dark-line text-brand transition-all group-hover:border-brand group-hover:bg-brand group-hover:text-brand-foreground">
                  <ArrowRight className="size-4" />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="equipe" className="py-20 sm:py-28 lg:py-36">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[1fr_1fr] lg:px-12">
          <div>
            <p className="eyebrow">Nossa equipe</p>
            <h2 className="mt-6 font-display text-4xl leading-tight sm:text-5xl lg:text-6xl">Excelência é uma prática coletiva.</h2>
          </div>
          <div className="flex flex-col justify-between gap-10">
            <p className="text-lg leading-8 text-muted-foreground">Profissionais com formação sólida, experiência em cenários decisivos e compromisso genuíno com cada cliente.</p>
            <a href="#contato" className="inline-flex w-fit items-center gap-3 border-b border-foreground pb-2 text-xs font-semibold uppercase">Conheça nossos profissionais <ArrowRight className="size-4" /></a>
          </div>
        </div>
      </section>

      <footer id="contato" className="bg-hero text-hero-foreground">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24 lg:px-12">
          <p className="eyebrow text-brand">Vamos conversar</p>
          <div className="mt-8 grid gap-12 border-b border-hero-line pb-16 lg:grid-cols-[1.4fr_0.6fr]">
            <h2 className="max-w-3xl font-display text-4xl leading-tight sm:text-6xl">Toda boa estratégia começa com a pergunta certa.</h2>
            <div className="lg:self-end">
              <a href="mailto:contato@antunesveiga.adv.br" className="inline-flex items-center gap-4 text-sm text-brand">contato@antunesveiga.adv.br <ArrowRight className="size-4" /></a>
              <p className="mt-4 text-sm leading-7 text-hero-muted">Brasília · São Paulo<br />Atendimento em todo o Brasil</p>
            </div>
          </div>
          <div className="mt-8 flex flex-col gap-4 text-xs text-hero-muted sm:flex-row sm:items-center sm:justify-between">
            <p>© 2026 Antunes Veiga Advocacia</p>
            <p>Conteúdo demonstrativo para prototipação</p>
          </div>
        </div>
      </footer>
    </main>
  );
}