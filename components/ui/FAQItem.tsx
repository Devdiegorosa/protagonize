'use client'
import { useState } from 'react'
import { Plus } from 'lucide-react'
import { cn } from '@/lib/utils'

export function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="faq-item">
      <button onClick={() => setOpen(!open)} className={cn('faq-q', open && 'open')}>
        <span>{q}</span>
        <span className="faq-icon"><Plus size={16} /></span>
      </button>
      <div className={cn('faq-a', open && 'open')}>{a}</div>
    </div>
  )
}
