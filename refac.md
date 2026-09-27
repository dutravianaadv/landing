# Especificação visual --- Landing Page Dutra & Viana Advogados Associados

## 1. Objetivo da página

Landing page institucional para um escritório de advocacia com
posicionamento premium, profissional e próximo.

A página deve transmitir:

-   autoridade jurídica;
-   confiança;
-   sofisticação;
-   atendimento humanizado;
-   clareza;
-   experiência;
-   foco em Previdenciário e Trabalhista;
-   capacidade de atendimento presencial em Manaus/AM e Palmas/TO;
-   atendimento online em todo o Brasil.

A referência visual utiliza uma combinação de **azul-marinho profundo +
branco/off-white + dourado envelhecido**, com fotografias editoriais de
ambientes corporativos e retratos profissionais.

O design deve parecer um escritório jurídico moderno e premium, mas sem
estética excessivamente corporativa ou fria.

------------------------------------------------------------------------

# 2. Direção visual

## Paleta de cores

### Azul-marinho principal

Cor dominante da identidade.

Uso:

-   header;
-   hero;
-   cards de destaque;
-   seção de processo;
-   FAQ/footer;
-   botões escuros;
-   fundos institucionais.

Sugestão aproximada:

``` css
--navy-900: #06243A;
--navy-950: #041C2D;
--navy-800: #0B3048;
```

O azul deve ser **muito escuro, sofisticado e levemente azulado**,
evitando azul royal ou azul muito saturado.

### Dourado envelhecido

Usado como cor de destaque.

Uso:

-   logo;
-   pequenos títulos;
-   linhas decorativas;
-   ícones;
-   bordas;
-   botões CTA;
-   números das etapas;
-   pequenos elementos de navegação.

Sugestão:

``` css
--gold-500: #C79A4A;
--gold-600: #B88738;
--gold-light: #D8B66A;
```

O dourado não deve parecer amarelo vivo. Deve lembrar **bronze/dourado
envelhecido**.

### Off-white

Fundo principal das seções claras.

``` css
--cream: #F7F4ED;
--cream-2: #F1EEE6;
--white: #FFFFFF;
```

A página não utiliza branco puro em excesso. Os fundos claros possuem
aspecto levemente quente.

### Texto

``` css
--text-primary: #102235;
--text-secondary: #53606B;
--text-light: #E8EDF0;
```

------------------------------------------------------------------------

# 3. Tipografia

A identidade utiliza uma combinação de:

### Serifada para títulos

Os títulos possuem aparência editorial, jurídica e sofisticada.

Características:

-   serif;
-   contraste moderado;
-   elegante;
-   semelhante a fontes como Cormorant Garamond, Libre Baskerville,
    Playfair Display ou uma serif institucional equivalente.

Exemplo:

``` css
font-family: "Cormorant Garamond", Georgia, serif;
```

Os títulos devem ter bastante presença.

### Sans-serif para textos

Utilizada para:

-   menus;
-   descrições;
-   botões;
-   informações;
-   cards;
-   labels;
-   informações de contato.

Sugestão:

``` css
font-family: "Inter", "Montserrat", Arial, sans-serif;
```

A combinação ideal é:

``` text
Títulos → Serif elegante
Textos → Sans-serif limpa
```

------------------------------------------------------------------------

# 4. Estrutura geral

A página é longa e possui aproximadamente esta sequência:

``` text
HEADER
│
├── HERO
│
├── INTRODUÇÃO / FILOSOFIA
│
├── ÁREAS DE ATUAÇÃO — 2 CARDS
│
├── SITUAÇÕES / DORES DO CLIENTE
│
├── BLOCO VISUAL + SITUAÇÕES
│
├── PROCESSO DE ATENDIMENTO
│
├── DETALHAMENTO DAS ÁREAS
│
├── ÁREA PARA EMPRESAS
│
├── LOCALIZAÇÃO / PRESENÇA
│
├── FAQ
│
├── CTA FINAL
│
└── FOOTER
```

------------------------------------------------------------------------

# 5. Header

## Estrutura

Header horizontal ocupando toda a largura.

Fundo:

``` text
#06243A
```

Altura aproximada:

``` text
70–85px desktop
```

Conteúdo centralizado em um container de aproximadamente:

``` text
1200–1280px
```

### Lado esquerdo

Logo:

``` text
DV
DUTRA & VIANA
ADVOGADOS ASSOCIADOS
```

A marca utiliza:

-   símbolo estilizado "DV";
-   dourado;
-   nome em branco;
-   subtítulo menor.

O logo fica alinhado verticalmente ao centro.

### Navegação

Itens:

``` text
Início
O Escritório
Previdenciário
Trabalhista
Áreas de Atuação
Conteúdo
Contato
```

Características:

-   fonte pequena;
-   branca/cinza clara;
-   espaçamento generoso;
-   aparência discreta.

### CTA do header

Botão dourado:

``` text
FALE CONOSCO
```

Com ícone do WhatsApp.

O botão deve possuir:

-   fundo dourado;
-   texto azul-marinho;
-   cantos levemente arredondados;
-   altura compacta.

### Mobile

No mobile:

``` text
Logo                    Menu ☰
```

A navegação deve virar menu hamburguer.

------------------------------------------------------------------------

# 6. Hero

## Composição

Hero dividido em duas partes.

Desktop:

``` text
┌──────────────────────────────┬───────────────────────────┐
│                              │                           │
│ Texto                        │ Fotos dos advogados       │
│                              │                           │
│ CTA                          │                           │
│                              │                           │
└──────────────────────────────┴───────────────────────────┘
```

O fundo inteiro é azul-marinho.

Altura aproximada:

``` text
480–560px
```

## Coluna esquerda

Possui um pequeno eyebrow:

``` text
DUTRA & VIANA ADVOGADOS ASSOCIADOS
```

Em dourado.

### Headline

Texto grande:

``` text
CONHECIMENTO JURÍDICO
PARA ORIENTAR.
ESTRATÉGIA PARA PROTEGER.
```

A headline deve ser serifada e clara.

A primeira parte possui aproximadamente 40--48px desktop.

### Subheadline

Destaque:

``` text
ATENÇÃO PARA CADA HISTÓRIA.
```

Dourado, serifado ou semi-serifado.

Depois:

``` text
A Dutra & Viana Advogados Associados atua principalmente
nas áreas de Direito Previdenciário e Direito do Trabalho,
oferecendo orientação jurídica para pessoas e empresas.
```

### Localização

Linha com ícone de localização:

``` text
Manaus/AM • Palmas/TO
```

E:

``` text
Atendimento online em todo o Brasil
```

### CTAs

Dois botões:

``` text
FALE COM NOSSA EQUIPE  [WhatsApp]
```

Botão dourado.

Segundo:

``` text
CONHEÇA O ESCRITÓRIO →
```

Botão transparente/outline.

------------------------------------------------------------------------

# 7. Imagem dos advogados

No lado direito do hero aparecem dois advogados lado a lado.

Características:

-   homens;
-   ternos azul-marinho;
-   camisa branca;
-   gravata;
-   aparência profissional;
-   braços cruzados;
-   iluminação quente;
-   fundo de escritório premium;
-   profundidade de campo.

A fotografia deve ocupar quase toda a altura do hero.

Sobre a parte inferior da imagem aparecem os nomes e registros
profissionais:

``` text
Eduardo César Dutra
OAB/TO ...

Washington Luiz Viana
OAB/TO ...
```

Essas informações ficam discretas.

------------------------------------------------------------------------

# 8. Seção "Cada caso tem uma história"

Fundo:

``` text
#F7F4ED
```

Layout:

``` text
┌──────────────────────┬─────────────────────────────────────┐
│                      │                                     │
│ Foto escritório      │ Cada caso tem uma história.         │
│                      │ Cada história merece ser            │
│                      │ compreendida.                       │
│                      │                                     │
└──────────────────────┴─────────────────────────────────────┘
```

Imagem à esquerda.

Imagem:

-   escritório;
-   mesa;
-   cadeira;
-   notebook/documentos;
-   iluminação natural;
-   plantas;
-   estética premium.

À direita:

Pequena linha dourada acima do título.

Headline:

``` text
Cada caso tem uma história.
Cada história merece ser compreendida.
```

Texto:

``` text
Antes de qualquer estratégia jurídica, existe uma pessoa,
uma família ou uma empresa que precisa ser ouvida e orientada.
É a partir dessa compreensão que construímos nossa atuação.
```

Essa seção deve passar **humanização**.

------------------------------------------------------------------------

# 9. Áreas de atuação

Título central:

``` text
Duas áreas. Diferentes desafios.
Uma atuação jurídica próxima e estratégica.
```

Texto introdutório abaixo.

Dois cards lado a lado.

------------------------------------------------------------------------

## Card Previdenciário

Imagem superior ocupando aproximadamente metade do card.

Imagem:

-   pessoa idosa;
-   atendimento;
-   ambiente médico/corporativo;
-   mãos/documentos.

Overlay azul-marinho translúcido.

Conteúdo:

``` text
DIREITO PREVIDENCIÁRIO
```

Descrição:

``` text
Aposentadoria, benefício do INSS, planejamento
previdenciário, revisão, benefício por incapacidade,
BPC/LOAS, pensão por morte e outras questões
previdenciárias.
```

CTA:

``` text
CONHEÇA O PREVIDENCIÁRIO →
```

------------------------------------------------------------------------

## Card Trabalhista

Imagem:

-   trabalhador;
-   ambiente de construção;
-   capacete;
-   contexto profissional.

Conteúdo:

``` text
DIREITO DO TRABALHO
```

Descrição relacionada a:

-   trabalhadores;
-   empresas;
-   relações de trabalho;
-   prevenção de conflitos;
-   demandas judiciais.

CTA:

``` text
CONHEÇA O TRABALHISTA →
```

------------------------------------------------------------------------

# 10. Seção de identificação de problemas

Fundo claro.

Layout:

``` text
┌──────────────────┬─────────┬─────────┬─────────┐
│ Talvez você      │ Card    │ Card    │ Card    │
│ esteja procurando│         │         │         │
│ orientação porque│         │         │         │
│ ...              │         │         │         │
├──────────────────┼─────────┼─────────┼─────────┤
│                  │ Card    │ Card    │ Card    │
└──────────────────┴─────────┴─────────┴─────────┘
```

Título:

``` text
Talvez você esteja
procurando orientação porque...
```

Texto curto:

``` text
Entendemos que cada situação é única.
Veja algumas das situações mais comuns
em que podemos ajudar.
```

## Cards

Seis cards pequenos.

Cada card possui:

-   ícone dourado;
-   título;
-   descrição;
-   link "Saiba mais →".

Exemplos:

``` text
O INSS negou seu benefício
Uma negativa pode exigir análise do motivo
do indeferimento e dos documentos do caso.

Você está pensando em se aposentar
Conhecer seu histórico contributivo e as
possibilidades previdenciárias é importante.

Você foi demitido
Verbas rescisórias, FGTS, férias, 13º salário
e outras questões podem precisar de análise.

Você sofreu um acidente de trabalho
Acidentes podem envolver consequências
trabalhistas e previdenciárias.

Você trabalha sem registro
A existência de uma relação de emprego
depende de diferentes elementos.

Sua empresa precisa de orientação trabalhista
Prevenção e orientação jurídica podem ajudar
na condução das relações de trabalho.
```

Os cards possuem borda fina e aparência discreta.

------------------------------------------------------------------------

# 11. Bloco visual intermediário

Outra seção clara com:

``` text
Imagem grande à esquerda
+
6 cards à direita
```

A imagem mostra outro ambiente sofisticado do escritório.

A composição funciona como uma repetição visual da seção anterior, mas
com a imagem ocupando maior presença.

------------------------------------------------------------------------

# 12. Processo de atendimento

Seção com fundo azul-marinho.

Layout:

``` text
┌───────────────────────┬────────────────────────────────────┐
│ Foto do escritório    │ Mais do que responder perguntas.   │
│                       │ Entender o problema.                │
│                       │                                     │
│                       │ 01     02      03      04          │
│                       │ ESCUTA ANÁLISE ESTRATÉGIA           │
│                       │                 ACOMPANHAMENTO      │
└───────────────────────┴────────────────────────────────────┘
```

Imagem ocupando aproximadamente 35% da largura.

### Título

``` text
Mais do que responder perguntas.
Entender o problema.
```

### Texto

``` text
Questões jurídicas raramente existem de forma isolada.
Por isso, nossa atuação começa pelo conhecimento do contexto,
dos documentos e das circunstâncias de cada caso.
```

### Etapas

#### 01 --- ESCUTA

``` text
Entender o que aconteceu.
```

#### 02 --- ANÁLISE

``` text
Avaliar documentos,
fatos e possibilidades jurídicas.
```

#### 03 --- ESTRATÉGIA

``` text
Definir os caminhos
adequados ao caso.
```

#### 04 --- ACOMPANHAMENTO

``` text
Manter o cliente
informado sobre o desenvolvimento.
```

Os números são dourados e destacados.

------------------------------------------------------------------------

# 13. Detalhamento das áreas

Seção clara.

Duas grandes colunas.

------------------------------------------------------------------------

## Direito Previdenciário

Título:

``` text
Direito Previdenciário
```

Texto:

``` text
Do planejamento à defesa dos seus direitos
perante o INSS e a Justiça.
```

Descrição introdutória.

Lista de serviços em duas colunas ou uma coluna:

``` text
Aposentadorias
Planejamento Previdenciário
Benefícios por incapacidade
BPC/LOAS
Pensão por morte
Salário-maternidade
Auxílio-reclusão
Revisão de benefícios
Acerto de CNIS
Recursos administrativos
Benefícios negados
Ações judiciais
```

CTA dourado:

``` text
CONHEÇA TODA A ATUAÇÃO →
```

------------------------------------------------------------------------

## Direito do Trabalho

Título:

``` text
Direito do Trabalho
```

Descrição:

``` text
Orientação jurídica para trabalhadores e empresas.
```

Duas categorias:

### Para trabalhadores

``` text
Verbas rescisórias
Horas extras
FGTS
Férias e 13º salário
Reconhecimento de vínculo
Rescisão indireta
Acidentes de trabalho
Doenças ocupacionais
E outros...
```

### Para empresas

``` text
Consultoria Trabalhista
Contratos
Prevenção de passivos
Auditoria trabalhista
Defesa em reclamações
Negociações e acordos
Orientação preventiva
```

CTA:

``` text
CONHEÇA TODA A ATUAÇÃO TRABALHISTA →
```

------------------------------------------------------------------------

# 14. Área para empresas

Seção com fundo off-white.

Imagem de escritório corporativo à esquerda.

À direita:

Título:

``` text
Para empresas, prevenção também é estratégia.
```

Texto:

``` text
Decisões relacionadas às relações de trabalho podem gerar
consequências jurídicas, financeiras e operacionais.
A orientação preventiva permite que a empresa compreenda
os riscos envolvidos e tome decisões com maior segurança jurídica.
```

Links/categorias:

``` text
CONSULTORIA
PREVENÇÃO
CONTRATOS
DEFESA
NEGOCIAÇÃO
```

CTA:

``` text
FALE SOBRE SUA EMPRESA →
```

------------------------------------------------------------------------

# 15. Localização

Seção clara e compacta.

Título:

``` text
Quem está por trás da Dutra & Viana
```

Texto:

``` text
A Dutra & Viana Advogados Associados atua com atendimento
jurídico nas áreas de Direito Previdenciário e Direito do Trabalho.
```

CTA:

``` text
CONHEÇA O ESCRITÓRIO →
```

Ao lado aparece um mapa estilizado do Brasil.

No mapa há destaque para:

``` text
Manaus/AM
Palmas/TO
```

A ideia é demonstrar presença regional com atendimento online nacional.

------------------------------------------------------------------------

# 16. Informações de contato

Blocos de localização:

### Manaus/AM

``` text
Atendimento local
Endereço completo
Telefone
```

### Palmas/TO

``` text
Atendimento local
Endereço completo
Telefone
```

### Online

``` text
Atendimento em todo o Brasil
```

Os ícones são minimalistas e dourados.

------------------------------------------------------------------------

# 17. FAQ

Fundo azul-marinho.

Título:

``` text
Perguntas frequentes
```

Subtítulo:

``` text
Tire suas dúvidas sobre nossos serviços
e como funciona o atendimento.
```

FAQ em formato accordion.

Cada pergunta aparece em uma linha horizontal com:

``` text
Pergunta                                      +
```

Exemplos:

``` text
O escritório atende quais áreas?
Como posso iniciar meu atendimento?
É possível realizar atendimento online?
Quais documentos devo enviar?
Como funciona a análise do meu caso?
A empresa pode contratar atendimento preventivo?
```

As perguntas devem abrir suavemente.

------------------------------------------------------------------------

# 18. CTA final

Ainda sobre fundo azul-marinho.

Bloco de destaque.

Texto:

``` text
Seu caso merece atenção jurídica.
```

Complemento:

``` text
Fale com nossa equipe e entenda como podemos ajudar.
```

CTA dourado:

``` text
FALE COM NOSSA EQUIPE
```

Telefone abaixo:

``` text
(92) 9929-0565
```

ou utilizar o número real fornecido pelo cliente.

------------------------------------------------------------------------

# 19. Footer

Footer escuro.

Estrutura em aproximadamente 4 colunas.

## Coluna 1

Logo:

``` text
DV
DUTRA & VIANA
ADVOGADOS ASSOCIADOS
```

Descrição curta:

``` text
Conhecimento jurídico para orientar.
Estratégia para proteger.
```

## Coluna 2

``` text
O Escritório
Previdenciário
Trabalhista
Áreas de Atuação
Conteúdo
Contato
```

## Coluna 3

``` text
Manaus/AM
Palmas/TO
Atendimento online
```

## Coluna 4

``` text
WhatsApp
Telefone
E-mail
Instagram
```

Rodapé inferior:

``` text
© 2026 Dutra & Viana Advogados Associados.
Todos os direitos reservados.
```

Também aparece uma pequena informação de desenvolvimento/site.

------------------------------------------------------------------------

# 20. WhatsApp flutuante

No canto inferior direito existe um botão circular verde.

Características:

``` text
background: #25D366
```

Ícone branco do WhatsApp.

Tamanho aproximado:

``` text
48–56px
```

Posição:

``` text
right: 20px
bottom: 20px
```

Deve permanecer fixo durante a navegação.

Ao passar o mouse:

-   aumentar levemente;
-   sombra;
-   tooltip opcional.

------------------------------------------------------------------------

# 21. Imagens

A linguagem fotográfica é extremamente importante.

Todas as imagens devem seguir uma estética:

-   escritório de advocacia premium;
-   arquitetura contemporânea;
-   madeira;
-   vidro;
-   iluminação quente;
-   luz natural;
-   plantas;
-   mesas de reunião;
-   documentos;
-   notebooks;
-   cadeiras executivas;
-   profundidade de campo;
-   tons quentes;
-   azul-marinho;
-   dourado;
-   bege.

Evitar:

-   fotos genéricas de banco de imagem muito artificiais;
-   apertos de mão;
-   martelo de juiz;
-   balança jurídica exagerada;
-   pessoas sorrindo artificialmente;
-   excesso de símbolos jurídicos.

## Fotos dos advogados

As fotos devem parecer retratos corporativos reais.

Roupa:

``` text
terno azul-marinho
camisa branca
gravata escura
```

Pose:

``` text
braços cruzados
postura confiante
olhando para câmera
```

Fundo:

``` text
escritório sofisticado
luz quente
desfoque de fundo
```

------------------------------------------------------------------------

# 22. Espaçamento

O design utiliza bastante espaço negativo.

Base recomendada:

``` css
--container: 1200px;
--section-padding: 80px 0;
```

Desktop:

``` text
80–110px entre seções
40–60px entre títulos e conteúdos
24–32px entre cards
```

Mobile:

``` text
48–64px entre seções
24px de padding lateral
```

Não compactar excessivamente a página.

A sensação deve ser de **luxo, calma e organização**.

------------------------------------------------------------------------

# 23. Bordas e sombras

Utilizar bordas muito discretas.

``` css
border: 1px solid rgba(10, 35, 55, 0.10);
```

Cards:

``` css
border-radius: 2px–6px;
```

O design da referência não utiliza cards extremamente arredondados.

Evitar:

``` text
border-radius: 20px
border-radius: 30px
```

O estilo é mais editorial e institucional.

Sombras:

``` css
box-shadow: 0 10px 30px rgba(0,0,0,.06);
```

Muito sutis.

------------------------------------------------------------------------

# 24. Botões

Os botões têm aparência sofisticada.

### Primário

``` css
background: #C79A4A;
color: #06243A;
```

Texto em caixa alta.

Exemplo:

``` text
FALE COM NOSSA EQUIPE
```

### Secundário

``` css
background: transparent;
border: 1px solid #C79A4A;
color: white;
```

Hover:

-   fundo dourado;
-   texto azul-marinho;
-   transição de 200--300ms.

------------------------------------------------------------------------

# 25. Ícones

Ícones simples, preferencialmente:

``` text
Lucide
Phosphor
Font Awesome
```

Estilo:

-   outline;
-   fino;
-   dourado;
-   pequeno.

Não utilizar ícones grandes e coloridos.

------------------------------------------------------------------------

# 26. Animações

As animações devem ser discretas.

Recomendações:

### Entrada das seções

``` text
fade + translateY(20px)
```

Duração:

``` text
500–700ms
```

### Cards

No hover:

``` text
translateY(-3px)
```

### Imagens

Pequeno zoom:

``` text
scale(1.02)
```

### Botões

``` text
transition: 200ms ease;
```

Não utilizar:

-   animações exageradas;
-   parallax agressivo;
-   elementos pulando;
-   efeitos neon;
-   glassmorphism excessivo.

A estética é **premium e sóbria**.

------------------------------------------------------------------------

# 27. Responsividade

## Desktop

Breakpoint:

``` text
≥ 1024px
```

Manter:

-   duas colunas;
-   grids;
-   imagens grandes;
-   navegação horizontal.

## Tablet

``` text
768px–1023px
```

Reduzir:

-   tamanho dos títulos;
-   espaçamento;
-   quantidade de colunas.

## Mobile

``` text
< 768px
```

Transformar:

``` text
Hero → coluna única
Cards → 1 coluna
Áreas → 1 coluna
Processo → 1 coluna
Footer → 1 coluna
```

### Hero mobile

A imagem dos advogados deve aparecer abaixo ou atrás do texto.

A headline deve ficar aproximadamente:

``` text
32–38px
```

Nunca permitir overflow horizontal.

------------------------------------------------------------------------

# 28. Hierarquia visual

A página deve seguir esta hierarquia:

``` text
1. Headline
2. Subheadline
3. CTA
4. Imagens
5. Títulos das seções
6. Descrições
7. Cards
8. Links secundários
```

O usuário deve conseguir entender em poucos segundos:

``` text
Quem são?
→ Dutra & Viana

O que fazem?
→ Direito Previdenciário e Trabalhista

Onde atendem?
→ Manaus + Palmas + online Brasil

Por que escolher?
→ Atendimento próximo + estratégia + acompanhamento

O que fazer?
→ Falar com a equipe
```

------------------------------------------------------------------------

# 29. Sensação final desejada

O resultado final deve parecer:

``` text
ADVOCACIA PREMIUM
        +
ATENDIMENTO HUMANIZADO
        +
AUTORIDADE JURÍDICA
        +
DESIGN EDITORIAL
```

A página não deve parecer um template jurídico genérico.

Ela deve transmitir a sensação de:

> "Este é um escritório sério, organizado e experiente, mas que
> realmente vai ouvir o meu caso."

------------------------------------------------------------------------

# 30. Regras importantes para implementação

1.  Manter a identidade visual baseada em **azul-marinho, dourado
    envelhecido e off-white**.
2.  Utilizar serif elegante nos títulos.
3.  Utilizar sans-serif limpa nos textos.
4.  Priorizar imagens reais/profissionais.
5.  Evitar excesso de elementos jurídicos clichês.
6.  Manter bastante espaço negativo.
7.  Usar bordas discretas.
8.  Usar cantos pouco arredondados.
9.  Não exagerar em sombras.
10. CTAs sempre muito claros.
11. WhatsApp deve ser uma ação recorrente da página.
12. O conteúdo deve ser organizado para conversão.
13. Manter excelente contraste e acessibilidade.
14. Toda seção deve ter uma função clara.
15. A experiência mobile deve ser tratada como prioridade.
16. Não transformar a página em um dashboard ou site SaaS.
17. A aparência deve permanecer institucional, editorial e sofisticada.
18. O conteúdo jurídico deve ser apresentado de forma simples e
    compreensível.
19. Evitar textos longos em blocos sem hierarquia.
20. Manter consistência entre espaçamentos, tipografia, ícones e botões.

------------------------------------------------------------------------

# 31. Estrutura de componentes sugerida

Para implementação em React/Next.js, uma estrutura possível:

``` text
src/
├── components/
│   ├── Header
│   ├── Hero
│   ├── AboutSection
│   ├── PracticeAreas
│   ├── ProblemCards
│   ├── ProblemShowcase
│   ├── ProcessSection
│   ├── PracticeDetails
│   ├── BusinessSection
│   ├── Locations
│   ├── FAQ
│   ├── FinalCTA
│   ├── Footer
│   └── WhatsAppButton
│
├── sections/
│   └── ...
│
├── assets/
│   ├── logo
│   ├── lawyers
│   ├── office
│   └── icons
│
└── styles/
    ├── globals
    ├── variables
    └── typography
```

------------------------------------------------------------------------

# 32. Tokens visuais

``` css
:root {
  --color-navy: #06243A;
  --color-navy-dark: #041C2D;
  --color-navy-light: #0B3048;

  --color-gold: #C79A4A;
  --color-gold-dark: #B88738;
  --color-gold-light: #D8B66A;

  --color-cream: #F7F4ED;
  --color-cream-dark: #F1EEE6;
  --color-white: #FFFFFF;

  --color-text: #102235;
  --color-text-muted: #53606B;
  --color-text-light: #E8EDF0;

  --font-display: "Cormorant Garamond", Georgia, serif;
  --font-body: "Inter", Arial, sans-serif;

  --container-width: 1200px;

  --section-padding-desktop: 96px;
  --section-padding-mobile: 64px;

  --radius-sm: 4px;
  --radius-md: 6px;

  --transition: 250ms ease;
}
```

------------------------------------------------------------------------

# 33. Resumo para o Claude Code

Construir uma landing page jurídica premium para **Dutra & Viana
Advogados Associados**.

A referência possui:

-   header azul-marinho;
-   logo dourado;
-   navegação minimalista;
-   hero azul-marinho com copy jurídica forte;
-   foto de dois advogados em ternos;
-   CTA dourado;
-   seções claras em off-white;
-   fotografias editoriais de escritório;
-   cards de Direito Previdenciário e Direito do Trabalho;
-   cards de situações/problemas dos clientes;
-   seção de processo em fundo azul;
-   detalhamento dos serviços;
-   seção específica para empresas;
-   mapa Brasil com Manaus e Palmas;
-   FAQ em azul-marinho;
-   CTA final;
-   footer institucional;
-   botão flutuante de WhatsApp.

**Direção estética:**

``` text
Premium
Editorial
Jurídico
Sofisticado
Humano
Minimalista
Institucional
Contemporâneo
```

**Evitar:**

``` text
Visual de template genérico
Azul vibrante
Dourado amarelo
Excesso de bordas arredondadas
Glassmorphism
Gradientes exagerados
Animações chamativas
Ícones jurídicos clichês
Cards excessivamente coloridos
```

A prioridade deve ser **hierarquia visual + confiança + conversão +
responsividade**.
