import Hero from '@/components/homepage/Hero'
import OpeningContent from '@/components/homepage/OpeningContent'
import WhyChooseUs from '@/components/homepage/WhyChooseUs'
import TrustBadges from '@/components/homepage/TrustBadges'
import Categories from '@/components/homepage/Categories'
import BrandStatement from '@/components/homepage/BrandStatement'
import Testimonials from '@/components/homepage/Testimonials'
import Partners from '@/components/homepage/Partners'
import Blog from '@/components/homepage/Blog'
import Newsletter from '@/components/homepage/Newsletter'
import Footer from '@/components/homepage/Footer'

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <Hero />

      {/* Opening Content - Critical for SEO */}
      <OpeningContent />

      {/* Why Choose Nuvanaah */}
      <WhyChooseUs />

      {/* Categories */}
      <Categories />

      {/* Brand Statement */}
      <BrandStatement />

      {/* Testimonials */}
      <Testimonials />

      {/* Partners */}
      <Partners />

      {/* Blog/Guides */}
      <Blog />

      {/* Newsletter */}
      <Newsletter />

      {/* Footer */}
      <Footer />
    </main>
  )
}
