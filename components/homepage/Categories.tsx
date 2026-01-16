'use client'

import Link from 'next/link'

export default function Categories() {
  const categories = [
    {
      name: 'Post-Surgery Essentials',
      shortName: 'Post-Surgery Essentials',
      description: 'Mastectomy bras with prosthesis pockets, silicone breast forms, post-surgery camisoles with drain management, drainage bag holders, shapewear with breast form support.',
      productsCount: '6 Products',
      image: '',
      link: '/products/category/mastectomy'
    },
    {
      name: 'Chemo Comfort Wear',
      shortName: 'Chemo Comfort Wear',
      description: 'Port access shirts for easy chemo infusions, port protection pillows for seatbelt comfort, scalp cooling caps for hair preservation, medical wig grip bands.',
      productsCount: '4 Products',
      image: '',
      link: '/products/category/chemotherapy'
    },
    {
      name: 'Compression & Recovery',
      shortName: 'Compression & Recovery',
      description: 'Medical-grade compression sleeves (20-30mmHg) for post-mastectomy lymphedema, arm swelling after lymph node removal, post-surgery recovery support.',
      productsCount: '1 Product',
      image: '',
      link: '/products/category/lymphedema'
    },
    {
      name: 'Wig Care & Accessories',
      shortName: 'Wig Care & Accessories',
      description: 'Non-slip wig grip bands for secure hold on bald scalps, wig care kits with travel stands, gentle shampoos and maintenance tools for chemotherapy wigs.',
      productsCount: '2 Products',
      image: '',
      link: '/products/category/wigs'
    },
  ]

  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-light text-gray-900 mb-4">
            Shop by <span className="font-semibold text-teal-600">Need</span>
          </h2>
          <p className="text-lg text-gray-600">Complete care solutions for every stage of your journey</p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {categories.map((category) => (
            <Link
              key={category.name}
              href={category.link}
              className="group"
            >
              <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-teal-200">
                {/* Image Container */}
                <div className="relative overflow-hidden h-64 bg-gradient-to-br from-teal-50 to-cream-50">
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-teal-600/20 via-transparent to-transparent"></div>

                  {/* Products Count Badge */}
                  <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full shadow-sm">
                    <p className="text-sm font-semibold text-teal-600">{category.productsCount}</p>
                  </div>

                  {/* Category Name on Image */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-2xl font-semibold text-gray-900 mb-1">
                      {category.shortName}
                    </h3>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {category.description}
                  </p>
                  <div className="flex items-center text-teal-600 font-semibold group-hover:text-teal-700">
                    Shop {category.shortName} Products
                    <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
