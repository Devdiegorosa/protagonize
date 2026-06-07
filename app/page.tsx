import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { founders, methodPillars, programs, testimonials, faqs, stats } from '@/data'
import { FadeIn, SectionEyebrow, CTASection } from '@/components/ui/index'
import { FAQItem } from '@/components/ui/FAQItem'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Protagonize Mentoria | Liderança, Alta Performance e Desenvolvimento Humano',
}

const marqueeItems = ['Liderança','Alta Performance','Inteligência Emocional','Protagonismo','Transformação','Desenvolvimento Humano','Posicionamento','Clareza']

export default function HomePage() {
  return (
    <>
      {/* ── HERO */}
      <section className="min-h-screen bg-black relative flex flex-col justify-center overflow-hidden">

        <div className="absolute" style={{ top:'-20%',right:'-10%',width:'60%',height:'80%',background:'radial-gradient(ellipse,rgba(184,149,42,0.12) 0%,transparent 65%)',pointerEvents:'none' }} />
        <div className="absolute" style={{ bottom:'-20%',left:'-10%',width:'50%',height:'70%',background:'radial-gradient(ellipse,rgba(184,149,42,0.07) 0%,transparent 65%)',pointerEvents:'none' }} />

        <div className="relative z-10 max-w-[1180px] mx-auto px-[5%] pt-[120px] pb-20 grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-20 items-center">
          <FadeIn>
            <div className="flex items-center gap-3 mb-8">
              <div className="hero-eyebrow-line" />
              <span className="text-gold text-[11px] tracking-[3px] uppercase font-medium">Mentoria de Liderança & Desenvolvimento Humano</span>
            </div>
            <h1 className="font-serif text-white font-normal leading-[1.1] mb-7" style={{ fontSize:'clamp(42px,5vw,72px)' }}>
              Assuma o protagonismo da sua <em className="italic text-gold">vida, carreira</em> e liderança.
            </h1>
            <p className="text-[17px] leading-[1.8] mb-12 font-light max-w-[480px]" style={{ color:'rgba(255,255,255,0.55)' }}>
              Mentorias transformadoras para quem deseja crescer com propósito, confiança e alta performance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-16">
              <Link href="/diagnostico" className="btn-primary" style={{ justifyContent: 'center' }}>Agendar Sessão Estratégica →</Link>
              <Link href="/programs" className="btn-secondary" style={{ justifyContent: 'center' }}>Conhecer os Programas</Link>
            </div>
            <div className="flex gap-8">
              {stats.map((s, i) => (
                <div key={s.num} className="flex items-center gap-8">
                  {i > 0 && <div className="w-px h-10" style={{ background:'rgba(255,255,255,0.1)' }} />}
                  <div className="text-center">
                    <div className="font-serif text-[34px] font-normal text-gold leading-none">{s.num}</div>
                    <div className="text-[11px] tracking-[0.5px] mt-1 whitespace-pre" style={{ color:'rgba(255,255,255,0.4)' }}>{s.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="hero-feature-card">
              <ul className="list-none flex flex-col">
                {['Liderança autêntica e consciente','Inteligência emocional aplicada','Alta performance sustentável','Comunicação de impacto','Gestão estratégica de carreira','Metodologia baseada em ciência'].map(item => (
                  <li key={item} className="feature-item">
                    <div className="feature-check" />
                    <span className="text-[14px]" style={{ color:'rgba(255,255,255,0.75)' }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── MARQUEE */}
      <div className="marquee-wrap">
        <div className="marquee-track">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <div key={i} className="marquee-item"><span>{item}</span><div className="marquee-dot" /></div>
          ))}
        </div>
      </div>

      {/* ── TRANSFORMATION */}
      <section style={{ background:'var(--off-white)',padding:'120px 5%' }}>
        <div className="max-w-[1180px] mx-auto">
          <FadeIn>
            <SectionEyebrow>Antes e Depois</SectionEyebrow>
            <h2 className="section-h2">A jornada do profissional ao <em>verdadeiro líder</em></h2>
            <p className="section-lead">O protagonismo não é um destino. É uma decisão. Começa quando você escolhe parar de reagir e começar a liderar com intenção.</p>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-8 mt-[72px] items-center">
            <FadeIn delay={0.1}>
              <div className="transform-col transform-col--before">
                <div className="transform-label transform-label--before">Antes</div>
                <ul className="list-none flex flex-col gap-3.5">
                  {['Falta de direção e clareza','Insegurança constante','Baixa confiança em si mesmo','Medo de liderar e ser visto','Comunicação fraca e reativa','Dificuldade de impor limites','Burnout e desempenho instável','Potencial desperdiçado'].map(item => (
                    <li key={item} className="flex items-center gap-3 text-sm" style={{ color:'var(--gray-600)' }}>
                      <span className="w-3.5 h-px flex-shrink-0" style={{ background:'var(--gray-400)' }} />{item}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="flex items-center justify-center py-8 md:py-0">
                <span className="font-serif text-4xl text-gold md:hidden">↓</span>
                <span className="font-serif text-4xl text-gold hidden md:block">→</span>
              </div>
            </FadeIn>
            <FadeIn delay={0.3}>
              <div className="transform-col transform-col--after">
                <div className="transform-label transform-label--after">Depois</div>
                <ul className="list-none flex flex-col gap-3.5">
                  {['Clareza de propósito e direção','Liderança com autoridade natural','Confiança genuína e inabalável','Posicionamento de valor','Comunicação que inspira e influencia','Limites saudáveis e produtividade real','Alta performance sustentável','Protagonismo em cada decisão'].map(item => (
                    <li key={item} className="flex items-center gap-3 text-sm" style={{ color:'rgba(255,255,255,0.8)' }}>
                      <span className="w-1.5 h-1.5 bg-gold rounded-full flex-shrink-0" />{item}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── FOUNDERS */}
      <section style={{ padding:'120px 5%',background:'var(--white)' }}>
        <div className="max-w-[1180px] mx-auto">
          <FadeIn>
            <SectionEyebrow>As Mentoras</SectionEyebrow>
            <h2 className="section-h2">Duas especialistas.<br /><em>Um método único.</em></h2>
            <p className="section-lead">A Protagonize nasce da fusão entre liderança prática de alto nível e a profundidade da psicologia e neurociência do comportamento humano.</p>
          </FadeIn>
        </div>
        <div className="max-w-[1180px] mx-auto mt-[72px] grid grid-cols-1 lg:grid-cols-2 gap-1">
          {founders.map((f, i) => (
            <FadeIn key={f.id} delay={i * 0.15}>
              <div className="founder-card">
                <div className="founder-photo">
                  <Image src={f.image} alt={f.name} fill className="object-cover object-top" />
                </div>
                <div className="founder-info">
                  <h3 className="founder-name">{f.name}</h3>
                  <div className="founder-title">{f.title}</div>
                  {f.bio.map((p, j) => <p key={j} className="founder-bio">{p}</p>)}
                  <div className="flex flex-wrap gap-2 mt-7">{f.expertise.map(tag => <span key={tag} className="exp-tag">{tag}</span>)}</div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* ── METHOD */}
      <section id="method" style={{ background:'var(--black)',padding:'120px 5%' }}>
        <div className="max-w-[1180px] mx-auto">
          <FadeIn>
            <SectionEyebrow>Método Exclusivo</SectionEyebrow>
            <h2 className="section-h2 section-h2--white">O Método <em>PROTAGONIZE</em></h2>
            <p className="section-lead section-lead--dark">Onze etapas cuidadosamente desenvolvidas para construir líderes completos — do autoconhecimento profundo à execução de alto nível.</p>
          </FadeIn>
          <div className="mt-[72px]">
            {methodPillars.map((p, i) => (
              <FadeIn key={p.letter + i} delay={i * 0.04}>
                <div className="method-row">
                  <div className="method-letter">{p.letter}</div>
                  <div>
                    <div className="method-word">{p.word}</div>
                    <div className="method-desc">{p.desc}</div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROGRAMS */}
      <section style={{ background:'var(--off-white)',padding:'120px 5%' }}>
        <div className="max-w-[1180px] mx-auto">
          <FadeIn>
            <SectionEyebrow>Programas</SectionEyebrow>
            <h2 className="section-h2">Escolha o programa <em>ideal para você</em></h2>
            <p className="section-lead">Cada programa é projetado para um momento específico da sua jornada. Em dúvida? Agende uma sessão estratégica gratuita.</p>
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

      {/* ── SOCIAL PROOF */}
      <section style={{ background:'var(--black)',padding:'120px 5%' }}>
        <div className="max-w-[1180px] mx-auto">
          <FadeIn>
            <SectionEyebrow>Prova Social</SectionEyebrow>
            <h2 className="section-h2 section-h2--white" style={{ whiteSpace: 'wrap' }}>Resultados que <em>falam por si</em></h2>
          </FadeIn>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-0.5 mt-[72px] mb-[72px]">
            {stats.map((s, i) => (
              <FadeIn key={s.num} delay={i * 0.08}>
                <div className="stat-block">
                  <div className="stat-num">{s.num}</div>
                  <div className="stat-label whitespace-pre">{s.label}</div>
                </div>
              </FadeIn>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0.5">
            {testimonials.map((t, i) => (
              <FadeIn key={t.name} delay={i * 0.1}>
                <div className="testi-card">
                  <div className="flex gap-1 mb-5">
                    {Array(5).fill(0).map((_,j) => <div key={j} className="w-3 h-3 bg-gold" style={{ clipPath:'polygon(50% 0%,61% 35%,98% 35%,68% 57%,79% 91%,50% 70%,21% 91%,32% 57%,2% 35%,39% 35%)' }} />)}
                  </div>
                  <p className="testi-text">"{t.text}"</p>
                  <div className="flex items-center gap-3.5">
                    <div className="w-[42px] h-[42px] rounded-full flex items-center justify-center font-serif text-[15px] font-medium flex-shrink-0" style={{ background:'rgba(184,149,42,0.15)',color:'var(--gold)' }}>{t.initials}</div>
                    <div>
                      <div className="testi-name">{t.name}</div>
                      <div className="testi-role">{t.role}</div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ */}
      <section style={{ background:'var(--off-white)',padding:'120px 5%' }}>
        <div className="max-w-[1180px] mx-auto text-center">
          <FadeIn>
            <SectionEyebrow center>FAQ</SectionEyebrow>
            <h2 className="section-h2">Perguntas <em>frequentes</em></h2>
          </FadeIn>
          <div className="max-w-[760px] mx-auto mt-[72px] text-left">
            {faqs.map((f, i) => <FadeIn key={i} delay={i * 0.03}><FAQItem q={f.q} a={f.a} /></FadeIn>)}
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </>
  )
}
