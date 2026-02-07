import Hero from '@/components/homepage/Hero'
import TrustBadges from '@/components/homepage/TrustBadges'
import OurPromise from '@/components/homepage/OurPromise'
import Categories from '@/components/homepage/Categories'
import TestimonialsCarousel from '@/components/homepage/TestimonialsCarousel'
import HowWeHelp from '@/components/homepage/HowWeHelp'
import Partners from '@/components/homepage/Partners'
import Blog from '@/components/homepage/Blog'
import Newsletter from '@/components/homepage/Newsletter'
import Footer from '@/components/homepage/Footer'
import FloatingHelpButton from '@/components/FloatingHelpButton'

export default function Home() {
  return (
    <main>
      {/* Hero with Category Slideshow */}
      <Hero />

      {/* Trust Badges */}
      <TrustBadges />

      {/* Our Promise - Value Propositions */}
      <OurPromise />

      {/* Product Categories */}
      <Categories />

      {/* Customer Testimonials */}
      <TestimonialsCarousel />

      {/* Journey Timeline */}
      <HowWeHelp />

      {/* Partners & Recognition */}
      <Partners />

      {/* Blog/Guides */}
      <Blog />

      {/* Newsletter */}
      <Newsletter />

      {/* Footer */}
      <Footer />

      {/* Floating Help Button */}
      <FloatingHelpButton />
    </main>
  )
}
