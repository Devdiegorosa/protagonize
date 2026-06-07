import type { Metadata } from 'next'
import Link from 'next/link'
import { FadeIn, SectionEyebrow, PageHero, CTASection } from '@/components/ui/index'
import { programs } from '@/data'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Programas | Protagonize Mentoria',
  description: 'Conheça os 3 programas da Protagonize: Programa Online, Mentoria em Grupo e Mentoria Individual.',
}

const programDetails = [
  {
    id: 'online',
    eyebrow: 'Nível 01 · Acesso',
    name: 'Programa Online',
    tag: 'Para quem quer começar com profundidade',
    description: 'O ponto de partida para desenvolver liderança, inteligência emocional e alta performance no seu próprio ritmo. Acesso completo ao Método Protagonize em aulas gravadas, com toda a estrutura para você evoluir de onde estiver.',
    howItWorks: [
      { step: '01', title: 'Acesso imediato', desc: 'Ao adquirir, você recebe login na plataforma exclusiva com todos os módulos liberados.' },
      { step: '02', title: 'Módulos gravados', desc: 'Aulas com Camilla Santos e Luciana Venâncio aplicando o Método Protagonize completo em 11 etapas.' },
      { step: '03', title: 'Exercícios práticos', desc: 'Cada módulo tem exercícios, ferramentas e PDFs para aplicar imediatamente.' },
      { step: '04', title: 'Certificado', desc: 'Ao concluir, você recebe certificado digital de conclusão.' },
    ],
    forWho: [
      'Profissionais que querem se desenvolver no próprio ritmo',
      'Líderes que buscam base sólida em liderança e inteligência emocional',
      'Quem está em transição de carreira ou buscando clareza',
      'Pessoas que querem aplicar o método antes de ir para o grupo',
    ],
    result: 'Ao final, você terá clareza de propósito, ferramentas de liderança e inteligência emocional e um plano concreto de desenvolvimento — tudo no seu ritmo.',
    cta: 'Quero acessar o Programa Online',
    featured: false,
  },
  {
    id: 'group',
    eyebrow: 'Nível 02 · Grupo',
    name: 'Mentoria em Grupo',
    tag: 'Para quem quer evoluir com acompanhamento e comunidade',
    description: 'Para líderes que querem acelerar a transformação com suporte ao vivo, a força da comunidade e um plano de ação personalizado. Mais do que um curso — uma experiência de desenvolvimento coletivo de alto nível.',
    howItWorks: [
      { step: '01', title: 'Acesso ao Programa Online', desc: 'Você recebe todo o conteúdo gravado do nível anterior como base.' },
      { step: '02', title: 'Encontros ao vivo mensais', desc: 'Sessões ao vivo com Camilla Santos e Luciana Venâncio para aprofundamento, dúvidas e prática.' },
      { step: '03', title: 'Comunidade exclusiva', desc: 'Grupo fechado de líderes em desenvolvimento — networking, troca e apoio mútuo.' },
      { step: '04', title: 'Plano de ação', desc: 'Você sai de cada ciclo com um plano de ação concreto para os próximos 30 dias.' },
    ],
    forWho: [
      'Profissionais que querem evolução com acompanhamento real',
      'Líderes que buscam networking estratégico de alto nível',
      'Quem precisa de encontros ao vivo para se responsabilizar',
      'Pessoas que crescem melhor em comunidade e desafios coletivos',
    ],
    result: 'Em um ciclo de 3 meses, você avança com consistência — com clareza, responsabilidade e uma rede de pessoas no mesmo nível de comprometimento.',
    cta: 'Quero entrar para a próxima turma',
    featured: true,
  },
  {
    id: 'individual',
    eyebrow: 'Nível 03 · Premium',
    name: 'Mentoria Individual',
    tag: 'Para quem quer transformação profunda e personalizada',
    description: 'Acompanhamento 100% personalizado com diagnóstico individual, sessões exclusivas e plano estratégico construído sob medida para o seu momento, seus desafios e seus objetivos. Vagas limitadas.',
    howItWorks: [
      { step: '01', title: 'Diagnóstico individual', desc: 'Mapeamento profundo do seu momento, padrões, pontos fortes e áreas de desenvolvimento.' },
      { step: '02', title: 'Plano estratégico', desc: 'Com base no diagnóstico, Camilla Santos e Luciana Venâncio constroem um plano sob medida para você.' },
      { step: '03', title: 'Sessões 1:1', desc: 'Encontros individuais com as mentoras para aprofundar, ajustar e avançar com consistência.' },
      { step: '04', title: 'Suporte contínuo', desc: 'Acompanhamento entre sessões para garantir que o processo não para entre os encontros.' },
    ],
    forWho: [
      'Líderes e gestores em momento de virada profissional',
      'Empresários que querem escalar com mais clareza e equilíbrio',
      'Profissionais com desafios específicos que exigem atenção individual',
      'Quem quer o mais alto nível de acompanhamento e resultado',
    ],
    result: 'Clareza, posicionamento, liderança e alta performance — não como conceitos, mas como realidade vivida. Uma transformação que dura.',
    cta: 'Aplicar para Mentoria Individual',
    featured: false,
  },
]

export default function ProgramsPage() {
  return (
    <>
      <PageHero
        eyebrow="Programas"
        title={<>Encontre o caminho <em style={{ fontStyle: 'italic', color: 'var(--gold)' }}>certo para você</em></>}
      />

      {/* ── INTRO */}
      <section style={{ background: 'var(--white)', padding: '40px 5% 0' }}>
        <div className="max-w-[1180px] mx-auto">
          <FadeIn>
            <p className="section-lead">
              Três programas, um método. Cada nível foi desenhado para um momento específico da sua jornada — do acesso ao conteúdo até o acompanhamento mais personalizado que existe.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ── DETALHES DE CADA PROGRAMA */}
      {programDetails.map((prog, idx) => (
        <section
          key={prog.id}
          id={prog.id}
          style={{
            background: idx % 2 === 0 ? 'var(--white)' : 'var(--off-white)',
            padding: '80px 5%',
            borderTop: idx === 0 ? 'none' : '1px solid var(--gray-200)',
          }}
        >
          <div className="max-w-[1180px] mx-auto">

            {/* GRID: coluna esquerda (tudo empilhado) | coluna direita (card fixo) */}
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-1 items-start">

              {/* ESQUERDA — título, descrição, para quem é, resultado, CTA empilhados */}
              <FadeIn>
                <div style={{ paddingRight: 48 }}>

                  {/* Título e descrição */}
                  <SectionEyebrow>{prog.eyebrow}</SectionEyebrow>
                  <h2 className="section-h2">{prog.name}</h2>
                  <p style={{ fontSize: 12, letterSpacing: 2, textTransform: 'uppercase', color: 'var(--gray-400)', marginBottom: 20 }}>{prog.tag}</p>
                  <p className="section-lead" style={{ marginBottom: 48 }}>{prog.description}</p>

                  {/* Divisor */}
                  <div style={{ height: 1, background: 'var(--gray-200)', marginBottom: 40 }} />

                  {/* Para quem é */}
                  <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: 22, fontWeight: 400, color: 'var(--black)', marginBottom: 20 }}>
                    Para quem é
                  </h3>
                  <ul className="list-none flex flex-col gap-3" style={{ marginBottom: 40 }}>
                    {prog.forWho.map((item, i) => (
                      <li key={i} className="flex items-start gap-3" style={{ fontSize: 14, color: 'var(--gray-600)', lineHeight: 1.65 }}>
                        <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--gold)', flexShrink: 0, marginTop: 6, display: 'inline-block' }} />
                        {item}
                      </li>
                    ))}
                  </ul>

                  {/* Como funciona — mobile only (aparece aqui entre "para quem é" e "resultado") */}
                  <div className="lg:hidden" style={{ marginBottom: 40 }}>
                    <div style={{ background: 'var(--black)', padding: '32px', position: 'relative', overflow: 'hidden' }}>
                      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 2, background: 'linear-gradient(90deg, transparent, var(--gold), transparent)' }} />
                      <div style={{ fontSize: 10, letterSpacing: 3, textTransform: 'uppercase', color: 'var(--gold)', marginBottom: 8 }}>Passo a passo</div>
                      <h3 className="font-serif font-normal" style={{ fontSize: 20, color: 'var(--white)', marginBottom: 28 }}>Como funciona</h3>
                      <div className="flex flex-col">
                        {prog.howItWorks.map((step, i) => (
                          <div key={step.step} className="flex gap-4" style={{ paddingBottom: i < prog.howItWorks.length - 1 ? 20 : 0, marginBottom: i < prog.howItWorks.length - 1 ? 20 : 0, borderBottom: i < prog.howItWorks.length - 1 ? '1px solid rgba(255,255,255,0.06)' : 'none' }}>
                            <div style={{ fontFamily: 'var(--font-serif)', fontSize: 28, fontWeight: 400, color: 'rgba(184,149,42,0.20)', lineHeight: 1, flexShrink: 0, width: 40 }}>{step.step}</div>
                            <div>
                              <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--white)', marginBottom: 4 }}>{step.title}</div>
                              <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.45)', lineHeight: 1.65 }}>{step.desc}</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Divisor */}
                  <div style={{ height: 1, background: 'var(--gray-200)', marginBottom: 40 }} />

                  {/* Resultado esperado */}
                  <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: 22, fontWeight: 400, color: 'var(--black)', marginBottom: 16 }}>
                    Resultado esperado
                  </h3>
                  <p className="font-serif font-light italic" style={{ fontSize: 16, color: 'var(--gray-600)', lineHeight: 1.7, marginBottom: 32 }}>
                    "{prog.result}"
                  </p>
                  <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <Link href="/diagnostico" className="btn-primary btn-primary-responsive">
                      {prog.cta}
                    </Link>
                  </div>

                </div>
              </FadeIn>

              {/* DIREITA — card preto "Como funciona" — só no desktop */}
              <FadeIn delay={0.15}>
                <div className="hidden lg:block" style={{ background: 'var(--black)', padding: '40px', position: 'relative', overflow: 'hidden', height: '100%' }}>
                  <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 2, background: 'linear-gradient(90deg, transparent, var(--gold), transparent)' }} />
                  <div style={{ fontSize: 10, letterSpacing: 3, textTransform: 'uppercase', color: 'var(--gold)', marginBottom: 8 }}>Passo a passo</div>
                  <h3 className="font-serif font-normal" style={{ fontSize: 20, color: 'var(--white)', marginBottom: 32 }}>Como funciona</h3>
                  <div className="flex flex-col">
                    {prog.howItWorks.map((step, i) => (
                      <div key={step.step} className="flex gap-4" style={{
                        paddingBottom: i < prog.howItWorks.length - 1 ? 24 : 0,
                        marginBottom: i < prog.howItWorks.length - 1 ? 24 : 0,
                        borderBottom: i < prog.howItWorks.length - 1 ? '1px solid rgba(255,255,255,0.06)' : 'none',
                      }}>
                        <div style={{ fontFamily: 'var(--font-serif)', fontSize: 28, fontWeight: 400, color: 'rgba(184,149,42,0.20)', lineHeight: 1, flexShrink: 0, width: 40 }}>{step.step}</div>
                        <div>
                          <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--white)', marginBottom: 4 }}>{step.title}</div>
                          <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.45)', lineHeight: 1.65 }}>{step.desc}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeIn>

            </div>

          </div>
        </section>
      ))}

      {/* ── CARDS DE PREÇO — final */}
      <section style={{ background: 'var(--off-white)', padding: '100px 5%' }}>
        <div className="max-w-[1180px] mx-auto">
          <FadeIn>
            <SectionEyebrow center>Investimento</SectionEyebrow>
            <h2 className="section-h2 text-center" style={{ color: 'var(--black)' }}>
              Escolha o programa <em style={{ fontStyle: 'italic', color: 'var(--gold)' }}>ideal para você</em>
            </h2>
            <p className="section-lead section-lead--dark text-center mx-auto mb-16" style={{ maxWidth: 520, textAlign: 'center' }}>
              Em dúvida sobre qual programa faz mais sentido? Nossa sessão estratégica gratuita resolve isso em 45 minutos.
            </p>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0.5 mt-[72px]">
            {programs.map((prog, i) => (
              <FadeIn key={prog.id} delay={i * 0.1}>
                <div className="prog-card" style={{ background: prog.featured ? 'var(--black)' : 'var(--white)', position: 'relative' }}>
                  {prog.badge && (
                    <div style={{ position: 'absolute', top: 0, right: 0, background: 'var(--gold)', color: 'var(--black)', fontSize: 9, letterSpacing: 2.5, textTransform: 'uppercase', padding: '5px 14px', fontWeight: 700 }}>
                      {prog.badge}
                    </div>
                  )}
                  <div className="prog-tier">{prog.tier}</div>
                  <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: 28, fontWeight: 400, color: prog.featured ? 'var(--white)' : 'var(--black)', marginBottom: 12 }}>
                    {prog.name}
                  </h3>
                  <div style={{ fontFamily: 'var(--font-serif)', fontSize: 40, fontWeight: 400, color: prog.featured ? 'var(--gold)' : 'var(--black)', lineHeight: 1, marginBottom: 24 }}>
                    <sup style={{ fontSize: 18, verticalAlign: 'top', marginTop: 10, display: 'inline-block' }}>R$</sup>{prog.price}
                  </div>
                  <div style={{ height: 1, background: prog.featured ? 'rgba(255,255,255,0.10)' : 'var(--gray-200)', margin: '0 0 28px' }} />
                  <ul className="flex flex-col gap-3 mb-10 list-none">
                    {prog.features.map(f => (
                      <li key={f} className="flex items-start gap-2.5" style={{ fontSize: 13, lineHeight: 1.5, color: prog.featured ? 'rgba(255,255,255,0.60)' : 'var(--gray-600)' }}>
                        <span style={{ width: 5, height: 5, borderRadius: '50%', background: 'var(--gold)', flexShrink: 0, marginTop: 5, display: 'inline-block' }} />
                        {f}
                      </li>
                    ))}
                  </ul>
                  {prog.ctaNote && <p style={{ fontSize: 11, color: 'var(--gray-400)', marginBottom: 12, letterSpacing: 0.5 }}>{prog.ctaNote}</p>}
                  <Link href="/diagnostico" className={prog.featured ? 'prog-btn--dark' : 'prog-btn--light'}>{prog.cta}</Link>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── TABELA COMPARATIVA */}
      <section style={{ background: 'var(--off-white)', padding: '80px 5%' }}>
        <div className="max-w-[900px] mx-auto">
          <FadeIn>
            <SectionEyebrow center>Comparativo</SectionEyebrow>
            <h2 className="section-h2 text-center">
              Ainda em dúvida? <em style={{ fontStyle: 'italic', color: 'var(--gold)' }}>Compare os programas</em>
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="mt-12 overflow-x-auto">
              <table style={{ width: '100%', fontSize: 14, borderCollapse: 'collapse', border: '1px solid var(--gray-200)' }}>
                <thead>
                  <tr>
                    <th style={{ textAlign: 'left', padding: '16px 24px', fontSize: 11, letterSpacing: 2, textTransform: 'uppercase', color: 'var(--gray-400)', borderBottom: '2px solid var(--gray-200)', borderRight: '1px solid var(--gray-200)' }}>Recurso</th>
                    {programs.map(p => (
                      <th key={p.id} style={{ padding: '16px 24px', fontSize: 11, letterSpacing: 1.5, textTransform: 'uppercase', fontWeight: 600, textAlign: 'center', color: p.featured ? 'var(--gold)' : 'var(--black)', background: p.featured ? 'var(--black)' : 'transparent', borderBottom: `2px solid ${p.featured ? 'rgba(184,149,42,0.40)' : 'var(--gray-200)'}`, borderRight: '1px solid var(--gray-200)' }}>
                        {p.name}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Aulas gravadas',         true,  true,  true],
                    ['Exercícios práticos',    true,  true,  true],
                    ['Certificado',            true,  true,  true],
                    ['Encontros ao vivo',      false, true,  true],
                    ['Comunidade exclusiva',   false, true,  true],
                    ['Plano de ação',          false, true,  true],
                    ['Sessões 1:1',            false, false, true],
                    ['Diagnóstico individual', false, false, true],
                    ['Plano estratégico',      false, false, true],
                    ['Suporte contínuo',       false, false, true],
                  ].map(([label, ...vals], i) => (
                    <tr key={String(label)} style={{ background: i % 2 === 0 ? 'var(--white)' : 'var(--off-white)' }}>
                      <td style={{ padding: '14px 24px', color: 'var(--gray-600)', borderBottom: '1px solid var(--gray-200)', borderRight: '1px solid var(--gray-200)' }}>{label}</td>
                      {vals.map((v, j) => (
                        <td key={j} style={{ padding: '14px 24px', textAlign: 'center', borderBottom: '1px solid var(--gray-200)', borderRight: '1px solid var(--gray-200)', background: programs[j]?.featured ? 'rgba(10,10,10,0.03)' : 'transparent' }}>
                          {v ? <span style={{ color: 'var(--gold)', fontWeight: 600, fontSize: 16 }}>✓</span> : <span style={{ color: 'var(--gray-200)', fontSize: 16 }}>—</span>}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </FadeIn>
        </div>
      </section>

      <CTASection />
      <Footer />
    </>
  )
}
