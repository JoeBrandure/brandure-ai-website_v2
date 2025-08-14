import React from "react";

type Props = {
  onOpenContact?: () => void;
};

export default function Contact({ onOpenContact }: Props) {
  const openContact = () => {
    if (onOpenContact) return onOpenContact();
    // Fallback: try to open the existing modal/drawer by id or global function
    document.getElementById("contact-modal")?.classList.remove("hidden");
  };

  return (
    <section
      id="contact"
      className="relative min-h-[100vh] flex flex-col justify-center"
    >
      {/* Content wrapper with header gutters */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-12 flex flex-col items-start gap-4">
        <h2 className="section-heading">
          Ready to{' '}
          <span className="accent-blue accent-animated">transform</span>{' '}
          your business?
        </h2>

        <p className="section-subheading text-grey-white">
          Let&apos;s discuss how AI can drive your growth
        </p>

        {/* CTA: use the exact same structure as Partnership */}
        <button
          onClick={openContact}
          style={{ 
            fontSize: '1.5rem', 
            padding: '20px 60px', 
            marginTop: '40px',
            color: 'white',
            background: 'transparent',
            border: '2px solid white',
            borderRadius: '50px',
            cursor: 'pointer',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '12px',
            transition: 'all 0.3s ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'white';
            e.currentTarget.style.color = 'black';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'transparent';
            e.currentTarget.style.color = 'white';
          }}
        >
          Get Started
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="7" y1="17" x2="17" y2="7" />
            <polyline points="7 7 17 7 17 17" />
          </svg>
        </button>
      </div>

      {/* Sticky Footer will be rendered INSIDE this section below */}
      <FooterStickyInsideContact />
    </section>
  );
}

function FooterStickyInsideContact() {
  return (
    <footer
      className="sticky bottom-0 z-10 bg-black/90 backdrop-blur supports-[backdrop-filter]:bg-black/70 border-t border-white/10"
      role="contentinfo"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-12 py-6 grid grid-cols-1 md:grid-cols-3 items-center gap-6">
        {/* Left: Contact (align with header logo gutter) */}
        <div className="text-white">
          <div className="font-medium mb-2">Contact</div>
          <div>
            <a href="mailto:info@brandureai.com" className="underline-offset-4 hover:underline">
              info@brandureai.com
            </a>
          </div>
          {/* Phones: side-by-side on desktop, stacked on mobile */}
          <div className="mt-2 flex flex-col sm:flex-row sm:items-center sm:gap-6 text-sm text-white/80">
            <span>UAE 🇦🇪 +971 585 081 399</span>
            <span>UK 🇬🇧 +44 7969 446 013</span>
          </div>
        </div>

        {/* Center: Legal (centered) */}
        <div className="flex justify-center">
          <div className="flex items-center gap-6 text-sm">
            <a href="/terms-and-conditions" className="underline-offset-4 hover:underline">Terms &amp; Conditions</a>
            <a href="/privacy-policy" className="underline-offset-4 hover:underline">Privacy Policy</a>
          </div>
        </div>

        {/* Right: Follow (align with header CTA gutter) */}
        <div className="flex md:justify-end">
          <div className="text-white">
            <div className="font-medium mb-2 text-right md:text-right">Follow</div>
            <div className="flex md:justify-end">
              <a
                href="https://www.linkedin.com/company/brandureai/"
                target="_blank" rel="noopener noreferrer"
                className="underline-offset-4 hover:underline"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
