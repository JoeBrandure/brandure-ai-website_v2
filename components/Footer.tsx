'use client';

export default function Footer() {
  return (
    <section id="contact" className="section-snap">
      <div className="content-wrapper">
        {/* Heading centered */}
        <h2 className="section-heading" style={{ textAlign: 'center', marginBottom: '120px' }}>
          Accelerate your <span className="animate-text-blue">AI Adoption</span> Journey
        </h2>

        {/* Footer at bottom */}
        <footer className="relative">
          <div className="max-w-7xl mx-auto px-12">
            <div className="flex justify-between items-start">
              {/* Left column - align with header logo */}
              <div className="w-1/3">
                <h3 className="text-[14px] font-semibold mb-5 text-[#C0C0C0] uppercase">Contact</h3>
                <a href="mailto:info@brandureai.com" className="block text-white text-[14px] mb-3 animate-text-white">
                  info@brandureai.com
                </a>
                <div className="flex gap-4 flex-wrap">
                  <span className="text-white text-[14px]">UAE 🇦🇪 +971 585 081 399</span>
                  <span className="text-white text-[14px]">UK 🇬🇧 +44 7969 446 013</span>
                </div>
              </div>

              {/* Center - Terms & Privacy */}
              <div className="w-1/3 text-center">
                <a href="/brandure-terms.pdf" target="_blank" className="text-white text-[14px]">
                  Terms & Conditions
                </a>
                <span className="mx-4 text-white">|</span>
                <a href="/brandure-legal.pdf" target="_blank" className="text-white text-[14px]">
                  Privacy Policy
                </a>
              </div>

              {/* Right column - align with header CTA */}
              <div className="w-1/3 text-right">
                <h3 className="text-[14px] font-semibold mb-5 text-[#C0C0C0] uppercase">Follow</h3>
                <a 
                  href="https://linkedin.com/company/brandureai" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white text-[14px]"
                >
                  LinkedIn
                </a>
              </div>
            </div>

            {/* Copyright */}
            <div className="text-center mt-10 text-[#C0C0C0] text-[12px]">
              © 2025 Brandure AI. All rights reserved.
            </div>
          </div>
        </footer>
      </div>
    </section>
  );
}
