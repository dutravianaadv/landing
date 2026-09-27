import masculinoImage from '../assets/hero/advogados-dupla.jpg'
import previdenciarioImage from '../assets/areas/previdenciario.jpg'
import trabalhistaImage from '../assets/areas/trabalhista.jpg'
import marcaImage from '../assets/marca/logo-textura.jpg'
import eduardoImage from '../assets/equipe/eduardo-dutra.jpg'
import washingtonImage from '../assets/equipe/washington-viana.jpg'

export const images = {
  hero: masculinoImage,
  marca: marcaImage,
  previdenciario: previdenciarioImage,
  trabalhista: trabalhistaImage,
  eduardoDutra: eduardoImage,
  washingtonViana: washingtonImage,
}

/** 04 — Nossas duas grandes áreas */
export const practiceAreas = [
  {
    id: 'previdenciario',
    title: 'Direito Previdenciário',
    image: previdenciarioImage,
    alt: 'Atendimento a um segurado durante o preenchimento de documentação previdenciária',
    description:
      'Aposentadorias, benefícios do INSS, planejamento previdenciário, revisões, benefícios por incapacidade, BPC/LOAS, pensão por morte e outras questões previdenciárias.',
    cta: 'Conheça o previdenciário',
  },
  {
    id: 'trabalhista',
    title: 'Direito do Trabalho',
    image: trabalhistaImage,
    alt: 'Profissional de construção civil em capacete no ambiente de trabalho',
    description:
      'Atuação para trabalhadores e empresas em questões relacionadas às relações de trabalho, direitos trabalhistas, prevenção de conflitos e demandas judiciais.',
    cta: 'Conheça o trabalhista',
  },
]

/** Especializações dentro das duas grandes áreas (fonte: especializacao.md) */
export type Especializacao = {
  id: string
  title: string
  summary: string
  whatIs: string
  who: string[]
  highlights: string[]
}

export const especializacoesPrevidenciario: Especializacao[] = [
  {
    id: 'aposentadoria-planejamento',
    title: 'Aposentadoria e Planejamento Previdenciário',
    summary:
      'Aposentadoria por idade ou por tempo de contribuição e o estudo que define, antes do pedido, qual regra se aplica e quando vale a pena se aposentar.',
    whatIs:
      'A aposentadoria é a saída do trabalho com renda do INSS. Depois da Reforma da Previdência, toda aposentadoria passou a exigir idade mínima e carência também para a aposentadoria por tempo de contribuição, o que torna indispensável simular os cenários antes de requerer o benefício.',
    who: [
      'Carência de 180 contribuições mensais (15 anos), além da idade exigida em cada regra.',
      'Regras atuais: mulheres 62 anos + 15 anos de contribuição; homens 65 anos + 20 anos.',
      'Regras de transição ainda aplicáveis: pontuação, idade mínima progressiva e pedágios de 50% e 100% sobre o tempo que faltava em 13/11/2019.',
      'Direito adquirido antes de 13/11/2019 permanece válido, com as regras anteriores à Reforma.',
    ],
    highlights: [
      'Leitura completa do CNIS, da CTPS, dos carnês e dos CTCs de outros regimes, com identificação de omissões e divergências.',
      'Reconhecimento de períodos especiais: rural, militar, pessoa com deficiência, insalubridade e periculosidade.',
      'Simulação de todos os cenários possíveis, com projeção de valor mensal e data de entrada no benefício.',
      'Orientação sobre continuar contribuindo, por quanto tempo e por qual salário.',
    ],
  },
  {
    id: 'auxilios-diversos',
    title: 'Auxílios Diversos',
    summary:
      'Reúne os benefícios que substituem ou compensam a renda quando o trabalho é interrompido ou fica limitado por doença, acidente, prisão ou maternidade.',
    whatIs:
      'Os benefícios por incapacidade não se substituem entre si: cada um tem requisitos, carência e duração próprios. Avaliamos qual deles se aplica ao caso e o que mais pode ser reconhecido em conjunto.',
    who: [
      'Auxílio-Doença (Benefício por Incapacidade Temporária): afastamento superior a 15 dias por doença ou acidente.',
      'Auxílio-Acidente: sequela permanente que reduz a capacidade para o trabalho habitual, após acidente de qualquer natureza.',
      'Salário-Maternidade: afastamento por parto, adoção ou guarda judicial.',
      'Auxílio-Reclusão: pago aos dependentes do segurado de baixa renda recolhido à prisão em regime fechado.',
    ],
    highlights: [
      'Definição do benefício cabível e da carência aplicável a partir da análise individual do caso.',
      'Verificação da qualidade de segurado, inclusive nos períodos de graça.',
      'Contagem de carência de 12, 10 ou 24 contribuições conforme o benefício pretendido.',
      'Compatibilidade entre os benefícios, respeitando as regras de acumulação de cada um.',
    ],
  },
  {
    id: 'aposentadorias-especiais',
    title: 'Aposentadorias Especiais',
    summary:
      'Regras adaptadas a quem exerceu atividade rural, ficou exposto a agentes nocivos, é pessoa com deficiência, atua no magistério ou pertence às forças de segurança.',
    whatIs:
      'São aposentadorias com requisitos próprios, que reconhecem condições específicas de trabalho e, em muitos casos, reduzem a idade ou o tempo exigido em relação às regras gerais.',
    who: [
      'Rural: 55 anos (mulheres) e 60 anos (homens), com 15 anos de atividade rural comprovada.',
      'Agentes nocivos: 15, 20 ou 25 anos de exposição, conforme o grau de risco, com idade mínima de 55, 58 ou 60 anos.',
      'Pessoa com deficiência: por idade (60 anos homens e 55 mulheres, com 15 anos de contribuição na condição) ou por tempo, conforme o grau da deficiência.',
      'Professor: 57 anos + 25 anos de magistério (mulheres) ou 60 anos + 30 anos (homens).',
      'Forças de segurança: 55 anos de idade mínima, com 30 anos de contribuição (homens) ou 25 (mulheres) e tempo efetivo na carreira policial.',
    ],
    highlights: [
      'Comprovação rural por autodeclaração, DAP do PRONAF, contratos de arrendamento ou parceria, bloco de notas do produtor, histórico escolar rural e CadÚnico.',
      'Comprovação da exposição pelo PPP e por formulários antigos (DIRBEN-8030, LTCAT, SB-40); EPI ineficaz não afasta o direito.',
      'Validação de vínculos em conselhos de regime próprio, com a CTC emitida pelo RH da instituição.',
      'Regras de transição específicas para quem já estava na atividade antes de 13/11/2019.',
    ],
  },
  {
    id: 'bpc-loas',
    title: 'BPC/LOAS',
    summary:
      'Benefício assistencial de um salário mínimo para idosos a partir de 65 anos e pessoas com deficiência em situação de pobreza extrema.',
    whatIs:
      'O Benefício de Prestação Continuada é assistencial, não previdenciário: dispensa contribuição para o INSS. Não paga 13º salário e não gera pensão por morte.',
    who: [
      'Idosos com 65 anos ou mais.',
      'Pessoas com deficiência de qualquer idade, com impedimento de longo prazo (mínimo de 2 anos).',
      'Renda per capita familiar inferior a 1/4 do salário mínimo, computados os gastos com saúde, fraldas e medicamentos.',
      'Cadastro Único (CadÚnico) obrigatório e atualizado.',
    ],
    highlights: [
      'Análise da renda familiar e dos gastos de saúde que podem reduzir a renda computada.',
      'Documentação: identificação de todos os membros da família, comprovante de residência e de renda, e laudos e relatórios médicos no caso de pessoa com deficiência.',
      'Avaliação social e perícia médica, quando houver deficiência.',
      'Solicitação pelo Meu INSS ou pelo telefone 135.',
    ],
  },
  {
    id: 'pensao-por-morte',
    title: 'Pensão por Morte',
    summary:
      'Benefício que substitui a renda do segurado falecido e é dividido entre os dependentes habilitados, com cotas de 10% para cada dependente.',
    whatIs:
      'A pensão é concedida aos dependentes do segurado que tinha qualidade de segurado na data do óbito. A carência não é exigida, mas a qualidade de segurado é indispensável.',
    who: [
      'Classe 1 (dependência presumida): cônjuge ou companheiro(a), filhos menores de 21 anos ou inválidos, enteados e tutelados equiparados.',
      'Classe 2 (dependência a comprovar): pais.',
      'Classe 3 (dependência a comprovar): irmãos menores de 21 anos ou inválidos.',
    ],
    highlights: [
      'Valor pós-Reforma: cota familiar de 50% mais 10% por dependente, até 100%; dependente inválido ou com deficiência grave recebe 100%.',
      'Nunca inferior a um salário mínimo quando é a única renda da família.',
      'Prazo para requerer: até 180 dias após o óbito para filhos menores de 16 anos e 90 dias para os demais, com pagamento retroativo à data do óbito.',
      'Duração para cônjuge ou companheiro(a) de 4 meses a vitalícia, conforme o tempo de união e a idade na data do óbito; vitalícia para inválido ou pessoa com deficiência.',
    ],
  },
  {
    id: 'salario-maternidade',
    title: 'Salário-Maternidade',
    summary:
      'Afastamento de até 120 dias por parto, adoção ou guarda judicial, com regras próprias para empregadas, domésticas, avulsas, contribuintes individuais e seguradas especiais.',
    whatIs:
      'O benefício substitui a renda durante o afastamento. A duração padrão é de 120 dias e pode se alterar em caso de internação por complicação do parto ou do recém-nascido (Lei 15.222/2025).',
    who: [
      'Empregadas, domésticas e avulsas: sem carência, exigindo apenas a qualidade de segurada.',
      'Contribuintes individuais, facultativas e seguradas especiais: carência de 10 contribuições ou 10 meses de atividade rural.',
      'Homens: em adoção ou guarda judicial quando únicos responsáveis, na morte da segurada durante o parto e no abandono da criança pela mãe.',
    ],
    highlights: [
      'Com internação superior a 14 dias por complicação no parto, os 120 dias passam a contar da alta hospitalar.',
      'Licença estendida (Empresa Cidadã): +60 dias, total de 180, e estabilidade da empregada da confirmação da gravidez até 5 meses após o parto.',
      'Início do afastamento em até 28 dias antes do parto — ou na alta, em caso de internação — e requerimento em até 5 anos para as demais seguradas.',
      'Múltiplos vínculos: a segurada pode receber o benefício em cada um deles.',
    ],
  },
  {
    id: 'revisao-reativacao',
    title: 'Revisão e Reativação de Benefícios',
    summary:
      'Correção de erros de cálculo, de documentos desconsiderados e de vínculos ignorados — e defesa contra suspensão ou cancelamento indevido.',
    whatIs:
      'Revisão é o pedido de correção do que foi concedido com erro, omissão ou desatualização. Reativação é a contestação de um corte administrativo: não é um novo pedido, é a recuperação do benefício já concedido.',
    who: [
      'Revisão: erros de cálculo, salários desconsiderados, índices incorretos, documentos ignorados e vínculos não computados.',
      'Reativação: perícia que liberou o segurado ainda incapaz, corte por “pente-fino” sem análise aprofundada ou ausência de prova de vida com impedimento justificado.',
      'Alegação de fraude, divergências cadastrais ou não atendimento a exigências por desconhecimento.',
    ],
    highlights: [
      'Prazo decadencial de 10 anos para pedir a revisão, distinto do prazo prescricional de 5 anos dos valores atrasados.',
      'Retroativos limitados aos últimos 5 anos a partir do pedido de revisão ou da reativação.',
      'Recurso administrativo à Junta/CRSS em até 30 dias do indeferimento, antes da via judicial.',
      'Análise da Carta de Concessão, do CNIS, do processo administrativo original e dos documentos que acompanharam o requerimento.',
    ],
  },
  {
    id: 'seguro-defeso',
    title: 'Seguro-Defeso',
    summary:
      'Renda de um salário mínimo ao pescador profissional artesanal durante o período de defeso da espécie que ele pesca.',
    whatIs:
      'O defeso é a proibição temporária de captura de espécies em reprodução. Nesse período o pescador artesanal fica impedido de exercer a atividade e recebe o seguro-defeso como contrapartida.',
    who: [
      'Pescador profissional artesanal, em regime de economia familiar, com a pesca como principal meio de vida.',
      'Cadastrado no Registro Geral da Atividade Pesqueira (RGP) há pelo menos 1 ano.',
      'Sem outro meio de subsistência, exceto auxílio-acidente e pensão por morte de valor mínimo.',
      'Comprovação de pesca ininterrupta nos 12 meses anteriores e captura da espécie em período de defeso.',
    ],
    highlights: [
      'Benefício pago pelo Ministério do Trabalho e Emprego, via Caixa Econômica Federal.',
      'Requerimento junto à Secretaria Especial de Pesca e Aquicultura ou às Colônias de Pescadores.',
      'Valor de um salário mínimo por mês durante todo o período de defeso.',
      'Base legal: Lei nº 10.779/2003. Colônias e associações auxiliam na orientação e na documentação.',
    ],
  },
  {
    id: 'auxilio-doenca',
    title: 'Auxílio-Doença',
    summary:
      'Renda mensal para quem fica temporariamente incapaz de trabalhar por mais de 15 dias consecutivos, por doença ou acidente.',
    whatIs:
      'O Benefício por Incapacidade Temporária pressupõe expectativa de recuperação e retorno ao trabalho, diferentemente da aposentadoria por invalidez. Os primeiros 15 dias de afastamento são de responsabilidade da empresa.',
    who: [
      'Incapacidade temporária superior a 15 dias consecutivos, comprovada por laudos, exames e perícia do INSS.',
      'Qualidade de segurado, diretamente por contribuição ou por período de graça.',
      'Carência de 12 contribuições, dispensada em acidentes de qualquer natureza e em doenças graves específicas.',
    ],
    highlights: [
      'Comunicação à empresa: o INSS assume o pagamento a partir do 16º dia.',
      'Agendamento da perícia pelo Meu INSS ou pelo telefone 135, com possibilidade de análise documental em alguns casos.',
      'Documentos: identidade, CPF, CTPS, carnês, atestados, laudos, exames e declaração da empresa com o último dia trabalhado.',
      'Reativação possível quando o benefício é cortado por alta programada sem nova perícia.',
    ],
  },
  {
    id: 'auxilio-acidente',
    title: 'Auxílio-Acidente',
    summary:
      'Indemnização de 50% do salário-de-benefício para quem fica com sequela permanente após acidente de qualquer natureza, sem substituir o salário.',
    whatIs:
      'É benefício indenizatório: não substitui a renda e é devido junto com o salário ou com a aposentadoria. Sua finalidade é compensar a redução da capacidade para o trabalho habitual.',
    who: [
      'Empregados urbanos e rurais (exceto domésticos), trabalhadores avulsos e segurados especiais.',
      'Sem direito: contribuintes individuais, facultativos e empregados domésticos.',
      'Acidente de qualquer natureza, com sequelas permanentes e consolidadas e redução — não impedimento — da capacidade laboral.',
      'Qualidade de segurado na data do acidente, sem exigência de carência.',
    ],
    highlights: [
      'Valor fixo de 50% do salário-de-benefício, mantido até a aposentadoria, o óbito ou a recuperação total.',
      'Exemplos: perda de dedos ou membros, limitações articulares, perda auditiva ou visual, problemas de coluna e sequelas neurológicas.',
      'Acumula com salário e com aposentadoria por idade ou por tempo de contribuição, mas não com aposentadoria por invalidez.',
      'Reavaliação periódica: cessa com a aposentadoria, a morte ou a recuperação total da capacidade.',
    ],
  },
  {
    id: 'auxilio-reclusao',
    title: 'Auxílio-Reclusão',
    summary:
      'Benefício pago exclusivamente aos dependentes do segurado de baixa renda recolhido à prisão em regime fechado. Nunca é pago ao preso.',
    whatIs:
      'O benefício é mantido enquanto durar a prisão em regime fechado e se converte em pensão por morte se o segurado falecer preso.',
    who: [
      'Segurado com qualidade de segurado na data da prisão.',
      'Baixa renda: renda bruta das últimas 12 contribuições igual ou inferior ao teto anual do INSS.',
      'Prisão em regime fechado — não há direito em regime semiaberto, aberto ou prisão domiciliar.',
      'Carência de 24 contribuições para prisões a partir de 13/11/2019; sem carência para prisões anteriores.',
    ],
    highlights: [
      'Atestado de Reclusão emitido pela autoridade carcerária, atualizado a cada 3 meses.',
      'Dependentes nas mesmas classes da pensão por morte: cônjuge ou companheiro(a), filhos, pais e irmãos.',
      'Prazo de requerimento: 180 dias para filhos menores de 16 anos e 90 dias para os demais, com pagamento retroativo à data da prisão.',
      'Cessa com a soltura ou com a transferência para regime semiaberto ou aberto.',
    ],
  },
]

export const especializacoesTrabalhista: Especializacao[] = [
  {
    id: 'verbas-rescisorias',
    title: 'Verbas Rescisórias',
    summary:
      'Conferência de tudo o que deve ser pago no fim do contrato: saldo de salário, aviso prévio, férias, 13º, FGTS e multa.',
    whatIs:
      'Ao término do contrato de trabalho, o empregador deve quitar as verbas rescisórias em até 10 dias. O valor depende da forma de desligamento: dispensa sem justa causa, pedido de demissão, acordo entre as partes ou justa causa.',
    who: [
      'Trabalhadores com carteira assinada que foram dispensados, pediram demissão ou fizeram acordo.',
      'Dispensa sem justa causa: aviso prévio proporcional (30 dias + 3 por ano trabalhado, até 90), férias + 1/3, 13º proporcional, saque do FGTS e multa de 40%.',
      'Acordo (art. 484-A da CLT): metade do aviso indenizado, multa de 20% e saque de 80% do FGTS.',
      'Quem teve o vínculo reconhecido judicialmente também tem direito às verbas do período.',
    ],
    highlights: [
      'O atraso no pagamento gera multa equivalente a um salário (art. 477, § 8º, da CLT).',
      'Revisão do termo de rescisão, dos depósitos de FGTS e das médias de horas extras e adicionais.',
      'Prazo para ajuizar a ação: 2 anos após o fim do contrato, alcançando os últimos 5 anos.',
    ],
  },
  {
    id: 'horas-extras',
    title: 'Horas Extras e Jornada',
    summary:
      'Horas além da jornada, intervalos suprimidos, banco de horas irregular e trabalho em domingos e feriados.',
    whatIs:
      'A jornada padrão é de 8 horas diárias e 44 semanais. O tempo trabalhado além desse limite deve ser pago com adicional mínimo de 50% ou compensado de forma válida.',
    who: [
      'Empregados que trabalham além da jornada contratada sem receber ou compensar corretamente.',
      'Quem teve o intervalo de almoço reduzido ou suprimido.',
      'Quem trabalha em domingos e feriados sem folga compensatória (adicional de 100%).',
      'Cargos registrados como “de confiança” sem poderes ou remuneração que justifiquem a exclusão do controle de jornada.',
    ],
    highlights: [
      'Horas extras habituais refletem em descanso semanal, férias, 13º e FGTS.',
      'Prova por cartões de ponto, mensagens, registros de acesso a sistemas e testemunhas.',
      'Banco de horas por acordo individual precisa ser escrito e compensado em até 6 meses.',
    ],
  },
  {
    id: 'reconhecimento-vinculo',
    title: 'Reconhecimento de Vínculo',
    summary:
      'Para quem trabalha sem carteira assinada, como “PJ” ou prestador de serviço, mas na prática é empregado.',
    whatIs:
      'Existe vínculo de emprego sempre que o trabalho é prestado por pessoa física, com pessoalidade, habitualidade, remuneração e subordinação, independentemente do nome dado ao contrato.',
    who: [
      'Trabalhadores sem registro em carteira.',
      'Contratados como pessoa jurídica que cumprem horário, recebem ordens e não podem se fazer substituir.',
      'Falsos autônomos, cooperados ou estagiários em situação irregular.',
    ],
    highlights: [
      'Com o reconhecimento, são devidos anotação na CTPS, FGTS, férias + 1/3, 13º e recolhimentos ao INSS.',
      'O tempo reconhecido também conta para a aposentadoria.',
      'Provas: mensagens, e-mails, comprovantes de pagamento, crachás, escalas e testemunhas.',
    ],
  },
  {
    id: 'acidente-doenca-ocupacional',
    title: 'Acidente de Trabalho e Doença Ocupacional',
    summary:
      'Acidentes no exercício da função, doenças causadas ou agravadas pelo trabalho, estabilidade e indenizações.',
    whatIs:
      'Acidente de trabalho é o que ocorre pelo exercício do trabalho e causa lesão ou perturbação funcional. Doenças profissionais e do trabalho são equiparadas ao acidente pela Lei 8.213/1991.',
    who: [
      'Empregados que sofreram acidente no ambiente ou a serviço da empresa.',
      'Trabalhadores com lesões por esforço repetitivo, problemas de coluna, perda auditiva ou adoecimento psíquico ligado ao trabalho.',
      'Quem recebeu auxílio por incapacidade acidentário (espécie B91).',
    ],
    highlights: [
      'Estabilidade de 12 meses após o fim do auxílio acidentário (art. 118 da Lei 8.213/1991).',
      'Emissão da CAT pela empresa ou, na recusa, pelo próprio trabalhador ou sindicato.',
      'Indenização por danos morais, materiais e estéticos quando houver responsabilidade do empregador.',
      'O FGTS continua sendo depositado durante o afastamento acidentário.',
    ],
  },
  {
    id: 'estabilidades',
    title: 'Estabilidades Provisórias',
    summary:
      'Garantia de emprego para gestantes, acidentados, membros da CIPA e dirigentes sindicais.',
    whatIs:
      'Em algumas situações, a lei impede a dispensa sem justa causa por um período determinado. A dispensa nesse período dá direito à reintegração ou à indenização correspondente.',
    who: [
      'Gestante: da confirmação da gravidez até 5 meses após o parto, mesmo que a empresa não soubesse.',
      'Empregado acidentado: 12 meses após o fim do auxílio acidentário.',
      'Membro eleito da CIPA: do registro da candidatura até 1 ano após o fim do mandato.',
      'Dirigente sindical: do registro da candidatura até 1 ano após o fim do mandato.',
    ],
    highlights: [
      'Análise da data da dispensa em relação ao início da estabilidade.',
      'Pedido de reintegração ou de indenização pelos salários do período.',
      'A gestante mantém a estabilidade também durante o aviso prévio.',
    ],
  },
  {
    id: 'assedio-moral',
    title: 'Assédio Moral',
    summary:
      'Humilhações, perseguições, metas abusivas e exposição reiterada que comprometem a dignidade do trabalhador.',
    whatIs:
      'O assédio moral é a exposição repetida do trabalhador a situações humilhantes ou constrangedoras no ambiente de trabalho, por superiores ou colegas, com tolerância da empresa.',
    who: [
      'Trabalhadores expostos a xingamentos, cobranças vexatórias ou isolamento deliberado.',
      'Quem sofre perseguição após reclamar de direitos ou retornar de afastamento.',
      'Vítimas de assédio sexual no ambiente de trabalho.',
    ],
    highlights: [
      'Indenização por danos morais, fixada conforme a gravidade da ofensa (arts. 223-A a 223-G da CLT).',
      'O assédio pode fundamentar a rescisão indireta do contrato.',
      'Guarde mensagens, e-mails, áudios e nomes de testemunhas.',
    ],
  },
  {
    id: 'insalubridade-periculosidade',
    title: 'Insalubridade e Periculosidade',
    summary:
      'Adicionais para quem trabalha exposto a agentes nocivos à saúde ou a atividades de risco.',
    whatIs:
      'A insalubridade decorre da exposição a agentes nocivos acima dos limites de tolerância. A periculosidade decorre de atividades com risco acentuado à vida, como inflamáveis, explosivos, energia elétrica, segurança patrimonial e uso de motocicleta.',
    who: [
      'Insalubridade: adicional de 10%, 20% ou 40%, conforme o grau.',
      'Periculosidade: adicional de 30% sobre o salário-base.',
      'Trabalhadores sem fornecimento ou fiscalização adequada de EPIs.',
    ],
    highlights: [
      'Em juízo, a caracterização depende de perícia técnica.',
      'Os adicionais não são cumulativos: o trabalhador escolhe o mais vantajoso.',
      'O período também pode ser relevante para a aposentadoria especial.',
    ],
  },
  {
    id: 'rescisao-indireta-justa-causa',
    title: 'Rescisão Indireta e Justa Causa',
    summary:
      'Encerrar o contrato por falta grave do empregador ou reverter uma justa causa aplicada sem fundamento.',
    whatIs:
      'A rescisão indireta é a “justa causa do empregador” (art. 483 da CLT) e garante as mesmas verbas da dispensa sem justa causa. Já a justa causa aplicada ao empregado (art. 482) pode ser revertida quando não houver prova, proporcionalidade ou imediatidade.',
    who: [
      'Empregados com salários atrasados de forma reiterada ou FGTS sem depósito.',
      'Quem sofre rigor excessivo, exigência de serviços além das forças ou exposição a perigo manifesto.',
      'Trabalhadores dispensados por justa causa sem advertências prévias ou por falta não comprovada.',
    ],
    highlights: [
      'Com a reversão da justa causa, são devidos aviso prévio, multa de 40% do FGTS e guias do seguro-desemprego.',
      'Cabe ao empregador provar a falta grave que alegou.',
      'Na rescisão indireta, a orientação jurídica prévia define se o trabalhador deve se afastar ou continuar trabalhando até a decisão.',
    ],
  },
  {
    id: 'consultoria-empresas',
    title: 'Consultoria Trabalhista para Empresas',
    summary:
      'Prevenção de passivos, contratos, auditoria de rotinas e defesa em reclamações trabalhistas.',
    whatIs:
      'Atuação preventiva e contenciosa para empresas: revisão de contratos e políticas internas, adequação de jornadas e controles, orientação em desligamentos e defesa em processos.',
    who: [
      'Empresas que querem reduzir riscos antes que se transformem em processos.',
      'Empregadores que respondem a reclamações trabalhistas ou fiscalizações.',
      'Negócios em expansão que precisam estruturar contratações.',
    ],
    highlights: [
      'Auditoria de ponto, banco de horas, adicionais e terceirizações.',
      'Orientação em dispensas, advertências e acordos.',
      'Negociação com sindicatos e acordos coletivos.',
    ],
  },
]

/** Especializações agrupadas por área, na ordem em que aparecem na página */
export const areasEspecializacao = [
  {
    id: 'previdenciario',
    title: 'Direito Previdenciário',
    image: previdenciarioImage,
    items: especializacoesPrevidenciario,
  },
  {
    id: 'trabalhista',
    title: 'Direito do Trabalho',
    image: trabalhistaImage,
    items: especializacoesTrabalhista,
  },
]

/** 05 — Para quem precisa de orientação */
export const situations = [
  {
    icon: 'FileX',
    title: 'O INSS negou seu benefício',
    text: 'Uma negativa pode exigir análise do motivo do indeferimento e dos documentos relacionados ao caso.',
    link: 'Saiba mais',
    href: '#previdenciario',
  },
  {
    icon: 'Hourglass',
    title: 'Você está pensando em se aposentar',
    text: 'Conhecer o histórico contributivo e as possibilidades previdenciárias é importante antes de tomar decisões.',
    link: 'Planejamento previdenciário',
    href: '#previdenciario',
  },
  {
    icon: 'BriefcaseBusiness',
    title: 'Você foi demitido',
    text: 'Verbas rescisórias, FGTS, férias, estabilidade e outras questões podem precisar de análise.',
    link: 'Direitos trabalhistas',
    href: '#trabalhista',
  },
  {
    icon: 'HardHat',
    title: 'Você sofreu um acidente de trabalho',
    text: 'Acidentes podem envolver consequências trabalhistas e previdenciárias que precisam ser avaliadas individualmente.',
    link: 'Saiba mais',
    href: '#trabalhista',
  },
  {
    icon: 'UserX',
    title: 'Você trabalha sem registro',
    text: 'A existência de uma relação de emprego pode depender de diferentes elementos que precisam ser analisados.',
    link: 'Saiba mais',
    href: '#trabalhista',
  },
  {
    icon: 'Building2',
    title: 'Sua empresa precisa de orientação trabalhista',
    text: 'Prevenção e orientação jurídica podem auxiliar na condução das relações de trabalho.',
    link: 'Atendimento empresarial',
    href: '#empresas',
  },
] as const

/** 06 — Nossa forma de atuar */
export const pillars = [
  { number: '01', title: 'Escuta', text: 'Entender o que aconteceu.' },
  { number: '02', title: 'Análise', text: 'Avaliar documentos, fatos e possibilidades jurídicas.' },
  { number: '03', title: 'Estratégia', text: 'Definir os caminhos adequados ao caso.' },
  { number: '04', title: 'Acompanhamento', text: 'Manter o cliente informado sobre o desenvolvimento da atuação.' },
]

/** 07 e 08 — Detalhamento das áreas */
export const previdenciarioServices = [
  'Aposentadorias',
  'Planejamento Previdenciário',
  'Benefícios por incapacidade',
  'BPC/LOAS',
  'Pensão por morte',
  'Salário-maternidade',
  'Auxílio-reclusão',
  'Revisão de benefícios',
  'Acerto de CNIS',
  'Recursos administrativos',
  'Benefícios negados',
  'Ações judiciais',
]

export const trabalhistaWorkers = [
  'Verbas rescisórias',
  'Horas extras',
  'FGTS',
  'Férias e 13º salário',
  'Reconhecimento de vínculo',
  'Trabalho sem registro',
  'Acidentes de trabalho',
  'Doenças ocupacionais',
  'Estabilidade',
  'Assédio moral',
  'Insalubridade e periculosidade',
  'Rescisão indireta',
  'Justa causa',
  'Direitos da gestante',
  'Trabalho doméstico',
]

export const companiesServices = [
  'Consultoria trabalhista',
  'Contratos',
  'Prevenção de passivos',
  'Auditoria trabalhista',
  'Defesa em reclamações',
  'Negociações e acordos',
  'Orientação preventiva',
]

/** 09 — Bloco especial para empresas */
export const businessPillars = ['Consultoria', 'Prevenção', 'Contratos', 'Defesa', 'Negociação']

/** 12 — Como funciona */
export const steps = [
  {
    number: '01',
    title: 'Converse conosco',
    text: 'Entre em contato pelo WhatsApp ou por nossos canais de atendimento.',
  },
  {
    number: '02',
    title: 'Conte o que aconteceu',
    text: 'Apresente sua situação e as principais dúvidas que você possui.',
  },
  {
    number: '03',
    title: 'Analisamos o caso',
    text: 'Avaliamos as informações e documentos necessários à compreensão da situação.',
  },
  {
    number: '04',
    title: 'Orientamos você',
    text: 'Apresentamos as possibilidades jurídicas e os próximos passos, quando cabíveis.',
  },
]

/** 13 — Perguntas frequentes */
export const faqs = [
  {
    question: 'O INSS negou meu benefício. Posso recorrer?',
    answer:
      'Sim, em geral a negativa pode ser contestada. É necessário analisar o motivo do indeferimento e os documentos que acompanharam o requerimento para definir a forma mais adequada de impugnar o caso.',
  },
  {
    question: 'Como saber se já posso me aposentar?',
    answer:
      'A resposta depende do histórico de contribuições, dos vínculos quiverem ser computados e das regras aplicáveis ao seu caso. Recomendamos uma análise do CNIS antes de qualquer decisão.',
  },
  {
    question: 'É possível revisar uma aposentadoria ou outro benefício?',
    answer:
      'Pode haver margem para revisão quando existem diferenças de cálculo, vínculos não computados ou erros na aplicação das regras. Cada benefício precisa ser examinado individualmente.',
  },
  {
    question: 'Trabalhei sem carteira assinada. Tenho direitos?',
    answer:
      'A existência de uma relação de emprego pode ser reconhecida judicialmente a partir de diferentes elementos, como pagamento, jornada de trabalho e subordinação. A análise depende das provas disponíveis.',
  },
  {
    question: 'Fui demitido. Como saber se minha rescisão está correta?',
    answer:
      'Verbas rescisórias, FGTS, férias, 13º salário, estabilidade e aviso-prévio precisam ser conferidos. Um pequeno erro no cálculo pode custar dinheiro ao trabalhador.',
  },
  {
    question: 'Sofri acidente de trabalho. Quais direitos podem estar envolvidos?',
    answer:
      'Acidentes podem envolver questões trabalhistas e previdenciárias, como afastamento, estabilidade, indenização e também seguro de responsabilidade civil do empregador.',
  },
  {
    question: 'A empresa pode contratar o escritório para consultoria trabalhista?',
    answer:
      'Sim. Atendemos empresas com consultoria, contratos, auditoria trabalhista, prevenção de passivos, defesa em reclamações, negociações e orientação preventiva.',
  },
  {
    question: 'O atendimento pode ser feito online?',
    answer:
      'Sim. Oferecemos atendimento online para clientes de todo o Brasil, além de atendimento presencial em Manaus/AM e Palmas/TO.',
  },
]
