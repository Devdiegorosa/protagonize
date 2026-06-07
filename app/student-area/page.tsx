import type { Metadata } from 'next'
import Link from 'next/link'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Área do Aluno | Protagonize Mentoria',
  description: 'Acesse sua área exclusiva de aluno da Protagonize Mentoria.',
}

export default function StudentAreaPage() {
  return (
    <div style={{ minHeight: '100vh', display: 'grid', gridTemplateColumns: '1fr 1fr' }}>

      {/* ESQUERDA — visual premium */}
      <div style={{ background: 'var(--black)', position: 'relative', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '100px 56px 56px', minHeight: '100vh', overflow: 'hidden' }}>

        {/* Glow */}
        <div style={{ position: 'absolute', top: '-10%', right: '-10%', width: '60%', height: '60%', background: 'radial-gradient(ellipse, rgba(184,149,42,0.12) 0%, transparent 65%)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: '-10%', left: '-10%', width: '50%', height: '50%', background: 'radial-gradient(ellipse, rgba(184,149,42,0.07) 0%, transparent 65%)', pointerEvents: 'none' }} />

        {/* Conteúdo central */}
        <div style={{ position: 'relative', zIndex: 2 }}>
          <div style={{ width: 48, height: 2, background: 'var(--gold)', marginBottom: 24 }} />
          <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(36px, 3.5vw, 52px)', fontWeight: 400, color: 'var(--white)', lineHeight: 1.2, marginBottom: 20 }}>
            Bem-vindo à sua<br />
            <em style={{ fontStyle: 'italic', color: 'var(--gold)' }}>jornada de evolução</em>
          </h1>
          <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.50)', lineHeight: 1.75, fontWeight: 300, maxWidth: 400 }}>
            Aqui você acessa seus programas, acompanha seu progresso e continua desenvolvendo sua liderança.
          </p>

          {/* Features */}
          <div style={{ marginTop: 48, display: 'flex', flexDirection: 'column', gap: 20 }}>
            {[
              { icon: '◈', text: 'Módulos e aulas gravadas' },
              { icon: '◉', text: 'Materiais e ferramentas exclusivas' },
              { icon: '◇', text: 'Acompanhamento do seu progresso' },
              { icon: '✦', text: 'Certificados de conclusão' },
            ].map(item => (
              <div key={item.text} style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                <span style={{ color: 'var(--gold)', fontSize: 14, flexShrink: 0 }}>{item.icon}</span>
                <span style={{ fontSize: 14, color: 'rgba(255,255,255,0.60)' }}>{item.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Quote no rodapé */}
        <div style={{ position: 'relative', zIndex: 2, borderLeft: '2px solid rgba(184,149,42,0.40)', paddingLeft: 20 }}>
          <p style={{ fontFamily: 'var(--font-serif)', fontSize: 15, fontStyle: 'italic', color: 'rgba(255,255,255,0.35)', lineHeight: 1.65 }}>
            "Assuma o protagonismo da sua vida, carreira e liderança."
          </p>
        </div>
      </div>

      {/* DIREITA — formulário de login */}
      <div style={{ background: 'var(--off-white)', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '100px 5% 64px', minHeight: '100vh' }}>
        <div style={{ width: '100%', maxWidth: 420 }}>

          {/* Header */}
          <div style={{ marginBottom: 40 }}>
            <div style={{ fontSize: 10, letterSpacing: 3, textTransform: 'uppercase', color: 'var(--gold)', marginBottom: 12, display: 'flex', alignItems: 'center', gap: 10 }}>
              <span style={{ width: 24, height: 1, background: 'var(--gold)', display: 'inline-block' }} />
              Área do Aluno
            </div>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 32, fontWeight: 400, color: 'var(--black)', marginBottom: 8 }}>
              Acesse sua conta
            </h2>
            <p style={{ fontSize: 14, color: 'var(--gray-600)', lineHeight: 1.6 }}>
              Entre com seu e-mail e senha cadastrados.
            </p>
          </div>

          {/* Form */}
          <form style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>

            <div>
              <label className="form-label">E-mail</label>
              <input
                type="email"
                className="form-input"
                placeholder="seu@email.com"
                style={{ background: 'var(--white)' }}
              />
            </div>

            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
                <label className="form-label" style={{ marginBottom: 0 }}>Senha</label>
                <a href="#" style={{ fontSize: 12, color: 'var(--gold)', textDecoration: 'none', letterSpacing: 0.3 }}>
                  Esqueceu a senha?
                </a>
              </div>
              <input
                type="password"
                className="form-input"
                placeholder="••••••••"
                style={{ background: 'var(--white)' }}
              />
            </div>

            {/* Aviso área em desenvolvimento */}
            <div style={{ background: 'rgba(184,149,42,0.08)', border: '1px solid rgba(184,149,42,0.25)', padding: '14px 16px', display: 'flex', gap: 12, alignItems: 'flex-start' }}>
              <span style={{ color: 'var(--gold)', fontSize: 16, flexShrink: 0, marginTop: 1 }}>⚡</span>
              <p style={{ fontSize: 12, color: 'var(--gray-600)', lineHeight: 1.65 }}>
                A plataforma está em desenvolvimento. Em breve você receberá seus dados de acesso por e-mail.
              </p>
            </div>

            <button
              type="submit"
              className="form-submit"
              style={{ marginTop: 4 }}
            >
              Entrar na plataforma
            </button>

          </form>

          {/* Divisor */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 16, margin: '32px 0' }}>
            <div style={{ flex: 1, height: 1, background: 'var(--gray-200)' }} />
            <span style={{ fontSize: 12, color: 'var(--gray-400)', letterSpacing: 0.5 }}>ou</span>
            <div style={{ flex: 1, height: 1, background: 'var(--gray-200)' }} />
          </div>

          {/* Sem acesso */}
          <div style={{ textAlign: 'center' }}>
            <p style={{ fontSize: 13, color: 'var(--gray-600)', marginBottom: 16 }}>
              Ainda não é aluno da Protagonize?
            </p>
            <Link href="/programs" style={{
              display: 'inline-block', padding: '13px 32px',
              border: '1px solid var(--black)', color: 'var(--black)',
              fontSize: 12, fontWeight: 600, letterSpacing: 1.5,
              textTransform: 'uppercase', textDecoration: 'none',
              transition: 'all 0.3s',
            }}>
              Conhecer os programas
            </Link>
          </div>

          {/* Footer da página */}
          <div style={{ marginTop: 48, textAlign: 'center', fontSize: 11, color: 'var(--gray-400)', lineHeight: 1.65 }}>
            Dúvidas? Entre em contato:{' '}
            <a href="mailto:contato@protagonize.com.br" style={{ color: 'var(--gold)', textDecoration: 'none' }}>
              contato@protagonize.com.br
            </a>
          </div>

        </div>
      </div>

    </div>
  )
}
