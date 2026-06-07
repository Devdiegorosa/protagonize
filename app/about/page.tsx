import type { Metadata } from 'next'
import Image from 'next/image'
import { FadeIn, SectionEyebrow, PageHero, CTASection } from '@/components/ui/index'
import { values } from '@/data'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Sobre Nós | Protagonize Mentoria',
  description: 'Conheça a história, missão e valores da Protagonize Mentoria. Saiba mais sobre Camilla Santos e Luciana Venâncio.',
}

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Sobre a Protagonize"
        title={<>A história por trás da <em style={{ fontStyle: 'italic', color: 'var(--gold)' }}>transformação</em></>}
      />

      {/* Story */}
      <section style={{ background: 'var(--white)', padding: '100px 5%' }}>
        <div className="max-w-[1180px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
          <FadeIn>
            <SectionEyebrow>Nossa história</SectionEyebrow>
            <h2 className="section-h2">
              Por que liderança e psicologia <em style={{ color: 'var(--gold)', fontStyle: 'italic' }}>juntas</em>
            </h2>
            <div className="flex flex-col gap-5 font-light" style={{ fontSize: 15, color: 'var(--gray-600)', lineHeight: 1.85 }}>
              <p>A Protagonize nasceu de uma convicção simples, mas poderosa: a maior parte das limitações profissionais é de natureza humana, não técnica. Profissionais que travam, líderes que não engajam, carreiras que estagnaram — tudo tem raiz em comportamentos, crenças e emoções não trabalhadas.</p>
              <p>Camilla Santos e Luciana Venâncio se uniram para criar o que o mercado ainda não tinha: uma metodologia que integra liderança prática, gestão e psicologia aplicada. O resultado é um desenvolvimento que transforma de dentro para fora — não apenas o que o profissional faz, mas quem ele é.</p>
              <p>Hoje a Protagonize é reconhecida pela profundidade, pela sofisticação do método e pelos resultados verificáveis de centenas de profissionais que assumiram o protagonismo da própria vida.</p>
            </div>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div style={{ background: 'var(--black)', padding: 56 }}>
              <div style={{ borderLeft: '2px solid var(--gold)', paddingLeft: 28, marginBottom: 40 }}>
                <div style={{ fontSize: 10, letterSpacing: 3, textTransform: 'uppercase', color: 'var(--gold)', marginBottom: 12 }}>Nossa crença central</div>
                <p className="font-serif font-light italic" style={{ fontSize: 20, color: 'var(--white)', lineHeight: 1.6 }}>
                  "Liderar sem consciência custa caro. Sem autoconhecimento não há liderança na prática, nem resultado sustentável."
                </p>
              </div>
              <div className="grid grid-cols-2 gap-6 pt-8" style={{ borderTop: '1px solid rgba(255,255,255,0.10)' }}>
                {[{ num: '500+', label: 'Vidas Impactadas' }, { num: '10+', label: 'Anos de Experiência' }].map((s) => (
                  <div key={s.num}>
                    <div className="font-serif font-normal" style={{ fontSize: 32, color: 'var(--gold)' }}>{s.num}</div>
                    <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.30)', marginTop: 4 }}>{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* MVV */}
      <div style={{ background: 'var(--black)' }}>
        <div className="max-w-[1180px] mx-auto px-[5%] grid grid-cols-1 md:grid-cols-3 gap-0.5">
          {[
            { label: 'Missão', text: '"Transformar profissionais em líderes conscientes, de alta performance e impacto real — unindo liderança prática e ciência do comportamento humano."' },
            { label: 'Visão',  text: '"Ser a referência em desenvolvimento de liderança humana no Brasil, reconhecida pela profundidade metodológica e pelos resultados reais dos nossos mentorados."' },
            { label: 'Valores', text: 'Autenticidade · Responsabilidade · Coragem · Consciência · Excelência · Humanidade · Integridade' },
          ].map((item, i) => (
            <FadeIn key={item.label} delay={i * 0.1}>
              <div style={{ padding: '48px 40px', borderTop: '2px solid rgba(184,149,42,0.30)' }}>
                <div style={{ fontSize: 10, letterSpacing: 3, textTransform: 'uppercase', color: 'var(--gold)', marginBottom: 16 }}>{item.label}</div>
                <p className="font-serif font-light italic" style={{ fontSize: 16, color: 'rgba(255,255,255,0.70)', lineHeight: 1.7 }}>{item.text}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>

      {/* Values */}
      <section style={{ background: 'var(--off-white)', padding: '100px 5%' }}>
        <div className="max-w-[1180px] mx-auto">
          <FadeIn>
            <SectionEyebrow>Princípios</SectionEyebrow>
            <h2 className="section-h2">O que nos <em style={{ color: 'var(--gold)', fontStyle: 'italic' }}>guia</em></h2>
          </FadeIn>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-0.5 mt-[60px]">
            {values.map((v, i) => (
              <FadeIn key={v.title} delay={i * 0.08}>
                <div className="value-block">
                  <h4 className="font-serif font-medium mb-3" style={{ fontSize: 22, color: 'var(--black)' }}>{v.title}</h4>
                  <p style={{ fontSize: 13, color: 'var(--gray-600)', lineHeight: 1.7 }}>{v.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Founders — foto juntas + bio conjunta */}
      <section style={{ background: 'var(--white)', padding: '100px 5%' }}>
        <div className="max-w-[1180px] mx-auto">
          <FadeIn>
            <SectionEyebrow>As Mentoras</SectionEyebrow>
            <h2 className="section-h2">
              Sócias, amigas e <em style={{ color: 'var(--gold)', fontStyle: 'italic' }}>parceiras de propósito</em>
            </h2>
          </FadeIn>

          <FadeIn delay={0.15}>
            <div className="mt-[72px]" style={{ background: 'var(--black)' }}>

              {/* Grid único: empilhado no mobile/tablet, lado a lado no desktop */}
              <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr]">

                {/* Foto */}
                <div className="relative" style={{ aspectRatio: '4/3', minHeight: 300 }}>
                  <Image
                    src="/images/camilla-e-luciana.webp"
                    alt="Camilla Santos e Luciana Venâncio — fundadoras da Protagonize Mentoria"
                    fill
                    className="object-cover object-top"
                  />
                </div>

                {/* Bio — aparece abaixo da foto no mobile/tablet, ao lado no desktop */}
                <div style={{ padding: '40px 32px', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 24 }}>
                  <div style={{ paddingBottom: 24, borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
                    <div style={{ fontSize: 10, letterSpacing: 2, textTransform: 'uppercase', color: 'var(--gold)', marginBottom: 4 }}>Liderança & Alta Performance</div>
                    <h3 className="font-serif font-normal" style={{ fontSize: 22, color: 'var(--white)', marginBottom: 8 }}>Camilla Santos</h3>
                    <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.50)', lineHeight: 1.7, fontWeight: 300 }}>Especialista em liderança autêntica e gestão de pessoas. Une coragem, clareza e execução para transformar profissionais em líderes de resultado.</p>
                    <div className="flex flex-wrap gap-2 mt-3">{['Liderança', 'Gestão', 'Performance'].map(tag => <span key={tag} className="exp-tag">{tag}</span>)}</div>
                  </div>
                  <div style={{ paddingBottom: 24, borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
                    <div style={{ fontSize: 10, letterSpacing: 2, textTransform: 'uppercase', color: 'var(--gold)', marginBottom: 4 }}>Psicologia · Neuropsicologia</div>
                    <h3 className="font-serif font-normal" style={{ fontSize: 22, color: 'var(--white)', marginBottom: 8 }}>Luciana Venâncio</h3>
                    <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.50)', lineHeight: 1.7, fontWeight: 300 }}>Psicóloga especialista em Neuropsicologia. Traz a profundidade científica do comportamento humano, tornando cada transformação duradoura.</p>
                    <div className="flex flex-wrap gap-2 mt-3">{['Psicologia', 'IE', 'Saúde Mental'].map(tag => <span key={tag} className="exp-tag">{tag}</span>)}</div>
                  </div>
                  <div>
                    <div style={{ fontSize: 10, letterSpacing: 2, textTransform: 'uppercase', color: 'var(--gold)', marginBottom: 10 }}>Juntas na Protagonize</div>
                    <p className="font-serif font-light italic" style={{ fontSize: 15, color: 'rgba(255,255,255,0.75)', lineHeight: 1.7 }}>"Somos sócias, amigas e parceiras de propósito — a materialização da crença de que a verdadeira grandeza está no quanto fazemos outros crescerem."</p>
                  </div>
                </div>

              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <CTASection />
      <Footer />
    </>
  )
}
