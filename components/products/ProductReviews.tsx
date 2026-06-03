'use client'


import { Star, ThumbsUp } from 'lucide-react'

interface Review {
  id: string
  initials: string
  name: string
  location: string
  rating: number
  title: string
  content: string
  date: string
  helpfulCount?: number
}

interface ProductReviewsProps {
  rating: number
  reviewCount: number
  distribution: {
    5: number
    4: number
    3: number
    2: number
    1: number
  }
  reviews: Review[]
}

export function ProductReviews({ rating, reviewCount, distribution, reviews }: ProductReviewsProps) {
  return (
    <section className="bg-surface px-4 py-20 lg:py-24">
      <div className="mx-auto max-w-7xl">
        
        <div className="mb-16 grid gap-12 lg:grid-cols-[1fr_2fr]">
          
          {/* Summary Column */}
          <div>
            <h2 className="mb-8 font-display text-3xl font-bold text-primary-800">
              Real Experiences
            </h2>
            
            <div className="mb-8 flex items-end gap-4">
              <span className="font-display text-6xl font-bold text-text">{rating}</span>
              <div className="mb-2 flex flex-col">
                <div className="flex text-[#B68B45]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
                <span className="mt-1 text-sm text-text-secondary">Based on {reviewCount} reviews</span>
              </div>
            </div>

            {/* Distribution Bars */}
            <div className="flex flex-col gap-3">
              {[5, 4, 3, 2, 1].map((stars) => {
                const percentage = distribution[stars as keyof typeof distribution]
                return (
                  <div key={stars} className="flex items-center gap-4 text-sm text-text-secondary">
                    <span className="w-4">{stars}★</span>
                    <div className="h-2 flex-1 rounded-full bg-border">
                      <div 
                        className="h-full rounded-full bg-primary-600" 
                        style={{ width: `${percentage}%` }}
                      />
                    </div>
                    <span className="w-8 text-right">{percentage}%</span>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Reviews List */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
            {reviews.map((review) => (
              <div key={review.id} className="flex flex-col rounded-2xl bg-white p-6 shadow-sm">
                
                {/* Review Header */}
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-100 font-bold text-primary-800">
                      {review.initials}
                    </div>
                    <div className="flex flex-col">
                      <span className="font-semibold text-text">{review.name}</span>
                      <span className="text-[11px] uppercase tracking-wider text-text-secondary">{review.location}</span>
                    </div>
                  </div>
                  <span className="text-xs text-text-tertiary">{review.date}</span>
                </div>

                {/* Rating */}
                <div className="mb-3 flex text-[#B68B45]">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`h-3 w-3 ${i < review.rating ? 'fill-current' : 'text-border fill-transparent'}`} 
                    />
                  ))}
                </div>

                {/* Content */}
                <h4 className="mb-2 font-bold text-primary-800">{review.title}</h4>
                <p className="mb-6 flex-1 text-[14px] leading-relaxed text-text-secondary">
                  "{review.content}"
                </p>

                {/* Helpful */}
                {review.helpfulCount !== undefined && (
                  <button className="mt-auto flex w-max items-center gap-2 text-xs font-medium text-text-tertiary transition-colors hover:text-primary">
                    <ThumbsUp className="h-3.5 w-3.5" />
                    Helpful ({review.helpfulCount})
                  </button>
                )}

              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  )
}
