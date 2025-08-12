'use client'
import { motion } from 'framer-motion'

const steps = [
  {
    label: 'IDENTIFY',
    title: 'AI Opportunity Discovery',
    description: 'We analyze your business processes to identify high-impact AI implementation opportunities.'
  },
  {
    label: 'EDUCATE',
    title: 'AI Strategy & Training',
    description: 'We educate your team on AI capabilities and develop a comprehensive implementation strategy.'
  },
  {
    label: 'DEVELOP',
    title: 'Custom AI Solutions',
    description: 'We build and deploy tailored AI solutions that integrate seamlessly with your existing systems.'
  }
]

export default function JourneySteps() {
  return (
    <div className="space-y-32">
      {steps.map((step, index) => (
        <section key={index} className="py-[clamp(56px,8vw,120px)]">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Left side - Label and Circle */}
              <div className="relative">
                <div className="text-sm muted uppercase tracking-widest mb-8">{step.label}</div>
                <div className="relative w-32 h-32 mx-auto lg:mx-0">
                  {/* Animated ring */}
                  <div className="absolute inset-0 rounded-full border-2 border-gradient-to-r from-brand-1 to-brand-2 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-brand-1 to-brand-2 opacity-20 animate-pulse"></div>
                  </div>
                  {/* Inner circle */}
                  <div className="absolute inset-4 rounded-full bg-gradient-to-r from-brand-1 to-brand-2 opacity-10"></div>
                  {/* Light sweep effect */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/20 to-transparent animate-[sweep_3s_ease-in-out_infinite]"></div>
                </div>
              </div>
              
              {/* Right side - Content */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h3 className="text-[clamp(24px,3vw,36px)] font-light leading-tight mb-4">
                  {step.title}
                </h3>
                <p className="text-lg muted leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            </div>
          </div>
        </section>
      ))}
      
      <style jsx>{`
        @keyframes sweep {
          0%, 100% { transform: translateX(-100%) rotate(45deg); }
          50% { transform: translateX(100%) rotate(45deg); }
        }
      `}</style>
    </div>
  )
}
