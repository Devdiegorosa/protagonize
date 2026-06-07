'use client'
import { useState } from 'react'
import { CheckCircle } from 'lucide-react'

export default function LeadForm() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const data = Object.fromEntries(new FormData(e.currentTarget))
    // TODO: integrar WhatsApp/CRM — ver README
    console.log(data)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="text-center py-10">
        <div className="w-[72px] h-[72px] rounded-full flex items-center justify-center mx-auto mb-7" style={{ border: '2px solid var(--gold)' }}>
          <CheckCircle size={32} style={{ color: 'var(--gold)' }} />
        </div>
        <h3 className="font-serif text-3xl font-normal mb-4">Sessão agendada com sucesso!</h3>
        <p className="text-[15px] leading-relaxed mb-2" style={{ color: 'var(--gray-600)' }}>
          Recebemos suas informações. Nossa equipe entrará em contato em até 24 horas.
        </p>
        <p className="text-sm mt-2" style={{ color: 'var(--gray-400)' }}>Fique de olho no seu e-mail e WhatsApp.</p>
        <a href="/" className="btn-primary mt-10 inline-flex">Voltar ao início →</a>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
        <div><label className="form-label">Nome completo</label><input name="name" required className="form-input" placeholder="Seu nome" /></div>
        <div><label className="form-label">E-mail</label><input name="email" type="email" required className="form-input" placeholder="seu@email.com" /></div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
        <div><label className="form-label">WhatsApp</label><input name="whatsapp" className="form-input" placeholder="(11) 99999-9999" /></div>
        <div><label className="form-label">Cargo / Profissão</label><input name="role" className="form-input" placeholder="Ex: Gerente, CEO, Líder..." /></div>
      </div>
      <div className="mb-6">
        <label className="form-label">Principal desafio atual</label>
        <textarea name="challenge" className="form-textarea" placeholder="Descreva o que mais te trava hoje na sua liderança ou carreira..." />
      </div>
      <div className="mb-8">
        <label className="form-label">Qual programa te interessa?</label>
        <select name="interest" className="form-input cursor-pointer">
          <option value="">Selecione uma opção</option>
          <option value="online">Programa Online — R$ 997</option>
          <option value="group">Mentoria em Grupo — R$ 2.997</option>
          <option value="individual">Mentoria Individual — R$ 9.997</option>
          <option value="unknown">Não sei — quero orientação</option>
        </select>
      </div>
      <button type="submit" className="form-submit">Agendar Minha Sessão Estratégica →</button>
    </form>
  )
}
