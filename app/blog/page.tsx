import type { Metadata } from 'next'
import Image from 'next/image'
import { FadeIn, SectionEyebrow, PageHero, CTASection } from '@/components/ui/index'
import { blogPosts } from '@/data'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Blog | Protagonize Mentoria',
  description: 'Artigos sobre liderança, inteligência emocional, alta performance, gestão de carreira e desenvolvimento humano.',
}

const categories = ['Todos', 'Liderança', 'Inteligência Emocional', 'Alta Performance', 'Gestão de Carreira', 'Saúde Mental', 'Protagonismo']

export default function BlogPage() {
  return (
    <>
      <PageHero
        eyebrow="Blog Protagonize"
        title={<>Liderança, carreira e <em style={{ fontStyle: 'italic', color: 'var(--gold)' }}>desenvolvimento humano</em></>}
      />

      <section style={{ background: 'var(--white)', padding: '120px 5%' }}>
        <div className="max-w-[1180px] mx-auto">

          {/* Filtros de categoria */}
          <FadeIn>
            <div className="flex gap-3 flex-wrap mb-[72px]">
              {categories.map((cat, i) => (
                <button
                  key={cat}
                  className="blog-cat-filter"
                  style={i === 0 ? { background: 'var(--gold)', color: 'var(--black)', borderColor: 'var(--gold)' } : {}}
                >
                  {cat}
                </button>
              ))}
            </div>
          </FadeIn>

          {/* Grid de posts */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, i) => (
              <FadeIn key={post.slug} delay={i * 0.07}>
                <article className="blog-card group cursor-pointer">

                  {/* Imagem */}
                  <div className="overflow-hidden mb-6" style={{ position: 'relative', height: 220 }}>
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                    />
                    <div style={{
                      position: 'absolute', bottom: 0, left: 0,
                      background: 'var(--gold)', color: 'var(--black)',
                      fontSize: 10, letterSpacing: 2, textTransform: 'uppercase',
                      padding: '5px 14px', fontWeight: 600,
                    }}>
                      {post.category}
                    </div>
                  </div>

                  {/* Meta */}
                  <div style={{ fontSize: 11, letterSpacing: 1, color: 'var(--gray-400)', marginBottom: 10 }}>
                    {post.date} · {post.readTime} · {post.author}
                  </div>

                  {/* Título */}
                  <h3 className="blog-title" style={{ fontFamily: 'var(--font-serif)', fontSize: 20, fontWeight: 500, lineHeight: 1.35, marginBottom: 12 }}>
                    {post.title}
                  </h3>

                  {/* Excerpt */}
                  <p style={{ fontSize: 13, color: 'var(--gray-600)', lineHeight: 1.7, marginBottom: 16 }}>
                    {post.excerpt}
                  </p>

                  {/* CTA */}
                  <div style={{ fontSize: 12, fontWeight: 600, letterSpacing: 1, textTransform: 'uppercase', color: 'var(--gold)', display: 'flex', alignItems: 'center', gap: 6 }}>
                    Ler artigo <span>→</span>
                  </div>

                </article>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </>
  )
}
