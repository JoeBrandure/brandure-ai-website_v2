'use client';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-16">
      <div className="max-w-7xl mx-auto px-12">
        <div className="grid grid-cols-3 gap-8">
          {/* Left Column - Contact (align with header logo) */}
          <div>
            <h3 className="text-[#D9D9D9] uppercase mb-4">Contact</h3>
            <a href="mailto:info@brandureai.com" className="animate-text hover:text-[#00D9FF]">
              info@brandureai.com
            </a>
            <div className="flex gap-4 mt-4">
              <span>UAE 🇦🇪 +971 585 081 399</span>
              <span>UK 🇬🇧 +44 7969 446 013</span>
            </div>
          </div>

          {/* Center Column - Legal */}
          <div className="text-center">
            <a href="/terms" className="text-[#D9D9D9] hover:text-white">Terms & Conditions</a>
            <span className="mx-4 text-[#D9D9D9]">|</span>
            <a href="/privacy" className="text-[#D9D9D9] hover:text-white">Privacy Policy</a>
          </div>

          {/* Right Column - Follow (align with header CTA) */}
          <div className="text-right">
            <h3 className="text-[#D9D9D9] uppercase mb-4">Follow</h3>
            <a href="#" className="block text-[#D9D9D9] hover:text-white mb-2">LinkedIn</a>
            <a href="#" className="block text-[#D9D9D9] hover:text-white">Twitter</a>
          </div>
        </div>
        
        <div className="text-center mt-12 pt-8 border-t border-gray-800">
          <p className="text-[#D9D9D9]">© 2025 Brandure AI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
