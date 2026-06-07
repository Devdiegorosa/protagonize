import Link from 'next/link'
import Image from 'next/image'

const cols = [
  { title: 'Empresa', links: [
    { href: '/about',    label: 'Sobre Nós' },
    { href: '/#method',  label: 'Método' },
    { href: '/programs', label: 'Programas' },
    { href: '/blog',     label: 'Blog' },
  ]},
  { title: 'Programas', links: [
    { href: '/programs', label: 'Programa Online' },
    { href: '/programs', label: 'Mentoria em Grupo' },
    { href: '/programs', label: 'Mentoria Individual' },
    { href: '/diagnostico', label: 'Sessão Estratégica' },
  ]},
  { title: 'Contato', links: [
    { href: 'mailto:contato@protagonize.com.br', label: 'contato@protagonize.com.br' },
    { href: 'https://instagram.com/protagonizementoria', label: '@protagonizementoria' },
    { href: '/contact',      label: 'Fale Conosco' },
    { href: '/student-area', label: 'Área do Aluno' },
  ]},
]

export default function Footer() {
  return (
    <footer className="footer-root pt-20 pb-10">
      <div className="site-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14 mb-16">
          <div>
            <Link href="/" className="inline-block mb-4">
              <Image src="/images/logo-protagonize-bg.png" alt="Protagonize Mentoria" width={140} height={46} className="object-contain" />
            </Link>
            <p className="footer-tagline">"Assuma o protagonismo da sua vida, carreira e liderança."</p>
          </div>
          {cols.map(col => (
            <div key={col.title}>
              <h5 className="footer-col-title">{col.title}</h5>
              <ul className="flex flex-col gap-3">
                {col.links.map(l => (
                  <li key={l.label}><Link href={l.href} className="footer-link">{l.label}</Link></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-8" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
          <p className="footer-copy">© {new Date().getFullYear()} Protagonize Mentoria. Todos os direitos reservados.</p>
        <div className="flex gap-3">
            <a href="https://linkedin.com/company/protagonize" target="_blank" rel="noopener noreferrer" className="footer-social-btn">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a href="https://instagram.com/protagonizementoria" target="_blank" rel="noopener noreferrer" className="footer-social-btn">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5"/>
                <circle cx="12" cy="12" r="4"/>
                <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/>
              </svg>
            </a>
            <a href="https://wa.me/55SEUNUMERO" target="_blank" rel="noopener noreferrer" className="footer-social-btn">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 0C5.373 0 0 5.373 0 12c0 2.125.558 4.121 1.532 5.849L.057 23.535a.75.75 0 00.916.913l5.79-1.52A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.907 0-3.694-.525-5.224-1.437l-.374-.22-3.88 1.019 1.03-3.786-.242-.389A9.96 9.96 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
              </svg>
            </a>
            <a href="mailto:contato@protagonize.com.br" className="footer-social-btn">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="4" width="20" height="16" rx="2"/>
                <path d="M2 7l10 7 10-7"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
