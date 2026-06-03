'use client'



interface Feature {
  icon: string | React.ReactNode
  title: string
  description: string
}

interface ProductStoryProps {
  title: string
  content: string | React.ReactNode
  features: Feature[]
  columns?: 3 | 4
}

export function ProductStory({ title, content, features, columns = 3 }: ProductStoryProps) {
  const colClass = columns === 4 
    ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4' 
    : 'grid-cols-1 sm:grid-cols-3'

  return (
    <section className="bg-surface px-4 py-20 lg:py-24">
      <div className="mx-auto max-w-4xl">
        
        {/* Story Text */}
        <div className="mb-16 text-center sm:text-left">
          <h2 className="mb-6 font-display text-3xl font-bold text-primary-800 sm:text-4xl">
            {title}
          </h2>
          <div className="space-y-4 text-[16px] leading-relaxed text-text-secondary md:text-lg">
            {typeof content === 'string' 
              ? content.split('\\n\\n').map((para, i) => <p key={i}>{para}</p>)
              : content
            }
          </div>
        </div>

        {/* Feature Columns */}
        <div className={`grid gap-8 ${colClass}`}>
          {features.map((feature, i) => (
            <div key={i} className="flex flex-col items-center rounded-2xl bg-white p-6 text-center shadow-sm sm:items-start sm:text-left">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-secondary-container text-2xl text-secondary">
                {feature.icon}
              </div>
              <h3 className="mb-2 font-semibold text-primary-800">{feature.title}</h3>
              <p className="text-[14px] leading-relaxed text-text-secondary">{feature.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
