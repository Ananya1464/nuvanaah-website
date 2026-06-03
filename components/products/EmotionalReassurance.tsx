'use client'




export type ReassuranceType = 'general' | 'wigs' | 'post-surgery' | 'decision-fatigue'

interface EmotionalReassuranceProps {
  type?: ReassuranceType
  customText?: string
  className?: string
}

export function EmotionalReassurance({ type = 'general', customText, className = '' }: EmotionalReassuranceProps) {
  // Pre-defined brand-approved empathy blocks
  const contentMap: Record<ReassuranceType, string[]> = {
    'general': [
      "Every recovery journey is different.",
      "Choose what feels comfortable for your body, your pace, and your version of healing."
    ],
    'post-surgery': [
      "There is no right way to heal.",
      "Only what helps you feel supported, comfortable, and like yourself again."
    ],
    'decision-fatigue': [
      "You do not need to decide everything today.",
      "Our care team is here whenever you feel ready."
    ],
    'wigs': [
      "Some women choose wigs. Some choose scarves. Some choose both.",
      "There is no correct path — only the one that feels most like you."
    ]
  }

  const lines = customText ? customText.split('\\n') : contentMap[type]

  return (
    <div className={`mx-auto max-w-3xl px-4 py-16 text-center ${className}`}>
      <div className="mx-auto mb-6 h-px w-16 bg-primary-200" />
      <div className="flex flex-col gap-2">
        {lines.map((line, i) => (
          <p 
            key={i} 
            className={`font-display text-xl text-primary-800 sm:text-2xl ${
              i === 0 ? 'font-medium' : 'font-light italic text-primary-600'
            }`}
          >
            {line}
          </p>
        ))}
      </div>
      <div className="mx-auto mt-6 h-px w-16 bg-primary-200" />
    </div>
  )
}
