// ─── FOUNDERS ───────────────────────────────────────────────
export const founders = [
  {
    id: 'camilla',
    name: 'Camilla Santos',
    title: 'Mentora de Liderança & Alta Performance',
    // SUBSTITUIR: coloque a foto real em /public/images/camilla-santos.webp
    image: '/images/camilla-santos.webp',
    bio: [
      'Com mais de uma década liderando times, operações e negócios, Camilla Santos transformou sua experiência prática em uma metodologia que funciona. Sua abordagem combina coragem, responsabilidade e execução — entregando líderes que realmente inspiram e geram resultado.',
      'Especialista em liderança autêntica, gestão de pessoas e desenvolvimento de alta performance. Já impactou centenas de profissionais que hoje lideram com mais clareza, confiança e propósito.',
    ],
    expertise: ['Liderança Prática', 'Gestão de Pessoas', 'Alta Performance', 'Comunicação'],
    initials: 'CS',
  },
  {
    id: 'luciana',
    name: 'Luciana Venâncio',
    title: 'Psicóloga · Neuropsicologia · Psicologia Hospitalar',
    // SUBSTITUIR: coloque a foto real em /public/images/luciana-venancio.jpg
    image: '/images/luciana-venancio.webp',
    bio: [
      'Psicóloga especialista em Neuropsicologia e Psicologia Hospitalar, Luciana Venâncio traz a base científica do comportamento humano para o centro da metodologia Protagonize. Sua expertise em saúde mental, inteligência emocional e psicologia positiva eleva cada processo de desenvolvimento.',
      'É a responsável por tornar o método não apenas eficaz, mas profundamente humano — garantindo que as transformações sejam duradouras, integradas e biologicamente fundamentadas.',
    ],
    expertise: ['Neuropsicologia', 'Saúde Mental', 'Inteligência Emocional', 'Psicologia Positiva'],
    initials: 'LV',
  },
]

// ─── METHOD PILLARS ──────────────────────────────────────────
export const methodPillars = [
  { letter: 'P', word: 'Posicionamento', desc: 'Defina quem você é, qual é o seu valor e como você quer ser percebido — por equipes, clientes e pelo mercado.' },
  { letter: 'R', word: 'Responsabilidade', desc: 'Assuma a autoria da sua vida. Protagonistas não esperam — eles decidem, agem e respondem pelos resultados.' },
  { letter: 'O', word: 'Organização', desc: 'Estruture seu tempo, energia e prioridades para operar no seu mais alto nível de performance e foco.' },
  { letter: 'T', word: 'Transformação', desc: 'Quebre padrões limitantes e reconstrua crenças, comportamentos e hábitos que geram resultado real.' },
  { letter: 'A', word: 'Autoconhecimento', desc: 'Conheça seus pontos fortes, vulnerabilidades, gatilhos e potencial — a base de toda liderança autêntica.' },
  { letter: 'G', word: 'Gestão Emocional', desc: 'Regule emoções sob pressão, construa relações de confiança e comunique-se com maturidade e impacto.' },
  { letter: 'O', word: 'Objetivos', desc: 'Estabeleça metas claras, mensuráveis e estrategicamente alinhadas com quem você quer se tornar.' },
  { letter: 'N', word: 'Networking', desc: 'Construa relações estratégicas que abrem portas, geram oportunidades e amplificam sua influência.' },
  { letter: 'I', word: 'Influência', desc: 'Desenvolva a capacidade de inspirar, mobilizar e gerar impacto positivo nas pessoas ao seu redor.' },
  { letter: 'Z', word: 'Zona de Excelência', desc: 'Identifique e opere consistentemente na zona onde seus talentos, paixão e resultado se convergem.' },
  { letter: 'E', word: 'Execução', desc: 'Transforme consciência em ação. Visão sem execução é ilusão — aqui você aprende a entregar no mais alto nível.' },
]

// ─── PROGRAMS ────────────────────────────────────────────────
export const programs = [
  {
    id: 'online',
    tier: 'Nível 01 · Acesso',
    name: 'Programa Online',
    price: '997',
    featured: false,
    badge: null,
    description: 'O ponto de partida para desenvolver liderança, inteligência emocional e alta performance no seu próprio ritmo. Acesso completo ao Método Protagonize em aulas gravadas, com toda a estrutura para você evoluir de onde estiver.',
    features: [
      'Módulos gravados com as mentoras',
      'Exercícios e ferramentas práticas',
      'Materiais, PDFs e frameworks',
      'Acesso vitalício à plataforma',
      'Certificado de conclusão',
    ],
    cta: 'Conhecer Programa',
    ctaNote: null,
  },
  {
    id: 'group',
    tier: 'Nível 02 · Grupo',
    name: 'Mentoria em Grupo',
    price: '2.997',
    featured: true,
    badge: 'Mais Procurado',
    description: 'Para líderes que querem acelerar a transformação com suporte ao vivo, a força da comunidade e um plano de ação personalizado. Mais do que um curso — uma experiência de desenvolvimento coletivo de alto nível.',
    features: [
      'Tudo do Programa Online',
      'Encontros ao vivo mensais',
      'Comunidade exclusiva de líderes',
      'Plano de ação personalizado',
      'Desafios mensais de alta performance',
      'Networking estratégico de alto nível',
    ],
    cta: 'Quero Participar',
    ctaNote: null,
  },
  {
    id: 'individual',
    tier: 'Nível 03 · Premium',
    name: 'Mentoria Individual',
    price: '9.997',
    featured: false,
    badge: null,
    description: 'Acompanhamento 100% personalizado com diagnóstico individual, sessões exclusivas e plano estratégico construído sob medida para o seu momento, seus desafios e seus objetivos. Vagas limitadas.',
    features: [
      'Diagnóstico individual completo',
      'Sessões 1:1 com Camilla Santos e Luciana Venâncio',
      'Plano estratégico sob medida',
      'Suporte contínuo entre sessões',
      'Acesso ilimitado à plataforma',
      'Vagas limitadas — aplicação necessária',
    ],
    cta: 'Quero uma Sessão Estratégica',
    ctaNote: 'Aplicação obrigatória',
  },
]

// ─── TESTIMONIALS ────────────────────────────────────────────
export const testimonials = [
  {
    text: 'A Protagonize mudou fundamentalmente a forma como eu lidero. Aprendi a gerenciar minhas emoções sob pressão e a inspirar minha equipe com muito mais autenticidade e resultado.',
    name: 'Ana Ferreira',
    role: 'Gerente de Operações · Tech',
    initials: 'AF',
  },
  {
    text: 'O método é diferente de tudo que já fiz. Une ciência, liderança prática e autoconhecimento de um jeito que realmente transforma. Fui promovida dois meses depois.',
    name: 'Mariana Costa',
    role: 'Diretora Comercial · Varejo',
    initials: 'MC',
  },
  {
    text: 'Voltei para minha empresa com clareza total, uma presença diferente e um plano concreto. A mentoria individual foi o investimento mais estratégico da minha carreira.',
    name: 'Renata Silva',
    role: 'CEO · Agência Digital',
    initials: 'RS',
  },
]

// ─── FAQ ─────────────────────────────────────────────────────
export const faqs = [
  {
    q: 'Para quem são os programas da Protagonize?',
    a: 'Para profissionais, líderes, gestores, empreendedores e mulheres em crescimento profissional que desejam assumir protagonismo na carreira, desenvolver liderança, comunicação e inteligência emocional. Entre 25 e 55 anos, com potencial ainda não totalmente destravado.',
  },
  {
    q: 'Como funciona a Sessão Estratégica gratuita?',
    a: 'É uma conversa profunda (não uma reunião de vendas) com nossa equipe para mapear seu momento atual, desafios e objetivos. Com base nisso, indicamos o programa mais adequado. Totalmente gratuita e sem compromisso.',
  },
  {
    q: 'Qual a diferença entre Mentoria em Grupo e Individual?',
    a: 'A Mentoria em Grupo oferece a força da comunidade, encontros ao vivo e networking. A Individual é 100% personalizada, com diagnóstico profundo, sessões exclusivas e plano estratégico feito sob medida para você. Vagas muito limitadas.',
  },
  {
    q: 'Os programas são presenciais ou online?',
    a: '100% online, com infraestrutura de ponta. Os encontros ao vivo e as sessões individuais são realizados via plataforma de videoconferência premium. Acesso de qualquer lugar do mundo.',
  },
  {
    q: 'Qual a duração de cada programa?',
    a: 'O Programa Online pode ser concluído no seu ritmo. A Mentoria em Grupo opera em ciclos trimestrais com turmas fechadas. A Mentoria Individual é desenhada conforme seus objetivos — geralmente entre 3 e 6 meses.',
  },
  {
    q: 'Como sei qual programa é o certo para mim?',
    a: 'Nossa Sessão Estratégica gratuita existe exatamente para isso. Em 45 minutos, mapeamos seu perfil, momento e objetivos e indicamos o melhor caminho.',
  },
  {
    q: 'A Protagonize trabalha com empresas e equipes?',
    a: 'Sim. Temos programas customizados para empresas que desejam desenvolver lideranças internas, criar cultura de alta performance e elevar o nível das suas equipes. Entre em contato para uma proposta.',
  },
  {
    q: 'Existe garantia nos programas?',
    a: 'Sim. Oferecemos garantia de satisfação em todos os programas. Se nos primeiros 7 dias você entender que o programa não é para você, devolvemos 100% do investimento. Sem perguntas.',
  },
  {
    q: 'Qual resultado posso esperar?',
    a: 'Clareza de propósito, maior confiança na liderança, comunicação mais eficaz, melhora nas relações profissionais e um plano concreto de crescimento. Os resultados variam por pessoa, mas o compromisso com a transformação é sempre o centro.',
  },
  {
    q: 'Como é feito o pagamento?',
    a: 'Aceitamos cartão de crédito (parcelamento disponível), PIX e boleto bancário. Para programas premium, a forma de pagamento é discutida após aprovação da aplicação.',
  },
]

// ─── BLOG POSTS ──────────────────────────────────────────────
export const blogPosts = [
  {
    slug: 'inteligencia-emocional-liderar-pressao',
    image: '/images/inteligencia-emocional.webp',
    title: 'Como desenvolver inteligência emocional para liderar sob pressão',
    excerpt: 'Líderes que gerenciam bem suas emoções tomam melhores decisões, inspiram mais e constroem equipes mais resilientes.',
    category: 'Inteligência Emocional',
    author: 'Luciana Venâncio',
    date: '12 Mar 2025',
    readTime: '8 min',
    bgColor: '#1a2638',
    abbr: 'IE',
  },
  {
    slug: 'lideranca-consciente-o-que-e',
    image: '/images/lideranca.webp',
    title: 'Liderança consciente: o que é e por que muda absolutamente tudo',
    excerpt: 'Ser um líder consciente não é ser "bonzinho" — é ter clareza, integridade e a capacidade de gerar resultado com propósito.',
    category: 'Liderança',
    author: 'Camilla Santos',
    date: '5 Mar 2025',
    readTime: '6 min',
    bgColor: '#111111',
    abbr: 'LC',
  },
  {
    slug: 'alta-performance-sem-burnout',
    image: '/images/alta-performance.webp',
    title: 'Alta performance sem burnout: como sustentar resultados no longo prazo',
    excerpt: 'Performance sustentável exige equilíbrio entre entrega, recuperação e autocuidado estratégico.',
    category: 'Alta Performance',
    author: 'Camilla Santos',
    date: '25 Fev 2025',
    readTime: '10 min',
    bgColor: '#2a1f0e',
    abbr: 'AP',
  },
  {
    slug: '5-comportamentos-destroem-confianca-equipe',
    image: '/images/gestao-de-carreira.webp',
    title: '5 comportamentos que destroem a confiança de uma equipe',
    excerpt: 'Confiança se constrói em anos e se destrói em segundos. Conheça os padrões mais comuns que comprometem relações de trabalho.',
    category: 'Gestão de Carreira',
    author: 'Luciana Venâncio',
    date: '18 Fev 2025',
    readTime: '7 min',
    bgColor: '#14141e',
    abbr: 'GP',
  },
  {
    slug: 'papel-lider-saude-mental-equipe',
    image: '/images/saude-mental.webp',
    title: 'O papel do líder no bem-estar mental da equipe',
    excerpt: 'Líderes influenciam diretamente a saúde mental dos seus times. Como criar ambientes psicologicamente seguros e de alta entrega.',
    category: 'Saúde Mental',
    author: 'Luciana Venâncio',
    date: '10 Fev 2025',
    readTime: '9 min',
    bgColor: '#0e1e14',
    abbr: 'SM',
  },
  {
    slug: 'protagonismo-carreira-sem-esperar-permissao',
    image: '/images/protagonismo.webp',
    title: 'Como assumir protagonismo na carreira sem esperar permissão',
    excerpt: 'Protagonismo é uma postura antes de ser um cargo. Profissionais que tomam as rédeas chegam mais longe e mais rápido.',
    category: 'Protagonismo',
    author: 'Camilla Santos',
    date: '3 Fev 2025',
    readTime: '8 min',
    bgColor: '#1e1e0a',
    abbr: 'PR',
  },
]

// ─── STATS ───────────────────────────────────────────────────
export const stats = [
  { num: '500+', label: 'Profissionais\nTransformados' },
  { num: '100+', label: 'Líderes\nDesenvolvidos' },
  { num: '98%', label: 'Taxa de\nSatisfação' },
  { num: '10+', label: 'Anos de\nExperiência' },
]

// ─── VALUES ──────────────────────────────────────────────────
export const values = [
  { title: 'Autenticidade', desc: 'Liderar sendo quem você realmente é. Com presença, congruência e sem máscaras — isso é o que diferencia líderes memoráveis dos genéricos.' },
  { title: 'Responsabilidade', desc: 'Protagonistas assumem autoria. Não transferem para o externo o que é interno. Essa postura muda tudo: carreira, relacionamentos e resultados.' },
  { title: 'Coragem', desc: 'Crescimento real exige desconforto real. Ter coragem de se ver com honestidade, de mudar padrões antigos e de ocupar o espaço que é seu.' },
  { title: 'Consciência', desc: 'Agir com intenção, presença e visão de longo prazo. Líderes conscientes mudam ambientes, inspiram equipes e criam legados duradouros.' },
  { title: 'Excelência', desc: 'Compromisso com a qualidade de cada processo e de cada resultado — sem atalhos, sem mediocridade, sempre em busca do mais alto nível.' },
  { title: 'Humanidade', desc: 'Por trás de cada líder existe um ser humano. A Protagonize nunca esquece disso. Desenvolvimento humano é, antes de tudo, sobre o humano.' },
]
