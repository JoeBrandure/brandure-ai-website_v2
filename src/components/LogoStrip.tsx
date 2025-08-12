'use client'
import { motion } from 'framer-motion'

export default function LogoStrip() {
  const logos = [
    { src: '/Logos/brandure-ai-white-2.png', alt: 'Brandure AI' },
    { src: '/Logos/brandure-ai-white.png', alt: 'Brandure AI' },
    { src: '/Logos/brandure-ai-white-2.png', alt: 'Brandure AI' },
    { src: '/Logos/brandure-ai-white.png', alt: 'Brandure AI' },
  ]

  return (
    <section className="py-[clamp(56px,8vw,120px)]">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h3 className="text-[clamp(20px,2.5vw,28px)] font-light muted">
            Trusted by leading organizations
          </h3>
        </motion.div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
          {logos.map((logo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex items-center justify-center"
            >
              <div className="w-24 h-16 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300">
                <img 
                  src={logo.src} 
                  alt={logo.alt} 
                  className="max-h-12 max-w-full object-contain"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
