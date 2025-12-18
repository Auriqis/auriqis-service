import { FeatureSteps } from "@/components/blocks/feature-section"

const features = [
  { 
    step: 'Step 1', 
    title: 'Speed Without Compromise',
    content: 'Delivering projects in days, not months, with clarity at every step.',
    text: 'Most teams slow down under *complexity*. We don\'t.\nOur *Velocity Model* combines agile execution with pre-built, secure foundations, allowing us to move fast without sacrificing quality. What typically takes months is delivered in days, with *clarity* at every step.',
  },
  { 
    step: 'Step 2',
    title: 'Proven Expertise, Not Guesswork',
    content: 'Certified professionals ensuring reliability and accountability.',
    text: 'Execution shouldn\'t feel *uncertain*.\nEvery project at *Auriqis* is handled by *certified professionals* with real-world corporate experience, bringing consistency, accountability, and production-grade thinking from day one. You get *reliability*, not experimentation.',
  },
  { 
    step: 'Step 3',
    title: 'Built for the Future, Not the Past',
    content: 'Modern AI-driven systems designed to scale with your business.',
    text: 'Technology should scale with you, not hold you back.\nWe design and build modern *AI-driven* and *serverless cloud systems* that are easy to scale, cost-efficient to run, and resilient by design, So your platform stays *relevant* as your business grows.',
  },
]

export function WhyArq() {
  return (
      <FeatureSteps 
        features={features}
        title="Why Choose Auriqis?"
        autoPlayInterval={4000}
        imageHeight="h-[500px]"
      />
  )
}