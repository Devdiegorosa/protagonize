'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import Image from 'next/image'

const links = [
  { href: '/',             label: 'Home' },
  { href: '/about',        label: 'Sobre' },
  { href: '/programs',     label: 'Programas' },
  { href: '/blog',         label: 'Blog' },
  { href: '/student-area', label: 'Área do Aluno' },
  { href: '/contact',      label: 'Contato' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen]         = useState(false)
  const pathname                = usePathname()

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <nav className={cn('nav-root', scrolled && 'scrolled', open && 'open')}>
      <div style={{ maxWidth: 1180, margin: '0 auto', padding: '0 5%', height: 76, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Link href="/" className="nav-logo">
  <Image src="/images/logo-protagonize-bg.png" alt="Protagonize Mentoria" width={140} height={46} className="object-contain" />
</Link>

        <ul className="hidden lg:flex items-center gap-9 list-none">
          {links.map(l => (
            <li key={l.href}>
              <Link href={l.href} className={cn('nav-link', pathname === l.href && 'active')}>
                {l.label}
              </Link>
            </li>
          ))}
          <li><Link href="/diagnostico" className="nav-cta">Sessão Estratégica</Link></li>
        </ul>

        <button className="lg:hidden p-2 text-white" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden px-[5%] py-6 flex flex-col gap-5" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
          {links.map(l => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)} className="nav-link--mobile">
              {l.label}
            </Link>
          ))}
          <Link href="/diagnostico" onClick={() => setOpen(false)} className="btn-primary self-start mt-2">
            Sessão Estratégica
          </Link>
        </div>
      )}
    </nav>
  )
}
