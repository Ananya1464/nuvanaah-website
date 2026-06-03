'use client'

import React, { useState } from 'react'

interface Tab {
  id: string
  label: string
  content: string | React.ReactNode
}

interface ProductTabsProps {
  tabs: Tab[]
}

export function ProductTabs({ tabs }: ProductTabsProps) {
  const [activeTab, setActiveTab] = useState(tabs[0].id)

  return (
    <section className="bg-white px-4 py-16">
      <div className="mx-auto max-w-3xl">
        
        {/* Tab Headers - Scrollable on mobile */}
        <div className="flex w-full overflow-x-auto border-b border-border no-scrollbar">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`whitespace-nowrap px-6 py-4 text-sm font-semibold transition-colors ${
                activeTab === tab.id
                  ? 'border-b-2 border-primary text-primary-800'
                  : 'text-text-secondary hover:text-primary-800'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="py-8 text-[15px] leading-relaxed text-text-secondary">
          {tabs.map((tab) => (
            <div
              key={tab.id}
              className={activeTab === tab.id ? 'block fade-in-up' : 'hidden'}
            >
              {typeof tab.content === 'string' 
                ? tab.content.split('\\n').map((line, i) => (
                    <p key={i} className="mb-4 last:mb-0">
                      {line}
                    </p>
                  ))
                : tab.content
              }
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
