import type { Metadata } from 'next'
import Link from 'next/link'
import { FadeIn, PageHero } from '@/components/ui/index'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Contato | Protagonize Mentoria',
  description: 'Entre em contato com a Protagonize Mentoria. E-mail, WhatsApp, Instagram e LinkedIn.',
}

const channels = [
  {
    title: 'E-mail',
    value: 'contato@protagonize.com.br',
    href: 'mailto:contato@protagonize.com.br',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="2"/>
        <path d="M2 7l10 7 10-7"/>
      </svg>
    ),
  },
  {
    title: 'WhatsApp',
    value: 'Clique para conversar',
    href: 'https://wa.me/55SEUNUMERO',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
        <path d="M12 0C5.373 0 0 5.373 0 12c0 2.125.558 4.121 1.532 5.849L.057 23.535a.75.75 0 00.916.913l5.79-1.52A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.907 0-3.694-.525-5.224-1.437l-.374-.22-3.88 1.019 1.03-3.786-.242-.389A9.96 9.96 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
      </svg>
    ),
  },
  {
    title: 'Instagram',
    value: '@protagonizementoria',
    href: 'https://instagram.com/protagonizementoria',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5"/>
        <circle cx="12" cy="12" r="4"/>
        <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/>
      </svg>
    ),
  },
  {
    title: 'LinkedIn',
    value: '/company/protagonize',
    href: 'https://linkedin.com/company/protagonize',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
  },
]

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contato"
        title={<>Fale com nossa <em style={{ fontStyle: 'italic', color: 'var(--gold)' }}>equipe</em></>}
      />

      <section style={{ background: 'var(--white)', padding: '100px 5%' }}>
        <div className="max-w-[1180px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-20">

          {/* Canais de contato */}
          <FadeIn>
            <div>
              {channels.map((ch, i) => (
                <a
                  key={ch.title}
                  href={ch.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'flex', gap: 20, alignItems: 'center',
                    marginBottom: i < channels.length - 1 ? 32 : 0,
                    paddingBottom: i < channels.length - 1 ? 32 : 0,
                    borderBottom: i < channels.length - 1 ? '1px solid var(--gray-200)' : 'none',
                    textDecoration: 'none',
                    transition: 'opacity 0.3s',
                  }}
                  className="contact-channel-link"
                >
                  {/* Ícone */}
                  <div style={{
                    width: 52, height: 52,
                    background: 'var(--black)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    flexShrink: 0,
                    color: 'var(--gold)',
                  }}>
                    {ch.icon}
                  </div>

                  {/* Texto */}
                  <div>
                    <div style={{ fontSize: 11, letterSpacing: 2, textTransform: 'uppercase', color: 'var(--black)', fontWeight: 600, marginBottom: 4 }}>
                      {ch.title}
                    </div>
                    <div style={{ fontSize: 14, color: 'var(--gray-600)' }}>
                      {ch.value}
                    </div>
                  </div>


                </a>
              ))}

              <div style={{ marginTop: 40 }}>
                <Link href="/diagnostico" className="btn-primary">
                  Agendar Sessão Estratégica →
                </Link>
              </div>
            </div>
          </FadeIn>

          {/* Formulário */}
          <FadeIn delay={0.15}>
            <div style={{ background: 'var(--off-white)', padding: 56 }}>
              <div style={{ fontSize: 11, letterSpacing: 3, textTransform: 'uppercase', color: 'var(--gold)', marginBottom: 8, display: 'flex', alignItems: 'center', gap: 12 }}>
                <span style={{ width: 28, height: 1, background: 'var(--gold)', display: 'inline-block' }} />
                Envie uma mensagem
              </div>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: 28, fontWeight: 400, color: 'var(--black)', marginBottom: 32 }}>
                Como podemos ajudar?
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6" style={{ marginBottom: 24 }}>
                <div><label className="form-label">Nome</label><input className="form-input" placeholder="Seu nome completo" /></div>
                <div><label className="form-label">E-mail</label><input className="form-input" type="email" placeholder="seu@email.com" /></div>
              </div>
              <div style={{ marginBottom: 24 }}>
                <label className="form-label">Assunto</label>
                <input className="form-input" placeholder="Como podemos ajudar?" />
              </div>
              <div style={{ marginBottom: 32 }}>
                <label className="form-label">Mensagem</label>
                <textarea className="form-textarea" style={{ minHeight: 140 }} placeholder="Escreva sua mensagem..." />
              </div>
              <button className="form-submit">Enviar Mensagem</button>
            </div>
          </FadeIn>

        </div>
      </section>
      <Footer />
    </>
  )
}
