export default function ProductPageSkeleton() {
  return (
    <>
      <style>{`
        @keyframes shimmer {
          0%, 100% { opacity: 0.6; }
          50% { opacity: 1; }
        }
        .animate-shimmer {
          animation: shimmer 1.4s ease-in-out infinite;
        }
      `}</style>
      <div 
        className="min-h-screen bg-[#faf7f2]" 
        aria-label="Loading product" 
        aria-busy="true"
      >
        {/* Breadcrumb Skeleton */}
        <div className="bg-white border-b border-[rgba(28,28,24,0.1)]">
          <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6 lg:px-8">
            <div className="h-5 w-48 rounded bg-[#f5f0e8] animate-shimmer" />
          </div>
        </div>

        {/* Main Product Section Skeleton */}
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Left: Image Placeholder */}
            <div className="aspect-square w-full rounded-lg bg-[#f5f0e8] animate-shimmer" />

            {/* Right: Content Placeholders */}
            <div className="space-y-8 lg:pt-4">
              <div className="space-y-4">
                {/* Title Bar (60% width) */}
                <div className="h-10 w-[60%] rounded bg-[#f5f0e8] animate-shimmer" />
                {/* Price Bar (30% width) */}
                <div className="h-8 w-[30%] rounded bg-[#f5f0e8] animate-shimmer" />
              </div>

              {/* Description lines */}
              <div className="space-y-3 pt-4">
                <div className="h-4 w-full rounded bg-[#f5f0e8] animate-shimmer" />
                <div className="h-4 w-[90%] rounded bg-[#f5f0e8] animate-shimmer" />
                <div className="h-4 w-[75%] rounded bg-[#f5f0e8] animate-shimmer" />
              </div>
              
              {/* Button Skeleton */}
              <div className="mt-8 h-14 w-full rounded-2xl bg-[#f5f0e8] animate-shimmer" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
