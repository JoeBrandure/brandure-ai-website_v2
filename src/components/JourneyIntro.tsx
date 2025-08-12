'use client'
import { motion } from 'framer-motion'

export default function JourneyIntro() {
  return (
    <section className="py-[clamp(56px,8vw,120px)]">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h2 className="text-[clamp(28px,4vw,48px)] font-light leading-tight mb-6">
            We put AI at the center of <span className="grad-text breath">everything</span> we do.
          </h2>
          <p className="text-lg muted">
            From opportunity identification to education and custom development
          </p>
        </motion.div>
      </div>
    </section>
  )
}
