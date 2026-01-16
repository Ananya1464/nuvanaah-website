'use client'

export default function BrandStatement() {
  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Gold Quote Mark */}
        <div className="text-6xl text-amber-500 mb-6 font-light">"</div>

        {/* Main Statement */}
        <h2 className="text-3xl sm:text-4xl font-light text-gray-800 mb-6 leading-relaxed">
          We believe care should feel{' '}
          <span className="font-semibold">human</span>.
        </h2>

        {/* Subtitle */}
        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          Every product is chosen with empathy, dignity, and comfort in mind. 
          Not because it's a business, but because you matter.
        </p>

        {/* Divider */}
        <div className="w-16 h-1 bg-gradient-to-r from-amber-500 to-amber-600 mx-auto rounded-full"></div>
      </div>
    </section>
  )
}
