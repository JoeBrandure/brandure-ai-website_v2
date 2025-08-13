'use client';

export default function Footer() {
  return (
    <section id="contact" className="section-snap">
      <div className="content-wrapper">
        {/* Heading centered */}
        <h2 className="section-heading" style={{ textAlign: 'center', marginBottom: '120px' }}>
          Accelerate your <span className="brandure-animate-blue">AI Adoption</span> Journey
        </h2>

        {/* Footer at bottom */}
        <div style={{ 
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          borderTop: '1px solid rgba(255, 255, 255, 0.1)',
          padding: '16px 40px 12px 40px',
          maxHeight: '120px',
        }}>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            maxWidth: '1200px',
            margin: '0 auto',
            flexWrap: 'wrap',
            gap: '40px'
          }}>

            {/* Left - Contact */}
            <div style={{ textAlign: 'left' }}>
              <h3 style={{
                fontSize: '14px',
                fontWeight: 600,
                marginBottom: '20px',
                color: '#C0C0C0',
                textTransform: 'uppercase'
              }}>
                Contact
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <a
                  href="mailto:info@brandureai.com"
                  className="brandure-animate-white"
                  style={{ color: 'white', textDecoration: 'none', fontSize: '14px' }}
                >
                  info@brandureai.com
                </a>
                <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
                  <a
                    href="https://wa.me/971585081399"
                    className="brandure-animate-white"
                    style={{ color: 'white', textDecoration: 'none', fontSize: '14px' }}
                  >
                    UAE 🇦🇪 +971 585 081 399
                  </a>
                  <a
                    href="https://wa.me/447969446013"
                    className="brandure-animate-white"
                    style={{ color: 'white', textDecoration: 'none', fontSize: '14px' }}
                  >
                    UK 🇬🇧 +44 7969 446 013
                  </a>
                </div>
              </div>
            </div>

            {/* Center - Legal */}
            <div style={{ textAlign: 'center' }}>
              <div style={{ display: 'flex', gap: '30px' }}>
                <a
                  href="/brandure-terms.pdf"
                  target="_blank"
                  style={{ color: 'white', textDecoration: 'none', fontSize: '14px' }}
                >
                  Terms & Conditions
                </a>
                <a
                  href="/brandure-legal.pdf"
                  target="_blank"
                  style={{ color: 'white', textDecoration: 'none', fontSize: '14px' }}
                >
                  Privacy Policy
                </a>
              </div>
            </div>

            {/* Right - Follow */}
            <div style={{ textAlign: 'right' }}>
              <h3 style={{
                fontSize: '14px',
                fontWeight: 600,
                marginBottom: '20px',
                color: '#C0C0C0',
                textTransform: 'uppercase'
              }}>
                Follow Us
              </h3>
              <a
                href="https://linkedin.com/company/brandureai"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: 'white', textDecoration: 'none', fontSize: '14px' }}
              >
                LinkedIn
              </a>
            </div>
          </div>

          {/* Copyright */}
          <div style={{
            textAlign: 'center',
            marginTop: '40px',
            color: '#C0C0C0',
            fontSize: '12px'
          }}>
            © 2025 Brandure AI. All rights reserved.
          </div>
        </div>
      </div>
    </section>
  );
}
