'use client'



import Image from 'next/image'
import Link from 'next/link'

interface RelatedProduct {
  id: string
  name: string
  slug: string
  price: string
  image: string
  category: string
}

interface RelatedArticle {
  id: string
  title: string
  slug: string
  image: string
  category: string
}

interface ProductRelatedProps {
  products: RelatedProduct[]
  articles: RelatedArticle[]
}

export function ProductRelated({ products, articles }: ProductRelatedProps) {
  return (
    <section className="bg-white px-4 py-20 lg:py-24">
      <div className="mx-auto max-w-7xl">
        
        {/* Related Products */}
        <div className="mb-20">
          <h2 className="mb-10 font-display text-2xl font-bold text-primary-800 lg:text-3xl">
            You may also like
          </h2>
          <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
            {products.map((product) => (
              <Link key={product.id} href={`/products/${product.slug}`} className="group flex flex-col">
                <div className="relative mb-4 aspect-square w-full overflow-hidden rounded-2xl bg-surface">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <span className="mb-1 text-[10px] font-bold uppercase tracking-widest text-text-tertiary">
                  {product.category}
                </span>
                <h3 className="mb-1 font-semibold text-text group-hover:text-primary transition-colors">
                  {product.name}
                </h3>
                <span className="text-sm font-medium text-primary-700">
                  {product.price === 'TBD' ? 'Price TBD' : `₹${product.price}`}
                </span>
              </Link>
            ))}
          </div>
        </div>

        {/* Related Articles */}
        <div>
          <h2 className="mb-10 font-display text-2xl font-bold text-primary-800 lg:text-3xl">
            Read before you buy
          </h2>
          <div className="grid gap-6 sm:grid-cols-2">
            {articles.map((article) => (
              <Link key={article.id} href={`/blog/${article.slug}`} className="group flex flex-col overflow-hidden rounded-2xl bg-surface sm:flex-row">
                <div className="relative aspect-[4/3] w-full sm:w-2/5">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    sizes="(max-width: 640px) 100vw, 40vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col justify-center p-6 lg:p-8">
                  <span className="mb-3 text-[10px] font-bold uppercase tracking-widest text-secondary">
                    {article.category}
                  </span>
                  <h3 className="font-display text-xl font-bold leading-snug text-primary-800 group-hover:text-primary transition-colors">
                    {article.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
