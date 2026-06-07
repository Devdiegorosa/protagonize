'use client'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import Link from 'next/link'

export function FadeIn({ children, delay = 0, className }: { children: React.ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay, ease: [0.4, 0, 0.2, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function SectionEyebrow({ children, center }: { children: string; center?: boolean }) {
  return <div className={cn('section-eyebrow', center && 'section-eyebrow--center')}>{children}</div>
}

export function PageHero({ eyebrow, title }: { eyebrow: string; title: React.ReactNode }) {
  return (
    <section className="page-hero">
      <div style={{ maxWidth: 1180, margin: '0 auto', width: '100%' }}>
        <FadeIn>
          <SectionEyebrow>{eyebrow}</SectionEyebrow>
          <h1 className="font-serif font-normal leading-[1.15] text-white" style={{ fontSize: 'clamp(36px,5vw,52px)' }}>
            {title}
          </h1>
        </FadeIn>
      </div>
    </section>
  )
}

export function CTASection() {
  return (
    <section className="bg-black py-36 px-[5%] text-center relative overflow-hidden">
      <div className="cta-watermark">PROTAGONIZE</div>
      <div className="relative z-10 site-container">
        <FadeIn>
          <SectionEyebrow center>Próximo Passo</SectionEyebrow>
          <h2 className="section-h2 section-h2--white max-w-[600px] mx-auto">
            Pronta para assumir o <em>seu protagonismo?</em>
          </h2>
          <p className="section-lead section-lead--dark mx-auto mb-14 text-center" style={{ maxWidth: 520 }}>
            Agende sua sessão estratégica gratuita e descubra exatamente qual caminho irá acelerar sua evolução como líder e profissional.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/diagnostico" className="btn-primary" style={{ justifyContent: 'center' }}>Agendar Sessão Estratégica →</Link>
            <Link href="/programs" className="btn-secondary" style={{ justifyContent: 'center' }}>Ver Programas</Link>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
