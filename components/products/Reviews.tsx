'use client'

import { Star, ThumbsUp } from 'lucide-react'

interface ReviewProps {
  author: string
  rating: number
  date: string
  title: string
  content: string
  helpful: number
  verified: boolean
}

export default function Reviews() {
  const reviews: ReviewProps[] = [
    {
      author: 'Priya M.',
      rating: 5,
      date: 'January 5, 2026',
      title: 'Life-changing comfort',
      content: 'I was hesitant about ordering online, but this bra arrived quickly and it is exactly what I needed. The comfort level is unmatched. Thank you Nuvanaah!',
      helpful: 24,
      verified: true,
    },
    {
      author: 'Anjali D.',
      rating: 5,
      date: 'December 28, 2025',
      title: 'Perfect fit, amazing support',
      content: 'The sizing was accurate and the quality is premium. I appreciate the gentle approach to the design. Highly recommend!',
      helpful: 18,
      verified: true,
    },
    {
      author: 'Meera S.',
      rating: 4,
      date: 'December 20, 2025',
      title: 'Great product, excellent service',
      content: 'Very comfortable bra. The only reason I gave 4 stars instead of 5 is because the color is slightly different from the picture, but still looks great.',
      helpful: 12,
      verified: true,
    },
  ]

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2 className="text-3xl font-light text-gray-800 mb-8">
        Customer <span className="font-semibold">Reviews</span>
      </h2>

      <div className="space-y-6">
        {reviews.map((review, idx) => (
          <div
            key={idx}
            className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition"
          >
            {/* Header */}
            <div className="flex items-start justify-between mb-4">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < review.rating
                            ? 'fill-amber-500 text-amber-500'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  {review.verified && (
                    <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">
                      ✓ Verified Purchase
                    </span>
                  )}
                </div>
                <h3 className="font-semibold text-gray-800">{review.title}</h3>
                <p className="text-xs text-gray-500">
                  by {review.author} • {review.date}
                </p>
              </div>
            </div>

            {/* Content */}
            <p className="text-gray-700 mb-4">{review.content}</p>

            {/* Helpful */}
            <div className="flex items-center gap-4">
              <button className="flex items-center gap-2 text-gray-600 hover:text-amber-600 transition">
                <ThumbsUp className="w-4 h-4" />
                <span className="text-sm">Helpful ({review.helpful})</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Load More */}
      <button className="w-full mt-8 py-3 border-2 border-amber-600 text-amber-600 hover:bg-amber-50 rounded-lg font-semibold transition">
        Load More Reviews
      </button>
    </div>
  )
}
