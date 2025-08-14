

export default function Footer() {
  return (
    <footer
      className="absolute inset-x-0 bottom-0 z-10"
      aria-label="Site footer"
    >
      <div className="w-full border-t border-white/10 bg-transparent">
        <div className="mx-auto w-full max-w-6xl px-10 md:px-[40px] py-6 md:py-8 flex items-start justify-between gap-6">
          {/* Left: Contact block */}
          <div className="min-w-0">
            <div className="text-xs uppercase tracking-wider text-gray-400">Contact</div>
            <a href="mailto:info@brandureai.com" className="block text-white hover:opacity-90 mt-2 animate-white-accent">
              info@brandureai.com
            </a>
            <div className="mt-2 flex flex-wrap items-center gap-x-6 gap-y-1 text-gray-300">
              <span>UAE 🇦🇪 +971 585 081 399</span>
              <span>UK 🇬🇧 +44 7969 446 013</span>
            </div>
          </div>

          {/* Center: Policies (always centered overall) */}
          <div className="flex-1 hidden md:flex items-center justify-center text-gray-300">
            <div className="flex items-center gap-6">
              <a href="/terms-and-conditions" className="hover:opacity-90">Terms &amp; Conditions</a>
              <a href="/privacy-policy" className="hover:opacity-90">Privacy Policy</a>
            </div>
          </div>

          {/* Right: Follow */}
          <div className="min-w-0 text-right">
            <div className="text-xs uppercase tracking-wider text-gray-400">Follow us</div>
            <a
              href="https://www.linkedin.com/company/brandure/"
              target="_blank" rel="noopener noreferrer"
              className="block text-white hover:opacity-90 mt-2"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>

      {/* Mobile layout: show policies centered below when <md */}
      <div className="md:hidden mx-auto w-full max-w-6xl px-10 py-4 flex items-center justify-center text-gray-300">
        <div className="flex items-center gap-6">
          <a href="/terms-and-conditions" className="hover:opacity-90">Terms &amp; Conditions</a>
          <a href="/privacy-policy" className="hover:opacity-90">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
}
