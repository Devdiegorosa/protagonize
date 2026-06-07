import type { Metadata } from 'next'
import { FadeIn, SectionEyebrow } from '@/components/ui/index'
import LeadForm from '@/components/LeadForm'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Sessão Estratégica Gratuita | Protagonize Mentoria',
  description: 'Agende sua sessão estratégica gratuita e descubra qual programa é o caminho certo para a sua evolução como líder e profissional.',
}

export default function DiagnosticoPage() {
  return (
    <>
      {/* Hero */}
      <section className="min-h-[52vh] bg-black flex items-end pt-32 pb-[72px] px-[5%] text-center relative overflow-hidden">
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
        <div className="max-w-[700px] mx-auto w-full">
          <FadeIn>
            <SectionEyebrow center>Sessão Estratégica Gratuita</SectionEyebrow>
            <h1 className="font-serif text-white text-4xl md:text-5xl font-normal leading-[1.15]">
              Descubra seu nível de{' '}
              <em className="italic text-gold">protagonismo na liderança</em>
            </h1>
            <p className="text-white/45 text-[15px] leading-[1.8] font-light mt-6">
              Preencha o formulário abaixo e nossa equipe entrará em contato em até 24h para
              agendar sua sessão gratuita.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Form */}
      <section className="bg-off-white py-[80px] px-[5%]">
        <div className="max-w-[1180px] mx-auto">
          <div className="max-w-[680px] mx-auto bg-white p-16 border-t-[3px] border-gold">
            <FadeIn>
              <SectionEyebrow>Preencha o formulário</SectionEyebrow>
              <h2 className="font-serif text-[28px] font-normal text-black mb-2">
                Sua jornada começa aqui
              </h2>
              <p className="text-sm text-neutral-500 mb-10 leading-relaxed">
                Nossa equipe entrará em contato em até 24h para orientar o melhor próximo passo.
              </p>
              <LeadForm />
            </FadeIn>
          </div>

          {/* Trust badges */}
          <div className="max-w-[680px] mx-auto mt-10 grid grid-cols-3 gap-4">
            {[
              { icon: '🔒', text: 'Seus dados estão seguros conosco' },
              { icon: '✓', text: 'Sem compromisso de compra' },
              { icon: '⚡', text: 'Retorno em até 24 horas' },
            ].map((item) => (
              <div key={item.text} className="flex items-center gap-3 text-[12px] text-neutral-500">
                <span>{item.icon}</span>
                <span>{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
