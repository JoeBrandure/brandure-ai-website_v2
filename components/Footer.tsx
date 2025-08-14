import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-neutral-800 bg-black text-white">
      <div className="py-12 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-start" style={{ paddingLeft: '40px', paddingRight: '40px' }}>
        {/* Left: Contact */}
        <div>
          <div className="text-xs uppercase tracking-wider text-neutral-400 mb-3">Contact</div>
          <div className="space-y-2">
            <a href="mailto:info@brandureai.com" className="hover:opacity-90 accent-animated">info@brandureai.com</a>
            <div className="flex flex-col sm:flex-row sm:gap-6 gap-y-1 text-sm text-neutral-300">
              <span>UAE 🇦🇪 +971 585 081 399</span>
              <span>UK 🇬🇧 +44 7969 446 013</span>
            </div>
          </div>
        </div>

        {/* Center: Legal */}
        <div className="text-center">
          <div className="inline-flex flex-col gap-2 text-sm">
            <Link href="/brandure-terms.pdf" target="_blank" className="hover:opacity-90">Terms &amp; Conditions</Link>
            <Link href="/brandure-legal.pdf" target="_blank" className="hover:opacity-90">Privacy Policy</Link>
          </div>
        </div>

        {/* Right: Follow */}
        <div className="md:text-right">
          <div className="text-xs uppercase tracking-wider text-neutral-400 mb-3">Follow</div>
          <div>
            <a href="https://www.linkedin.com/company/brandure-ai/" target="_blank" rel="noopener noreferrer" className="hover:opacity-90">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
