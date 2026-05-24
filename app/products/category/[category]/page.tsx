import { Shield, Truck, Heart, Phone } from 'lucide-react'
import Link from 'next/link'
import { getProductsByCategory, categoryDisplayNames } from '@/lib/products-data'
import ProductCard from '@/components/products/ProductCard'

// Generate dynamic metadata for SEO
export async function generateMetadata({ params }: { params: { category: string } }) {
  const name = categoryDisplayNames[params.category] || params.category.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
  return {
    title: `${name} — Nuvanaah | Recovery Care for Indian Women`,
    description: `Shop ${name} products at Nuvanaah. Clinically informed, beautifully made for women in recovery.`
  }
}

export default function CategoryPage({ params, searchParams }: { params: { category: string }, searchParams: { filter?: string } }) {
  const categorySlug = params.category
  
  // Get products and display name
  const allCategoryProducts = getProductsByCategory(categorySlug)
  const categoryName = categoryDisplayNames[categorySlug] || categorySlug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())

  // Simple filter logic
  const currentFilter = searchParams.filter || 'all'
  
  // Apply filtering (simplified mock implementation)
  const categoryProducts = allCategoryProducts.filter(product => {
    if (currentFilter === 'all') return true;
    // In a real app, products would have tags or sub-categories. 
    // Here we just do a simple string match on the description for demonstration.
    return product.description.toLowerCase().includes(currentFilter.toLowerCase()) || 
           product.name.toLowerCase().includes(currentFilter.toLowerCase());
  })

  // Define filter pills (hardcoded for demonstration as requested)
  const filterPills = [
    { label: 'All Items', value: 'all' },
    { label: 'Headwear', value: 'scarf' },
    { label: 'Relief', value: 'pillow' },
    { label: 'Comfort', value: 'cotton' }
  ]

  return (
    <div className="min-h-screen bg-[#faf7f2]">
      {/* Header Section */}
      <div className="bg-[#884d53] text-white py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight mb-6">
            {categoryName}
          </h1>
          <p className="text-lg sm:text-xl text-white/90 max-w-3xl font-light leading-relaxed">
            Explore our curated collection of {categoryName.toLowerCase()} designed with care and comfort in mind.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        
        {/* Filter Pills */}
        {allCategoryProducts.length > 0 && (
          <div className="flex flex-wrap gap-3 mb-10">
            {filterPills.map(pill => {
              const isActive = currentFilter === pill.value;
              return (
                <Link
                  key={pill.value}
                  href={`/products/category/${categorySlug}?filter=${pill.value}`}
                  className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 border ${
                    isActive 
                      ? 'bg-[#884d53] text-white border-[#884d53] shadow-md' 
                      : 'bg-white text-[#2c1f1a]/80 border-[#ded0bf] hover:border-[#884d53] hover:text-[#884d53]'
                  }`}
                >
                  {pill.label}
                </Link>
              );
            })}
          </div>
        )}

        {/* Products Grid */}
        {categoryProducts.length > 0 ? (
          <>
            <div className="mb-8">
              <h2 className="text-xl font-medium text-[#1c1c18] mb-1">
                {categoryProducts.length} Product{categoryProducts.length !== 1 ? 's' : ''} Available
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16">
              {categoryProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </>
        ) : (
          <div className="bg-white border border-[#ded0bf] rounded-2xl p-12 text-center mb-16 shadow-sm">
            <h2 className="text-2xl font-semibold text-[#1c1c18] mb-4">
              No Products Found
            </h2>
            <p className="text-[#6a5448] mb-8 max-w-md mx-auto">
              We couldn't find any products matching your criteria in this category.
            </p>
            <Link 
              href={`/products/category/${categorySlug}`} 
              className="inline-flex items-center justify-center gap-2 bg-[#884d53] hover:bg-[#6c363c] text-white px-6 py-3 rounded-full font-medium transition-all shadow-sm"
            >
              Clear Filters
            </Link>
          </div>
        )}

        {/* Trust Badges */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="bg-white border border-[#ded0bf] rounded-2xl p-8 hover:border-[#884d53]/40 hover:shadow-md transition-all duration-300">
            <Shield className="w-10 h-10 text-[#884d53] mb-5" />
            <h3 className="font-semibold text-lg mb-2 text-[#1c1c18]">Premium Quality</h3>
            <p className="text-[#6a5448] text-sm leading-relaxed">Carefully selected materials designed specifically for sensitive post-treatment skin.</p>
          </div>
          <div className="bg-white border border-[#ded0bf] rounded-2xl p-8 hover:border-[#884d53]/40 hover:shadow-md transition-all duration-300">
            <Heart className="w-10 h-10 text-[#884d53] mb-5" />
            <h3 className="font-semibold text-lg mb-2 text-[#1c1c18]">Expert Support</h3>
            <p className="text-[#6a5448] text-sm leading-relaxed">Free consultations available with specialists who understand your journey.</p>
          </div>
          <div className="bg-white border border-[#ded0bf] rounded-2xl p-8 hover:border-[#884d53]/40 hover:shadow-md transition-all duration-300">
            <Truck className="w-10 h-10 text-[#884d53] mb-5" />
            <h3 className="font-semibold text-lg mb-2 text-[#1c1c18]">Discreet Delivery</h3>
            <p className="text-[#6a5448] text-sm leading-relaxed">Fast, secure, and discreet shipping straight to your doorstep.</p>
          </div>
        </div>

        {/* Consultation CTA */}
        <div className="bg-[#f2e5e5] border border-[#e8d1d1] rounded-3xl p-8 md:p-14 mb-12 relative overflow-hidden">
          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <Phone className="w-12 h-12 text-[#884d53] mx-auto mb-6 opacity-80" />
            <h2 className="text-3xl font-semibold text-[#1c1c18] mb-4">
              Need help choosing?
            </h2>
            <p className="text-[#524344] text-lg mb-10 max-w-xl mx-auto font-light">
              Our specialists can help you find the perfect products for your specific phase of recovery. Book a free, completely private consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/consultations"
                className="inline-flex items-center justify-center gap-2 bg-[#884d53] hover:bg-[#6c363c] text-white px-8 py-4 rounded-full font-medium transition-all shadow-md hover:shadow-lg"
              >
                <Phone className="w-4 h-4" />
                Book Free Consultation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
